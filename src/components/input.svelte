<script>
	let {
		label,
		placeholder,
		tooltip = '',
		defaultValue = '',
		validate = undefined,
		error = '',
		ref = $bindable()
	} = $props();

	import ErrorIcon from './icons/errorIcon.svelte';
	import TooltipIcon from './icons/tooltipIcon.svelte';

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
		{#if tooltip}
			<div class="relative inline-block">
				<TooltipIcon />
				<div
					class={`absolute bg-purple-100 border border-purple-300 p-2 rounded-md left-0 top-6 -translate-x-1/2 md:left-6 md:top-0 md:translate-none hidden peer-hover:block min-w-${tooltip.length > 40 ? 66 : 60}`}
					role="tooltip"
				>
					{tooltip}
				</div>
			</div>
		{/if}
	</span>
	<input
		type="text"
		{placeholder}
		class={`border ${error ? 'border-red-500 outline-2 outline-red-600' : 'border-yellow-500 hover:bg-yellow-100'} rounded-md px-4 py-2 block min-w-full text-lg ${error ? 'focus:outline-red-600' : 'focus:outline-yellow-600'} focus:ring-0`}
		onblur={() => validate(value)}
		bind:value
		bind:this={ref}
	/>
	{#if error}
		<div class="text-red-500 text-sm mt-1">
			<ErrorIcon />
			<span>{error}</span>
		</div>
	{/if}
</label>
