<script>
	import { onMount } from 'svelte';

	let repos = [];

	onMount(async () => {
		const res = await fetch('https://api.github.com/users/jacavena/repos', {
			headers: {
				'Accept': 'application/vnd.github.v3+json'
			}
		})

		const data = await res.json();
		repos = data.reverse();
	});
</script>

<main>
	{#each repos as repo}
		<div class="repo">
			<h2><a href={repo.html_url}>{repo.name}</a></h2>
			<p>{repo.description}</p>
		</div>
	{:else}
		<p>Loading repositories...</p>
	{/each}
</main>

<style>
	main {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	main > p {
		font-size: 2rem;
		padding-top: 4rem;
		text-align: center;
		text-transform: uppercase;
	}

	.repo {
		border: 1px solid #ddd;
		border-radius: 5px;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
		padding: 32px;
		margin: 0 16px;
		margin-top: 36px;
	}

	.repo h2 {
		margin: 0;
		font-size: 1.75rem;
	}

	.repo p {
		margin-top: 16px;
		margin-bottom: 0;
		font-size: 1.2rem;
	}
</style>