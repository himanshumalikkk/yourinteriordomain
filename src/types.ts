export interface Project {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  location: string;
  image: string;
  size: string;
  year: string;
  description: string;
  highlights: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
}

export interface TimelineStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  caption: string;
  aspect: string; // e.g. 'aspect-square', 'aspect-[4/5]', 'aspect-[3/4]'
}
