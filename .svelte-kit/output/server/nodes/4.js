

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/papers/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.CyMOh7ZE.js","_app/immutable/chunks/AJ2Ttl78.js"];
export const stylesheets = [];
export const fonts = [];
