// Company Branding Constants
export const COMPANY = {
  name: 'Vibe Delivery',
  tagline: 'Fast, Reliable, Affordable Delivery',
  logo: '🚚',
  logoFull: `🚚 Vibe`,
  colors: {
    primary: '#2563eb',
    secondary: '#4f46e5',
    accent: '#f59e0b',
  },
  contact: {
    email: 'support@vibedelivery.com',
    phone: '+880 1234-567890',
    address: 'Dhaka, Bangladesh',
  },
  social: {
    facebook: 'https://facebook.com/vibedelivery',
    twitter: 'https://twitter.com/vibedelivery',
    instagram: 'https://instagram.com/vibedelivery',
  },
};

// Bangladesh Districts
export const BANGLADESH_DISTRICTS = [
  'Dhaka',
  'Chattogram',
  'Sylhet',
  'Rangpur',
  'Rajshahi',
  'Khulna',
  'Barisal',
  'Mymensingh',
];

// Pricing Configuration
export const PRICING = {
  sameCity: {
    document: { base: 60, perKg: 0 },
    nonDocument: { base: 110, perKg: 15 },
  },
  outsideCity: {
    document: { base: 80, perKg: 0 },
    nonDocument: { base: 150, perKg: 20 },
  },
};
