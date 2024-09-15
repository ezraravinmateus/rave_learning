<script lang="ts">
	import { Counter } from './Counter.svelte';
	let counter = new Counter();
</script>

<div>
	<button class="rounded-full bg-blue-200 p-4" on:click={() => counter.count++}
		>Counter: {counter.count}</button
	>
	<p>Double of count is {counter.double}</p>
</div>
