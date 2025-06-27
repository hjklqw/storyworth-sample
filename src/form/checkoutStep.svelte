<script>
	import Button from '../components/button.svelte';
	import FormStepHeader from '../components/formStepHeader.svelte';
	import BackButton from './backButton.svelte';

	import { formState, ForWho, FormStep } from '../state/form.svelte';
	import { calculatePrice } from '../utils/pricing.svelte';

	function goBack() {
		formState.step = FormStep.GatherPersonalInfo;
	}

	function submitStep() {
		alert('The end!');
	}

	const price = $derived.by(calculatePrice);
</script>

<FormStepHeader text="Let’s complete your purchase" imgSrc="/form/checkout.png" />

<p>Thank you for taking a look at this sample! Please see the ReadMe on Github for more info.</p>

<p>
	A project with Stripe integration can be seen <a
		href="https://shop.michellepoon.ca/"
		class="text-yellow-700"
		rel="none"
		target="_blank">here</a
	>.
</p>

<BackButton onClick={goBack} />
<Button label={`Purchase for ${price}`} onClick={submitStep} />
