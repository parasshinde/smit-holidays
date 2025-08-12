-- Secure customer_queries: remove public read, add staff-only read, keep public insert

-- 1) Roles infrastructure
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'app_role') THEN
    CREATE TYPE public.app_role AS ENUM ('admin', 'staff');
  END IF;
END$$;

CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- SECURITY DEFINER function to check roles (bypasses RLS on user_roles safely)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  );
$$;

-- 2) Harden customer_queries policies
ALTER TABLE public.customer_queries ENABLE ROW LEVEL SECURITY;

-- Drop overly permissive public read policy if present
DROP POLICY IF EXISTS "Public read access" ON public.customer_queries;

-- Allow only authenticated staff to read
CREATE POLICY "Staff can view customer queries"
ON public.customer_queries
FOR SELECT
TO authenticated
USING (
  public.has_role(auth.uid(), 'admin'::public.app_role)
  OR public.has_role(auth.uid(), 'staff'::public.app_role)
);

-- Keep existing public INSERT policy as-is (so contact form remains functional)
-- (No change required; policy "Anyone can submit queries" already allows INSERT)
