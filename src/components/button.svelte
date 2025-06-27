<script>
	let { label, onClick, isDisabled = false } = $props();
</script>

<button
	class="px-8 py-3 rounded-full bg-yellow-700 not-disabled:hover:bg-yellow-800 not-disabled:shadow-md uppercase cursor-pointer mt-6 font-semibold text-white disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-600"
	onclick={onClick}
	disabled={isDisabled}
>
	{label}
</button>
