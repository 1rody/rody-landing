

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CrgJRIo1.js","_app/immutable/chunks/AJ2Ttl78.js","_app/immutable/chunks/BO9fGsDu.js"];
export const stylesheets = ["_app/immutable/assets/2.x1XGuNl0.css"];
export const fonts = [];
