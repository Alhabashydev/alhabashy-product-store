import type { ProductCategory, ProductType } from '../types/product';

export const categories: ProductCategory[] = ['Scripts', 'UI Systems', 'Tools', 'Templates', 'Bundles', 'Discord Bots', 'Websites'];

export const productTypes: ProductType[] = ['Digital Product', 'FiveM Script', 'FiveM UI', 'Discord Bot', 'Web Template', 'Bundle', 'Service'];

export const productStatuses = ['Active', 'Hidden', 'Draft', 'Archived', 'Coming Soon'] as const;

export const frameworks = ['QBCore', 'ESX', 'QBox', 'Standalone'];
export const inventories = ['ox_inventory', 'qb-inventory', 'qs-inventory', 'ps-inventory'];
export const targetSystems = ['ox_target', 'qb-target', 'textUI'];
export const dependencies = ['ox_lib', 'oxmysql', 'screenshot-basic', 'PolyZone', 'qb-core', 'es_extended'];
