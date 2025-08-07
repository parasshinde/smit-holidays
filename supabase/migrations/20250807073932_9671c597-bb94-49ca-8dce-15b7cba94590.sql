-- First, let's update the Public_Queries table to better match the contact form data
-- Drop existing table and recreate with proper structure
DROP TABLE IF EXISTS public."Public_Queries";

-- Create improved queries table
CREATE TABLE public.customer_queries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  phone_number TEXT,
  destination TEXT,
  travel_date DATE,
  travelers INTEGER,
  budget_range TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.customer_queries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert queries (public contact form)
CREATE POLICY "Anyone can submit queries" ON public.customer_queries
FOR INSERT WITH CHECK (true);

-- Create policy to allow reading queries (for admin purposes)
CREATE POLICY "Public read access" ON public.customer_queries
FOR SELECT USING (true);