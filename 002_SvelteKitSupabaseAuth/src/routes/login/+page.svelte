<script lang="ts">
    import { goto } from "$app/navigation";
    import type { PageData } from "./$types.js";
    import Login from "./Login.svelte";
    export let data: PageData;
</script>

<div class="flex h-screen items-center justify-center">
    <div class="max-w-xs flex-grow shadow rounded p-4">
        <h1 class="mb-4 text-3xl font-bold">Login</h1>
        <Login data={data.form} />
        <div class="flex flex-col justify-center items-center gap-2 mt-8">
            <p>Don't have an account?</p>
            <a href="/register" class="text-blue-400">Sign Up</a>
        </div>
    </div>
</div>
