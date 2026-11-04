import { m as attr, s as ensure_array_like, y as escape_html } from "../../../chunks/server.js";
// src/lib/assets/icons/pfp.jpg
var pfp_default = "/_app/immutable/assets/pfp.DfLOcymg.jpg";
// src/lib/components/sections/papers/Hero.svelte
function Hero($$renderer) {
	$$renderer.push(`<header class="flex items-center flex-col font-departure font-bold"><section id="profile-content" class="flex w-full items-center justify-center"><div class="flex gap-10 flex-col items-center justify-center lg:w-1/3 w-full"><article class="border-1 w-full border-gray-200/10 flex flex-col"><h3 class="bg-gray-100 text-black flex w-fit mb-5 underline"><img src="/assets/icons/Whoami.svg"${attr("width", 20)}${attr("height", 20)} alt="Whoami"/> WHOAMI</h3> <p class="max-w-3/3 p-5 dark:text-white text-black">-> These are my papers, kept in an old ascii / zine style. Settle in and read through my notes and research.</p></article></div></section></header>`);
}
// src/lib/components/sections/papers/Papers.svelte
function Papers($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const papers = [
			{
				name: "Librewolf",
				slug: "librewolf",
				id: "1",
				post_date: "12/08/2026"
			},
			{
				name: "Why async - renewed",
				slug: "async2",
				id: "2",
				post_date: "01/09/2026"
			},
			{
				name: "Java basics",
				slug: "java",
				id: "3",
				post_date: "11/09/2026"
			},
			{
				name: "Here my friends websites",
				slug: "friends",
				id: "4",
				post_date: "01/08/2026"
			},
			{
				name: "How setup a Minecraft server",
				slug: "mc-server",
				id: "11",
				post_date: "30/08/2025"
			},
			{
				name: "JS/TS diferences",
				slug: "js-ts",
				id: "12",
				post_date: "30/08/2025"
			},
			{
				name: "Why use async functions?",
				slug: "async",
				id: "13",
				post_date: "30/08/2025"
			},
			{
				name: "the diference of UI and UX",
				slug: "ui-ux",
				id: "14",
				post_date: "30/08/2025"
			}
		];
		$$renderer.push(`<section id="papers-container" class="flex items-center flex-col font-departure font-bold"><section id="profile-content" class="flex w-full items-center justify-center"><div class="flex gap-10 flex-col items-center justify-center lg:w-1/3 w-full"><article class="border-1 w-full dark:border-gray-200/10 border-gray-400/30 flex flex-col"><ol class="flex gap-3 w-full flex-col scale-75 lg:scale-100 paper-cli flex-wrap items-left p-5"><!--[-->`);
		const each_array = ensure_array_like(papers);
		for (let index = 0, $$length = each_array.length; index < $$length; index++) {
			let papers = each_array[index];
			$$renderer.push(`<li><a${attr("href", `/paper/${papers.slug}`)} class="flex flex-col w-fit hover:gap-5 dark:text-gray-800 text-black text-left transition-all duration-200"><span class="font-medium">${escape_html(papers.post_date)} | <span class="text-black hover:text-white hover:bg-black dark:hover:bg-gray-100 dark:hover:text-black dark:text-gray-100">[${escape_html(papers.name)}]</span></span></a></li>`);
		}
		$$renderer.push(`<!--]--></ol></article></div></section></section>`);
	});
}
// src/lib/components/sections/papers/Profile.svelte
function Profile$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<main class="flex items-center flex-col font-departure font-bold"><section id="profile-header" class="flex dark:text-white text-black lg:w-1/3 w-full text-5xl items-center justify-center"><div class="border-b-1 w-2/4 dark:border-gray-200/10 border-b-gray-300/50 p-1"></div> <p>RO_DY</p> <div class="border-b-1 w-2/4 dark:border-gray-200/10 border-b-gray-300/50 p-1"></div></section> <section id="profile-content" class="flex mb-10 mt-20 w-full items-center justify-center"><div class="flex gap-10 flex-col items-center dark:text-white text-black justify-center lg:w-1/3 w-full"><article class="border-1 w-full dark:border-gray-200/10 border-gray-300/50 flex flex-col"><div class="flex border-b-1 dark:border-gray-200/10 border-b-gray-300/50 p-3 mb-5 justify-between w-full"><h2>[0x00]</h2> <p>RODY</p></div> <div class="p-3"><p>You <span class="text-gray-300">rearched</span> the <span class="text-red-500">farlands</span>... <br/> here the world is under construction, under an OLD and frogotten web, an nostalgic style in a modern way of view. <br/><br/> <a class="hover:text-red-500" href="/">- back to landing</a><br/></p></div></article> <article class="border-1 w-full dark:border-gray-200/10 border-gray-300/50 flex flex-col"><div class="flex border-b-1 dark:border-gray-200/10 border-b-gray-200/30 p-3 mb-5 justify-between w-full"><h2>[DC]</h2> <p>RODY.CITY</p></div> <div class="p-3"><p>Wanna talk with me?, play games or just see how i code? check my discord server! <br/><br/> <a class="hover:text-red-500" href="https://discord.gg/aM8Fc86ewR">- discord server</a><br/></p></div></article></div></section></main>`);
	});
}
// src/lib/components/sections/papers/windows/Profile.svelte
function Profile($$renderer) {
	$$renderer.push(`<div class="absolute top-5 scale-70 font-pixel hidden lg:flex dark:text-white left-10 lg:left-5 mt-10"><section class="border-1 dark:border-gray-200/10 border-gray-300/50"><div class="p-3 flex items-center justify-between"><p>ME.jpg</p> <button>X</button></div> <div class="p-3 no-select"><img alt="Profilepic"${attr("src", pfp_default)}/></div></section></div>`);
}
// src/lib/components/sections/papers/windows/Socials.svelte
function Socials($$renderer) {
	$$renderer.push(`<section class="socials-window hidden lg:flex flex-col font-departure font-bold z-50 lg:scale-100 container-articles absolute m-2 text-sm right-10 top-10 nav-pc backdrop-blur-3xl md:scale-75 items-center justify-center text-left flex flex-col"><nav class="w-full flex-nowrap flex items-center justify-between lg:pr-5 lg:pl-5 border-1 bg-gray-950/30 dark:border-gray-200/10 border-gray-300/50 cursor-grab active:cursor-grabbing"><p class="text-sm dark:text-white text-nowrap">rody.city — ~/Socials</p> <div class="flex gap-3"><p class="text-nowrap"><a href="/">-</a></p> <p class="text-nowrap"><button type="button">x</button></p></div></nav> <div class="flex flex-wrap p-10 flex-col lg:flex-nowrap border-1 w-full dark:border-gray-200/10 border-gray-300/50"><pre class="font-departure text-xs text-sm/6 text-red-500">
    ██████╗  ██████╗ ██████╗ ██╗   ██╗
    ██╔══██╗██╔═══██╗██╔══██╗╚██╗ ██╔╝
    ██████╔╝██║   ██║██║  ██║ ╚████╔╝   
    ██║  ██║╚██████╔╝██████╔╝   ██║   
    ╚═╝  ╚═╝ ╚═════╝ ╚═════╝    ╚═╝
        </pre></div></section>`);
}
// src/lib/components/sections/papers/windows/Status.svelte
function Status($$renderer) {
	$$renderer.push(`<section class="font-departure dark:text-white font-bold z-50 container-articles absolute m-2 text-sm backdrop-blur-3xl lg:scale-100 items-center md:scale-75 justify-center text-left flex lg:left-20 nav-pc top-150 flex-col"><nav class="w-full flex-nowrap flex items-center z-50 justify-between lg:pr-5 lg:pl-5 border-1 bg-gray-950/30 dark:border-gray-200/10 border-gray-300/50 border-b-gray-950 cursor-grab active:cursor-grabbing"><p class="text-sm text-gray-300 text-nowrap">rody.city — STATUS</p> <div class="flex gap-3"><p class="text-nowrap"><a href="/">-</a></p> <p class="text-nowrap"><button type="button">x</button></p></div></nav> <div class="flex flex-wrap p-10 flex-col lg:flex-nowrap border-1 w-full dark:border-gray-200/10 border-gray-300/50"><div><p>$ ./status <br/><br/> <span class="text-red-500">host</span> ....... rody.city <br/> <span class="text-red-500">served</span> ..... vercel <br/> <span class="text-red-500">updated</span> .... 2026-08-12 <br/> <span class="text-red-500">engine</span> ..... NEXTJS <br/></p></div></div></section>`);
}
// src/routes/papers/+page.svelte
function _page($$renderer) {
	$$renderer.push(`<title>RODY LAND | PAPER TOWN</title> `);
	Socials($$renderer, {});
	$$renderer.push(`<!----> `);
	Profile($$renderer, {});
	$$renderer.push(`<!----> `);
	Status($$renderer, {});
	$$renderer.push(`<!----> <main class="text-white font-pixel">`);
	Profile$1($$renderer, {});
	$$renderer.push(`<!----> `);
	Hero($$renderer, {});
	$$renderer.push(`<!----> `);
	Papers($$renderer, {});
	$$renderer.push(`<!----></main>`);
}
export { _page as default };

//# sourceMappingURL=_page.svelte.js.map