[![Netlify Status](https://api.netlify.com/api/v1/badges/c27d40e1-917a-4102-990f-dcc466568010/deploy-status)](https://app.netlify.com/projects/thomasrobert/deploys)

# Portfolio

**Site vitrine moderne d'un développeur Full-Stack React/Node.js.**

🌐 **[Visite le site](https://thomasrobert.netlify.app)** | 💼 **[GitHub](https://github.com/Fixito)** | 🔗 **[LinkedIn](https://www.linkedin.com/in/thomasrobert1/)**

## À propos du projet

Portfolio personnel de Thomas ROBERT, développeur Full-Stack spécialisé en React et Node.js basé à Valenciennes. Le site met en avant :

- **Présentation professionnelle** : section héro animée avec CTA
- **Galerie de projets** : projets sélectionnés avec descriptions et technologies
- **Compétences** : stack technologique maîtrisé
- **Optimisation** : performances, accessibilité, SEO
- **Responsive** : adapté sur tous les appareils

## 🚀 Stack Technique

| Outil            | Version | Rôle                            |
| ---------------- | ------- | ------------------------------- |
| **Astro**        | 6.3.3   | Framework de rendu statique/SSR |
| **Tailwind CSS** | 4.3.0   | Framework CSS utilitaire        |
| **TypeScript**   | 6.0.3   | Typage fort                     |
| **Motion**       | 12.39.0 | Animations fluides              |
| **Astro Icon**   | 1.1.5   | Système d'icônes vectorielles   |

## 📂 Architecture du Projet

```
portfolio-v2/
├── public/              # Ressources statiques (CV, icônes...)
├── src/
│   ├── assets/         # Images optimisées (WebP)
│   ├── components/     # Composants Astro réutilisables
│   │   ├── About.astro
│   │   ├── projects-section/
│   │   ├── skills-section/
│   │   └── ...
│   ├── data/           # Sources de données structurées
│   │   ├── personal.ts # Infos personnelles, réseaux sociaux
│   │   ├── projects.ts # Liste des projets
│   │   ├── skills.ts   # Compétences techniques
│   │   └── types.ts    # Types TypeScript partagés
│   ├── layout/         # Layouts Astro (BaseLayout, Navbar, Footer)
│   ├── pages/          # Routes Astro
│   │   ├── index.astro # Page d'accueil
│   │   └── 404.astro   # Page d'erreur
│   ├── scripts/        # JavaScript côté client (animations)
│   ├── styles/         # Styles globaux
│   └── env.d.ts        # Types d'environnement
├── astro.config.mjs    # Configuration Astro
├── tsconfig.json       # Configuration TypeScript
├── package.json        # Dépendances et scripts
└── pnpm-workspace.yaml # Configuration pnpm monorepo
```

## 🛠️ Installation & Développement

### Prérequis

- **Node.js** >= 18
- **pnpm** (gestionnaire de paquets)

### Setup local

```bash
# Cloner le repository
git clone https://github.com/Fixito/portfolio-v2.git
cd portfolio-v2

# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm run dev
# Le site est accessible sur http://localhost:4321
```

### Scripts disponibles

| Commande                | Description                                  |
| ----------------------- | -------------------------------------------- |
| `pnpm run dev`          | Serveur de développement avec hot reload     |
| `pnpm run build`        | Build production (optimisé) → `./dist/`      |
| `pnpm run preview`      | Prévisualisateur local du build              |
| `pnpm run format`       | Formate le code (Prettier + Tailwind)        |
| `pnpm run format:check` | Vérifie le formatage                         |
| `pnpm run typecheck`    | Vérifie la validité TypeScript (Astro Check) |

## 📝 Structure des Données

Les données du portfolio sont centralisées dans `src/data/` :

### `personal.ts`

```typescript
export const personal = {
  name: 'Thomas ROBERT',
  email: 'thomas_3004@hotmail.fr',
  cvPath: '/cv-thomas-robert.pdf',
  siteUrl: 'https://thomasrobert.netlify.app/',
  socialLinks: [
    /* GitHub, LinkedIn, etc. */
  ],
};
```

### `projects.ts`

Liste des projets affichés dans la galerie.

### `skills.ts`

Compétences par catégorie (Frontend, Backend, DevOps, etc.).

## 🎨 Personnalisation

### Modifier les informations personnelles

Éditer `src/data/personal.ts` :

```typescript
export const personal = {
  name: 'Votre Nom',
  email: 'votre.email@example.com',
  siteUrl: 'https://votre-site.com',
  // ...
};
```

### Ajouter/modifier des projets

Éditer `src/data/projects.ts` et ajouter au tableau.

### Changer les couleurs (Tailwind)

Tailwind v4 utilise un fichier CSS unique. Les variables de couleur se trouvent dans `src/styles/global.css`.

## 🚀 Déploiement

Le site est déployé automatiquement via **Netlify** lors de chaque push sur `main`.

### Configuration Netlify

- **Build command** : `pnpm run build`
- **Publish directory** : `dist`
- **Node version** : 20+

**Status CI/CD** : voir le badge Netlify en haut du fichier.

## ♿ Accessibilité

Le site respecte les normes **WCAG 2.2 AA** :

- ✅ Contraste texte conforme (4.5:1)
- ✅ Navigation au clavier complète
- ✅ Attributs ARIA appropriés
- ✅ Structure sémantique (landmarks HTML5)
- ✅ Images avec alt descriptifs
- ✅ Respect de `prefers-reduced-motion`

Vérifier avec : `pnpm run typecheck` pour l'analyse Astro.

## 🎯 Optimisations

- **Images** : optimisation WebP/AVIF, lazy loading
- **CSS** : critical CSS inliné, purge automatique
- **JS** : bundle splitting, déférage des scripts non-essentiels
- **SEO** : sitemap automatique, balises méta structurées
- **Performance** : LCP < 2.5s, CLS < 0.1

## 📄 Licence

Projet personnel. Libre d'utilisation pour référence.

## 📧 Contact

**Thomas ROBERT**

- Email: [thomas_3004@hotmail.fr](mailto:thomas_3004@hotmail.fr)
- GitHub: [@Fixito](https://github.com/Fixito)
- LinkedIn: [Thomas ROBERT](https://www.linkedin.com/in/thomasrobert1/)

---

_Créé avec ❤️ avec Astro 6 et Tailwind CSS v4_
