import {
  BadgeCheck,
  BellRing,
  Building2,
  Camera,
  CircleDollarSign,
  Headphones,
  Home,
  Lock,
  Radar,
  ShieldCheck,
  Smartphone,
  Star,
  Store,
  Wrench
} from "lucide-react";
import type { HeroSlide, IconCard, ImageCard, LocationScene, NavItem, Testimonial } from "../types";
import { images } from "./imageAssets";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" }
];

export const heroSlides: HeroSlide[] = [
  {
    title: "Extensive Fleet Network",
    copy: "Reliable transport and logistics vehicles ready to meet your operational demands.",
    image: images.hero.H1,
  },
  {
    title: "Secure Transit Services",
    copy: "Professional security personnel ensuring the safe and secure transportation of high-value assets.",
    image: images.hero.H2,
  },
  {
    title: "Mobile Security Patrols",
    copy: "Rapid-response motorcycle units providing vigilant protection, monitoring, and escort services.",
    image: images.hero.H3,
  },
  {
    title: "Technical Support & Diagnostics",
    copy: "Expert technicians providing dedicated hardware troubleshooting and IT maintenance.",
    image: images.hero.H4,
  },
  {
    title: "Emergency & Safety Training",
    copy: "Comprehensive fire safety and emergency response training for all field personnel.",
    image: images.hero.H5,
  },
  {
    title: "Industrial Equipment Maintenance",
    copy: "Specialized servicing and repair for heavy-duty generators and industrial machinery.",
    image: images.hero.H6,
  },
  {
    title: "Precision Engineering",
    copy: "Skilled mechanics delivering high-quality engine overhauls and technical workshop repairs.",
    image: images.hero.H7,
  },
  {
    title: "Professional Transport Team",
    copy: "Experienced drivers and logistics coordinators dedicated to seamless fleet operations.",
    image: images.hero.H8,
  }
];
