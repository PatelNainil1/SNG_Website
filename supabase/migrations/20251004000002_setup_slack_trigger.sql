/*
# [Create Slack Notification Trigger]
This migration sets up an automated notification system that sends a message to a Slack channel every time a new entry is added to the contact_submissions table.

## Query Description: [This script creates a PostgreSQL function and a trigger. The function invokes a Supabase Edge Function named 'contact-form-slack-notification'. The trigger is configured to execute this function after every new row is inserted into the 'public.contact_submissions' table. This setup is safe and does not affect existing data; it only adds new automation functionality.]

## Metadata:
- Schema-Category: ["Structural"]
- Impact-Level: ["Low"]
- Requires-Backup: [false]
- Reversible: [true]

## Structure Details:
- Functions: handle_new_contact_submission_slack()
- Triggers: on_contact_submission_slack_notify on public.contact_submissions

## Security Implications:
- RLS Status: [Not Applicable]
- Policy Changes: [No]
- Auth Requirements: [The trigger runs under the security context of the role that performs the insert, but the Edge Function invocation uses the service_role key, which has full access. The Edge Function itself relies on a SLACK_WEBHOOK_URL secret.]

## Performance Impact:
- Indexes: [None]
- Triggers: [Added]
- Estimated Impact: [Negligible. The trigger fires an asynchronous HTTP request, which should not block or slow down the initial insert operation.]
*/

-- Step 1: Drop the old email trigger and function if they exist, to avoid conflicts.
DROP TRIGGER IF EXISTS on_contact_submission_email_notify ON public.contact_submissions;
DROP FUNCTION IF EXISTS handle_new_contact_submission_email();

-- Step 2: Create the function to invoke the Slack Edge Function.
CREATE OR REPLACE FUNCTION handle_new_contact_submission_slack()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER -- Allows the function to use the service_role key for invoking the Edge Function
AS $$
BEGIN
  -- The 'contact-form-slack-notification' must match the name of your Edge Function folder.
  PERFORM net.http_post(
    url:='https://eyddzupasmxuauxkylpf.supabase.co/functions/v1/contact-form-slack-notification',
    headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5ZGR6dXBhc214dWF1eGt5bHBmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODA1NTM5NywiZXhwIjoyMDczNjMxMzk3fQ.2T7k_a_vO-00g3yHw2xLd-u2m_4Q4sY4r4h2k_q_r_E"}',
    body:=jsonb_build_object('record', NEW)
  );
  RETURN NEW;
END;
$$;

-- Step 3: Drop the old Slack trigger if it exists.
DROP TRIGGER IF EXISTS on_contact_submission_slack_notify ON public.contact_submissions;

-- Step 4: Create the trigger that calls the function after a new row is inserted.
CREATE TRIGGER on_contact_submission_slack_notify
AFTER INSERT ON public.contact_submissions
FOR EACH ROW
EXECUTE FUNCTION handle_new_contact_submission_slack();
