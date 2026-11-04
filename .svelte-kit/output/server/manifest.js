export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	app_dir: "_app",
	app_path: "_app",
	assets: new Set(["assets/sounds/hover.mp3","assets/sounds/select.mp3","assets/sounds/swoosh.mp3","assets/sounds/click.mp3"]),
	mime_types: {".mp3":"audio/mpeg"},
	client: {start:"_app/immutable/entry/start.CjNT4mCg.js",app:"_app/immutable/entry/app.Bwl8IjPg.js",imports:["_app/immutable/entry/start.CjNT4mCg.js","_app/immutable/entry/payload.DSmR2FwN.js","_app/immutable/chunks/lcSWd0bi.js","_app/immutable/chunks/Z-8lzNS2.js","_app/immutable/chunks/AJ2Ttl78.js","_app/immutable/chunks/CbADPH2h.js","_app/immutable/chunks/D-Catf2c.js","_app/immutable/chunks/CvlLlHQ2.js","_app/immutable/entry/app.Bwl8IjPg.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
	
	nodes: [
		__memo(() => import('./nodes/0.js')),
		__memo(() => import('./nodes/1.js')),
		__memo(() => import('./nodes/2.js')),
		__memo(() => import('./nodes/3.js')),
		__memo(() => import('./nodes/4.js'))
	],
	remotes: {
		
	},
	routes: [
		{
			id: "/",
			pattern: /^\/$/,
			params: [],
			page: { layouts: [0,], errors: [1,], leaf: 2 },
			endpoint: null
		},
		{
			id: "/papers",
			pattern: /^\/papers\/?$/,
			params: [],
			page: { layouts: [0,], errors: [1,], leaf: 4 },
			endpoint: null
		},
		{
			id: "/paper/[slug]",
			pattern: /^\/paper\/([^/]+?)\/?$/,
			params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
			page: { layouts: [0,], errors: [1,], leaf: 3 },
			endpoint: null
		}
	],
	prerendered_routes: new Set([]),
	matchers: async () => {
		return {};
	},
	server_assets: {}
}
})();
