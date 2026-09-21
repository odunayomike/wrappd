export const LUXE_SURCHARGE = 15000;

export const products = [
  {
    id: 'birthday-box',
    slug: 'birthday-box',
    name: 'The Birthday Box',
    price: 45000,
    description: 'Make their birthday unforgettable with a curated collection of premium treats and keepsakes.',
    tagline: 'Their day, done properly — treats, a little luxury, and a card in your words.',
    heroImage: 'fig-asset-5681e2740ae94cfd',
    items: [
      { title: 'Gourmet chocolate truffles', desc: 'Rich, hand-rolled truffles in dark and milk varieties.' },
      { title: 'Birthday cake candle', desc: 'A beautifully scented candle with warm vanilla notes.' },
      { title: 'Sparkling mini bottle', desc: 'A celebratory splash of something bubbly.' },
      { title: 'Personalised birthday card', desc: 'Handwritten in elegant calligraphy on premium card stock.' },
      { title: 'Silk ribbon gift wrap', desc: 'Luxuriously wrapped with a hand-tied bow.' },
    ],
  },
  {
    id: 'love-box',
    slug: 'love-box',
    name: 'The Love Box',
    price: 55000,
    description: 'Express your love with a beautifully curated collection of romantic indulgences.',
    tagline: 'For anniversaries, weddings, or simply saying it out loud.',
    heroImage: 'fig-asset-5d09f4fb58b554d0',
    items: [
      { title: 'Rose-scented candle', desc: 'Delicate Bulgarian rose and soft musk.' },
      { title: 'Artisan chocolates', desc: 'A curated selection of premium filled chocolates.' },
      { title: 'Silk eye mask', desc: 'Soft mulberry silk in a romantic blush tone.' },
      { title: 'Mini champagne', desc: 'A perfectly chilled bottle for two.' },
      { title: 'Love letter kit', desc: 'Elegant stationery for your handwritten words.' },
    ],
  },
  {
    id: 'welcome-little-one',
    slug: 'welcome-little-one',
    name: 'Welcome, Little One',
    price: 50000,
    description: 'For the gorgeous new baby and the brave parents who just had them.',
    tagline: 'For the new baby and the amazing person who just had them.',
    heroImage: 'fig-asset-aa9d492560b95bba',
    items: [
      { title: 'Organic baby muslin', desc: 'Ultra-soft breathable wrap in a neutral tone.' },
      { title: 'Nourishing body oil', desc: 'Gentle, fragrance-free oil for mum or baby.' },
      { title: 'Herbal recovery tea', desc: 'A soothing blend for new-parent exhaustion.' },
      { title: 'Baby milestone cards', desc: 'Beautifully illustrated keepsake cards.' },
      { title: 'Calming room spray', desc: 'Lavender and chamomile for peaceful nights.' },
    ],
  },
  {
    id: 'boss-move',
    slug: 'boss-move',
    name: 'The Boss Move',
    price: 48000,
    description: 'Celebrate their wins, big or small. Curated for promotions and professional milestones.',
    tagline: 'New job, promotion, big win — celebrate the moves they\'re making.',
    heroImage: 'fig-asset-beed4354d2ac7d00',
    items: [
      { title: 'Premium notebook', desc: 'Leather-bound journal for big ideas and bigger goals.' },
      { title: 'Desk candle', desc: 'A refined scent of cedar, amber, and focus.' },
      { title: 'Gourmet coffee blend', desc: 'Single-origin roast for the morning ritual.' },
      { title: 'Dark chocolate bar', desc: 'Rich 70% cacao with sea salt flakes.' },
      { title: 'Congratulations card', desc: 'Handwritten message on luxe embossed stock.' },
    ],
  },
  {
    id: 'soft-life-box',
    slug: 'soft-life-box',
    name: 'The Soft Life Box',
    price: 42000,
    description: 'Bespoke comfort, curated for quiet moments.',
    tagline: 'Rest, restore, repeat — for anyone who\'s earned some ease. Including you.',
    heroImage: 'fig-asset-1c885b0bd381cc25',
    items: [
      { title: 'Scented candle', desc: 'Warm amber & vanilla for a cozy evening.' },
      { title: 'Silk sleep mask', desc: 'Soft mulberry silk to block out the light.' },
      { title: 'Artisan tea blend', desc: 'Calming chamomile & rosehip for quiet moments.' },
      { title: 'Shea butter hand cream', desc: 'Rich, non-greasy hydration for dry hands.' },
      { title: 'Lavender linen spray', desc: 'Gentle, calming mist for bedding and fabrics.' },
    ],
  },
  {
    id: 'thank-you-box',
    slug: 'thank-you-box',
    name: 'The Thank You Box',
    price: 40000,
    description: 'Show your gratitude with a thoughtfully curated box of appreciation.',
    tagline: 'Because some kindness deserves more than a text message.',
    heroImage: 'fig-asset-e2ee7586214153de',
    items: [
      { title: 'Artisan biscuits', desc: 'Buttery shortbread baked with real vanilla.' },
      { title: 'Scented soy candle', desc: 'A warm, honey-toned glow for any room.' },
      { title: 'Loose-leaf tea', desc: 'A fragrant Earl Grey with bergamot.' },
      { title: 'Thank you card', desc: 'Calligraphy-written note on textured paper.' },
      { title: 'Dried flower posy', desc: 'A delicate arrangement that lasts for months.' },
    ],
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null;
}

export function formatPrice(amount) {
  return `₦${amount.toLocaleString('en-NG')}`;
}
