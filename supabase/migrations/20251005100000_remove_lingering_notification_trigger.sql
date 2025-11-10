/*
          # [Operation Name]
          Cleanup Notification Triggers

          ## Query Description: [This script will safely remove any old or lingering database triggers and functions related to sending email or Slack notifications from the 'contact_submissions' table. This is a cleanup operation to resolve an error where the database is trying to call a function that no longer exists or is not enabled. This will ensure that the contact form only saves data to the database without attempting to send any notifications.]
          
          ## Metadata:
          - Schema-Category: "Structural"
          - Impact-Level: "Low"
          - Requires-Backup: false
          - Reversible: false
          
          ## Structure Details:
          - Drops the trigger `on_new_submission` from the `public.contact_submissions` table if it exists.
          - Drops the function `public.notify_slack_on_new_submission` if it exists.
          - Drops the function `public.notify_email_on_new_submission` if it exists.
          
          ## Security Implications:
          - RLS Status: Not Applicable
          - Policy Changes: No
          - Auth Requirements: Not Applicable
          
          ## Performance Impact:
          - Indexes: None
          - Triggers: Removed
          - Estimated Impact: Negligible. Removes a trigger, which slightly improves insert performance on the table.
          */

-- This script ensures that no notification triggers are active on the contact_submissions table.
-- It will safely drop the trigger and any related functions if they exist.

DROP TRIGGER IF EXISTS on_new_submission ON public.contact_submissions;
DROP FUNCTION IF EXISTS public.notify_slack_on_new_submission();
DROP FUNCTION IF EXISTS public.notify_email_on_new_submission();
