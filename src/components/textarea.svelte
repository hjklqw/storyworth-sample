<script>
	let { label, defaultValue = '', validate = undefined } = $props();

	let value = $state(defaultValue);

	$effect(() => {
		if (defaultValue) {
			validate(value);
		}
	});
</script>

<label class="flex-auto">
	<span class="block text-sm mb-1">
		{label}
	</span>
	<!-- svelte-ignore element_invalid_self_closing_tag -->
	<textarea
		class="border border-yellow-500 hover:bg-yellow-100 rounded-md px-4 py-2 block min-w-full text-lg focus:outline-yellow-600 focus:ring-0"
		onblur={() => validate(value)}
		bind:value
	/>
</label>
