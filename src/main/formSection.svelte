<script>
	import { formState, FormStep, ForWho } from '../state/form.svelte';

	import Step from '../components/step.svelte';
	import FirstStep from '../form/firstStep.svelte';
	import BookCopiesStep from '../form/bookCopiesStep.svelte';
	import PersonalInfoStep from '../form/personalInfoStep.svelte';
	import GiftRecipientStep from '../form/giftRecipientStep.svelte';
	import GiftMessageStep from '../form/giftMessageStep.svelte';
	import Checkout from '../form/checkoutStep.svelte';
	import CheckoutStep from '../form/checkoutStep.svelte';
</script>

<section class="px-10 py-12 lg:px-20 lg:w-[50rem]">
	{#if formState.step === FormStep.SelectWho}
		<FirstStep />
	{:else if formState.step === FormStep.SetGiftRecipient}
		<GiftRecipientStep />
	{:else}
		<section class="flex gap-2 justify-items-stretch w-full items-stretch mb-8">
			{#if formState.who === ForWho.SomeoneElse && formState.giftData.fullName}
				<Step name="Gift message" stepId={FormStep.SetGiftMessage} />
			{/if}
			<Step name="Book copies" stepId={FormStep.SelectNumberOfBookCopies} />
			<Step name="Personal info" stepId={FormStep.GatherPersonalInfo} />
			<Step name="Checkout" stepId={FormStep.Checkout} />
		</section>

		{#if formState.step === FormStep.SetGiftMessage}
			<GiftMessageStep />
		{:else if formState.step === FormStep.SelectNumberOfBookCopies}
			<BookCopiesStep />
		{:else if formState.step === FormStep.GatherPersonalInfo}
			<PersonalInfoStep />
		{:else if formState.step === FormStep.Checkout}
			<CheckoutStep />
		{/if}
	{/if}
</section>
