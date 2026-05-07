export type ChangelogType = 'Added' | 'Changed' | 'Fixed' | 'Removed' | 'Security';

export interface ChangelogItem {
  id: string;
  title: string;
  version: string;
  date: string;
  type: ChangelogType;
  productSlug?: string;
  productName?: string;
  description: string;
  changes: string[];
}
