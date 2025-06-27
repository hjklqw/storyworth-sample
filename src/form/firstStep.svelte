<script lang="ts">
	import Radio from '../components/radio.svelte';
	import Button from '../components/button.svelte';
	import FormStepHeader from '../components/formStepHeader.svelte';

	import { formState, ForWho, FormStep } from '../state/form.svelte';

	function selectRadio(value: ForWho) {
		formState.who = value;
	}

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
		checkValueAgainst={formState.who}
		onSelect={selectRadio}
	/>
	<Radio
		label="I will"
		name="who"
		value={ForWho.Me}
		checkValueAgainst={formState.who}
		onSelect={selectRadio}
	/>
</div>

<Button label="Continue" onClick={submitStep} isDisabled={formState.who === ForWho.None} />
