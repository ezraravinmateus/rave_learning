<script>
	import Svelte4 from './Svelte4.svelte';
	import Svelte5 from './Svelte5.svelte';
	import Svelte5WithTs from './Svelte5WithTS.svelte';
</script>

<div class="flex flex-col items-start justify-center">
	<h1 class="text-3xl">Svelte 4</h1>
	<Svelte4 />
	<h1 class="mt-8 text-3xl">Svelte 5</h1>
	<Svelte5 />
	<h1 class="mt-8 text-3xl">Svelte 5 with Class & TS</h1>
	<Svelte5WithTs />
</div>
