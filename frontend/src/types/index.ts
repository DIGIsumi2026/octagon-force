import type { ReactNode } from "react";

export type NavItem = {
  label: string;
  href: string;
};

export type HeroSlide = {
  title: string;
  copy: string;
  image: string;
};

export type IconCard = {
  icon: ReactNode;
  title: string;
  description: string;
};

export type ImageCard = {
  title: string;
  description: string;
  image: string;
};

export type LocationScene = {
  key: string;
  label: string;
  image: string;
};

export type Testimonial = {
  name: string;
  date: string;
  title: string;
  quote: string;
};

export type ContactPayload = {
  propertyType: string;
  industry: string;
  systemSize: string;
  ownership: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interests: string[];
};
