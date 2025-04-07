export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'High-quality noise-canceling headphones for music and calls.',
    price: 79.99,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT649HCUAz0rT0VM6yydKifFbvnT3Cd_MdKQg&s',
    stock: 12,
  },
  {
    id: 2,
    name: 'Mechanical Keyboard',
    description: 'RGB backlit keyboard with tactile switches for fast typing.',
    price: 59.99,
    image: 'https://m.media-amazon.com/images/I/61P7MvyRbUL._AC_SL1500_.jpg',
    stock: 8,
  },
  {
    id: 3,
    name: 'USB-C Hub',
    description: 'Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader.',
    price: 34.5,
    image:
      'https://ziketech.com/cdn/shop/files/ZIKE-6-in-1-USB-C-Hub-for-iPad-Pro-Air-Z39S-2.webp?v=1734594530&width=1445',
    stock: 15,
  },
  {
    id: 4,
    name: 'Smartwatch',
    description: 'Fitness tracking, notifications, and heart rate monitoring.',
    price: 129.0,
    image:
      'https://images-cdn.ubuy.co.in/633b12488d2edc65997f4c20-smart-watch-bluetooth-smartwatch-touch.jpg',
    stock: 6,
  },
  {
    id: 5,
    name: 'Retro VCR 📼',
    description:
      'Because nostalgia is priceless. Limited rewind button edition.',
    price: 149.95,
    image: 'https://m.media-amazon.com/images/I/71CS2yM-h4L.jpg',
    stock: 1,
  },
];
