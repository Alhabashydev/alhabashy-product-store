export interface DocsArticle {
  id: string;
  slug: string;
  productSlug: string;
  productName: string;
  category: string;
  title: string;
  version: string;
  lastUpdated: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  setupTime: string;
  dependencies: string[];
  overview: string;
  installation: string[];
  configuration: string[];
  configExample: string;
  commonErrors: string[];
  troubleshooting: string[];
  updateGuide: string[];
  faq: { question: string; answer: string }[];
}
