import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Un fichier par projet et par langue : src/content/projects/<langue>/<projet>.md
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    category: z.array(z.enum(['ux', 'ui', 'graphic', 'branding'])),
    year: z.string().optional(),
    client: z.string().optional(),
    role: z.string().optional(),
    tools: z.string().optional(),
    cover: z.string().optional(), // ex : /images/projects/allride.jpg
    order: z.number().default(99), // plus petit = affiché en premier
    featured: z.boolean().default(false), // affiché sur l'accueil
    draft: z.boolean().default(false), // true = masqué du site (projet pas encore prêt)
  }),
});

export const collections = { projects };
