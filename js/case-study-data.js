/**
 * Complete Project Dataset for Enoch's 10 Selected Projects
 * Extracted directly from "Selected Projects cv.docx"
 * Showcase images use the non-hero files from Desktop/Portfolio/Images
 */

const PROJECTS_DATA = {
  'ewamaka': {
    id: 'ewamaka',
    name: 'Ewamaka',
    tagline: 'Building a Recognizable Jewelry Brand for Social Commerce',
    introNote: 'brand design & identity',
    category: 'Brand Design & Identity',
    client: 'Women-focused jewelry brand built around self-expression, beauty, and personal style.',
    heroImage: 'assets/images/ewamaka hero.jpg',
    showcaseImage: 'assets/images/ewamaka.png',
    stat1: '10×',
    stat1Label: 'Social Following Growth',
    stat2: '100%',
    stat2Label: 'Cohesive Visual Identity',
    stat3: 'Brand',
    stat3Label: 'High-Velocity Social Commerce',
    quote: '"By tying the brand system directly to the meaning of ‘Wear Your Beauty’, we created an identity that turned casual browsers into passionate brand advocates."',
    challenge: 'Ewamaka needed a visual identity that could communicate femininity and confidence while giving its social media presence a recognizable look that could consistently showcase its products.',
    approach: 'Built the identity around the meaning behind the name, “Wear Your Beauty,” combining an elegant visual direction with a flexible social media system designed for product-led content.',
    solution: [
      'Complete logo and brand identity system',
      'Defined typography, colors, and visual guidelines',
      'Developed social media design templates',
      'Created product-focused promotional visuals',
      'Established a consistent visual language for online communication'
    ],
    outcome: [
      'Created a recognizable identity across social platforms',
      'Made product communication more consistent and visually engaging',
      'Helped the brand build a stronger social presence',
      'Grew the existing social following by approximately 10× through the new visual direction'
    ],
    tags: ['Brand Identity', 'Jewelry & Fashion', 'Social Commerce', 'Visual Guidelines']
  },
  'adehomes': {
    id: 'adehomes',
    name: 'Adehomes',
    tagline: 'Creating a Trusted Identity for a Modern Shortlet Brand',
    introNote: 'hospitality branding',
    category: 'Brand Design & Identity',
    client: 'Shortlet and staycation brand offering accommodation and curated stays.',
    heroImage: 'assets/images/adehomes hero.PNG',
    showcaseImage: 'assets/images/adehomes.png',
    stat1: 'High',
    stat1Label: 'Elevated Perceived Guest Trust',
    stat2: '100%',
    stat2Label: 'Cross-Touchpoint Consistency',
    stat3: 'Direct',
    stat3Label: 'Increased Booking Conversion',
    quote: '"Trust is everything in shortlet hospitality. The visual identity had to make guests feel at home and confident before they ever stepped through the door."',
    challenge: 'A growing shortlet business needed a recognizable identity that could stand out online, build trust with potential guests, and create a more consistent experience across its marketing touchpoints.',
    approach: 'Developed the brand around a clear, approachable visual direction suited to modern travelers, focusing on consistency, recognition, and trust across digital platforms.',
    solution: [
      'Complete brand identity and logo design',
      'Defined typography, color palette, and visual direction',
      'Designed a consistent system for digital and social media use',
      'Created visual assets for promotional touchpoints',
      'Built a flexible identity that could scale across the business'
    ],
    outcome: [
      'Created a more distinctive and recognizable online presence',
      'Improved consistency across brand communications',
      'Helped elevate perceived customer trust',
      'Supported increased visibility and sales through a stronger brand presentation'
    ],
    tags: ['Brand Identity', 'Modern Shortlet', 'Hospitality UX', 'Trust & Consistency']
  },
  'the-source-collective': {
    id: 'the-source-collective',
    name: 'The Source Collective',
    tagline: 'Building a Luxury Brand from Strategy to Identity',
    introNote: 'luxury brand strategy',
    category: 'Brand Design & Identity',
    client: 'Luxury personal shopping service targeting high-net-worth individuals and busy executives.',
    heroImage: 'assets/images/the source collective hero.PNG',
    showcaseImage: 'assets/images/the source collective.PNG',
    stat1: '1st',
    stat1Label: 'Paying Client Secured',
    stat2: '100%',
    stat2Label: 'Consistent Luxury Guidelines',
    stat3: 'Scale',
    stat3Label: 'Product Manufacturing Foundation',
    quote: '"To win high-net-worth clients, the brand identity must whisper authority, discretion, and effortless precision from the very first impression."',
    challenge: 'The business had a strong concept but no established identity, visual system, or clearly defined positioning to communicate its premium service or support early customer and investor conversations.',
    approach: 'Started from the audience rather than the visuals. Conducted buyer-persona and competitor research to understand the expectations of a luxury audience before developing the brand\'s positioning and visual language.',
    solution: [
      'Refined logo design',
      'Complete luxury brand identity system',
      'Defined brand guidelines and visual standards',
      'Developed marketing and social media assets',
      'Created supporting brand documents for consistent communication',
      'Built the visual system around premium, trustworthy, and service-led positioning'
    ],
    outcome: [
      'Helped secure the brand\'s first paying client',
      'Gave the business a professional foundation for online presentation',
      'Supported its transition toward product manufacturing',
      'Created a scalable identity that could grow with the business'
    ],
    tags: ['Luxury Strategy', 'Brand Guidelines', 'Client: HNWIs', 'Identity System']
  },
  'visionpro': {
    id: 'visionpro',
    name: 'VisionPro',
    tagline: 'Designing a Futuristic Interface for Smart Glasses',
    introNote: 'wearable ui & interaction',
    category: 'UI Design',
    client: 'Concept for a smart-glasses technology product.',
    heroImage: 'assets/images/Visionpro hero.png',
    showcaseImage: 'assets/images/Visionpro website.png',
    stat1: 'Zero',
    stat1Label: 'Cognitive Clutter',
    stat2: 'HUD',
    stat2Label: 'Glanceable UI Hierarchy',
    stat3: 'Real-time',
    stat3Label: 'Wearable Context Engine',
    quote: '"Wearable HUD displays must present high-value context in split seconds without distracting from real-world vision."',
    challenge: 'Smart-glasses interfaces require information to feel immediate and accessible without overwhelming the user. The product needed a futuristic interface that still felt practical and easy to understand.',
    approach: 'Explored a technology-led interface direction using clear information hierarchy, minimal visual noise, and futuristic interaction patterns.',
    solution: [
      'Designed the core smart-glasses interface',
      'Created futuristic navigation and interaction patterns',
      'Established a clean visual hierarchy for real-time information',
      'Designed interface elements around quick recognition and accessibility',
      'Developed a cohesive UI system for the product experience'
    ],
    outcome: [
      'Created a futuristic interface aligned with emerging wearable technology',
      'Demonstrated how complex product information could be presented simply',
      'Established a consistent visual language for the smart-glasses concept'
    ],
    tags: ['UI Design', 'Wearable Tech', 'Smart Glasses HUD', 'Interaction Patterns']
  },
  'positivus': {
    id: 'positivus',
    name: 'Positivus',
    tagline: 'Making a Complex Marketing Service Easier to Understand',
    introNote: 'ui & information architecture',
    category: 'UI Design',
    client: 'Digital marketing services brand offering multiple marketing solutions.',
    heroImage: 'assets/images/Positivus hero.png',
    showcaseImage: 'assets/images/Positivus website.png',
    stat1: 'Streamlined',
    stat1Label: 'Content Architecture',
    stat2: 'Direct',
    stat2Label: 'Clear Conversion Path',
    stat3: '100%',
    stat3Label: 'Systematic UI Components',
    quote: '"When content hierarchy is crystal clear, prospective clients can evaluate multi-tiered services in seconds and take confident hiring actions."',
    challenge: 'The business had a wide range of information and services that needed to be communicated without making the website feel overwhelming or difficult to navigate.',
    approach: 'Focused on information hierarchy and content readability, organizing the interface around the questions a potential client would need answered before choosing a marketing service.',
    solution: [
      'Designed the website interface and page structure',
      'Organized extensive content into clear sections',
      'Created service-focused information architecture',
      'Developed readable typography and content hierarchy',
      'Designed calls-to-action around key conversion points',
      'Created a consistent UI system across the website'
    ],
    outcome: [
      'Made a content-heavy service offering easier to understand',
      'Improved the visual hierarchy of key information',
      'Created a clearer path from discovering a service to taking action',
      'Established a professional digital experience for the brand'
    ],
    tags: ['UI Architecture', 'Digital Marketing', 'Conversion UX', 'Content Hierarchy']
  },
  'dr-pepper': {
    id: 'dr-pepper',
    name: 'Dr Pepper',
    tagline: 'Designing a Digital Experience Around Products, Stores & Content',
    introNote: 'consumer brand experience',
    category: 'UI Design',
    client: 'Consumer beverage brand requiring a digital product and content experience.',
    heroImage: 'assets/images/Dr Pepper hero.png',
    showcaseImage: 'assets/images/Dr Pepper Website.png',
    stat1: 'Unified',
    stat1Label: '3 Primary User Journeys',
    stat2: 'Store',
    stat2Label: 'Interactive Locator Map',
    stat3: 'Cohesive',
    stat3Label: 'Modular UI Component System',
    quote: '"Bridging digital storytelling with retail store locating creates a fluid experience from craving to purchase."',
    challenge: 'The interface needed to serve different user intentions at once — discovering products, finding where to purchase them, and exploring brand content.',
    approach: 'Designed the experience around three primary user journeys: product discovery, store finding, and content exploration.',
    solution: [
      'Designed product browsing interfaces',
      'Created product detail layouts',
      'Designed store locator experience',
      'Developed blog and editorial sections',
      'Structured navigation around different customer needs',
      'Created reusable UI components for consistency'
    ],
    outcome: [
      'Connected product discovery with purchase-location information',
      'Created a more structured experience for brand content',
      'Made multiple sections of the digital experience feel like one cohesive product'
    ],
    tags: ['Product Discovery', 'Store Locator', 'Design System', 'Consumer Brand']
  },
  'digisafes': {
    id: 'digisafes',
    name: 'DigiSafes',
    tagline: 'Turning a Crypto Product into a Trust-Building Lead Generation Experience',
    introNote: 'web3 & lead gen website',
    category: 'Website Design',
    client: 'Crypto-focused digital product requiring a website to explain its offering and generate potential customer leads.',
    heroImage: 'assets/images/Digisafes hero.png',
    showcaseImage: 'assets/images/Digisafes.png',
    stat1: 'Credible',
    stat1Label: 'Demystified Web3 Security',
    stat2: 'Active',
    stat2Label: 'Measurable Inbound Lead Tracking',
    stat3: 'Flow',
    stat3Label: 'Educational Conversion Funnel',
    quote: '"In crypto, users will not convert without absolute clarity and trust. Our storytelling transformed skepticism into qualified signups."',
    challenge: 'Crypto products can be difficult for new users to understand and trust. DigiSafes needed a website that could communicate the product clearly while making the brand feel credible enough for visitors to engage.',
    approach: 'Combined product education, brand storytelling, and conversion-focused content to create a website that could take visitors from understanding the product to becoming potential leads.',
    solution: [
      'Designed the complete website experience',
      'Developed supporting brand visuals',
      'Created clear product explanations and content hierarchy',
      'Designed engaging visual sections around the product',
      'Built lead-generation touchpoints throughout the experience',
      'Created a consistent visual language across the website'
    ],
    outcome: [
      'Improved awareness and understanding of the product',
      'Created a more credible digital presence for the crypto brand',
      'Generated and tracked leads through the website',
      'Used content and visual storytelling to support conversion'
    ],
    tags: ['Web3 & Crypto', 'Lead Generation', 'Conversion Strategy', 'Visual Storytelling']
  },
  'huge': {
    id: 'huge',
    name: 'Huge',
    tagline: 'Rebuilding an Ecommerce Experience Around the Brand',
    introNote: 'ecommerce ux & redesign',
    category: 'Website Design',
    client: 'Skincare brand selling beauty and skincare products online.',
    heroImage: 'assets/images/Huge hero.png',
    showcaseImage: 'assets/images/Huge.png',
    stat1: '+Time',
    stat1Label: 'Longer Visitor Browsing Sessions',
    stat2: '100%',
    stat2Label: 'Authentic Brand Perception',
    stat3: 'Mobile',
    stat3Label: 'Optimized Discovery & Checkout',
    quote: '"Ecommerce shouldn\'t feel like an impersonal catalog. We rebuilt the store around sensory storytelling and intuitive product discovery."',
    challenge: 'The existing website needed a stronger connection to the brand and a more intuitive shopping experience. The homepage, navigation, and overall presentation needed to feel more intentional to both the brand and its customers.',
    approach: 'Reworked the experience around the customer\'s journey — discovering the brand, understanding products, navigating the store, and exploring content — while bringing the website closer to the brand\'s visual personality.',
    solution: [
      'Redesigned the homepage',
      'Reworked website navigation and information architecture',
      'Improved product presentation',
      'Created a stronger visual connection between the brand and website',
      'Refined content hierarchy and page layouts',
      'Designed the experience around longer, more engaging browsing sessions'
    ],
    outcome: [
      'Client felt the redesigned website represented the brand more authentically',
      'Created a more cohesive experience between brand and ecommerce store',
      'Customers spent more time exploring the website based on traffic data shared by the client',
      'Improved the overall experience of discovering and browsing products'
    ],
    tags: ['Ecommerce UX', 'Skincare Brand', 'Store Navigation', 'Product Discovery']
  },
  'escape': {
    id: 'escape',
    name: 'Escape',
    tagline: 'Turning Travel Data into a Scalable Destination Experience',
    introNote: 'travel platform architecture',
    category: 'Website Design',
    client: 'Travel and destination brand helping customers discover and explore travel locations.',
    heroImage: 'assets/images/Escape hero.png',
    showcaseImage: 'assets/images/Escape.png',
    stat1: 'Scale',
    stat1Label: 'Structured Spreadsheet Integration',
    stat2: '+SEO',
    stat2Label: 'Higher Search Engine Visibility',
    stat3: 'Dynamic',
    stat3Label: 'Destination Discovery Filtering',
    quote: '"We engineered a system that transformed raw spreadsheet data into a lively, interactive travel portal built to scale effortlessly."',
    challenge: 'The business had a large amount of destination information that needed to be presented in a way that was easy for customers to browse while remaining manageable as the number of destinations grew.',
    approach: 'Designed the website around structured destination discovery and created a system that could turn spreadsheet-based information into organized website content.',
    solution: [
      'Designed the website from scratch',
      'Created destination discovery and information pages',
      'Translated Excel-based destination data into structured web content',
      'Developed a scalable content structure for multiple destinations',
      'Designed navigation around travel discovery',
      'Applied SEO-focused page structures and content hierarchy'
    ],
    outcome: [
      'Gave the brand a dedicated digital home for customers to discover its services',
      'Created a scalable system for managing destination information',
      'Improved the presentation and organization of travel content',
      'Increased search visibility through improved SEO implementation',
      'Helped the brand establish a more credible and polished digital presence'
    ],
    tags: ['Travel & Discovery', 'Data Architecture', 'SEO Optimization', 'Scalable System']
  },
  'dexo': {
    id: 'dexo',
    name: 'Dexo',
    tagline: 'Bringing a Creative Agency\'s Vision to Life Through Brand & Web',
    introNote: 'agency brand & flagship web',
    category: 'Website Design & Brand Identity',
    client: 'Design and development agency looking to establish a stronger identity and digital presence.',
    heroImage: 'assets/images/Dexo hero.PNG',
    showcaseImage: 'assets/images/Dexo.png',
    stat1: '100%',
    stat1Label: 'Bespoke Brand Identity System',
    stat2: 'Studio',
    stat2Label: 'High-Converting Agency Website',
    stat3: 'Launch',
    stat3Label: 'Authoritative Market Positioning',
    quote: '"Starting with an agency from day zero means aligning their ambitious vision directly with a tangible, unmistakable visual footprint."',
    challenge: 'The agency was starting without a complete visual identity or website that could communicate the quality and direction of its work.',
    approach: 'Built the brand from the ground up, translating the agency\'s vision into a cohesive identity and website that could position it as a modern creative and technology-focused studio.',
    solution: [
      'Designed the logo from scratch',
      'Developed the complete brand identity',
      'Defined typography, colors, and visual direction',
      'Designed the agency website',
      'Created a visual system for presenting services and capabilities',
      'Connected the brand identity and website into one cohesive experience'
    ],
    outcome: [
      'Gave the agency a complete visual identity from the ground up',
      'Created a sleek website that better represented the company\'s capabilities',
      'Turned the client\'s vision into a tangible digital experience',
      'Established a stronger foundation for presenting the agency to prospective clients'
    ],
    tags: ['Brand Identity', 'Agency Website', 'Custom Logo Mark', 'Creative Direction']
  }
};

const PROJECT_KEYS = Object.keys(PROJECTS_DATA);
