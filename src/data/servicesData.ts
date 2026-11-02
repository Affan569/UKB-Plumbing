
import { 
    Droplet, WrenchIcon, Radiation, FlameKindling, 
    PenLineIcon, Bath, ShowerHead, Clock,
  } from 'lucide-react';
  
  export interface ServiceType {
    id: number;
    title: string;
    description: string;
    icon: any; // Using 'any' to store the icon component reference
    image: string;
    slug: string;
  }
  
  export const servicesList: ServiceType[] = [
    {
      id: 1,
      title: "Emergency Plumbing Repairs",
      description: "Fast response to all emergency plumbing issues, including burst pipes, leaks, and fixture failures.",
      icon: WrenchIcon,
      image: "/lovable-uploads/emergency.jpg",
      slug: "emergency-plumbing-repairs"
    },
    {
      id: 2,
      title: "Blocked Drain Cleaning",
      description: "Professional removal of blockages in sinks, toilets, showers, and main drainage systems.",
      icon: PenLineIcon,
      image: "/lovable-uploads/drain.png",
      slug: "blocked-drain-cleaning"
    },
    {
      id: 3,
      title: "Water Leak Repairs",
      description: "Detection and repair of visible and hidden water leaks to prevent property damage and water waste.",
      icon: Droplet,
      image: "/lovable-uploads/services.jpg",
      slug: "water-leak-repairs"
    },
    {
      id: 4,
      title: "Boiler Repairs",
      description: "Expert repair, installation, and maintenance of all types of radiators and heating systems.",
      icon: Radiation,
      image: "/lovable-uploads/free.jpg",
      slug: "radiator-repairs"
    },
    {
      id: 5,
      title: "Boiler Repair & Installation",
      description: "Professional installation, repair, and servicing of all boiler types to ensure efficient and safe operation.",
      icon: FlameKindling,
      image: "/lovable-uploads/free.jpg",
      slug: "boiler-installation-repair"
    },
    {
      id: 6,
      title: "Pipe Repairs & Replacement",
      description: "Expert repair and replacement of damaged, burst, or corroded pipes using high-quality materials.",
      icon: PenLineIcon,
      image: "/lovable-uploads/2.jpg",
      slug: "pipe-repairs-replacement"
    },
    {
      id: 7,
      title: "Bathroom & Kitchen Plumbing",
      description: "Installation and repair of all bathroom and kitchen fixtures, including sinks, toilets, showers, and appliances.",
      icon: ShowerHead,
      image: "/lovable-uploads/serve.jpg",
      slug: "bathroom-kitchen-plumbing"
    },
    {
      id: 8,
      title: "24/7 Emergency Call-Out",
      description: "Round-the-clock availability for emergencies, ensuring you never have to wait for urgent plumbing assistance.",
      icon: Clock,
      image: "/lovable-uploads/11.jpg",
      slug: "emergency-call-out"
    }
  ];