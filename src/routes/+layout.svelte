<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex flex-col justify-stretch h-full">
	<header class="px-20 py-4 border-gray-300 border-b-1 font-semibold text-yellow-900">
		<span>STORYWORTH SAMPLE</span>
	</header>

	<main class="h-full flex-auto">
		{@render children()}
	</main>
</div>
