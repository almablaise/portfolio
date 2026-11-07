# Portfolio — Alma Blaise

Site portfolio en 3 langues (anglais par défaut, français `/fr`, espagnol `/es`), construit avec [Astro](https://astro.build) et hébergé sur Vercel.

## Où modifier quoi

| Je veux… | Fichier |
|---|---|
| Changer un texte du site (accueil, à propos, boutons…) | `src/i18n/ui.ts` (une section par langue : `en`, `fr`, `es`) |
| Ajouter / modifier un projet | `src/content/projects/en/<projet>.md` + la même chose dans `fr/` et `es/` |
| Mon parcours, mes compétences, mes avis clients, mon e-mail | `src/data/site.ts` |
| Ajouter des images | dossier `public/images/` (voir ci-dessous) |

## Ajouter un projet

1. Copie un fichier existant, par ex. `src/content/projects/en/allride.md`, et renomme-le (`mon-projet.md`) — en minuscules, avec des tirets.
2. Remplis l'en-tête : `title`, `summary`, `tags`, `category` (`ux`, `ui`, `graphic`, `branding`), `order` (ordre d'affichage), `featured: true` pour l'afficher sur l'accueil, `cover` (chemin de l'image).
3. Sous l'en-tête, écris l'étude de cas en texte simple (`## Titre` pour les sections). Pour une image : `![description](/images/projects/mon-image.jpg)`.
4. Fais pareil dans `fr/` et `es/` avec le **même nom de fichier**.

Si une image n'existe pas encore, le site affiche un bloc gris « Visuel à ajouter ».

## Images attendues

- `public/images/portrait.jpg` — photo de profil (carrée)
- `public/images/illustration.png` — l'illustration de l'accueil
- `public/images/projects/<projet>.jpg` — une couverture par projet (format paysage ~1350×735)
- `public/images/about/team-1.jpg`, `team-2.jpg`, `team-3.jpg` — photos en équipe / en atelier
- `public/cv-alma-blaise.pdf` — le CV téléchargeable

⚠️ Les images actuelles sont des découpes basse définition des maquettes Figma : à remplacer par des exports HD (Figma → sélectionne l'image → *Export* → JPG ×2) en gardant le même nom de fichier.

## Avis clients

Dans `src/data/site.ts` → `testimonials`. Uniquement de vrais avis, avec l'accord du client. Remplace le texte, puis enlève `placeholder: true`. Pour masquer un avis : `show: false`.

## Lancer le site sur son ordinateur (optionnel)

```bash
npm install
npm run dev      # puis ouvrir http://localhost:4321
```

Chaque modification envoyée sur GitHub (branche `main`) est mise en ligne automatiquement par Vercel.
