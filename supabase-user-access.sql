-- Controle simples de acesso pago para testes
-- Execute todo este arquivo no SQL Editor do Supabase

create table if not exists public.user_access (
  user_id uuid primary key references auth.users(id) on delete cascade,
  pago boolean not null default false,
  plano text not null default 'free',
  curso text not null default 'soldado-cabo',
  updated_at timestamptz not null default now()
);

alter table public.user_access
add column if not exists curso text not null default 'soldado-cabo';

create or replace function public.handle_new_user_access()
returns trigger
language plpgsql
security definer
as $$
begin
  insert into public.user_access (user_id, pago, plano, curso)
  values (new.id, false, 'free', 'soldado-cabo')
  on conflict (user_id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_access on auth.users;

create trigger on_auth_user_created_access
after insert on auth.users
for each row
execute function public.handle_new_user_access();

alter table public.user_access enable row level security;

-- Usuário autenticado pode ver apenas o próprio status
drop policy if exists "read_own_access" on public.user_access;

create policy "read_own_access"
on public.user_access
for select
to authenticated
using (auth.uid() = user_id);

-- Opcional: seed para usuários existentes sem registro
insert into public.user_access (user_id, pago, plano, curso)
select id, false, 'free', 'soldado-cabo'
from auth.users
on conflict (user_id) do nothing;

update public.user_access
set curso = coalesce(nullif(curso, ''), 'soldado-cabo')
where curso is null or curso = '';

-- Exemplos de atualização manual (teste):
-- Marcar pago:
-- update public.user_access ua
-- set pago = true, plano = 'premium', curso = 'soldado-cabo', updated_at = now()
-- from auth.users au
-- where ua.user_id = au.id and au.email = 'email@exemplo.com';

-- Marcar nao pago:
-- update public.user_access ua
-- set pago = false, plano = 'free', updated_at = now()
-- from auth.users au
-- where ua.user_id = au.id and au.email = 'email@exemplo.com';
