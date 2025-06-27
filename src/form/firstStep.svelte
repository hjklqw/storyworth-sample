<script lang="ts">
	import Radio from '../components/radio.svelte';
	import Button from '../components/button.svelte';
	import FormStepHeader from '../components/formStepHeader.svelte';

	import { formState, ForWho, FormStep } from '../state/form.svelte';

	function submitStep() {
		if (formState.who === ForWho.SomeoneElse) {
			formState.step = FormStep.SetGiftRecipient;
		} else {
			formState.step = FormStep.SelectNumberOfBookCopies;
		}
	}
</script>

<FormStepHeader text="Who will be telling stories?" imgSrc="/form/who.png" />

<div class="flex flex-col gap-3 max-w-sm">
	<Radio
		label="Someone else will"
		name="who"
		value={ForWho.SomeoneElse}
		bind:variable={formState.who}
	/>
	<Radio label="I will" name="who" value={ForWho.Me} bind:variable={formState.who} />
</div>

<Button label="Continue" onClick={submitStep} isDisabled={formState.who === ForWho.None} />
