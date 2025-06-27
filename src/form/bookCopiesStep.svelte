<script>
	import FormStepHeader from '../components/formStepHeader.svelte';
	import Button from '../components/button.svelte';
	import BackButton from './backButton.svelte';

	import { formState, FormStep } from '../state/form.svelte';
	import { additionalBookPrices } from '../state/additionalBookPrices.svelte';

	// @ts-ignore
	function onSelectionChanged(e) {
		formState.numBooks = parseInt(e.target.value);
	}

	function goBack() {
		formState.step = FormStep.SelectWho;
	}

	function submitStep() {
		formState.step = FormStep.GatherPersonalInfo;
	}
</script>

<FormStepHeader text="How many books would you like?" imgSrc="/form/numBooks.png" />

<p class="mb-2">One color book credit is included.</p>

<p><b>Tip:</b> Many people want 2–3 extra copies to share with loved ones.</p>

<select
	name="numBooks"
	onchange={onSelectionChanged}
	bind:value={formState.numBooks}
	class="px-4 py-2 border border-yellow-500 hover:bg-yellow-100 rounded-md block w-full mt-4 text-lg"
>
	<option value={0} disabled selected>Select the number of books to continue</option>
	<option value={1}>1 (included with purchase)</option>
	{#each additionalBookPrices as additionalOption}
		<option value={additionalOption.num}
			>{additionalOption.num} books +${additionalOption.addedPrice}</option
		>
	{/each}
</select>

<BackButton onClick={goBack} />
<Button label="Continue" onClick={submitStep} isDisabled={formState.numBooks === 0} />
