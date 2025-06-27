<script>
	import { formState } from '../state/form.svelte';

	const { name, stepId } = $props();
	const isCompleted = $derived(formState.step >= stepId);

	function onClick() {
		formState.step = stepId;
	}
</script>

<button
	class={`relative flex-1 text-left ${isCompleted ? 'cursor-pointer hover:[&>span]:underline' : ''}`}
	onclick={onClick}
	disabled={!isCompleted}
>
	<span
		class={`uppercase text-xs whitespace-pre ${isCompleted ? 'text-yellow-700' : 'text-gray-600'}`}
	>
		{name}
	</span>
	<div
		class={`mt-1 h-2 rounded-full border border-yellow-700 w-full ${isCompleted ? 'bg-yellow-700' : ''}`}
	/>
</button>
