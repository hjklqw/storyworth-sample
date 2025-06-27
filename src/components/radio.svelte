<script>
	let { label, name, value, variable = $bindable() } = $props();
</script>

<label
	class="px-4 py-2 has-[:checked]:bg-yellow-100 hover:bg-yellow-100 border border-yellow-500 rounded-md flex gap-2 text-lg cursor-pointer"
>
	<input
		{name}
		{value}
		bind:group={variable}
		type="radio"
		class="relative appearance-none shrink-0 w-4 h-4 rounded-full border border-2 border-yellow-800 self-center peer"
	/>
	<div
		class="absolute pointer-events-none w-2 h-2 rounded-full peer-checked:bg-yellow-800 ml-1 mt-2.5"
	/>
	{label}
</label>
