<script>
	let { onClick } = $props();

	import BackArrow from '../components/icons/backArrow.svelte';
</script>

<button
	type="button"
	onclick={onClick}
	aria-label="Back"
	title="Back"
	class="rounded-full text-yellow-700 mr-4 cursor-pointer"
>
	<BackArrow />
</button>
