DO $$
DECLARE
    trigger_name_to_drop TEXT;
BEGIN
    -- This block finds all triggers on the 'contact_submissions' table
    -- and drops them. This is a robust way to clean up any old,
    -- lingering notification triggers that might be causing errors.
    FOR trigger_name_to_drop IN
        SELECT trigger_name
        FROM information_schema.triggers
        WHERE event_object_table = 'contact_submissions'
          AND trigger_schema = 'public'
    LOOP
        -- Log the action to the database logs for debugging
        RAISE NOTICE 'Dropping trigger: % on public.contact_submissions', trigger_name_to_drop;
        -- Execute the DROP TRIGGER command
        EXECUTE 'DROP TRIGGER IF EXISTS ' || quote_ident(trigger_name_to_drop) || ' ON public.contact_submissions;';
    END LOOP;
END;
$$;

-- As an extra safety measure, we also explicitly drop the functions
-- we may have created earlier, in case they are still present.
DROP FUNCTION IF EXISTS public.notify_email_on_new_submission();
DROP FUNCTION IF EXISTS public.notify_slack_on_new_submission();
