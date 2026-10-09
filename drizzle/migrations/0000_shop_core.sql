create type public.app_role as enum ('admin', 'user');
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null,
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create policy "own roles" on public.user_roles for select to authenticated using (user_id = auth.uid());

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.user_roles where user_id = _user_id and role = _role)
$$;

-- first registered user becomes the shop admin
create or replace function public.handle_first_admin()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if not exists (select 1 from public.user_roles where role = 'admin') then
    insert into public.user_roles (user_id, role) values (new.id, 'admin');
  end if;
  return new;
end $$;
create trigger on_auth_user_created_admin after insert on auth.users
for each row execute function public.handle_first_admin();

create table public.products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  seo_title text,
  description text not null default '',
  price numeric(10,2) not null default 0,
  category text not null default 'accesorii',
  in_stock boolean not null default true,
  media jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select on public.products to anon, authenticated;
grant insert, update, delete on public.products to authenticated;
grant all on public.products to service_role;
alter table public.products enable row level security;
create policy "public read products" on public.products for select to anon, authenticated using (true);
create policy "admin insert products" on public.products for insert to authenticated with check (public.has_role(auth.uid(), 'admin'));
create policy "admin update products" on public.products for update to authenticated using (public.has_role(auth.uid(), 'admin'));
create policy "admin delete products" on public.products for delete to authenticated using (public.has_role(auth.uid(), 'admin'));

create policy "public read media" on storage.objects for select using (bucket_id = 'product-media');
create policy "admin upload media" on storage.objects for insert to authenticated with check (bucket_id = 'product-media' and public.has_role(auth.uid(), 'admin'));
create policy "admin delete media" on storage.objects for delete to authenticated using (bucket_id = 'product-media' and public.has_role(auth.uid(), 'admin'));