# cw-estate-storefront

The customer-facing shop: browse the catalog, add to cart, check out, see your account.

- Next.js 15 (App Router), React 19, axios.
- Talks to `cw-estate-catalog` (products) and `cw-estate-orders` (checkout, account) through one API client (`lib/api.ts`).

Run: `npm install && npm run dev`.
