/*
          # [Operation] Harden Function Security
          [This operation enhances the security of the database trigger function by setting a fixed search_path. This resolves the "Function Search Path Mutable" security advisory.]

          ## Query Description: [This query alters the `notify_slack_on_new_submission` function to ensure it only searches within the `public` schema. This is a non-destructive security best practice that prevents potential search path hijacking attacks. It has no impact on existing data or application functionality.]
          
          ## Metadata:
          - Schema-Category: "Security"
          - Impact-Level: "Low"
          - Requires-Backup: false
          - Reversible: true
          
          ## Structure Details:
          - Function(s) affected: `notify_slack_on_new_submission()`
          
          ## Security Implications:
          - RLS Status: [N/A]
          - Policy Changes: [No]
          - Auth Requirements: [N/A]
          
          ## Performance Impact:
          - Indexes: [N/A]
          - Triggers: [N/A]
          - Estimated Impact: [None. This is a security configuration change with no performance overhead.]
          */

ALTER FUNCTION public.notify_slack_on_new_submission()
SET search_path = public;
