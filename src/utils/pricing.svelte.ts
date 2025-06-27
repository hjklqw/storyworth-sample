
import { additionalBookPrices } from '../state/additionalBookPrices.svelte';
import { formState } from '../state/form.svelte'

export const basePrice = 99;

export function calculatePrice() {
  const additionalPrice =
    additionalBookPrices.find((p) => p.num === formState.numBooks)?.addedPrice || 0;
  return basePrice + additionalPrice;
}
