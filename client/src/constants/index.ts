import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';

import play from '../assets/images/icons/play.webp';
import garageVideo from '../assets/video/garage.mp4';
import image1 from '../assets/images/resource/image-1.png';
import image2 from '../assets/images/resource/image-2.png';
import image3 from '../assets/images/resource/image-3.png';
import image4 from '../assets/images/resource/image-4.png';
import turbocharger from '../assets/images/icons/turbocharger.png';
import transmission from '../assets/images/icons/transmission.png';
import carBrake from '../assets/images/icons/car-brake.png';
import engine from '../assets/images/icons/engine.png';
import carWheel from '../assets/images/icons/car-wheel.png';
import carSpray from '../assets/images/icons/car-spray.png';
import expert from '../assets/images/icons/expert.png';
import service from '../assets/images/icons/service.png';
import town from '../assets/images/icons/town.png';
import award from '../assets/images/icons/award.png';
import redCheckIcon from '../assets/images/icons/icon-1.png';

const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '/',
  },
  {
    id: 2,
    name: 'About Us',
    href: '/about',
  },
  {
    id: 3,
    name: 'Services',
    href: '/service',
  },
  {
    id: 4,
    name: 'Contact Us',
    href: '/contact',
  },
];

const contactInfo = [
  {
    id: 1,
    name: '54B, Tailstoi Town 5238 MT, La city, IA 522364',
    icon: MapPin,
  },
  {
    id: 2,
    name: 'Email us: contact@hna.com',
    icon: Mail,
  },
  {
    id: 3,
    name: 'Call us on: ',
    phone: '+251 99 549 1020',
    icon: Phone,
  },
];

const footerLink = [
  {
    id: 1,
    name: 'Home',
    href: '/',
  },
  {
    id: 2,
    name: 'About Us',
    href: '/about',
  },
  {
    id: 3,
    name: 'Appointment',
    href: '/',
  },
  {
    id: 4,
    name: 'Testimonials',
    href: '/',
  },
  {
    id: 5,
    name: 'Contact Us',
    href: '/contact',
  },
];

const services = [
  {
    id: 1,
    name: 'Performance Upgrade',
    href: '#',
    linkText: 'Read More +',
    image: turbocharger,
  },
  {
    id: 2,
    name: 'Transmission Service',
    href: '#',
    linkText: 'Read More +',
    image: transmission,
  },
  {
    id: 3,
    name: 'Break Repair & Service',
    href: '#',
    linkText: 'Read More +',
    image: carBrake,
  },
  {
    id: 4,
    name: 'Engine Service & Repair',
    href: '#',
    linkText: 'Read More +',
    image: engine,
  },
  {
    id: 5,
    name: 'Trye & Wheels',
    href: '#',
    linkText: 'Read More +',
    image: carWheel,
  },
  {
    id: 6,
    name: 'Denting & Painting',
    href: '#',
    linkText: 'Read More +',
    image: carSpray,
  },
];

const socialLinks = [
  {
    id: 1,
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/hailemichaelnegusse/',
  },
  {
    id: 2,
    icon: Twitter,
    link: 'https://x.com/man_hilla',
  },
  {
    id: 3,
    icon: Instagram,
    link: 'https://www.instagram.com/hillaman592/',
  },
  {
    id: 4,
    icon: Github,
    link: 'https://github.com/hilla10',
  },
];

const aboutUs = [
  {
    id: 1,
    title: 'Certified Expert Mechanics',
    image: expert,
  },
  {
    id: 2,
    title: 'Fast And Quality Service',
    image: service,
  },
  {
    id: 3,
    title: 'Best Prices in Town',
    image: town,
  },
  {
    id: 4,
    title: 'Awarded Workshop',
    image: award,
  },
];

const additionalServices = [
  {
    id: 1,
    icon: redCheckIcon,
    text: 'General Auto Repair & Maintenance',
  },
  {
    id: 2,
    icon: redCheckIcon,
    text: 'Transmission Repair & Replacement',
  },
  {
    id: 3,
    icon: redCheckIcon,
    text: 'Tire Repair and Replacement',
  },
  {
    id: 4,
    icon: redCheckIcon,
    text: 'State Emissions Inspection',
  },
  {
    id: 5,
    icon: redCheckIcon,
    text: 'Break Job / Break Services',
  },
  {
    id: 6,
    icon: redCheckIcon,
    text: 'Electrical Diagnostics',
  },
  {
    id: 7,
    icon: redCheckIcon,
    text: 'Fuel System Repairs',
  },
  {
    id: 8,
    icon: redCheckIcon,
    text: 'Starting and Charging Repair',
  },
  {
    id: 9,
    icon: redCheckIcon,
    text: 'Steering and Suspension Work',
  },
  {
    id: 10,
    icon: redCheckIcon,
    text: 'Emission Repair Facility',
  },
  {
    id: 11,
    icon: redCheckIcon,
    text: 'Wheel Alignment',
  },
  {
    id: 12,
    icon: redCheckIcon,
    text: 'Computer Diagnostic Testing',
  },
];

export {
  navLinks,
  contactInfo,
  socialLinks,
  services,
  footerLink,
  aboutUs,
  additionalServices,
  play,
  garageVideo,
  image1,
  image2,
  image3,
  image4,
};
