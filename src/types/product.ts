export type ProductStatus = 'Active' | 'Hidden' | 'Draft' | 'Archived' | 'Coming Soon';
export type ProductCategory = 'Scripts' | 'UI Systems' | 'Tools' | 'Templates' | 'Bundles' | 'Discord Bots' | 'Websites';
export type ProductType = 'Digital Product' | 'FiveM Script' | 'FiveM UI' | 'Discord Bot' | 'Web Template' | 'Bundle' | 'Service';
export type BadgeType = 'New' | 'Sale' | 'Popular' | 'Bundle' | 'Featured' | 'Updated' | 'None';
export type Difficulty = 'Easy' | 'Medium' | 'Advanced';
export type PerformanceRating = 'Excellent' | 'Good' | 'Average';

export interface ProductRequirementProfile {
  frameworks: string[];
  inventories: string[];
  targetSystems: string[];
  dependencies: string[];
  sqlRequired: boolean;
  onesyncRequired: boolean;
  testedBuild: string;
  setupTime: string;
  configDifficulty: Difficulty;
  performanceRating: PerformanceRating;
}

export interface ProductChangelogEntry {
  version: string;
  date: string;
  changes: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  type: ProductType;
  price: number;
  oldPrice?: number;
  description: string;
  longDescription: string;
  images: string[];
  badge: BadgeType;
  tags: string[];
  rating: number;
  reviewCount: number;
  salesCount: number;
  features: string[];
  requirements: string[];
  changelog: ProductChangelogEntry[];
  license: string;
  version: string;
  lastUpdated: string;
  deliveryType: string;
  supportIncluded: boolean;
  isFeatured: boolean;
  isPopular: boolean;
  isNew: boolean;
  isBundle: boolean;
  includedProductIds?: string[];
  bundleSavings?: number;
  bundleType?: string;
  status: ProductStatus;
  frameworks: string[];
  inventories: string[];
  targetSystems: string[];
  dependencies: string[];
  sqlRequired: boolean;
  onesyncRequired: boolean;
  testedBuild: string;
  setupTime: string;
  configDifficulty: Difficulty;
  performanceRating: PerformanceRating;
}
