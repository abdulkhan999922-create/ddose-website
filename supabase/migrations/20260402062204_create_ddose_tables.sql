/*
  # D Dose Website Database Schema

  1. New Tables
    - `brands`
      - `id` (uuid, primary key)
      - `name` (text) - Brand name
      - `dose` (text) - D3 and K2 dosage information
      - `form` (text) - Form type (capsule, tablet, spray, etc)
      - `price_range` (text) - Price range in INR
      - `is_recommended` (boolean) - Whether this brand is recommended
      - `display_order` (integer) - Order to display in table
      - `created_at` (timestamptz)
    
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text) - User's name
      - `question` (text) - User's question
      - `blood_report_values` (text, optional) - Pasted blood report values
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on both tables
    - Brands: Public read access, no write access for users
    - Contact submissions: Public insert only, no read access for users
*/

CREATE TABLE IF NOT EXISTS brands (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  dose text NOT NULL,
  form text NOT NULL,
  price_range text NOT NULL,
  is_recommended boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  question text NOT NULL,
  blood_report_values text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view brands"
  ON brands FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions FOR INSERT
  TO anon
  WITH CHECK (true);
