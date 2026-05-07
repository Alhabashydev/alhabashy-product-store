import type { Product } from '../types/product';

const baseImages = ['MT preview panel', 'Clean dark UI', 'Config-first resource'];

export const products: Product[] = [
  {
    id: 'prod-banking-ui', slug: 'premium-fivem-banking-ui', name: 'Premium FiveM Banking UI', category: 'UI Systems', type: 'FiveM UI', price: 39, oldPrice: 59,
    description: 'A polished banking tablet UI for roleplay servers with accounts, transfers, history, and clean responsive NUI screens.',
    longDescription: 'Built for serious FiveM servers that want a premium bank interface without a bloated frontend. The UI is practical, fast, and easy to connect to Lua callbacks.',
    images: baseImages, badge: 'Sale', tags: ['Banking', 'NUI', 'Responsive'], rating: 4.9, reviewCount: 64, salesCount: 240,
    features: ['Account overview cards', 'Transfer flow', 'Transaction table', 'Clean browser preview', 'Lua callback ready'],
    requirements: ['React build output', 'NUI resource wrapper', 'Framework bridge'],
    changelog: [{ version: '1.2.0', date: '2026-04-22', changes: ['Added transaction filters', 'Improved mobile scaling'] }],
    license: 'Single server license', version: '1.2.0', lastUpdated: '2026-04-22', deliveryType: 'Instant download', supportIncluded: true,
    isFeatured: true, isPopular: true, isNew: false, isBundle: false, status: 'Active',
    frameworks: ['QBCore', 'ESX', 'QBox'], inventories: ['ox_inventory', 'qb-inventory'], targetSystems: ['textUI'], dependencies: ['ox_lib', 'oxmysql'],
    sqlRequired: true, onesyncRequired: false, testedBuild: '7290+', setupTime: '20-35 minutes', configDifficulty: 'Medium', performanceRating: 'Excellent'
  },
  {
    id: 'prod-boss-menu', slug: 'boss-menu-ui-system', name: 'Boss Menu UI System', category: 'UI Systems', type: 'FiveM UI', price: 45, oldPrice: 65,
    description: 'A premium boss management panel with employees, ranks, responsibilities, wings, activity, and warnings.',
    longDescription: 'A practical in-game management panel that feels like a real control center instead of a generic dashboard. Includes employee detail views and backend-ready structure.',
    images: ['Boss menu overview', 'Employee profile', 'Wing assignment'], badge: 'Featured', tags: ['Boss Menu', 'Jobs', 'Wings'], rating: 5, reviewCount: 48, salesCount: 182,
    features: ['Employee profiles', 'Responsibility tags', 'Wing assignment', 'Warning history', 'Activity summary'], requirements: ['QBCore/ESX job data', 'NUI callbacks'],
    changelog: [{ version: '1.1.1', date: '2026-04-18', changes: ['Added wings preview', 'Reduced animation cost'] }],
    license: 'Single server license', version: '1.1.1', lastUpdated: '2026-04-18', deliveryType: 'Instant download', supportIncluded: true,
    isFeatured: true, isPopular: true, isNew: true, isBundle: false, status: 'Active',
    frameworks: ['QBCore', 'ESX', 'QBox'], inventories: ['ox_inventory', 'qb-inventory'], targetSystems: ['ox_target', 'qb-target', 'textUI'], dependencies: ['ox_lib', 'oxmysql'],
    sqlRequired: true, onesyncRequired: false, testedBuild: '7290+', setupTime: '35-50 minutes', configDifficulty: 'Medium', performanceRating: 'Excellent'
  },
  {
    id: 'prod-loading-screen', slug: 'fivem-loading-screen-pack', name: 'FiveM Loading Screen Pack', category: 'UI Systems', type: 'FiveM UI', price: 24, oldPrice: 34,
    description: 'A clean cinematic loading screen pack with compact music controls, right-side info menu, and social links.',
    longDescription: 'Designed to be simple, professional, and lightweight. No particles, no heavy 3D, no unnecessary effects.',
    images: ['Loading hero', 'Music player', 'Rules panel'], badge: 'Popular', tags: ['Loading', 'Music', 'Server Branding'], rating: 4.8, reviewCount: 89, salesCount: 410,
    features: ['Compact music player', 'Staff/rules/changelog panel', 'Responsive layout', 'Easy config file'], requirements: ['FiveM loading screen resource'],
    changelog: [{ version: '2.0.0', date: '2026-04-10', changes: ['Simplified right menu', 'Improved performance'] }],
    license: 'Single server license', version: '2.0.0', lastUpdated: '2026-04-10', deliveryType: 'Instant download', supportIncluded: true,
    isFeatured: false, isPopular: true, isNew: false, isBundle: false, status: 'Active',
    frameworks: ['Standalone'], inventories: [], targetSystems: ['textUI'], dependencies: [], sqlRequired: false, onesyncRequired: false, testedBuild: 'Any recent build', setupTime: '10-15 minutes', configDifficulty: 'Easy', performanceRating: 'Excellent'
  },
  {
    id: 'prod-store-shop-ui', slug: 'store-shop-ui', name: 'Store / Shop UI', category: 'UI Systems', type: 'FiveM UI', price: 29,
    description: 'Small in-game store UI with product browsing, quantity selector, cart, and clean purchase flow.',
    longDescription: 'Made for shops, markets, black markets, and simple item stores. The design is compact and NUI-friendly.',
    images: ['Shop product grid', 'Cart drawer', 'Quantity modal'], badge: 'New', tags: ['Shop', 'Cart', 'NUI'], rating: 4.7, reviewCount: 35, salesCount: 125,
    features: ['Cart system UI', 'Category filter', 'Quantity modal', 'Mock config data'], requirements: ['Lua item config later'],
    changelog: [{ version: '1.0.0', date: '2026-05-01', changes: ['Initial release'] }], license: 'Single server license', version: '1.0.0', lastUpdated: '2026-05-01', deliveryType: 'Instant download', supportIncluded: true,
    isFeatured: true, isPopular: false, isNew: true, isBundle: false, status: 'Active', frameworks: ['QBCore', 'ESX', 'QBox', 'Standalone'], inventories: ['ox_inventory', 'qb-inventory', 'qs-inventory', 'ps-inventory'], targetSystems: ['ox_target', 'qb-target', 'textUI'], dependencies: ['ox_lib'], sqlRequired: false, onesyncRequired: false, testedBuild: '7290+', setupTime: '15-25 minutes', configDifficulty: 'Easy', performanceRating: 'Excellent'
  },
  {
    id: 'prod-discord-invoice', slug: 'discord-invoice-bot', name: 'Discord Invoice Bot', category: 'Discord Bots', type: 'Discord Bot', price: 49,
    description: 'A professional Discord store invoice bot with products, discounts, order IDs, PDF button placeholders, and delivery flow.',
    longDescription: 'Built for Discord stores that need a clean invoicing process without a database. Uses JSON/local file style in the real bot concept and clean slash command flow.',
    images: ['Invoice embed', 'Product dropdown', 'Admin controls'], badge: 'Popular', tags: ['Discord.js', 'Invoices', 'Orders'], rating: 4.9, reviewCount: 56, salesCount: 205,
    features: ['Product selection', 'Discount flow', 'Invoice status buttons', 'Delivery rating prompt'], requirements: ['Node.js 20+', 'Discord bot token'], changelog: [{ version: '1.3.0', date: '2026-04-28', changes: ['Added order lookup command', 'Improved config sorting'] }],
    license: 'Single bot license', version: '1.3.0', lastUpdated: '2026-04-28', deliveryType: 'Instant download', supportIncluded: true,
    isFeatured: true, isPopular: true, isNew: false, isBundle: false, status: 'Active', frameworks: ['Standalone'], inventories: [], targetSystems: [], dependencies: ['Node.js', 'discord.js'], sqlRequired: false, onesyncRequired: false, testedBuild: 'Node 20+', setupTime: '25-40 minutes', configDifficulty: 'Medium', performanceRating: 'Good'
  },
  {
    id: 'prod-control-center', slug: 'fivem-control-center-bot', name: 'FiveM Control Center Bot', category: 'Tools', type: 'Discord Bot', price: 79, oldPrice: 99,
    description: 'A Discord control center concept for FiveM admin actions, screenshots, player stats, punishments, and management tools.',
    longDescription: 'Made for server staff teams that want a central Discord-based command center. Backend-ready product documentation and setup structure included.',
    images: ['Control dropdown', 'Player actions', 'Logs panel'], badge: 'Featured', tags: ['Admin', 'Discord', 'FiveM'], rating: 4.8, reviewCount: 31, salesCount: 77,
    features: ['Action categories', 'Role permissions', 'Player info panels', 'Screenshot button flow'], requirements: ['QBCore bridge', 'screenshot-basic', 'Discord bot token'], changelog: [{ version: '1.0.3', date: '2026-04-30', changes: ['Added screenshot action notes'] }],
    license: 'Single server license', version: '1.0.3', lastUpdated: '2026-04-30', deliveryType: 'Instant download', supportIncluded: true,
    isFeatured: true, isPopular: false, isNew: true, isBundle: false, status: 'Active', frameworks: ['QBCore', 'QBox'], inventories: ['qb-inventory', 'ox_inventory'], targetSystems: ['textUI'], dependencies: ['screenshot-basic', 'oxmysql'], sqlRequired: true, onesyncRequired: true, testedBuild: '7290+', setupTime: '60-90 minutes', configDifficulty: 'Advanced', performanceRating: 'Good'
  },
  {
    id: 'prod-server-website', slug: 'server-website-template', name: 'Server Website Template', category: 'Websites', type: 'Web Template', price: 55,
    description: 'Multi-page FiveM server website template with home, jobs, team, rules, changelog, guide, partners, and support sections.',
    longDescription: 'A premium web template for serious roleplay servers with clean routes, modern components, and backend-ready structure.',
    images: ['Website home', 'Jobs page', 'Team cards'], badge: 'New', tags: ['React', 'Website', 'FiveM'], rating: 4.8, reviewCount: 23, salesCount: 95,
    features: ['Multi-page routing', 'Server status placeholder', 'Team cards', 'Job pages', 'Rules and guide'], requirements: ['React/Vite hosting'], changelog: [{ version: '1.0.0', date: '2026-04-25', changes: ['Initial release'] }],
    license: 'Single project license', version: '1.0.0', lastUpdated: '2026-04-25', deliveryType: 'Instant download', supportIncluded: true,
    isFeatured: false, isPopular: false, isNew: true, isBundle: false, status: 'Active', frameworks: ['Standalone'], inventories: [], targetSystems: [], dependencies: ['Node.js'], sqlRequired: false, onesyncRequired: false, testedBuild: 'Modern browser', setupTime: '20-30 minutes', configDifficulty: 'Easy', performanceRating: 'Excellent'
  },
  {
    id: 'bundle-ui-complete', slug: 'complete-fivem-ui-bundle', name: 'Complete FiveM UI Bundle', category: 'Bundles', type: 'Bundle', price: 99, oldPrice: 137,
    description: 'A complete bundle containing Banking UI, Boss Menu UI, Loading Screen Pack, and Store / Shop UI.',
    longDescription: 'Best value bundle for server owners who want a consistent MT Black UI style across core player and staff flows.',
    images: ['Bundle cover', 'Included interfaces', 'Savings badge'], badge: 'Bundle', tags: ['Bundle', 'UI', 'Best Value'], rating: 5, reviewCount: 42, salesCount: 156,
    features: ['Four UI products', 'Unified visual style', 'Bundle documentation', 'Priority update notes'], requirements: ['Review each included product requirements'], changelog: [{ version: '1.0.0', date: '2026-05-02', changes: ['Initial bundle release'] }],
    license: 'Single server bundle license', version: '1.0.0', lastUpdated: '2026-05-02', deliveryType: 'Instant download', supportIncluded: true,
    isFeatured: true, isPopular: true, isNew: true, isBundle: true, includedProductIds: ['prod-banking-ui', 'prod-boss-menu', 'prod-loading-screen', 'prod-store-shop-ui'], bundleSavings: 38, bundleType: 'UI Pack', status: 'Active', frameworks: ['QBCore', 'ESX', 'QBox', 'Standalone'], inventories: ['ox_inventory', 'qb-inventory', 'qs-inventory', 'ps-inventory'], targetSystems: ['ox_target', 'qb-target', 'textUI'], dependencies: ['ox_lib', 'oxmysql'], sqlRequired: true, onesyncRequired: false, testedBuild: '7290+', setupTime: '1-2 hours', configDifficulty: 'Medium', performanceRating: 'Excellent'
  },
  {
    id: 'bundle-admin-tools', slug: 'admin-tools-bundle', name: 'Admin Tools Bundle', category: 'Bundles', type: 'Bundle', price: 109, oldPrice: 128,
    description: 'Bundle for serious staff teams: Control Center Bot plus Boss Menu UI System.',
    longDescription: 'A focused management bundle for staff-heavy servers that need strong admin tooling and clean employee management.',
    images: ['Admin bundle cover', 'Discord controls', 'Boss panel'], badge: 'Bundle', tags: ['Admin', 'Staff', 'Bundle'], rating: 4.9, reviewCount: 18, salesCount: 68,
    features: ['Control center workflows', 'Boss employee tools', 'Admin-ready docs', 'Bundle savings'], requirements: ['Review included product requirements'], changelog: [{ version: '1.0.0', date: '2026-05-02', changes: ['Initial bundle release'] }],
    license: 'Single server bundle license', version: '1.0.0', lastUpdated: '2026-05-02', deliveryType: 'Instant download', supportIncluded: true,
    isFeatured: false, isPopular: true, isNew: true, isBundle: true, includedProductIds: ['prod-control-center', 'prod-boss-menu'], bundleSavings: 19, bundleType: 'Admin Pack', status: 'Active', frameworks: ['QBCore', 'QBox'], inventories: ['qb-inventory', 'ox_inventory'], targetSystems: ['ox_target', 'qb-target', 'textUI'], dependencies: ['ox_lib', 'oxmysql', 'screenshot-basic'], sqlRequired: true, onesyncRequired: true, testedBuild: '7290+', setupTime: '2-3 hours', configDifficulty: 'Advanced', performanceRating: 'Good'
  },
  {
    id: 'bundle-website-store', slug: 'website-store-bundle', name: 'Website + Store Bundle', category: 'Bundles', type: 'Bundle', price: 89, oldPrice: 104,
    description: 'Bundle containing the Server Website Template and Discord Invoice Bot for digital store owners.',
    longDescription: 'A practical seller bundle for people who want a web presence and a Discord order flow.',
    images: ['Website store cover', 'Invoice preview', 'Website pages'], badge: 'Bundle', tags: ['Website', 'Discord', 'Store'], rating: 4.7, reviewCount: 14, salesCount: 51,
    features: ['Website template', 'Invoice bot', 'Setup documentation', 'Store owner flow'], requirements: ['Node.js for bot', 'React hosting for website'], changelog: [{ version: '1.0.0', date: '2026-05-03', changes: ['Initial bundle release'] }],
    license: 'Single project bundle license', version: '1.0.0', lastUpdated: '2026-05-03', deliveryType: 'Instant download', supportIncluded: true,
    isFeatured: false, isPopular: false, isNew: true, isBundle: true, includedProductIds: ['prod-server-website', 'prod-discord-invoice'], bundleSavings: 15, bundleType: 'Seller Pack', status: 'Active', frameworks: ['Standalone'], inventories: [], targetSystems: [], dependencies: ['Node.js'], sqlRequired: false, onesyncRequired: false, testedBuild: 'Modern browser / Node 20+', setupTime: '1-2 hours', configDifficulty: 'Medium', performanceRating: 'Good'
  },
  {
    id: 'prod-black-market', slug: 'black-market-ui-system', name: 'Black Market UI System', category: 'UI Systems', type: 'FiveM UI', price: 35,
    description: 'Buying and selling interface for black market style shops with cart flow, category filters, and payment selection.',
    longDescription: 'Compact premium FiveM NUI designed for config-driven buy/sell products. Includes empty states, category filters, and payment method UI.',
    images: ['Black market buy tab', 'Sell tab', 'Cart flow'], badge: 'Updated', tags: ['Black Market', 'Buy/Sell', 'NUI'], rating: 4.8, reviewCount: 39, salesCount: 144,
    features: ['Buying tab', 'Selling tab', 'Quantity prompt', 'Cart preview', 'Payment selector'], requirements: ['Item config', 'Inventory bridge later'], changelog: [{ version: '1.1.0', date: '2026-05-04', changes: ['Added better empty states', 'Improved category filters'] }],
    license: 'Single server license', version: '1.1.0', lastUpdated: '2026-05-04', deliveryType: 'Instant download', supportIncluded: true,
    isFeatured: true, isPopular: true, isNew: false, isBundle: false, status: 'Active', frameworks: ['QBCore', 'ESX', 'QBox'], inventories: ['ox_inventory', 'qb-inventory', 'qs-inventory', 'ps-inventory'], targetSystems: ['ox_target', 'qb-target', 'textUI'], dependencies: ['ox_lib'], sqlRequired: false, onesyncRequired: false, testedBuild: '7290+', setupTime: '20-35 minutes', configDifficulty: 'Easy', performanceRating: 'Excellent'
  }
];
