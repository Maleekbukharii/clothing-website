export interface CardData2 {
  slug: string;
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  productDetails: string;
  careGuide: string;
  sizeChart: string[];
  price: number;
}

export const cardData2: CardData2[] = [
  {
    id: 1,
    slug: 'bachira-tee',
    imageSrc: '/Bachira.jpeg',
    title: 'Bachira tee',
    description: 'A stylish tee featuring Bachira.',
    productDetails: 'This premium tee is made from 100% cotton, ensuring comfort and durability. It features a unique design inspired by Bachira, making it a perfect addition to any fan\'s wardrobe.',
    careGuide: 'Machine wash cold with like colors. Tumble dry low. Do not bleach. Iron on low heat if necessary.',
    sizeChart: ['S', 'M', 'L', 'XL', 'XXL'],
    price: 29.99,
  },
  {
    id: 2,
    slug: 'isagi-tee',
    imageSrc: '/isagi.jpeg',
    title: 'Isagi tee',
    description: 'A stylish tee featuring Isagi.',
    productDetails: 'Made with high-quality fabric, this tee offers a perfect fit and a bold design featuring Isagi. It\'s soft, breathable, and ideal for everyday wear.',
    careGuide: 'Machine wash warm. Do not bleach. Tumble dry low. Iron on medium heat if needed.',
    sizeChart: ['S', 'M', 'L', 'XL', 'XXL'],
    price: 27.99,
  },
  {
    id: 3,
    slug: 'makimom-tee',
    imageSrc: '/makimom.jpg',
    title: 'Makimom tee',
    description: 'A stylish tee featuring Makimom.',
    productDetails: 'This tee showcases Makimom with a vibrant design on high-quality fabric. It\'s lightweight, soft, and perfect for fans who want to show their love for the character.',
    careGuide: 'Hand wash in cold water. Do not bleach. Hang dry. Iron on low heat.',
    sizeChart: ['S', 'M', 'L', 'XL', 'XXL'],
    price: 25.99,
  },
  {
    id: 4,
    slug: 'sakuna-tee',
    imageSrc: '/sakunatee.jpeg',
    title: 'Sakuna tee',
    description: 'A stylish tee featuring Sakuna.',
    productDetails: 'Featuring a detailed graphic of Sakuna, this tee is crafted from a blend of cotton and polyester for a comfortable and durable fit. Perfect for any casual occasion.',
    careGuide: 'Machine wash cold. Tumble dry on low. Do not iron directly on the design. Do not bleach.',
    sizeChart: ['S', 'M', 'L', 'XL', 'XXL'],
    price: 28.99,
  },
  {
    id: 5,
    slug: 'suguru-tee',
    imageSrc: '/sugurutee.jpeg',
    title: 'Suguru tee',
    description: 'A stylish tee featuring Suguru.',
    productDetails: 'This Suguru tee is made from 100% organic cotton. It offers a relaxed fit and features a vibrant Suguru design, perfect for making a statement.',
    careGuide: 'Machine wash with cold water. Tumble dry on low heat. Do not bleach. Iron on low if necessary.',
    sizeChart: ['S', 'M', 'L', 'XL', 'XXL'],
    price: 31.99,
  },
];
