// empty during dev
export const immutable = [];
export const prerendered = [];

export const assets = [
	{"path":"assets/sounds/hover.mp3"},
	{"path":"assets/sounds/select.mp3"},
	{"path":"assets/sounds/swoosh.mp3"},
	{"path":"assets/sounds/click.mp3"}
];

export const routes = [
	{"id":"/","page":true,"endpoint":false},
	{"id":"/papers","page":true,"endpoint":false},
	{"id":"/paper/[slug]","page":true,"endpoint":false}
];