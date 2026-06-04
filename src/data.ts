import { Project, Service, BeforeAfterItem, Testimonial, TimelineStep, FaqItem, GalleryItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'The Travertine Pavilion',
    category: 'Villas',
    categoryLabel: 'Luxury Villa',
    location: 'Amalfi Coast, Italy',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1500&q=85',
    size: '8,200 sq. ft.',
    year: '2025',
    description: 'A structural celebration of light, shadow, and Italian split-face travertine. Designed with high-ceiling glass walls, floating ceiling features, and warm custom monolithic stone surfaces.',
    highlights: ['Bespoke travertine monoliths', 'Rimadesio flush doors', 'Integrated warm floor lighting', 'Minotti bespoke seating']
  },
  {
    id: 'project-2',
    title: 'The Calacatta Penthouse',
    category: 'Luxury Apartments',
    categoryLabel: 'Luxury Apartment',
    location: 'Belvedere Heights',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    size: '4,500 sq. ft.',
    year: '2026',
    description: 'An executive penthouse featuring bookmatched premium Calacatta marble, hand-selected warm fluted European oak paneling, and curated art light fixtures.',
    highlights: ['Bookmatched Calacatta marble bar', 'Lualdi sliding partitions', 'Custom hidden master dressing suite', 'Lutron intelligent automation']
  },
  {
    id: 'project-3',
    title: 'Culinary Couture Residence',
    category: 'Modular Kitchens',
    categoryLabel: 'Modular Kitchen',
    location: 'Vasant Vihar, New Delhi',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    size: '600 sq. ft.',
    year: '2025',
    description: 'A chef-grade luxury modular kitchen featuring brushed champagne gold hardware, dark anthracite matte-lacquered cabinetry, integrated Gaggenau appliances, and a fluid quartzite island.',
    highlights: ['Gaggenau 400 Series appliances', 'Salvatori stone countertop', 'Stealth pocket-door pantry', 'Custom-milled walnut drawers']
  },
  {
    id: 'project-4',
    title: 'Sanctuary Master Suite',
    category: 'Modular Kitchens', // Wait, category matching options: 'Luxury Apartments', 'Villas', 'Builder Floors', 'Modular Kitchens', 'Renovations', 'Commercial Spaces'
    categoryLabel: 'Master Bedroom',
    location: 'Jubilee Hills, Hyderabad',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=85',
    size: '1,200 sq. ft.',
    year: '2025',
    description: 'A bespoke sanctuary master suite engineered for absolute rest, with sand-textured plaster walls, floating linen canopy bed, and a dramatic back-lit slab of transparent alabaster.',
    highlights: ['Acoustic fabric paneled walls', 'Transparent alabaster accent wall', 'Poltrona Frau bespoke lounger', 'Curated silk-wool hand-woven rugs']
  },
  {
    id: 'project-5',
    title: 'Aura SPA & Bath Suite',
    category: 'Renovations',
    categoryLabel: 'Luxury Bathroom',
    location: 'South Kensington, London',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=85',
    size: '450 sq. ft.',
    year: '2026',
    description: 'A high-end private wellness bathroom detailed with dark slate monoliths, a solid freestanding carved-stone soak tub, and smart Dornbracht smart-sensory rainfall system.',
    highlights: ['Solid-carved marble sink basin', 'Floating black slate vanity', 'Dornbracht sensory smart shower', 'Aromatherapy integrated steam room']
  },
  {
    id: 'project-6',
    title: 'The Obsidian Director\'s Lounge',
    category: 'Commercial Spaces',
    categoryLabel: 'Commercial space',
    location: 'Financial District',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    size: '3,800 sq. ft.',
    year: '2025',
    description: 'A dramatic executive workspace detailed in matte black wood, structural steel, smoked-mirrored surfaces, and warm ambient led strips for high-profile investors.',
    highlights: ['Smoked-mirror ceiling panels', 'Custom matte-black conference table', 'Seamless acoustic glass walls', 'Bowers & Wilkins integrated sound']
  }
];

export const SERVICES: Service[] = [
  {
    id: 'service-1',
    title: 'Luxury Interior Design',
    description: 'Turnkey architectural interior solutions designed with custom bespoke finishes and curated layout proportions.',
    iconName: 'Compass',
    details: ['Bespoke millwork blueprints', 'Detailed material selection guides', 'Curated designer furniture sourcing', 'Bespoke lighting consultations']
  },
  {
    id: 'service-2',
    title: 'Modular Kitchen Design',
    description: 'High-end culinary centers with high-grade German hardware, stone countertops, and smart integrated pantry systems.',
    iconName: 'ChefHat',
    details: ['Premium Blum/Hettich active runners', 'Quartzite or Calacatta island features', 'Integrated stealth appliance cavities', 'Custom waste management setups']
  },
  {
    id: 'service-3',
    title: 'Bedroom Design',
    description: 'Sanctuaries engineered with sound dampening fabrics, architectural headboards, and circadian-rhythm ambient lighting.',
    iconName: 'BedDouble',
    details: ['Bespoke fluted fabric panels', 'Circadian smart lighting loops', 'Concealed automated projection rigs', 'Custom walkthrough robe designs']
  },
  {
    id: 'service-4',
    title: 'Living Room Design',
    description: 'Grand reception spaces utilizing architectural volumes, solid travertine feature walls, and balanced conversation lounge circles.',
    iconName: 'Sofa',
    details: ['Monolithic stone hearth design', 'Floating structural drop ceilings', 'Statement acoustics & wall art', 'Flexible custom lounge layouts']
  },
  {
    id: 'service-5',
    title: 'Lighting Design',
    description: 'Expert structural and decorative luminaire layout planning to paint architecture with warm, soft indirect glare-free luxury layers.',
    iconName: 'Sparkles',
    details: ['Recessed low-glare deep baffle lamps', 'Circadian dim-to-warm system plans', 'Bespoke accent highlighting designs', 'Curated decorative statement specs']
  },
  {
    id: 'service-6',
    title: '3D Visualization & VR',
    description: 'Ultra-photorealistic cinematic CAD renders and fully walk-through VR mockups before a single material is cut.',
    iconName: 'Layers',
    details: ['Ultra-res 8k static rendering frames', 'Walkable immersive VR panoramas', 'Accurate natural-lighting simulations', 'True-to-texture material maps']
  },
  {
    id: 'service-7',
    title: 'Space Planning',
    description: 'Detailed analysis of flow, natural light, and structural dimensions to maximize functional elegance and views.',
    iconName: 'Maximize',
    details: ['Precise ergonomic flow mapping', 'Sun-path optimization studies', 'Multiple furniture layout options', 'Partition and partition-free drafts']
  },
  {
    id: 'service-8',
    title: 'Renovation & Retrofitting',
    description: 'Bespoke structural remodeling to breathe modern elite architecture into existing real estate shells seamlessly.',
    iconName: 'Hammer',
    details: ['Structural analysis & retrofitting', 'Complete MEP overhaul management', 'Premium sub-floor stone leveling', 'High-accuracy joinery updates']
  },
  {
    id: 'service-9',
    title: 'Project Management',
    description: 'Rigorous end-to-end execution of design, timelines, craftsmanship audits, and coordination of elite artisans.',
    iconName: 'UserCheck',
    details: ['Strict weekly site audits', 'Direct artisan/engineer coordination', 'Milestone budget and invoice tracking', 'Final hand-over physical styling']
  }
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: 'ba-1',
    title: 'The Great Room Evolution',
    description: 'A transformation of a cold, raw concrete carcass into a warm minimalist masterpiece enveloped in Italian limestone and custom lighting.',
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1500&q=80',
    afterImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1500&q=80',
    beforeLabel: 'Concrete Shell Phase',
    afterLabel: 'Completed Living Lounge'
  },
  {
    id: 'ba-2',
    title: 'Kitchen Hearth Remodel',
    description: 'From a standard, dark, boxy developer pantry to an open-plan culinary luxury suite built with monolithic quartzite islands and wood warmth.',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1500&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=80',
    beforeLabel: 'Developer Layout',
    afterLabel: 'Epicurean quartzite suite'
  }
];

export const CLIENT_TIMELINE: TimelineStep[] = [
  {
    step: 'Phase I',
    title: 'Discovery Consultation',
    subtitle: 'Defining Vision & Intent',
    description: 'An elite sit-down meeting over espresso or champagne where we explore your sensory goals, material memories, lifestyle demands, and target timeline boundaries.',
    duration: 'Week 1'
  },
  {
    step: 'Phase II',
    title: 'Concept Development',
    subtitle: 'Layouts, Tone & Architecture',
    description: 'Our design director drafts layout blueprints, material composition trays, and structural volumes establishing the spatial rhythm and core concept sketches.',
    duration: 'Week 2 - 4'
  },
  {
    step: 'Phase III',
    title: '3D Design Presentation',
    subtitle: 'Photorealistic VR Walkthroughs',
    description: 'Experience your spaces in photorealistic 8K virtual rendering. Walk through rooms, observe sunlight reflections on real-stone marble, and approve details.',
    duration: 'Week 5 - 7'
  },
  {
    step: 'Phase IV',
    title: 'Material Selection',
    subtitle: 'Exclusive Quarry & Gallery Tours',
    description: 'A curated journey to top quarries and timber galleries to personally tag your marble blocks, hand-select unique wood grains, and approve Italian fabrics.',
    duration: 'Week 8'
  },
  {
    step: 'Phase V',
    title: 'Execution & Craftsmanship',
    subtitle: 'turnkey Site Construction Management',
    description: 'Our certified engineers and bespoke joiners begin construction. We inspect every wall angle, joint alignment, and custom cabinetry seam with direct daily oversight.',
    duration: 'Weeks 12 - 24'
  },
  {
    step: 'Phase VI',
    title: 'Final Styling / Reveal',
    subtitle: 'The Curated Grand Showcase Handover',
    description: 'We layer art, select limited-run accessories, fluff fine linen, and calibrate custom scent diffusers to hand over a pristine, masterfully finished, editorial home.',
    duration: 'Week 25+'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Eleanor Sterling',
    role: 'Luxury Property Investor',
    location: 'Mayfair, London',
    quote: 'The team treated our Amalfi Coast villa not as a construction project, but as a museum canvas. Their restraint in using luxury materials, leaving spaces breathing, is why their work is superior.',
    rating: 5
  },
  {
    id: 't-2',
    name: 'Vikram Malhotra',
    role: 'Founder & Tech Entrepreneur',
    location: 'Jubilee Hills, Hyderabad',
    quote: 'They deliver on the promise of quiet luxury. No flashy, over-decorated elements—just structural beauty, exquisite marble joinery, and an impeccable lighting schematic that makes my home feel incredibly calming.',
    rating: 5
  },
  {
    id: 't-3',
    name: 'Marcelle DuPont',
    role: 'Luxury Hotelier',
    location: 'Amagansett, NY',
    quote: 'Rarely do you find an interior studio with this level of structural detail and timeline compliance. Their 3D walkthroughs matched the completed project down to the exact vein of Calacatta stone.',
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do you charge for luxury turnkey interior design services?',
    answer: 'We operate on a transparent hybrid fee structure consisting of a design retainer (for layout blueprints, material boards, and 3D VR renders) and an execution percentage or cost-per-square-foot baseline for full site management. Our initial consultation provides a comprehensive itemized scope so there are never any unexpected charges.',
    category: 'Process'
  },
  {
    id: 'faq-2',
    question: 'Where do you source your marbles, wood veneers, and custom furniture?',
    answer: 'We form direct agreements with premium marble quarries in Carrara and Verona, wood millwrights in Bavaria, and elite modern design ateliers in Milan. For bespoke items, our team designs detail blueprints that are hand-built by local Master Artisans to guarantee absolute limited-edition luxury.',
    category: 'Materials'
  },
  {
    id: 'faq-3',
    question: 'Can you coordinate with our existing site architects or general contractors?',
    answer: 'Absolutely. We regularly consult with architects, structural engineers, and client-appointed contractors. We provide full millwork specifications, MEP layout overlays, and joinery drawings to ensure our luxury interior vision integrates smoothly with the main masonry shell.',
    category: 'Collaboration'
  },
  {
    id: 'faq-4',
    question: 'What is the average timeline for an ultra-luxury residence design?',
    answer: 'A high-end residential project (e.g., a 6,000 sq. ft. villa) averages 24 to 32 weeks from initial vision discovery to physical key reveal. The design phase takes roughly 6 to 8 weeks, with the remaining time dedicated to custom millwork fabrication, quarrying, importing, and meticulous on-site construction styling.',
    category: 'Timeline'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80',
    caption: 'Curated travertine custom circular seating',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'g-2',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    caption: 'Modern raw concrete geometry & warm glass',
    aspect: 'aspect-square'
  },
  {
    id: 'g-3',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    caption: 'Custom fluted wardrobe with luxury watch drawer',
    aspect: 'aspect-[4/5]'
  },
  {
    id: 'g-4',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=80',
    caption: 'Bespoke minimal foyer with warm natural shadows',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'g-5',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',
    caption: 'Architectural freestanding bath carved of raw monolithic stone',
    aspect: 'aspect-square'
  },
  {
    id: 'g-6',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80',
    caption: 'Hand-selecting active Calacatta gold veins',
    aspect: 'aspect-[4/5]'
  }
];
