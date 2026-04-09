/*
  # Add affiliate links column to brands table
  
  1. Changes
    - Add `amazon_link` column to brands table for affiliate links
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'brands' AND column_name = 'amazon_link'
  ) THEN
    ALTER TABLE brands ADD COLUMN amazon_link text;
  END IF;
END $$;
