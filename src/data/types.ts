import type { ImageMetadata } from 'astro';

export type SectionMeta = {
  title: string;
  description: string;
};

export type SocialLink = {
  url: string;
  icon: string;
  title: string;
};

export type NavLink = {
  href: string;
  text: string;
};

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: ImageMetadata;
  link: string;
};
