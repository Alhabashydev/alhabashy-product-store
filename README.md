# Alhabashy Products Store

A premium React + Vite + TypeScript frontend store using the MT Black visual style. It includes products, bundles, cart, mock checkout, docs, changelog, support, account/orders, admin management, localStorage persistence, and a custom toast system.

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
```

## Main edit files

- Products: `src/data/products.ts`
- Categories: `src/data/categories.ts`
- Coupons: `src/data/coupons.ts`
- Announcements: `src/data/announcements.ts`
- Docs: `src/data/docs.ts`
- Changelogs: `src/data/changelog.ts`
- FAQs: `src/data/faqs.ts`
- Store settings: `src/data/siteConfig.ts`

## Backend-ready notes

Local demo state is centralized in `src/context/StoreContext.tsx` and cart state is in `src/context/CartContext.tsx`. Replace the localStorage utilities in `src/lib/storage.ts` with API calls, then move create/update/delete functions inside `StoreContext.tsx` to async requests.
