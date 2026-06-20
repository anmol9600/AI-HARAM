import { Package, Review } from './types';

// Images provided by the user
export const heroImage = 'https://i.pinimg.com/736x/f1/4d/bb/f14dbb8116639f8b2f2e75f5c02737d1.jpg';

export const aboutImages = [
  'https://i.pinimg.com/736x/6c/6c/e3/6c6ce35320c8f2454f87e0ac83589832.jpg',
  'https://i.pinimg.com/736x/69/00/95/6900952b20e2d8e77c63779a9aec0747.jpg',
  'https://i.pinimg.com/1200x/08/47/31/0847310bb2c5f810476817e0858a3867.jpg'
];

export const packageImages = [
  'https://i.pinimg.com/1200x/24/7b/36/247b36c6b1475fe7405647c54c4a616d.jpg',
  'https://i.pinimg.com/736x/92/1f/f9/921ff99d18598b360b2a5705d1f7b653.jpg',
  'https://i.pinimg.com/736x/1e/f9/ed/1ef9ed0de60fb7ae04073b10f0b05951.jpg'
];

export const galleryImages = [
  'https://i.pinimg.com/736x/28/43/23/28432334b5bf415ebd5e64aebc892a41.jpg',
  'https://i.pinimg.com/736x/74/dc/8d/74dc8d260fb5282d68d6076fd0ae04dc.jpg',
  'https://i.pinimg.com/1200x/74/9a/c4/749ac4197907f303468704333d878f82.jpg',
  'https://i.pinimg.com/1200x/7b/6e/14/7b6e148152de49bf720d92d07d918072.jpg',
  'https://i.pinimg.com/1200x/df/5d/17/df5d171154641dfcf4b4d753707ef723.jpg',
  'https://i.pinimg.com/736x/2e/c4/f0/2ec4f0b2ecff088135959a5641ab713e.jpg'
];

export const packages: Package[] = [
  {
    id: 'pkg_economy',
    title: 'Economy Umrah Package',
    nights: 14,
    price: 1200,
    rating: 4.8,
    features: ['Visa Processing included', 'Economy Flights (Round Trip)', '3-Star Hotels in Makkah & Madinah', 'Shared Transport', 'Guided Ziyarat Tour'],
    image: packageImages[0]
  },
  {
    id: 'pkg_premium',
    title: 'Premium Umrah Package',
    nights: 15,
    price: 2500,
    rating: 4.9,
    features: ['Express Visa Processing', 'Direct Business/Economy Flights', '5-Star Hotels within walking distance', 'Private SUV Transport', 'Dedicated Guide & Ziyarat'],
    image: packageImages[1]
  },
  {
    id: 'pkg_hajj',
    title: 'VIP Hajj Package 2026',
    nights: 21,
    price: 8500,
    rating: 5.0,
    features: ['Hajj Visa Guarantee', 'Premium Flights with renowned airlines', '5-Star Hotels & VIP Mina/Arafat Tents', 'Private Luxury Bus Transport', 'Scholar-guided Hajj rituals'],
    image: packageImages[2]
  }
];

export const reviews: Review[] = [
  {
    id: 'rev_1',
    name: 'Tariq Al-Fayed',
    location: 'London, UK',
    rating: 5,
    comment: 'An absolutely flawless spiritual journey. The team handled our visa processing and flight bookings seamlessly. The hotels in Makkah were literally steps away from the Haram. Highly recommend their VIP packages.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
  },
  {
    id: 'rev_2',
    name: 'Aisha Rahman',
    location: 'Toronto, CA',
    rating: 5,
    comment: 'This was my first Umrah and I was very nervous about the logistics, but this agency took care of everything. The guided Ziyarat tours in Madinah were deeply educational and beautiful.',
    avatar: 'https://i.pravatar.cc/150?u=a04258a2462d826712d'
  },
  {
    id: 'rev_3',
    name: 'Omar & Fatima',
    location: 'Dubai, UAE',
    rating: 4.9,
    comment: 'Exceptional service and beautiful Middle-Eastern hospitality from the moment we booked. The applet interactive maps they provided really helped us navigate the key locations easily.',
    avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d'
  }
];
