<script>
	import '../app.css';
	let { children } = $props();
</script>

<h1 class="w-svw items-center justify-center p-4 text-center text-3xl">Svelte v5 vs Svelte v4</h1>
<div class="flex w-svw flex-row items-center justify-center gap-4 text-blue-500">
	<a href="/01_Runes">Runes</a>
	<a href="/02_Props">Props</a>
	<a href="/03_Snippets">Snippets</a>
</div>

<div class="flex h-svh w-svw flex-col items-center justify-center">
	<!-- Slot is changed to render children -->
	<!-- <slot /> -->
	{@render children()}
</div>
