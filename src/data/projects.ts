import type { Project } from './types';

import frontpageImage from '@assets/screenshots/frontpage.webp';
import jobifyImage from '@assets/screenshots/mern-jobify.webp';
import onlyMustImage from '@assets/screenshots/only-must.webp';
import comfyStoreImage from '@assets/screenshots/react-comfy-store.webp';

export const projects: Project[] = [
  {
    title: 'OnlyMust',
    subtitle: 'TanStack Start, PostgreSQL, Express',
    description:
      'Plateforme fullstack de découverte de jeux vidéo "must-play" avec filtres avancés, synchronisation automatisée des données Metacritic/HowLongToBeat et UX orientée performance.',
    image: onlyMustImage,
    link: 'https://github.com/Fixito/only-must',
  },
  {
    title: 'Frontpage',
    subtitle: 'TanStack Start, PostgreSQL, Nitro',
    description:
      'Un agrégateur de contenu personnalisable qui rassemble les flux RSS et Atom dans un tableau de bord de lecture bien conçu',
    image: frontpageImage,
    link: 'https://github.com/Fixito/frontpage',
  },
  {
    title: 'Jobify',
    subtitle: 'React, MongoDB, Express',
    description:
      "Application fullstack de gestion d'emploi avec authentification JWT, dashboard interactif et visualisation de données.",
    image: jobifyImage,
    link: 'https://github.com/Fixito/mern-jobify',
  },
  {
    title: 'Comfy Store',
    subtitle: 'React, Redux Toolkit, React Query',
    description:
      "Application e-commerce moderne avec gestion d'état optimisée, cache serveur et expérience utilisateur fluide.",
    image: comfyStoreImage,
    link: 'https://github.com/Fixito/react-comfy-store',
  },
];
