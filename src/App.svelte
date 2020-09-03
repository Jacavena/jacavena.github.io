<script>
	import { onMount } from 'svelte';

	let repos = [];

	onMount(async () => {

		const res = await fetch('https://api.github.com/users/jacavena/repos', {
			headers: {
				'Accept': 'application/vnd.github.v3+json'
			}
		})

		repos = await res.json();
	});
</script>

<main>
	{#each repos as repo}
		<div>
			<h2><a href={repo.url}>{repo.name}</a></h2>
			<h3>{repo.description}</h3>
		</div>
	{:else}
		<p>Loading repositories...</p>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>