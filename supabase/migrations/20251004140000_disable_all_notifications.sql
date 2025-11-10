/*
# [Operation Name]
Disable All Contact Form Notifications

## Query Description:
This script safely removes the database triggers and functions responsible for sending email (Resend) and Slack notifications when a new contact form submission is created. This will stop all external notification attempts, simplifying the system to only store submissions in the database. This operation is safe and does not affect any stored data.

## Metadata:
- Schema-Category: "Structural"
- Impact-Level: "Low"
- Requires-Backup: false
- Reversible: false

## Structure Details:
- Drops trigger: `on_new_submission_notify_slack` from table `public.contact_submissions`
- Drops function: `public.notify_slack_on_new_submission()`
- Drops trigger: `on_new_submission_notify_email` from table `public.contact_submissions`
- Drops function: `public.notify_email_on_new_submission()`

## Security Implications:
- RLS Status: Unchanged
- Policy Changes: No
- Auth Requirements: None

## Performance Impact:
- Indexes: None
- Triggers: Removed
- Estimated Impact: Negligible. Removes a small overhead on inserts to the contact_submissions table.
*/

-- Disable Slack notifications
DROP TRIGGER IF EXISTS on_new_submission_notify_slack ON public.contact_submissions;
DROP FUNCTION IF EXISTS public.notify_slack_on_new_submission();

-- Disable Email (Resend) notifications
DROP TRIGGER IF EXISTS on_new_submission_notify_email ON public.contact_submissions;
DROP FUNCTION IF EXISTS public.notify_email_on_new_submission();
