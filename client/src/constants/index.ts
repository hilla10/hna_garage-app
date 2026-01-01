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
import garageVideo from '../assets/video/garage.mp4'

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
  },
  {
    id: 2,
    name: 'Transmission Service',
    href: '#',
  },
  {
    id: 3,
    name: 'Break Repair & Service',
    href: '#',
  },
  {
    id: 4,
    name: 'Engine Service & Repair',
    href: '#',
  },
  {
    id: 5,
    name: 'Trye & Wheels',
    href: '#',
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

export {
  navLinks,
  contactInfo,
  socialLinks,
  services,
  footerLink,
  play,
  garageVideo,
};
