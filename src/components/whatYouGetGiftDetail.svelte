<script>
	import EditIcon from './icons/editIcon.svelte';

	let { data, onClick } = $props();
</script>

<span>{data}</span>
<button
	type="button"
	class="select-none cursor-pointer text-yellow-700"
	title="Edit"
	onclick={onClick}
>
	<EditIcon />
</button>
