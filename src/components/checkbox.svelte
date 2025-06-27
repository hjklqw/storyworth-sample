<script>
	let { label, name, value, checkValueAgainst, onSelect } = $props();
</script>

<label
	class="px-4 py-2 hover:bg-yellow-100 border border-yellow-500 rounded-md flex gap-2"
	onchange={() => onSelect(value)}
>
	<input
		{name}
		{value}
		defaultChecked={checkValueAgainst === value}
		type="checkbox"
		class="flex relative appearance-none shrink-0 w-4 h-4 rounded-sm border border-2 border-yellow-800 self-center peer checked:bg-yellow-800"
	/>
	<svg
		class="absolute pointer-events-none hidden peer-checked:block scale-75 self-center justify-self-center"
		width="20"
		height="20"
		viewBox="0 0 16 16"
		fill="white"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"
		/>
	</svg>
	{label}
</label>
