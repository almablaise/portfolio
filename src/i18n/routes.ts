import { getCollection } from 'astro:content';
import fs from 'node:fs';
import nodePath from 'node:path';

const hasImage = (src?: string) => !!src && fs.existsSync(nodePath.join(process.cwd(), 'public', src));
import { languages, defaultLang, type Lang } from './ui';

// Anglais à la racine (/), français sous /fr, espagnol sous /es
export const localeParams = () =>
  (Object.keys(languages) as Lang[]).map((l) => ({
    params: { locale: l === defaultLang ? undefined : l },
    props: { lang: l },
  }));

export async function projectsFor(lang: Lang) {
  const all = await getCollection('projects', (p) => p.id.startsWith(`${lang}/`) && !p.data.draft);
  return all
    .map((p) => ({ ...p, slug: p.id.split('/')[1] }))
    // Les projets avec visuel passent avant ceux qui n'en ont pas encore
    .sort((a, b) => Number(hasImage(b.data.cover)) - Number(hasImage(a.data.cover)) || a.data.order - b.data.order);
}
