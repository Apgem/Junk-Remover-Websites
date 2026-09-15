export type PageId = 'home' | 'services' | 'work' | 'about' | 'reviews' | 'contact';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image?: string;
  features: string[];
}

export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  attribution?: string;
  rating?: number;
  highlight?: string;
  userReviews?: string;
  timeAgo?: string;
  ownerResponse?: string;
  isNew?: boolean;
  hasPhoto?: boolean;
}

export interface WorkStep {
  number: string;
  title: string;
  description: string;
  subtext: string;
  image?: string;
}

export interface PrincipleItem {
  number: string;
  title: string;
  description: string;
}
