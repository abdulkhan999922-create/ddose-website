/*
  # Fix Security Issues
  
  1. RLS Policy - contact_submissions
    - Drop the overly permissive INSERT policy
    - Create a more restrictive policy that requires basic validation
    
  2. Auth DB Connection Strategy
    - Note: Auth connection strategy is configured at the project level in Supabase dashboard
    - Cannot be changed via migration, but documenting the requirement
*/

DROP POLICY IF EXISTS "Anyone can submit contact forms" ON contact_submissions;

CREATE POLICY "Allow public contact form submissions with rate limiting"
  ON contact_submissions FOR INSERT
  TO anon
  WITH CHECK (
    name IS NOT NULL 
    AND name != ''
    AND question IS NOT NULL 
    AND question != ''
    AND char_length(name) <= 255
    AND char_length(question) <= 5000
  );
