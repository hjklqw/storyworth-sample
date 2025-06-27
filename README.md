This is a sample site written in Svelte, styled with Tailwind CSS and tested using Playwright. It is a reproduction of [Storyworth's Buy page](https://www.storyworth.com/purchase) created for educational purposes; I learned all these technologies, *and* built this sample within a single day.

Note that this is not meant to be a 1:1 copy, as different colours and slightly different styles are used. The header images however *were* taken from the official site.

## Deliberate differences

These are mostly things that are just super minor and do not contribute to the overall purpose of this project. Everything aside from these however have been faithfully recreated.

- The dropdown arrow in the Book Copies step has not been replaced with an icon, and is thus flush to the side instead of matching the padding
- There are less book number options
- The date field is just a normal text field, as adding a date picker would almost always just involve using a library
- The First and Last name fields in the Gift Recipient step are combined into one. This is more consistent with the name field in the Personal Info step, and the first name can be extracted with a `.split()` call for the right-side info section anyway (linguistic name ordering differences ignored for this sample)
- Stripe integration was not done; I have another project with this available [here](https://shop.michellepoon.ca/)

## Running locally

```
pnpm i
pnpm run dev
```

To run tests, use `pnpm run test`.
