<script>
	let { text, imgSrc } = $props();
</script>

<div class="flex gap-4 items-center mb-10">
	<h3 class="text-4xl">{text}</h3>
	<img
		src={imgSrc}
		class="min-sm:h-[90px] max-sm:h-[60px] max-sm:min-w-[84.8px] min-sm:min-w-[127.2px]"
		alt="icon"
	/>
</div>
