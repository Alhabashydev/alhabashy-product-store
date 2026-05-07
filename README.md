# ALHABASHY STORE

Premium multi-page digital products store frontend built using React, Vite, TypeScript, Tailwind CSS, React Router, Framer Motion, and localStorage.

Designed with the custom **MT Black** design system focused on:

* Premium dark UI
* High contrast readability
* Clean ecommerce UX
* Lightweight performance
* Practical admin tools
* Backend-ready architecture

---

# Preview

ALHABASHY STORE is a professional frontend ecommerce/store system made for selling:

* FiveM Scripts
* FiveM UI Systems
* Discord Bots
* Web Templates
* Server Tools
* Product Bundles
* Downloadable Products
* Services

This project is frontend-only and uses localStorage to simulate:

* Orders
* Admin changes
* Coupons
* Settings
* Cart persistence
* Announcements

No real backend or payment provider is included.

---

# Main Features

## Customer Website

* Premium homepage
* Product catalog system
* Product details pages
* Advanced filters & sorting
* Product search
* Bundle system
* Cart system
* Coupon system
* Frontend checkout flow
* Account/orders page
* Product documentation system
* Changelog system
* Support & FAQ page
* Requirements compatibility checker
* Related products
* Responsive mobile layout

---

## Admin Panel

Complete frontend-only admin control center:

* Overview dashboard
* Revenue analytics
* Orders management
* Product management
* Bundle management
* Coupon management
* Changelog management
* Announcement management
* Store settings
* Product editor
* Product duplication
* Order status updates
* Mock analytics charts

All changes are saved using localStorage.

---

# MT BLACK Design System

Visual style direction:

* Deep black backgrounds
* Compact premium layout
* Sticky glass navigation
* Clean dark surfaces
* Off-white readable text
* Lightweight animations
* Soft borders
* Smooth hover transitions
* Minimal distractions
* Professional ecommerce feel

---

# Tech Stack

## Frontend

* React
* Vite
* TypeScript
* Tailwind CSS
* React Router
* Framer Motion
* lucide-react
* Recharts

## State Management

* React Context API
* Custom hooks
* localStorage persistence

---

# Installation Guide

## 1. Clone Repository

```bash
git clone https://github.com/Alhabashydev/alhabashy-store.git
```

---

## 2. Open Project Folder

```bash
cd alhabashy-store
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Start Development Server

```bash
npm run dev
```

Vite will generate a local development URL.

Example:

```txt
http://localhost:5173
```

---

## 5. Build Production Version

```bash
npm run build
```

Production files will be generated inside:

```txt
dist/
```

---

## 6. Preview Production Build

```bash
npm run preview
```

---

# Project Structure

```txt
src/
│
├── components/
├── context/
├── hooks/
├── data/
├── lib/
├── pages/
├── types/
│
├── App.tsx
├── main.tsx
└── index.css
```

---

# Components Structure

```txt
components/
│
├── admin/
├── analytics/
├── announcements/
├── bundles/
├── cart/
├── changelog/
├── checkout/
├── coupons/
├── docs/
├── layout/
├── products/
├── requirements/
├── toast/
└── ui/
```

---

# Main Routes

## Customer Routes

```txt
/
 /products
 /products/:slug
 /products/:slug/changelog
 /cart
 /checkout
 /docs
 /docs/:slug
 /changelog
 /support
 /account
 /roadmap
```

---

## Admin Route

```txt
/admin
```

---

# Editable Files

## Products

Edit products here:

```txt
src/data/products.ts
```

You can modify:

* Product name
* Price
* Images
* Features
* Requirements
* Tags
* Categories
* Compatibility
* Bundle info
* Ratings
* Changelog
* Support info

---

## Coupons

Edit coupons here:

```txt
src/data/coupons.ts
```

Supports:

* Percentage discounts
* Fixed discounts
* Usage limits
* Expiry dates
* Product/category restrictions

---

## Documentation

Edit docs here:

```txt
src/data/docs.ts
```

Supports:

* Installation guides
* Config examples
* Troubleshooting
* FAQ
* Setup steps

---

## Changelog

Edit changelog entries here:

```txt
src/data/changelog.ts
```

Supports:

* Added
* Changed
* Fixed
* Removed
* Security updates

---

## Store Settings

Edit global settings here:

```txt
src/data/siteConfig.ts
```

Supports:

* Store name
* Currency
* Discord links
* Announcement toggles
* Feature toggles

---

## FAQ

Edit FAQs here:

```txt
src/data/faqs.ts
```

---

## Testimonials

Edit testimonials here:

```txt
src/data/testimonials.ts
```

---

# Cart System

Cart system features:

* Add to cart
* Remove items
* Quantity updates
* Coupon support
* Persistent localStorage saving
* Bundle support

Main files:

```txt
src/context/CartContext.tsx
src/hooks/useCart.ts
```

---

# Toast Notification System

Custom lightweight toast system.

Supports:

* Success
* Error
* Warning
* Info

Main files:

```txt
src/context/ToastContext.tsx
src/components/toast/
```

---

# Requirements Compatibility Checker

Each product supports compatibility checking for:

## Frameworks

* QBCore
* ESX
* QBox
* Standalone

## Inventories

* ox_inventory
* qb-inventory
* qs-inventory
* ps-inventory

## Target Systems

* ox_target
* qb-target
* textUI

## Dependency Checking

* ox_lib
* oxmysql
* PolyZone
* screenshot-basic
* custom dependencies

---

# Admin System

Frontend-only admin dashboard with:

## Product Management

* Add products
* Edit products
* Delete products
* Duplicate products
* Toggle statuses

---

## Bundle Management

* Create bundles
* Add included products
* Set savings
* Configure pricing

---

## Orders Management

* View orders
* Update statuses
* View timelines
* Mock refund actions

---

## Coupon Management

* Create coupons
* Enable/disable coupons
* Edit restrictions
* Configure expiry

---

## Analytics

* Revenue charts
* Orders charts
* Product performance
* Category sales
* Coupon usage

---

# Backend Integration Guide

This project was intentionally built to be backend-ready.

## Recommended Backend Stack

* Node.js
* Express
* PostgreSQL / MySQL
* Prisma / Drizzle ORM
* JWT Authentication
* Stripe
* Tebex
* PayPal APIs

---

## Replace localStorage Later

Current storage logic:

```txt
src/context/StoreContext.tsx
src/context/CartContext.tsx
src/lib/storage.ts
```

Future API example:

```ts
GET /api/products
POST /api/orders
PATCH /api/orders/:id
DELETE /api/products/:id
```

---

# Performance Goals

This project intentionally avoids:

* Heavy 3D
* Particle systems
* Huge shadows
* Laggy animations
* Massive libraries

Focus:

* Fast loading
* Smooth UX
* Clean rendering
* Responsive layout
* Lightweight animations

---

# Accessibility

* Semantic HTML
* Keyboard-friendly
* Focus states
* Proper labels
* High contrast UI
* Responsive typography

---

# Future Improvements

Possible future upgrades:

* Real backend
* Real authentication
* Stripe/Tebex integration
* License key system
* Download delivery system
* Real analytics
* Admin permissions
* Multi-language support
* Theme switcher
* CMS integration

---

# Notes

This project is:

* Frontend only
* Demo/payment mock only
* LocalStorage powered
* Portfolio/store showcase ready

---

# License

This project is intended for:

* Portfolio use
* Educational use
* Frontend architecture reference
* UI/UX showcase

---

# Credits

Designed and developed using the ALHABASHY MT Black design system.
