<script lang="ts">
</script>

{#snippet card(name: string, description: string)}
	<div>
		<h1>{name}</h1>
		<p>{description}</p>
	</div>
{/snippet}

<div>
	{@render card('Frog', 'This is a frog!')}
	{@render card('Cat', 'This is a cat!')}
	{@render card('Dog', 'This is a dog!')}
</div>
