/**
 * Site-wide content.
 *
 * Copy and figures come from the two imported Claude Design projects
 * ("T-MAN Landing Page.dc.html" and "T-01 Product Page.dc.html") and from
 * the Panquire GTM vault. Where the two disagree, the product page wins:
 * it is built on the real spec sheet, the landing page still carried the
 * template's placeholder drivetrain numbers.
 *
 * NOTE(brand): the imported designs ship two placeholder wordmarks —
 * "T-MAN" on the landing page, "HALDEN" on the product page. Both are
 * template artefacts. The site uses Panquire, keeping each design's
 * wordmark *treatment*. Change `site.name` here if that is wrong.
 */

export const site = {
  name: 'Panquire',
  legalName: "Shenzhen Jing'aosi Industrial Co., Ltd.",
  url: 'https://panquire.com',
  tagline: 'Performance without constraints',
  description:
    'Panquire builds the T-01 electric dirt bike: a 60V 3,000 W central motor peaking at 8,000 W, 80 km/h, 80 km eco range, 150 kg rated load, 55 kg on the scale.',
  email: 'hello@panquire.com',
  // Freshness signal for readers and AI search engines alike.
  updated: '2026-09-11',
};

export const nav = [
  { href: '/products/t-01', label: 'Bikes' },
  { href: '/about', label: 'About us' },
  { href: '/partners', label: 'Partners' },
  { href: '/terms', label: 'Terms' },
];

export const footerColumns = [
  {
    title: 'Shop',
    links: [
      { href: '/products/t-01', label: 'T-01' },
      { href: '/products/t-01?model=T-02', label: 'T-02' },
      { href: '/products/t-01#compare', label: 'Compare models' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About us' },
      { href: '/about#founder', label: 'About us' },
      { href: '/partners#strategic', label: 'Strategic partnerships' },
    ],
  },
  {
    title: 'Business & partners',
    links: [
      { href: '/partners#corporate', label: 'Corporate & bulk purchase' },
      { href: '/partners#corporate', label: 'Dealers & fleet' },
      { href: '/partners#affiliate', label: 'Affiliate program' },
      { href: '/partners#affiliate-terms', label: 'Affiliate terms' },
    ],
  },
  {
    title: 'Customer care',
    links: [
      { href: `mailto:${site.email}`, label: 'Contact us' },
      { href: '/terms?tab=shipping', label: 'Shipping policy' },
      { href: '/terms?tab=payment', label: 'Payment methods' },
      { href: '/terms?tab=warranty', label: 'Warranty policy' },
      { href: '/terms?tab=returns', label: 'Returns & refunds' },
    ],
  },
];

/**
 * TODO(pricing): the spec sheet lists "Unit price (USD): TBD" and the
 * product design shows "Price on request". The figures below are the ones
 * the landing design carries. Confirm before launch — they feed the page
 * copy and the Product JSON-LD offer.
 */
export const pricing = {
  't01': { display: '$2,490', amount: 2490 },
  't02': { display: '$2,890', amount: 2890 },
  currency: 'USD',
  wholesale: { terms: 'FOB Ningbo. Minimum order 10 units.', moq: 10 },
};

export const valueProps = [
  { label: 'Free worldwide shipping', icon: 'globe' },
  { label: '1-year warranty', icon: 'shield' },
  { label: 'Fast & secure checkout', icon: 'lock' },
  { label: 'Factory direct', icon: 'factory' },
] as const;

/** The marquee strip between the about block and the product cards. */
export const marquee = [
  { text: 'T-01' },
  { text: '8 kW peak', accent: true },
  { text: '80 km/h' },
  { text: '80 km eco range' },
  { text: '150 kg load', accent: true },
  { text: 'T-02' },
  { text: 'Factory direct' },
  { text: '55 kg', accent: true },
];

export type Model = {
  id: 'T-01' | 'T-02';
  name: string;
  sub: string;
  blurb: string;
  speed: string;
  peak: string;
  peakShort: string;
  range: string;
  battery: string;
  motorShort: string;
  specs: Record<'overview' | 'performance' | 'chassis' | 'logistics', [string, string][]>;
};

/** Both models, transcribed from the product design's own data block. */
export const models: Model[] = [
  {
    id: 'T-01',
    name: 'T-01',
    sub: '60V, 8 kW peak',
    blurb:
      'A 60V 3,000 W central motor with an 8,000 W peak, geared through a 3-speed chain drive. The 31.2 Ah lithium pack is rated for 80 km in eco mode, and the aluminium alloy frame keeps the whole bike at 55 kg.',
    speed: '80 km/h',
    peak: '8,000 W',
    peakShort: '8 kW',
    range: '80 km',
    battery: '60V 31.2Ah',
    motorShort: '60V 3,000 W',
    specs: {
      overview: [
        ['Model', 'T-01'],
        ['Type', 'Electric dirt bike'],
        ['Frame material', 'Aluminium alloy'],
        ['Color', 'Black'],
        ['Vehicle dimensions', '1770 × 800 × 1200 mm'],
        ['Net weight', '55 kg'],
        ['Gross weight', '60 kg'],
        ['Warranty', '1 year'],
        ['After-sales service', '1 year'],
      ],
      performance: [
        ['Motor', '60V 3,000W central motor'],
        ['Peak motor power', '8,000 W'],
        ['Maximum speed', '80 km/h'],
        ['Range, eco mode', '80 km'],
        ['Climbing ability', 'Under 30°'],
        ['Max load', '150 kg'],
        ['Drivetrain', 'Chain drive'],
        ['Gears', '3-speed'],
      ],
      chassis: [
        ['Front suspension', 'Hydraulic'],
        ['Rear suspension', 'Hydraulic'],
        ['Rear shock', 'Adjustable oil hydraulic nitrogen'],
        ['Brakes', 'Hydraulic disc'],
        ['Brake pads', 'Hydraulic'],
        ['Front tire', '19 inches'],
        ['Rear tire', '17 inches'],
        ['Battery', 'Lithium, 60V 31.2Ah'],
        ['Charger', '6A'],
      ],
      logistics: [
        ['Packaging', 'Double carton'],
        ['Packing dimensions', '1570 × 400 × 1010 mm'],
        ['Included', "Owner's manual ×1, charger ×1"],
        ["Loading, 20' GP", '85 pcs'],
        ["Loading, 40' HQ", '210 pcs'],
        ['Delivery time', '25 to 30 days from payment'],
        ['Payment terms', '30% wire deposit, balance before shipment'],
        ['Unit price', 'On request'],
      ],
    },
  },
  {
    id: 'T-02',
    name: 'T-02',
    sub: '72V, 11 kW peak',
    blurb:
      'A 72V 6,000 W central motor with an 11,000 W peak, on the same 3-speed chain drive and aluminium alloy frame. The 41 Ah pack is rated for 90 km in eco mode and carries the bike to 100 km/h.',
    speed: '100 km/h',
    peak: '11,000 W',
    peakShort: '11 kW',
    range: '90 km',
    battery: '72V 41Ah',
    motorShort: '72V 6,000 W',
    specs: {
      overview: [
        ['Model', 'T-02'],
        ['Type', 'Electric dirt bike'],
        ['Frame material', 'Aluminium alloy'],
        ['Color', 'Black'],
        ['Vehicle dimensions', '1770 × 800 × 1200 mm'],
        ['Net weight', 'On request'],
        ['Gross weight', '60 kg, to be confirmed'],
        ['Warranty', '1 year'],
        ['After-sales service', '1 year'],
      ],
      performance: [
        ['Motor', '72V 6,000W central motor'],
        ['Peak motor power', '11,000 W'],
        ['Maximum speed', '100 km/h'],
        ['Range, eco mode', '90 km'],
        ['Climbing ability', 'Under 30°'],
        ['Max load', '150 kg'],
        ['Drivetrain', 'Chain drive'],
        ['Gears', '3-speed'],
      ],
      chassis: [
        ['Front suspension', 'Hydraulic'],
        ['Rear suspension', 'Hydraulic'],
        ['Rear shock', 'Adjustable oil hydraulic nitrogen'],
        ['Brakes', 'Hydraulic disc'],
        ['Brake pads', 'Hydraulic'],
        ['Front tire', '19 inches'],
        ['Rear tire', '17 inches'],
        ['Battery', 'Lithium, 72V 41Ah'],
        ['Charger', '6A'],
      ],
      logistics: [
        ['Packaging', 'Double carton'],
        ['Packing dimensions', '1570 × 400 × 1010 mm'],
        ['Included', "Owner's manual ×1, charger ×1"],
        ["Loading, 20' GP", '85 pcs'],
        ["Loading, 40' HQ", '210 pcs'],
        ['Delivery time', '25 to 30 days from payment'],
        ['Payment terms', '30% wire deposit, balance before shipment'],
        ['Unit price', 'On request'],
      ],
    },
  },
];

export const specTabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'performance', label: 'Performance' },
  { id: 'chassis', label: 'Chassis' },
  { id: 'logistics', label: 'Logistics' },
] as const;

/**
 * Gallery views. The design crops one photograph four ways with a CSS
 * transform rather than shipping four files, so the same asset covers the
 * whole gallery.
 */
export const shots = [
  { label: 'Full', transform: 'scale(1)' },
  { label: 'Cockpit', transform: 'scale(2.3) translate(-2%, -6%)' },
  { label: 'Drive', transform: 'scale(2.5) translate(-9%, 10%)' },
  { label: 'Front', transform: 'scale(2.2) translate(12%, 9%)' },
];

/** T-01 against T-02, as the product design lays it out. */
export const comparison: [string, string, string][] = [
  ['Motor', '60V 3,000W central', '72V 6,000W central'],
  ['Peak motor power', '8,000 W', '11,000 W'],
  ['Maximum speed', '80 km/h', '100 km/h'],
  ['Battery', '60V 31.2Ah lithium', '72V 41Ah lithium'],
  ['Range, eco mode', '80 km', '90 km'],
  ['Climbing ability', 'Under 30°', 'Under 30°'],
  ['Max load', '150 kg', '150 kg'],
  ['Drivetrain', '3-speed chain', '3-speed chain'],
  ['Tires', '19″ front / 17″ rear', '19″ front / 17″ rear'],
  ['Net weight', '55 kg', 'On request'],
  ['Vehicle dimensions', '1770 × 800 × 1200 mm', '1770 × 800 × 1200 mm'],
  ['Warranty', '1 year', '1 year'],
];

export const logistics = [
  { label: "Loading, 20' GP", value: '85 pcs' },
  { label: "Loading, 40' HQ", value: '210 pcs' },
  { label: 'Delivery', value: '25 to 30 days' },
  { label: 'Balance', value: 'Before shipment' },
];

export const purchaseFacts = [
  { label: 'Payment', value: '30% deposit by wire' },
  { label: 'Warranty', value: '1 year, parts and service' },
  { label: 'Packaging', value: 'Double carton, 1570 × 400 × 1010 mm' },
  { label: 'In the box', value: "Charger, owner's manual" },
];

export const testimonials = [
  {
    quote: 'This bike is a beast. The power delivery is immediate and the handling is sublime.',
    name: 'Liam N.',
    initials: 'LN',
    photo: '/photos/rider-liam.png',
    avatar: '/photos/avatar-liam.png',
    alt: 'Liam riding his blacked-out sport bike',
    rating: 5,
  },
  {
    quote:
      'Commute on weekdays, fire roads on Sunday. Eight months in and it has not needed a single adjustment.',
    name: 'Mara K.',
    initials: 'MK',
    photo: null,
    avatar: null,
    alt: '',
    rating: 5,
  },
  {
    quote: 'The range claim is honest. I get the rated distance on mixed terrain without babying the throttle.',
    name: 'Dev S.',
    initials: 'DS',
    photo: null,
    avatar: null,
    alt: '',
    rating: 5,
  },
];

/**
 * Front-page featured-products stage, in the reference design's own words
 * and spec format ("FeaturedProduct.jpg" + the T-MAN landing design).
 *
 * The stage is two pre-rendered clips per model with the whole composition
 * baked in — background, dirt, copy, nameplates — so only the bike moves.
 * `still` frames are lifted from the enter clip itself (not from the
 * portrait reference JPG, which is a different aspect and layout), so the
 * video-to-image handovers land on identical pixels.
 *
 * Trim points, measured frame-by-frame from the renders:
 *   enterIn     0s     the bike is already rolling in at the right edge on frame 0
 *   enterSettle 3.20s  after this the bike is at rest; a click cuts to out
 *   outIn       0.70s  the out clip is static until ~0.80s
 *
 * enterFit lines the enter clip and its stills up with the out clip, which
 * is a separate render: scale(1.0152) translate(-0.96%, 0) cuts the text-edge
 * mismatch at both handovers by 15-75%, measured frame against frame.
 */
export const featured = {
  brand: { name: 'T-MAN', tagline: 'Adventure e-bikes with pedals' },
  models: [
    {
      id: 'T-01',
      label: 'Street ready',
      blurb:
        'A Class 2/3 e-bike designed for smoother commuting and everyday riding while maintaining the X-Man DNA.',
      specs: [
        ['Top Speed', 'Class 2/3'],
        ['Motor Power', '750W'],
        ['Max Range', '50 mi'],
      ] as [string, string][],
      media: {
        enter: '/media/featured/t01-enter.mp4',
        out: '/media/featured/t01-out.mp4',
        empty: '/media/featured/t01-empty.jpg',
        rest: '/media/featured/t01-rest.jpg',
        enterIn: 0,
        enterSettle: 3.2,
        outIn: 0.7,
        enterFit: { scale: 1.0152, x: -0.96, y: 0 },
      },
    },
    {
      id: 'T-02',
      label: 'Trail ready',
      blurb:
        'The off-road build. Longer travel, knobbier rubber, and a torque curve tuned for climbing fire roads rather than clearing traffic lights.',
      specs: [
        ['Top Speed', '38 mph'],
        ['Motor Power', '1000W'],
        ['Max Range', '42 mi'],
      ] as [string, string][],
      // TODO(media): no T-02 renders exist yet. Until they do, T-02 plays the
      // T-01 pair — the stage dedupes identical sources, so nothing loads twice.
      media: {
        enter: '/media/featured/t01-enter.mp4',
        out: '/media/featured/t01-out.mp4',
        empty: '/media/featured/t01-empty.jpg',
        rest: '/media/featured/t01-rest.jpg',
        enterIn: 0,
        enterSettle: 3.2,
        outIn: 0.7,
        enterFit: { scale: 1.0152, x: -0.96, y: 0 },
      },
    },
  ],
};

/**
 * Panoramic view: an interactive 360° turntable per model.
 *
 * Each set is a folder of WebP frames plus a `manifest.json` carrying the
 * prefix, count, size and the angle of every frame. The T-01 frames were
 * decoded straight from "Product360Video.mp4" (313 frames, 24 fps) instead of
 * the ezgif export, which stops at frame 300 and compresses every frame to
 * ~11 KB. The render eases in, eases out and overshoots its start pose, so
 * the set is trimmed to one revolution (frames 0–273) with a 12-frame
 * crossfade baked across the seam, and the manifest's angles undo the ease-in
 * so auto-rotation turns at an even speed. `poster` is ProductImage.jpg: the
 * same pose as frame 0 at a higher resolution, shown until frame 0 decodes.
 *
 * To swap a bike: point `frames` at another folder with its own manifest.
 * `reverseDrag` flips the drag direction for renders that turn the other way.
 */
type PanoramaSet = {
  frames: string;
  poster: string;
  posterWidth: number;
  posterHeight: number;
  secondsPerTurn: number;
  resumeAfterMs: number;
  reverseDrag: boolean;
};

const t01Panorama: PanoramaSet = {
  frames: '/media/panorama/t01/',
  poster: '/media/panorama/t01/poster.jpg',
  posterWidth: 1008,
  posterHeight: 1056,
  secondsPerTurn: 12,
  resumeAfterMs: 2500,
  reverseDrag: false,
};

export const panorama: Record<Model['id'], PanoramaSet> = {
  'T-01': t01Panorama,
  // TODO(media): no T-02 turntable exists yet, so T-02 shows the T-01 set.
  'T-02': t01Panorama,
};

/**
 * Legal note from the product design's footer. Kept verbatim: it is the
 * only published statement qualifying the rated figures.
 */
export const specDisclaimer =
  'Specifications are subject to change without notice. Range figures are measured in eco mode on level ground with a 75 kg rider and vary with terrain, load, temperature and tire pressure. Climbing ability, top speed and load rating are rated maximums, not continuous duty figures. The T-01 and T-02 are off-road vehicles and are not registered for road use in every market; confirm local regulations before ordering. Quantities, lead times and payment terms apply to wholesale orders and are confirmed on the pro forma invoice.';
