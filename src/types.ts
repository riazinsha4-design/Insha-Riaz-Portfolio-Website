export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Business Websites' | 'Landing Pages' | 'WordPress Projects' | 'Creative Web Design';
  description: string;
  image: string;
  tags: string[];
  sampleLabel: string;
  features: string[];
  challenge: string;
  solution: string;
  techHighlights: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  service: string;
  details: string;
  timestamp: string;
}
