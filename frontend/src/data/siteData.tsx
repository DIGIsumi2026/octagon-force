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
    copy: "Rapid-response motorcycle units providing vigilant protection, monitoring, and escort services",
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

export const factCards: IconCard[] = [
  {
    icon: <CircleDollarSign />,
    title: "Flexible Payment Options",
    description: "Choose plans that fit the project scope, property type, and required monitoring level."
  },
  {
    icon: <Headphones />,
    title: "24/7 Monitoring",
    description: "Keep homes, offices, and commercial spaces protected even when teams are away."
  },
  {
    icon: <Wrench />,
    title: "Professional Installation",
    description: "Setup, optimization, testing, and handover are handled by experienced technicians."
  },
  {
    icon: <Home />,
    title: "Custom Smart Packages",
    description: "Build a system around your property layout, risk level, and automation requirements."
  }
];

export const benefits: IconCard[] = [
  {
    icon: <ShieldCheck />,
    title: "Smarter Security",
    description: "Connected devices feed useful data into automated alerts and monitoring workflows."
  },
  {
    icon: <Smartphone />,
    title: "Mobile Control",
    description: "Customers can view camera feeds, receive notifications, and manage access remotely."
  },
  {
    icon: <BellRing />,
    title: "Instant Alerts",
    description: "Fast notifications help users respond quickly to unusual activity around the property."
  },
  {
    icon: <Lock />,
    title: "Secure Ecosystem",
    description: "Bring cameras, locks, doorbells, and automation into a single service experience."
  }
];

export const experienceItems: ImageCard[] = [
  {
    title: "Repair & Service",
    description: "Maintenance support for cameras, hubs, smart locks, alarms, and existing security devices.",
    image: images.services.repair
  },
  {
    title: "Smarter Home",
    description: "Automation packages for residential spaces with app control and real-time monitoring.",
    image: images.services.smarterHome
  },
  {
    title: "Video Verification",
    description: "High-quality footage helps users confirm activity before making decisions.",
    image: images.services.videoVerification
  },
  {
    title: "Access Control",
    description: "Manage visitors, staff access, doors, gates, and business areas from one platform.",
    image: images.services.accessControl
  },
  {
    title: "Business Security",
    description: "Get notifications when people, packages, animals, or vehicles are detected.",
    image: images.services.businessSecurity
  }
];

export const locationScenes: LocationScene[] = [
  {
    key: "indoor",
    label: "Indoor",
    image: images.products.indoor
  },
  {
    key: "outdoor",
    label: "Outdoor",
    image: images.products.outdoor
  },
  {
    key: "frontdoor",
    label: "Frontdoor",
    image: images.products.frontdoor
  },
  {
    key: "pool",
    label: "Pool",
    image: images.products.pool
  }
];

export const categories: ImageCard[] = [
  {
    title: "Accessories",
    description: "Add-ons that make every security system more useful and reliable.",
    image: images.products.accessories
  },
  {
    title: "Cameras",
    description: "Crystal-clear indoor and outdoor camera packages for modern properties.",
    image: images.products.cameras
  },
  {
    title: "Doorbells",
    description: "See visitors, greet guests, and monitor packages from anywhere.",
    image: images.products.doorbells
  }
];

export const projectCards: ImageCard[] = [
  {
    title: "Residential",
    description: "Remote monitoring and smart alerts for family homes and apartment complexes.",
    image: images.projects.residential
  },
  {
    title: "Airport",
    description: "Surveillance planning for passenger safety, crowd control, and restricted spaces.",
    image: images.projects.airport
  },
  {
    title: "Campus",
    description: "Integrated monitoring for educational properties, entrances, and open areas.",
    image: images.projects.campus
  },
  {
    title: "Energy",
    description: "Remote protection for critical infrastructure and industrial installations.",
    image: images.projects.energy
  }
];

export const stats = [
  { value: "1M", label: "Homes Protected", icon: <BadgeCheck /> },
  { value: "$29M", label: "Projects Delivered", icon: <Star /> },
  { value: "400+", label: "Installations", icon: <Camera /> },
  { value: "31M", label: "Events Secured", icon: <Radar /> }
];

export const processSteps: IconCard[] = [
  {
    icon: <Store />,
    title: "Get a Quote",
    description: "Submit your property and security requirements through the request form."
  },
  {
    icon: <Headphones />,
    title: "Appointment",
    description: "Our team reviews your goals and schedules an on-site or online consultation."
  },
  {
    icon: <Camera />,
    title: "Buy Devices",
    description: "Choose the right camera, automation, access-control, and monitoring package."
  },
  {
    icon: <Building2 />,
    title: "Install Devices",
    description: "Technicians install, test, and activate your complete smart-security setup."
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Maria Lopez",
    date: "Nov 25, 2025",
    title: "Professional And Reliable",
    quote: "The installation was smooth, the team respected our space, and the mobile monitoring setup was explained clearly."
  },
  {
    name: "Brian Kim",
    date: "Nov 29, 2025",
    title: "Smooth And Easy Process",
    quote: "They kept us updated throughout the project and delivered a clean setup that works exactly as promised."
  },
  {
    name: "Jessica Nguyen",
    date: "Nov 5, 2025",
    title: "Friendly And Knowledgeable Team",
    quote: "From scheduling to installation, everything felt organized. The system is simple enough for the whole family."
  },
  {
    name: "David Tran",
    date: "Nov 15, 2025",
    title: "Would Definitely Recommend!",
    quote: "The technician made sure every camera angle was correct and helped us understand the app before leaving."
  }
];

export const brands = ["JOHN HOLLAND", "ENGIE", "flexport", "RioTinto", "CPB"];

export const footerColumns = [
  {
    title: "Products",
    links: ["Home Security Systems", "Security Cameras", "Doorbell Cameras", "Outdoor Camera Pro", "Smart Home Automation"]
  },
  {
    title: "Support",
    links: ["Blog", "Support", "Contact Us", "Moving Your System", "Verify Rep"]
  },
  {
    title: "Company",
    links: ["About", "Reviews", "Store Locations", "Careers", "Leadership & Team"]
  }
];
