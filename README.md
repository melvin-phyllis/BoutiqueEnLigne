# Autorapid clone - Next.js + Firebase

Vitrine e-commerce refaite avec Next.js 16 (App Router) qui ajoute un compte client et un petit backoffice admin pour tester un flux complet (landing, boutique, auth, CRUD produit).

## Stack

- Next.js 16 / React 19 (App Router, pages clients)
- TypeScript
- Tailwind CSS 4 + DaisyUI pour la mise en forme
- Firebase Auth + Realtime Database (users, produits)
- ImageKit pour les uploads signes (compression client en WebP)
- Zustand pour l etat client (liste produits admin)
- Axios pour les appels HTTP

## Fonctionnalites

- Landing page: hero, carrousels, sections promotionnelles et reviews pour mimer Autorapid.
- Boutique `/shop`: grilles de produits et panneaux de filtres (UI statique pour l instant).
- Auth client: inscription e-mail/mot de passe avec verification d e-mail, connexion e-mail/mdp ou Google, persistence dans `localStorage` puis redirection vers `/account`.
- Espace compte `/account`: fil d ariane, wishlist maquette et garde via `Loginmiddleware`.
- Backoffice admin: connexion via `/login/loginadmin` (verifie Firebase + presence dans `users-list/admin`), dashboard `/backoffice` avec ajout de produit (upload ImageKit < 1 Mo, compression, envoi vers `/api/addproducts`) et liste des produits filtres par l admin connecte.
- API Next.js:
  - `PUT /api/registration` creation d utilisateur Firebase + enregistrement dans la DB temps reel.
  - `POST /api/connection` connexion, verification d e-mail et mise a jour du username.
  - `POST /api/registration/admin` validation d un compte admin dans `users-list/admin`.
  - `POST /api/addproducts` creation d un produit dans `/produits`.
  - `GET /api/getproducts` recuperation de tous les produits (filtrage cote client).
  - `GET /api/upload-auth` generation des tokens signes ImageKit.

## Arborescence rapide

- `app/` : pages (home, shop, login, signup, account, backoffice) et routes API.
- `components/` : UI (navbar, carrousels, formulaires, composants admin).
- `controllers/` : helpers client (auth Firebase, gestion ImageKit, CRUD produits).
- `store/ProductStore.ts` : store Zustand pour la liste des produits admin.
- `firebase/config.ts` : initialisation Firebase Auth.
- `types/index.ts` : typings pour formulaires, navigation admin et produits.

## Prerequis

- Node.js 18.18+ (requis par Next.js 16)
- npm

## Mise en route

1) Installer les dependances  
`npm install`

2) Configurer les variables d environnement (copier `.env.example` vers `.env`) :
```env
DATABASE_URL="https://<project>.firebasedatabase.app/boutiqueEnLigne"

NEXT_PUBLIC_apiKey="..."
NEXT_PUBLIC_authDomain="..."
NEXT_PUBLIC_databaseURL="https://<project>.firebasedatabase.app"
NEXT_PUBLIC_projectId="..."
NEXT_PUBLIC_storageBucket="..."
NEXT_PUBLIC_messagingSenderId="..."
NEXT_PUBLIC_appId="..."

IMAGEKIT_PUBLIC_KEY="public_xxx"
IMAGEKIT_PRIVATE_KEY="private_xxx" # a garder uniquement cote serveur
```
- La Realtime Database doit contenir `users-list` (utilisateurs) et `produits`.  
  Pour autoriser l acces admin, ajouter un objet sous `users-list/admin/{id}` avec `email`, `password`, `username` (et eventuellement `role:"admin"`).

3) Lancer le mode dev  
`npm run dev`

4) Build et lancement production  
`npm run build` puis `npm start`

5) Linter  
`npm run lint`

## Notes

- Les sessions sont stockees dans `localStorage` (`user` ou `useradmin`) et un flag `loginTime` dans `sessionStorage`.
- L upload ImageKit compresse les images en WebP (800px max, < 1 Mo) avant l envoi signe via `/api/upload-auth`.
- Les composants utilisent majoritairement des client components (`"use client"`) pour exploiter Firebase et les stores.
