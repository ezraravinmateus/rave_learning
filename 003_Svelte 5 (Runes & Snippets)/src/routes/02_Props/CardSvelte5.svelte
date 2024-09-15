<script lang="ts">
	let {
		name,
		description
	}: {
		name: string;
		description: string;
	} = $props();
</script>

<div>
	<h1>{name}</h1>
	<p>{description}</p>
</div>
