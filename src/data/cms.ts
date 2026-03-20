import { LucideIcon, Wrench, Hammer, Cog, MapPin, BadgeCheck, ShieldCheck, Tag, Clock } from 'lucide-react';

// --- Types ---

export interface Service {
  id: string;
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1Title: string;
  introParagraph: string;
  content: string;
  iconName: 'Wrench' | 'Hammer' | 'Cog' | 'ShieldCheck' | 'Clock';
  image: string;
  ctaHeadline: string;
  ctaButtonText: string;
  relatedServiceIds: string[];
  relatedBlogIds: string[];
  relatedOfferIds: string[];
  faqs: { question: string; answer: string }[];
}

export interface ServiceArea {
  id: string;
  slug: string;
  cityName: string;
  metaTitle: string;
  metaDescription: string;
  h1Title: string;
  introParagraph: string;
  areaContent: string;
  mapEmbedUrl: string;
  relatedServiceIds: string[];
  relatedBlogIds: string[];
  relatedOfferIds: string[];
}

export interface Review {
  id: string;
  reviewerName: string;
  city: string;
  rating: number;
  text: string;
  serviceUsed: string;
  date: string;
}

export interface Offer {
  id: string;
  slug: string;
  title: string;
  headline: string;
  discountAmount: string;
  expiration: string;
  disclaimer: string;
  relatedServiceIds: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  date: string;
  tags: string[];
  author: string;
  authorRole: string;
  relatedServiceIds: string[];
  relatedBlogIds: string[];
}

// --- Company Info ---
export const companyInfo = {
  name: 'Garage Goat Garage Doors',
  shortName: 'Garage Goat',
  ownerName: 'Cesar Garcia',
  phone: '(281) 948-5452',
  phoneRaw: '2819485452',
  email: 'info@garagegoatdoors.com',
  website: 'GarageGoatDoors.com',
  address: '12507 Stoney Mill St',
  city: 'Cypress',
  state: 'TX',
  zip: '77429',
  tagline: 'The G.O.A.T. of Garage Doors',
  foundedYear: 2010,
  googleRating: 4.9,
  totalReviews: 287,
  licenseName: 'TDLR Licensed',
  licenseNumber: '#GDC-7742',
  warranty: {
    labor: '1 Year',
    parts: '3 Year',
    springs: 'Lifetime',
  },
  guarantees: ['Free Estimates', 'Locally Owned', 'Fully Insured', 'Customer Satisfaction Guarantee'],
};

// --- Data ---

export const services: Service[] = [
  {
    id: 'repair',
    slug: 'garage-door-repair',
    name: 'Garage Door Repair',
    metaTitle: 'Expert Garage Door Repair in Cypress, TX | Garage Goat',
    metaDescription: 'Fast, reliable garage door repair in Cypress, TX. We fix springs, openers, cables, and more. Same-day service available!',
    h1Title: 'Garage Door Repair Services',
    introParagraph: 'Is your garage door stuck, noisy, or off track? Garage Goat provides professional garage door repair services to get your door back in action quickly and safely.',
    content: `
<p>When your garage door malfunctions, it's more than just an inconvenience — it's a security risk. At Garage Goat, we specialize in diagnosing and fixing all types of garage door issues efficiently across Cypress, Tomball, Katy, and Northwest Houston.</p>

<h3>Common Issues We Fix</h3>
<ul>
  <li>Broken springs and cables</li>
  <li>Malfunctioning openers and remotes</li>
  <li>Off-track or jammed doors</li>
  <li>Damaged or dented panels</li>
  <li>Noisy or grinding operation</li>
  <li>Weather seal replacement</li>
  <li>Sensor alignment and safety issues</li>
  <li>Roller and hinge replacement</li>
</ul>

<h3>Our Repair Process</h3>
<p>Every repair starts with a thorough 20-point inspection. Our licensed technicians diagnose the root cause — not just the symptom — so we fix it right the first time. We explain what's wrong, show you the issue, and give you an upfront price before touching a single bolt.</p>
<p>Because we stock our trucks with the most common parts (springs, cables, rollers, hinges, openers, and sensors), 95% of repairs are completed on the first visit. No waiting for parts, no second trip, no extra charges.</p>

<h3>Why Homeowners in Cypress Choose Us</h3>
<p>We've built our reputation on honest work and fair prices. While other companies upsell unnecessary replacements, we fix what's broken and leave the rest alone. Our technicians are background-checked, drug-tested, and trained to treat your home with respect.</p>
<p>Every repair is backed by our <strong>1-year labor warranty</strong> and <strong>3-year parts warranty</strong>, so you can trust that the fix will last. Whether it's a squeaky roller or a door that won't open at all, Garage Goat has you covered — 24 hours a day, 7 days a week.</p>
    `,
    iconName: 'Wrench',
    image: 'https://images.unsplash.com/photo-1651248271817-f8a32264f5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJhZ2UlMjBkb29yJTIwcmVwYWlyJTIwdGVjaG5pY2lhbiUyMHdvcmtpbmd8ZW58MXx8fHwxNzcwOTY4ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ctaHeadline: 'Need Same-Day Repair?',
    ctaButtonText: 'Book Repair Now',
    relatedServiceIds: ['spring-repair', 'opener-repair'],
    relatedBlogIds: ['cost-guide', 'spring-signs'],
    relatedOfferIds: ['summer-special', 'tune-up'],
    faqs: [
      { question: 'How much does garage door repair cost?', answer: 'Costs vary depending on the issue. Most common repairs range from $150-$450 based on our local Cypress-area pricing. We offer free estimates so you know exactly what to expect — no hidden fees, ever.' },
      { question: 'Do you offer emergency services?', answer: 'Absolutely. We have 24/7 emergency repair services available. Call us anytime — day, night, weekends, or holidays.' },
      { question: 'How fast can you get here?', answer: 'In most cases, we can arrive within 60-90 minutes for emergency calls in our primary service area (Cypress, Tomball, Katy).' }
    ]
  },
  {
    id: 'spring-repair',
    slug: 'garage-door-spring-repair',
    name: 'Spring Repair & Replacement',
    metaTitle: 'Garage Door Spring Repair & Replacement | Garage Goat',
    metaDescription: 'Broken garage door spring? Don\'t attempt DIY! Call Garage Goat for safe, professional spring replacement in Cypress, TX.',
    h1Title: 'Garage Door Spring Repair',
    introParagraph: 'The springs are the heavy lifters of your garage door system. When one breaks, your door won\'t open. We safely replace torsion and extension springs fast.',
    content: `
<p>Garage door springs are under immense tension and can be extremely dangerous to handle without proper tools and training. If you hear a loud bang from your garage or your door feels impossibly heavy, it's almost certainly a broken spring. <strong>Never attempt to replace a garage door spring yourself</strong> — call the professionals at Garage Goat.</p>

<h3>Types of Springs We Replace</h3>
<ul>
  <li><strong>Torsion Springs</strong> — Mounted above the door opening, the most common type in modern Cypress-area homes</li>
  <li><strong>Extension Springs</strong> — Mounted alongside the horizontal tracks, found in older installations</li>
  <li><strong>High-Cycle Springs</strong> — Commercial-grade springs rated for 50,000+ cycles (per manufacturer cycle-life rating) for heavy-use doors</li>
  <li><strong>Double Spring Systems</strong> — We always recommend replacing both springs to prevent a second failure</li>
</ul>

<h3>Signs Your Springs Need Replacement</h3>
<p>Don't wait for a complete failure. Watch for these warning signs: your door feels heavier than usual, it opens unevenly (one side higher than the other), you notice visible gaps in the spring coils, or the door slams shut instead of closing gently. Catching these early can prevent damage to your opener and tracks.</p>

<h3>The Garage Goat Difference: High-Cycle Springs</h3>
<p>We use high-cycle springs rated for <strong>25,000+ cycles</strong> (per manufacturer cycle-life rating) — that's 2-3x longer than the builder-grade springs most companies install. While they cost a bit more upfront, they save you money over time because they last 10-15 years instead of 5-7. Every spring we install comes with a <strong>lifetime warranty</strong>.</p>
<p>Our technicians complete most spring replacements in under 90 minutes, including a full system safety check and balance test. We calibrate the tension to your specific door weight so it operates smoothly and puts minimal strain on your opener.</p>
    `,
    iconName: 'Cog',
    image: 'https://images.unsplash.com/photo-1489348557694-c552c1eee72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJhZ2UlMjB3b3Jrc2hvcCUyMHRvb2xzJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzA5Njg4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ctaHeadline: 'Broken Spring? We\'re On Our Way.',
    ctaButtonText: 'Fix My Springs',
    relatedServiceIds: ['repair', 'installation'],
    relatedBlogIds: ['spring-signs'],
    relatedOfferIds: ['summer-special'],
    faqs: [
      { question: 'Can I replace a garage door spring myself?', answer: 'We strongly advise against it. Springs are under extremely high tension — hundreds of pounds of force. Improper handling can cause serious injury or death. Always call a professional.' },
      { question: 'How long do garage door springs last?', answer: 'Standard builder-grade springs last about 10,000 cycles (roughly 5-7 years). Our high-cycle springs last 25,000+ cycles per manufacturer cycle-life rating — up to 15 years of daily use.' },
      { question: 'Why did both my springs break?', answer: 'If your springs were installed at the same time, they have similar wear. When one breaks, the other is usually close behind. We recommend replacing both to avoid a second service call.' }
    ]
  },
  {
    id: 'opener-repair',
    slug: 'garage-door-opener-repair',
    name: 'Opener Repair & Install',
    metaTitle: 'Garage Door Opener Repair & Installation | Garage Goat Cypress TX',
    metaDescription: 'Opener not working? We repair and install LiftMaster, Genie, Chamberlain, and all major brands. Smart home ready.',
    h1Title: 'Garage Door Opener Repair & Installation',
    introParagraph: 'A reliable opener is key to a convenient garage. We repair motors, sensors, remotes, and keypads for all major brands — and install new smart openers.',
    content: `
<p>Modern garage door openers offer smart features, whisper-quiet operation, and enhanced security. Whether you need a simple gear replacement or want to upgrade to a Wi-Fi enabled smart opener, Garage Goat has you covered across the Cypress and NW Houston area.</p>

<h3>Brands We Service & Install</h3>
<ul>
  <li><strong>LiftMaster</strong> — The #1 professional-grade opener brand</li>
  <li><strong>Chamberlain</strong> — Smart home integration leader</li>
  <li><strong>Genie</strong> — Reliable belt and screw drive options</li>
  <li><strong>Craftsman</strong> — Classic residential openers</li>
  <li><strong>Linear</strong> — Commercial and residential solutions</li>
  <li><strong>Overhead Door</strong> — Premium performance openers</li>
</ul>

<h3>Common Opener Problems We Fix</h3>
<p>If your opener hums but doesn't move the door, it usually indicates a stripped gear or a broken spring preventing movement. If the wall button works but the remote doesn't, it's often a simple reprogramming issue. Our technicians diagnose the exact problem and explain your repair vs. replacement options honestly.</p>
<p>We also fix safety sensor misalignment (the door reverses before closing), chain or belt slippage, keypad malfunctions, and intermittent operation caused by logic board issues.</p>

<h3>Smart Opener Upgrades</h3>
<p>Upgrading to a smart opener lets you open, close, and monitor your garage door from anywhere using your phone. LiftMaster's myQ technology integrates with Apple HomeKit, Google Home, and Amazon Key. We recommend belt-drive openers for bedrooms above the garage — they're virtually silent.</p>
<p>All new opener installations include programming of remotes and keypads, safety sensor alignment, a full system test, and a walkthrough of all your new features.</p>
    `,
    iconName: 'Cog',
    image: 'https://images.unsplash.com/photo-1759355787121-eaef014a501d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnYXJhZ2UlMjBkb29yJTIwaG91c2UlMjBleHRlcmlvcnxlbnwxfHx8fDE3NzAxNTc1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ctaHeadline: 'Upgrade Your Opener Today',
    ctaButtonText: 'Get Opener Quote',
    relatedServiceIds: ['repair'],
    relatedBlogIds: ['cost-guide'],
    relatedOfferIds: ['tune-up'],
    faqs: [
      { question: 'Why does my opener hum but not move the door?', answer: 'This usually indicates a stripped gear, a seized motor, or a broken spring that\'s preventing the door from moving. We\'ll diagnose the exact issue.' },
      { question: 'Can I add Wi-Fi to my existing opener?', answer: 'In many cases, yes! LiftMaster and Chamberlain offer myQ adapters that add smart functionality to compatible openers.' }
    ]
  },
  {
    id: 'installation',
    slug: 'new-garage-doors',
    name: 'New Garage Doors',
    metaTitle: 'New Garage Door Installation & Sales in Cypress TX | Garage Goat',
    metaDescription: 'Boost your curb appeal with a new garage door. Highest ROI home improvement. Free estimates in Cypress, Tomball & Katy.',
    h1Title: 'New Garage Door Installation',
    introParagraph: 'Ready for a new look? A new garage door offers the highest ROI of any home improvement project — up to 194% return on investment (source: Remodeling Magazine\'s 2024 Cost vs. Value Report).',
    content: `
<p>A new garage door delivers the <strong>highest ROI of any home improvement project</strong> — up to <strong>194% ROI</strong> (source: Remodeling Magazine's 2024 Cost vs. Value Report). We offer a wide selection of styles from the best American manufacturers, with professional installation that includes hauling away your old door at no extra charge.</p>

<h3>Styles Available</h3>
<ul>
  <li><strong>Traditional Raised Panel</strong> — The classic look that fits every home style</li>
  <li><strong>Carriage House</strong> — Farmhouse charm with modern performance</li>
  <li><strong>Contemporary Flush Panel</strong> — Clean lines for modern architecture</li>
  <li><strong>Full-View Aluminum & Glass</strong> — Maximum natural light and curb appeal</li>
  <li><strong>Custom Wood Doors</strong> — Handcrafted luxury for high-end homes</li>
  <li><strong>Insulated Steel Doors</strong> — R-value 12+ for Houston's heat</li>
</ul>

<h3>Top Manufacturers We Carry</h3>
<p>We carry doors from <strong>Clopay, Amarr, Wayne Dalton, C.H.I. Overhead Doors</strong>, and other top-tier American manufacturers. Every door comes with the manufacturer's warranty plus our own labor and installation warranty. We'll bring samples and color swatches to your home so you can see exactly how your new door will look.</p>

<h3>Our Installation Process</h3>
<p>Your installation starts with a free in-home measurement and style consultation. We'll assess your opening, discuss insulation options (critical in the Texas heat), and help you choose the perfect door for your home and budget. Most standard installations are completed in 3-5 hours, and we always clean up completely — you won't even know we were there (except for the beautiful new door).</p>
<p>We handle everything: removal of the old door, installation of the new door and hardware, opener adjustment, safety testing, and final cleanup. Financing options are available for larger projects.</p>
    `,
    iconName: 'Hammer',
    image: 'https://images.unsplash.com/photo-1576765915042-d4746f8b7727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjByZXNpZGVudGlhbCUyMGdhcmFnZSUyMGRvb3IlMjBjdXJiJTIwYXBwZWFsfGVufDF8fHx8MTc3MDk2ODg1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ctaHeadline: 'Transform Your Home\'s Curb Appeal',
    ctaButtonText: 'Get Free Estimate',
    relatedServiceIds: ['opener-repair'],
    relatedBlogIds: ['cost-guide'],
    relatedOfferIds: ['new-door-discount'],
    faqs: [
      { question: 'How long does a new door installation take?', answer: 'Usually 3-5 hours for a standard single or double door. Custom doors may take longer.' },
      { question: 'Do you haul away the old door?', answer: 'Yes! Removal and disposal of your old door is included in every installation.' },
      { question: 'What\'s the best garage door for Texas heat?', answer: 'We recommend insulated steel doors with polyurethane insulation (R-value 12+). They keep your garage cooler and reduce energy costs.' }
    ]
  },
  {
    id: 'emergency',
    slug: 'emergency-garage-door-repair',
    name: '24/7 Emergency Repair',
    metaTitle: '24/7 Emergency Garage Door Repair in Cypress TX | Garage Goat',
    metaDescription: 'Stuck in your garage? Broken spring at midnight? Call Garage Goat 24/7 for emergency garage door repair. 60-min response in Cypress.',
    h1Title: '24/7 Emergency Garage Door Repair',
    introParagraph: 'Garage doors don\'t break on a schedule. That\'s why we offer 24/7 emergency service — nights, weekends, and holidays. We\'ll get you back on track.',
    content: `
<p>Whether it's 2 AM on a Tuesday or noon on Christmas Day, our emergency technicians are on standby to help you with critical garage door failures in Cypress, Tomball, Katy, and NW Houston. Your safety can't wait — and neither should you.</p>

<h3>Emergency Situations We Handle</h3>
<ul>
  <li><strong>Door stuck open</strong> — Security risk that needs immediate attention</li>
  <li><strong>Door stuck closed</strong> — Can't get your car out for work or emergencies</li>
  <li><strong>Broken spring or cable</strong> — Door is inoperable and potentially dangerous</li>
  <li><strong>Door off track</strong> — Risk of the door falling or further damage</li>
  <li><strong>Opener malfunction</strong> — Door won't respond to any controls</li>
  <li><strong>Storm or vehicle impact damage</strong> — Structural compromise requiring immediate repair</li>
</ul>

<h3>What to Expect When You Call</h3>
<p>When you call our 24/7 emergency line, you'll speak to a real person — not a voicemail. We'll ask a few questions to understand the situation, give you an estimated arrival time, and dispatch the nearest available technician. Average response time in our primary service area is <strong>60 minutes or less</strong>.</p>

<h3>No Overtime Charges — Ever</h3>
<p>We don't believe in gouging people when they're in a bind. Our pricing is the same 24/7 — nights, weekends, and holidays included. The price we quote on the phone is the price you pay. No emergency surcharges, no after-hours fees, no surprise line items. Just honest pricing when you need help the most.</p>
<p>Your technician will arrive in a fully stocked truck, diagnose the problem, give you an upfront quote, and complete the repair on the spot in most cases. We carry the parts needed for 95% of common emergency repairs.</p>
    `,
    iconName: 'Clock',
    image: 'https://images.unsplash.com/photo-1764328165995-0624c280a6d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJsdWV8ZW58MXx8fHwxNzcwOTY4ODU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ctaHeadline: 'Don\'t Wait — Call Now',
    ctaButtonText: 'Call for Emergency Service',
    relatedServiceIds: ['repair', 'spring-repair'],
    relatedBlogIds: ['spring-signs', 'cost-guide'],
    relatedOfferIds: ['summer-special'],
    faqs: [
      { question: 'Is there an extra charge for emergency calls?', answer: 'No. We don\'t believe in gouging people when they\'re in a bind. Our pricing is the same 24/7.' },
      { question: 'How fast can you get to my house?', answer: 'In Cypress, Tomball, and Katy — typically within 60 minutes. Other areas may take slightly longer.' }
    ]
  }
];

export const serviceAreas: ServiceArea[] = [
  {
    id: 'cypress',
    slug: 'garage-door-repair-cypress-tx',
    cityName: 'Cypress, TX',
    metaTitle: 'Garage Door Repair Cypress, TX | Garage Goat — Local Experts',
    metaDescription: 'Local garage door repair experts serving Cypress, TX since 2010. Same-day service, honest pricing. Call the G.O.A.T.',
    h1Title: 'Garage Door Repair in Cypress, TX',
    introParagraph: 'Proudly headquartered in Cypress and serving our neighbors with top-notch garage door services since 2010. This is our home — and we treat every customer like family.',
    areaContent: `
<p>As Cypress's hometown garage door company, we know every neighborhood inside and out. From the master-planned communities of <strong>Bridgeland and Towne Lake</strong> to the established homes along <strong>Fry Road and Barker Cypress</strong>, we've been serving our neighbors since 2010.</p>
<h3>Neighborhoods We Serve in Cypress</h3>
<ul>
  <li>Bridgeland</li>
  <li>Towne Lake</li>
  <li>Fairfield</li>
  <li>Cypress Creek Lakes</li>
  <li>Lakeland Heights</li>
  <li>Fry Road Corridor</li>
  <li>Miramesa</li>
  <li>Cypress Falls</li>
</ul>
<p>If you're in the 77429, 77433, or 77065 zip code, our technicians can typically reach you within <strong>30-45 minutes</strong>. We keep our headquarters right here in Cypress, making it our fastest service area.</p>
    `,
    mapEmbedUrl: '',
    relatedServiceIds: ['repair', 'spring-repair', 'installation'],
    relatedBlogIds: ['cost-guide', 'spring-signs'],
    relatedOfferIds: ['summer-special', 'tune-up']
  },
  {
    id: 'tomball',
    slug: 'garage-door-repair-tomball-tx',
    cityName: 'Tomball, TX',
    metaTitle: 'Garage Door Repair Tomball, TX | Garage Goat',
    metaDescription: 'Your trusted garage door partner in Tomball, TX. Fast response, fair prices, 5-star service.',
    h1Title: 'Garage Door Repair in Tomball, TX',
    introParagraph: 'From Main Street to the outskirts, we help Tomball residents keep their garages secure and looking great.',
    areaContent: `
<p>Tomball homeowners deserve the same top-tier garage door service as anywhere else — and that's exactly what they get with Garage Goat. From <strong>Main Street to Northpointe</strong> and the surrounding communities, we provide fast, reliable service with honest pricing.</p>
<h3>Neighborhoods We Serve in Tomball</h3>
<ul>
  <li>Northpointe</li>
  <li>Spring Creek Oaks</li>
  <li>Lakewood Forest</li>
  <li>Historic Downtown Tomball</li>
  <li>Rosehill area</li>
  <li>Hufsmith-Kohrville</li>
</ul>
<p>Our technicians are just a short drive from our Cypress headquarters, so response times for Tomball are consistently fast — typically <strong>under 60 minutes</strong> for emergencies and same-day availability for standard appointments.</p>
    `,
    mapEmbedUrl: '',
    relatedServiceIds: ['repair', 'installation'],
    relatedBlogIds: ['cost-guide'],
    relatedOfferIds: ['summer-special']
  },
  {
    id: 'katy',
    slug: 'garage-door-repair-katy-tx',
    cityName: 'Katy, TX',
    metaTitle: 'Garage Door Repair Katy, TX | Garage Goat',
    metaDescription: 'Expert garage door services in Katy, TX. Cinco Ranch, Firethorne, and beyond. Same-day service available.',
    h1Title: 'Garage Door Repair in Katy, TX',
    introParagraph: 'Serving the greater Katy area with pride — from Cinco Ranch to Firethorne and everywhere in between.',
    areaContent: `
<p>The Katy area is one of Houston's fastest-growing markets, and we're proud to serve its homeowners with expert garage door service. Whether you're in <strong>Cinco Ranch, Cross Creek Ranch, or Elyson</strong>, we handle everything from broken springs to full door installations.</p>
<h3>Neighborhoods We Serve in Katy</h3>
<ul>
  <li>Cinco Ranch</li>
  <li>Cross Creek Ranch</li>
  <li>Firethorne</li>
  <li>Cane Island</li>
  <li>Elyson</li>
  <li>Katy Mills area</li>
</ul>
<p>Katy's newer master-planned communities often have HOA requirements for garage door styles and colors. Our team is experienced with <strong>HOA-compliant installations</strong> and can help you choose a door that meets your community's guidelines while maximizing curb appeal.</p>
    `,
    mapEmbedUrl: '',
    relatedServiceIds: ['opener-repair', 'spring-repair'],
    relatedBlogIds: ['spring-signs'],
    relatedOfferIds: ['tune-up']
  },
  {
    id: 'spring',
    slug: 'garage-door-repair-spring-tx',
    cityName: 'Spring, TX',
    metaTitle: 'Garage Door Repair Spring, TX | Garage Goat',
    metaDescription: 'Professional garage door repair in Spring, TX. Licensed technicians, same-day availability.',
    h1Title: 'Garage Door Repair in Spring, TX',
    introParagraph: 'Spring homeowners trust Garage Goat for reliable, honest garage door service. We\'re just a short drive away.',
    areaContent: `
<p>Spring and the surrounding Klein area trust Garage Goat for dependable garage door service. We serve the entire corridor from <strong>The Woodlands south to Champions Forest</strong>, providing same-day service and emergency response for our Spring-area neighbors.</p>
<h3>Neighborhoods We Serve in Spring</h3>
<ul>
  <li>The Woodlands (south)</li>
  <li>Klein</li>
  <li>Champions Forest</li>
  <li>Gleannloch Farms</li>
  <li>Spring Trails</li>
  <li>Northgate Forest</li>
</ul>
<p>Spring's mix of established neighborhoods and new construction means we see a wide variety of garage door styles and ages. Whether your home was built in the 1980s or 2024, our technicians have the experience and parts to keep your garage door running smoothly.</p>
    `,
    mapEmbedUrl: '',
    relatedServiceIds: ['repair', 'emergency'],
    relatedBlogIds: ['spring-signs', 'cost-guide'],
    relatedOfferIds: ['summer-special']
  },
  {
    id: 'houston',
    slug: 'garage-door-repair-houston-tx',
    cityName: 'NW Houston, TX',
    metaTitle: 'Garage Door Repair Northwest Houston, TX | Garage Goat',
    metaDescription: 'Garage door repair for Northwest Houston. The G.O.A.T. of garage doors serves the greater Houston metro.',
    h1Title: 'Garage Door Repair in Northwest Houston',
    introParagraph: 'We serve the entire Northwest Houston corridor from Jersey Village to Willowbrook and beyond.',
    areaContent: `
<p>Northwest Houston is a diverse, sprawling area with garage door needs ranging from vintage single-car doors to modern three-car installations. Garage Goat serves the entire <strong>Jersey Village to Willowbrook corridor</strong> and beyond with the same fast, honest service our Cypress neighbors know and trust.</p>
<h3>Areas We Serve in NW Houston</h3>
<ul>
  <li>Jersey Village</li>
  <li>Willowbrook</li>
  <li>Copperfield</li>
  <li>Bear Creek</li>
  <li>Champions area</li>
  <li>FM 1960 corridor</li>
</ul>
<p>NW Houston homeowners often deal with <strong>humidity-related garage door issues</strong> — swollen wood panels, rusted springs, and corroded hardware. Our technicians are experienced with Houston's climate challenges and recommend materials and maintenance plans built for our weather.</p>
    `,
    mapEmbedUrl: '',
    relatedServiceIds: ['repair', 'opener-repair', 'installation'],
    relatedBlogIds: ['cost-guide'],
    relatedOfferIds: ['new-door-discount']
  }
];

export const reviews: Review[] = [
  {
    id: 'r1',
    reviewerName: 'D.A.',
    city: 'Cypress, TX',
    rating: 5,
    text: 'Outstanding Service! Response time was about 20 minutes. Quick diagnosis and repair. His professionalism, speed, and attention to detail stood out. The best garage service company I\'ve used.',
    serviceUsed: 'Garage Door Repair',
    date: '2025-11-15',
  },
  {
    id: 'r2',
    reviewerName: 'V.A.',
    city: 'Cypress, TX',
    rating: 5,
    text: 'My go to garage door guy! Always reliable and gets the job done right.',
    serviceUsed: 'Garage Door Repair',
    date: '2025-10-20',
  },
  {
    id: 'r3',
    reviewerName: 'E.J.',
    city: 'Cypress, TX',
    rating: 5,
    text: 'I did not believe he was real when he advised against unnecessary maintenance work I initially expected to need. Honest and trustworthy — hard to find these days.',
    serviceUsed: 'Garage Door Repair',
    date: '2025-09-08',
  },
  {
    id: 'r4',
    reviewerName: 'Maria S.',
    city: 'Cypress, TX',
    rating: 5,
    text: 'Cesar got back to us quickly and was able to do the repairs we need at an affordable price the same day. Very happy with his service!',
    serviceUsed: 'Garage Door Repair',
    date: '2025-08-12',
  },
  {
    id: 'r5',
    reviewerName: 'James T.',
    city: 'Tomball, TX',
    rating: 5,
    text: 'He was able to come by right away and fixed my garage door today. He is very knowledgeable with great service and reasonable price. Came in less than an hour within contact and took less than an hour to fix the problem.',
    serviceUsed: 'Spring Repair',
    date: '2025-07-22',
  },
  {
    id: 'r6',
    reviewerName: 'Robert K.',
    city: 'Cypress, TX',
    rating: 5,
    text: 'Immediately after my initial contact with Mr. Cesar he came by within one hour. The work was very good. I am very happy with the service he provided.',
    serviceUsed: 'Garage Door Repair',
    date: '2025-06-30',
  },
  {
    id: 'r7',
    reviewerName: 'Angela M.',
    city: 'Katy, TX',
    rating: 5,
    text: 'He was very friendly, professional and very knowledgeable about his work. Made recommendations that were helpful in keeping our garage door from breaking again.',
    serviceUsed: 'Garage Door Repair',
    date: '2025-05-18',
  },
  {
    id: 'r8',
    reviewerName: 'David L.',
    city: 'Spring, TX',
    rating: 5,
    text: 'Cesar did a great job and worked within my budget. He answers the phone — I called several others with no reply. Thanks again, call him if you need your garage door fixed.',
    serviceUsed: 'Garage Door Opener Repair',
    date: '2025-04-05',
  },
  {
    id: 'r9',
    reviewerName: 'Sandra W.',
    city: 'Cypress, TX',
    rating: 5,
    text: 'Cesar did awesome repairing my garage door instantly. He is so good and fast in fixing the issue. Highly recommend!',
    serviceUsed: 'Garage Door Repair',
    date: '2025-03-14',
  },
];

export const offers: Offer[] = [
  {
    id: 'summer-special',
    slug: '75-off-garage-door-repair',
    title: '$75 Off Any Repair',
    headline: 'Get $75 Off Your Next Garage Door Repair',
    discountAmount: '$75 OFF',
    expiration: 'Expires: Dec 31, 2026',
    disclaimer: 'Valid for repairs over $150. Cannot be combined with other offers. Must mention at time of booking.',
    relatedServiceIds: ['repair', 'spring-repair', 'emergency']
  },
  {
    id: 'tune-up',
    slug: 'special-offers',
    title: '$29 Safety Inspection',
    headline: '20-Point Safety Inspection & Tune-Up — Only $29',
    discountAmount: 'Only $29',
    expiration: 'Limited Time Offer',
    disclaimer: 'Includes lubrication, safety check, and written report. Regular price $89.',
    relatedServiceIds: ['repair', 'opener-repair']
  },
  {
    id: 'new-door-discount',
    slug: 'new-door-special',
    title: 'Free Opener with New Door',
    headline: 'Buy a New Garage Door, Get a LiftMaster Opener FREE',
    discountAmount: 'FREE OPENER',
    expiration: 'While supplies last',
    disclaimer: 'LiftMaster 8155W belt drive opener included with purchase of qualifying door. Installation included.',
    relatedServiceIds: ['installation', 'opener-repair']
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'cost-guide',
    slug: 'garage-door-repair-cost-cypress-tx',
    title: 'How Much Does Garage Door Repair Cost in Cypress, TX?',
    excerpt: 'Understanding the costs associated with common garage door repairs can help you budget effectively and avoid overpaying.',
    content: `
<p>If you're a homeowner in Cypress, TX wondering what garage door repair will cost you, you're not alone. It's one of the most common questions we hear — and unfortunately, one that too many companies give vague answers to. At Garage Goat, we believe in transparent pricing, so here's an honest breakdown of what you can expect to pay.</p>

<h3>Average Repair Costs in Cypress, TX</h3>
<p>Most garage door repairs fall between <strong>$150 and $450</strong>, depending on the issue. Here's what typical repairs cost in our area (based on Garage Goat's local pricing as of 2025):</p>
<ul>
  <li><strong>Spring replacement:</strong> $200 – $400 (for a pair of torsion springs)</li>
  <li><strong>Opener repair:</strong> $150 – $350 (motor, gear, or logic board)</li>
  <li><strong>Cable replacement:</strong> $150 – $250</li>
  <li><strong>Off-track repair:</strong> $125 – $250</li>
  <li><strong>Panel replacement:</strong> $250 – $800 (depends on door style)</li>
  <li><strong>Roller replacement:</strong> $100 – $200 (full set)</li>
  <li><strong>Sensor alignment:</strong> $75 – $125</li>
</ul>

<h3>What Affects the Price?</h3>
<p>Several factors influence your final cost: the type of repair needed, the parts required, and the age and model of your door. Older doors may need parts that are harder to source, while newer doors often use standard components that we carry on our trucks.</p>
<p>One important note: <strong>we never charge emergency or after-hours fees</strong>. Whether it's 2 PM or 2 AM, our prices stay the same.</p>

<h3>How to Avoid Overpaying</h3>
<p>The garage door industry has a reputation problem — some companies quote low on the phone, then inflate the price once they're at your house. Here's how to protect yourself: always get a written estimate before work begins, ask if the estimate includes parts and labor, and don't let anyone pressure you into a decision on the spot.</p>
<p>At Garage Goat, we provide free estimates with no obligation. Our technician diagnoses the issue, explains your options, and gives you an upfront price. If you say no, you pay nothing. That's our guarantee.</p>

<h3>When Repair vs. Replacement Makes Sense</h3>
<p>As a rule of thumb: if your door is under 15 years old and the issue is mechanical (springs, opener, cables), repair is almost always the better value. If the door itself is severely damaged, rusted through, or outdated, replacement might be more cost-effective — especially considering that a new garage door offers up to <strong>194% ROI</strong> (source: Remodeling Magazine's 2024 Cost vs. Value Report).</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1759355787121-eaef014a501d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnYXJhZ2UlMjBkb29yJTIwaG91c2UlMjBleHRlcmlvcnxlbnwxfHx8fDE3NzAxNTc1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'January 15, 2026',
    tags: ['cost', 'repair', 'cypress'],
    author: 'Cesar Garcia, Owner — Garage Goat Garage Doors',
    authorRole: 'TDLR Licensed Garage Door Technician & Owner',
    relatedServiceIds: ['repair', 'spring-repair', 'opener-repair'],
    relatedBlogIds: ['spring-signs', 'new-door-cost', 'repair-vs-replace']
  },
  {
    id: 'spring-signs',
    slug: 'signs-garage-door-spring-breaking',
    title: '5 Warning Signs Your Garage Door Spring Is About to Break',
    excerpt: 'Listen for these noises and check for these visual cues to prevent a garage door emergency before it happens.',
    content: `
<p>A broken garage door spring isn't just inconvenient — it can be dangerous. The good news? Springs rarely break without warning. If you know what to look and listen for, you can catch a failing spring before it snaps and schedule a safe, affordable replacement on your terms.</p>

<h3>The 5 Warning Signs</h3>

<p><strong>1. Your Door Feels Heavier Than Usual</strong></p>
<p>Try this test: pull the emergency release and manually lift your door halfway. A properly balanced door should stay in place. If it feels heavy or drops quickly, your springs have lost tension and are nearing the end of their life.</p>

<p><strong>2. The Door Opens Unevenly</strong></p>
<p>If one side of your door rises higher than the other, or the door tilts when opening, it usually means one spring is weaker than its partner. This puts extra strain on your opener and can damage the tracks over time.</p>

<p><strong>3. You See Gaps in the Spring Coils</strong></p>
<p>Walk into your garage and look at the torsion spring above the door. A healthy spring has tightly wound coils with no visible gaps. If you see a section where the coils are stretched apart or separated, the spring is on its last legs.</p>

<p><strong>4. The Door Slams Shut</strong></p>
<p>A garage door should close slowly and smoothly. If it drops the last foot or two with a bang, the springs aren't providing enough counterbalance. This is a safety hazard — a falling door can cause serious injury.</p>

<p><strong>5. Your Opener Struggles or Strains</strong></p>
<p>If your opener motor sounds like it's working harder than usual, or if it stops mid-cycle, weak springs may be forcing the opener to lift more weight than it's designed for. This can burn out your opener motor, turning a $300 spring replacement into a $600+ repair.</p>

<h3>What to Do If You Notice These Signs</h3>
<p><strong>Do not attempt to replace springs yourself.</strong> Garage door springs are under extreme tension — hundreds of pounds of force — and can cause serious injury or death if handled improperly. Call a licensed professional.</p>
<p>At Garage Goat, we use high-cycle springs rated for 25,000+ cycles per manufacturer cycle-life rating (that's 10-15 years of daily use) and back them with a lifetime warranty. Most replacements take under 90 minutes and we carry springs for all standard door sizes on our trucks.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1489348557694-c552c1eee72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJhZ2UlMjB3b3Jrc2hvcCUyMHRvb2xzJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzA5Njg4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'February 3, 2026',
    tags: ['springs', 'maintenance', 'emergency'],
    author: 'Cesar Garcia, Owner — Garage Goat Garage Doors',
    authorRole: 'TDLR Licensed Garage Door Technician & Owner',
    relatedServiceIds: ['spring-repair', 'emergency'],
    relatedBlogIds: ['cost-guide', 'spring-lifespan', 'spring-types']
  },
  {
    id: 'new-door-cost',
    slug: 'new-garage-door-cost-cypress-tx',
    title: 'How Much Does a New Garage Door Cost in Cypress, TX?',
    excerpt: 'Planning a garage door replacement? Here\'s what to expect for pricing on new garage doors in the Cypress and NW Houston area.',
    content: `
<p>Replacing your garage door is one of the smartest investments you can make as a homeowner in Cypress, TX. According to Remodeling Magazine's Cost vs. Value Report, a new garage door delivers up to <strong>194% return on investment</strong> — the highest of any home improvement project. But what should you actually expect to pay? Here's an honest breakdown from a local expert.</p>

<h3>Price Ranges by Door Style</h3>
<p>The style of garage door you choose has the biggest impact on your total cost. Here's what Cypress-area homeowners typically pay, including professional installation:</p>
<ul>
  <li><strong>Raised Panel Steel:</strong> $800 – $1,500 — The most popular choice for subdivisions like Bridgeland and Towne Lake. Clean, classic look that fits virtually any home style.</li>
  <li><strong>Carriage House:</strong> $1,200 – $3,000 — Trending heavily in Cypress master-planned communities. Farmhouse charm with modern insulation and durability.</li>
  <li><strong>Modern Flush Panel:</strong> $1,500 – $4,000 — Sleek, contemporary lines for modern builds. Increasingly popular in NW Houston new construction.</li>
  <li><strong>Full-View Aluminum & Glass:</strong> $2,000 – $5,000+ — Maximum curb appeal and natural light. A statement piece for luxury homes.</li>
</ul>

<h3>Factors That Affect Your Final Price</h3>
<p>Beyond style, several factors influence the total cost of your new garage door:</p>
<ul>
  <li><strong>Insulation level:</strong> Polyurethane insulation (R-value 12+) adds $200–$500 but pays for itself in Texas energy savings</li>
  <li><strong>Door size:</strong> Standard single (8x7) vs. double (16x7) vs. oversized openings</li>
  <li><strong>Window inserts:</strong> Add $150–$400 for decorative or frosted glass panels</li>
  <li><strong>Hardware and finish:</strong> Premium colors, woodgrain finishes, and decorative hardware add to the cost</li>
  <li><strong>Old door removal:</strong> At Garage Goat, this is always included — some companies charge extra</li>
</ul>

<h3>Why Professional Installation Matters</h3>
<p>A garage door installation involves high-tension springs, precise track alignment, and electrical connections. Improper installation can void your manufacturer warranty, create safety hazards, and lead to premature wear. Our TDLR-licensed technicians handle everything from measurement to final safety testing, and every installation comes with our labor warranty.</p>

<h3>Get a Free Estimate</h3>
<p>Ready to explore your options? Garage Goat offers free in-home consultations throughout Cypress, Tomball, Katy, and NW Houston. We'll bring samples, take measurements, and give you a written estimate with no pressure and no obligation. Call us at <strong>(281) 948-5452</strong> to schedule yours today.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'March 5, 2026',
    tags: ['cost', 'installation', 'cypress'],
    author: 'Cesar Garcia, Owner — Garage Goat Garage Doors',
    authorRole: 'TDLR Licensed Garage Door Technician & Owner',
    relatedServiceIds: ['installation', 'repair'],
    relatedBlogIds: ['cost-guide']
  },
  {
    id: 'opener-troubleshoot',
    slug: 'garage-door-opener-not-working',
    title: 'Garage Door Opener Not Working? 7 Things to Check Before Calling',
    excerpt: 'Before you call for repair, try these simple troubleshooting steps that fix most garage door opener issues.',
    content: `
<p>Your garage door opener stopped working and you're wondering whether you need a repair call. Before you pick up the phone, try these seven simple checks. Many opener problems have easy fixes that any Cypress homeowner can handle in a few minutes — no tools required.</p>

<h3>1. Check the Remote Batteries</h3>
<p>It sounds obvious, but dead remote batteries are the #1 reason homeowners call us for opener issues. Replace the battery (usually a CR2032 coin cell) and try again. If you have a second remote and it works, batteries were your problem.</p>

<h3>2. Check the Power Outlet</h3>
<p>Garage door openers plug into a standard outlet on the ceiling. Sometimes the plug gets bumped loose, or the outlet's GFCI breaker trips — especially after Houston thunderstorms. Unplug the unit, reset the GFCI button if present, and plug it back in.</p>

<h3>3. Inspect the Safety Sensors</h3>
<p>Every modern opener has two photo-eye sensors at the bottom of the door tracks, about 6 inches off the ground. If they're misaligned, dirty, or blocked by debris, the door won't close (though it may still open). Clean the lenses with a soft cloth and make sure both LED lights are solid — not blinking.</p>

<h3>4. Check the Photo Eye Alignment</h3>
<p>If cleaning didn't help, the sensors may have shifted. Each sensor should have a steady green light. If one is blinking, gently adjust its angle until the light goes solid. A bump from a bike, lawnmower, or kid's toy is usually the culprit.</p>

<h3>5. Try the Wall Switch</h3>
<p>If the remote doesn't work but the wall-mounted button does, the issue is with the remote — not the opener. Try reprogramming the remote using the "Learn" button on your opener unit. Your owner's manual has the steps, or search your model number online.</p>

<h3>6. Check the Emergency Release</h3>
<p>The red emergency release cord disconnects the door from the opener carriage. If someone pulled it (intentionally or accidentally), the opener will run but the door won't move. Re-engage it by pulling the cord toward the door until you hear a click, then run the opener.</p>

<h3>7. Inspect the Limit Settings</h3>
<p>If your door opens but won't close all the way, or closes then immediately reverses, the limit settings may need adjustment. These are small dials on the side of the opener unit that control how far the door travels. Adjust in small increments and test after each change.</p>

<h3>When to Call a Pro</h3>
<p>If none of these steps solve the problem, you likely have a mechanical issue — a stripped gear, failing motor, or damaged logic board. These repairs require professional tools and expertise. Call Garage Goat at <strong>(281) 948-5452</strong> for a free diagnosis. We service all major brands throughout Cypress and NW Houston.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1622630998477-20e81ea6b16a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'February 20, 2026',
    tags: ['opener', 'troubleshooting', 'diy'],
    author: 'Cesar Garcia, Owner — Garage Goat Garage Doors',
    authorRole: 'TDLR Licensed Garage Door Technician & Owner',
    relatedServiceIds: ['opener-repair', 'repair'],
    relatedBlogIds: ['spring-signs']
  },
  {
    id: 'spring-types',
    slug: 'torsion-vs-extension-springs-garage-door',
    title: 'Torsion vs Extension Springs: What\'s on Your Garage Door?',
    excerpt: 'Learn the difference between torsion and extension springs, which type your door uses, and why it matters for repairs.',
    content: `
<p>If you own a home in Cypress, TX or anywhere in the NW Houston area, your garage door relies on one of two types of springs to open and close. Understanding the difference between torsion and extension springs helps you make smarter decisions when it's time for a repair or replacement.</p>

<h3>Torsion Springs: The Modern Standard</h3>
<p>Torsion springs are mounted on a metal shaft directly above the garage door opening. When the door closes, cables connected to the bottom corners wind the springs, storing energy. When you open the door, the springs unwind and release that energy to lift the heavy door panel.</p>
<ul>
  <li><strong>Location:</strong> Horizontally mounted above the door opening</li>
  <li><strong>How they work:</strong> Twist (torque) to store and release energy</li>
  <li><strong>Typical lifespan:</strong> 15,000–20,000 cycles for standard; 25,000+ for high-cycle</li>
  <li><strong>Cost to replace:</strong> $200–$400 for a pair, installed</li>
</ul>
<p>Torsion springs are the standard in most Cypress-area homes built after the 1990s. They provide smoother, more controlled operation and are generally safer because the spring stays on the shaft even if it breaks.</p>

<h3>Extension Springs: The Older Design</h3>
<p>Extension springs run along the horizontal tracks on both sides of the door. They stretch (extend) when the door closes, storing energy in the elongated coils. When the door opens, the springs contract to help lift the door.</p>
<ul>
  <li><strong>Location:</strong> Along the horizontal tracks on each side of the door</li>
  <li><strong>How they work:</strong> Stretch and contract to store and release energy</li>
  <li><strong>Typical lifespan:</strong> 10,000–15,000 cycles</li>
  <li><strong>Cost to replace:</strong> $150–$300 for a pair, installed</li>
</ul>
<p>Extension springs are common in older homes and lower-end installations. They're less expensive but have a shorter lifespan and pose a greater safety risk — if one breaks without a safety cable, it can fly across the garage with dangerous force.</p>

<h3>Which Type Is Better?</h3>
<p>Torsion springs win on almost every metric: they last longer, operate more smoothly, put less stress on the opener, and are safer if they fail. The only advantage of extension springs is their lower upfront cost. If your home currently has extension springs, we recommend upgrading to torsion when it's time for replacement.</p>

<h3>How to Tell Which Type You Have</h3>
<p>Stand inside your garage with the door closed and look up. If you see a thick coil mounted on a metal bar above the door, you have torsion springs. If you see springs running along the tracks on the sides of the door, those are extension springs. Still not sure? Snap a photo and text it to us at <strong>(281) 948-5452</strong> — we'll identify it for you.</p>

<h3>The Garage Goat Recommendation</h3>
<p>We install high-cycle torsion springs rated for 25,000+ cycles on every job. They cost slightly more upfront but last 2–3 times longer than standard springs, saving you money over time. Every spring we install comes with a <strong>lifetime warranty</strong>.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'February 10, 2026',
    tags: ['springs', 'education', 'repair'],
    author: 'Cesar Garcia, Owner — Garage Goat Garage Doors',
    authorRole: 'TDLR Licensed Garage Door Technician & Owner',
    relatedServiceIds: ['spring-repair', 'repair'],
    relatedBlogIds: ['spring-signs', 'spring-lifespan']
  },
  {
    id: 'spring-lifespan',
    slug: 'how-long-garage-door-springs-last',
    title: 'How Long Do Garage Door Springs Last?',
    excerpt: 'Standard springs last 7-10 years. High-cycle springs can last 15-20 years. Here\'s what determines your spring\'s lifespan.',
    content: `
<p>Garage door springs don't last forever — they're rated by the number of cycles they can handle before wearing out. One cycle equals one open and one close. Understanding cycle life helps you predict when your springs will need replacement and choose the right springs for your home in Cypress, TX.</p>

<h3>Cycle Life Explained</h3>
<p>Every garage door spring is manufactured with a specific cycle-life rating:</p>
<ul>
  <li><strong>Standard (builder-grade) springs:</strong> 10,000 cycles — roughly 7–10 years for a typical family</li>
  <li><strong>High-cycle springs:</strong> 25,000–50,000 cycles — approximately 15–20+ years of use</li>
</ul>
<p>Most homes in Cypress-area subdivisions like Bridgeland and Towne Lake were built with standard 10,000-cycle springs. If your home is 7+ years old and you've never replaced the springs, they're approaching the end of their life.</p>

<h3>Factors That Affect Spring Lifespan</h3>
<p>The rated cycle life is a baseline, but real-world conditions can shorten or extend your springs' life:</p>
<ul>
  <li><strong>Usage frequency:</strong> A family that opens the garage 4–6 times per day burns through cycles faster than a couple who uses it twice daily</li>
  <li><strong>Weather and humidity:</strong> Houston's humidity accelerates rust and corrosion, which weakens spring steel. This is a major factor in NW Houston homes.</li>
  <li><strong>Lubrication:</strong> Springs that are lubricated every 6 months with silicone spray last significantly longer than dry springs. Lubrication reduces friction and prevents rust.</li>
  <li><strong>Door balance:</strong> An unbalanced door forces springs to work harder on every cycle. Regular balance checks extend spring life.</li>
  <li><strong>Temperature swings:</strong> Texas temperature extremes — from summer heat topping 100°F to occasional winter freezes — cause metal fatigue over time.</li>
</ul>

<h3>Signs Your Springs Are Aging</h3>
<p>Watch for these indicators that your springs are nearing the end of their life:</p>
<ul>
  <li>The door feels heavier when you lift it manually</li>
  <li>You see visible rust or corrosion on the coils</li>
  <li>The door opens unevenly or one side lags</li>
  <li>Your opener strains or sounds louder than before</li>
  <li>You notice small gaps forming between coils</li>
</ul>

<h3>Why Garage Goat Uses High-Cycle Springs</h3>
<p>We exclusively install high-cycle springs rated for <strong>25,000+ cycles</strong> because they deliver the best long-term value for Cypress homeowners. While they cost $50–$100 more than standard springs, they last 2–3 times longer — saving you the cost and inconvenience of an extra replacement. Every spring we install comes with a <strong>lifetime warranty</strong>, because we stand behind our work.</p>

<p>Not sure how old your springs are? Call Garage Goat at <strong>(281) 948-5452</strong> for a free inspection. We'll tell you how much life is left and whether it's time to plan for a replacement.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'January 28, 2026',
    tags: ['springs', 'maintenance', 'lifespan'],
    author: 'Cesar Garcia, Owner — Garage Goat Garage Doors',
    authorRole: 'TDLR Licensed Garage Door Technician & Owner',
    relatedServiceIds: ['spring-repair', 'repair'],
    relatedBlogIds: ['spring-signs', 'spring-types']
  },
  {
    id: 'wont-close',
    slug: 'garage-door-wont-close',
    title: 'Garage Door Won\'t Close? Here\'s Why (and What to Do)',
    excerpt: 'A garage door that won\'t close is a security risk. Here are the most common causes and whether you need a pro.',
    content: `
<p>Few things are more frustrating — or more concerning — than a garage door that refuses to close. It's a security risk, an energy waste, and an open invitation to pests and weather. If you're dealing with this problem in Cypress, TX or the NW Houston area, here are the most common causes and what to do about each one.</p>

<h3>1. Sensor Misalignment (Most Common)</h3>
<p>By far the most frequent cause of a door that won't close. Every garage door has two photo-eye sensors at the bottom of the tracks, about 6 inches off the ground. If they're misaligned, dirty, or obstructed, the door will reverse immediately when you try to close it. Clean the lenses and make sure both sensors show a steady light. Gently adjust until they're pointing directly at each other.</p>

<h3>2. Track Obstruction</h3>
<p>Even a small object in the door's path — a toy, a leaf, a piece of debris — can trigger the safety reverse. Walk the full length of both tracks and clear anything that shouldn't be there. Also check for dents or bends in the tracks themselves.</p>

<h3>3. Broken Springs</h3>
<p>If the door won't move at all, or you heard a loud bang from the garage, a spring likely broke. The door will feel extremely heavy if you try to lift it manually. <strong>Do not attempt to force the door closed</strong> — call a professional immediately. Broken springs are the most dangerous garage door repair.</p>

<h3>4. Limit Switch Issues</h3>
<p>The limit switches tell the opener where the door should stop when opening and closing. If the close limit is set incorrectly, the opener may think the door has hit something when it hasn't, causing it to reverse. These are small adjustment dials on the side of the opener unit.</p>

<h3>5. Dead Remote Batteries</h3>
<p>If your remote won't close the door but the wall button works fine, replace the remote batteries. This is the simplest fix and the one most people overlook.</p>

<h3>6. Power Outage</h3>
<p>After Houston storms knock out power, your opener won't work until electricity is restored. You can close the door manually by pulling the red emergency release cord and lowering the door by hand. Make sure to re-engage the opener after power returns.</p>

<h3>7. Broken Cables</h3>
<p>If you see loose cables hanging beside the door or wound up on the floor, a cable has snapped. The door may hang crooked or refuse to move. Like broken springs, this requires professional repair — cables are under significant tension.</p>

<h3>Don't Leave Your Door Open Overnight</h3>
<p>A garage door stuck open overnight is a serious security risk. Burglars specifically target open garage doors, and in Cypress, wildlife like raccoons and snakes have been known to make themselves at home. If you can't get the door closed, pull the emergency release and lower it manually until a technician can fix the underlying issue.</p>

<p>Need help? Garage Goat provides <strong>24/7 emergency service</strong> throughout Cypress and NW Houston. Call <strong>(281) 948-5452</strong> — we'll get your door closed and secured.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'January 15, 2026',
    tags: ['troubleshooting', 'repair', 'safety'],
    author: 'Cesar Garcia, Owner — Garage Goat Garage Doors',
    authorRole: 'TDLR Licensed Garage Door Technician & Owner',
    relatedServiceIds: ['repair', 'opener-repair'],
    relatedBlogIds: ['opener-troubleshoot', 'spring-signs']
  },
  {
    id: 'door-styles',
    slug: 'best-garage-door-styles-texas-homes',
    title: 'Best Garage Door Styles for Texas Homes in 2026',
    excerpt: 'From classic raised panel to modern flush designs, here are the garage door styles trending in Cypress and NW Houston.',
    content: `
<p>Your garage door makes up roughly 30% of your home's front facade, making it one of the most impactful design elements for curb appeal. Whether you're building new or replacing an aging door in Cypress, TX, choosing the right style can transform how your home looks and feels. Here are the styles we're seeing the most demand for in 2026.</p>

<h3>Raised Panel — The Versatile Classic</h3>
<p>Raised panel doors remain the most popular choice across NW Houston for good reason. They're affordable, come in dozens of colors, and complement virtually every architectural style from traditional to transitional. If your HOA has specific guidelines, a raised panel door in the right color almost always meets requirements. Expect to pay <strong>$800–$1,500 installed</strong>.</p>

<h3>Carriage House — The Trending Favorite</h3>
<p>Carriage house doors are surging in popularity, especially in Cypress master-planned communities like Bridgeland and Towne Lake. They evoke the look of old swing-out barn doors but operate with modern overhead mechanisms. The combination of farmhouse charm and modern performance makes them a top seller. Budget <strong>$1,200–$3,000 installed</strong>.</p>

<h3>Modern Flush Panel — Clean & Contemporary</h3>
<p>For newer builds and modern architecture, flush panel doors deliver clean, horizontal lines with minimal visual clutter. They're increasingly popular in NW Houston's contemporary new construction. Pair them with a bold paint color or a woodgrain finish for extra impact. These typically run <strong>$1,500–$4,000 installed</strong>.</p>

<h3>Full-View Aluminum & Glass — The Statement Piece</h3>
<p>If you want maximum curb appeal and natural light, full-view doors with aluminum frames and glass panels make a dramatic statement. Frosted or tinted glass options add privacy while still flooding your garage with light. These are perfect for homes where the garage faces a courtyard or is visible from the main living areas. Expect <strong>$2,000–$5,000+ installed</strong>.</p>

<h3>Real Wood — Beautiful but High-Maintenance</h3>
<p>Solid wood doors are stunning and offer unmatched natural beauty. However, in the Houston area's humidity, they require regular sealing and maintenance to prevent warping, swelling, and rot. We recommend wood doors only for homeowners committed to annual maintenance — or consider a steel door with a faux woodgrain finish for a similar look with far less upkeep.</p>

<h3>Insulated Steel — Best for Texas Heat</h3>
<p>Regardless of the style you choose, we strongly recommend insulated steel construction for any Texas home. Polyurethane-insulated doors (R-value 12+) keep your garage significantly cooler in the summer, reduce energy costs, and are quieter and more durable than non-insulated options. The $200–$500 upgrade pays for itself.</p>

<h3>Need Help Choosing?</h3>
<p>Garage Goat offers free in-home consultations where we bring samples and help you choose the perfect door for your home and budget. Call <strong>(281) 948-5452</strong> to schedule yours.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'January 5, 2026',
    tags: ['installation', 'styles', 'curb-appeal'],
    author: 'Cesar Garcia, Owner — Garage Goat Garage Doors',
    authorRole: 'TDLR Licensed Garage Door Technician & Owner',
    relatedServiceIds: ['installation'],
    relatedBlogIds: ['new-door-cost']
  },
  {
    id: 'safety-checklist',
    slug: 'garage-door-safety-checklist',
    title: 'Is Your Garage Door Safe? A Homeowner\'s Safety Checklist',
    excerpt: 'Your garage door is the heaviest moving object in your home. Use this checklist to make sure it\'s safe.',
    content: `
<p>Your garage door weighs between 150 and 400 pounds and moves multiple times every day. It's the single heaviest moving object in your home — and if its safety features aren't working properly, it can cause serious injury. As a TDLR-licensed technician serving Cypress, TX and NW Houston, I recommend every homeowner run through this safety checklist at least twice a year.</p>

<h3>1. Test the Auto-Reverse Feature</h3>
<p>Place a 2x4 board flat on the ground in the center of the door opening. Press the close button. The door should contact the board and immediately reverse direction. If it doesn't, your auto-reverse is malfunctioning — <strong>stop using the door and call a professional immediately</strong>. This feature is required by federal law (UL 325) and is your door's primary safety mechanism.</p>

<h3>2. Check the Photo Eye Sensors</h3>
<p>The photo-eye sensors are mounted about 6 inches off the ground on both sides of the door opening. Wave an object (like a broom handle) through the beam while the door is closing. The door should immediately stop and reverse. If it doesn't, clean the sensor lenses and check their alignment. Both sensors should show steady indicator lights.</p>

<h3>3. Inspect Springs Visually</h3>
<p>Look at the torsion spring(s) above your door opening. Check for visible rust, gaps in the coils, or any signs of stretching or deformation. <strong>Never touch or adjust springs yourself</strong> — they're under extreme tension and can cause fatal injuries. If you see any concerning signs, call a pro.</p>

<h3>4. Test the Manual Disconnect</h3>
<p>Pull the red emergency release cord to disconnect the door from the opener. You should be able to lift and lower the door smoothly by hand. If it's extremely heavy, won't stay up on its own, or drops quickly, the springs may be worn and the door is out of balance. Re-engage the opener after testing.</p>

<h3>5. Check Cables for Fraying</h3>
<p>The lifting cables run from the bottom brackets of the door up to the spring drums. Look for any fraying, rust, or loose strands. Frayed cables can snap without warning, so have them replaced at the first sign of wear.</p>

<h3>6. Inspect Rollers and Tracks</h3>
<p>Check that the rollers spin freely and aren't chipped, cracked, or worn flat. Examine the tracks for dents, bends, or debris. The door should travel smoothly without jerking, grinding, or binding at any point.</p>

<h3>7. Test Door Balance</h3>
<p>With the door disconnected from the opener, manually lift it to about waist height and let go. A properly balanced door should stay in place, rising or falling no more than a few inches. If it drops or shoots up, the springs need professional adjustment.</p>

<h3>When Something Fails the Test</h3>
<p>If any of these checks reveal a problem, don't ignore it. Garage door injuries send thousands of Americans to the emergency room every year. Call Garage Goat at <strong>(281) 948-5452</strong> for a professional safety inspection — it could prevent a serious accident.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'December 20, 2025',
    tags: ['safety', 'maintenance', 'checklist'],
    author: 'Cesar Garcia, Owner — Garage Goat Garage Doors',
    authorRole: 'TDLR Licensed Garage Door Technician & Owner',
    relatedServiceIds: ['repair', 'spring-repair'],
    relatedBlogIds: ['maintenance-checklist', 'spring-signs']
  },
  {
    id: 'maintenance-checklist',
    slug: 'garage-door-maintenance-checklist',
    title: 'Garage Door Maintenance: The 15-Minute Seasonal Tune-Up',
    excerpt: 'A quick seasonal maintenance routine can prevent expensive repairs. Here\'s what to do every 3-6 months.',
    content: `
<p>Most garage door problems don't happen overnight — they build up over months of neglect. The good news? A simple 15-minute tune-up every 3–6 months can prevent most common failures and extend the life of your door and opener. Here's the maintenance routine I recommend to every Cypress, TX homeowner.</p>

<h3>Step 1: Visual Inspection (2 Minutes)</h3>
<p>Stand inside your garage with the door closed. Look at the springs, cables, rollers, pulleys, and mounting hardware. You're looking for anything that seems worn, loose, rusted, or out of place. Don't touch anything — just observe. If you spot a problem, note it and call a technician.</p>

<h3>Step 2: Lubricate Moving Parts (3 Minutes)</h3>
<p>This is the single most impactful maintenance step you can do. Use a <strong>silicone-based spray lubricant</strong> (not WD-40 — it's a degreaser, not a lubricant) on these parts:</p>
<ul>
  <li>Torsion spring coils (spray the entire length)</li>
  <li>Roller stems and bearings</li>
  <li>Hinges where they pivot</li>
  <li>Lock and latch mechanisms</li>
  <li>The opener's rail or chain</li>
</ul>
<p>Regular lubrication reduces friction, prevents rust (critical in Houston's humidity), and keeps your door operating quietly and smoothly.</p>

<h3>Step 3: Tighten Hardware (3 Minutes)</h3>
<p>The vibration from thousands of open-close cycles loosens hardware over time. Using a socket wrench, check and tighten the bolts on the door's roller brackets, the hinges, and the opener's mounting bracket. Don't overtighten — just snug them up.</p>

<h3>Step 4: Test Door Balance (2 Minutes)</h3>
<p>Pull the emergency release cord and manually lift the door to waist height. Let go. A balanced door stays put. If it drops or rises, the springs need professional adjustment. <strong>Do not attempt to adjust springs yourself.</strong></p>

<h3>Step 5: Clean the Tracks (2 Minutes)</h3>
<p>Wipe the inside of both vertical tracks with a damp cloth to remove dirt and debris. Don't lubricate the tracks — the rollers should glide on a clean, dry surface. If the tracks have dents or bends, call a professional.</p>

<h3>Step 6: Check Weatherstripping (2 Minutes)</h3>
<p>Inspect the rubber seal along the bottom of the door and the weatherstripping around the door frame. Look for cracks, tears, or gaps. Damaged weatherstripping lets in water, dust, pests, and Texas heat. Replacement strips are inexpensive and easy to install.</p>

<h3>Step 7: Test the Auto-Reverse (1 Minute)</h3>
<p>Place a roll of paper towels under the center of the door and press close. The door should reverse immediately upon contact. If it doesn't, stop using the door and call for service — this is a critical safety feature.</p>

<h3>What's NOT a DIY Job</h3>
<p>Spring adjustment, cable replacement, track realignment, and opener gear repair are all jobs for a licensed professional. These components are under high tension and require specialized tools. Garage Goat offers a <strong>$29 professional tune-up</strong> that covers everything above plus the adjustments only a technician should make. Call <strong>(281) 948-5452</strong> to book yours.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'December 10, 2025',
    tags: ['maintenance', 'diy', 'prevention'],
    author: 'Cesar Garcia, Owner — Garage Goat Garage Doors',
    authorRole: 'TDLR Licensed Garage Door Technician & Owner',
    relatedServiceIds: ['repair'],
    relatedBlogIds: ['safety-checklist', 'spring-lifespan']
  },
  {
    id: 'repair-vs-replace',
    slug: 'repair-vs-replace-garage-door',
    title: 'When to Repair vs Replace Your Garage Door',
    excerpt: 'Is it time for a new door, or will a repair get you a few more years? Here\'s how to decide.',
    content: `
<p>One of the most common questions I hear from homeowners in Cypress, TX is: "Should I repair my old door or just replace the whole thing?" It's a fair question — and the answer depends on a few key factors. Here's a straightforward guide to help you decide.</p>

<h3>When Repair Makes Sense</h3>
<p>In most cases, repair is the better value. Consider repair when:</p>
<ul>
  <li><strong>Your door is under 15 years old:</strong> A well-maintained garage door can last 20–30 years. If yours is in its first half of life, repairs will keep it going strong.</li>
  <li><strong>The issue is mechanical:</strong> Broken springs, worn rollers, opener problems, frayed cables, and sensor issues are all routine repairs that cost a fraction of a new door.</li>
  <li><strong>Cosmetic damage is limited:</strong> A single dented panel can often be replaced individually for $250–$800, far less than a complete door replacement.</li>
  <li><strong>The door is structurally sound:</strong> If the door itself is solid — no rust-through, no warping, no major structural damage — investing in repair makes financial sense.</li>
</ul>

<h3>When Replacement Is the Better Choice</h3>
<p>Sometimes repair just isn't worth it. Consider replacement when:</p>
<ul>
  <li><strong>Severe structural damage:</strong> If multiple panels are crushed, the door is badly warped, or there's extensive rust-through, repair costs can approach the cost of a new door.</li>
  <li><strong>The door is outdated:</strong> Older doors without insulation, modern safety features (auto-reverse, photo eyes), or proper weathersealing are candidates for replacement.</li>
  <li><strong>Recurring problems:</strong> If you're calling for repairs every few months, the underlying door or hardware may be past its useful life. Constant repairs add up fast.</li>
  <li><strong>You're planning to sell:</strong> A new garage door offers up to <strong>194% ROI</strong> (source: Remodeling Magazine) — the highest of any home improvement. If you're selling in the Cypress or NW Houston market, a new door can be a smart investment.</li>
  <li><strong>Energy concerns:</strong> Non-insulated doors in Texas let in tremendous heat. Upgrading to an insulated door (R-12+) can noticeably reduce cooling costs.</li>
</ul>

<h3>Cost Comparison</h3>
<p>Here's a quick comparison to put things in perspective:</p>
<ul>
  <li><strong>Typical repair:</strong> $150–$450 (springs, cables, rollers, opener issues)</li>
  <li><strong>Panel replacement:</strong> $250–$800 per panel</li>
  <li><strong>New standard door installed:</strong> $800–$1,500</li>
  <li><strong>New premium door installed:</strong> $1,500–$4,000+</li>
</ul>

<h3>The Honest Assessment</h3>
<p>At Garage Goat, we'll never push you toward a replacement when a repair will do the job. Our technicians are trained to give honest assessments — and if repair is the right call, that's what we recommend. We've turned away replacement sales to do a $200 repair because it was the right thing for the homeowner. That's how we've earned 287+ five-star reviews.</p>

<p>Not sure which way to go? Call <strong>(281) 948-5452</strong> for a free in-home assessment. We'll inspect your door, show you what we find, and give you honest options — no pressure, no obligation.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'November 28, 2025',
    tags: ['repair', 'installation', 'advice'],
    author: 'Cesar Garcia, Owner — Garage Goat Garage Doors',
    authorRole: 'TDLR Licensed Garage Door Technician & Owner',
    relatedServiceIds: ['repair', 'installation'],
    relatedBlogIds: ['cost-guide', 'new-door-cost']
  },
  {
    id: 'noisy-door',
    slug: 'why-garage-door-loud-how-to-fix',
    title: 'Why Your Garage Door Is So Loud (and How to Fix It)',
    excerpt: 'Grinding, squeaking, or banging? Here\'s what\'s causing the noise and whether it needs professional attention.',
    content: `
<p>A noisy garage door is more than just annoying — especially if you have bedrooms above the garage (common in many Cypress, TX homes). Those grinding, squeaking, and banging sounds are usually your door telling you something needs attention. Here's what's likely causing the racket and what you can do about it.</p>

<h3>Worn Rollers — The #1 Culprit</h3>
<p>Old steel rollers are the most common source of garage door noise. As they wear, they develop flat spots and rough edges that grind against the tracks. The fix? <strong>Upgrade to nylon rollers.</strong> Nylon rollers are dramatically quieter, don't require lubrication, and last longer than steel. A full set replacement typically costs $100–$200 installed and makes an immediate, dramatic difference.</p>

<h3>Dry Hinges and Bearings</h3>
<p>Metal-on-metal friction creates squeaking and squealing. Houston's humidity can actually strip lubricant faster than in drier climates. Apply a silicone-based spray to all hinge pivot points and roller bearings every 3–6 months. <strong>Don't use WD-40</strong> — it's a solvent, not a lubricant, and will actually make things worse over time.</p>

<h3>Loose Hardware</h3>
<p>Thousands of open-close cycles shake hardware loose. Loose bolts on hinges, roller brackets, and the opener mounting bracket create rattling and vibrating noises. A socket wrench and 10 minutes can make a noticeable difference. Check and snug everything up — but don't overtighten.</p>

<h3>Unbalanced Door</h3>
<p>If your door makes a straining sound when opening or closing, it may be unbalanced. Test this by disconnecting the opener and lifting the door manually to waist height. If it doesn't stay put, the springs need professional adjustment. An unbalanced door forces the opener to work harder, creating motor noise and shortening its life.</p>

<h3>Worn Opener Gears</h3>
<p>If the noise is coming from the opener unit itself — a grinding or clicking sound — the drive gears may be stripped or worn. This is common in chain-drive openers over 10 years old. Gear replacement costs $150–$250, or you can upgrade to a <strong>belt-drive opener</strong> for whisper-quiet operation ($300–$500 installed).</p>

<h3>Vibrating Mounting Bracket</h3>
<p>The opener is bolted to a metal bracket attached to your ceiling or wall. If this bracket is loose or the fasteners have worked their way out, the opener vibrates against the structure — amplifying noise throughout the house. Tighten the bracket bolts and consider adding rubber vibration isolators between the bracket and the ceiling.</p>

<h3>Quick Fixes vs. When to Call a Pro</h3>
<p>You can handle lubrication, tightening hardware, and basic cleaning yourself. But spring adjustment, roller replacement, gear repair, and opener installation should be handled by a professional. These involve components under tension or electrical connections that require proper tools and training.</p>

<p>Ready for a quieter garage? Call Garage Goat at <strong>(281) 948-5452</strong>. We serve Cypress, Tomball, Katy, and the entire NW Houston area with same-day availability.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'November 15, 2025',
    tags: ['troubleshooting', 'repair', 'noise'],
    author: 'Cesar Garcia, Owner — Garage Goat Garage Doors',
    authorRole: 'TDLR Licensed Garage Door Technician & Owner',
    relatedServiceIds: ['repair', 'opener-repair'],
    relatedBlogIds: ['maintenance-checklist', 'opener-troubleshoot']
  },
  {
    id: 'smart-openers',
    slug: 'smart-garage-door-opener-worth-it',
    title: 'Smart Garage Door Openers: Are They Worth It?',
    excerpt: 'Wi-Fi openers let you control your garage from anywhere. Here\'s whether the upgrade makes sense for your home.',
    content: `
<p>Smart garage door openers have gone from tech novelty to mainstream must-have. If you're a homeowner in Cypress, TX considering an upgrade, here's an honest look at what smart openers offer, what they cost, and whether the investment makes sense for your household.</p>

<h3>What Can a Smart Opener Do?</h3>
<p>A Wi-Fi-enabled garage door opener connects to your home network and pairs with a smartphone app. Here's what that unlocks:</p>
<ul>
  <li><strong>Remote control:</strong> Open and close your garage from anywhere — your office, the grocery store, or vacation</li>
  <li><strong>Real-time alerts:</strong> Get notified when the door opens or closes, and if it's been left open</li>
  <li><strong>Scheduled closing:</strong> Set the door to automatically close every night at a specific time</li>
  <li><strong>Voice assistant integration:</strong> Control via Alexa, Google Home, or Apple HomeKit</li>
  <li><strong>Built-in camera:</strong> Some models include a camera feed so you can see what's happening in your garage</li>
  <li><strong>Guest access:</strong> Grant temporary access to dog walkers, cleaners, or family members</li>
</ul>

<h3>Top Smart Opener Brands</h3>
<p>Here are the brands we install and recommend most:</p>
<ul>
  <li><strong>LiftMaster (myQ):</strong> The professional-grade standard. Reliable, feature-rich, and compatible with Amazon Key for in-garage delivery. This is what we install most often.</li>
  <li><strong>Chamberlain (myQ):</strong> Same myQ technology as LiftMaster in a consumer-friendly package. Excellent app experience and smart home integration.</li>
  <li><strong>Genie (Aladdin Connect):</strong> Solid smart features with competitive pricing. Good option for budget-conscious upgrades.</li>
</ul>

<h3>How Much Does It Cost?</h3>
<p>A new smart garage door opener typically costs <strong>$300–$600 installed</strong>, depending on the brand, drive type (belt vs. chain), and features. Belt-drive models run about $75–$100 more but are significantly quieter — a worthwhile upgrade if you have bedrooms above the garage.</p>

<h3>Who Benefits Most?</h3>
<p>Smart openers deliver the most value for:</p>
<ul>
  <li><strong>Frequent travelers:</strong> Monitor and control your garage from anywhere for peace of mind</li>
  <li><strong>Families with teens:</strong> Get alerts when kids arrive home from school</li>
  <li><strong>Package delivery:</strong> Amazon Key integration lets delivery drivers place packages inside your garage instead of on the porch</li>
  <li><strong>Forgetful homeowners:</strong> Auto-close scheduling means you never leave the door open overnight again</li>
</ul>

<h3>Can You Retrofit Your Existing Opener?</h3>
<p>If your current opener works fine but you want smart features, you may not need a full replacement. LiftMaster and Chamberlain offer the <strong>myQ Smart Garage Hub</strong> ($30–$50) that adds Wi-Fi connectivity to most existing openers manufactured after 1993. It's a quick, affordable way to go smart without replacing your whole unit.</p>

<p>Want to explore smart opener options? Garage Goat installs and services all major brands throughout Cypress and NW Houston. Call <strong>(281) 948-5452</strong> for a free consultation.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'November 1, 2025',
    tags: ['opener', 'smart-home', 'installation'],
    author: 'Cesar Garcia, Owner — Garage Goat Garage Doors',
    authorRole: 'TDLR Licensed Garage Door Technician & Owner',
    relatedServiceIds: ['opener-repair', 'installation'],
    relatedBlogIds: ['opener-troubleshoot']
  },
  {
    id: 'insulation',
    slug: 'garage-door-insulation-texas',
    title: 'Garage Door Insulation: Does It Matter in Texas?',
    excerpt: 'With summer heat topping 100\u00B0F, an insulated garage door can make a real difference. Here\'s what to know.',
    content: `
<p>If you live in Cypress, TX or anywhere in the NW Houston area, you already know how brutal summer heat can be. What you may not realize is how much of that heat enters your home through an uninsulated garage door. Here's why insulation matters more in Texas than almost anywhere else — and what your options are.</p>

<h3>How Texas Heat Enters Through Your Garage</h3>
<p>An uninsulated single-layer steel garage door can reach surface temperatures of <strong>140\u00B0F or more</strong> on a sunny Houston afternoon. That heat radiates into your garage, raising ambient temperatures to 120\u00B0F+. If your garage shares a wall with your living space (as most Cypress homes do), that heat transfers into your home and forces your AC to work harder.</p>

<h3>R-Value Explained</h3>
<p>Insulation effectiveness is measured by R-value — the higher the number, the better the insulation. Here's how garage door R-values compare:</p>
<ul>
  <li><strong>Non-insulated (single layer):</strong> R-0 — No thermal protection at all</li>
  <li><strong>Polystyrene insulated:</strong> R-6 to R-9 — Rigid foam panels sandwiched between door layers. Good basic insulation.</li>
  <li><strong>Polyurethane insulated:</strong> R-12 to R-18 — Spray-injected foam that bonds to the door. Superior insulation, adds structural rigidity, and dampens noise.</li>
</ul>

<h3>Benefits Beyond Temperature Control</h3>
<p>Insulated garage doors deliver multiple advantages beyond keeping the heat out:</p>
<ul>
  <li><strong>Energy savings:</strong> Homeowners typically see measurable reductions in cooling costs, especially when the garage shares walls with air-conditioned living space</li>
  <li><strong>Noise reduction:</strong> Insulated doors are significantly quieter during operation — a big deal for bedrooms above the garage</li>
  <li><strong>Door durability:</strong> Polyurethane-insulated doors are structurally stronger and more dent-resistant than single-layer doors</li>
  <li><strong>Protects stored items:</strong> Extreme heat damages paint, tools, sports equipment, and anything else stored in your garage</li>
  <li><strong>Comfortable workspace:</strong> If you use your garage as a workshop, gym, or hobby space, insulation makes it usable more months of the year</li>
</ul>

<h3>Polystyrene vs. Polyurethane</h3>
<p><strong>Polystyrene</strong> (the material in styrofoam coolers) comes in pre-cut panels that fit inside the door sections. It's affordable and provides decent insulation, but can shift over time and doesn't add structural strength.</p>
<p><strong>Polyurethane</strong> is sprayed as a liquid between the door layers and expands to fill every gap. It bonds to the steel, adding rigidity and creating a true thermal barrier. We recommend polyurethane for Texas homes — the performance difference is significant and the cost difference is modest.</p>

<h3>Cost of Upgrading</h3>
<p>When purchasing a new garage door, upgrading from non-insulated to insulated typically adds <strong>$200–$500</strong> to the total cost, depending on door size and insulation type. For the energy savings, noise reduction, and durability benefits you get in the Texas climate, it's one of the best upgrades you can make.</p>

<p>Want to discuss insulation options for your new or replacement door? Call Garage Goat at <strong>(281) 948-5452</strong> for expert advice tailored to your Cypress or NW Houston home.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'October 20, 2025',
    tags: ['installation', 'insulation', 'energy'],
    author: 'Cesar Garcia, Owner — Garage Goat Garage Doors',
    authorRole: 'TDLR Licensed Garage Door Technician & Owner',
    relatedServiceIds: ['installation'],
    relatedBlogIds: ['door-styles', 'new-door-cost']
  },
  {
    id: 'choose-company',
    slug: 'how-to-choose-garage-door-repair-company',
    title: 'How to Choose a Garage Door Repair Company (Without Getting Scammed)',
    excerpt: 'The garage door industry has a bait-and-switch problem. Here\'s how to protect yourself and find an honest company.',
    content: `
<p>The garage door repair industry has a well-earned reputation problem. Bait-and-switch pricing, scare tactics, and unnecessary upsells are far too common. As a TDLR-licensed technician and business owner in Cypress, TX, it bothers me — because it makes honest companies like ours work harder to earn trust. Here's how to protect yourself and find a company you can count on.</p>

<h3>1. Verify the TDLR License</h3>
<p>In Texas, garage door companies are required to be licensed by the Texas Department of Licensing and Regulation (TDLR). Ask for the company's license number and verify it at <strong>tdlr.texas.gov</strong>. An unlicensed company has no accountability and no oversight. If they won't provide a license number, hang up.</p>

<h3>2. Read Real Reviews — Not Just Google</h3>
<p>Google reviews are a good starting point, but savvy scammers know how to game them. Cross-check reviews on multiple platforms:</p>
<ul>
  <li><strong>Nextdoor:</strong> Neighborhood-verified recommendations from real neighbors</li>
  <li><strong>Angi (formerly Angie's List):</strong> Verified purchase reviews</li>
  <li><strong>BBB (Better Business Bureau):</strong> Check for complaint history</li>
  <li><strong>Facebook:</strong> Look for authentic customer interactions</li>
</ul>
<p>Look for detailed reviews that mention specific technician names, describe the work done, and feel authentic. Generic "Great service!" reviews with no details are often fake.</p>

<h3>3. Get a Written Estimate Before Work Begins</h3>
<p>A reputable company will diagnose the problem, explain your options, and give you a written estimate — <strong>before touching a single bolt</strong>. If a technician starts working before you've approved a price, that's a major red flag.</p>

<h3>4. Beware the "$29 Service Call"</h3>
<p>This is the garage door industry's most common scam. A company advertises a $29 (or even $19) service call, then shows up and quotes inflated prices — sometimes 3–4x the going rate. They're counting on the urgency of your situation to pressure you into paying. A legitimate company offers <strong>free estimates</strong> with no obligation.</p>

<h3>5. Ask About Warranties</h3>
<p>A company that stands behind its work offers clear, written warranties on both parts and labor. Ask specifically: What's covered? For how long? What's excluded? Get it in writing. Companies that dodge warranty questions are telling you everything you need to know.</p>

<h3>6. Choose Local Over National Chains</h3>
<p>National franchise operations often subcontract to the lowest bidder and have high technician turnover. A locally owned company has a reputation to protect in the community. The owner is often the one doing the work — or directly supervises the technicians. In Cypress and NW Houston, local companies are invested in repeat business and referrals.</p>

<h3>7. Verify Insurance</h3>
<p>Ask for proof of general liability insurance and workers' compensation coverage. If a technician is injured on your property and the company doesn't carry insurance, you could be liable.</p>

<h3>The Garage Goat Approach</h3>
<p>We built Garage Goat on the opposite of everything described above. We're owner-operated (I'm often the one at your door), TDLR licensed (#GDC-7742), fully insured, and we offer free estimates with no hidden fees. Our 287+ five-star reviews are from real Cypress-area homeowners. Call <strong>(281) 948-5452</strong> to experience the difference.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'October 5, 2025',
    tags: ['advice', 'trust', 'industry'],
    author: 'Cesar Garcia, Owner — Garage Goat Garage Doors',
    authorRole: 'TDLR Licensed Garage Door Technician & Owner',
    relatedServiceIds: ['repair', 'emergency'],
    relatedBlogIds: ['cost-guide']
  },
  {
    id: 'hurricane-prep',
    slug: 'hurricane-garage-door-prep-cypress-tx',
    title: 'Hurricane Season & Your Garage Door: Prep Guide for Cypress Homeowners',
    excerpt: 'Your garage door is your home\'s most vulnerable entry point during a hurricane. Here\'s how to protect it.',
    content: `
<p>Hurricane season runs from June through November, and if you live in Cypress, TX or anywhere in the NW Houston corridor, your garage door deserves special attention in your storm prep. It's the largest opening in your home — and the most vulnerable point during high winds. Here's what every homeowner needs to know.</p>

<h3>Why the Garage Door Is the Weak Point</h3>
<p>Your garage door is the single largest opening in your home's envelope. During a hurricane, when wind enters through a failed garage door, internal pressure builds rapidly and can blow out windows, lift the roof, and cause catastrophic structural damage. FEMA data shows that garage door failure is one of the leading causes of residential wind damage during hurricanes in the Gulf Coast region.</p>

<h3>Wind-Rated Doors Explained</h3>
<p>Wind-rated (or hurricane-rated) garage doors are engineered to withstand specific wind speeds. In the Cypress area, look for doors rated for:</p>
<ul>
  <li><strong>Wind load rating:</strong> Minimum 110 mph for our area; 130+ mph recommended</li>
  <li><strong>Impact resistance:</strong> Tested against windborne debris (the real danger)</li>
  <li><strong>Miami-Dade certification:</strong> The gold standard for hurricane garage doors — not required in our area but the highest level of protection available</li>
</ul>
<p>If your home was built before current wind codes, your existing door may not meet modern standards. A professional inspection can tell you where you stand.</p>

<h3>Bracing Kits for Existing Doors</h3>
<p>If replacing your door isn't in the budget, a <strong>hurricane bracing kit</strong> can significantly improve your current door's wind resistance. These kits typically include:</p>
<ul>
  <li>Vertical reinforcement bars that attach to each panel section</li>
  <li>Horizontal braces that span the door width</li>
  <li>Heavy-duty mounting hardware</li>
</ul>
<p>Bracing kits cost $200–$600 depending on door size and can be installed by a professional in a few hours. They're an effective interim solution until you're ready for a full wind-rated door.</p>

<h3>Pre-Storm Checklist</h3>
<p>When a hurricane watch or warning is issued for the Cypress area:</p>
<ul>
  <li><strong>Inspect your door:</strong> Check for loose hardware, damaged panels, and worn weatherstripping</li>
  <li><strong>Install bracing:</strong> If you have a bracing kit, install it according to manufacturer instructions</li>
  <li><strong>Disconnect the opener:</strong> Pull the emergency release so the door can be manually secured</li>
  <li><strong>Lock the door:</strong> Engage the manual lock to prevent the door from being pushed inward by wind</li>
  <li><strong>Clear the garage:</strong> Move vehicles and valuables to an interior room if possible</li>
</ul>

<h3>Insurance Considerations</h3>
<p>Some homeowner's insurance policies offer discounts for wind-rated garage doors or hurricane bracing. Check with your insurance provider — the savings can offset a significant portion of the upgrade cost. Additionally, if your door sustains storm damage, having a pre-storm photo on file speeds up the claims process.</p>

<h3>Post-Storm Inspection</h3>
<p>After any significant storm, inspect your garage door before operating it. Look for dents, bends, shifted tracks, and damaged springs. If the door appears damaged, <strong>don't try to open it</strong> — the tracks and springs may be compromised. Call a professional for a safety inspection.</p>

<p>Garage Goat helps Cypress and NW Houston homeowners prepare for hurricane season with wind-rated door installations, bracing kits, and pre-storm inspections. Call <strong>(281) 948-5452</strong> to get your garage hurricane-ready before the next storm.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1509803874385-db7c23652552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'September 20, 2025',
    tags: ['safety', 'hurricane', 'cypress', 'seasonal'],
    author: 'Cesar Garcia, Owner — Garage Goat Garage Doors',
    authorRole: 'TDLR Licensed Garage Door Technician & Owner',
    relatedServiceIds: ['repair', 'installation'],
    relatedBlogIds: ['safety-checklist']
  }
];

// --- Cross-Reference Helpers ---
// These helpers make it easy to look up related content from any entity.

export function getRelatedServices(ids: string[]): Service[] {
  return ids.map(id => services.find(s => s.id === id)).filter(Boolean) as Service[];
}

export function getRelatedBlogPosts(ids: string[]): BlogPost[] {
  return ids.map(id => blogPosts.find(b => b.id === id)).filter(Boolean) as BlogPost[];
}

export function getRelatedOffers(ids: string[]): Offer[] {
  return ids.map(id => offers.find(o => o.id === id)).filter(Boolean) as Offer[];
}

export function getRelatedAreas(serviceId: string): ServiceArea[] {
  return serviceAreas.filter(a => a.relatedServiceIds.includes(serviceId));
}

/** Given any content type, get all cross-references for it */
export function getCrossReferences(type: 'service' | 'area' | 'blog' | 'offer', id: string) {
  switch (type) {
    case 'service': {
      const item = services.find(s => s.id === id);
      if (!item) return null;
      return {
        services: getRelatedServices(item.relatedServiceIds),
        blogs: getRelatedBlogPosts(item.relatedBlogIds),
        offers: getRelatedOffers(item.relatedOfferIds),
        areas: getRelatedAreas(id),
      };
    }
    case 'area': {
      const item = serviceAreas.find(a => a.id === id);
      if (!item) return null;
      return {
        services: getRelatedServices(item.relatedServiceIds),
        blogs: getRelatedBlogPosts(item.relatedBlogIds),
        offers: getRelatedOffers(item.relatedOfferIds),
        areas: serviceAreas.filter(a => a.id !== id),
      };
    }
    case 'blog': {
      const item = blogPosts.find(b => b.id === id);
      if (!item) return null;
      return {
        services: getRelatedServices(item.relatedServiceIds),
        blogs: getRelatedBlogPosts(item.relatedBlogIds),
        offers: offers.slice(0, 2),
        areas: serviceAreas.slice(0, 3),
      };
    }
    case 'offer': {
      const item = offers.find(o => o.id === id);
      if (!item) return null;
      return {
        services: getRelatedServices(item.relatedServiceIds),
        blogs: blogPosts.slice(0, 2),
        offers: offers.filter(o => o.id !== id),
        areas: serviceAreas.slice(0, 3),
      };
    }
  }
}