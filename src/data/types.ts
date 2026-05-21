import type { ImageMetadata } from 'astro';

export interface SectionMeta {
  title: string;
  description: string;
}

export interface SocialLink {
  url: string;
  icon: string;
  title: string;
}

export interface NavLink {
  href: string;
  text: string;
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: ImageMetadata;
  link: string;
}
