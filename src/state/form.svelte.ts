export enum ForWho {
  None = '',
  Me = 'me',
  SomeoneElse = 'someone else'
}

export enum FormStep {
  SelectWho,
  SetGiftRecipient,
  SetGiftMessage,
  SelectNumberOfBookCopies,
  GatherPersonalInfo,
  Checkout
}

export const formState = $state({
  step: FormStep.SelectWho,
  who: ForWho.None,
  giftData: {
    fullName: '',
    email: '',
    message: '',
    date: '',
    from: '',
  },
  numBooks: 0,
  personalInfo: {
    fullName: '',
    email: '',
    getTips: false
  }
})
