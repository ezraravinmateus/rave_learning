<script lang="ts">
	let count = 0;
	$: double = count * 2;

	$: if (count > 10) {
		count = 0;
	}
</script>

<div>
	<button class="rounded-full bg-blue-200 p-4" onclick={() => count++}>Counter: {count}</button>
	<p>Double of count is {double}</p>
</div>
