<script>
	import { onMount } from 'svelte';

	let repos = [];

	onMount(async () => {
		const apiKey = '5c0031db45540faf979d3d0b9c46d24a13d903ec'; // Access Public Repositories API Key
		const query = `{
			viewer {
				repositories(first: 25, orderBy: {direction: DESC, field: CREATED_AT}) {
					nodes {
						name
						description
						url
					}
				}
			}
		}`;

		const res = await fetch('https://api.github.com/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': 'bearer ' + apiKey
			},
			body: JSON.stringify({ query })
		})

		const data = await res.json();
		repos = data.data.viewer.repositories.nodes;
		console.log(repos);
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