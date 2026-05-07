import type { DocsArticle } from '../types/docs';

export const docs: DocsArticle[] = [
  {
    id: 'doc-banking', slug: 'premium-fivem-banking-ui', productSlug: 'premium-fivem-banking-ui', productName: 'Premium FiveM Banking UI', category: 'UI Systems', title: 'Premium FiveM Banking UI Setup Guide', version: '1.2.0', lastUpdated: '2026-04-22', difficulty: 'Medium', setupTime: '20-35 minutes', dependencies: ['ox_lib', 'oxmysql'],
    overview: 'Install the built NUI files, configure your framework bridge, import the SQL if needed, then connect Lua callbacks to your banking events.',
    installation: ['Place the resource in your resources folder.', 'Ensure it after your framework and ox_lib.', 'Import SQL if you use persistent transaction logs.', 'Restart the server and open the UI from your test command.'],
    configuration: ['Edit config.lua for framework type.', 'Set account labels and permission rules.', 'Connect transfer callback to your banking backend.'],
    configExample: "Config = {\n  Framework = 'qb',\n  Currency = 'USD',\n  UseTransactionLogs = true\n}",
    commonErrors: ['UI opens blank when build files are missing.', 'Transfers fail when the callback name does not match.', 'SQL errors appear when transaction table was not imported.'],
    troubleshooting: ['Check browser console using F8.', 'Confirm resource order in server.cfg.', 'Verify callback names in client.lua and server.lua.'],
    updateGuide: ['Backup config.lua.', 'Replace web/build files.', 'Merge new config options manually.'],
    faq: [{ question: 'Does it support QBox?', answer: 'Yes, the frontend is ready and the bridge can be adapted to QBox callbacks.' }]
  },
  {
    id: 'doc-boss', slug: 'boss-menu-ui-system', productSlug: 'boss-menu-ui-system', productName: 'Boss Menu UI System', category: 'UI Systems', title: 'Boss Menu UI System Documentation', version: '1.1.1', lastUpdated: '2026-04-18', difficulty: 'Medium', setupTime: '35-50 minutes', dependencies: ['ox_lib', 'oxmysql'],
    overview: 'Connect your job employee data, rank permissions, wings table, activity logs, and warnings history to the NUI-ready frontend.',
    installation: ['Add the resource.', 'Configure framework bridge.', 'Map employee fields to the UI data shape.', 'Test boss permissions.'],
    configuration: ['Define job groups.', 'Define responsibility labels.', 'Define wings such as Airship, Motorcycle, and Interceptor.'],
    configExample: "Config.Wings = { 'Airship', 'Motorcycle', 'Interceptor' }",
    commonErrors: ['Employees do not appear when job name mismatch exists.', 'Wings show empty when SQL table is not mapped.'],
    troubleshooting: ['Print callback payload.', 'Check boss grade permission.', 'Confirm wings table values.'],
    updateGuide: ['Merge new employee detail fields.', 'Rebuild frontend if you change data shape.'],
    faq: [{ question: 'Can warnings show per employee?', answer: 'Yes, warnings belong in the employee info view.' }]
  },
  {
    id: 'doc-invoice', slug: 'discord-invoice-bot', productSlug: 'discord-invoice-bot', productName: 'Discord Invoice Bot', category: 'Discord Bots', title: 'Discord Invoice Bot Setup', version: '1.3.0', lastUpdated: '2026-04-28', difficulty: 'Medium', setupTime: '25-40 minutes', dependencies: ['Node.js 20+', 'discord.js'],
    overview: 'Configure the token, products, payment methods, channels, roles, and invoice actions before running the bot.',
    installation: ['Install Node.js 20+.', 'Run npm install.', 'Edit config.json.', 'Run node index.js.'],
    configuration: ['Set product list.', 'Set invoice channel.', 'Set admin roles.', 'Set payment methods.'],
    configExample: "{\n  \"token\": \"YOUR_TOKEN\",\n  \"currency\": \"USD\"\n}",
    commonErrors: ['Invalid token.', 'Missing privileged intents.', 'Bot lacks send message permissions.'],
    troubleshooting: ['Check Discord developer portal settings.', 'Check role/channel permissions.'],
    updateGuide: ['Backup config.json and data files.', 'Replace index.js.', 'Run npm install if dependencies changed.'],
    faq: [{ question: 'Does it require a database?', answer: 'The demo concept uses JSON/local files, not an external database.' }]
  }
];
