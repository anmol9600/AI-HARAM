export interface Package {
  id: string;
  title: string;
  nights: number;
  price: number;
  rating: number;
  features: string[];
  image: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface FormState {
  isOpen: boolean;
  selectedPackage?: string;
}
