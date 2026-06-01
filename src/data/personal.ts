import type { SocialLink } from '@data/types';

export const personal = {
  name: 'Thomas ROBERT',
  email: 'thomas_3004@hotmail.fr',
  cvPath: '/thomas-robert-developpeur-fullstack.pdf',
  siteUrl: 'https://thomasrobert.netlify.app/',
  socialLinks: [
    {
      url: 'https://github.com/Fixito',
      icon: 'ri:github-fill',
      title: 'GitHub',
    },
    {
      url: 'https://www.linkedin.com/in/thomasrobert1/',
      icon: 'ri:linkedin-box-fill',
      title: 'LinkedIn',
    },
  ] satisfies SocialLink[],
};
