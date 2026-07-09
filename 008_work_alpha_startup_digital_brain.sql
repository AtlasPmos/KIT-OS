alter table equipment add column if not exists x numeric;
alter table equipment add column if not exists y numeric;
alter table equipment add column if not exists ai_notes text;

create table if not exists startup_tasks (
  id uuid primary key default uuid_generate_v4(),
  project_name text,
  item_number text,
  title text not null,
  discipline text,
  status text default 'Blocked',
  blocker text,
  created_at timestamptz default now()
);

create table if not exists project_brain_queries (
  id uuid primary key default uuid_generate_v4(),
  project_name text,
  question text,
  answer jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);
