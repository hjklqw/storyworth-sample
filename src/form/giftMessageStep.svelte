<script lang="ts">
	import FormStepHeader from '../components/formStepHeader.svelte';
	import Button from '../components/button.svelte';
	import BackButton from './backButton.svelte';
	import Input from '../components/input.svelte';
	import Textarea from '../components/textarea.svelte';

	import { FormStep, formState } from '../state/form.svelte';
	import {
		areAllFieldsValid,
		validateNotBlank,
		ValidationState
	} from '../utils/formValidation.svelte';
	import {
		FocusableFormFieldNames,
		focusedFormField,
		focusFormField
	} from '../utils/formFieldFocus.svelte';

	let dateInputRef: HTMLInputElement;

	$effect(() => {
		if (focusedFormField.name === FocusableFormFieldNames.GiftMessageDate) {
			focusFormField(dateInputRef);
		}
	});

	function goBack() {
		formState.step = FormStep.SetGiftRecipient;
	}

	function submitStep() {
		formState.step = FormStep.SelectNumberOfBookCopies;
	}

	const validationState = $state({
		message: ValidationState.Blank,
		date: ValidationState.Blank,
		from: ValidationState.Blank
	});

	const validateMessage = validateNotBlank(
		validationState,
		'message',
		(value) => (formState.giftData.message = value)
	);
	const validateDate = validateNotBlank(
		validationState,
		'date',
		(value) => (formState.giftData.date = value)
	);
	const validateFrom = validateNotBlank(
		validationState,
		'from',
		(value) => (formState.giftData.from = value)
	);
</script>

<FormStepHeader text="Add a gift message" imgSrc="/form/giftMessage.png" />

<div class="flex flex-col items-stretch w-full gap-4">
	<Textarea
		label={`Your gift message for ${formState.giftData.fullName.split(' ')[0]}`}
		defaultValue={formState.giftData.message}
		validate={validateMessage}
	/>
	<Input
		label="Send gift message on:"
		placeholder="06/27/2025 (no actual validation)"
		defaultValue={formState.giftData.date}
		validate={validateDate}
		bind:ref={dateInputRef}
	/>
	<Input
		label="From (you can add others as well)"
		placeholder="Your name + anyone else's"
		defaultValue={formState.giftData.from}
		validate={validateFrom}
	/>
</div>

<BackButton onClick={goBack} />
<Button label="Continue" onClick={submitStep} isDisabled={!areAllFieldsValid(validationState)} />
