import type { PageServerLoad, Actions } from "./$types.js";
import { fail, redirect } from "@sveltejs/kit";
import { setError, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { formSchema } from "./schema";

export const load: PageServerLoad = async () => {
    return {
        form: await superValidate(zod(formSchema)),
    };
};

export const actions: Actions = {
    default: async (event) => {
        const form = await superValidate(event, zod(formSchema));
        if (!form.valid) {
            return fail(400, {
                form,
            });
        }
        // Create account with Supabase
        const supabase = event.locals.supabase;
        const { email, password } = form.data;
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) {
            console.log(error);
            return setError(form, "password", "This account already exist.")
        }
        else {
            return redirect(303, "/")
        }
    },
};
