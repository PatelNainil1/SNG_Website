-- Migration to switch from Slack notifications to Email notifications

-- Step 1: Drop the old Slack trigger if it exists.
DROP TRIGGER IF EXISTS on_new_submission_notify_slack ON public.contact_submissions;

-- Step 2: Drop the old Slack function if it exists.
DROP FUNCTION IF EXISTS public.notify_slack_on_new_submission();

-- Step 3: Create or replace the new function to trigger the email notification Edge Function.
-- This function is secure and sets the search_path explicitly.
CREATE OR REPLACE FUNCTION public.notify_email_on_new_submission()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  -- Perform a non-blocking HTTP request to the Edge Function
  PERFORM net.http_post(
    url:='https://eyddzupasmxuauxkylpf.supabase.co/functions/v1/contact-form-email-notification',
    headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5ZGR6dXBhc214dWF1eGt5bHBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwNTUzOTcsImV4cCI6MjA3MzYzMTM5N30.LXLp2OpL9ARmJlSHNdTaF6VU1_Lk9KsGx3H4jvz8qkE"}',
    body:=jsonb_build_object('record', NEW)
  );
  RETURN NEW;
END;
$$;

-- Step 4: Create the trigger that executes the function after a new row is inserted.
CREATE TRIGGER on_new_submission_notify_email
AFTER INSERT ON public.contact_submissions
FOR EACH ROW
EXECUTE FUNCTION public.notify_email_on_new_submission();
