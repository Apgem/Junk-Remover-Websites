// Authentic Blackstone Junk Removal photography representations and image registry
// Configured to load the real Blackstone images provided by the owner

export interface AuthenticPhotoMeta {
  src: string;
  fallbackFile: string;
  title: string;
  category: string;
  badge: string;
  caption: string;
  location: string;
  equipment: string;
}

export const AUTHENTIC_IMAGES = {
  // Official Logo (Exact 1:1 Vector Replica matching unnamed (2).png)
  logo: '/logo.svg',
  logoPng: '/unnamed (2).png',

  // 01. The Blackstone Crew: Edwin & Team Member in front of truck with sunny palms
  crew: '/unnamed (4).jpg',
  crewMeta: {
    src: '/unnamed (4).jpg',
    fallbackFile: 'unnamed (4).jpg',
    title: 'The Blackstone Crew',
    category: 'Team & Fleet',
    badge: 'AUTHENTIC CREW CAPTURE',
    caption: 'Edwin and crew member ready for action in Anaheim, California.',
    location: 'Anaheim & Orange County, CA',
    equipment: 'Blackstone Uniforms & Hauler Fleet',
  },

  // 02. Specialty Heavy Hauling: Antique Upright Piano loaded in box truck
  piano: '/unnamed (3).jpg',
  pianoMeta: {
    src: '/unnamed (3).jpg',
    fallbackFile: 'unnamed (3).jpg',
    title: 'Antique Piano Heavy Haul',
    category: 'Specialty Removal',
    badge: 'HEAVY ITEM SPECIALTY',
    caption: 'Safely loaded antique upright piano inside commercial box truck.',
    location: 'Anaheim Residential Clearout',
    equipment: 'Commercial Box Truck Hauler & Heavy Straps',
  },

  // 03. Truck Bed & Cleanout: Loaded boxes, totes, framed art, moving gear
  truckBoxes: '/unnamed (2).jpg',
  truckBoxesMeta: {
    src: '/unnamed (2).jpg',
    fallbackFile: 'unnamed (2).jpg',
    title: 'Household & Storage Clearance',
    category: 'Property Cleanout',
    badge: 'FULL CAPACITY HAUL',
    caption: 'Crew giving thumbs up with loaded boxes, storage totes, and framed artwork.',
    location: 'Orange County Property Cleanout',
    equipment: 'Commercial Hauler with Ramp',
  },

  // 04. Residential Driveway Load: Black GMC Denali HD loaded high with boxes and trash bags
  denaliLoading: '/unnamed (1).jpg',
  denaliLoadingMeta: {
    src: '/unnamed (1).jpg',
    fallbackFile: 'unnamed (1).jpg',
    title: 'Residential Driveway Load',
    category: 'Driveway & Cleanout',
    badge: 'ACTIVE JOB SITE',
    caption: 'GMC Denali HD heavy-duty rig stacked high with boxes, bagged items, and electronics.',
    location: 'Anaheim Driveway Clearout',
    equipment: 'GMC Denali HD 2500 & Side Racks',
  },

  // 05. Official Crew Uniform: Team member showing the Blackstone mountain logo on back
  shirtBranding: '/unnamed.jpg',
  shirtBrandingMeta: {
    src: '/unnamed.jpg',
    fallbackFile: 'unnamed.jpg',
    title: 'Official Blackstone Uniform',
    category: 'Brand & Standards',
    badge: 'UNIFORMED & PROFESSIONAL',
    caption: 'Crew member showing official Blackstone mountain crest uniform in front of Denali rig.',
    location: 'Anaheim, CA',
    equipment: 'Official Blackstone Crew Gear',
  },

  // Aliases for page layouts and content
  hero: '/unnamed (4).jpg',
  work: '/unnamed (1).jpg',
  specialty: '/unnamed (3).jpg',
  cargo: '/unnamed (2).jpg',
  uniform: '/unnamed.jpg',
  furniture: '/unnamed (3).jpg',
  garage: '/unnamed (2).jpg',
  cleared: '/unnamed (1).jpg',
  denali: '/unnamed (1).jpg',
};

export const ASSET_IMAGES = AUTHENTIC_IMAGES;
