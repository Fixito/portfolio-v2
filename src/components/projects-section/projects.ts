import type { ImageMetadata } from 'astro';

import comfyStoreImage from '@assets/screenshots/react-comfy-store.webp';
import jobifyImage from '@assets/screenshots/mern-jobify.webp';
import onlyMustImage from '@assets/screenshots/only-must.webp';
import restcountriesApiImage from '@assets/screenshots/rest-countries-api.webp';

import type { SectionMeta } from '@data/types';

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: ImageMetadata;
  link: string;
};

export const sectionMeta: SectionMeta = {
  title: 'Mes projets',
  description:
    "Voici une sélection de mes projets qui m'ont permis de développer mes compétences :",
  icon: 'ri:code-s-slash-fill',
};

export const projects: Project[] = [
  {
    title: 'OnlyMust',
    subtitle: 'TanStack Start, React Query, PostgreSQL, Express, Drizzle',
    description:
      'Plateforme fullstack de découverte de jeux vidéo “must-play” avec filtres avancés, synchronisation automatisée des données Metacritic/HowLongToBeat et UX orientée performance.',
    image: onlyMustImage,
    link: 'https://github.com/Fixito/only-must',
  },
  {
    title: 'Jobify',
    subtitle: 'React, MongoDB, Express, Node.js',
    description:
      "Application fullstack de gestion d'emploi avec authentification JWT, dashboard interactif et visualisation de données.",
    image: jobifyImage,
    link: 'https://github.com/Fixito/mern-jobify',
  },
  {
    title: 'Comfy Store',
    subtitle: 'React, Tailwind CSS, Redux Toolkit, React Query',
    description:
      "Application e-commerce moderne avec gestion d'état optimisée, cache serveur et expérience utilisateur fluide.",
    image: comfyStoreImage,
    link: 'https://github.com/Fixito/react-comfy-store',
  },
  {
    title: 'Rest Countries API',
    subtitle: 'React, TypeScript, Tailwind CSS, shadcn/ui, React Query',
    description:
      'Application de consultation de données avec recherche dynamique, filtres multi-critères et interface responsive.',
    image: restcountriesApiImage,
    link: 'https://github.com/Fixito/rest-countries-api',
  },
];
