create extension if not exists "uuid-ossp";

create table if not exists projects (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  location text,
  health_score numeric default 0,
  status text default 'active',
  created_at timestamptz default now()
);

create table if not exists equipment (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references projects(id),
  item_number text not null,
  name text,
  manufacturer text,
  model text,
  area text,
  power text,
  startup_required boolean default false,
  status text,
  created_at timestamptz default now()
);

create table if not exists documents (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references projects(id),
  name text not null,
  document_type text,
  status text default 'uploaded',
  created_at timestamptz default now()
);

create table if not exists ai_review_items (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references projects(id),
  proposal_type text,
  proposed_payload jsonb default '{}'::jsonb,
  status text default 'pending',
  created_at timestamptz default now()
);
