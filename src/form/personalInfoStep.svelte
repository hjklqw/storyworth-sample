<script>
	import FormStepHeader from '../components/formStepHeader.svelte';
	import Button from '../components/button.svelte';
	import BackButton from './backButton.svelte';
	import Input from '../components/input.svelte';
	import Checkbox from '../components/checkbox.svelte';

	import { FormStep, formState } from '../state/form.svelte';
	import {
		areAllFieldsValid,
		getEmailError,
		validateEmail,
		validateNotBlank,
		ValidationState
	} from '../utils/formValidation.svelte';

	function goBack() {
		formState.step = FormStep.SelectNumberOfBookCopies;
	}

	function submitStep() {
		formState.step = FormStep.Checkout;
	}

	const validationState = $state({
		name: ValidationState.Blank,
		email: ValidationState.Blank
	});

	const validateName = validateNotBlank(
		validationState,
		'name',
		(value) => (formState.personalInfo.fullName = value)
	);
	const validateUserEmail = validateEmail(
		validationState,
		'email',
		(email) => (formState.personalInfo.email = email)
	);
</script>

<FormStepHeader text="Let’s save your info" imgSrc="/form/personalInfo.png" />

<div class="flex flex-col items-stretch w-full gap-4">
	<Input
		label="Your full name"
		placeholder="FIrst Last"
		defaultValue={formState.personalInfo.fullName}
		validate={validateName}
	/>
	<Input
		label="Your email address"
		placeholder="first.last@example.com"
		tooltip="We'll send updates to this address."
		defaultValue={formState.personalInfo.email}
		validate={validateUserEmail}
		error={getEmailError(validationState.email)}
	/>
	<Checkbox
		label="I’d like to get writing tips, inspiration, and promotions via email"
		name="fakeCheckbox"
		value={formState.personalInfo.getTips}
		checkValueAgainst={formState.personalInfo.getTips}
		onSelect={(/** @type {boolean} */ value) => (formState.personalInfo.getTips = value)}
	/>
</div>

<div class="text-sm mt-4 p-4 bg-pink-100 rounded-md">
	Your privacy is important to us. Thank you for trusting us with your stories. For more info, see
	<!-- svelte-ignore a11y_invalid_attribute -->
	our <a href="#" class="text-pink-800 underline">Privacy Policy</a>.
</div>

<BackButton onClick={goBack} />
<Button label="Continue" onClick={submitStep} isDisabled={!areAllFieldsValid(validationState)} />
