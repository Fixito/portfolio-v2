import jobifyImage from '@assets/screenshots/mern-jobify.webp';
import comfyStoreImage from '@assets/screenshots/react-comfy-store.webp';
import restcountriesApiImage from '@assets/screenshots/rest-countries-api.webp';

export const projects = [
  {
    title: 'Jobify',
    subtitle: 'React, MongoDB, Express, Node.js',
    description:
      'Plateforme de gestion d\'emploi avec dashboard interactif, authentification JWT et visualisation de données. Interface moderne et responsive.',
    image: jobifyImage,
    link: 'https://github.com/Fixito/mern-jobify',
  },
  {
    title: 'Comfy Store',
    subtitle: 'React, Tailwind, Redux Toolkit, React Query',
    description:
      'E-commerce moderne avec gestion d\'état optimisée, mise en cache intelligente et expérience utilisateur fluide.',
    image: comfyStoreImage,
    link: 'https://github.com/Fixito/react-comfy-store',
  },
  {
    title: 'Rest Countries API',
    subtitle: 'React, Typescript, Tailwind, Shadcn, React Query',
    description:
      'Application performante avec recherche avancée, filtrage multi-critères et composants réutilisables. Design system cohérent.',
    image: restcountriesApiImage,
    link: 'https://github.com/Fixito/rest-countries-api',
  },
];