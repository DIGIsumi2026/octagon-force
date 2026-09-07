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
    title: "Professional Security Services",
    copy: "Trained armed and unarmed personnel providing dependable protection for people, property, assets, and operations.",
    image: images.hero.H3,
  },
  {
    title: "Professional Transport Team",
    copy: "Experienced drivers and logistics coordinators dedicated to seamless fleet operations.",
    image: images.hero.H4,
  },
  {
    title: "Professional Cleaning Services",
    copy: "Reliable housekeeping, deep cleaning, sanitization, and facility care tailored to residential and commercial environments.",
    image: images.hero.H5,
  }
];
