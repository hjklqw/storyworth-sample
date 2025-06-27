<script>
	import { formState, FormStep, ForWho } from '../state/form.svelte';
	import { additionalBookPrices } from '../state/additionalBookPrices.svelte';

	import WhatYouGetSubheader from '../components/whatYouGetSubheader.svelte';
	import WhatYouGetGiftDetail from '../components/whatYouGetGiftDetail.svelte';
	import { FocusableFormFieldNames, focusedFormField } from '../utils/formFieldFocus.svelte';
	import { calculatePrice } from '../utils/pricing.svelte';
	import PersonIcon from '../components/icons/personIcon.svelte';
	import EmailIcon from '../components/icons/emailIcon.svelte';
	import DateIcon from '../components/icons/dateIcon.svelte';

	function editGiftRecipientDetails() {
		formState.step = FormStep.SetGiftRecipient;
	}
	function editGiftMessageDetails() {
		focusedFormField.name = FocusableFormFieldNames.GiftMessageDate;
		formState.step = FormStep.SetGiftMessage;
	}

	const price = $derived.by(calculatePrice);
</script>

<section
	class="bg-pink-100 border-l-1 border-gray-300 px-10 py-12 hidden md:block lg:px-20 2xl:min-w-[1200px]"
>
	<h4 class="text-3xl">Storyworth Memoir</h4>
	<div>${price}</div>

	<WhatYouGetSubheader text="Includes:" />
	<ul class="list-image-[url(/checkmark.svg)] list-inside space-y-2 text-lg [&>li>span]:pl-2">
		<li><span>{formState.numBooks || 1} hardcover color books</span></li>
		<li><span>30-day money back guarantee</span></li>
		<li><span>Unlimited photos and stories</span></li>
		<li><span>A year of weekly questions chosen by you or loved ones</span></li>
		<li><span>Unlimited sharing</span></li>
		<li><span>Write or voice record stories</span></li>
		<li><span>Downloadable PDF e-book</span></li>
		<li><span>Free shipping in US</span></li>
	</ul>

	{#if formState.who === ForWho.Me}
		<div class="mt-4">
			Your subscription will renew annually. You can cancel your renewal at any time.
		</div>
	{/if}

	{#if formState.who === ForWho.SomeoneElse && formState.giftData.fullName && formState.giftData.email}
		<WhatYouGetSubheader text="Deliver gift message to:" />
		<ul
			class="list-image-none list-inside space-y-2 text-lg [&>li]:flex [&>li]:items-center [&>li>span]:pl-2"
		>
			<li>
				<PersonIcon iconClass="text-pink-900" />
				<WhatYouGetGiftDetail
					data={formState.giftData.fullName}
					onClick={() => {
						focusedFormField.name = FocusableFormFieldNames.GiftRecipientName;
						editGiftRecipientDetails();
					}}
				/>
			</li>
			<li>
				<EmailIcon iconClass="text-pink-900" />
				<WhatYouGetGiftDetail
					data={formState.giftData.email}
					onClick={() => {
						focusedFormField.name = FocusableFormFieldNames.GiftRecipientEmail;
						editGiftRecipientDetails();
					}}
				/>
			</li>
			{#if formState.giftData.date}
				<li>
					<DateIcon iconClass="text-pink-900" />
					<WhatYouGetGiftDetail
						data={`On ${formState.giftData.date}`}
						onClick={editGiftMessageDetails}
					/>
				</li>
			{/if}
		</ul>
	{/if}

	<div class="flex w-full max-w-[500px] justify-center mt-2">
		<img alt="Sample Storyworth book" width="232px" src="/sampleBook.png" />
	</div>
</section>
