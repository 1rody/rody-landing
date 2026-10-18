import {error} from "@sveltejs/kit";
import type { PageLoad } from "./$types";

const papers = import.meta.glob('/src/lib/papers/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

export const load: PageLoad = ({ params }) => {
  const path = `/src/lib/papers/${params.slug}.md`;
  const content = papers[path];

  if (!content) {
    throw error(404, 'Paper não encontrado');
  }

  return {
    content,
    slug: params.slug
  };
};