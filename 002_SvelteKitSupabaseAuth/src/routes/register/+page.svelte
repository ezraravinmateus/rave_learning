<script lang="ts">
    import type { PageData } from "./$types.js";
    import Register from "./Register.svelte";
    export let data: PageData;
</script>

<div class="flex h-screen items-center justify-center">
    <div class="max-w-xs flex-grow shadow rounded p-4">
        <h1 class="mb-4 text-3xl font-bold">Register</h1>
        <Register data={data.form} />
    </div>
</div>
