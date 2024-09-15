<script lang="ts">
    import { goto, invalidateAll } from "$app/navigation";
    import { Button } from "$lib/components/ui/button";

    export let data;
    $: ({ supabase, user } = data);

    async function handleLogout() {
        await supabase.auth.signOut();
        goto("/", { invalidateAll: true });
    }
    async function handleLogin() {
        await supabase.auth.signOut();
        goto("/login", { invalidateAll: true });
    }
</script>

<div class="w-svw flex flex-col justify-center items-center h-svh gap-4">
    {#if user}
        <p>{user.email}</p>
        <Button on:click={handleLogout}>Logout</Button>
    {:else}
        <p>You are not logged in!</p>
        <Button on:click={handleLogin}>Login</Button>
    {/if}
</div>
