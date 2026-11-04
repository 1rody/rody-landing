import { c as head, m as attr } from "../../chunks/server.js";
import { t as favicon_default } from "../../chunks/favicon.js";
import "../../chunks/index-server.js";
import "../../chunks/state.js";
import "lenis";
// src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children } = $$props;
		head("12qhfyh", $$renderer, ($$renderer) => {
			$$renderer.push(`<link rel="icon"${attr("href", favicon_default)}/>`);
		});
		children($$renderer);
		$$renderer.push(`<!---->`);
	});
}
export { _layout as default };

//# sourceMappingURL=_layout.svelte.js.map