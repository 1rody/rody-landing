import * as universal from '../entries/pages/paper/_slug_/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/paper/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/paper/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/3.CUU338xY.js","_app/immutable/chunks/AJ2Ttl78.js","_app/immutable/chunks/CbADPH2h.js","_app/immutable/chunks/CvlLlHQ2.js"];
export const stylesheets = ["_app/immutable/assets/3.nNRn7XR0.css"];
export const fonts = [];
