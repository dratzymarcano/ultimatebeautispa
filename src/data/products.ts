export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: string;
  image: string;
  gallery: string[];
  category: string;
  badge?: string;
  icon: string;
  ingredients: string[];
  howToUse: string;
  size: string;
  relatedProducts: string[];
}

export const products: Product[] = [
  {
    id: 'beard-oil',
    name: 'Signature Beard Oil',
    description: 'A luxurious blend of argan, jojoba, and essential oils to nourish and soften your beard while promoting healthy growth.',
    longDescription: 'Our Signature Beard Oil is formulated with a premium blend of cold-pressed argan and jojoba oils, enriched with vitamin E and essential oils of cedarwood and bergamot. This lightweight yet deeply nourishing formula absorbs quickly to soften coarse facial hair, reduce itchiness, and promote healthy beard growth. The subtle woodsy scent lasts all day without overpowering.',
    price: '18 000 XAF',
    image: 'https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?w=600&q=80',
      'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=600&q=80',
      'https://images.unsplash.com/photo-1621607505862-4c0c0a3a3e57?w=600&q=80',
    ],
    category: 'Beard Care',
    badge: 'Best Seller',
    icon: 'lucide:droplets',
    ingredients: ['Argan Oil', 'Jojoba Oil', 'Vitamin E', 'Cedarwood Essential Oil', 'Bergamot Essential Oil', 'Sweet Almond Oil'],
    howToUse: 'Apply 3-5 drops to palms, rub together, and work through your beard from roots to tips. Use daily after washing for best results. Can also be applied to the skin beneath your beard to prevent dryness and itchiness.',
    size: '30ml',
    relatedProducts: ['aftershave-balm', 'pomade', 'beard-wash'],
  },
  {
    id: 'pomade',
    name: 'Matte Finish Pomade',
    description: 'Strong hold, matte finish pomade for effortless styling. Water-soluble formula washes out easily without residue.',
    longDescription: 'Achieve the perfect style with our Matte Finish Pomade. Engineered for a strong, all-day hold with a natural matte finish that looks and feels like your hair — just better. The water-soluble formula means no greasy buildup and easy washout. Infused with beeswax and kaolin clay for texture and definition without stiffness or flaking.',
    price: '15 000 XAF',
    image: 'https://images.unsplash.com/photo-1597854710635-3c3792930f8a?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1597854710635-3c3792930f8a?w=600&q=80',
      'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=600&q=80',
      'https://images.unsplash.com/photo-1621607505862-4c0c0a3a3e57?w=600&q=80',
    ],
    category: 'Hair Styling',
    icon: 'lucide:sparkle',
    ingredients: ['Beeswax', 'Kaolin Clay', 'Coconut Oil', 'Shea Butter', 'Lanolin', 'Castor Oil'],
    howToUse: 'Scoop a small amount with your finger, emulsify between palms until warm, and style into damp or dry hair. Build up product as needed for desired hold. Restyle throughout the day by adding a bit of water.',
    size: '100g',
    relatedProducts: ['hair-oil', 'texture-spray', 'beard-oil'],
  },
  {
    id: 'face-serum',
    name: 'Vitamin C Face Serum',
    description: 'Brightening serum packed with vitamin C, hyaluronic acid, and niacinamide for radiant, youthful skin.',
    longDescription: 'Transform your complexion with our potent Vitamin C Face Serum. Formulated with 20% L-ascorbic acid, hyaluronic acid for deep hydration, and niacinamide to even skin tone. This powerful trio works together to brighten dark spots, boost collagen production, and protect against environmental damage. Suitable for all skin types, this lightweight serum absorbs quickly and layers beautifully under moisturizer and sunscreen.',
    price: '25 000 XAF',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80',
      'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&q=80',
      'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=600&q=80',
    ],
    category: 'Skincare',
    badge: 'New',
    icon: 'lucide:sun',
    ingredients: ['20% L-Ascorbic Acid (Vitamin C)', 'Hyaluronic Acid', 'Niacinamide', 'Ferulic Acid', 'Vitamin E', 'Aloe Vera Extract'],
    howToUse: 'After cleansing, apply 4-5 drops to face and neck. Gently pat into skin and allow to absorb for 1-2 minutes before applying moisturizer. Use every morning for best results. Always follow with sunscreen during the day.',
    size: '30ml',
    relatedProducts: ['shea-butter', 'charcoal-cleanser', 'moisturizer'],
  },
  {
    id: 'shea-butter',
    name: 'Whipped Shea Body Butter',
    description: 'Rich, deeply moisturizing body butter with raw shea, cocoa butter, and coconut oil. Perfect for all skin types.',
    longDescription: 'Indulge your skin with our Whipped Shea Body Butter — a rich, hand-whipped blend of raw shea butter from West Africa, organic cocoa butter, and virgin coconut oil. This ultra-nourishing formula melts into skin on contact, delivering long-lasting hydration and a healthy glow. Lightly scented with vanilla and warm amber that lingers beautifully all day. Free from parabens, artificial colors, and synthetic fragrances.',
    price: '12 000 XAF',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80',
      'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&q=80',
      'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=600&q=80',
    ],
    category: 'Body Care',
    icon: 'lucide:leaf',
    ingredients: ['Raw Shea Butter', 'Cocoa Butter', 'Virgin Coconut Oil', 'Sweet Almond Oil', 'Vitamin E', 'Natural Vanilla Extract'],
    howToUse: 'Apply generously to body after showering while skin is still slightly damp. Focus on dry areas like elbows, knees, and heels. Can also be used on hands and cuticles. For best absorption, allow a minute before dressing.',
    size: '200ml',
    relatedProducts: ['face-serum', 'hair-oil', 'exfoliating-scrub'],
  },
  {
    id: 'hair-oil',
    name: 'Restorative Hair Oil',
    description: 'Lightweight argan and castor oil blend that strengthens, adds shine, and prevents breakage for all hair textures.',
    longDescription: 'Revive damaged, dry, or brittle hair with our Restorative Hair Oil. This lightweight yet powerful blend combines cold-pressed Jamaican black castor oil with Moroccan argan oil, rosemary, and peppermint for a formula that strengthens each strand from root to tip. Regular use promotes thicker, healthier hair growth while adding a natural, silky shine. Works beautifully on all hair textures — from straight to tightly coiled.',
    price: '20 000 XAF',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&q=80',
      'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=600&q=80',
      'https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?w=600&q=80',
    ],
    category: 'Hair Care',
    badge: 'Staff Pick',
    icon: 'lucide:wind',
    ingredients: ['Jamaican Black Castor Oil', 'Argan Oil', 'Rosemary Essential Oil', 'Peppermint Essential Oil', 'Avocado Oil', 'Vitamin E'],
    howToUse: 'Apply a few drops to scalp and hair, focusing on ends and any dry areas. Massage into scalp to stimulate circulation. Can be used as a pre-wash treatment (leave for 30 min), a daily styling oil, or an overnight deep treatment with a satin bonnet.',
    size: '50ml',
    relatedProducts: ['pomade', 'shea-butter', 'leave-in-conditioner'],
  },
  {
    id: 'aftershave-balm',
    name: 'Cooling Aftershave Balm',
    description: 'Soothing post-shave balm with aloe vera, witch hazel, and menthol to calm irritation and hydrate skin.',
    longDescription: 'Formulated specifically for sensitive post-shave skin, our Cooling Aftershave Balm delivers instant relief from razor burn, bumps, and irritation. The alcohol-free formula features aloe vera to soothe, witch hazel to tone, and a touch of natural menthol for a refreshing cooling sensation. Enriched with tea tree oil for its antibacterial properties and shea butter for deep hydration that lasts all day.',
    price: '14 000 XAF',
    image: 'https://images.unsplash.com/photo-1621607505862-4c0c0a3a3e57?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1621607505862-4c0c0a3a3e57?w=600&q=80',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80',
      'https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?w=600&q=80',
    ],
    category: 'Shave Care',
    icon: 'lucide:snowflake',
    ingredients: ['Aloe Vera Gel', 'Witch Hazel', 'Natural Menthol', 'Tea Tree Oil', 'Shea Butter', 'Chamomile Extract'],
    howToUse: 'After shaving, pat face dry with a clean towel. Apply a dime-sized amount to palms and gently press onto shaved areas. Allow to absorb for 30 seconds. Can also be used on neck and any area prone to razor irritation.',
    size: '100ml',
    relatedProducts: ['beard-oil', 'face-serum', 'charcoal-cleanser'],
  },
  {
    id: 'charcoal-cleanser',
    name: 'Activated Charcoal Cleanser',
    description: 'Deep-cleansing gel wash with activated charcoal and salicylic acid to purify pores and fight breakouts.',
    longDescription: 'Our Activated Charcoal Cleanser is a powerful yet gentle gel wash that draws out impurities, excess oil, and environmental pollutants from deep within your pores. Activated bamboo charcoal acts like a magnet for toxins while salicylic acid gently exfoliates to prevent breakouts. Balanced with soothing green tea extract to calm skin and prevent dryness. Perfect for oily, combination, and acne-prone skin.',
    price: '16 000 XAF',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80',
      'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&q=80',
      'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=600&q=80',
    ],
    category: 'Skincare',
    icon: 'lucide:flame',
    ingredients: ['Activated Bamboo Charcoal', 'Salicylic Acid (2%)', 'Green Tea Extract', 'Glycerin', 'Aloe Vera', 'Witch Hazel'],
    howToUse: 'Wet face with warm water. Apply a small amount to palms and lather. Massage onto face in circular motions for 30–60 seconds, avoiding the eye area. Rinse thoroughly with lukewarm water. Use morning and evening.',
    size: '150ml',
    relatedProducts: ['face-serum', 'aftershave-balm', 'moisturizer'],
  },
  {
    id: 'beard-wash',
    name: 'Gentle Beard Wash',
    description: 'A sulfate-free beard shampoo that cleanses without stripping natural oils. Leaves beard soft, fresh, and manageable.',
    longDescription: 'Keep your beard clean and conditioned with our Gentle Beard Wash. Unlike regular shampoo that strips natural oils, this sulfate-free formula was designed specifically for facial hair and the sensitive skin beneath. Enriched with argan oil, aloe vera, and tea tree oil, it gently removes dirt, sweat, and product buildup while keeping your beard soft, hydrated, and pleasantly scented with eucalyptus and mint.',
    price: '13 000 XAF',
    image: 'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=600&q=80',
      'https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?w=600&q=80',
      'https://images.unsplash.com/photo-1597854710635-3c3792930f8a?w=600&q=80',
    ],
    category: 'Beard Care',
    icon: 'lucide:waves',
    ingredients: ['Argan Oil', 'Aloe Vera', 'Tea Tree Oil', 'Eucalyptus Essential Oil', 'Peppermint Oil', 'Glycerin'],
    howToUse: 'Wet beard thoroughly with warm water. Apply a small amount of beard wash and work into a lather, massaging into the beard and skin beneath. Rinse well. Follow with Signature Beard Oil for optimal results. Use 2-3 times per week.',
    size: '200ml',
    relatedProducts: ['beard-oil', 'aftershave-balm', 'pomade'],
  },
  {
    id: 'exfoliating-scrub',
    name: 'Coffee & Brown Sugar Scrub',
    description: 'Invigorating body scrub with ground coffee and brown sugar to buff away dead skin and boost circulation.',
    longDescription: 'Wake up your skin with our Coffee & Brown Sugar Scrub. This indulgent, handcrafted scrub combines freshly ground Arabica coffee beans with brown sugar crystals for a dual-action exfoliation that buffs away dead skin cells and stimulates blood flow. Blended with coconut oil and vitamin E to deeply moisturize as it scrubs, leaving skin impossibly smooth, soft, and glowing. The natural caffeine helps reduce the appearance of cellulite and puffiness.',
    price: '15 000 XAF',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=600&q=80',
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80',
    ],
    category: 'Body Care',
    badge: 'New',
    icon: 'lucide:coffee',
    ingredients: ['Ground Arabica Coffee', 'Brown Sugar', 'Virgin Coconut Oil', 'Vitamin E', 'Cinnamon Extract', 'Vanilla Essential Oil'],
    howToUse: 'In the shower, scoop a generous amount and massage onto damp skin in circular motions. Focus on rough areas like knees, elbows, and thighs. Rinse thoroughly. Use 2-3 times per week. Follow with Whipped Shea Body Butter for ultimate softness.',
    size: '250g',
    relatedProducts: ['shea-butter', 'face-serum', 'charcoal-cleanser'],
  },
  {
    id: 'leave-in-conditioner',
    name: 'Coconut Leave-In Conditioner',
    description: 'Lightweight spray-on conditioner that detangles, moisturizes, and protects hair from heat and environmental damage.',
    longDescription: 'Our Coconut Leave-In Conditioner is a versatile styling essential that provides all-day moisture, detangling, and heat protection in one lightweight spray. Infused with coconut milk, argan oil, and silk proteins, it smooths frizz, adds brilliant shine, and makes combing through knots effortless. The non-greasy formula won\'t weigh down even the finest hair, while providing serious nourishment for thick, coily textures.',
    price: '17 000 XAF',
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&q=80',
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&q=80',
      'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=600&q=80',
    ],
    category: 'Hair Care',
    icon: 'lucide:spray-can',
    ingredients: ['Coconut Milk', 'Argan Oil', 'Silk Proteins', 'Provitamin B5', 'Shea Butter Extract', 'Green Tea Extract'],
    howToUse: 'Shake well. Spray evenly onto clean, damp hair from mid-length to ends. Comb through with a wide-tooth comb or fingers to distribute. Do not rinse. Style as desired. Can also be used on dry hair to refresh and add moisture between washes.',
    size: '200ml',
    relatedProducts: ['hair-oil', 'pomade', 'shea-butter'],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getRelatedProducts(product: Product): Product[] {
  return product.relatedProducts
    .map(id => products.find(p => p.id === id))
    .filter((p): p is Product => p !== undefined);
}

export function getCategories(): string[] {
  return [...new Set(products.map(p => p.category))];
}
