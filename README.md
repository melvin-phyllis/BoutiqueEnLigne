## Autorapid Clone

Reproduction d’une partie du site vitrine [prestashop.codezeel.com/PRS22/PRS220531](https://prestashop.codezeel.com/PRS22/PRS220531/default/fr/) avec Next.js 16, l’App Router et Tailwind CSS 4 + DaisyUI. L’objectif du projet est de recréer le site  afin de pratiquer l’intégration moderne et la mise en page responsive.

## Stack

- **Next.js 16 / React 19** – rendu côté client avec l’App Router.
- **TypeScript** – typings légers pour les composants.
- **Tailwind CSS 4 + DaisyUI** – grille responsive, carrousels et boutons.
- **React Icons** – pictogrammes des boutons et highlights.
- **Assets locaux** – images importées depuis `/public` afin d’imiter le design de référence.

## Structure du projet

```
.
├─ app/
│  ├─ layout.tsx          # Shell principal (App Router)
│  ├─ page.tsx            # Page d'accueil : assemble les sections
│  └─ globals.css         # Tailwind + utilitaires custom pour vh safe-area
├─ components/
│  ├─ Navbar.tsx          # Barre de navigation sticky
│  ├─ CarouselLanding.tsx # Hero + carrousel de catégories horizontal
│  ├─ ListsProducts.tsx   # Cartes produits mockées avec actions
│  ├─ Offerweek.tsx       # Bloc “offre de la semaine”
│  ├─ Footer.tsx          # Footer quadrillé façon Autorapid
│  └─ BtnNavbar.tsx       # CTA réutilisables pour la navbar
└─ public/                # Logos, bannières et visuels sources
```

## Fonctionnalités actuelles

- **Hero plein écran** avec carrousel manuel (anchors DaisyUI) et CTA.
- **Carrousel horizontal des catégories** piloté en JS pour les flèches desktop/mobile et la compatibilité Android (safe-area + scrollbar masquée).
- **Sections promotions / bannières** imitant la mise en page PrestaShop.
- **Listes de produits** avec icônes (vue rapide, favoris, etc.) pour reproduire l’UX e-commerce.
- **Footer quadrillé** reprenant logo, description, liens produits/entreprise et informations de contact.

Projet  développer d’Akou Melvin – développeur full stack junior.
