<script lang="ts">
	import FormStepHeader from '../components/formStepHeader.svelte';
	import Button from '../components/button.svelte';
	import BackButton from './backButton.svelte';
	import Input from '../components/input.svelte';

	import { FormStep, formState } from '../state/form.svelte';
	import {
		areAllFieldsValid,
		getEmailError,
		validateEmail,
		validateNotBlank,
		ValidationState
	} from '../utils/formValidation.svelte';
	import {
		FocusableFormFieldNames,
		focusedFormField,
		focusFormField
	} from '../utils/formFieldFocus.svelte';

	let nameInputRef: HTMLInputElement;
	let emailInputRef: HTMLInputElement;

	$effect(() => {
		if (focusedFormField.name === FocusableFormFieldNames.GiftRecipientName) {
			focusFormField(nameInputRef);
		} else if (focusedFormField.name === FocusableFormFieldNames.GiftRecipientEmail) {
			focusFormField(emailInputRef);
		}
	});

	function goBack() {
		formState.step = FormStep.SelectWho;
	}

	function submitStep() {
		formState.step = FormStep.SetGiftMessage;
	}

	const validationState = $state({
		name: ValidationState.Blank,
		email: ValidationState.Blank
	});

	const validateName = validateNotBlank(
		validationState,
		'name',
		(value) => (formState.giftData.fullName = value)
	);
	const validateRecipientEmail = validateEmail(
		validationState,
		'email',
		(email) => (formState.giftData.email = email)
	);
</script>

<FormStepHeader text="Who is this for?" imgSrc="/form/recipient.png" />

<div class="flex flex-col items-stretch w-full gap-4">
	<Input
		label="Your gift recipient’s full name"
		placeholder="FIrst Last"
		tooltip="This is how we'll refer to them in emails."
		defaultValue={formState.giftData.fullName}
		validate={validateName}
		bind:ref={nameInputRef}
	/>
	<Input
		label="Their email address"
		placeholder="first.last@example.com"
		tooltip="We'll send weekly prompts to this address."
		defaultValue={formState.giftData.email}
		validate={validateRecipientEmail}
		error={getEmailError(validationState.email)}
		bind:ref={emailInputRef}
	/>
</div>

<BackButton onClick={goBack} />
<Button label="Continue" onClick={submitStep} isDisabled={!areAllFieldsValid(validationState)} />
