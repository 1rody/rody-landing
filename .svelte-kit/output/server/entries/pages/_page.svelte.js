import { a as derived, d as getContext, g as fallback, h as clsx, m as attr, o as element, r as attributes, s as ensure_array_like, t as attr_class, u as spread_props, v as to_array, y as escape_html } from "../../chunks/server.js";
import { t as favicon_default } from "../../chunks/favicon.js";
import "../../chunks/index-server.js";
// node_modules/@lucide/svelte/dist/utils/defaultAttributes.js
/**
* @file
* @license @lucide/svelte v1.63.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
};
// node_modules/@lucide/svelte/dist/utils/mergeClasses.js
/**
* @file
* @license @lucide/svelte v1.63.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
/**
* Merges classes into a single string
*
* @param {array} classes
* @returns {string} A string of classes
*/
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
// node_modules/@lucide/svelte/dist/utils/buildLucideIconNode.js
/**
* @file
* @license @lucide/svelte v1.63.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
function isDefined(value) {
	return value !== null && value !== void 0;
}
/**
* Creates a Lucide icon node (an svgson-like format) from a Lucide icon object.
*
* @param icon The icon to build.
* @param params Additional build parameters.
*/
function buildLucideIconNode(icon, params = {}) {
	const attributeNames = params.attributeNames ?? {};
	const getAttributeName = (attributeName) => attributeNames[attributeName] ?? attributeName;
	const viewBoxWidth = icon.size ?? icon.width ?? defaultAttributes["width"];
	const viewBoxHeight = icon.size ?? icon.height ?? defaultAttributes["height"];
	const aliasClassNames = icon.aliases?.filter((alias) => typeof alias === "string" && alias.trim() !== "").map((alias) => `lucide-${alias}`) ?? [];
	const iconClassNames = [...icon.name ? [`lucide-${icon.name}`] : [], ...aliasClassNames];
	const classNamesFromClassName = params.className?.split(" ").filter(Boolean) ?? [];
	const className = params.includeDefaultClasses === false ? mergeClasses(...classNamesFromClassName) : mergeClasses("lucide", ...iconClassNames, ...classNamesFromClassName);
	const calculatedStrokeWidth = params.absoluteStrokeWidth ? Number(params.strokeWidth ?? defaultAttributes["stroke-width"]) * Number(icon.size ?? icon.width ?? defaultAttributes["width"]) / Number(params.size ?? params.width ?? defaultAttributes["width"]) : params.strokeWidth ?? defaultAttributes["stroke-width"];
	return [
		"svg",
		{
			...Object.entries(defaultAttributes).reduce((attrs, [attrName, value]) => {
				attrs[getAttributeName(attrName)] = value;
				return attrs;
			}, {}),
			..."color" in params && params.color && { [getAttributeName("stroke")]: params.color },
			..."size" in params && isDefined(params.size) && {
				[getAttributeName("width")]: params.size,
				[getAttributeName("height")]: params.size
			},
			..."width" in params && isDefined(params.width) && { [getAttributeName("width")]: params.width },
			..."height" in params && isDefined(params.height) && { [getAttributeName("height")]: params.height },
			[getAttributeName("stroke-width")]: calculatedStrokeWidth,
			...className && { [getAttributeName("class")]: className },
			[getAttributeName("viewBox")]: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
			...params.hasA11yProp === false ? { [getAttributeName("aria-hidden")]: "true" } : {},
			..."attributes" in params && params.attributes
		},
		icon.node.map((child) => {
			const [name, attrs, children] = child;
			const nextAttrs = params.nonScalingStroke ? {
				[getAttributeName("vector-effect")]: "non-scaling-stroke",
				...attrs
			} : attrs;
			return children ? [
				name,
				nextAttrs,
				children
			] : [name, nextAttrs];
		})
	];
}
// node_modules/@lucide/svelte/dist/utils/hasA11yProp.js
/**
* @file
* @license @lucide/svelte v1.63.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
/**
* Check if a component has an accessibility prop
*
* @param {object} props
* @returns {boolean} Whether the component has an accessibility prop
*/
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
	return false;
};
// node_modules/@lucide/svelte/dist/context.js
/**
* @file
* @license @lucide/svelte v1.63.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LucideContext = Symbol("lucide-context");
var getLucideContext = () => getContext(LucideContext);
// node_modules/@lucide/svelte/dist/Icon.svelte
function Icon($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const globalProps = getLucideContext() ?? {};
		const { color = globalProps.color ?? "currentColor", size = globalProps.size ?? 24, width = size, height = size, strokeWidth = globalProps.strokeWidth ?? 2, absoluteStrokeWidth = globalProps.absoluteStrokeWidth ?? false, nonScalingStroke = globalProps.nonScalingStroke ?? false, iconNode = [], icon = {
			node: iconNode,
			aliases: [],
			size: 24
		}, class: propsClass, children, $$slots, $$events, ...props } = $$props;
		const hasAccessibleProp = derived(() => Boolean(children) || hasA11yProp(props));
		const $$d = derived(() => buildLucideIconNode(icon, {
			color,
			width,
			height,
			strokeWidth,
			absoluteStrokeWidth,
			nonScalingStroke,
			className: mergeClasses("lucide-icon", globalProps.class),
			hasA11yProp: hasAccessibleProp(),
			attributes: props
		})), $$derived_array = derived(() => to_array($$d(), 3)), svgAttributes = derived(() => $$derived_array()[1]), builtIconNode = derived(() => fallback($$derived_array()[2], () => [], true));
		const iconAttributes = derived(() => ({
			...svgAttributes(),
			class: [...svgAttributes().class.split(" "), propsClass]
		}));
		$$renderer.push(`<svg${attributes({ ...iconAttributes() }, void 0, void 0, void 0, 3)}><!--[-->`);
		const each_array = ensure_array_like(builtIconNode());
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let [tag, attrs] = each_array[$$index];
			element($$renderer, tag, () => {
				$$renderer.push(`${attributes({ ...attrs }, void 0, void 0, void 0, 3)}`);
			});
		}
		$$renderer.push(`<!--]-->`);
		children?.($$renderer);
		$$renderer.push(`<!----></svg>`);
	});
}
// node_modules/@lucide/svelte/dist/icons/menu.svelte
var __iconData = {
	"name": "menu",
	"size": 24,
	"node": [
		["path", { "d": "M4 5h16" }],
		["path", { "d": "M4 12h16" }],
		["path", { "d": "M4 19h16" }]
	]
};
__iconData.node;
function Menu($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([props, { icon: __iconData }]));
}
// src/lib/components/layout/landing/NavBar.svelte
function NavBar($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const playHover = () => {
			const audio = new Audio("/assets/sounds/hover.mp3");
			audio.volume = .2;
			audio.play().catch(() => {});
		};
		$$renderer.push(`<header id="topbar" translate="no" class="w-full show-down-anim flex items-center justify-center mix-blend-difference fixed p-2 z-30"><nav class="flex items-center uppercase text-sm justify-between lg:px-8 font-black w-full border-b-1 p-2"><div><a href="/"><img${attr("src", favicon_default)} alt="Logo"/></a></div> <div class="mr-5"><button aria-label="open menu">`);
		Menu($$renderer, { class: `text-white duration-200 transform translate-x-full ` });
		$$renderer.push(`<!----></button></div></nav></header> <aside id="menubar"${attr_class(`z-50 p-10 bg-white right-0 fixed h-screen lg:w-80 md:w-80 w-full translate-x-300 duration-500`)}><div class="flex items-center gap-3 w-full justify-center"><p class="text-3xl font-black">NAVIGATION</p> <div class="w-full items-center justify-center border-1 border-black border-dashed"></div> <button id="menubutton" class="text-black lg:hidden md:hidden sm:hidden block font-bold py-2 px-4 active:scale-95 duration-200 hover:bg-black hover:text-white transition-colors duration-300">`);
		Menu($$renderer, {});
		$$renderer.push(`<!----></button></div> <ol translate="no" class="flex flex-col gap-4 p-10 text-2xl"><li class="hover:bg-gray-200 active:scale-95 w-fit flex duration-200"><a href="#about">ABOUT</a></li> <li class="hover:bg-gray-200 active:scale-95 w-fit flex duration-200"><a href="#projects">PROJECTS</a></li> <li class="hover:bg-gray-200 active:scale-95 w-fit flex duration-200"><a href="/socials">SOCIALS</a></li> <li class="hover:bg-gray-200 active:scale-95 w-fit flex duration-200"><a href="/papers">PAPERS</a></li></ol> <div class="flex items-center gap-3 w-full justify-center"><p class="text-3xl font-black">GET IN CONTACT</p> <div class="w-full items-center justify-center border-1 border-black border-dashed"></div></div> <ol class="flex flex-col gap-4 p-10 text-2xl"><li class="hover:bg-gray-200 active:scale-95 w-fit flex duration-200"><a href="/socials">Discord</a></li> <li class="hover:bg-gray-200 active:scale-95 w-fit flex duration-200"><a href="/socials"${attr_class(clsx(playHover))}>Linkedin</a></li></ol></aside>`);
	});
}
// src/lib/components/layout/landing/Footer.svelte
function Footer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const socials = [
			{
				name: "Github",
				url: "https://github.com/1R0-DY"
			},
			{
				name: "X",
				url: "https://x.com/1R0_DY"
			},
			{
				name: "Linkedin",
				url: "https://www.linkedin.com/in/rody-1r0-dy/"
			},
			{
				name: "Pinterest",
				url: "https://www.pinterest.com/1r0dy_/"
			}
		];
		$$renderer.push(`<footer id="footer" class="flex flex-col pt-40 pb-20 font-geist overflow-hidden text-dark bg-white text-base-invert items-center justify-center w-full"><h1 class="text-30xl text-center flex font-climate flex-nowrap uppercase font-black leading-none">Rody</h1> <section id="questions" class="text-dark p-5 lg:px-30 justify-end text-start mt-10 w-full border-black"><details class="border-b-1 border-t-1 border-black"><summary class="text-2xl p-4 font-black">WHAT ARE UI AND UX?</summary> <p class="p-4 text-lg">UI (User Interface) is what users see and interact with: the layout, visual elements, typography, colors, and interactive components. It focuses on how an interface looks and how its elements are presented.

            UX (User Experience) is how users experience and navigate an interface: its usability, accessibility, structure, and how easily they can accomplish their goals.

            Although closely related, they are not the same. A website can look visually appealing and still be difficult or frustrating to use.

            Good UX also depends on context and intent. An interface designed for specialists has different requirements and priorities than one intended for a general audience.

            Read more in my paper.</p></details> <details class="border-b-1 border-black"><summary class="text-2xl p-4 font-black">PROJECT SCOPE &amp; DEVELOPMENT PROCESS</summary> <p class="p-4 text-lg">I work on branding, UI/UX design, Figma wireframes and prototypes, and front-end development using technologies such as Next.js, Svelte, JavaScript, and TypeScript.

            My development process is structured around three main stages: <br/><br/> <strong>01. Discovery &amp; Project Scope</strong><br/> We define the project's objectives, requirements, target audience, and overall direction. You can also share references, inspirations, and examples to help establish the visual and functional expectations. <br/><br/> <strong>02. Wireframing &amp; Exploration</strong><br/> I explore different layouts, structures, and visual approaches, creating multiple wireframe concepts. From these explorations, I select and present the five strongest directions for your review. <br/><br/> <strong>03. UI Design &amp; Prototyping</strong><br/> Based on the selected direction, I develop the Figma prototype, refining the interface and interactions. This stage follows your existing brand guidelines and design system or includes creating a new visual identity and design system when needed.</p></details> <details class="border-b-1 border-black"><summary class="text-2xl p-4 font-black">PRICING &amp; SERVICES</summary> <p class="p-4 text-lg"><strong>UI/UX Design</strong><br/> Interface design following existing brand guidelines, including Figma wireframes and prototyping.<br/> USD 20 / BRL 80 <br/><br/> <strong>UX Improvements</strong><br/> Usability improvements, UX corrections, and experience refinements.<br/> USD 10 / BRL 30 (per page) <br/><br/> <strong>UI Development</strong><br/> Interface implementation, visual refinements, and additional UI components.<br/> USD 10 / BRL 30 (per page) <br/><br/> <strong>UI/UX Design + Branding</strong><br/> Complete UI/UX services, including brand identity, logo design, and design system creation.<br/> USD 60 / BRL 100 <br/><br/> <strong>Front-end Development</strong><br/> Front-end implementation only. UI/UX design and prototyping are not included.<br/> USD 10 / BRL 20 (per page) <br/><br/> <strong>Landing Page — Public Repository</strong><br/> Complete landing page project, including UI/UX design and front-end development. Source code delivered through a public repository.<br/> USD 80 / BRL 150 <br/><br/> <strong>Landing Page — Private Repository</strong><br/> Complete landing page project, including UI/UX design and front-end development. Source code delivered through a private, exclusive repository.<br/> USD 120 / BRL 180 <br/><br/> <strong>Software Engineering — Complete Front-end Project</strong><br/> Complete project development, from initial UI/UX planning and design to front-end implementation. Back-end development is not included. Repository visibility (public or private) is entirely up to you.<br/> USD 180 / BRL 500</p></details></section> <div class="link-section flex w-full items-center px-30 justify-center"><p class="w-full">© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} RODY.CITY All rights reserved.</p> <div translate="no" class="flex gap-4 lg:flex-nowrap flex-wrap items-center justify-center"><!--[-->`);
		const each_array = ensure_array_like(socials);
		for (let index = 0, $$length = each_array.length; index < $$length; index++) {
			let social = each_array[index];
			$$renderer.push(`<a class="border-b-1 border-white duration-200 lg:mt-0 mt-10 hover:bg-white hover:text-black"${attr("href", social.url)}>${escape_html(social.name)}</a>`);
		}
		$$renderer.push(`<!--]--></div></div></footer>`);
	});
}
// src/lib/components/sections/landing/Hero.svelte
function Hero($$renderer) {
	$$renderer.push(`<section id="hero" class="h-screen w-full flex flex-col items-center justify-center lg:justify-normal lg:justify-items-normal overflow-hidden"><p class="text-left flex lg:text-xl text-sm p-2 w-full uppercase lg:w-fit md:w-fit text-foreground md:hidden lg:hidden">Creating systems <br/> that adapt, evolve, expand and grow <br/> with you...</p> <h1 class="dark:text-white text-20xl lg:mt-20 flex items-center justify-center flex-wrap font-climate font-bold w-full z-2 overflow-hidden text-center uppercase start-show leading-none">rody'</h1> <div translate="no" class="z-40 h-fit duration-200 text-white p-4 gap-10 hidden lg:flex w-full px-10 justify-between"><a class="hover:bg-foreground hover:text-background" href="/socials">Socials</a> <a class="hover:bg-foreground hover:text-background" href="/papers">Papers</a> <a class="hover:bg-foreground hover:text-background" href="/linkedin">Linkedin</a> <a class="hover:bg-foreground hover:text-background" href="/linkedin">Resume</a></div> <div class="border-t-1 text-foreground uppercase lg:text-xl text-sm flex justify-between lg:p-10 p-2 w-full border-white/15 lg:h-1/2"><p class="text-left hidden md:flex lg:flex">Creating systems <br/> that adapt, evolve, expand and grow <br/> with you...</p> <p class="text-right p-2 w-full lg:w-fit md:w-fit lg:ml-0 ml-12">Minimalism isn't just remove details <br/> or making things pretty. <br/> It's the WHY of the element.</p></div></section>`);
}
// src/lib/components/sections/landing/misc/Stars.svelte
function Stars($$renderer) {
	$$renderer.push(`<section class="w-full items-center absolute z-10 justify-center flex overflow-hidden h-screen"><div class="pixel-sky opacity-50 overflow-hidden w-full"><div class="stars stars-2"></div> <div class="stars stars-3"></div> <div class="meteor m1"></div> <div class="meteor m2"></div> <div class="meteor m3"></div></div></section>`);
}
// src/lib/assets/backgrounds/misc/Stackbox.svg
var Stackbox_default = "/_app/immutable/assets/Stackbox.DXv5paDz.svg";
// src/lib/components/sections/landing/About.svelte
function About($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<section id="about" class="z-6 relative p-4 flex-col min-h-screen lg:sticky top-[2px] w-full flex items-center justify-center"><div class="bg-black w-full border-1 border-gray-400/20 flex rounded-xl h-screen items-center flex-col"><div translate="no" class="border-gray-400/20 border-b-1 flex justify-between font-pixel w-full text-white font-black p-2"><p>-</p> <p>WHOAMI</p> <p>□</p></div> <div class="w-full lg:flex-nowrap flex-wrap h-full text-white flex items-center justify-center"><section id="whoami" class="mt-4 p-5 pb-20 flex flex-col items-start justify-center"><p class="text-sm font-black uppercase text-gray-400 lg:text-left text-center lg:mb-0 mb-5">Rodolfo Rocha Falcao - Software engenierr</p> <h1 class="lg:text-6xl md:text-6xl text-4xl lg:text-left text-center font-geist font-black uppercase">Let’s bring <br/> your idea to life<span class="animate-pulse">_</span></h1> <article class="flex flex-col gap-8 lg:text-left mt-5 text-gray-200 text-center font-medium max-w-2xl text-lg"><p id="introduction">I'm Rodolfo, also known as Rody / 1rody.  
                                Software Engineering student at <a class="border-b-1 hover:bg-black font-black duration-200 hover:text-white" href="https://www.ucsal.br/">UCSal</a>, focused on front-end development and UI/UX design.</p> <p>I care about building simple, fast pages that work well on any screen and communicate clearly.  
                                My main stack is <strong>Next.js</strong> and <strong>React</strong>, but I also enjoy using <strong>Svelte</strong> when the project benefits from it.  
                                I spend most of my time refining interfaces, improving performance, and turning ideas into clean, usable products.</p> <p>Currently working on personal projects and experiments. From landing pages to small apps.  
                                You can check my <a class="border-b-1 hover:bg-black font-black duration-200 hover:text-white" href="#projects">resume</a> or jump straight to the <a class="border-b-1 hover:bg-black font-black duration-200 hover:text-white" href="#projects">projects section</a> below.</p></article></section> <div class="lg:w-1/3 md:w-1/4 w-full p-5 flex items-start justify-start flex-col"><img${attr("src", Stackbox_default)} class="w-250 mt-50 invert-100" alt="My tech stacks nextjs javascript typescript java figma"/></div></div></div></section>`);
	});
}
// src/lib/assets/backgrounds/projects/arkhan.png
var arkhan_default = "/_app/immutable/assets/arkhan.vf4L-_U0.png";
// src/lib/assets/backgrounds/projects/karasuBanner.png
var karasuBanner_default = "/_app/immutable/assets/karasuBanner.3a2Wqwge.png";
// src/lib/assets/backgrounds/projects/Unseen.png
var Unseen_default = "/_app/immutable/assets/Unseen.TpA4qjDc.png";
// src/lib/assets/backgrounds/PIXEL.svg
var PIXEL_default = "data:image/svg+xml,%3csvg%20width='1512'%20height='179'%20viewBox='0%200%201512%20179'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1310.06'%20y='74.7285'%20width='201.839'%20height='103.3'%20fill='white'/%3e%3crect%20x='1408.05'%20y='6.8457'%20width='103.947'%20height='68.134'%20fill='white'/%3e%3crect%20x='1206.12'%20y='6.59375'%20width='103.947'%20height='68.134'%20fill='white'/%3e%3crect%20x='547.11'%20y='68.1348'%20width='103.947'%20height='67.0351'%20fill='white'/%3e%3crect%20x='443.164'%20width='103.947'%20height='68.134'%20fill='white'/%3e%3crect%20x='804.455'%20y='68.1348'%20width='103.947'%20height='67.0351'%20fill='white'/%3e%3crect%20x='-14'%20y='65.9355'%20width='103.947'%20height='68.134'%20fill='white'/%3e%3crect%20x='443.164'%20y='68.1348'%20width='103.947'%20height='67.0351'%20fill='white'/%3e%3crect%20x='339.217'%20y='28.5723'%20width='103.947'%20height='68.134'%20fill='white'/%3e%3crect%20x='89.9463'%20width='103.947'%20height='68.134'%20fill='white'/%3e%3c/svg%3e";
// src/lib/components/sections/landing/Projects.svelte
function Projects($$renderer) {
	const projects = [
		{
			title: "Arkhan",
			description: "Arkhan is an security team division of nextfur (nextfur.net), the landing page now is down but the source is on my github.",
			image: arkhan_default,
			view: "https://www.github.com/1rody/arkhan-landing",
			concept: "/pageforconcept"
		},
		{
			title: "karasu",
			description: "Landing page for karasu.sh security team. ",
			image: karasuBanner_default,
			view: "https://www.karasu.sh",
			concept: "/pageforconcept"
		},
		{
			title: "Unseen",
			description: "Imagine a world... unseen is an plataform developed to unify email, calendar, LLM, notes and sync all of them between the apps.",
			image: Unseen_default,
			view: "https://www.unseen.domain",
			concept: "/pageforconcept"
		}
	];
	$$renderer.push(`<img${attr("src", PIXEL_default)} class="w-full z-9 relative -mb-20" alt="transition"/> <section id="projects" class="flex-col flex min-h-screen items-center justify-center overflow-hidden bg-white z-9 relative lg:p-20"><h2 class="font-pixel max-w-3/4 lg:text-7xl text-3xl mt-20 text-center">Why design, code or work with me?</h2> <p class="text-center mt-5 max-w-3/4">Great design is more than visuals. It’s about creating intuitive, impactful, memorable experiences and show it to the user...</p> <div id="project-section" class="relative mt-30 z-10 mb-10 flex w-full flex-col overflow-hidden items-center justify-center p-5 gap-40"><!--[-->`);
	const each_array = ensure_array_like(projects);
	for (let index = 0, $$length = each_array.length; index < $$length; index++) {
		let project = each_array[index];
		$$renderer.push(`<div${attr_class(`flex items-center flex-wrap lg:flex-nowrap w-full justify-center ${index % 2 === 1 ? "lg:flex-row-reverse flex-col lg:flex-nowrap lg:text-right" : ""}`)}><img${attr("alt", `${project.title} project image`)}${attr("src", project.image)} class="lg:max-w-1/2 duration-200 hover:scale-106 lg:max-h-150 lg:w-280 overflow-hidden lg:h-160 w-full"/> <div class="flex flex-col p-10 text-black"><h2 translate="no" class="lg:text-7xl uppercase text-4xl font-black">${escape_html(project.title)}</h2> <article${attr_class(`flex flex-col w-fit lg:text-2xl gap-8 justify-between ${index % 2 === 1 ? "flex-col lg:items-end lg:w-full max-w-full justify-end" : ""}`)}><p>${escape_html(project.description)}</p> <a class="bg-black p-7 text-white w-fit font-geist duration-200 active:scale-90 border-1 border-black hover:bg-white hover:text-black"${attr("href", project.view)}>See more</a></article></div></div>`);
	}
	$$renderer.push(`<!--]--></div> <div class="w-full pb-20 justify-center flex"></div></section>`);
}
// src/lib/components/sections/landing/Loading.svelte
function Loading($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<section translate="no" class="h-screen font-geist fade-in w-full flex-col z-50 fixed absolute items-center justify-center flex bg-black"><p class="flow-up-anim text-white font-black">RODY.CITY</p></section>`);
	});
}
// src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<title>RODY.CITY | WELCOME TO MY LAND ON WEB</title> <div class="progress z-50 fixed top-1"></div> `);
		Loading($$renderer, {});
		$$renderer.push(`<!----> `);
		NavBar($$renderer, {});
		$$renderer.push(`<!----> <main>`);
		Stars($$renderer, {});
		$$renderer.push(`<!----> `);
		Hero($$renderer, {});
		$$renderer.push(`<!----> `);
		About($$renderer, {});
		$$renderer.push(`<!----> `);
		Projects($$renderer, {});
		$$renderer.push(`<!----></main> `);
		Footer($$renderer, {});
		$$renderer.push(`<!---->`);
	});
}
export { _page as default };

//# sourceMappingURL=_page.svelte.js.map