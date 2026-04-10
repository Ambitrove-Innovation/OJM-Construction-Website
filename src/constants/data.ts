import {
  SocialLink,
  FooterLink,
  NavLink,
  Service,
  Project,
  Review,
  Faq,
} from "../types/common";
import { Facebook, Instagram } from "lucide-react";
import TikTokIcon from "../components/icons/TikTokIcon";
import { Hammer, Droplets, Paintbrush } from "lucide-react";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1EFza9TTsJ/",
    icon: Facebook,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/olivermoyo1101instragram?igsh=MXRvYXZ3ejhmaGIzNQ==&utm_source=ig_contact_invite",
    icon: Instagram,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@olivermoyo11011986?_r=1&_t=ZS-95P2H5S2Z4z",
    icon: TikTokIcon,
  },
];

export const FOOTER_LINKS: FooterLink[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Projects",
    url: "/projects",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

export const NAV_LINKS: NavLink[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Projects",
    url: "/projects",
  },
];

export const SERVICES: Service[] = [
  {
    title: "Construction",
    description: "Building, renovations, plastering, demolition, and more.",
    icon: Hammer,
    image: "/images/Construction_heavy_building_ojm.webp",
    details: [
      "Demolition",
      "Building & Painting",
      "Plastering",
      "Paving & Pools",
    ],
  },
  {
    title: "Plumbing",
    description:
      "Leaks, pipes, installations, and comprehensive plumbing solutions.",
    icon: Droplets,
    image: "/images/floorFoundation_building.jpg",
    details: [
      "Pipe Repairs",
      "New Installations",
      "Leak Detection",
      "Maintenance",
    ],
  },
  {
    title: "Finishing",
    description: "Tiling, ceilings, waterproofing, and high-end interior work.",
    icon: Paintbrush,
    image: "/images/Stair_tilling_ojm.webp",
    details: ["Tiling & Ceiling", "Rhinolite", "Drywall", "Waterproofing"],
  },
];

export const PROJECTS: Project[] = [
  {
    src: "/images/Stair_tilling_ojm.webp",
    alt: "Stair Tiling Work",
    category: "Finishing",
  },
  {
    src: "/images/floorFoundation_building.jpg",
    alt: "Foundation Trench",
    category: "Construction",
  },
  {
    src: "/images/oustide_floorFoundtion.webp",
    alt: "Outside Floor Foundation",
    category: "Construction",
  },
  {
    src: "/images/construction_layout_ojm.webp",
    alt: "Construction Layout",
    category: "Construction",
  },
  {
    src: "/images/Construction_heavy_building_ojm.webp",
    alt: "Heavy Construction Site",
    category: "Construction",
  },
  {
    src: "/images/mordenHouse_construction_ojm.webp",
    alt: "Modern House Exterior",
    category: "Construction",
  },
  {
    src: "/images/construction_shot_OJM.webp",
    alt: "Construction Shot",
    category: "Construction",
  },
  {
    src: "/images/inside_house_construction_ojm.webp",
    alt: "Indoor Renovation",
    category: "Finishing",
  },
  {
    src: "/images/House_design_building_ojm.webp",
    alt: "Architectural Design",
    category: "Construction",
  },
];

export const FAQS: Faq[] = [
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve the greater Johannesburg area, including Sandton, Randburg, Midrand, Jhb south and surrounding suburbs. For large-scale projects, we may consider locations further afield.",
  },
  {
    question: "Do you provide free quotes?",
    answer:
      "Yes, we provide free, no-obligation quotes for all our services. Simply contact us via phone, email, or our website form to schedule a site visit or consultation.",
  },
  {
    question: "Are you insured and registered?",
    answer:
      "Absolutely. OJM Project Construction is a fully registered business, and we carry comprehensive public liability insurance to ensure peace of mind for both our team and our clients.",
  },
  {
    question: "How long does a typical renovation take?",
    answer:
      "Timeline varies significantly depending on the scope of work. A small bathroom renovation might take 1-2 weeks, while a full home renovation could take several months. We provide detailed timelines with every quote.",
  },
  {
    question: "Can you help with emergency plumbing?",
    answer:
      "Yes, we offer responsive plumbing services for emergencies such as burst pipes or major leaks. Contact our primary number for the fastest response.",
  },
];

export const REVIEWS: Review[] = [
  {
    text: "Very professional and clean work. Highly recommend for any construction needs.",
    author: "Satisfied Client",
    rating: 5,
  },
  {
    text: "Fast response and reliable service. They fixed our plumbing issues in no time.",
    author: "Homeowner",
    rating: 5,
  },
  {
    text: "Great workmanship and affordable pricing. The finishing on our tiling is perfect.",
    author: "Business Owner",
    rating: 5,
  },
];
