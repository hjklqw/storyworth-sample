export enum FocusableFormFieldNames {
  GiftRecipientName = 'giftRecipientName',
  GiftRecipientEmail = 'giftRecipientEmail',
  GiftMessageDate = 'giftMessageDate',
}

export const focusedFormField: { name: FocusableFormFieldNames | undefined } = $state({ name: undefined })

export function focusFormField(ref: HTMLInputElement) {
  ref.focus();
  ref.select();
  focusedFormField.name = undefined;
}
