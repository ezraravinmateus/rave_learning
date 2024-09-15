<script lang="ts">
	let count = $state(0);
	const double = $derived(count * 2);
	$effect(() => {
		if (count > 10) {
			count = 0;
		}
	});
</script>

<div>
	<button class="rounded-full bg-blue-200 p-4" onclick={() => count++}>Counter: {count}</button>
	<p>Double of count is {double}</p>
</div>
