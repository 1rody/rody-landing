import { a as derived, d as getContext, f as hasContext, h as clsx, i as bind_props, m as attr, n as attr_style, o as element, p as setContext, r as attributes, s as ensure_array_like, t as attr_class, u as spread_props, y as escape_html } from "../../../../chunks/server.js";
import "../../../../chunks/index-server.js";
import Slugger, { slug, default as Slugger$1 } from "github-slugger";
import { Lexer, Marked, Tokenizer } from "marked";
import { MemoryCache } from "@humanspeak/memory-cache";
import * as htmlparser2 from "htmlparser2";
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/A.svelte
function A($$renderer, $$props) {
	const { children, attributes: attributes$81 } = $$props;
	$$renderer.push(`<a${attributes({ ...attributes$81 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></a>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Abbr.svelte
function Abbr($$renderer, $$props) {
	const { children, attributes: attributes$80 } = $$props;
	$$renderer.push(`<abbr${attributes({ ...attributes$80 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></abbr>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Address.svelte
function Address($$renderer, $$props) {
	const { children, attributes: attributes$79 } = $$props;
	$$renderer.push(`<address${attributes({ ...attributes$79 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></address>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Article.svelte
function Article($$renderer, $$props) {
	const { children, attributes: attributes$78 } = $$props;
	$$renderer.push(`<article${attributes({ ...attributes$78 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></article>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Aside.svelte
function Aside($$renderer, $$props) {
	const { children, attributes: attributes$77 } = $$props;
	$$renderer.push(`<aside${attributes({ ...attributes$77 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></aside>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Audio.svelte
function Audio($$renderer, $$props) {
	const { children, attributes: attributes$76 } = $$props;
	$$renderer.push(`<audio${attributes({ ...attributes$76 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></audio>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/B.svelte
function B($$renderer, $$props) {
	const { children, attributes: attributes$75 } = $$props;
	$$renderer.push(`<b${attributes({ ...attributes$75 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></b>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Bdi.svelte
function Bdi($$renderer, $$props) {
	const { children, attributes: attributes$74 } = $$props;
	$$renderer.push(`<bdi${attributes({ ...attributes$74 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></bdi>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Bdo.svelte
function Bdo($$renderer, $$props) {
	const { children, attributes: attributes$73 } = $$props;
	$$renderer.push(`<bdo${attributes({ ...attributes$73 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></bdo>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Blockquote.svelte
function Blockquote$1($$renderer, $$props) {
	const { children, attributes: attributes$72 } = $$props;
	$$renderer.push(`<blockquote${attributes({ ...attributes$72 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></blockquote>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Br.svelte
function Br$1($$renderer, $$props) {
	const { attributes: attributes$71 = {} } = $$props;
	$$renderer.push(`<br${attributes({ ...attributes$71 })}/>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Button.svelte
function Button($$renderer, $$props) {
	const { children, attributes: attributes$70 } = $$props;
	$$renderer.push(`<button${attributes({ ...attributes$70 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></button>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Canvas.svelte
function Canvas($$renderer, $$props) {
	const { children, attributes: attributes$69 } = $$props;
	$$renderer.push(`<canvas${attributes({ ...attributes$69 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></canvas>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Cite.svelte
function Cite($$renderer, $$props) {
	const { children, attributes: attributes$68 } = $$props;
	$$renderer.push(`<cite${attributes({ ...attributes$68 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></cite>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Code.svelte
function Code$1($$renderer, $$props) {
	const { children, attributes: attributes$67 } = $$props;
	$$renderer.push(`<code${attributes({ ...attributes$67 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></code>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Datalist.svelte
function Datalist($$renderer, $$props) {
	const { children, attributes: attributes$66 } = $$props;
	$$renderer.push(`<datalist${attributes({ ...attributes$66 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></datalist>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Dd.svelte
function Dd($$renderer, $$props) {
	const { children, attributes: attributes$65 } = $$props;
	$$renderer.push(`<dd${attributes({ ...attributes$65 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></dd>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Del.svelte
function Del$1($$renderer, $$props) {
	const { children, attributes: attributes$64 } = $$props;
	$$renderer.push(`<del${attributes({ ...attributes$64 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></del>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Details.svelte
function Details($$renderer, $$props) {
	const { children, attributes: attributes$63 } = $$props;
	$$renderer.push(`<details${attributes({ ...attributes$63 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></details>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Dfn.svelte
function Dfn($$renderer, $$props) {
	const { children, attributes: attributes$62 } = $$props;
	$$renderer.push(`<dfn${attributes({ ...attributes$62 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></dfn>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Dialog.svelte
function Dialog($$renderer, $$props) {
	const { children, attributes: attributes$61 } = $$props;
	$$renderer.push(`<dialog${attributes({ ...attributes$61 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></dialog>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Div.svelte
function Div($$renderer, $$props) {
	const { children, attributes: attributes$60 } = $$props;
	$$renderer.push(`<div${attributes({ ...attributes$60 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></div>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Dl.svelte
function Dl($$renderer, $$props) {
	const { children, attributes: attributes$59 } = $$props;
	$$renderer.push(`<dl${attributes({ ...attributes$59 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></dl>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Dt.svelte
function Dt($$renderer, $$props) {
	const { children, attributes: attributes$58 } = $$props;
	$$renderer.push(`<dt${attributes({ ...attributes$58 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></dt>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Em.svelte
function Em$1($$renderer, $$props) {
	const { children, attributes: attributes$57 } = $$props;
	$$renderer.push(`<em${attributes({ ...attributes$57 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></em>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Embed.svelte
function Embed($$renderer, $$props) {
	const { attributes: attributes$56 } = $$props;
	$$renderer.push(`<embed${attributes({ ...attributes$56 })} onload="this.__e=event" onerror="this.__e=event"/>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Fieldset.svelte
function Fieldset($$renderer, $$props) {
	const { children, attributes: attributes$55 } = $$props;
	$$renderer.push(`<fieldset${attributes({ ...attributes$55 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></fieldset>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Footer.svelte
function Footer($$renderer, $$props) {
	const { children, attributes: attributes$54 } = $$props;
	$$renderer.push(`<footer${attributes({ ...attributes$54 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></footer>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Form.svelte
function Form($$renderer, $$props) {
	const { children, attributes: attributes$53 } = $$props;
	$$renderer.push(`<form${attributes({ ...attributes$53 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></form>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/H1.svelte
function H1($$renderer, $$props) {
	const { children, attributes: attributes$52 } = $$props;
	$$renderer.push(`<h1${attributes({ ...attributes$52 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></h1>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/H2.svelte
function H2($$renderer, $$props) {
	const { children, attributes: attributes$51 } = $$props;
	$$renderer.push(`<h2${attributes({ ...attributes$51 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></h2>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/H3.svelte
function H3($$renderer, $$props) {
	const { children, attributes: attributes$50 } = $$props;
	$$renderer.push(`<h3${attributes({ ...attributes$50 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></h3>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/H4.svelte
function H4($$renderer, $$props) {
	const { children, attributes: attributes$49 } = $$props;
	$$renderer.push(`<h4${attributes({ ...attributes$49 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></h4>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/H5.svelte
function H5($$renderer, $$props) {
	const { children, attributes: attributes$48 } = $$props;
	$$renderer.push(`<h5${attributes({ ...attributes$48 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></h5>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/H6.svelte
function H6($$renderer, $$props) {
	const { children, attributes: attributes$47 } = $$props;
	$$renderer.push(`<h6${attributes({ ...attributes$47 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></h6>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Header.svelte
function Header($$renderer, $$props) {
	const { children, attributes: attributes$46 } = $$props;
	$$renderer.push(`<header${attributes({ ...attributes$46 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></header>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Hgroup.svelte
function Hgroup($$renderer, $$props) {
	const { children, attributes: attributes$45 } = $$props;
	$$renderer.push(`<hgroup${attributes({ ...attributes$45 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></hgroup>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Hr.svelte
function Hr$1($$renderer, $$props) {
	const { attributes: attributes$44 } = $$props;
	$$renderer.push(`<hr${attributes({ ...attributes$44 })}/>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/I.svelte
function I($$renderer, $$props) {
	const { children, attributes: attributes$43 } = $$props;
	$$renderer.push(`<i${attributes({ ...attributes$43 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></i>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Iframe.svelte
function Iframe($$renderer, $$props) {
	const { children, attributes: attributes$42 } = $$props;
	$$renderer.push(`<iframe${attributes({ ...attributes$42 })} onload="this.__e=event" onerror="this.__e=event">`);
	children?.($$renderer);
	$$renderer.push(`<!----></iframe>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Img.svelte
function Img($$renderer, $$props) {
	const { attributes: attributes$41 } = $$props;
	$$renderer.push(`<img${attributes({ ...attributes$41 })} onload="this.__e=event" onerror="this.__e=event"/>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Input.svelte
function Input($$renderer, $$props) {
	const { attributes: attributes$40 } = $$props;
	$$renderer.push(`<input${attributes({ ...attributes$40 }, void 0, void 0, void 0, 4)}/>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Kbd.svelte
function Kbd($$renderer, $$props) {
	const { children, attributes: attributes$39 } = $$props;
	$$renderer.push(`<kbd${attributes({ ...attributes$39 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></kbd>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Label.svelte
function Label($$renderer, $$props) {
	const { children, attributes: attributes$38 } = $$props;
	$$renderer.push(`<label${attributes({ ...attributes$38 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></label>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Legend.svelte
function Legend($$renderer, $$props) {
	const { children, attributes: attributes$37 } = $$props;
	$$renderer.push(`<legend${attributes({ ...attributes$37 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></legend>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Li.svelte
function Li($$renderer, $$props) {
	const { children, attributes: attributes$36 } = $$props;
	$$renderer.push(`<li${attributes({ ...attributes$36 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></li>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Main.svelte
function Main($$renderer, $$props) {
	const { children, attributes: attributes$35 } = $$props;
	$$renderer.push(`<main${attributes({ ...attributes$35 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></main>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Mark.svelte
function Mark($$renderer, $$props) {
	const { children, attributes: attributes$34 } = $$props;
	$$renderer.push(`<mark${attributes({ ...attributes$34 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></mark>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Menu.svelte
function Menu($$renderer, $$props) {
	const { children, attributes: attributes$33 } = $$props;
	$$renderer.push(`<menu${attributes({ ...attributes$33 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></menu>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Meter.svelte
function Meter($$renderer, $$props) {
	const { children, attributes: attributes$32 } = $$props;
	$$renderer.push(`<meter${attributes({ ...attributes$32 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></meter>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Nav.svelte
function Nav($$renderer, $$props) {
	const { children, attributes: attributes$31 } = $$props;
	$$renderer.push(`<nav${attributes({ ...attributes$31 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></nav>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Ol.svelte
function Ol($$renderer, $$props) {
	const { children, attributes: attributes$30 } = $$props;
	$$renderer.push(`<ol${attributes({ ...attributes$30 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></ol>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Optgroup.svelte
function Optgroup($$renderer, $$props) {
	const { children, attributes: attributes$29 } = $$props;
	$$renderer.push(`<optgroup${attributes({ ...attributes$29 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----><!></optgroup>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Option.svelte
function Option($$renderer, $$props) {
	const { children, attributes } = $$props;
	$$renderer.option({ ...attributes }, ($$renderer) => {
		children?.($$renderer);
		$$renderer.push(`<!---->`);
	}, void 0, void 0, void 0, void 0, true);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Output.svelte
function Output($$renderer, $$props) {
	const { children, attributes: attributes$28 } = $$props;
	$$renderer.push(`<output${attributes({ ...attributes$28 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></output>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/P.svelte
function P($$renderer, $$props) {
	const { children, attributes: attributes$27 } = $$props;
	$$renderer.push(`<p${attributes({ ...attributes$27 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></p>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Param.svelte
function Param($$renderer, $$props) {
	const { attributes: attributes$26 } = $$props;
	$$renderer.push(`<param${attributes({ ...attributes$26 })}/>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Picture.svelte
function Picture($$renderer, $$props) {
	const { children, attributes: attributes$25 } = $$props;
	$$renderer.push(`<picture${attributes({ ...attributes$25 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></picture>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Pre.svelte
function Pre($$renderer, $$props) {
	const { children, attributes: attributes$24 } = $$props;
	$$renderer.push(`<pre${attributes({ ...attributes$24 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></pre>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Progress.svelte
function Progress($$renderer, $$props) {
	const { children, attributes: attributes$23 } = $$props;
	$$renderer.push(`<progress${attributes({ ...attributes$23 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></progress>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/S.svelte
function S($$renderer, $$props) {
	const { children, attributes: attributes$22 } = $$props;
	$$renderer.push(`<s${attributes({ ...attributes$22 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></s>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Samp.svelte
function Samp($$renderer, $$props) {
	const { children, attributes: attributes$21 } = $$props;
	$$renderer.push(`<samp${attributes({ ...attributes$21 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></samp>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Section.svelte
function Section($$renderer, $$props) {
	const { children, attributes: attributes$20 } = $$props;
	$$renderer.push(`<section${attributes({ ...attributes$20 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></section>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Select.svelte
function Select($$renderer, $$props) {
	const { children, attributes } = $$props;
	$$renderer.select({ ...attributes }, ($$renderer) => {
		children?.($$renderer);
		$$renderer.push(`<!---->`);
	}, void 0, void 0, void 0, void 0, true);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Small.svelte
function Small($$renderer, $$props) {
	const { children, attributes: attributes$19 } = $$props;
	$$renderer.push(`<small${attributes({ ...attributes$19 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></small>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Source.svelte
function Source($$renderer, $$props) {
	const { attributes: attributes$18 } = $$props;
	$$renderer.push(`<source${attributes({ ...attributes$18 })}/>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Span.svelte
function Span($$renderer, $$props) {
	const { children, attributes: attributes$17 } = $$props;
	$$renderer.push(`<span${attributes({ ...attributes$17 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></span>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Strong.svelte
function Strong$1($$renderer, $$props) {
	const { children, attributes: attributes$16 } = $$props;
	$$renderer.push(`<strong${attributes({ ...attributes$16 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></strong>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Sub.svelte
function Sub($$renderer, $$props) {
	const { children, attributes: attributes$15 } = $$props;
	$$renderer.push(`<sub${attributes({ ...attributes$15 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></sub>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Summary.svelte
function Summary($$renderer, $$props) {
	const { children, attributes: attributes$14 } = $$props;
	$$renderer.push(`<summary${attributes({ ...attributes$14 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></summary>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Sup.svelte
function Sup($$renderer, $$props) {
	const { children, attributes: attributes$13 } = $$props;
	$$renderer.push(`<sup${attributes({ ...attributes$13 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></sup>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Table.svelte
function Table$1($$renderer, $$props) {
	const { children, attributes: attributes$12 } = $$props;
	$$renderer.push(`<table${attributes({ ...attributes$12 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></table>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Tbody.svelte
function Tbody($$renderer, $$props) {
	const { children, attributes: attributes$11 } = $$props;
	$$renderer.push(`<tbody${attributes({ ...attributes$11 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></tbody>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Td.svelte
function Td($$renderer, $$props) {
	const { children, attributes: attributes$10 } = $$props;
	$$renderer.push(`<td${attributes({ ...attributes$10 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></td>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Textarea.svelte
function Textarea($$renderer, $$props) {
	const { attributes: attributes$9 } = $$props;
	$$renderer.push(`<textarea${attributes({ ...attributes$9 })}></textarea>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Tfoot.svelte
function Tfoot($$renderer, $$props) {
	const { children, attributes: attributes$8 } = $$props;
	$$renderer.push(`<tfoot${attributes({ ...attributes$8 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></tfoot>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Th.svelte
function Th($$renderer, $$props) {
	const { children, attributes: attributes$7 } = $$props;
	$$renderer.push(`<th${attributes({ ...attributes$7 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></th>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Thead.svelte
function Thead($$renderer, $$props) {
	const { children, attributes: attributes$6 } = $$props;
	$$renderer.push(`<thead${attributes({ ...attributes$6 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></thead>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Tr.svelte
function Tr($$renderer, $$props) {
	const { children, attributes: attributes$5 } = $$props;
	$$renderer.push(`<tr${attributes({ ...attributes$5 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></tr>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Track.svelte
function Track($$renderer, $$props) {
	const { attributes: attributes$4 } = $$props;
	$$renderer.push(`<track${attributes({ ...attributes$4 })} onload="this.__e=event" onerror="this.__e=event"/>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/U.svelte
function U($$renderer, $$props) {
	const { children, attributes: attributes$3 } = $$props;
	$$renderer.push(`<u${attributes({ ...attributes$3 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></u>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Ul.svelte
function Ul($$renderer, $$props) {
	const { children, attributes: attributes$2 } = $$props;
	$$renderer.push(`<ul${attributes({ ...attributes$2 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></ul>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/Var.svelte
function Var($$renderer, $$props) {
	const { children, attributes: attributes$1 } = $$props;
	$$renderer.push(`<var${attributes({ ...attributes$1 })}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></var>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/html/index.js
/**
* Default HTML tag renderer registry.
*
* Maps every supported HTML tag name (e.g. `'div'`, `'span'`) to its
* corresponding Svelte component.  The map is used by `SvelteMarkdown`
* when rendering raw HTML blocks embedded in markdown.
*
* Use the `allowHtmlOnly` / `excludeHtmlOnly` helpers (or replace
* individual entries with `null`) to restrict which tags are rendered.
*
* @module
*/
/**
* Default map of every supported HTML tag to its renderer component.
*
* Passed as the `html` key of `defaultRenderers`.  Override individual
* entries via the `renderers.html` prop on `SvelteMarkdown`.
*/
var Html = {
	a: A,
	abbr: Abbr,
	address: Address,
	article: Article,
	aside: Aside,
	audio: Audio,
	b: B,
	bdi: Bdi,
	bdo: Bdo,
	blockquote: Blockquote$1,
	br: Br$1,
	button: Button,
	canvas: Canvas,
	cite: Cite,
	code: Code$1,
	datalist: Datalist,
	dd: Dd,
	del: Del$1,
	details: Details,
	dfn: Dfn,
	dialog: Dialog,
	div: Div,
	dl: Dl,
	dt: Dt,
	em: Em$1,
	embed: Embed,
	fieldset: Fieldset,
	footer: Footer,
	form: Form,
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	h5: H5,
	h6: H6,
	header: Header,
	hgroup: Hgroup,
	hr: Hr$1,
	i: I,
	iframe: Iframe,
	img: Img,
	input: Input,
	kbd: Kbd,
	label: Label,
	legend: Legend,
	li: Li,
	main: Main,
	mark: Mark,
	menu: Menu,
	meter: Meter,
	nav: Nav,
	ol: Ol,
	optgroup: Optgroup,
	option: Option,
	output: Output,
	p: P,
	param: Param,
	picture: Picture,
	pre: Pre,
	progress: Progress,
	s: S,
	samp: Samp,
	section: Section,
	select: Select,
	small: Small,
	source: Source,
	span: Span,
	strong: Strong$1,
	sub: Sub,
	summary: Summary,
	sup: Sup,
	table: Table$1,
	tbody: Tbody,
	td: Td,
	textarea: Textarea,
	tfoot: Tfoot,
	th: Th,
	thead: Thead,
	tr: Tr,
	track: Track,
	u: U,
	ul: Ul,
	var: Var
};
// node_modules/@humanspeak/svelte-markdown/dist/utils/streaming-provenance.js
var mappedSource = (value, base = 0) => ({
	value,
	runs: value.length ? [{
		outputStart: 0,
		outputEnd: value.length,
		mode: "copy",
		sources: [{
			start: base,
			end: base + value.length
		}]
	}] : []
});
var sliceMapped = (view, start = 0, end = view.value.length) => {
	const runs = [];
	for (const run of view.runs) {
		const left = Math.max(start, run.outputStart);
		const right = Math.min(end, run.outputEnd);
		if (left >= right) continue;
		runs.push({
			...run,
			outputStart: left - start,
			outputEnd: right - start,
			sources: run.mode === "copy" ? [{
				start: run.sources[0].start + left - run.outputStart,
				end: run.sources[0].start + right - run.outputStart
			}] : run.sources
		});
	}
	return {
		value: view.value.slice(start, end),
		runs
	};
};
var concatMapped = (...views) => {
	let value = "";
	const runs = [];
	for (const view of views) {
		for (const run of view.runs) {
			const next = {
				...run,
				outputStart: run.outputStart + value.length,
				outputEnd: run.outputEnd + value.length
			};
			const last = runs.at(-1);
			if (last?.mode === "copy" && next.mode === "copy" && last.outputEnd === next.outputStart && last.sources[0].end === next.sources[0].start) runs[runs.length - 1] = {
				...last,
				outputEnd: next.outputEnd,
				sources: [{
					start: last.sources[0].start,
					end: next.sources[0].end
				}]
			};
			else runs.push(next);
		}
		value += view.value;
	}
	return {
		value,
		runs
	};
};
var replacementMapped = (value, input) => ({
	value,
	runs: value.length ? [{
		outputStart: 0,
		outputEnd: value.length,
		mode: input.runs.length ? "replacement" : "synthetic",
		sources: input.runs.flatMap((run) => run.sources)
	}] : []
});
var trimMapped = (view, endOnly = false) => {
	return sliceMapped(view, endOnly ? 0 : view.value.length - view.value.trimStart().length, view.value.trimEnd().length);
};
/** Replace by grammar match positions. Never reconcile by repeated text values. */
var replaceMapped = (view, pattern, replacement) => {
	const re = new RegExp(pattern.source, pattern.flags);
	const parts = [];
	let cursor = 0;
	let match;
	while (match = re.exec(view.value)) {
		parts.push(sliceMapped(view, cursor, match.index), replacement(match, sliceMapped(view, match.index, match.index + match[0].length)));
		cursor = match.index + match[0].length;
		if (!re.global) break;
		if (!match[0].length) throw new Error("Provenance adapter requires consuming replacements");
	}
	parts.push(sliceMapped(view, cursor));
	return concatMapped(...parts);
};
var assertMappedValue = (view, expected, rule) => {
	if (view.value !== expected) throw new Error(`Provenance adapter drift (${rule}): ${JSON.stringify(view.value)} != ${JSON.stringify(expected)}`);
	return view;
};
/** A collector is explicitly allocated by the opt-in caller. Nothing is stamped on tokens. */
var ProvenanceCollector = class {
	sidecars = /* @__PURE__ */ new WeakMap();
	complete = /* @__PURE__ */ new WeakSet();
	parents = /* @__PURE__ */ new WeakMap();
	references = /* @__PURE__ */ new WeakMap();
	counters = {
		mappedInputUnits: 0,
		projectedLeaves: 0,
		boundNodes: 0,
		capturedNodes: 0,
		captureCacheHits: 0
	};
	/** Tracer and cleanup call this before changing mappings or child topology. */
	invalidate(node) {
		if (!this.complete.delete(node)) return;
		this.parents.get(node)?.forEach((reference) => {
			const parent = reference.deref();
			if (parent) this.invalidate(parent);
			else this.parents.get(node)?.delete(reference);
		});
	}
	attach(parent, children) {
		let reference = this.references.get(parent);
		if (!reference) this.references.set(parent, reference = new WeakRef(parent));
		for (const child of children) {
			let parents = this.parents.get(child);
			if (!parents) this.parents.set(child, parents = /* @__PURE__ */ new Set());
			parents.add(reference);
		}
	}
	get(node) {
		return this.sidecars.get(node);
	}
	set(node, value) {
		this.invalidate(node);
		this.sidecars.set(node, value);
	}
	transfer(from, to) {
		const value = this.get(from);
		if (value) this.set(to, value);
	}
	/** Capture occurrences before adoption, including occurrences of identical tokens at different offsets. */
	capture(tokens) {
		return tokens.map((token) => this.captureNode(token));
	}
	captureNode(node) {
		if (this.complete.has(node)) {
			this.counters.captureCacheHits++;
			return this.get(node);
		}
		this.counters.capturedNodes++;
		for (const key of [
			"tokens",
			"items",
			"header"
		]) if (Array.isArray(node[key])) this.attach(node, node[key]);
		node.rows?.forEach((row) => this.attach(node, row));
		const own = this.get(node) ?? {
			exact: false,
			sourceSpans: []
		};
		if (own.text && !Array.isArray(node.tokens)) this.counters.projectedLeaves++;
		const result = {
			exact: own.exact,
			...own.opaque ? { opaque: true } : {},
			sourceSpans: own.sourceSpans,
			...own.raw ? { raw: own.raw } : {},
			...own.text ? { text: own.text } : {},
			...Array.isArray(node.tokens) ? { tokens: this.capture(node.tokens) } : {},
			...Array.isArray(node.items) ? { items: this.capture(node.items) } : {},
			...Array.isArray(node.header) ? { header: this.capture(node.header) } : {},
			...node.rows ? { rows: node.rows.map((row) => this.capture(row)) } : {}
		};
		this.sidecars.set(node, result);
		this.complete.add(node);
		return result;
	}
	/** Paired walk of changed roots only; bind AFTER clone/reuse, using pre-adoption occurrences. */
	bind(tokens, occurrences, start = 0) {
		const visit = (node, occurrence) => {
			if (this.complete.has(node) && this.get(node) === occurrence) return;
			this.counters.boundNodes++;
			this.set(node, occurrence);
			for (const key of [
				"tokens",
				"items",
				"header"
			]) {
				const children = node[key], maps = occurrence[key];
				if (Array.isArray(children) && maps) children.forEach((child, index) => visit(child, maps[index]));
			}
			node.rows?.forEach((row, i) => row.forEach((cell, j) => {
				if (occurrence.rows) visit(cell, occurrence.rows[i][j]);
			}));
			for (const key of [
				"tokens",
				"items",
				"header"
			]) if (Array.isArray(node[key])) this.attach(node, node[key]);
			node.rows?.forEach((row) => this.attach(node, row));
			this.complete.add(node);
		};
		for (let i = start; i < tokens.length; i++) visit(tokens[i], occurrences[i]);
	}
};
// node_modules/@humanspeak/svelte-markdown/dist/utils/streaming-text.js
function getMappedView(occurrence, text) {
	if (occurrence?.text?.value === text) return occurrence.text;
	if (occurrence?.raw?.value === text) return occurrence.raw;
}
var isTextLeaf = (token) => !token.tokens && !token.items && !Array.isArray(token.header) && typeof (token.text ?? token.raw) === "string";
/** Source positions are identities, not matches of visible strings. Allocated only when opted in. */
var StreamingTextLedger = class {
	source = "";
	pieces = [];
	nextPiece = 0;
	revealed = /* @__PURE__ */ new Map();
	revealedUnits = /* @__PURE__ */ new Map();
	metadata = /* @__PURE__ */ new WeakMap();
	projected = /* @__PURE__ */ new WeakMap();
	batchId = 0;
	counters = {
		projectedLeaves: 0,
		projectedUnits: 0,
		visitedNodes: 0,
		sourceUnits: 0
	};
	epoch;
	constructor(epoch, source = "") {
		this.epoch = epoch;
		this.source = source;
		this.add(0, source.length, "baseline");
	}
	add(start, end, change) {
		if (end > start) this.pieces.push({
			start,
			end,
			piece: this.nextPiece++,
			offset: 0,
			change,
			batchId: this.batchId
		});
		this.counters.sourceUnits += end - start;
	}
	locate(position) {
		let low = 0, high = this.pieces.length - 1;
		while (low <= high) {
			const middle = low + high >>> 1;
			const piece = this.pieces[middle];
			if (position < piece.start) high = middle - 1;
			else if (position >= piece.end) low = middle + 1;
			else return piece;
		}
	}
	origin(piece, position) {
		return `${piece.piece}:${piece.offset + position - piece.start}`;
	}
	/** Append is proportional to the new input. Patches inspect only their overwritten interval. */
	update(source, patch) {
		if (source === this.source) return;
		this.batchId++;
		if (!patch) this.add(this.source.length, source.length, "append");
		else {
			const oldLength = this.source.length;
			const start = patch.offset;
			const end = start + patch.value.length;
			const retained = [];
			for (const piece of this.pieces) if (piece.end <= start || piece.start >= end) retained.push(piece);
			else {
				if (piece.start < start) retained.push({
					...piece,
					end: start
				});
				if (piece.end > end) retained.push({
					...piece,
					start: end,
					offset: piece.offset + end - piece.start
				});
			}
			for (let position = start; position < Math.min(end, oldLength); position++) {
				const old = this.locate(position);
				if (source[position] === this.source[position]) retained.push({
					...old,
					start: position,
					end: position + 1,
					offset: old.offset + position - old.start
				});
				else this.revealed.delete(this.origin(old, position));
			}
			const changed = [];
			let cursor = start;
			while (cursor < Math.min(end, oldLength)) {
				if (source[cursor] === this.source[cursor]) {
					cursor++;
					continue;
				}
				const begin = cursor++;
				while (cursor < Math.min(end, oldLength) && source[cursor] !== this.source[cursor]) cursor++;
				changed.push({
					start: begin,
					end: cursor,
					piece: this.nextPiece++,
					offset: 0,
					change: "revision",
					batchId: this.batchId
				});
			}
			this.pieces = [...retained, ...changed].sort((a, b) => a.start - b.start);
			this.add(oldLength, Math.max(oldLength, start), "baseline");
			this.add(Math.max(oldLength, start), source.length, "append");
			this.counters.sourceUnits += patch.value.length;
		}
		this.source = source;
	}
	get(node) {
		return this.metadata.get(node);
	}
	prepare(tokens, collector, start = 0) {
		const pending = /* @__PURE__ */ new Set();
		const pendingUnits = /* @__PURE__ */ new Set();
		const visit = (node) => {
			const occurrence = collector.get(node);
			if (occurrence && this.projected.get(node) === occurrence) return;
			this.counters.visitedNodes++;
			if (occurrence) this.projected.set(node, occurrence);
			const token = node;
			const arrival = occurrence?.opaque ? this.projectArrival(occurrence, pendingUnits) : void 0;
			if (isTextLeaf(token)) this.project(node, occurrence, token.text ?? token.raw ?? "", pending, arrival);
			else if (arrival) this.project(node, occurrence, "", pending, arrival);
			token.tokens?.forEach(visit);
			token.items?.forEach(visit);
			if (Array.isArray(token.header)) token.header.forEach(visit);
			token.rows?.forEach((row) => row.forEach(visit));
		};
		for (let index = start; index < tokens.length; index++) visit(tokens[index]);
		for (const origin of pending) if (!this.revealed.has(origin)) this.revealed.set(origin, this.batchId);
		for (const unit of pendingUnits) if (!this.revealedUnits.has(unit)) this.revealedUnits.set(unit, this.batchId);
	}
	/** Re-mounting the same source span (a paragraph becoming a heading) is not an arrival. */
	projectArrival(occurrence, pendingUnits) {
		const ids = [];
		const changes = /* @__PURE__ */ new Set();
		for (const span of occurrence.sourceSpans) for (let position = span.start; position < span.end; position++) {
			const piece = this.locate(position);
			if (!piece) continue;
			ids.push(this.origin(piece, position));
			changes.add(piece.change);
		}
		if (!ids.length) return void 0;
		const unit = ids.join(",");
		const revealed = this.revealedUnits.get(unit);
		pendingUnits.add(unit);
		return Object.freeze({
			change: changes.has("revision") ? "revision" : changes.has("baseline") ? "baseline" : "append",
			batchId: revealed ?? this.batchId,
			revealedBeforeBatch: revealed !== void 0
		});
	}
	getContributors(run, output) {
		const sources = run.mode === "copy" ? [{
			start: run.sources[0].start + output - run.outputStart,
			end: run.sources[0].start + output - run.outputStart + 1
		}] : run.sources;
		const contributors = [];
		for (const span of sources) for (let position = span.start; position < span.end; position++) {
			const piece = this.locate(position);
			if (piece) contributors.push({
				id: this.origin(piece, position),
				piece
			});
		}
		return contributors;
	}
	projectRange(run, output, contributors) {
		const anchor = contributors[0];
		if (!anchor) return void 0;
		const change = contributors.some(({ piece }) => piece.change === "revision") ? "revision" : contributors.some(({ piece }) => piece.change === "baseline") ? "baseline" : "append";
		const revealedBeforeBatch = contributors.some(({ id }) => this.revealed.has(id));
		return Object.freeze({
			start: output,
			end: output + 1,
			originId: `${anchor.id}${run.mode === "copy" ? "" : `:out:${output - run.outputStart}`}`,
			change,
			batchId: revealedBeforeBatch ? Math.min(...contributors.map(({ id }) => this.revealed.get(id) ?? this.batchId)) : this.batchId,
			revealedBeforeBatch
		});
	}
	project(node, occurrence, text, pending, arrival) {
		this.counters.projectedLeaves++;
		const view = getMappedView(occurrence, text);
		const ranges = [];
		if (occurrence?.exact && view) for (const run of view.runs) for (let output = run.outputStart; output < run.outputEnd; output++) {
			this.counters.projectedUnits++;
			const contributors = this.getContributors(run, output);
			const range = this.projectRange(run, output, contributors);
			if (!range) continue;
			ranges.push(range);
			contributors.forEach(({ id }) => pending.add(id));
		}
		const exact = !!occurrence?.exact && !!view && ranges.length === text.length;
		this.metadata.set(node, Object.freeze({
			epoch: this.epoch,
			leafId: ranges[0]?.originId ?? `unknown:${this.counters.projectedLeaves}`,
			renderBatchId: this.batchId,
			provenance: exact ? "exact" : "unknown",
			ranges: Object.freeze(ranges),
			...arrival ? { arrival } : {}
		}));
	}
};
// node_modules/@humanspeak/svelte-markdown/dist/utils/streaming-text-context.js
var STREAMING_TEXT_CONTEXT = Symbol("svelte-markdown-streaming-text");
// node_modules/@humanspeak/svelte-markdown/dist/renderers/Blockquote.svelte
function Blockquote($$renderer, $$props) {
	const { children } = $$props;
	$$renderer.push(`<blockquote>`);
	children?.($$renderer);
	$$renderer.push(`<!----></blockquote>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/Br.svelte
function Br($$renderer) {
	$$renderer.push(`<br/>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/Code.svelte
function Code($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { lang, text } = $$props;
		const lines = derived(() => {
			const parts = text.split("\n");
			return parts.map((line, index) => index < parts.length - 1 ? `${line}\n` : line);
		});
		$$renderer.push(`<pre${attr_class(clsx(lang))}><code><!--[-->`);
		const each_array = ensure_array_like(lines());
		for (let index = 0, $$length = each_array.length; index < $$length; index++) {
			let line = each_array[index];
			$$renderer.push(`<!---->${escape_html(line)}`);
		}
		$$renderer.push(`<!--]--></code></pre>`);
	});
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/Codespan.svelte
function Codespan($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { raw } = $$props;
		$$renderer.push(`<code>${escape_html(raw.replace(/`/g, ""))}</code>`);
	});
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/Del.svelte
function Del($$renderer, $$props) {
	const { children } = $$props;
	$$renderer.push(`<del>`);
	children?.($$renderer);
	$$renderer.push(`<!----></del>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/Em.svelte
function Em($$renderer, $$props) {
	const { children } = $$props;
	$$renderer.push(`<em>`);
	children?.($$renderer);
	$$renderer.push(`<!----></em>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/Escape.svelte
function Escape($$renderer, $$props) {
	const { text } = $$props;
	$$renderer.push(`<!---->${escape_html(text)}`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/Heading.svelte
function Heading($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { depth, raw, text, id: precomputedId = void 0, options, slug, children } = $$props;
		const id = derived(() => options.headerIds ? precomputedId ?? `${options.headerPrefix}${slug(text)}` : void 0);
		if (depth === 1) {
			$$renderer.push(`<!--[0--><h1${attr("id", id())}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></h1>`);
		} else if (depth === 2) {
			$$renderer.push(`<!--[1--><h2${attr("id", id())}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></h2>`);
		} else if (depth === 3) {
			$$renderer.push(`<!--[2--><h3${attr("id", id())}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></h3>`);
		} else if (depth === 4) {
			$$renderer.push(`<!--[3--><h4${attr("id", id())}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></h4>`);
		} else if (depth === 5) {
			$$renderer.push(`<!--[4--><h5${attr("id", id())}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></h5>`);
		} else if (depth === 6) {
			$$renderer.push(`<!--[5--><h6${attr("id", id())}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></h6>`);
		} else $$renderer.push(`<!--[-1-->${escape_html(raw)}`);
		$$renderer.push(`<!--]-->`);
	});
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/Hr.svelte
function Hr($$renderer) {
	$$renderer.push(`<hr/>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/Image.svelte
function Image($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { href = void 0, title = void 0, text = "", lazy = true, fadeIn = true } = $$props;
		const source = derived(() => href === "" ? void 0 : href);
		const attempt = derived(() => ({ source: source() }));
		let loadedAttempt = void 0;
		let errorAttempt = void 0;
		const exposed = derived(() => !lazy);
		const loaded = derived(() => loadedAttempt === attempt());
		const error = derived(() => errorAttempt === attempt());
		function image($$renderer, currentAttempt) {
			$$renderer.push(`<img${attr("src", exposed() ? currentAttempt.source : void 0)}${attr("data-src", href)}${attr("title", title)}${attr("alt", text)}${attr("loading", lazy ? "lazy" : "eager")}${attr_class("svelte-1hoglcg", void 0, {
				"fade-in": fadeIn && loaded() && !error(),
				"visible": !fadeIn && loaded() && !error(),
				"error": error()
			})} onload="this.__e=event" onerror="this.__e=event"/>`);
		}
		$$renderer.push(`<!---->`);
		image($$renderer, attempt());
		$$renderer.push(`<!---->`);
	});
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/Link.svelte
function Link($$renderer, $$props) {
	const { href = void 0, title = void 0, children } = $$props;
	$$renderer.push(`<a${attr("href", href)}${attr("title", title)}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></a>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/List.svelte
function List($$renderer, $$props) {
	const { ordered = false, start = 1, children } = $$props;
	if (ordered) {
		$$renderer.push(`<!--[0--><ol${attr("start", start)}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></ol>`);
	} else {
		$$renderer.push(`<!--[-1--><ul>`);
		children?.($$renderer);
		$$renderer.push(`<!----></ul>`);
	}
	$$renderer.push(`<!--]-->`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/ListItem.svelte
function ListItem($$renderer, $$props) {
	const { children, listItemIndex = void 0 } = $$props;
	$$renderer.push(`<li>`);
	children?.($$renderer);
	$$renderer.push(`<!----></li>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/Paragraph.svelte
function Paragraph($$renderer, $$props) {
	const { children } = $$props;
	$$renderer.push(`<p>`);
	children?.($$renderer);
	$$renderer.push(`<!----></p>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/RawText.svelte
function RawText($$renderer, $$props) {
	const { text } = $$props;
	$$renderer.push(`<!---->${escape_html(text)}`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/Strong.svelte
function Strong($$renderer, $$props) {
	const { children } = $$props;
	$$renderer.push(`<strong>`);
	children?.($$renderer);
	$$renderer.push(`<!----></strong>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/Table.svelte
function Table($$renderer, $$props) {
	const { children } = $$props;
	$$renderer.push(`<table>`);
	children?.($$renderer);
	$$renderer.push(`<!----></table>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/TableBody.svelte
function TableBody($$renderer, $$props) {
	const { children } = $$props;
	$$renderer.push(`<tbody>`);
	children?.($$renderer);
	$$renderer.push(`<!----></tbody>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/TableCell.svelte
function TableCell($$renderer, $$props) {
	const { header, align, children } = $$props;
	const style = derived(() => align ? `text-align: ${align}` : void 0);
	if (header) {
		$$renderer.push(`<!--[0--><th${attr_style(style())}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></th>`);
	} else {
		$$renderer.push(`<!--[-1--><td${attr_style(style())}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></td>`);
	}
	$$renderer.push(`<!--]-->`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/TableHead.svelte
function TableHead($$renderer, $$props) {
	const { children } = $$props;
	$$renderer.push(`<thead>`);
	children?.($$renderer);
	$$renderer.push(`<!----></thead>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/TableRow.svelte
function TableRow($$renderer, $$props) {
	const { children } = $$props;
	$$renderer.push(`<tr>`);
	children?.($$renderer);
	$$renderer.push(`<!----></tr>`);
}
// node_modules/@humanspeak/svelte-markdown/dist/renderers/Text.svelte
function Text($$renderer, $$props) {
	const { children } = $$props;
	children?.($$renderer);
	$$renderer.push(`<!---->`);
}
// node_modules/@humanspeak/svelte-markdown/dist/utils/markdown-parser.js
/**
* Default renderer configuration mapping markdown elements to Svelte components.
* Provides out-of-the-box rendering capabilities while allowing for customization.
*
* Implementation notes:
* - All components are lazy-loaded for better performance
* - Null values indicate optional renderers
* - Components are type-checked against the Renderers interface
*
* @const {Renderers}
*/
var defaultRenderers = {
	heading: Heading,
	paragraph: Paragraph,
	text: Text,
	image: Image,
	link: Link,
	em: Em,
	escape: Escape,
	strong: Strong,
	codespan: Codespan,
	del: Del,
	table: Table,
	tablehead: TableHead,
	tablebody: TableBody,
	tablerow: TableRow,
	tablecell: TableCell,
	list: List,
	orderedlistitem: null,
	unorderedlistitem: null,
	listitem: ListItem,
	hr: Hr,
	html: Html,
	blockquote: Blockquote,
	code: Code,
	br: Br,
	rawtext: RawText
};
/**
* Default configuration options for the markdown parser.
* Provides sensible defaults while allowing for customization.
*
* Notable defaults:
* - GitHub Flavored Markdown enabled
* - Header IDs generated automatically
* - No syntax highlighting by default
* - HTML sanitization disabled
* - Standard markdown parsing rules
*
* @const {SvelteMarkdownOptions}
*/
var defaultOptions = {
	async: false,
	breaks: false,
	gfm: true,
	pedantic: false,
	renderer: null,
	silent: false,
	tokenizer: null,
	walkTokens: null,
	headerIds: true,
	headerPrefix: ""
};
// node_modules/@humanspeak/svelte-markdown/dist/utils/sanitize.js
/**
* URL and HTML attribute sanitization utilities for XSS prevention.
*
* These functions are applied in the Parser before tokens reach any
* renderer component or snippet, ensuring custom renderers cannot
* bypass sanitization.
*
* @see https://github.com/humanspeak/svelte-markdown/issues/272
* @packageDocumentation
*/
/** Protocols considered safe for href/src attributes. */
var SAFE_PROTOCOLS = /* @__PURE__ */ new Set([
	"http:",
	"https:",
	"mailto:",
	"tel:"
]);
/**
* URL attributes in HTML that should be run through the sanitizer.
* Covers standard attributes that can trigger navigation or resource loading.
*/
var URL_ATTRIBUTES = /* @__PURE__ */ new Set([
	"href",
	"src",
	"action",
	"formaction",
	"cite",
	"data",
	"poster"
]);
/** Fast-path: most URLs are http/https — avoid `new URL()` for these. */
var SAFE_PREFIX_RE = /^https?:/i;
var LEADING_WS_RE = /^\s+/;
var RELATIVE_RE = /^[#/?.]/;
/**
* Sanitizes a URL against a protocol allowlist.
*
* Allows `http:`, `https:`, `mailto:`, `tel:`, and relative URLs
* (starting with `/`, `#`, `?`, or no protocol). Blocks everything
* else including `javascript:`, `data:`, `vbscript:`, etc.
*
* Handles mixed-case protocols and leading whitespace.
*
* The `context` parameter provides the token type and HTML tag name,
* enabling per-element policies in custom overrides.
*/
var defaultSanitizeUrl = (url, _context) => {
	if (!url) return "";
	const trimmed = url.replace(LEADING_WS_RE, "");
	if (RELATIVE_RE.test(trimmed)) return trimmed;
	if (!trimmed.includes(":")) return trimmed;
	if (SAFE_PREFIX_RE.test(trimmed)) return trimmed;
	try {
		const parsed = new URL(trimmed, "http://localhost");
		if (SAFE_PROTOCOLS.has(parsed.protocol)) return trimmed;
	} catch {}
	return "";
};
/**
* Sanitizes an HTML attribute object by:
* 1. Removing all event handler attributes (`on*`)
* 2. Running URL-bearing attributes through the sanitizer
*
* The `context` parameter provides the HTML tag name, enabling
* per-element policies in custom overrides (e.g. stricter rules
* for `<iframe>` than `<a>`).
*
* Returns a new object; does not mutate the input.
*/
var defaultSanitizeAttributes = (attributes, context, sanitizeUrl) => {
	const result = {};
	for (const [key, value] of Object.entries(attributes)) {
		const lower = key.toLowerCase();
		if (lower.startsWith("on") || lower === "srcdoc") continue;
		if (URL_ATTRIBUTES.has(lower)) {
			const sanitized = sanitizeUrl(value, context);
			if (sanitized) result[key] = sanitized;
			continue;
		}
		result[key] = value;
	}
	return result;
};
var isReusableStreamingNode = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
var isReusableStreamingNodeArray = (value) => Array.isArray(value) && value.every((item) => Array.isArray(item) ? isReusableStreamingNodeArray(item) : isReusableStreamingNode(item));
var hasPlainPrototype = (value) => {
	const prototype = Object.getPrototypeOf(value);
	return prototype === Object.prototype || prototype === null;
};
/** Element-wise comparison; elements may be primitives, `null`, arrays, or objects. */
var areArraysSemanticallyEqual = (a, b) => {
	if (a.length !== b.length) return false;
	for (let index = 0; index < a.length; index++) if (!isSemanticallyEqual(a[index], b[index])) return false;
	return true;
};
/** Own enumerable keys of both records; skips the union allocation when they match. */
var getComparedKeys = (previousRecord, nextRecord) => {
	const previousKeys = Object.keys(previousRecord);
	const nextKeys = Object.keys(nextRecord);
	return previousKeys.length === nextKeys.length && previousKeys.every((key, index) => key === nextKeys[index]) ? previousKeys : /* @__PURE__ */ new Set([...previousKeys, ...nextKeys]);
};
/** Field-by-field comparison of two plain records (tokens or data objects). */
var areRecordsSemanticallyEqual = (previousRecord, nextRecord) => {
	if (previousRecord.type !== nextRecord.type) return false;
	if (previousRecord.raw !== nextRecord.raw) return false;
	if (previousRecord.text !== nextRecord.text) return false;
	for (const key of getComparedKeys(previousRecord, nextRecord)) {
		const previousValue = previousRecord[key];
		const nextValue = nextRecord[key];
		if (typeof previousValue === "function" || typeof nextValue === "function") return false;
		if (!isSemanticallyEqual(previousValue, nextValue)) return false;
	}
	return true;
};
/**
* Recursively compares two token values by every own enumerable field.
*
* Handles every shape a token field can take: primitives, `null`, arrays of
* mixed primitives/`null`/objects (e.g. a table's `align`), nested token
* arrays, and plain data objects (e.g. an html token's `attributes`). Array
* elements are never assumed to be objects.
*
* @param a - Previous value.
* @param b - Next value.
* @returns `true` only when both values are provably render-equivalent.
*/
var isSemanticallyEqual = (a, b) => {
	if (a === b) return true;
	if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) return false;
	const previousIsArray = Array.isArray(a);
	if (previousIsArray !== Array.isArray(b)) return false;
	if (previousIsArray) return areArraysSemanticallyEqual(a, b);
	if (!hasPlainPrototype(a) || !hasPlainPrototype(b)) return false;
	return areRecordsSemanticallyEqual(a, b);
};
/**
* Returns whether a previously rendered token can stand in for a freshly
* parsed one.
*
* Contract: equal iff a renderer given either object would produce identical
* output; conservative on unknowns. Every own enumerable field is compared —
* `type`, `raw`, `text`, nested token arrays, and every scalar or data field
* (link `href`/`title`, heading `depth`, list `ordered`/`start`/`loose`, item
* `task`/`checked`, table `align`, code `lang`, html `tag`/`attributes`, and
* extension fields such as `displayMode`). Function-valued fields and class
* instances are never considered equal unless they are the same object.
* The same object is always equal to itself (fast path).
*
* Do not weaken this for speed: callers widen token reuse on the strength of
* this contract.
*
* @param previousNode - Token from the previous streaming parse.
* @param nextNode - Token from the current parse.
* @returns `true` when `previousNode` may be reused in place of `nextNode`.
* @example
* ```ts
* isSameStableNode(
*     { type: 'code', raw: '```\nx\n```', text: 'x', lang: 'js' },
*     { type: 'code', raw: '```\nx\n```', text: 'x', lang: 'ts' }
* ) // false — `lang` changes the rendered output
* ```
*/
var isSameStableNode = (previousNode, nextNode) => {
	if (previousNode === nextNode) return true;
	return isSemanticallyEqual(previousNode, nextNode);
};
var reuseStableNodeArray = (previousArray, nextArray) => {
	const limit = Math.min(previousArray.length, nextArray.length);
	let reusedArray;
	for (let index = 0; index < limit; index++) {
		const previousItem = previousArray[index];
		const nextItem = nextArray[index];
		let reusedItem = nextItem;
		if (Array.isArray(previousItem) && Array.isArray(nextItem)) reusedItem = reuseStableNodeArray(previousItem, nextItem);
		else if (isReusableStreamingNode(previousItem) && isReusableStreamingNode(nextItem)) reusedItem = reuseStableNode(previousItem, nextItem);
		if (reusedItem !== nextItem) {
			reusedArray ??= nextArray.slice();
			reusedArray[index] = reusedItem;
		}
	}
	return reusedArray ?? nextArray;
};
var reuseStableNode = (previousNode, nextNode) => {
	if (isSameStableNode(previousNode, nextNode)) return previousNode;
	let mergedNode;
	const previousRecord = previousNode;
	const nextRecord = nextNode;
	for (const key of Object.keys(nextNode)) {
		const previousValue = previousRecord[key];
		const nextValue = nextRecord[key];
		if (!isReusableStreamingNodeArray(previousValue) || !isReusableStreamingNodeArray(nextValue)) continue;
		const reusedValue = reuseStableNodeArray(previousValue, nextValue);
		if (reusedValue !== nextValue) {
			mergedNode ??= { ...nextNode };
			const mergedRecord = mergedNode;
			mergedRecord[key] = reusedValue;
		}
	}
	return mergedNode ?? nextNode;
};
/**
* In-place form of {@link reuseStableTokenArray} for a freshly built array
* the caller owns (the array `IncrementalParser.update` just returned): the
* stable prefix is written into `nextTokens` itself instead of into a new
* N-length array, and indices below `identicalPrefixCount` are skipped
* because they already hold the previous objects (plan 011).
*
* Only valid when `nextTokens` is not yet rendered or shared, and when
* `nextTokens[i] === previousTokens[i]` for every `i < identicalPrefixCount`
* (pass 0 when that is not guaranteed). Every write replaces a token with a
* semantically equal one ({@link isSameStableNode}), so a parser that keeps
* `nextTokens` as its previous parse sees no difference.
*
* @param previousTokens - Token array currently rendered
* @param nextTokens - Freshly parsed array to adopt; mutated and returned
* @param divergeAt - Leading roots known to be semantically unchanged
* @param identicalPrefixCount - Leading roots already identical by construction
* @returns `nextTokens`, with previous objects in its stable prefix
* @example
* ```ts
* const result = parser.update(source)
* const identical = streamTokens === lastParserTokens ? result.reusedPrefixCount : 0
* streamTokens = reuseStableTokenArrayInPlace(streamTokens, result.tokens, result.divergeAt, identical)
* ```
*/
var reuseStableTokenArrayInPlace = (previousTokens, nextTokens, divergeAt, identicalPrefixCount) => {
	const reuseCount = Math.min(divergeAt, previousTokens.length, nextTokens.length);
	const firstWrite = Math.min(identicalPrefixCount, reuseCount);
	for (let index = firstWrite; index < reuseCount; index++) nextTokens[index] = previousTokens[index];
	if (reuseCount < previousTokens.length && reuseCount < nextTokens.length) nextTokens[reuseCount] = reuseStableNode(previousTokens[reuseCount], nextTokens[reuseCount]);
	return nextTokens;
};
/**
* Reuses semantically unchanged token objects across the WHOLE array,
* index-aligned, for updates where no stable prefix is known — e.g. an
* appended reference definition that can change inline children of any root
* without changing its `raw`.
*
* Each root is compared with {@link isSameStableNode}: an equal root keeps the
* previous object (so its component receives no new props); an unequal root
* becomes a new object whose unchanged nested token arrays and children are
* still reused. When the arrays differ in length, only the shared index range
* is compared and extra next tokens are kept as-is.
*
* @param previousTokens - Token array from the previous streaming parse.
* @param nextTokens - Freshly parsed token array for the current source.
* @returns `nextTokens` itself when nothing could be reused, otherwise a new
*   array mixing reused previous objects and fresh tokens.
* @example
* ```ts
* // `[1]: /x` appended: only the paragraph citing `[1]` becomes a new object
* streamTokens = reuseStableTokenTree(streamTokens, parser.update(source).tokens)
* ```
*/
var reuseStableTokenTree = (previousTokens, nextTokens) => reuseStableNodeArray(previousTokens, nextTokens);
// node_modules/@humanspeak/svelte-markdown/dist/utils/render-metadata.js
/**
* Source characters covered by one root segment (plan 011). A root belongs to
* segment `Math.floor(rootStartOffset / ROOT_SEGMENT_SPAN)`.
*/
var ROOT_SEGMENT_SPAN = 4096;
var RENDER_METADATA_CONTEXT = Symbol("svelte-markdown.renderMetadata");
var asNodeArray = (value) => Array.isArray(value) ? value : void 0;
var getNodeSpanText = (node) => {
	if (typeof node.raw === "string") return node.raw;
	if (typeof node.text === "string") return node.text;
	return "";
};
var getNodeSourceLength = (node) => {
	if (typeof node.sourceLength === "number") return node.sourceLength;
	return getNodeSpanText(node).length;
};
/**
* Captures the heading-id options that affect slug output, so stored dedup
* state can be invalidated when they change between passes.
*
* @param options - The active {@link SvelteMarkdownOptions}.
* @returns The `headerIds`/`headerPrefix` pair that identifies the slugger's
*   configuration for the current pass.
* @example
* ```ts
* const signature = getHeadingSluggerSignature(options)
* ```
*/
var getHeadingSluggerSignature = (options) => ({
	headerIds: options.headerIds,
	headerPrefix: options.headerPrefix
});
/**
* Compares two heading-slugger signatures for equality. A previous signature of
* `undefined` (no prior pass) never matches, forcing the safe replay path.
*
* @param a - The previously stored signature, or `undefined` on the first pass.
* @param b - The current pass's signature.
* @returns `true` when both `headerIds` and `headerPrefix` are identical.
* @example
* ```ts
* if (headingSluggerSignaturesMatch(preparedHeadingSignature, current)) {
*     // safe to rewind the heading undo log
* }
* ```
*/
var headingSluggerSignaturesMatch = (a, b) => a !== void 0 && a.headerIds === b.headerIds && a.headerPrefix === b.headerPrefix;
/**
* Creates a per-`SvelteMarkdown`-instance render metadata helper. State
* (render keys, precomputed heading ids, source offsets, and cross-pass
* bookkeeping) is captured in the returned closure via WeakMaps keyed by token
* objects, so each component instance gets isolated metadata and caller token
* arrays are never mutated. See the module overview above for the keying and
* heading-id strategy.
*
* @returns A {@link RenderMetadata} whose methods precompute per-pass metadata
*   (`prepareTokensForRender`) and read it back during render
*   (`getPreparedHeadingId`, `getStableNodeKey`, `getStableRowKey`).
* @example
* ```ts
* const metadata = createRenderMetadata()
* // Streaming append: skip the stable prefix via the parser's diverge point.
* const tokens = metadata.prepareTokensForRender(rawTokens, options, {
*     source,
*     startIndex,
*     startOffset
* })
* const key = metadata.getStableNodeKey(tokens?.[0], 0)
* const id = metadata.getPreparedHeadingId(tokens?.[0])
* ```
*/
var createRenderMetadata = () => {
	const renderKeys = /* @__PURE__ */ new WeakMap();
	const headingIds = /* @__PURE__ */ new WeakMap();
	const headingSlugger = new Slugger();
	const headingUndoLog = [];
	let headingStateReusable = false;
	let preparedHeadingSignature;
	let previousSourceLessRoots = [];
	/**
	* Source-backed passes only (streaming re-walk of a diverged open block,
	* plan 010 H3). `keyedSubtreeOffsets` records the absolute offset at which
	* a node's whole subtree was last keyed; a node seen again at the same
	* offset with the same stored key still has correct keys below it, because
	* parsed tokens are immutable. `headingFreeSubtrees` marks nodes with no
	* heading anywhere below them, so heading-id passes skip those subtrees
	* while still visiting every subtree that holds a heading. Both are gated
	* on source-backed passes: caller-supplied token arrays may be mutated in
	* place between renders.
	*/
	const keyedSubtreeOffsets = /* @__PURE__ */ new WeakMap();
	const headingFreeSubtrees = /* @__PURE__ */ new WeakSet();
	let headingSubtreeCacheEnabled = false;
	/**
	* Root segments of the last source-backed pass (plan 011): built for
	* `segmentedTokens`, with each segment's start index/offset and the end
	* of the root array so a partial pass rebuilds only from the segment
	* holding `startIndex`.
	*/
	let segmentedTokens;
	let rootSegments = [];
	let rootSegmentStarts = [];
	let rootSegmentsEnd = {
		index: 0,
		offset: 0
	};
	const setRenderKey = (node, value) => {
		renderKeys.set(node, value);
	};
	const getRenderKey = (node) => typeof node === "object" && node !== null ? renderKeys.get(node) : void 0;
	const getStableNodeKey = (node, index) => {
		const renderKey = getRenderKey(node);
		if (renderKey !== void 0) return renderKey;
		if (typeof node === "object" && node !== null) return node;
		return `${index}:${String(node)}`;
	};
	const assignSequentialSourceKeys = (nodes, absoluteOffset = 0, startIndex = 0, startOffset = 0) => {
		if (!nodes) return;
		let cursor = startOffset;
		for (let index = startIndex; index < nodes.length; index++) {
			const node = nodes[index];
			const spanLength = getNodeSourceLength(node);
			const nodeOffset = absoluteOffset + cursor;
			const key = spanLength === 0 ? `src:${nodeOffset}:zero:${index}` : `src:${nodeOffset}`;
			cursor += spanLength;
			if (keyedSubtreeOffsets.get(node) === nodeOffset && renderKeys.get(node) === key) continue;
			setRenderKey(node, key);
			assignSourceKeysToChildren(node, nodeOffset);
			keyedSubtreeOffsets.set(node, nodeOffset);
		}
	};
	const collectSourceLessIdentities = (value, identities = /* @__PURE__ */ new Set()) => {
		if (typeof value !== "object" || value === null) return identities;
		identities.add(value);
		if (Array.isArray(value)) {
			for (const item of value) collectSourceLessIdentities(item, identities);
			return identities;
		}
		const node = value;
		collectSourceLessIdentities(node.tokens, identities);
		collectSourceLessIdentities(node.items, identities);
		collectSourceLessIdentities(node.header, identities);
		collectSourceLessIdentities(node.rows, identities);
		return identities;
	};
	const countIdentityOverlap = (a, b) => {
		let count = 0;
		const [smaller, larger] = a.size <= b.size ? [a, b] : [b, a];
		for (const identity of smaller) if (larger.has(identity)) count++;
		return count;
	};
	const findPreviousSourceLessRoot = (node, identities, usedPreviousRoots) => {
		let bestIndex = -1;
		let bestScore = 0;
		for (let index = 0; index < previousSourceLessRoots.length; index++) {
			if (usedPreviousRoots.has(index)) continue;
			const previous = previousSourceLessRoots[index];
			if (previous.type !== node.type) continue;
			const score = countIdentityOverlap(identities, previous.identities);
			if (score > bestScore) {
				bestIndex = index;
				bestScore = score;
			}
		}
		return bestIndex === -1 ? void 0 : {
			index: bestIndex,
			record: previousSourceLessRoots[bestIndex]
		};
	};
	const assignSourceLessRootKeys = (nodes) => {
		if (!nodes) {
			previousSourceLessRoots = [];
			return;
		}
		const nextRoots = [];
		const usedPreviousRoots = /* @__PURE__ */ new Set();
		for (const node of nodes) {
			const identities = collectSourceLessIdentities(node);
			const existingKey = getRenderKey(node);
			const previous = existingKey === void 0 ? findPreviousSourceLessRoot(node, identities, usedPreviousRoots) : void 0;
			const key = existingKey ?? previous?.record.key ?? node;
			if (previous) usedPreviousRoots.add(previous.index);
			if (existingKey === void 0) setRenderKey(node, key);
			nextRoots.push({
				key,
				identities,
				type: node.type
			});
		}
		previousSourceLessRoots = nextRoots;
	};
	const assignSourceKeysToChildren = (node, absoluteOffset) => {
		assignSequentialSourceKeys(asNodeArray(node.tokens), absoluteOffset);
		assignSequentialSourceKeys(asNodeArray(node.items), absoluteOffset);
		assignSequentialSourceKeys(asNodeArray(node.header), absoluteOffset);
		const rows = asNodeArray(node.rows);
		if (rows) for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
			const row = rows[rowIndex];
			setRenderKey(row, `src:${absoluteOffset}:row:${rowIndex}`);
			assignSequentialSourceKeys(asNodeArray(row), absoluteOffset);
		}
	};
	const clearRootSegments = () => {
		segmentedTokens = void 0;
		rootSegments = [];
		rootSegmentStarts = [];
		rootSegmentsEnd = {
			index: 0,
			offset: 0
		};
	};
	/**
	* Number of previous segments that lie wholly before `startIndex` (so
	* their roots are the same objects at the same offsets) and can be kept.
	* 0 when the previous segments cannot be trusted for this pass.
	*/
	const countKeptSegments = (nodes, startIndex) => {
		if (segmentedTokens === void 0 || startIndex <= 0) return 0;
		if (startIndex > rootSegmentsEnd.index || startIndex > nodes.length) return 0;
		let keep = 0;
		while (keep < rootSegments.length) {
			if ((keep + 1 < rootSegmentStarts.length ? rootSegmentStarts[keep + 1].index : rootSegmentsEnd.index) > startIndex) break;
			keep++;
		}
		return keep;
	};
	/** True when `segment` holds exactly the objects in `tokens`. */
	const segmentHoldsTokens = (segment, tokens) => {
		if (segment.tokens.length !== tokens.length) return false;
		for (let index = 0; index < tokens.length; index++) if (segment.tokens[index] !== tokens[index]) return false;
		return true;
	};
	/**
	* Groups root tokens into offset buckets (see {@link RootSegment}). On a
	* partial pass (`startIndex > 0`, roots before it unchanged) the segments
	* wholly before `startIndex` are kept as-is and only the rest is rebuilt,
	* so the work is proportional to one segment plus the changed tail. A
	* rebuilt segment whose roots are all the previous objects keeps its
	* previous segment object, so its inner `{#each}` is not re-diffed.
	*/
	const prepareRootSegments = (nodes, startIndex, startOffset) => {
		let keep = countKeptSegments(nodes, startIndex);
		let from = keep < rootSegmentStarts.length ? rootSegmentStarts[keep] : rootSegmentsEnd;
		if (keep > 0 && Math.floor(from.offset / 4096) === rootSegments[keep - 1].id) {
			keep--;
			from = rootSegmentStarts[keep];
		}
		if (keep === 0) from = {
			index: 0,
			offset: 0
		};
		if (from.index === startIndex && from.offset !== startOffset) {
			keep = 0;
			from = {
				index: 0,
				offset: 0
			};
		}
		const segments = rootSegments.slice(0, keep);
		const starts = rootSegmentStarts.slice(0, keep);
		let previous = keep;
		let index = from.index;
		let offset = from.offset;
		while (index < nodes.length) {
			const id = Math.floor(offset / ROOT_SEGMENT_SPAN);
			const start = {
				index,
				offset
			};
			while (index < nodes.length && Math.floor(offset / 4096) === id) {
				offset += getNodeSourceLength(nodes[index]);
				index++;
			}
			const tokens = nodes.slice(start.index, index);
			while (previous < rootSegments.length && rootSegments[previous].id < id) previous++;
			const candidate = rootSegments[previous];
			const reusable = candidate?.id === id && segmentHoldsTokens(candidate, tokens);
			segments.push(reusable ? candidate : {
				id,
				tokens
			});
			starts.push(start);
		}
		segmentedTokens = nodes;
		rootSegments = segments;
		rootSegmentStarts = starts;
		rootSegmentsEnd = {
			index,
			offset
		};
	};
	/**
	* Prepares heading ids in `nodes` (from `startIndex`) and their subtrees,
	* in document order.
	*
	* @returns `true` when a heading was found in `nodes` or below them
	*/
	const assignHeadingIds = (nodes, options, startIndex = 0, rootIndex) => {
		if (!nodes) return false;
		let found = false;
		for (let index = startIndex; index < nodes.length; index++) {
			const node = nodes[index];
			const headingRootIndex = rootIndex ?? index;
			if (node.type === "heading") {
				prepareHeadingId(node, options, headingRootIndex);
				found = true;
			}
			if (assignHeadingIdsBelow(node, options, headingRootIndex)) found = true;
		}
		return found;
	};
	/**
	* Walks `node`'s children for headings, skipping subtrees a previous
	* source-backed pass proved heading-free.
	*
	* @returns `true` when a heading exists below `node`
	*/
	const assignHeadingIdsBelow = (node, options, rootIndex) => {
		if (headingSubtreeCacheEnabled && headingFreeSubtrees.has(node)) return false;
		let found = assignHeadingIds(asNodeArray(node.tokens), options, 0, rootIndex);
		if (assignHeadingIds(asNodeArray(node.items), options, 0, rootIndex)) found = true;
		if (assignHeadingIds(asNodeArray(node.header), options, 0, rootIndex)) found = true;
		const rows = asNodeArray(node.rows);
		if (rows) {
			for (const row of rows) if (assignHeadingIds(asNodeArray(row), options, 0, rootIndex)) found = true;
		}
		if (!found && headingSubtreeCacheEnabled) headingFreeSubtrees.add(node);
		return found;
	};
	const prepareHeadingId = (node, options, rootIndex) => {
		if (!options.headerIds || typeof node.text !== "string") {
			headingIds.set(node, void 0);
			return;
		}
		const base = slug(node.text);
		const previousCount = headingSlugger.occurrences[base];
		const result = headingSlugger.slug(node.text);
		headingIds.set(node, `${options.headerPrefix}${result}`);
		headingUndoLog.push({
			rootIndex,
			base,
			result,
			previousCount
		});
	};
	/**
	* github-slugger 2.x creates one final id and advances only the base's
	* counter (possibly several times when suffixes are already occupied).
	* Undo in reverse order: later headings may themselves use a generated id
	* as their base. Restore the exact saved counter, not count minus one.
	* Revisit this invariant when upgrading github-slugger's implementation.
	*/
	const rewindHeadingIds = (startIndex) => {
		let entry = headingUndoLog.at(-1);
		while (entry && entry.rootIndex >= startIndex) {
			delete headingSlugger.occurrences[entry.result];
			if (entry.previousCount !== void 0) headingSlugger.occurrences[entry.base] = entry.previousCount;
			headingUndoLog.pop();
			entry = headingUndoLog.at(-1);
		}
	};
	const assignPreparedHeadingIds = (nodes, options, preparation) => {
		const signature = getHeadingSluggerSignature(options);
		const { source, startIndex = 0 } = preparation ?? {};
		headingSubtreeCacheEnabled = source !== void 0;
		const canReuse = source !== void 0 && startIndex > 0 && headingStateReusable && headingSluggerSignaturesMatch(preparedHeadingSignature, signature);
		if (canReuse) rewindHeadingIds(startIndex);
		else {
			headingSlugger.reset();
			headingUndoLog.length = 0;
			headingStateReusable = source !== void 0;
			if (source !== void 0 && startIndex > 0) assignSequentialSourceKeys(nodes);
		}
		assignHeadingIds(nodes, options, canReuse ? startIndex : 0);
		preparedHeadingSignature = signature;
	};
	return {
		prepareTokensForRender: (tokens, options, preparation) => {
			if (!tokens) return tokens;
			const renderNodes = tokens;
			if (preparation?.source !== void 0) {
				previousSourceLessRoots = [];
				assignSequentialSourceKeys(renderNodes, 0, preparation.startIndex ?? 0, preparation.startOffset ?? 0);
				prepareRootSegments(renderNodes, preparation.startIndex ?? 0, preparation.startOffset ?? 0);
			} else {
				clearRootSegments();
				assignSourceLessRootKeys(renderNodes);
			}
			assignPreparedHeadingIds(renderNodes, options, preparation);
			return tokens;
		},
		getPreparedHeadingId: (node) => typeof node === "object" && node !== null ? headingIds.get(node) : void 0,
		getStableNodeKey,
		getStableRowKey: (row, index) => {
			const renderKey = getRenderKey(row);
			if (renderKey !== void 0) return renderKey;
			if (row && row.length > 0) return getStableNodeKey(row[0], index);
			if (row) return row;
			return index;
		},
		getRootSegments: (tokens) => tokens !== void 0 && tokens === segmentedTokens ? rootSegments : void 0
	};
};
// node_modules/@humanspeak/svelte-markdown/dist/utils/void-elements.js
/**
* The HTML void elements — the single source of truth for "this tag can never
* have children".
*
* Kept in one module because the parsing and rendering halves previously
* carried their own copy — `token-cleanup` asking "may this tag omit its
* closing slash?" and `Parser` asking "may this tag receive children?" — and a
* tag added to one copy but not the other fails silently, exactly the class of
* bug tracked in issue #383.
*
* @module
*/
/** Tag names that are self-closing by definition and take no children. */
var VOID_ELEMENTS = /* @__PURE__ */ new Set([
	"br",
	"hr",
	"img",
	"input",
	"link",
	"meta",
	"area",
	"base",
	"col",
	"embed",
	"keygen",
	"param",
	"source",
	"track",
	"wbr"
]);
/**
* Case-insensitive test for a void element name. The only public entry point,
* so callers cannot bypass the normalization.
*/
var isVoidElement = (tagName) => VOID_ELEMENTS.has(tagName.toLowerCase());
// node_modules/@humanspeak/svelte-markdown/dist/Parser.svelte
var NO_EXTRA_PROPS = Object.freeze({});
var LIST_CHILD_VOLATILE = /* @__PURE__ */ new Set([
	"items",
	"raw",
	"text",
	"tokens",
	"type"
]);
var TABLE_CHILD_VOLATILE = /* @__PURE__ */ new Set([
	"align",
	"raw",
	"text",
	"header",
	"rows",
	"tokens",
	"type"
]);
var pickChildRest = (source, volatile, previous) => {
	const next = {};
	let size = 0;
	let same = previous !== void 0;
	for (const key of Object.keys(source)) {
		if (volatile.has(key)) continue;
		const value = source[key];
		next[key] = value;
		size++;
		if (same && !(previous && Object.hasOwn(previous, key) && previous[key] === value)) same = false;
	}
	return previous && same && Object.keys(previous).length === size ? previous : next;
};
function Parser_1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		/**
		* @component Parser
		*
		* Recursive markdown token parser that transforms tokens into Svelte components.
		* This component is the core rendering engine of the markdown system, handling
		* the transformation of parsed markdown tokens into their corresponding Svelte components.
		*
		* @example
		* ```svelte
		* <Parser
		*   tokens={parsedTokens}
		*   renderers={customRenderers}
		*   type="paragraph"
		* />
		* ```
		*
		* Features:
		* - Recursive token parsing
		* - Custom renderer support
		* - Snippet-based renderer overrides (snippet > component > default)
		* - Special handling for tables, lists, and HTML content
		* - Type-safe component rendering
		*
		* @typedef {Object} Props
		* @property {string} [type] - Token type for direct component rendering
		* @property {Token[] | TokensList} [tokens] - Markdown tokens to be rendered
		* @property {Tokens.TableCell[]} [header] - Table header cells for table rendering
		* @property {Tokens.TableCell[][]} [rows] - Table row cells for table rendering
		* @property {boolean} [ordered=false] - Whether the list is ordered (for list rendering)
		* @property {Renderers} renderers - Component mapping for markdown elements
		* @property {Record<string, any>} [snippetOverrides] - Snippet overrides for markdown renderers
		* @property {Record<string, any>} [htmlSnippetOverrides] - Snippet overrides for HTML tag renderers
		*
		* Implementation Notes:
		* - Uses recursive rendering for nested tokens
		* - Implements special logic for tables, lists, and HTML content
		* - Handles component prop spreading carefully to avoid conflicts
		* - Maintains type safety through TypeScript interfaces
		* - HTML token handling in table cells uses type assertions for better type safety
		* - Table cell HTML content is processed with proper token nesting and attribute preservation
		* - Improved HTML component rendering with proper type checking for tag properties
		* - Added support for nested markdown within HTML table cells (see test at lines 311-343 in SvelteMarkdown.test.ts)
		* - Token cleanup utilities handle complex nested structures (see lines 105-127 in token-cleanup.test.ts)
		* - HTML parsing maintains proper structure for both simple and complex nested elements
		*
		*/
		const { type = void 0, tokens = void 0, header = void 0, rows = void 0, ordered = false, renderers, snippetOverrides = {}, htmlSnippetOverrides = {}, sanitizeUrl = defaultSanitizeUrl, sanitizeAttributes = defaultSanitizeAttributes, footnoteMetadata = void 0, streamingText = void 0, $$slots, $$events, ...rest } = $$props;
		const textContext = getContext(STREAMING_TEXT_CONTEXT);
		const hasRenderMetadataContext = hasContext(RENDER_METADATA_CONTEXT);
		const renderMetadata = hasRenderMetadataContext ? getContext(RENDER_METADATA_CONTEXT) : createRenderMetadata();
		if (!hasRenderMetadataContext) setContext(RENDER_METADATA_CONTEXT, renderMetadata);
		const inlineTextOk = derived(() => renderers.text === defaultRenderers.text && !snippetOverrides.text && renderers.rawtext === defaultRenderers.rawtext && !snippetOverrides.rawtext);
		const inlineSpaceOk = derived(() => !renderers.space && !snippetOverrides.space);
		const sanitizedRest = derived(() => {
			if ((type === "link" || type === "image") && typeof rest.href === "string") {
				const tag = type === "link" ? "a" : "img";
				const sanitized = sanitizeUrl(rest.href, {
					type,
					tag
				});
				return {
					...rest,
					href: sanitized || void 0
				};
			}
			if (type === "html" && rest.attributes) {
				const tag = rest.tag ?? "";
				return {
					...rest,
					attributes: sanitizeAttributes(rest.attributes, {
						type,
						tag
					}, sanitizeUrl)
				};
			}
			return rest;
		});
		/**
		* Rest props handed to `dispatch` for the child tokens of list items and
		* table cells (never to the item/cell renderers or snippets themselves).
		* Read only by the list and table branches, so other Parsers never
		* compute it. `previousChildRest` is a plain closure variable: the
		* derived returns the previous object while its values are unchanged.
		*/
		let previousChildRest;
		const childRest = derived(() => previousChildRest = pickChildRest(sanitizedRest(), type === "table" ? TABLE_CHILD_VOLATILE : LIST_CHILD_VOLATILE, previousChildRest));
		function rawTextLeaf($$renderer) {
			const leafText = sanitizedRest().text ?? sanitizedRest().raw ?? "";
			if (snippetOverrides.rawtext) {
				$$renderer.push("<!--[0-->");
				snippetOverrides.rawtext($$renderer, {
					...sanitizedRest(),
					text: leafText,
					streamingText
				});
				$$renderer.push(`<!---->`);
			} else if (renderers.rawtext) {
				$$renderer.push("<!--[1-->");
				if (renderers.rawtext) {
					$$renderer.push("<!--[-->");
					renderers.rawtext($$renderer, spread_props([sanitizedRest(), {
						text: leafText,
						streamingText
					}]));
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]-->`);
		}
		function dispatch($$renderer, token, restProps) {
			const htmlTok = token;
			const inlineHtmlOk = token.type === "html" && !!htmlTok.tag && !!renderers.html && htmlTok.tag in Html && renderers.html[htmlTok.tag] === Html[htmlTok.tag] && !htmlSnippetOverrides[htmlTok.tag];
			if (token.type === "space" && inlineSpaceOk()) $$renderer.push("<!--[0-->");
			else if (token.type === "text" && inlineTextOk() && !token.tokens) $$renderer.push(`<!--[1-->${escape_html(token.text ?? token.raw)}`);
			else if (inlineHtmlOk && htmlTok.tag) {
				$$renderer.push("<!--[2-->");
				const sanitizedAttrs = htmlTok.attributes ? sanitizeAttributes(htmlTok.attributes, {
					type: "html",
					tag: htmlTok.tag
				}, sanitizeUrl) : void 0;
				if (isVoidElement(htmlTok.tag)) {
					$$renderer.push("<!--[0-->");
					element($$renderer, htmlTok.tag, () => {
						$$renderer.push(`${attributes({ ...sanitizedAttrs })}`);
					});
				} else {
					$$renderer.push("<!--[-1-->");
					element($$renderer, htmlTok.tag, () => {
						$$renderer.push(`${attributes({ ...sanitizedAttrs })}`);
					}, () => {
						if (htmlTok.tokens && htmlTok.tokens.length) {
							$$renderer.push(`<!--[0--><!--[-->`);
							const each_array = ensure_array_like(htmlTok.tokens);
							for (let i = 0, $$length = each_array.length; i < $$length; i++) {
								let childToken = each_array[i];
								dispatch($$renderer, childToken, restProps);
							}
							$$renderer.push(`<!--]-->`);
						} else $$renderer.push("<!--[-1-->");
						$$renderer.push(`<!--]-->`);
					});
				}
				$$renderer.push(`<!--]-->`);
			} else {
				$$renderer.push("<!--[-1-->");
				const headingIdProps = token.type === "heading" ? { id: renderMetadata.getPreparedHeadingId(token) ?? token.id } : NO_EXTRA_PROPS;
				const footnoteProps = token.type === "footnoteRef" ? footnoteMetadata?.referenceProps.get(token) ?? NO_EXTRA_PROPS : token.type === "footnoteSection" ? footnoteMetadata?.sectionProps.get(token) ?? NO_EXTRA_PROPS : NO_EXTRA_PROPS;
				Parser_1($$renderer, spread_props([
					restProps,
					token,
					headingIdProps,
					footnoteProps,
					{
						streamingText: textContext?.getMetadata(token),
						renderers,
						snippetOverrides,
						htmlSnippetOverrides,
						sanitizeUrl,
						sanitizeAttributes,
						footnoteMetadata
					}
				]));
			}
			$$renderer.push(`<!--]-->`);
		}
		if (!type) {
			$$renderer.push("<!--[0-->");
			if (tokens) {
				$$renderer.push("<!--[0-->");
				const { text: _text, raw: _raw, tokens: _tokens, ...parserRest } = rest;
				const rootSegments = renderMetadata.getRootSegments(tokens);
				if (rootSegments) {
					$$renderer.push(`<!--[0--><!--[-->`);
					const each_array_1 = ensure_array_like(rootSegments);
					for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
						let segment = each_array_1[$$index_2];
						$$renderer.push(`<!--[-->`);
						const each_array_2 = ensure_array_like(segment.tokens);
						for (let index = 0, $$length = each_array_2.length; index < $$length; index++) {
							let token = each_array_2[index];
							dispatch($$renderer, token, parserRest);
						}
						$$renderer.push(`<!--]-->`);
					}
					$$renderer.push(`<!--]-->`);
				} else {
					$$renderer.push(`<!--[-1--><!--[-->`);
					const each_array_3 = ensure_array_like(tokens);
					for (let index = 0, $$length = each_array_3.length; index < $$length; index++) {
						let token = each_array_3[index];
						dispatch($$renderer, token, parserRest);
					}
					$$renderer.push(`<!--]-->`);
				}
				$$renderer.push(`<!--]-->`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]-->`);
		} else if (type in renderers || type in snippetOverrides) {
			$$renderer.push("<!--[1-->");
			if (type === "table") {
				$$renderer.push("<!--[0-->");
				if (renderers.table && renderers.tablerow && renderers.tablecell) {
					$$renderer.push("<!--[0-->");
					const tableSnippet = snippetOverrides[type];
					const theadSnippet = snippetOverrides["tablehead"];
					const tbodySnippet = snippetOverrides["tablebody"];
					const rowSnippet = snippetOverrides["tablerow"];
					const cellSnippet = snippetOverrides["tablecell"];
					function tableContent($$renderer) {
						if (renderers.tablehead) {
							$$renderer.push("<!--[0-->");
							function theadContent($$renderer) {
								function headerRowContent($$renderer) {
									$$renderer.push(`<!--[-->`);
									const each_array_4 = ensure_array_like(header ?? []);
									for (let i = 0, $$length = each_array_4.length; i < $$length; i++) {
										let headerItem = each_array_4[i];
										const { align: _align, ...cellRest } = sanitizedRest();
										function headerCellContent($$renderer) {
											$$renderer.push(`<!--[-->`);
											const each_array_5 = ensure_array_like(headerItem.tokens ?? []);
											for (let k = 0, $$length = each_array_5.length; k < $$length; k++) {
												let headerCellToken = each_array_5[k];
												dispatch($$renderer, headerCellToken, {});
											}
											$$renderer.push(`<!--]-->`);
										}
										if (cellSnippet) {
											$$renderer.push("<!--[0-->");
											cellSnippet($$renderer, {
												header: true,
												align: sanitizedRest().align?.[i] ?? null,
												...cellRest,
												children: headerCellContent
											});
											$$renderer.push(`<!---->`);
										} else {
											$$renderer.push("<!--[-1-->");
											if (renderers.tablecell) {
												$$renderer.push("<!--[-->");
												renderers.tablecell($$renderer, spread_props([
													{
														header: true,
														align: sanitizedRest().align?.[i] ?? null
													},
													cellRest,
													{
														children: ($$renderer) => {
															headerCellContent($$renderer);
														},
														$$slots: { default: true }
													}
												]));
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
										}
										$$renderer.push(`<!--]-->`);
									}
									$$renderer.push(`<!--]-->`);
								}
								if (rowSnippet) {
									$$renderer.push("<!--[0-->");
									rowSnippet($$renderer, {
										...sanitizedRest(),
										children: headerRowContent
									});
									$$renderer.push(`<!---->`);
								} else {
									$$renderer.push("<!--[-1-->");
									if (renderers.tablerow) {
										$$renderer.push("<!--[-->");
										renderers.tablerow($$renderer, spread_props([sanitizedRest(), {
											children: ($$renderer) => {
												headerRowContent($$renderer);
											},
											$$slots: { default: true }
										}]));
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
								}
								$$renderer.push(`<!--]-->`);
							}
							if (theadSnippet) {
								$$renderer.push("<!--[0-->");
								theadSnippet($$renderer, {
									...sanitizedRest(),
									children: theadContent
								});
								$$renderer.push(`<!---->`);
							} else {
								$$renderer.push("<!--[-1-->");
								if (renderers.tablehead) {
									$$renderer.push("<!--[-->");
									renderers.tablehead($$renderer, spread_props([sanitizedRest(), {
										children: ($$renderer) => {
											theadContent($$renderer);
										},
										$$slots: { default: true }
									}]));
									$$renderer.push("<!--]-->");
								} else {
									$$renderer.push("<!--[!-->");
									$$renderer.push("<!--]-->");
								}
							}
							$$renderer.push(`<!--]-->`);
						} else $$renderer.push("<!--[-1-->");
						$$renderer.push(`<!--]--> `);
						if (renderers.tablebody) {
							$$renderer.push("<!--[0-->");
							function tbodyContent($$renderer) {
								$$renderer.push(`<!--[-->`);
								const each_array_6 = ensure_array_like(rows ?? []);
								for (let i = 0, $$length = each_array_6.length; i < $$length; i++) {
									let row = each_array_6[i];
									function bodyRowContent($$renderer) {
										$$renderer.push(`<!--[-->`);
										const each_array_7 = ensure_array_like(row ?? []);
										for (let j = 0, $$length = each_array_7.length; j < $$length; j++) {
											let cells = each_array_7[j];
											const { align: _align, ...cellRest } = sanitizedRest();
											function bodyCellContent($$renderer) {
												$$renderer.push(`<!--[-->`);
												const each_array_8 = ensure_array_like(cells.tokens ?? []);
												for (let index = 0, $$length = each_array_8.length; index < $$length; index++) {
													let cellToken = each_array_8[index];
													dispatch($$renderer, cellToken, childRest());
												}
												$$renderer.push(`<!--]-->`);
											}
											if (cellSnippet) {
												$$renderer.push("<!--[0-->");
												cellSnippet($$renderer, {
													header: false,
													align: sanitizedRest().align?.[j] ?? null,
													...cellRest,
													children: bodyCellContent
												});
												$$renderer.push(`<!---->`);
											} else {
												$$renderer.push("<!--[-1-->");
												if (renderers.tablecell) {
													$$renderer.push("<!--[-->");
													renderers.tablecell($$renderer, spread_props([cellRest, {
														header: false,
														align: sanitizedRest().align?.[j] ?? null,
														children: ($$renderer) => {
															bodyCellContent($$renderer);
														},
														$$slots: { default: true }
													}]));
													$$renderer.push("<!--]-->");
												} else {
													$$renderer.push("<!--[!-->");
													$$renderer.push("<!--]-->");
												}
											}
											$$renderer.push(`<!--]-->`);
										}
										$$renderer.push(`<!--]-->`);
									}
									if (rowSnippet) {
										$$renderer.push("<!--[0-->");
										rowSnippet($$renderer, {
											...sanitizedRest(),
											children: bodyRowContent
										});
										$$renderer.push(`<!---->`);
									} else {
										$$renderer.push("<!--[-1-->");
										if (renderers.tablerow) {
											$$renderer.push("<!--[-->");
											renderers.tablerow($$renderer, spread_props([sanitizedRest(), {
												children: ($$renderer) => {
													bodyRowContent($$renderer);
												},
												$$slots: { default: true }
											}]));
											$$renderer.push("<!--]-->");
										} else {
											$$renderer.push("<!--[!-->");
											$$renderer.push("<!--]-->");
										}
									}
									$$renderer.push(`<!--]-->`);
								}
								$$renderer.push(`<!--]-->`);
							}
							if (tbodySnippet) {
								$$renderer.push("<!--[0-->");
								tbodySnippet($$renderer, {
									...sanitizedRest(),
									children: tbodyContent
								});
								$$renderer.push(`<!---->`);
							} else {
								$$renderer.push("<!--[-1-->");
								if (renderers.tablebody) {
									$$renderer.push("<!--[-->");
									renderers.tablebody($$renderer, spread_props([sanitizedRest(), {
										children: ($$renderer) => {
											tbodyContent($$renderer);
										},
										$$slots: { default: true }
									}]));
									$$renderer.push("<!--]-->");
								} else {
									$$renderer.push("<!--[!-->");
									$$renderer.push("<!--]-->");
								}
							}
							$$renderer.push(`<!--]-->`);
						} else $$renderer.push("<!--[-1-->");
						$$renderer.push(`<!--]-->`);
					}
					if (tableSnippet) {
						$$renderer.push("<!--[0-->");
						tableSnippet($$renderer, {
							...sanitizedRest(),
							children: tableContent
						});
						$$renderer.push(`<!---->`);
					} else {
						$$renderer.push("<!--[-1-->");
						if (renderers.table) {
							$$renderer.push("<!--[-->");
							renderers.table($$renderer, spread_props([sanitizedRest(), {
								children: ($$renderer) => {
									tableContent($$renderer);
								},
								$$slots: { default: true }
							}]));
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					}
					$$renderer.push(`<!--]-->`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]-->`);
			} else if (type === "list" && renderers.list) {
				$$renderer.push("<!--[1-->");
				const listSnippet = snippetOverrides["list"];
				if (ordered) {
					$$renderer.push("<!--[0-->");
					function orderedListContent($$renderer) {
						const items = sanitizedRest().items ?? [];
						$$renderer.push(`<!--[-->`);
						const each_array_9 = ensure_array_like(items);
						for (let index = 0, $$length = each_array_9.length; index < $$length; index++) {
							let item = each_array_9[index];
							const OrderedListComponent = renderers.orderedlistitem || renderers.listitem;
							const orderedItemSnippet = snippetOverrides["orderedlistitem"] || snippetOverrides["listitem"];
							function orderedItemContent($$renderer) {
								$$renderer.push(`<!--[-->`);
								const each_array_10 = ensure_array_like(item.tokens ?? []);
								for (let k = 0, $$length = each_array_10.length; k < $$length; k++) {
									let itemToken = each_array_10[k];
									dispatch($$renderer, itemToken, childRest());
								}
								$$renderer.push(`<!--]-->`);
							}
							if (orderedItemSnippet) {
								$$renderer.push("<!--[0-->");
								orderedItemSnippet($$renderer, {
									...item,
									children: orderedItemContent
								});
								$$renderer.push(`<!---->`);
							} else if (OrderedListComponent) {
								$$renderer.push("<!--[1-->");
								if (OrderedListComponent) {
									$$renderer.push("<!--[-->");
									OrderedListComponent($$renderer, spread_props([item, {
										children: ($$renderer) => {
											orderedItemContent($$renderer);
										},
										$$slots: { default: true }
									}]));
									$$renderer.push("<!--]-->");
								} else {
									$$renderer.push("<!--[!-->");
									$$renderer.push("<!--]-->");
								}
							} else $$renderer.push("<!--[-1-->");
							$$renderer.push(`<!--]-->`);
						}
						$$renderer.push(`<!--]-->`);
					}
					if (listSnippet) {
						$$renderer.push("<!--[0-->");
						listSnippet($$renderer, {
							ordered,
							...sanitizedRest(),
							children: orderedListContent
						});
						$$renderer.push(`<!---->`);
					} else {
						$$renderer.push("<!--[-1-->");
						if (renderers.list) {
							$$renderer.push("<!--[-->");
							renderers.list($$renderer, spread_props([
								{ ordered },
								sanitizedRest(),
								{
									children: ($$renderer) => {
										orderedListContent($$renderer);
									},
									$$slots: { default: true }
								}
							]));
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					}
					$$renderer.push(`<!--]-->`);
				} else {
					$$renderer.push("<!--[-1-->");
					function unorderedListContent($$renderer) {
						const items = sanitizedRest().items ?? [];
						$$renderer.push(`<!--[-->`);
						const each_array_11 = ensure_array_like(items);
						for (let index = 0, $$length = each_array_11.length; index < $$length; index++) {
							let item = each_array_11[index];
							const UnorderedListComponent = renderers.unorderedlistitem || renderers.listitem;
							const unorderedItemSnippet = snippetOverrides["unorderedlistitem"] || snippetOverrides["listitem"];
							function unorderedItemContent($$renderer) {
								$$renderer.push(`<!--[-->`);
								const each_array_12 = ensure_array_like(item.tokens ?? []);
								for (let k = 0, $$length = each_array_12.length; k < $$length; k++) {
									let itemToken = each_array_12[k];
									dispatch($$renderer, itemToken, childRest());
								}
								$$renderer.push(`<!--]-->`);
							}
							if (unorderedItemSnippet) {
								$$renderer.push("<!--[0-->");
								unorderedItemSnippet($$renderer, {
									...item,
									children: unorderedItemContent
								});
								$$renderer.push(`<!---->`);
							} else if (UnorderedListComponent) {
								$$renderer.push("<!--[1-->");
								if (UnorderedListComponent) {
									$$renderer.push("<!--[-->");
									UnorderedListComponent($$renderer, spread_props([item, {
										children: ($$renderer) => {
											unorderedItemContent($$renderer);
										},
										$$slots: { default: true }
									}]));
									$$renderer.push("<!--]-->");
								} else {
									$$renderer.push("<!--[!-->");
									$$renderer.push("<!--]-->");
								}
							} else $$renderer.push("<!--[-1-->");
							$$renderer.push(`<!--]-->`);
						}
						$$renderer.push(`<!--]-->`);
					}
					if (listSnippet) {
						$$renderer.push("<!--[0-->");
						listSnippet($$renderer, {
							ordered,
							...sanitizedRest(),
							children: unorderedListContent
						});
						$$renderer.push(`<!---->`);
					} else {
						$$renderer.push("<!--[-1-->");
						if (renderers.list) {
							$$renderer.push("<!--[-->");
							renderers.list($$renderer, spread_props([
								{ ordered },
								sanitizedRest(),
								{
									children: ($$renderer) => {
										unorderedListContent($$renderer);
									},
									$$slots: { default: true }
								}
							]));
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					}
					$$renderer.push(`<!--]-->`);
				}
				$$renderer.push(`<!--]-->`);
			} else if (type === "html") {
				$$renderer.push("<!--[2-->");
				const { tag, ...localRest } = sanitizedRest();
				const htmlTag = sanitizedRest().tag;
				const htmlSnippet = htmlSnippetOverrides[htmlTag];
				const localRestForChildren = Object.fromEntries(Object.entries(localRest).filter(([key]) => key !== "attributes"));
				function htmlChildren($$renderer) {
					if (tokens && tokens.length) {
						$$renderer.push(`<!--[0--><!--[-->`);
						const each_array_13 = ensure_array_like(tokens);
						for (let index = 0, $$length = each_array_13.length; index < $$length; index++) {
							let childToken = each_array_13[index];
							dispatch($$renderer, childToken, localRestForChildren);
						}
						$$renderer.push(`<!--]-->`);
					} else if (!tokens) {
						$$renderer.push("<!--[1-->");
						rawTextLeaf($$renderer);
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]-->`);
				}
				if (htmlSnippet) {
					$$renderer.push("<!--[0-->");
					htmlSnippet($$renderer, {
						attributes: sanitizedRest().attributes,
						children: htmlChildren
					});
					$$renderer.push(`<!---->`);
				} else if (renderers.html && Object.hasOwn(renderers.html, htmlTag)) {
					$$renderer.push("<!--[1-->");
					const HtmlComponent = renderers.html[htmlTag];
					if (HtmlComponent) {
						$$renderer.push("<!--[0-->");
						if (HtmlComponent) {
							$$renderer.push("<!--[-->");
							HtmlComponent($$renderer, spread_props([sanitizedRest(), {
								children: ($$renderer) => {
									htmlChildren($$renderer);
								},
								$$slots: { default: true }
							}]));
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]-->`);
				} else {
					$$renderer.push("<!--[-1-->");
					const fallbackRest = Object.fromEntries(Object.entries(localRest).filter(([key]) => key !== "tokens"));
					const fallbackTokens = tokens ?? [];
					$$renderer.push(`<!--[-->`);
					const each_array_14 = ensure_array_like(fallbackTokens);
					for (let index = 0, $$length = each_array_14.length; index < $$length; index++) {
						let fallbackToken = each_array_14[index];
						dispatch($$renderer, fallbackToken, fallbackRest);
					}
					$$renderer.push(`<!--]-->`);
				}
				$$renderer.push(`<!--]-->`);
			} else {
				$$renderer.push("<!--[-1-->");
				const GeneralComponent = renderers[type];
				const typeSnippet = snippetOverrides[type];
				function renderChildren($$renderer) {
					if (tokens) {
						$$renderer.push("<!--[0-->");
						const { text: _text, raw: _raw, ...parserRest } = sanitizedRest();
						$$renderer.push(`<!--[-->`);
						const each_array_15 = ensure_array_like(tokens);
						for (let index = 0, $$length = each_array_15.length; index < $$length; index++) {
							let childToken = each_array_15[index];
							dispatch($$renderer, childToken, parserRest);
						}
						$$renderer.push(`<!--]-->`);
					} else {
						$$renderer.push("<!--[-1-->");
						rawTextLeaf($$renderer);
					}
					$$renderer.push(`<!--]-->`);
				}
				if (typeSnippet) {
					$$renderer.push("<!--[0-->");
					typeSnippet($$renderer, {
						...sanitizedRest(),
						streamingText,
						children: renderChildren
					});
					$$renderer.push(`<!---->`);
				} else if (GeneralComponent) {
					$$renderer.push("<!--[1-->");
					if (GeneralComponent) {
						$$renderer.push("<!--[-->");
						GeneralComponent($$renderer, spread_props([sanitizedRest(), {
							streamingText,
							children: ($$renderer) => {
								renderChildren($$renderer);
							},
							$$slots: { default: true }
						}]));
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]-->`);
			}
			$$renderer.push(`<!--]-->`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
// node_modules/@humanspeak/svelte-markdown/dist/utils/rendererKeys.js
/**
* Canonical key lists for markdown renderers and HTML tag renderers.
*
* These arrays and types drive the allow/deny filter utilities and serve as
* the single source of truth for which renderer and HTML tag names the
* library recognizes.
*
* @module
*/
/**
* Canonical array of every markdown renderer key.
*
* Re-exported publicly as `rendererKeys`. Built at runtime from
* `defaultRenderers` (filtering out the special `html` key).
*/
var rendererKeysInternal = Object.keys(defaultRenderers).filter((k) => k !== "html");
Object.keys(Html);
// node_modules/@humanspeak/svelte-markdown/dist/utils/component-props.js
/**
* Merges caller HTML tag renderers over the built-in map.
*
* Keys are canonicalized to lowercase to match the tag names emitted by the
* parser, so one tag has exactly one entry. Without this, `{ IFRAME: null }`
* would sit alongside the lowercase `iframe` default and the tag would render
* anyway, silently ignoring an explicit block.
*
* @param overrides Caller-supplied HTML renderers, in any casing.
* @returns Defaults with caller entries taking precedence, keyed by lowercase tag.
*/
var mergeHtmlRenderers = (overrides) => ({
	...defaultRenderers.html,
	...Object.fromEntries(Object.entries(overrides).map(([key, value]) => [key.toLowerCase(), value]))
});
/**
* Merges caller renderer overrides with the built-in renderer map.
*
* @param renderers Partial renderer overrides from component props.
* @returns Renderer map with default markdown and HTML renderers preserved.
*/
var buildCombinedRenderers = (renderers) => ({
	...defaultRenderers,
	...renderers,
	html: renderers.html ? mergeHtmlRenderers(renderers.html) : defaultRenderers.html
});
/**
* Gets renderer keys recognized by the component.
*
* @param extensionTokenNames Custom token names declared by Marked extensions.
* @returns Built-in markdown renderer keys followed by extension token names.
*/
var getAllRendererKeys = (extensionTokenNames) => [...rendererKeysInternal, ...extensionTokenNames];
/**
* Extracts markdown snippet overrides from rest props.
*
* @param rest Extra component props after known SvelteMarkdown props are removed.
* @param allRendererKeys Built-in and extension renderer keys to match.
* @returns Snippet overrides keyed by markdown token type.
*/
var getSnippetOverrides = (rest, allRendererKeys) => Object.fromEntries(allRendererKeys.filter((key) => key in rest && rest[key] != null).map((key) => [key, rest[key]]));
/**
* Extracts HTML snippet overrides from rest props.
*
* @param rest Extra component props after known SvelteMarkdown props are removed.
* @returns HTML snippet overrides keyed by tag name without the `html_` prefix.
*/
var getHtmlSnippetOverrides = (rest) => Object.fromEntries(Object.entries(rest).filter(([key, val]) => key.startsWith("html_") && val != null).map(([key, val]) => [key.slice(5).toLowerCase(), val]));
/**
* Removes snippet override props from the props forwarded to Parser.
*
* @param rest Extra component props after known SvelteMarkdown props are removed.
* @param allRendererKeys Built-in and extension renderer keys to exclude.
* @returns Props that should pass through to the rendered markdown tree.
*/
var getPassThroughProps = (rest, allRendererKeys) => {
	const snippetKeySet = /* @__PURE__ */ new Set([...allRendererKeys, ...Object.keys(rest).filter((key) => key.startsWith("html_"))]);
	return Object.fromEntries(Object.entries(rest).filter(([key]) => !snippetKeySet.has(key)));
};
// node_modules/@humanspeak/svelte-markdown/dist/utils/extension-options.js
var extensionIdentityId = 0;
var extensionIdentityIds = /* @__PURE__ */ new WeakMap();
var getExtensionIdentityId = (value) => {
	let id = extensionIdentityIds.get(value);
	if (!id) {
		id = ++extensionIdentityId;
		extensionIdentityIds.set(value, id);
	}
	return id;
};
var getFunctionIdentityId = (value) => typeof value === "function" ? getExtensionIdentityId(value) : null;
/**
* Gets the custom token names declared by Marked extensions.
*
* @param extensions Marked extensions passed to the component.
* @returns Token names that can be rendered by custom renderers or snippets.
*/
var getExtensionTokenNames = (extensions) => extensions.flatMap((extension) => extension.extensions?.map((tokenizer) => tokenizer.name) ?? []);
/**
* Gets Marked's resolved defaults for a set of extensions.
*
* @param extensions Marked extensions to resolve in a scoped Marked instance.
* @returns Marked defaults contributed by the extensions, or an empty object.
*/
var getExtensionDefaults = (extensions) => extensions.length > 0 ? new Marked(...extensions).defaults : {};
/**
* Checks whether any extension requires async token walking.
*
* @param extensions Marked extensions passed to the component.
* @returns True when at least one extension has `async: true`.
*/
var hasAsyncExtension = (extensions) => extensions.some((extension) => extension.async === true);
/**
* Builds an internal cache signature from extension object identity.
*
* The token cache serializes parser options, so opaque extension objects need
* stable WeakMap IDs to invalidate cached tokens when callers replace an
* equivalent-looking extension with different closure state.
*
* @param extensions Marked extensions used to configure parsing.
* @returns Serializable identity records included in parser cache inputs.
*/
var getExtensionCacheSignature = (extensions) => extensions.map((extension) => ({
	extension: getExtensionIdentityId(extension),
	async: extension.async ?? false,
	extensions: extension.extensions?.map((tokenizer) => {
		const tokenizerRecord = tokenizer;
		return {
			token: getExtensionIdentityId(tokenizer),
			name: tokenizer.name,
			level: tokenizerRecord.level ?? null,
			childTokens: tokenizerRecord.childTokens ?? null,
			start: getFunctionIdentityId(tokenizerRecord.start),
			tokenizer: getFunctionIdentityId(tokenizerRecord.tokenizer),
			renderer: getFunctionIdentityId(tokenizerRecord.renderer)
		};
	}) ?? null,
	hooks: extension.hooks ? getExtensionIdentityId(extension.hooks) : null,
	renderer: extension.renderer ? getExtensionIdentityId(extension.renderer) : null,
	tokenizer: extension.tokenizer ? getExtensionIdentityId(extension.tokenizer) : null,
	walkTokens: getFunctionIdentityId(extension.walkTokens)
}));
/**
* Builds the complete parser options object used by sync and async parsing.
*
* @param options Caller-provided parser options.
* @param extensions Marked extensions passed to the component.
* @returns Parser options merged with defaults, extension defaults, and cache signature.
*/
var buildParserOptions = (options, extensions) => {
	const extensionDefaults = getExtensionDefaults(extensions);
	const extensionCacheSignature = extensions.length > 0 ? getExtensionCacheSignature(extensions) : void 0;
	return {
		...defaultOptions,
		...extensionDefaults,
		...options,
		...extensionCacheSignature ? { _svelteMarkdownExtensionCacheSignature: extensionCacheSignature } : {}
	};
};
// node_modules/@humanspeak/svelte-markdown/dist/utils/token-cache.js
/**
* Token Cache
*
* Efficient caching layer for parsed markdown tokens.
* Built on top of the existing MemoryCache infrastructure with
* specialized features for markdown parsing optimization.
*
* Key features:
* - Fast FNV-1a hashing for cache keys
* - LRU eviction (inherited from MemoryCache)
* - TTL support (inherited from MemoryCache)
* - Handles large markdown documents efficiently
*
* @module token-cache
*/
/**
* Fast non-cryptographic hash function using FNV-1a algorithm.
* Optimized for speed over cryptographic security.
*
* FNV-1a (Fowler-Noll-Vo) provides:
* - Fast computation (single pass through string)
* - Good distribution (minimal collisions)
* - Small output size (base36 string)
*
* @param str - String to hash
* @returns Base36 hash string
*
* @example
* ```typescript
* const hash1 = hashString('# Hello World')
* const hash2 = hashString('# Hello World!')
* console.log(hash1 !== hash2) // true - different content = different hash
* ```
*/
var hashString = (str) => {
	let hash = 2166136261;
	for (let i = 0; i < str.length; i++) {
		hash ^= str.charCodeAt(i);
		hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
	}
	return (hash >>> 0).toString(36);
};
/**
* Generates a cache key from markdown source and parser options.
* Combines hashes of both source content and options to ensure
* different parsing configurations are cached separately.
*
* Handles non-serializable options (extensions, tokenizer, hooks, etc.) by:
* - Serializing functions by name/toString for stable keys
* - Detecting and handling circular references
* - Including ALL options that affect parsing
*
* @param source - Raw markdown string
* @param options - Svelte markdown parser options
* @returns Composite cache key
*
* @example
* ```typescript
* const key1 = getCacheKey('# Test', { gfm: true })
* const key2 = getCacheKey('# Test', { gfm: false })
* console.log(key1 !== key2) // true - different options = different key
* ```
*/
var optionsHashCache = /* @__PURE__ */ new WeakMap();
var getCacheKey = (source, options) => {
	const sourceHash = hashString(source);
	let optionsHash = optionsHashCache.get(options);
	if (!optionsHash) {
		const seen = /* @__PURE__ */ new WeakSet();
		optionsHash = hashString(JSON.stringify(options, (_, value) => {
			if (typeof value === "function") return value.name || value.toString();
			if (value && typeof value === "object") {
				if (seen.has(value)) return "[Circular]";
				seen.add(value);
			}
			return value;
		}));
		optionsHashCache.set(options, optionsHash);
	}
	return `${sourceHash}:${optionsHash}`;
};
/**
* Specialized cache for markdown token storage.
* Extends MemoryCache with markdown-specific convenience methods.
*
* Inherits from MemoryCache:
* - Automatic LRU eviction when maxSize is reached
* - TTL-based expiration for time-sensitive content
* - Advanced deletion (deleteByPrefix, deleteByMagicString)
*
* Collision safety:
* - Each entry stores the exact source string alongside its tokens. On a hit
*   the stored source is compared to the requested source, so a 32-bit
*   FNV-1a hash collision is treated as a miss rather than serving a
*   different document's tokens (relevant under a shared SSR singleton).
*
* Performance characteristics:
* - Cache hit: <1ms (vs 50-200ms parsing) plus one string comparison
* - Memory: ~5MB of tokens for 50 cached documents (default maxSize); the
*   retained source strings roughly double this for text-heavy documents
* - Hash computation: ~0.05ms for 10KB, ~0.5ms for 100KB
*
* Note: the inherited raw `get()`/`set()` operate on the wrapped
* {@link TokenCacheEntry} shape (`{ source, tokens }`), not on the bare token
* array — use `getTokens`/`setTokens` for token access.
*
* @class TokenCache
* @extends MemoryCache<TokenCacheEntry>
*
* @example
* ```typescript
* // Create cache with custom settings
* const cache = new TokenCache({
*     maxSize: 100,        // Cache up to 100 documents
*     ttl: 5 * 60 * 1000  // Expire after 5 minutes
* })
*
* // Check cache before parsing
* const cached = cache.getTokens(markdown, options)
* if (cached) {
*     return cached // Fast path - no parsing needed
* }
*
* // Parse and cache
* const tokens = lexer.lex(markdown)
* cache.setTokens(markdown, options, tokens)
* ```
*/
var TokenCache = class extends MemoryCache {
	/**
	* Creates a new TokenCache instance.
	*
	* @param options - Cache configuration
	* @param options.maxSize - Maximum number of documents to cache (default: 50)
	* @param options.ttl - Time-to-live in milliseconds (default: 5 minutes)
	*/
	constructor(options) {
		super({
			maxSize: 50,
			ttl: 3e5,
			...options
		});
	}
	/**
	* Retrieves cached tokens for given markdown source and options.
	* Returns undefined if not cached or expired.
	*
	* @param source - Raw markdown string
	* @param options - Svelte markdown parser options
	* @returns Cached tokens or undefined
	*
	* @example
	* ```typescript
	* const tokens = cache.getTokens('# Hello', { gfm: true })
	* if (tokens) {
	*     console.log('Cache hit!')
	* }
	* ```
	*/
	getTokens(source, options) {
		const key = getCacheKey(source, options);
		const entry = this.get(key);
		if (entry === void 0 || entry.source !== source) return;
		return entry.tokens;
	}
	/**
	* Stores parsed tokens in cache for given markdown source and options.
	* If cache is full, oldest entry is evicted (LRU).
	*
	* @param source - Raw markdown string
	* @param options - Svelte markdown parser options
	* @param tokens - Parsed token array or token list
	*
	* @example
	* ```typescript
	* const tokens = lexer.lex(markdown)
	* cache.setTokens(markdown, options, tokens)
	* ```
	*/
	setTokens(source, options, tokens) {
		const key = getCacheKey(source, options);
		this.set(key, {
			source,
			tokens
		});
	}
	/**
	* Checks if tokens are cached for this exact source.
	* Useful for cache statistics or conditional logic.
	*
	* Applies the same source verification as {@link getTokens}: a hash
	* collision with a different document reports `false`, so `hasTokens`
	* can never claim a hit that `getTokens` would refuse to serve.
	*
	* @param source - Raw markdown string
	* @param options - Svelte markdown parser options
	* @returns True if this source's tokens are cached and not expired
	*
	* @example
	* ```typescript
	* if (cache.hasTokens(markdown, options)) {
	*     console.log('Cache hit - no parsing needed')
	* }
	* ```
	*/
	hasTokens(source, options) {
		return this.getTokens(source, options) !== void 0;
	}
	/**
	* Removes cached tokens for specific source and options.
	*
	* @param source - Raw markdown string
	* @param options - Svelte markdown parser options
	* @returns True if entry was removed, false if not found
	*
	* @example
	* ```typescript
	* cache.deleteTokens(markdown, options) // Remove specific cached entry
	* ```
	*/
	deleteTokens(source, options) {
		const key = getCacheKey(source, options);
		return this.delete(key);
	}
	/**
	* Removes all cached tokens from the cache.
	*
	* @example
	* ```typescript
	* cache.clearAllTokens() // Clear entire cache
	* ```
	*/
	clearAllTokens() {
		this.clear();
	}
};
/**
* Global singleton instance for shared token caching.
* Use this instance across your application for maximum cache efficiency.
*
* @example
* ```typescript
* import { tokenCache } from './token-cache.js'
*
* const cached = tokenCache.getTokens(markdown, options)
* if (!cached) {
*     const tokens = lexer.lex(markdown)
*     tokenCache.setTokens(markdown, options, tokens)
* }
* ```
*/
var tokenCache = new TokenCache();
// node_modules/@humanspeak/svelte-markdown/dist/utils/token-cleanup.js
/**
* Matches HTML tags with comprehensive coverage of edge cases.
* Pattern breakdown:
* - <\/?         : Matches opening < and optional /
* - [a-zA-Z]     : Tag must start with letter
* - [a-zA-Z0-9-] : Subsequent chars can be letters, numbers, or hyphens
* - (?:\s+[^>]*)?: Optional attributes
* - >            : Closing bracket
*
* @const {RegExp}
*/
var htmlTagRegex = /<\/?([a-zA-Z][a-zA-Z0-9-]{0,})(?:\s+[^>]*)?>/;
/**
* Regex pattern for self-closing HTML tags.
* @const {RegExp}
*/
/**
* Analyzes a string to determine if it contains an HTML tag and its characteristics.
*
* @param {string} raw - Raw string potentially containing an HTML tag
* @returns {Object|null} Returns null if no tag found, otherwise returns:
*    {
*      tag: string      - The name of the HTML tag
*      isOpening: bool  - True if opening tag, false if closing
*    }
*
* @example
* isHtmlOpenTag('<div class="test">') // Returns { tag: 'div', isOpening: true }
* isHtmlOpenTag('</span>') // Returns { tag: 'span', isOpening: false }
* isHtmlOpenTag('plain text') // Returns null
*/
var isHtmlOpenTag = (raw) => {
	const match = htmlTagRegex.exec(raw);
	if (!match) return null;
	return {
		tag: match[1].toLowerCase(),
		isOpening: !raw.startsWith("</")
	};
};
/**
* Formats individual HTML tokens to ensure self-closing tags are properly formatted.
* This handles cases like <br> -> <br/> without affecting the token structure.
*
* @param {Token} token - HTML token to format
* @returns {Token} Formatted token with proper self-closing syntax
*/
/**
* Whether an opening-tag source string is genuinely self-closing.
*
* A trailing `/>` is not sufficient. Per the HTML tokenizer, `/` only starts
* the self-closing state from before-attribute-name, after-attribute-name, or
* after a *quoted* value. Inside an unquoted attribute value it is an ordinary
* character, so `<a href=https://example.com/>` is a plain opening tag whose
* href ends in a slash — reading it as self-closing drops the element's
* children on the floor.
*
* @param raw Source text of a single opening tag, e.g. `<img src="x"/>`.
*/
var isSelfClosedTagSource = (raw) => {
	if (!raw.endsWith("/>")) return false;
	const beforeSlash = raw.slice(0, -2);
	if (/^<[a-zA-Z][^\s/>]*$/.test(beforeSlash)) return true;
	return /[\s"']$/.test(beforeSlash);
};
var formatSelfClosingHtmlToken = (token) => {
	const tagMatch = token.raw.match(/<\/?([a-zA-Z][a-zA-Z0-9-]*)/i);
	if (!tagMatch) return token;
	if (token.raw.startsWith("</")) return token;
	const tagName = tagMatch[1].toLowerCase();
	if (!isSelfClosedTagSource(token.raw) && !isVoidElement(tagName)) return token;
	const formattedRaw = token.raw.endsWith("/>") ? token.raw : token.raw.replace(/\s*>$/, "/>");
	return {
		...token,
		raw: formattedRaw,
		...formattedRaw.length !== token.raw.length && { sourceLength: token.raw.length },
		tag: tagName,
		attributes: extractAttributes(token.raw),
		tokens: []
	};
};
/**
* Parses HTML attributes from a tag string into a structured object.
* Handles both single and double quoted attributes, plus bare boolean
* attributes. Quoted regions are stripped before the boolean pass so
* space-separated words inside a value (e.g. `bar` in `title="foo bar
* baz"`) aren't mistakenly harvested as boolean attributes (issue #297).
*
* @param raw - Raw HTML tag string containing attributes.
* @returns Map of attribute names to their values. Boolean attributes
*   are represented as `''`.
*
* @example
* extractAttributes('<div class="foo" id="bar">')
* // → { class: 'foo', id: 'bar' }
*
* extractAttributes('<Tip title="foo bar baz">')
* // → { title: 'foo bar baz' }   // not { title: …, bar: '' }
*
* extractAttributes('<input type="checkbox" checked disabled>')
* // → { type: 'checkbox', checked: '', disabled: '' }
*
* @internal
*/
var extractAttributes = (raw) => {
	const attributes = {};
	const quotedRegex = /([a-zA-Z][\w-]*)=(?:"([^"]*)(?:"|$)|'([^']*)(?:'|$))/g;
	let match;
	while ((match = quotedRegex.exec(raw)) !== null) {
		const key = match[1];
		attributes[key] = (match[2] ?? match[3] ?? "").trim();
	}
	const stripped = raw.replace(/[a-zA-Z][\w-]*=(?:"[^"]*(?:"|$)|'[^']*(?:'|$))/g, " ");
	const booleanRegex = /(?:^|\s)([a-zA-Z][\w-]*?)(?=[\s>]|$)/g;
	while ((match = booleanRegex.exec(stripped)) !== null) {
		const [, key] = match;
		if (key && !attributes[key]) attributes[key] = "";
	}
	return attributes;
};
/**
* Serializes an HTML attribute map into a string for tag construction.
* Escapes double quotes in values to prevent attribute injection.
*
* @param {Record<string, string>} attributes - Map of attribute names to values
* @returns {string} Serialized attributes string with leading spaces
*
* @example
* serializeAttributes({ class: 'foo', id: 'bar' })
* // Returns ' class="foo" id="bar"'
*
* @internal
*/
var serializeAttributes = (attributes) => Object.entries(attributes).map(([key, value]) => ` ${key}="${value.replace(/"/g, "&quot;")}"`).join("");
/**
* Fast scan used by `expandHtmlToken` to decide whether the htmlparser2
* expansion path is worth invoking. Returns true when the input contains
* at least two `<` characters separated by a `>` — i.e. the cheapest
* possible witness that more than one tag is present.
*
* Two `indexOf` calls keep this cheap enough for the perf gate: false positives
* just route through htmlparser2 (correct, slightly slower); false negatives
* cannot occur for any input that contains two tags.
*
* @internal
*/
var hasMultipleTags = (html) => {
	const firstClose = html.indexOf(">");
	if (firstClose === -1) return false;
	return html.indexOf("<", firstClose + 1) !== -1;
};
/**
* Single-pass expansion of one html token's raw string into nested tokens.
* Opening tags push a fresh child array onto the stack; closing tags pop it and
* attach the collected children to the opening token via `tokens`.
*
* Behavior is matched to the legacy two-pass pipeline:
*   - Self-closing tags (`<br>` etc.) are emitted with `<.../>` form.
*   - Auto-closes injected by htmlparser2 at end-of-input (when the
*     source did not literally contain `</tag>`) keep the children flat
*     under the opening tag rather than nesting them — this preserves
*     the legacy "partial result on unclosed tags" output.
*   - Whitespace-only text between tags is dropped.
*
* Post-condition (depended on by `IncrementalParser`, see #291): an html
* token's `.tokens` array is set only when the element is *resolved* — a
* real (non-implied) closing tag was seen, or the tag was self-closing
* (`<br/>`, `<widget />`), which resolves it with no children. Unclosed
* openings leave `.tokens` as `undefined`, which is how downstream
* streaming code distinguishes `<div>` (still streaming) from
* `<div></div>` (genuinely empty).
*
* @internal
*/
var expandHtmlBlockNested = (html, provenance, input) => {
	const root = [];
	const stack = [root];
	/** Source offset where each emitted token starts, for root source spans. */
	const starts = /* @__PURE__ */ new Map();
	let textStart = 0;
	/**
	* Open elements awaiting their close event.
	*
	* A self-closing element was already emitted whole and pushed nothing onto
	* `stack`, but htmlparser2 still emits an implied close for it, so it must
	* occupy a slot here — otherwise that close matches an enclosing element of
	* the same name and pops the parent instead (`<div><div/>after</div>`
	* orphaning `after`). It carries nothing else, since its close is only
	* absorbed, never resolved.
	*/
	const opens = [];
	let currentText = "";
	let textMapping = provenance ? mappedSource("") : void 0;
	let previousEntity;
	const flushText = () => {
		if (currentText.length === 0) return;
		if (currentText.trim()) {
			const textToken = {
				type: "text",
				raw: currentText,
				text: currentText
			};
			starts.set(textToken, textStart);
			if (provenance && input) provenance.set(textToken, {
				exact: true,
				sourceSpans: textMapping.runs.flatMap((run) => run.sources),
				text: textMapping,
				raw: textMapping
			});
			stack[stack.length - 1].push(textToken);
		}
		currentText = "";
		if (provenance) textMapping = mappedSource("");
	};
	const mapOpening = (token, start, end) => {
		if (!provenance || !input) return;
		const span = sliceMapped(input, start, end);
		provenance.set(token, {
			exact: true,
			sourceSpans: span.runs.flatMap((run) => run.sources),
			raw: span.value === token.raw ? span : replacementMapped(token.raw, span)
		});
	};
	const parser = new htmlparser2.Parser({
		onopentag: (name, attributes) => {
			flushText();
			if (isVoidElement(name) || isSelfClosedTagSource(html.slice(parser.startIndex, parser.endIndex + 1))) {
				const selfClosed = {
					type: "html",
					raw: `<${name}${serializeAttributes(attributes)}/>`,
					tag: name,
					attributes,
					tokens: []
				};
				mapOpening(selfClosed, parser.startIndex, parser.endIndex + 1);
				starts.set(selfClosed, parser.startIndex);
				stack[stack.length - 1].push(selfClosed);
				opens.push({
					tag: name,
					selfClosed: true
				});
				return;
			}
			const childTokens = [];
			const opening = {
				type: "html",
				raw: `<${name}${serializeAttributes(attributes)}>`,
				tag: name,
				attributes
			};
			mapOpening(opening, parser.startIndex, parser.endIndex + 1);
			starts.set(opening, parser.startIndex);
			stack[stack.length - 1].push(opening);
			stack.push(childTokens);
			opens.push({
				tag: name,
				opening,
				childTokens,
				startIndex: parser.startIndex
			});
		},
		ontext: (text) => {
			if (currentText.length === 0) textStart = parser.startIndex;
			currentText += text;
			if (provenance && input) {
				const span = sliceMapped(input, parser.startIndex, parser.endIndex + 1);
				const event = parser.endIndex < parser.startIndex ? previousEntity : span;
				if (event) {
					const mapping = event.value === text ? event : replacementMapped(text, event);
					textMapping = concatMapped(textMapping, mapping);
				}
				if (span.value) previousEntity = span;
			}
		},
		onclosetag: (name, implied) => {
			flushText();
			if (opens.length === 0) return;
			const top = opens[opens.length - 1];
			if (top.tag !== name) return;
			opens.pop();
			if (top.selfClosed) return;
			stack.pop();
			if (!implied) {
				const resolvedOpening = top.opening;
				resolvedOpening.sourceLength = parser.endIndex - top.startIndex + 1;
				resolvedOpening.tokens = top.childTokens;
			} else {
				const parent = stack[stack.length - 1];
				for (const child of top.childTokens) parent.push(child);
			}
		}
	}, {
		xmlMode: false,
		recognizeSelfClosing: true
	});
	parser.write(html);
	parser.end();
	flushText();
	assignRootSourceSpans(root, starts, html.length);
	return root;
};
/**
* Source span of a root html opening that is still waiting for its closing
* tag. Kept off the token: `sourceLength` on an html token means "resolved"
* to the incremental parser's unclosed-HTML detector (#291). Read back by
* `pairFlatHtmlTokens` when a later `</tag>` closes it.
*/
var unresolvedSourceSpans = /* @__PURE__ */ new WeakMap();
/**
* Makes the root tokens of one expanded html token add up to that token's
* source length. Each root spans from where it starts in the source to where
* the next root starts (the first from 0, the last to the end), so dropped
* whitespace and trailing newlines are counted, and re-serialized tags
* (`<br>` -> `<br/>`, lowercased names and attributes) and decoded entities
* no longer shift the offsets the incremental parser computes from them.
*
* @internal
*/
var assignRootSourceSpans = (root, starts, sourceLength) => {
	for (let i = 0; i < root.length; i++) {
		const token = root[i];
		const start = i === 0 ? 0 : starts.get(token) ?? 0;
		const end = i === root.length - 1 ? sourceLength : starts.get(root[i + 1]) ?? sourceLength;
		if (token.type === "html" && token.tokens === void 0) unresolvedSourceSpans.set(token, end - start);
		else token.sourceLength = end - start;
	}
};
/** Source characters a token consumed; see {@link assignRootSourceSpans}. */
var getSourceSpan = (token) => token.sourceLength ?? unresolvedSourceSpans.get(token) ?? token.raw.length;
/** Start of a CommonMark type-1 HTML block (`<pre`, `<script`, `<style`,
*  `<textarea`), which only its matching closing tag ends. */
var RAW_TEXT_BLOCK_START_RE = /^ {0,3}<(pre|script|style|textarea)(?=[\s>]|$)/i;
/** Start of a CommonMark type-4 HTML block (a declaration, `<!DOCTYPE`). */
var DECLARATION_START_RE = /^ {0,3}<![a-zA-Z]/;
/**
* True for the raw of an html root that opens a CommonMark HTML block of
* types 1–5 without containing its terminator. Those blocks are not ended by
* a blank line — they run to their terminator, or to the end of the input
* while unclosed — so the next chunk can still extend them across any number
* of blank lines. Shapes cleanup leaves for them (marked 15):
*
*   '<!-- a comment\n\n'   => html{ raw: '<!-- a comment', block: true } + space
*   '<!-- a comment\n\nsp' => html{ raw: '<!-- a comment\n\nsp', block: true }
*   '<?php x;\n\n'         => html{ raw: '<?php x;', block: true } + space
*   '<![CDATA[ a\n\n'      => html{ raw: '<![CDATA[ a', block: true } + space
*   '<pre>\nkeep\n\n  th'  => html{ raw: '<pre>\nkeep\n\n  th', block: true }
*
* No `tag` and no `sourceLength`: the tag-based detector cannot see the first
* four. A type-1 opening that cleanup expanded carries `tag` and is caught
* there too; checked here so `<pre` before its `>` is covered as well.
* Inspects the start in O(1); only a matching opener searches its own raw.
* Used by `IncrementalParser` and by `expandHtmlToken` below.
*
* @param raw - Raw source of an html root token without a known span
* @returns `true` if the block is still waiting for its terminator
* @example
* ```typescript
* isUnterminatedHtmlBlock('<!-- a comment') // true
* isUnterminatedHtmlBlock('<!-- a comment\n\nspanning -->') // false
* isUnterminatedHtmlBlock('<div>') // false (tag-based detector's job)
* ```
*/
var isUnterminatedHtmlBlock = (raw) => {
	const start = raw.indexOf("<");
	if (start < 0 || start > 3) return false;
	if (raw.startsWith("<!--", start)) return !raw.includes("-->", start + 2);
	if (raw.startsWith("<?", start)) return !raw.includes("?>", start + 1);
	if (raw.startsWith("<![CDATA[", start)) return !raw.includes("]]>", start + 9);
	if (DECLARATION_START_RE.test(raw)) return !raw.includes(">", start + 2);
	const rawText = RAW_TEXT_BLOCK_START_RE.exec(raw);
	return rawText !== null && !raw.toLowerCase().includes(`</${rawText[1].toLowerCase()}>`);
};
/**
* Roots cleanup produced from an html block that is still waiting for its
* terminator (`isUnterminatedHtmlBlock` on the marked token's raw). Once
* such a block contains a tag, cleanup expands it and no produced root
* carries the opener any more (`<?pi\n<li>x</li>\n\n` => text `x` + space;
* `<!--\n<hr>\n\n` => html `<!--\n<hr/>` with a `sourceLength`), so the
* incremental parser reads this set instead. Kept off the token so rendered
* output and semantic equality do not change.
*/
var unterminatedHtmlRoots = /* @__PURE__ */ new WeakSet();
/**
* True for a token cleanup produced from an html block that is still
* waiting for its terminator; see `unterminatedHtmlRoots`.
*
* @param token - A token returned by `shrinkHtmlTokens`
* @returns `true` if the token came from an unterminated html block
* @example
* ```typescript
* const [root] = shrinkHtmlTokens(new Lexer().lex('<?pi\n<li>x</li>\n'))
* isFromUnterminatedHtmlBlock(root) // true
* ```
*/
var isFromUnterminatedHtmlBlock = (token) => unterminatedHtmlRoots.has(token);
/**
* Expands a single html token. Single-tag inputs (the dominant inline
* shape — opening tag alone, closing tag alone, self-closing) skip
* htmlparser2 entirely and go through the cheap `formatSelfClosingHtmlToken`
* path. Anything with two or more tags routes through
* `expandHtmlBlockNested` for inline nesting. The roots of a block html
* token that is still waiting for its terminator are recorded in
* `unterminatedHtmlRoots`.
*
* @internal
*/
var expandHtmlToken = (token, provenance) => {
	const nested = hasMultipleTags(token.raw);
	const expansion = nested ? expandHtmlBlockNested(token.raw, provenance, provenance?.get(token)?.raw) : [formatSelfClosingHtmlToken(token)];
	if (provenance && !nested) {
		const own = provenance.get(token);
		if (own) provenance.set(expansion[0], {
			...own,
			raw: own.raw && own.raw.value !== expansion[0].raw ? replacementMapped(expansion[0].raw, own.raw) : own.raw
		});
	}
	if (token.block && isUnterminatedHtmlBlock(token.raw)) for (const root of expansion) unterminatedHtmlRoots.add(root);
	return expansion;
};
/**
* Pair-matches flat html opens/closes that span across separate marked
* tokens (e.g. marked emits `<details>` and `</details>` as two
* top-level html tokens with markdown blocks between them). Tokens that
* `expandHtmlToken` already nested (recognizable by the populated `tokens`
* array on an html token) are passed through opaquely — no recursion, no
* re-walk.
*
* @internal
*/
var pairFlatHtmlTokens = (tokens, provenance) => {
	const result = [];
	const stack = [];
	for (let i = 0; i < tokens.length; i++) {
		const token = tokens[i];
		if (token.type !== "html") {
			result.push(token);
			continue;
		}
		if ("tokens" in token && Array.isArray(token.tokens)) {
			result.push(token);
			continue;
		}
		const tagInfo = isHtmlOpenTag(token.raw);
		if (!tagInfo) {
			result.push(token);
			continue;
		}
		if (isSelfClosedTagSource(token.raw)) {
			result.push(token);
			continue;
		}
		if (tagInfo.isOpening) {
			stack.push({
				tag: tagInfo.tag,
				startIndex: result.length
			});
			result.push(token);
		} else {
			const lastOpen = stack.pop();
			if (!lastOpen || lastOpen.tag !== tagInfo.tag) {
				result.push(token);
				continue;
			}
			const startIndex = lastOpen.startIndex;
			const innerTokens = result.splice(startIndex + 1, result.length - startIndex - 1);
			const openingToken = result.pop();
			const sourceLength = getSourceSpan(openingToken) + innerTokens.reduce((sum, innerToken) => sum + getSourceSpan(innerToken), 0) + getSourceSpan(token);
			const paired = {
				type: "html",
				raw: openingToken.raw,
				tag: lastOpen.tag,
				tokens: innerTokens,
				attributes: extractAttributes(openingToken.raw),
				sourceLength
			};
			if (provenance) provenance.transfer(openingToken, paired);
			result.push(paired);
		}
	}
	return result;
};
/**
* Shallow structural equality for two token arrays, comparing length and
* per-index reference identity (not deep value equality). Used to detect when a
* recursive clean produced no change, so the caller can preserve the original
* object identity instead of allocating a fresh one.
*
* Acts as a type guard: a truthy result narrows `left` to `Token[]`.
*
* @param {Token[] | undefined} left - The original token array (may be undefined).
* @param {Token[]} right - The freshly cleaned token array to compare against.
* @returns {boolean} `true` when both arrays have the same length and each
*   element is reference-equal; `false` otherwise (including when `left` is undefined).
*
* @example
* const a = [{ type: 'text', raw: 'x', text: 'x' }]
* tokensShallowEqual(a, [...a]) // true — same element references
* tokensShallowEqual(a, [{ type: 'text', raw: 'x', text: 'x' }]) // false — new reference
*/
var tokensShallowEqual = (left, right) => {
	if (!left || left.length !== right.length) return false;
	return left.every((token, index) => token === right[index]);
};
/**
* Cleans a single list item's nested tokens while preserving object identity
* across streaming clean passes. Returns the original `item` reference when it
* already carries the correct `listItemIndex` and its cleaned tokens are
* reference-equal to the input (no nested change); otherwise returns a new
* object with the stamped index and cleaned tokens.
*
* Preserving identity lets the render layer keep the item's DOM node mounted
* instead of remounting it on every streaming flush.
*
* @param {Tokens.ListItem} item - The list item token to clean.
* @param {number} index - The item's zero-based position within the parent list.
* @returns {IndexedListItem} The original item when unchanged, otherwise a new
*   cleaned item stamped with `listItemIndex`.
*
* @example
* const item = list.items[0]
* const cleaned = cleanListItem(item, 0)
* // cleaned === item when nothing nested changed on a re-clean
*/
var cleanListItem = (item, index, provenance) => {
	const cleanedTokens = item.tokens ? shrinkHtmlTokens(item.tokens, provenance) : [];
	const indexedItem = item;
	if (indexedItem.listItemIndex === index && tokensShallowEqual(item.tokens, cleanedTokens)) return indexedItem;
	const cleaned = {
		...item,
		listItemIndex: index,
		tokens: cleanedTokens
	};
	provenance?.transfer(item, cleaned);
	return cleaned;
};
/**
* Cleans a single table cell's nested tokens while preserving object identity
* across streaming clean passes. Returns the original `cell` reference when its
* cleaned tokens are reference-equal to the input (no nested change); otherwise
* returns a new object with the cleaned tokens.
*
* Preserving identity lets the render layer keep the cell's DOM node mounted
* instead of remounting it on every streaming flush.
*
* @param {Tokens.TableCell} cell - The table header or body cell to clean.
* @returns {Tokens.TableCell} The original cell when unchanged, otherwise a new
*   cleaned cell.
*
* @example
* const cell = table.rows[0][0]
* const cleaned = cleanTableCell(cell)
* // cleaned === cell when nothing nested changed on a re-clean
*/
var cleanTableCell = (cell, provenance) => {
	const cleanedTokens = cell.tokens ? shrinkHtmlTokens(cell.tokens, provenance) : [];
	if (tokensShallowEqual(cell.tokens, cleanedTokens)) return cell;
	const cleaned = {
		...cell,
		tokens: cleanedTokens
	};
	provenance?.transfer(cell, cleaned);
	return cleaned;
};
/**
* Primary entry point for HTML token processing. Transforms flat token arrays
* into properly nested structures while preserving HTML semantics.
*
* Key features:
* - Breaks down complex HTML structures into atomic tokens
* - Formats self-closing tags with proper syntax (e.g., <br> -> <br/>)
* - Maintains attribute information
* - Preserves proper nesting relationships
* - Handles malformed HTML gracefully
*
* @param {Token[]} tokens - Array of tokens to process
* @returns {Token[]} Processed and properly nested token array
*
* @example
* const tokens = [
*   { type: 'html', raw: '<div class="wrapper">' },
*   { type: 'text', raw: 'content' },
*   { type: 'html', raw: '</div>' }
* ];
* shrinkHtmlTokens(tokens);
* // Returns nested structure with proper token relationships
*
* @public
*/
var shrinkHtmlTokens = (tokens, provenance) => {
	const expanded = [];
	for (const token of tokens) if (token.type !== "html" && "tokens" in token && Array.isArray(token.tokens)) {
		const t = token;
		provenance?.invalidate(t);
		t.tokens = shrinkHtmlTokens(t.tokens, provenance);
		expanded.push(token);
	} else if (token.type === "list") {
		provenance?.invalidate(token);
		token.items = token.items.map((item, index) => cleanListItem(item, index, provenance));
		expanded.push(token);
	} else if (token.type === "table") {
		provenance?.invalidate(token);
		const tableToken = token;
		if (tableToken.header) tableToken.header = tableToken.header.map((cell) => cleanTableCell(cell, provenance));
		if (tableToken.rows) tableToken.rows = tableToken.rows.map((row) => row.map((cell) => cleanTableCell(cell, provenance)));
		expanded.push(token);
	} else if (token.type === "html") {
		const expansion = expandHtmlToken(token, provenance);
		for (const t of expansion) expanded.push(t);
	} else expanded.push(token);
	return pairFlatHtmlTokens(expanded, provenance);
};
// node_modules/@humanspeak/svelte-markdown/dist/utils/streaming-provenance/grammar.js
var empty$1 = () => mappedSource("");
var newline = (view, at) => sliceMapped(view, at, at + 1);
var unescapeLabel = (view, rules) => replaceMapped(view, rules.other.outputLinkReplace, (_match, input) => sliceMapped(input, 1));
var decodeNumeric = (view, rules) => replaceMapped(view, rules.other.numericCharacterReference, (match, input) => {
	const code = Number.parseInt(match[1] ?? match[2], match[1] === void 0 ? 16 : 10);
	return replacementMapped(code === 0 || code > 1114111 || code >= 55296 && code <= 57343 ? "�" : String.fromCodePoint(code), input);
});
var expandTabs = (view, indent = 0) => {
	let col = indent;
	const pieces = [];
	let at = 0;
	for (const char of view.value) {
		const input = sliceMapped(view, at, at + char.length);
		const width = char === "	" ? 4 - col % 4 : 1;
		pieces.push(char === "	" ? replacementMapped(" ".repeat(width), input) : input);
		col += width;
		at += char.length;
	}
	return concatMapped(...pieces);
};
var linesMapped = (view) => {
	let at = 0;
	return view.value.split("\n").map((line) => {
		const result = sliceMapped(view, at, at + line.length);
		at += line.length + 1;
		return result;
	});
};
/** Replay list contents from the authoritative item raw spans. Items are sequential, never searched. */
var listViews = (raw, token, rules, pedantic) => {
	let cursor = 0;
	const bullet = token.ordered ? `\\d{1,9}\\${token.raw.match(/^ *\d+([.)])/)[1]}` : pedantic ? "[*+-]" : `\\${token.raw.trimStart()[0]}`;
	return token.items.map((item, index) => {
		const itemRaw = sliceMapped(raw, cursor, cursor + item.raw.length);
		assertMappedValue(itemRaw, item.raw, "list item raw");
		cursor += item.raw.length;
		const cap = rules.other.listItemRegex(bullet).exec(itemRaw.value);
		const first = cap[2].split("\n", 1)[0];
		const bulletIndent = cap[1].length;
		let line = sliceMapped(itemRaw, bulletIndent, bulletIndent + first.length);
		line = pedantic ? expandTabs(line, bulletIndent) : replaceMapped(line, rules.other.leadingSpaceTab, (_match, input) => expandTabs(input, bulletIndent));
		let indent;
		let contents;
		if (pedantic) {
			indent = 2;
			contents = sliceMapped(line, line.value.length - line.value.trimStart().length);
		} else if (!line.value.trim()) {
			indent = bulletIndent + 1;
			contents = empty$1();
		} else {
			indent = line.value.search(rules.other.nonSpaceChar);
			indent = indent > 4 ? 1 : indent;
			contents = sliceMapped(line, indent);
			indent += bulletIndent;
		}
		const lines = linesMapped(itemRaw);
		if (itemRaw.value.endsWith("\n")) lines.pop();
		let lineOffset = lines[0].value.length;
		for (let i = 1; i < lines.length; i++) {
			let next = lines[i];
			if (pedantic) next = replaceMapped(next, rules.other.listReplaceNesting, (_match, input) => replacementMapped("  ", input));
			const expanded = pedantic ? next : replaceMapped(next, rules.other.leadingSpaceTab, (_match, input) => replaceMapped(input, rules.other.tabCharGlobal, (_m, tab) => replacementMapped("    ", tab)));
			const dedented = expanded.value.search(rules.other.nonSpaceChar) >= indent || !next.value.trim();
			contents = concatMapped(contents, newline(itemRaw, lineOffset), dedented ? sliceMapped(expanded, indent) : next);
			lineOffset += lines[i].value.length + 1;
		}
		if (index === token.items.length - 1) contents = trimMapped(contents, true);
		return contents;
	});
};
var tableCells = (row, count) => {
	const cells = [];
	let at = 0;
	for (let i = 0; i < row.value.length; i++) {
		if (row.value[i] !== "|") continue;
		let slashes = 0;
		for (let j = i - 1; j >= 0 && row.value[j] === "\\"; j--) slashes++;
		if (slashes % 2) continue;
		cells.push(sliceMapped(row, at, i));
		at = i + 1;
	}
	cells.push(sliceMapped(row, at));
	if (!cells[0].value.trim()) cells.shift();
	if (cells.length && !cells.at(-1).value.trim()) cells.pop();
	if (count) {
		cells.splice(count);
		while (cells.length < count) cells.push(empty$1());
	}
	return cells.map((cell) => replaceMapped(trimMapped(cell), /\\\|/g, (_match, input) => sliceMapped(input, 1)));
};
var normalizeBlock = (view, pedantic) => pedantic ? replaceMapped(replaceMapped(view, /\t/g, (_match, input) => replacementMapped("    ", input)), /^ +$/gm, () => empty$1()) : view;
var createTextAdapters = (rules, pedantic) => {
	const adaptParagraph = (event, raw) => {
		const token = event.token;
		let text;
		if (event.rule === "reflink" && token.type !== "text") {
			const cap = rules.inline.reflink.exec(raw.value) ?? rules.inline.nolink.exec(raw.value);
			text = unescapeLabel(sliceMapped(raw, raw.value[0] === "!" ? 2 : 1, (raw.value[0] === "!" ? 2 : 1) + cap[1].length), rules);
		} else text = sliceMapped(raw, 0, event.text.length);
		if (event.rule === "inlineText" && !token.escaped) text = decodeNumeric(raw, rules);
		return text;
	};
	const adaptEmStrong = (event, raw) => {
		const token = event.token;
		const width = token.type === "strong" ? 2 : token.type === "em" ? 1 : /^~+/.exec(raw.value)[0].length;
		return sliceMapped(raw, width, raw.value.length - width);
	};
	const adaptLink = (_event, raw) => {
		const cap = rules.inline.link.exec(raw.value);
		const start = raw.value[0] === "!" ? 2 : 1;
		return unescapeLabel(sliceMapped(raw, start, start + cap[1].length), rules);
	};
	const adaptHtml = (_event, raw) => {
		return raw;
	};
	const adaptEscape = (_event, raw) => {
		return sliceMapped(raw, 1);
	};
	const adaptAutolink = (_event, raw) => {
		return sliceMapped(raw, 1, raw.value.length - 1);
	};
	const adaptUrl = (_event, raw) => {
		return raw;
	};
	const adaptHeading = (_event, raw) => {
		let text;
		const range = new RegExp(rules.block.heading.source, rules.block.heading.flags + "d").exec(raw.value).indices[2];
		text = trimMapped(sliceMapped(raw, range[0], range[1]));
		if (rules.other.endingHash.test(text.value)) {
			const end = text.value.replace(/#+$/, "").length;
			if (pedantic || !end || rules.other.endingSpaceTabChar.test(text.value.slice(0, end))) text = trimMapped(sliceMapped(text, 0, end));
		}
		return text;
	};
	const adaptLheading = (_event, raw) => {
		return trimMapped(sliceMapped(raw, 0, rules.block.lheading.exec(raw.value)[1].length));
	};
	const adaptCodespan = (_event, raw) => {
		let text;
		const width = /^`+/.exec(raw.value)[0].length;
		text = replaceMapped(sliceMapped(raw, width, raw.value.length - width), rules.other.newLineCharGlobal, (_match, input) => replacementMapped(" ", input));
		if (rules.other.nonSpaceChar.test(text.value) && text.value.startsWith(" ") && text.value.endsWith(" ")) text = sliceMapped(text, 1, text.value.length - 1);
		return text;
	};
	const adaptCode = (_event, raw) => {
		return replaceMapped(raw, rules.other.codeRemoveIndent, () => empty$1());
	};
	const adaptFences = (_event, raw) => {
		let text;
		const range = new RegExp(rules.block.fences.source, rules.block.fences.flags + "d").exec(raw.value).indices[3];
		text = range ? sliceMapped(raw, range[0], range[1]) : empty$1();
		const indent = rules.other.indentCodeCompensation.exec(raw.value)?.[1].length ?? 0;
		text = replaceMapped(text, /^ +/gm, (_match, input) => sliceMapped(input, Math.min(input.value.length, indent)));
		return text;
	};
	return {
		paragraph: adaptParagraph,
		text: adaptParagraph,
		inlineText: adaptParagraph,
		reflink: adaptParagraph,
		emStrong: adaptEmStrong,
		del: adaptEmStrong,
		link: adaptLink,
		html: adaptHtml,
		tag: adaptHtml,
		escape: adaptEscape,
		autolink: adaptAutolink,
		url: adaptUrl,
		heading: adaptHeading,
		lheading: adaptLheading,
		codespan: adaptCodespan,
		code: adaptCode,
		fences: adaptFences
	};
};
// node_modules/@humanspeak/svelte-markdown/dist/utils/streaming-provenance/tracer.js
var empty = () => mappedSource("");
/** Pseudo-rule for a top-level extension token; not a Tokenizer method name. */
var EXTENSION = "\0extension";
/** Instance-local tracer. Frames are captured provisionally, then resolved from accepted rules. */
var traceLexer = (lexer, source, inline, collector, base, suppliedTokenizer = false) => {
	const tokenizer = lexer.options.tokenizer;
	const rules = tokenizer.rules;
	const stack = [];
	const calls = [];
	const owners = /* @__PURE__ */ new WeakMap();
	const roots = [];
	if (suppliedTokenizer || !!lexer.options.tokenizer && Object.getPrototypeOf(tokenizer) !== Tokenizer.prototype || !!lexer.options.walkTokens) return () => {
		collector.capture(lexer.tokens);
	};
	let suspended = 0;
	let poisoned = false;
	const opaque = /* @__PURE__ */ new WeakSet();
	const extensions = lexer.options.extensions;
	if (extensions) {
		const wrap = (fn) => function(src, tokens) {
			const frame = stack.at(-1);
			const top = !suspended && frame;
			if (top) finish(frame);
			const queued = lexer.inlineQueue.length;
			suspended++;
			let token;
			try {
				token = fn.call(this, src, tokens);
			} finally {
				suspended--;
			}
			for (const entry of lexer.inlineQueue.slice(queued)) opaque.add(entry.tokens);
			if (token) opaque.add(token);
			if (token && top) frame.events.push({
				rule: EXTENSION,
				input: src,
				offset: (frame.inline ? frame.source.length : frame.normalized.length) - src.length,
				token,
				raw: token.raw,
				target: token,
				frames: [],
				frame,
				steps: []
			});
			return token;
		};
		lexer.options = {
			...lexer.options,
			extensions: {
				...extensions,
				...extensions.block ? { block: extensions.block.map(wrap) } : {},
				...extensions.inline ? { inline: extensions.inline.map(wrap) } : {}
			}
		};
	}
	for (const kind of ["blockTokens", "inlineTokens"]) {
		const original = lexer[kind].bind(lexer);
		const wrapped = (input, tokens = [], clipped) => {
			if (suspended || opaque.has(tokens)) {
				suspended++;
				try {
					return original(input, tokens, clipped);
				} finally {
					suspended--;
				}
			}
			const frame = {
				source: input,
				normalized: normalizeBlock(mappedSource(input), lexer.options.pedantic ?? false).value,
				tokens,
				inline: kind === "inlineTokens",
				events: [],
				cursor: 0
			};
			if (calls.length) {
				calls.at(-1).frames.push(frame);
				calls.at(-1).steps.push(frame);
			} else roots.push(frame);
			stack.push(frame);
			const output = original(input, tokens, clipped);
			finish(frame);
			frame.last = frame.tokens.at(-1);
			stack.pop();
			return output;
		};
		if (kind === "blockTokens") lexer.blockTokens = wrapped;
		else lexer.inlineTokens = wrapped;
	}
	const finish = (frame) => {
		const event = frame.events.at(-1);
		if (!event?.token || event.target) return;
		if (frame.tokens.includes(event.token)) event.target = event.token;
		else {
			const last = frame.tokens.at(-1);
			if (last && (last.type === "text" || last.type === "paragraph") && event.rule !== "def" || last && event.rule === "space" && event.raw?.length === 1) event.target = last;
		}
	};
	for (const rule of Object.getOwnPropertyNames(Tokenizer.prototype)) {
		if (rule === "constructor") continue;
		const original = tokenizer[rule].bind(tokenizer);
		tokenizer[rule] = (...args) => {
			if (suspended) return original(...args);
			const frame = stack.at(-1);
			const input = args[0];
			if (frame.inline && rule === "escape" || !frame.inline && rule === "space") {
				finish(frame);
				frame.cursor = (frame.inline ? frame.source.length : frame.normalized.length) - input.length;
			}
			const parent = calls.at(-1);
			const direct = parent?.frame === frame && (rule === "blockquote" || rule === "list");
			const event = {
				rule,
				input,
				offset: direct ? 0 : frame.cursor,
				frames: [],
				frame,
				steps: []
			};
			calls.push(event);
			const token = original(...args);
			calls.pop();
			if (token) {
				event.token = token;
				event.raw = token.raw;
				event.text = token.text;
				if (direct) {
					event.target = token;
					parent.steps.push(event);
				} else frame.events.push(event);
			}
			return token;
		};
	}
	const textAdapters = createTextAdapters(rules, lexer.options.pedantic ?? false);
	const resolveTable = (token, raw) => {
		const cap = new RegExp(rules.block.table.source, rules.block.table.flags + "d").exec(raw.value);
		const headerRange = cap.indices[1];
		const cells = tableCells(sliceMapped(raw, headerRange[0], headerRange[1]));
		const table = token;
		table.header.forEach((cell, i) => {
			collector.set(cell, {
				exact: true,
				sourceSpans: cells[i].runs.flatMap((run) => run.sources),
				text: assertMappedValue(cells[i], cell.text, "header cell")
			});
			owners.set(cell.tokens, cell);
		});
		if (cap.indices[3]) {
			const range = cap.indices[3];
			const rows = linesMapped(replaceMapped(sliceMapped(raw, range[0], range[1]), rules.other.tableRowBlankLine, () => empty()));
			table.rows.forEach((row, i) => {
				const mapped = tableCells(rows[i], table.header.length);
				row.forEach((cell, j) => {
					collector.set(cell, {
						exact: true,
						sourceSpans: mapped[j].runs.flatMap((run) => run.sources),
						text: assertMappedValue(mapped[j], cell.text, "row cell")
					});
					owners.set(cell.tokens, cell);
				});
			});
		}
	};
	const quoteText = (view) => replaceMapped(replaceMapped(view, rules.other.blockquoteSetextReplace, (match, input) => concatMapped(sliceMapped(input, 0, 1), replacementMapped("    ", empty()), sliceMapped(input, input.value.length - match[1].length))), rules.other.blockquoteSetextReplace2, () => empty());
	const quoteContinuationRaw = (raw, join, remaining, directInput, step) => {
		const leftover = directInput.value.slice(step.raw.length).replace(/^\n/, "");
		const leftoverCount = leftover ? leftover.split("\n").length : 0;
		const lines = linesMapped(remaining);
		const count = lines.length - leftoverCount;
		if (count > 0) return concatMapped(raw, join, sliceMapped(remaining, 0, lines.slice(0, count).reduce((n, line) => n + line.value.length + 1, -1)));
		return raw;
	};
	const resolveQuote = (event, input) => {
		let remaining = sliceMapped(input, 0, rules.block.blockquote.exec(input.value)[0].replace(/\n+$/, "").length);
		let raw = empty();
		let text = empty();
		let join = empty();
		let old;
		for (const step of event.steps) if ("events" in step) {
			const lines = linesMapped(remaining);
			let inQuote = false;
			let count = 0;
			for (const line of lines) {
				if (rules.other.blockquoteStart.test(line.value)) inQuote = true;
				else if (inQuote) break;
				count++;
			}
			const length = lines.slice(0, count).reduce((n, line) => n + line.value.length + 1, -1);
			const part = sliceMapped(remaining, 0, length);
			const separator = raw.value ? join : empty();
			raw = concatMapped(raw, separator, part);
			text = concatMapped(text, separator, quoteText(part));
			const leading = sliceMapped(remaining, length, length + 1);
			remaining = sliceMapped(remaining, length + 1);
			join = leading;
			resolve(step, quoteText(part), separator);
			old = step.last;
		} else {
			const oldRaw = old && collector.get(old)?.raw;
			if (!oldRaw) throw new Error("Direct continuation has no mapped previous nested token");
			const directInput = concatMapped(oldRaw, replacementMapped("\n", empty()), step.rule === "blockquote" ? replaceMapped(remaining, rules.other.blockquoteSetextReplace2, () => empty()) : remaining);
			assertMappedValue(directInput, step.input, "direct continuation input");
			resolve({
				source: step.input,
				normalized: step.input,
				tokens: [step.token],
				inline: false,
				events: [step],
				cursor: 0
			}, directInput);
			const next = collector.get(step.token);
			if (step.rule === "list") {
				raw = concatMapped(sliceMapped(raw, 0, raw.value.length - oldRaw.value.length), next.raw);
				text = concatMapped(sliceMapped(text, 0, text.value.length - oldRaw.value.length), next.raw);
				remaining = sliceMapped(directInput, step.raw.length);
			} else {
				raw = quoteContinuationRaw(raw, join, remaining, directInput, step);
				const oldText = collector.get(old)?.text;
				text = concatMapped(sliceMapped(text, 0, text.value.length - oldText.value.length), next.text);
			}
		}
		assertMappedValue(raw, event.raw, "blockquote raw construction");
		assertMappedValue(text, event.text, "blockquote text construction");
		const target = event.target;
		collector.set(target, {
			exact: true,
			raw,
			text,
			sourceSpans: raw.runs.flatMap((run) => run.sources)
		});
		if (target.tokens) owners.set(target.tokens, target);
	};
	const mergeSeparator = (event, frame, view, text, previousText, leading) => {
		return !frame.inline && text && previousText ? event.offset ? sliceMapped(view, event.offset - 1, event.offset) : leading : empty();
	};
	/** Opaque targets stay unknown. A lone newline only extends their raw; any other merge poisons. */
	const mergesIntoOpaque = (event) => {
		if (!event.target || !opaque.has(event.target)) return false;
		if (!(event.rule === "space" && event.raw?.length === 1)) poisoned = true;
		return true;
	};
	const recordEvent = (event, frame, view, raw, text, leading) => {
		const token = event.token;
		const target = event.target;
		if (mergesIntoOpaque(event)) return;
		if (target) {
			const previous = target === token ? void 0 : collector.get(target);
			const separator = mergeSeparator(event, frame, view, text, previous?.text, leading);
			const combinedText = previous?.text && text ? concatMapped(previous.text, separator, text) : text ?? previous?.text;
			const combinedRaw = previous?.raw ? concatMapped(previous.raw, raw) : raw;
			collector.set(target, {
				exact: true,
				sourceSpans: combinedRaw.runs.flatMap((run) => run.sources),
				raw: combinedRaw,
				...combinedText ? { text: combinedText } : {}
			});
			if (target.tokens) owners.set(target.tokens, target);
		}
	};
	const finalizeList = (list, descendants) => {
		list.items.forEach((item, i) => {
			let itemView = descendants[i];
			if (item.task) {
				itemView = replaceMapped(itemView, rules.other.listReplaceTask, () => empty());
				const first = item.tokens.find((child) => child.type === "text" || child.type === "paragraph");
				if (first) {
					const map = collector.get(first);
					const textView = replaceMapped(map.text, rules.other.listReplaceTask, () => empty());
					collector.set(first, {
						...map,
						text: textView
					});
				}
			}
			collector.set(item, {
				exact: true,
				sourceSpans: itemView.runs.flatMap((run) => run.sources),
				text: assertMappedValue(itemView, item.text, "list item text")
			});
		});
	};
	const resolveEvent = (event, frame, view, leading) => {
		const raw = sliceMapped(view, event.offset, event.offset + event.raw.length);
		assertMappedValue(raw, event.raw, `${event.rule} raw`);
		const token = event.token;
		if (event.rule === EXTENSION) {
			collector.set(token, {
				exact: false,
				opaque: true,
				sourceSpans: raw.runs.flatMap((run) => run.sources),
				raw
			});
			return;
		}
		const text = textAdapters[event.rule]?.(event, raw);
		const descendants = event.rule === "list" ? listViews(raw, token, rules, lexer.options.pedantic ?? false) : [];
		if (event.rule === "table") resolveTable(token, raw);
		if (!textAdapters[event.rule] && !["list", "table"].includes(event.rule) && event.text !== void 0) throw new Error(`Missing built-in provenance adapter: ${event.rule}`);
		if (text) assertMappedValue(text, event.text, event.rule);
		recordEvent(event, frame, view, raw, text, leading);
		event.frames.forEach((child, i) => resolve(child, descendants[i] ?? text ?? raw));
		if (event.rule === "list") finalizeList(token, descendants);
		if ((event.rule === "autolink" || event.rule === "url") && token.tokens) token.tokens.forEach((child) => collector.set(child, {
			exact: true,
			sourceSpans: text.runs.flatMap((run) => run.sources),
			raw: text,
			text
		}));
	};
	const resolve = (frame, view, leading = empty()) => {
		view = frame.inline ? view : normalizeBlock(view, lexer.options.pedantic ?? false);
		assertMappedValue(view, frame.inline ? frame.source : frame.normalized, "frame input");
		collector.counters.mappedInputUnits += view.value.length;
		for (const event of frame.events) {
			if (event.rule === "blockquote") {
				resolveQuote(event, sliceMapped(view, event.offset));
				continue;
			}
			resolveEvent(event, frame, view, leading);
		}
	};
	const resolveAll = () => {
		let input = mappedSource(source, base);
		if (!inline) input = replaceMapped(input, /\r\n|\r/g, (_match, span) => replacementMapped("\n", span));
		resolve(roots[0], input);
		for (const frame of roots.slice(1)) {
			const owner = owners.get(frame.tokens);
			const text = owner && collector.get(owner)?.text;
			if (!text) throw new Error("Provenance deferred inline input has no accepted owner");
			resolve(frame, assertMappedValue(text, frame.source, "deferred inline input"));
		}
	};
	if (!extensions) return resolveAll;
	return () => {
		try {
			resolveAll();
			if (!poisoned) return;
		} catch {}
		markUnknown(collector, lexer.tokens);
	};
};
/** Overwrite every sidecar in `tokens` with unknown provenance, discarding partial mappings. */
var markUnknown = (collector, tokens) => {
	for (const token of tokens) {
		collector.set(token, {
			exact: false,
			sourceSpans: []
		});
		const node = token;
		for (const key of [
			"tokens",
			"items",
			"header"
		]) if (Array.isArray(node[key])) markUnknown(collector, node[key]);
		node.rows?.forEach((row) => markUnknown(collector, row));
	}
};
// node_modules/@humanspeak/svelte-markdown/dist/utils/parse-and-cache.js
/**
* Parse and Cache Utility
*
* Handles markdown parsing with intelligent caching.
* Separates parsing logic from component code for better testability.
*
* @module parse-and-cache
*/
/**
* Lexes markdown source and cleans the resulting tokens. Shared by sync and async paths.
*
* @param source - Raw markdown string to lex
* @param options - Parser options forwarded to the Marked lexer
* @param isInline - When true, uses inline tokenization (no block elements)
* @param links - Optional reference-definition map (marked's `tokens.links`,
*   keyed by normalized label) to seed the lexer with before lexing, so a
*   fragment of a larger document resolves reference-style links against
*   definitions that live elsewhere. The map is copied, never mutated.
* @returns Cleaned token array with HTML tokens properly nested
*
* @example
* ```typescript
* import { lexAndClean } from './parse-and-cache.js'
*
* const tokens = lexAndClean('# Hello **world**', { gfm: true }, false)
* const cited = lexAndClean('See [ref].', { gfm: true }, false, {
*     ref: { href: '/x', title: null }
* })
* ```
*
* @internal
*/
var lexAndClean = (source, options, isInline, links, provenance, baseOffset = 0) => {
	const lexer = new Lexer({ ...options });
	if (links) lexer.tokens.links = Object.assign(Object.create(null), links);
	const finishProvenance = provenance ? traceLexer(lexer, source, isInline, provenance, baseOffset, !!options.tokenizer) : void 0;
	const parsedTokens = isInline ? lexer.inlineTokens(source) : lexer.lex(source);
	finishProvenance?.();
	const cleaned = shrinkHtmlTokens(parsedTokens, provenance);
	if (provenance) provenance.capture(cleaned);
	return cleaned;
};
/**
* Parses markdown source with caching (synchronous path).
* Checks cache first, parses on miss, stores result, and returns tokens.
*
* @param source - Raw markdown string to parse
* @param options - Svelte markdown parser options
* @param isInline - Whether to parse as inline markdown (no block elements)
* @returns Cleaned and cached token array
*
* @example
* ```typescript
* import { parseAndCacheTokens } from './parse-and-cache.js'
*
* // Parse markdown with caching
* const tokens = parseAndCacheTokens('# Hello World', { gfm: true }, false)
*
* // Second call with same input returns cached result (<1ms)
* const cachedTokens = parseAndCacheTokens('# Hello World', { gfm: true }, false)
* ```
*/
var parseAndCacheTokens = (source, options, isInline) => {
	const cached = tokenCache.getTokens(source, options);
	if (cached) return cached;
	const cleanedTokens = lexAndClean(source, options, isInline);
	if (typeof options.walkTokens === "function") for (const token of cleanedTokens) options.walkTokens(token);
	tokenCache.setTokens(source, options, cleanedTokens);
	return cleanedTokens;
};
// node_modules/@humanspeak/svelte-markdown/dist/utils/tail-window.js
/**
* Tail-window safety markers for extension tokenizers.
*
* The streaming `IncrementalParser` normally disables its tail-window (which
* re-lexes only the appended tail and reuses a stable token prefix) the moment
* any extension tokenizer is registered, because a tokenizer whose output
* depends on prefix content would produce wrong tokens when the prefix is not
* re-lexed. Tokenizers carrying the marker defined here promise to be
* **block-anchored and stateless** — they inspect only `src` from the current
* position, exactly like Marked's built-in block rules — so re-lexing the tail
* from a stable block boundary is guaranteed to match a full re-lex.
*
* Marked's `use()` stores the tokenizer **function reference** in
* `options.extensions.block` / `options.extensions.inline`, so the marker must
* live on the function itself (which survives by reference); it is invisible
* to `Marked` otherwise. This is a global-registry symbol so the promise is
* checkable across module boundaries without importing the same binding.
*
* @remarks This is a promise about tokenizer statelessness. Any extension with
* cross-block state (e.g. footnotes, whose definitions and references interact
* across blocks) must **not** carry it.
*
* @module tail-window
*/
/** Marker key carried by tail-window-safe tokenizer functions. */
var TAIL_WINDOW_SAFE = Symbol.for("svelte-markdown.tailWindowSafe");
/**
* True when `value` is a tail-window-safe tokenizer function carrying the
* {@link TAIL_WINDOW_SAFE} marker.
*
* @param value - Candidate entry from `options.extensions.block`/`.inline`
* @returns `true` if the entry is a function marked tail-window safe
* @example
* ```ts
* isTailWindowSafe(options.extensions?.block?.[0]) // true only for marked tokenizers
* ```
*/
var isTailWindowSafe = (value) => typeof value === "function" && value[TAIL_WINDOW_SAFE] === true;
// node_modules/@humanspeak/svelte-markdown/dist/utils/incremental-parser.js
/**
* Incremental Markdown Parser for Streaming
*
* Optimizes streaming scenarios (LLM token-by-token updates) by performing
* a full re-parse but diffing the result against the previous token array.
* Only changed/appended tokens are returned as updates, allowing Svelte to
* skip re-rendering unchanged components.
*
* @module incremental-parser
*/
var CLOSED_FENCE_RE = /^ {0,3}(`{3,}|~{3,}).*\n[\s\S]*\n {0,3}\1[ \t]*\n*$/;
var FENCE_OPEN_RE = /^ {0,3}(`{3,}|~{3,})/;
/** A paragraph that is only the start of an ordered-list marker (`2`, `10`):
*  the next chunk may complete it (`2. item`). A lone bullet marker needs no
*  rule — `-`, `*` or `+` already lexes as a list item — except when the
*  line is also a thematic break (see `OPEN_RULE_ITEM_RE`). */
var PARTIAL_ORDERED_MARKER_RE = /^ {0,3}\d{1,9}$/;
/** An unfinished thematic break that starts with a `-` or `*` bullet marker
*  and whitespace (`- - -`, ` * * *`, `-\t-\t-`): one more non-rule
*  character turns the line into a list item (`- - -c` => item `- -c`)
*  that may join the list before the blank line. `---`, `_ _ _` and a rule
*  whose line already ended cannot. */
var OPEN_RULE_ITEM_RE = /^ {0,3}[-*][ \t][^\n]*$/;
/** A block that opens like a reference definition's title (`"`, `'`, `(`).
*  marked accepts a title on the line after the destination, indented by
*  any whitespace, so a partial one lexes as a paragraph or indented code
*  until it closes and joins the preceding `def`. */
var DEFINITION_TITLE_START_RE = /^[ \t]*["'(]/;
var LINK_REFERENCE_RE = /\[[^\]\n]+\]\[[^\]\n]*\]/;
var SHORTCUT_REFERENCE_RE = /\[[^\]\n]+\](?![[(])/;
var REGEXP_SPECIAL_RE = /[.*+?^${}()|[\]\\]/g;
var WHITESPACE_RUN_RE = /\s+/g;
var BLANK_LINE_RE = /^\s*$/;
/** A whole reference definition on one line: label, destination, optional
*  closed title, nothing after. Anything else that starts like a definition
*  (`[k]:` with the destination on the next line, `[k]: /k junk`, a title
*  that continues on the next line) may turn out to be paragraph text, so it
*  is treated as a reference use. */
var COMPLETE_DEFINITION_LINE_RE = /^ {0,3}\[[^\]\n]+\]:[ \t]*(?:<[^<>\n]*>|[^<\s]\S*)(?:[ \t]+(?:"[^"\n]*"|'[^'\n]*'|\([^()\n]*\)))?[ \t]*\r?$/;
/**
* Every reference definition contains `]:` (the label's closing bracket and
* the colon are adjacent in CommonMark, whatever container the definition
* sits in). Source without it cannot add, change or remove a definition, so
* this is the one textual pre-filter left: prose skips all definition work.
* Whether a definition exists, and what it says, is decided from marked's
* own `def` tokens.
*/
var DEFINITION_SIGIL = "]:";
/**
* Block tokens whose children are inline-only (or absent). Definitions are
* block-level, so these never hold one and the definition walk skips them.
*/
var DEFINITION_FREE_TYPES = /* @__PURE__ */ new Set([
	"paragraph",
	"heading",
	"text",
	"table",
	"code",
	"space",
	"hr"
]);
/** Root types a reference use can never change the rendering of. */
var REFERENCE_INERT_ROOT_TYPES = /* @__PURE__ */ new Set([
	"space",
	"def",
	"code",
	"hr"
]);
/**
* True for a root that can be a piece of an expanded html block: an `html`
* root, or a root-level `text` (marked never emits `text` at the root; only
* cleanup's html expansion does).
*
* @param token - A root token
* @returns `true` for `html` and root-level `text`
* @example
* ```typescript
* isHtmlPiece({ type: 'text', raw: '\n<' } as Token) // true
* ```
*/
var isHtmlPiece = (token) => token.type === "html" || token.type === "text";
/** Root types that no following line can extend or change (ATX and setext
*  headings, thematic breaks, blank lines). */
var LINE_CLOSED_TYPES = /* @__PURE__ */ new Set([
	"heading",
	"hr",
	"space"
]);
/**
* True for a root that the NEXT line can still extend or change when no
* blank line separates them. In CommonMark a line that turns out to be
* paragraph text continues the previous paragraph, list item or blockquote
* (lazy continuation), a line can turn a paragraph into a setext heading, a
* line after a table is another row, and a line after a definition may be
* its title. So a block directly followed by the open tail must stay in the
* tail until a blank line closes it:
*
*   'Para\n#N'  => paragraph 'Para\n' + paragraph '#N'
*   'Para\n#NotAHeading' => one paragraph (`#N` is a lazy continuation)
*   '1.\n2'     => list '1.\n' + paragraph '2';  '1.\n2.' => one list
*
* Only headings, thematic breaks, blank lines and CLOSED fenced code can
* never absorb a following line; every other type — including ones this
* parser does not know (extensions) — is held. An open fence is always the
* last token, so it never reaches this check.
*
* @param token - The root directly before the first tail root
* @returns `true` if the root must stay in the tail
* @example
* ```typescript
* canAbsorbNextLine({ type: 'paragraph', raw: 'Para\n' } as Token) // true
* canAbsorbNextLine({ type: 'heading', raw: '# H\n' } as Token) // false
* ```
*/
var canAbsorbNextLine = (token) => !LINE_CLOSED_TYPES.has(token.type) && !(token.type === "code" && CLOSED_FENCE_RE.test(token.raw));
/**
* True when the last root is an unfinished line that the next chunk can
* still turn into a list item, although marked lexes it as something else
* today: a partial ordered marker (`2` => paragraph, `2. b` => item) or a
* thematic break that opens with a bullet marker (`- - -` => hr,
* `- - -c` => item `- -c`). Decided from `type` and `raw` alone.
*
* @param token - The last root of the parse
* @returns `true` if the line may still become a list item
* @example
* ```typescript
* isOpenItemStart({ type: 'paragraph', raw: '2' } as Token) // true
* isOpenItemStart({ type: 'hr', raw: '- - -' } as Token) // true
* isOpenItemStart({ type: 'hr', raw: '---' } as Token) // false
* ```
*/
var isOpenItemStart = (token) => token.type === "paragraph" && PARTIAL_ORDERED_MARKER_RE.test(token.raw) || token.type === "hr" && OPEN_RULE_ITEM_RE.test(token.raw);
/**
* True when the root at `index` is a `space` that contains a blank line. A
* `space` root is not always one: marked also emits the trailing
* whitespace of a line as `space` (`- x\nhard break  \n` => list
* `- x\nhard break` + space `  \n`), and such a root separates nothing.
* A blank line needs two line breaks, counting the one that ends the root
* before it.
*
* @param tokens - Root tokens
* @param index - Index of the root to test
* @returns `true` for a `space` root that holds a blank line
* @example
* ```typescript
* isBlankLineAt(lexAndClean('P\n\n', options, false), 1) // true
* isBlankLineAt(lexAndClean('- x\nb  \n', options, false), 1) // false
* ```
*/
var isBlankLineAt = (tokens, index) => {
	const token = tokens[index];
	if (token.type !== "space") return false;
	const firstBreak = token.raw.indexOf("\n");
	if (firstBreak < 0) return false;
	return index > 0 && tokens[index - 1].raw.endsWith("\n") || token.raw.indexOf("\n", firstBreak + 1) >= 0;
};
/**
* True when the root at `index` must stay in the tail because it directly
* precedes the tail (no blank line between them) and can still absorb or be
* changed by a following line. A `space` root that is not a blank line is
* trailing whitespace of a line and is held so the walk can see past it.
*
* A definition absorbs only its title: marked accepts a title on the line
* after the destination, indented by any whitespace, so the root after it
* is held only while it opens like one (`[d]: /d\n"Ti` => def + paragraph;
* `[d]: /d\n"Title"` => one def). Any other line after a definition starts
* a new block, so a run of definitions (a references section) is not one
* long chain of held roots.
*
* @param tokens - Root tokens
* @param index - Index of the root directly before the current tail start
* @returns `true` if the root must join the tail
* @example
* ```typescript
* isAdjacentOpenBlock(lexAndClean('Para\n#N', options, false), 0) // true
* ```
*/
var isAdjacentOpenBlock = (tokens, index) => {
	const token = tokens[index];
	if (token.type === "space") return !isBlankLineAt(tokens, index);
	if (token.type === "def") return DEFINITION_TITLE_START_RE.test(tokens[index + 1].raw);
	return canAbsorbNextLine(token);
};
/**
* How many adjacent open blocks the boundary walk holds before it gives up
* and refuses the boundary (a full re-lex for that update). Adjacent chains
* are short in practice — a list or blockquote absorbs following paragraph
* lines lazily, and headings, rules and closed fences end the walk — so the
* cap only bounds pathological alternations.
*/
var MAX_ADJACENT_HOLDS = 8;
var DEFAULT_INLINE_STATE = 0;
var IN_LINK = 1;
var IN_RAW_BLOCK = 2;
/** marked's `startATag` / `startPreScriptTag`; the matching closing tags
*  (`</a>`, `</pre>`...) clear the state. */
var START_A_TAG_RE = /^<a /i;
var START_RAW_TAG_RE = /^<(pre|code|kbd|script)(\s|>)/i;
var RAW_TAGS = /* @__PURE__ */ new Set([
	"pre",
	"code",
	"kbd",
	"script"
]);
/** Inline containers: their `tokens` were lexed by marked's inline lexer. */
var INLINE_CONTAINER_TYPES = /* @__PURE__ */ new Set([
	"paragraph",
	"heading",
	"text"
]);
/**
* marked's inline state after one INLINE token, given the state before it.
* An html token marked emitted carries the state after it (`inLink`,
* `inRawBlock`); cleanup keeps those fields unless it paired the tag with its
* closing tag, and a pair can only close the state (its closing tag clears
* it, as marked's `endATag` / `endPreScriptTag` do). A bracket link or image
* (`[t](/u)`, `[t][r]`, `![i](/u)`: raw starts with `[` or `!`) lexes its text
* with `inLink` set and clears it afterwards, as marked's `outputLink` does;
* an autolink (`<https://…>`) or a bare GFM URL never touches it. No link
* touches `inRawBlock`. The walk descends into nested inline tokens.
*
* @param token - An inline token
* @param state - The state bits before it
* @returns The state bits after it
* @example
* ```typescript
* stepInlineState({ type: 'html', raw: '<code>', inLink: false, inRawBlock: true } as Token, 0) // IN_RAW_BLOCK
* stepInlineState({ type: 'link', raw: '[t](/u)', tokens: [] } as Token, IN_LINK) // 0
* stepInlineState({ type: 'link', raw: '<https://b.example>', tokens: [] } as Token, IN_LINK) // IN_LINK
* ```
*/
var stepInlineState = (token, state) => {
	const inline = token;
	if (inline.type === "html" && typeof inline.inRawBlock === "boolean") return (inline.inLink ? IN_LINK : 0) | (inline.inRawBlock ? IN_RAW_BLOCK : 0);
	if (!Array.isArray(inline.tokens)) return state;
	if (isBracketLink(inline)) return stepInlineTokens(inline.tokens, state | IN_LINK) & -2;
	if (inline.type !== "html" || !inline.tag) return stepInlineTokens(inline.tokens, state);
	let inner = state;
	if (!(inner & IN_LINK) && START_A_TAG_RE.test(inline.raw)) inner |= IN_LINK;
	if (!(inner & IN_RAW_BLOCK) && START_RAW_TAG_RE.test(inline.raw)) inner |= IN_RAW_BLOCK;
	inner = stepInlineTokens(inline.tokens, inner);
	if (inline.tag === "a") inner &= -2;
	if (RAW_TAGS.has(inline.tag)) inner &= -3;
	return inner;
};
/**
* Whether a token came from marked's `link` / `reflink` tokenizers (bracket
* links and images, which run `outputLink` and so reset `inLink`), as opposed
* to its `autolink` / `url` tokenizers (`<https://…>`, bare URLs), which emit
* `link` tokens too but leave the state alone.
*
* @param token - An inline token
* @returns `true` for a bracket link or image
* @example
* ```typescript
* isBracketLink({ type: 'image', raw: '![i](/u)' } as Token) // true
* isBracketLink({ type: 'link', raw: '<me@b.example>' } as Token) // false
* ```
*/
var isBracketLink = (token) => (token.type === "link" || token.type === "image") && (token.raw.startsWith("[") || token.raw.startsWith("!"));
/** Folds `stepInlineState` over inline tokens. */
var stepInlineTokens = (tokens, state) => {
	for (const token of tokens) state = stepInlineState(token, state);
	return state;
};
/**
* marked's inline state after BLOCK tokens, given the state before them:
* inline containers (paragraph, heading, list `text`, table cells) fold
* their inline tokens; block containers (blockquote, list items, paired
* html blocks) are descended into; block html itself never touches it.
*
* @param tokens - Block tokens in document order
* @param state - The state bits before them
* @returns The state bits after them
* @example
* ```typescript
* stepBlockState(lexAndClean('a <code>\n\n', options, false), 0) // IN_RAW_BLOCK
* ```
*/
var stepBlockState = (tokens, state) => {
	for (const token of tokens) {
		const block = token;
		if (INLINE_CONTAINER_TYPES.has(block.type)) {
			if (block.tokens) state = stepInlineTokens(block.tokens, state);
		} else if (block.type === "list") for (const item of block.items ?? []) state = stepBlockState(item.tokens ?? [], state);
		else if (block.type === "table") for (const cell of [...block.header ?? [], ...(block.rows ?? []).flat()]) state = stepInlineTokens(cell.tokens ?? [], state);
		else if (Array.isArray(block.tokens)) state = stepBlockState(block.tokens, state);
	}
	return state;
};
var createLinkMap = () => Object.create(null);
/** Shared empty map for read-only "no definitions" arguments. */
var NO_LINKS = Object.freeze(createLinkMap());
/**
* True when `links` defines at least one label. O(1).
*
* @param links - A definition map
* @returns `true` if the map is not empty
* @example
* ```typescript
* hasAnyLabel(createLinkMap()) // false
* ```
*/
var hasAnyLabel = (links) => {
	for (const label in links) if (label) return true;
	return false;
};
/**
* Copy of `links` without the labels `removed` defines.
*
* @param links - Definitions to copy
* @param removed - Definitions whose labels are left out
* @returns A new map (`links` is not mutated)
* @example
* ```typescript
* withoutLabels({ a: A, b: B }, { b: B }) // { a: A }
* ```
*/
var withoutLabels = (links, removed) => {
	const kept = createLinkMap();
	for (const label in links) if (!(label in removed)) kept[label] = links[label];
	return kept;
};
/**
* Collects the reference definitions under `tokens` into `links` in document
* order, keeping the first definition of a label — exactly the map marked
* builds during a full lex (marked emits no `def` token for a duplicate
* label, and nested definitions in blockquotes, list items and html blocks
* keep their `def` token). Inline-only blocks are not descended into.
*
* @param tokens - Tokens in document order
* @param links - Map to fill (mutated and returned)
* @returns `links`
* @example
* ```typescript
* collectDefinitions(tokens, createLinkMap()) // { docs: { href: '/docs', title: undefined } }
* ```
*/
var collectDefinitions = (tokens, links) => {
	for (const token of tokens) {
		if (token.type === "def") {
			const definition = token;
			if (!(definition.tag in links)) links[definition.tag] = {
				href: definition.href,
				title: definition.title
			};
			continue;
		}
		if (DEFINITION_FREE_TYPES.has(token.type)) continue;
		const container = token;
		if (Array.isArray(container.items)) collectDefinitions(container.items, links);
		if (Array.isArray(container.tokens)) collectDefinitions(container.tokens, links);
	}
	return links;
};
/**
* Labels whose resolution differs between two definition maps, ignoring
* labels `shadowing` defines (an earlier definition wins, so those cannot
* change).
*
* @param before - Definitions from the region being replaced
* @param after - Definitions from the freshly lexed region
* @param shadowing - Definitions that precede both regions
* @returns Normalized labels that were added, removed, or changed
* @example
* ```typescript
* getChangedLabels({ a: { href: '/x' } }, { a: { href: '/xy' } }, {}) // ['a']
* ```
*/
var getChangedLabels = (before, after, shadowing) => {
	const changed = [];
	for (const label of /* @__PURE__ */ new Set([...Object.keys(before), ...Object.keys(after)])) {
		if (label in shadowing) continue;
		const previous = before[label];
		const next = after[label];
		if (previous?.href !== next?.href || previous?.title !== next?.title || !previous !== !next) changed.push(label);
	}
	return changed;
};
/**
* Normalizes text the way marked normalizes a reference label (case fold via
* lower/upper/lower, whitespace runs collapsed to one space), so a label's
* uses can be found by substring search.
*
* @param text - Source text
* @returns The normalized text
* @example
* ```typescript
* normalizeReferenceText('See [Foo\n  Bar]') // 'see [foo bar]'
* ```
*/
var normalizeReferenceText = (text) => text.toLowerCase().toUpperCase().toLowerCase().replace(WHITESPACE_RUN_RE, " ");
/**
* Matches a use of a normalized label in normalized text: `[label]`, which
* covers shortcut `[label]`, collapsed `[label][]` and full `[text][label]`
* references. marked trims the label, so one space inside either bracket is
* allowed.
*
* @param label - Normalized label (marked's `tokens.links` key)
* @returns A matcher for normalized root text
* @example
* ```typescript
* createLabelUseMatcher('1').test('see [1] and [2]') // true
* ```
*/
var createLabelUseMatcher = (label) => new RegExp(`\\[ ?${label.replace(REGEXP_SPECIAL_RE, "\\$&")} ?\\]`);
/**
* Streaming-optimized parser that performs full re-parses but diffs results
* against the previous token array to minimize DOM updates.
*
* For append-only streaming (typical LLM use case), most tokens are identical
* between updates. By comparing `raw` strings, we identify which tokens changed
* so Svelte can skip re-rendering unchanged components.
*
* @example
* ```typescript
* const parser = new IncrementalParser({ gfm: true })
*
* // First update — all tokens are "new"
* const r1 = parser.update('# Hello')
* // r1.divergeAt === 0
*
* // Second update — heading unchanged, paragraph appended
* const r2 = parser.update('# Hello\n\nWorld')
* // r2.divergeAt === 1 (heading at index 0 unchanged)
* ```
*/
var IncrementalParser = class {
	/** Previous parse result for diffing */
	prevTokens = [];
	/** Previous full source string for append-only tail reparsing */
	prevSource = "";
	/** Parser options passed to the Marked lexer */
	options;
	/** Whether caller-supplied parser hooks make tail-window reparsing unsafe */
	tailWindowDisabled;
	/** True iff any token in `prevTokens` is an HTML opening whose actual
	*  source span is unknown. Closed HTML spans record `sourceLength`
	*  during cleanup and remain safe for tail-window offset arithmetic;
	*  unclosed spans do not. Cached to keep `getTailWindowBoundary` O(1)
	*  on the hot path. */
	prevHasHtmlSpanMismatch = false;
	/** True iff the root tokens of `prevTokens` do not add up to
	*  `prevSource.length` — marked consumed source without emitting a token
	*  of the same length (it normalizes `\r\n` to `\n`, and a duplicate
	*  reference definition emits no token). Tail-window offsets are computed
	*  from token lengths, so while this holds the tail window is not used.
	*  Recomputed on every full re-lex, so a document whose mismatch goes
	*  away regains the tail window. */
	prevHasLengthMismatch = false;
	/** True iff `prevSource` contains a carriage return (plan 008). marked
	*  normalizes `\r\n` to `\n`, so a root is shorter than its span, and
	*  another root can be longer than its span (a blockquote raw that gains
	*  a line break): the errors can cancel, and the length check above then
	*  passes with wrong offsets. So a source with `\r` never uses the tail
	*  window. Sticky under appends — only the appended slice is searched —
	*  and recomputed from the whole source on any other update (which is a
	*  full re-lex anyway). */
	prevHasCarriageReturn = false;
	/** Cached boundary for the next append-only update. Computed when
	* parser state is committed so `getTailWindowBoundary` stays O(1). */
	prevTailWindowBoundary = {
		prefixCount: 0,
		reparseOffset: 0
	};
	/** Cached reference-use fact for `prevSource` (a cheap regex superset,
	* refreshed from the appended slice only). Avoids scanning the
	* accumulated stream on every append. */
	prevHasPotentialReferenceUse = false;
	/** Every reference definition in `prevTokens`, from marked's own `def`
	* tokens (nested ones included). Replaced after each update: collected
	* from the roots after a full re-lex, or the prefix's definitions plus
	* the re-lexed tail's after a tail-window update. Each label has at most
	* one `def` token in a parse, so the prefix's definitions are this map
	* minus the previous tail's. */
	knownLinks = createLinkMap();
	/** Normalized source text per stable root, for label-use search. Roots
	* are reused objects at fixed offsets, so each is normalized once. */
	normalizedRootText = /* @__PURE__ */ new WeakMap();
	/** marked's inline lexer state after each root whose state is not the
	* default (see `stepBlockState`); absent means the default. Recorded
	* for the re-lexed roots of each update (`recordInlineStates`), so the
	* boundary check reads one entry instead of walking the prefix. */
	inlineStateAfter = /* @__PURE__ */ new WeakMap();
	/**
	* Creates a new incremental parser instance.
	*
	* @param options - Svelte markdown parser options forwarded to Marked's Lexer
	*/
	provenance;
	constructor(options, provenance) {
		this.provenance = provenance;
		this.options = options;
		const exts = options.extensions;
		const tokenizerEntries = [...exts?.block ?? [], ...exts?.inline ?? []];
		this.tailWindowDisabled = typeof options.walkTokens === "function" || options.tokenizer != null || tokenizerEntries.some((entry) => !isTailWindowSafe(entry));
	}
	getTailWindowBoundary = () => {
		return this.prevTailWindowBoundary;
	};
	/**
	* True for an HTML construct that is still open: an opening tag whose
	* actual source span is unknown, a tag with no closing bracket yet, or a
	* comment / processing instruction / declaration / CDATA section /
	* raw-text element before its terminator (`isUnterminatedHtmlBlock`),
	* including any root cleanup expanded out of one
	* (`isFromUnterminatedHtmlBlock`). After token cleanup, closed HTML tokens
	* keep children on `.tokens` and record their full source span as
	* `sourceLength`. Unclosed HTML openings have neither a full span nor a
	* closing tag yet, so serving them as a stable tail-window prefix would
	* corrupt the offset math or split the construct at a blank line.
	*/
	hasHtmlSpanMismatch = (token) => {
		if (isFromUnterminatedHtmlBlock(token)) return true;
		if (token.type !== "html") return false;
		const html = token;
		if (html.sourceLength != null) return false;
		if (isUnterminatedHtmlBlock(html.raw)) return true;
		if (!html.raw.includes(">")) return true;
		if (html.raw.startsWith("</")) return false;
		if (html.tag) return !html.raw.endsWith("/>");
		const tagInfo = isHtmlOpenTag(html.raw);
		return tagInfo !== null && tagInfo.isOpening && !isVoidElement(tagInfo.tag);
	};
	/**
	* Source characters this token consumed. Closed HTML tokens record
	* their full span as `sourceLength` during cleanup; every other token's
	* `.raw` already equals its source span, so we fall back to `raw.length`.
	*/
	getTokenSourceLength = (token) => {
		return token.sourceLength ?? token.raw.length;
	};
	/**
	* Total source characters `tokens` consumed, per `getTokenSourceLength`.
	* The tail-window offset arithmetic is only valid when this equals the
	* length of the source the tokens were lexed from; see
	* `prevHasLengthMismatch`.
	*
	* @param tokens - Root tokens from one lex, in document order
	* @returns The summed source span of `tokens`
	* @example
	* ```typescript
	* this.sumSourceLength(lexAndClean('# A\n\nB', options, false)) // 6 (= source length)
	* this.sumSourceLength(lexAndClean('a\r\n\r\nb', options, false)) // 4, not 6
	* ```
	*/
	sumSourceLength = (tokens) => {
		let total = 0;
		for (const token of tokens) total += this.getTokenSourceLength(token);
		return total;
	};
	/**
	* True when `source` contains reference-style link syntax that could
	* resolve against a definition — either a full reference (`[text][id]`)
	* or a shortcut (`[text]`). It says nothing about whether a matching
	* definition exists; definitions are read from the lexed tokens.
	*
	* @param source - Markdown source to scan
	* @returns `true` if a full or shortcut reference use is present
	* @example
	* ```typescript
	* this.hasPotentialReferenceUse('see [docs]')   // true  (shortcut)
	* this.hasPotentialReferenceUse('see [a][b]')   // true  (full ref)
	* this.hasPotentialReferenceUse('see [x](/y)')  // false (inline link)
	* ```
	*/
	hasPotentialReferenceUse = (source) => {
		if (!source.includes("[") || !source.includes("]")) return false;
		return LINK_REFERENCE_RE.test(source) || SHORTCUT_REFERENCE_RE.test(source);
	};
	/**
	* True when `source` contains reference-style link syntax outside
	* reference definition lines. Definition labels (`[docs]: /docs`) look
	* like shortcut references to `SHORTCUT_REFERENCE_RE`, but they are not
	* renderable uses and should not keep a stream reference-sensitive after
	* the definition has already been handled.
	*
	* A definition cannot interrupt a paragraph, so a definition-shaped line
	* directly after a non-blank line is paragraph text (or a lazy
	* continuation of a list item or blockquote), and its label IS a use
	* (`Intro\n[k]: /k` is one paragraph citing `[k]`). A definition-shaped
	* line is therefore skipped only at the start of `source`, after a blank
	* line, or after another skipped definition line — and only when it is a
	* whole definition on one line (`COMPLETE_DEFINITION_LINE_RE`): marked
	* rejects `[k]:\n7. seven` or `[k]: /k junk` as definitions, and they
	* are paragraph text citing `[k]`. Everything else counts as a use
	* (a definition after a heading, a destination on the next line):
	* conservative, it only costs a citing-root search when a definition
	* changes.
	*
	* @param source - Markdown source or source slice to scan; its first
	*   line is treated as following a blank line
	* @returns `true` if a full or shortcut reference use appears on a
	*   non-definition line
	* @example
	* ```typescript
	* this.hasPotentialReferenceUseOutsideDefinitions('[docs]: /docs') // false
	* this.hasPotentialReferenceUseOutsideDefinitions('see [docs]')     // true
	* this.hasPotentialReferenceUseOutsideDefinitions('Intro\n[k]: /k') // true
	* ```
	*/
	hasPotentialReferenceUseOutsideDefinitions = (source) => {
		if (!source.includes("[") || !source.includes("]")) return false;
		let definitionMayStart = true;
		for (const line of source.split("\n")) {
			if (definitionMayStart && COMPLETE_DEFINITION_LINE_RE.test(line)) continue;
			if (this.hasPotentialReferenceUse(line)) return true;
			definitionMayStart = BLANK_LINE_RE.test(line);
		}
		return false;
	};
	/**
	* True when an append-only update newly introduces text accepted by
	* `matches`. Reference uses cannot span newlines, so a use split across
	* the append boundary can only complete on the line that straddles it;
	* checking the appended slice plus that boundary line — and the one line
	* before it, which decides whether a definition-shaped line is a
	* definition or paragraph text (see
	* `hasPotentialReferenceUseOutsideDefinitions`) — catches every case
	* without rescanning the accumulated source. Assumes `source` starts
	* with `prevSource` — callers guard the non-append case. (The one
	* unbounded input is a document streamed as a single newline-free line,
	* where the boundary line grows with the document.)
	*
	* Detects NEW matches only: a boundary line that already matched before
	* the append returns `false` even if the append extends it.
	*
	* @param source - Full source string for an append-only update
	* @param matches - Predicate identifying the reference syntax of interest
	* @returns `true` if the append introduces a match not already present
	* @example
	* ```typescript
	* // prevSource === 'see [do'
	* this.appendIntroducesMatch('see [docs]', this.hasPotentialReferenceUseOutsideDefinitions) // true
	* ```
	*/
	appendIntroducesMatch = (source, matches) => {
		if (matches(source.slice(this.prevSource.length))) return true;
		const lineStart = this.prevSource.lastIndexOf("\n") + 1;
		if (matches(this.prevSource.slice(lineStart))) return false;
		const contextStart = lineStart > 1 ? this.prevSource.lastIndexOf("\n", lineStart - 2) + 1 : 0;
		return matches(source.slice(contextStart));
	};
	/**
	* True when `source` is a pure append onto the previously parsed source —
	* i.e. this is not the first update and `source` begins with `prevSource`.
	* Computed once per `update` and threaded into `canUseTailWindow` /
	* `parseSource` so the full-length `startsWith` scan runs a single time.
	* When the caller already verified that `source` starts with `appendsTo`
	* and `appendsTo` is `prevSource` (normally the same string object, so the
	* equality check is O(1)), that scan is skipped (plan 011).
	*
	* @param source - The full new source string for this update
	* @param appendsTo - A string the caller verified `source` starts with
	* @returns `true` if this update only appends to `prevSource`
	* @example
	* ```typescript
	* // prevSource === '# A\n\nB'
	* this.isAppendOnlyUpdate('# A\n\nB\n\nC') // true
	* this.isAppendOnlyUpdate('# A\n\nX') // false (diverges from prevSource)
	* ```
	*/
	isAppendOnlyUpdate = (source, appendsTo) => this.prevSource !== "" && (appendsTo === this.prevSource || source.startsWith(this.prevSource));
	/**
	* Decides whether an update may reuse the stable token prefix and re-lex
	* only the appended tail (`boundary.reparseOffset` onward) instead of the
	* whole document. Returns false whenever that shortcut could diverge from a
	* full parse: caller parser hooks are active, the update is not
	* append-only, the boundary is empty, or the previous roots do not add up
	* to the source. Reference definitions do not bypass the tail window: the
	* tail is lexed with the prefix's definitions (see `parseTailWindow`), and
	* a changed definition is handled after that lex, from its tokens.
	*
	* @param source - The full new source string for this update
	* @param boundary - The stable-prefix boundary from `getTailWindowBoundary`
	* @param isAppendOnly - Precomputed append-only fact from `update`; direct
	*   helper callers may omit it to compute the same fact locally
	* @returns `true` if the appended tail can be re-lexed in isolation
	* @example
	* ```typescript
	* const boundary = this.getTailWindowBoundary()
	* if (this.canUseTailWindow(source, boundary)) {
	*     // safe to re-lex only source.slice(boundary.reparseOffset)
	* }
	* ```
	*/
	canUseTailWindow = (source, boundary, isAppendOnly = this.isAppendOnlyUpdate(source)) => {
		if (this.tailWindowDisabled) return false;
		if (this.prevSource === "" || this.prevTokens.length === 0) return false;
		if (!isAppendOnly) return false;
		if (this.prevHasCarriageReturn || this.appendHasCarriageReturn(source)) return false;
		return boundary.reparseOffset > 0 && !this.prevHasLengthMismatch;
	};
	/**
	* True when the part of `source` after `prevSource` contains a carriage
	* return. O(appended); assumes `source` starts with `prevSource`.
	*
	* @param source - Full source for an append-only update
	* @returns `true` if the appended slice contains `\r`
	* @example
	* ```typescript
	* // prevSource === 'a\n'
	* this.appendHasCarriageReturn('a\nb\r\n') // true
	* ```
	*/
	appendHasCarriageReturn = (source) => source.indexOf("\r", this.prevSource.length) >= 0;
	/**
	* All reference definitions under `tokens`, from marked's `def` tokens;
	* see `collectDefinitions`. The single entry point for definition walks,
	* so their cost is observable.
	*
	* @param tokens - Tokens in document order
	* @returns A new definition map
	* @example
	* ```typescript
	* this.collectLinks(tailTokens) // { a: { href: '/x', title: undefined } }
	* ```
	*/
	collectLinks = (tokens) => collectDefinitions(tokens, createLinkMap());
	/**
	* Lexes an appended tail seeded with the definitions that precede it, so
	* tail references resolve against the prefix and a duplicate label keeps
	* the prefix's definition, exactly as in a one-shot lex. A tail without
	* `[` can neither use nor define a reference, so it is lexed unseeded
	* (skipping the map copy).
	*
	* @param tailSource - Source from the reparse offset to the end
	* @param links - Definitions of the stable prefix
	* @returns The tail's root tokens
	* @example
	* ```typescript
	* this.lexTail('See [a].', { a: { href: '/x', title: undefined } }) // paragraph with a link
	* ```
	*/
	lexTail = (tailSource, links, baseOffset) => lexAndClean(tailSource, this.options, false, hasAnyLabel(links) && tailSource.includes("[") ? links : void 0, this.provenance, baseOffset);
	/**
	* Parses an append-only update in the tail window: the tail is lexed
	* seeded with the prefix's definitions, then whether a definition changed
	* is read from the tail's `def` tokens.
	*
	* 1. Tail without `]:` — it cannot add, change or remove a definition
	*    (the previous tail's source is a prefix of it), so no definition work.
	* 2. Otherwise the tail's definitions are compared with the ones the
	*    previous tail contributed. No change, or no reference use anywhere
	*    in the previous source: a plain tail-window update.
	* 3. A changed label with possible uses: re-lex the prefix roots that
	*    cite it (`parseDefinitionUpdate`), else a full re-lex; either way the
	*    update is reference-sensitive.
	*
	* @param source - Full source for this append-only update
	* @param boundary - Stable-prefix boundary (non-empty)
	* @returns The parse result for this update
	* @example
	* ```typescript
	* // prevSource === 'See [a].\n\n'
	* this.parseTailWindow('See [a].\n\n> [a]: /x\n', boundary) // re-lexes the tail and 'See [a].'
	* ```
	*/
	parseTailWindow = (source, boundary) => {
		const tailSource = source.slice(boundary.reparseOffset);
		if (!tailSource.includes(DEFINITION_SIGIL)) {
			const tailTokens = this.lexTail(tailSource, this.knownLinks, boundary.reparseOffset);
			return this.createTailWindowResult(source, boundary, tailTokens, this.knownLinks);
		}
		const previousTailLinks = this.collectLinks(this.prevTokens.slice(boundary.prefixCount));
		const prefixLinks = withoutLabels(this.knownLinks, previousTailLinks);
		const tailTokens = this.lexTail(tailSource, prefixLinks, boundary.reparseOffset);
		const tailLinks = this.collectLinks(tailTokens);
		const changedLabels = getChangedLabels(previousTailLinks, tailLinks, prefixLinks);
		const links = Object.assign(createLinkMap(), tailLinks, prefixLinks);
		if (changedLabels.length === 0 || !this.prevHasPotentialReferenceUse) return this.createTailWindowResult(source, boundary, tailTokens, links);
		return this.parseDefinitionUpdate(source, boundary, tailTokens, changedLabels, links) ?? this.parseFullSource(source, true);
	};
	/**
	* The plain tail-window result: the previous prefix roots (same objects)
	* followed by the freshly lexed tail.
	*
	* @param source - Full source for this update
	* @param boundary - Stable-prefix boundary (non-empty)
	* @param tailTokens - Roots lexed from `source.slice(boundary.reparseOffset)`
	* @param links - Every definition in the resulting tokens
	* @returns A tail-window parse result that is not reference-sensitive
	* @example
	* ```typescript
	* this.createTailWindowResult(source, boundary, tailTokens, this.knownLinks)
	* ```
	*/
	createTailWindowResult = (source, boundary, tailTokens, links) => {
		return {
			tokens: this.prevTokens.slice(0, boundary.prefixCount).concat(tailTokens),
			tailTokens,
			usedTailWindow: true,
			reusedPrefixCount: boundary.prefixCount,
			hasLengthMismatch: this.sumSourceLength(tailTokens) !== source.length - boundary.reparseOffset,
			links,
			referenceSensitive: false
		};
	};
	/**
	* Completes a tail-window update whose tail changed the definition of a
	* label the prefix may use: each prefix root that cites a changed label
	* is re-lexed with the complete definition map; every other prefix root
	* is kept as-is. The tail is already lexed, so this re-lexes at most the
	* prefix — never more characters than a full re-lex. Returns `undefined`
	* (the caller then does a full re-lex) when the prefix offsets do not add
	* up, or a re-lexed root does not reproduce exactly one root with the
	* same type, raw and span.
	*
	* @param source - Full source for this append-only update
	* @param boundary - Stable-prefix boundary (non-empty)
	* @param tailTokens - The tail, lexed seeded with the prefix's definitions
	* @param changedLabels - Normalized labels whose definition changed
	* @param links - The complete definition map for `source`
	* @returns The spliced tokens, or `undefined` to fall back to a full re-lex
	* @example
	* ```typescript
	* // prevSource === 'See [a].\n\nPlain.\n\n'
	* this.parseDefinitionUpdate(source, boundary, tailTokens, ['a'], links)
	* // re-lexes 'See [a].' only
	* ```
	*/
	parseDefinitionUpdate = (source, boundary, tailTokens, changedLabels, links) => {
		const prefixRoots = this.prevTokens.slice(0, boundary.prefixCount);
		const candidates = this.findCitingRoots(source, prefixRoots, changedLabels, boundary);
		if (!candidates) return void 0;
		const roots = this.relexCitingRoots(prefixRoots, candidates, links);
		if (!roots) return void 0;
		return {
			tokens: [...roots, ...tailTokens],
			tailTokens,
			usedTailWindow: true,
			reusedPrefixCount: 0,
			hasLengthMismatch: this.sumSourceLength(tailTokens) !== source.length - boundary.reparseOffset,
			links,
			referenceSensitive: true
		};
	};
	/**
	* Finds the stable prefix roots whose source uses any of `labels`,
	* without lexing. Offsets are summed over the prefix and must land on
	* `boundary.reparseOffset`.
	*
	* @param source - Full source for this update
	* @param prefixRoots - Stable prefix roots from the previous parse
	* @param labels - Normalized labels whose definition changed
	* @param boundary - Stable-prefix boundary the roots end at
	* @returns Citing roots with their source, or `undefined` to fall back
	* @example
	* ```typescript
	* this.findCitingRoots(source, prefixRoots, ['a'], boundary)
	* ```
	*/
	findCitingRoots = (source, prefixRoots, labels, boundary) => {
		const matchers = labels.map(createLabelUseMatcher);
		const candidates = [];
		let offset = 0;
		for (let index = 0; index < prefixRoots.length; index++) {
			const root = prefixRoots[index];
			const start = offset;
			offset += this.getTokenSourceLength(root);
			if (REFERENCE_INERT_ROOT_TYPES.has(root.type)) continue;
			const text = this.getNormalizedRootText(root, source, start, offset);
			if (!matchers.some((matcher) => matcher.test(text))) continue;
			candidates.push({
				index,
				start,
				source: source.slice(start, offset),
				text
			});
		}
		return offset === boundary.reparseOffset ? candidates : void 0;
	};
	/**
	* Re-lexes each citing root with the complete link map; see
	* `parseDefinitionUpdate`. A root that itself holds a definition (nested
	* in a blockquote, list item or html block) is seeded WITHOUT its own
	* labels, so its lexer registers them and emits their `def` tokens again
	* instead of dropping them as duplicates.
	*
	* @param prefixRoots - Stable prefix roots from the previous parse
	* @param candidates - Roots that use a changed label
	* @param links - The complete definition map for the current source
	* @returns Prefix roots with citing roots replaced (the input array when
	*   there are none), or `undefined` to fall back to a full re-lex
	* @example
	* ```typescript
	* this.relexCitingRoots(prefixRoots, candidates, links)
	* ```
	*/
	relexCitingRoots = (prefixRoots, candidates, links) => {
		let roots;
		for (const candidate of candidates) {
			if (candidate.index > 0 && this.getInlineStateAfter(prefixRoots[candidate.index - 1]) !== DEFAULT_INLINE_STATE) return;
			const root = prefixRoots[candidate.index];
			const seed = candidate.source.includes(DEFINITION_SIGIL) ? withoutLabels(links, this.collectLinks([root])) : links;
			const relexed = lexAndClean(candidate.source, this.options, false, seed, this.provenance, candidate.start);
			if (relexed.length !== 1) return void 0;
			if (relexed[0].type !== root.type || relexed[0].raw !== root.raw) return void 0;
			if (this.getTokenSourceLength(relexed[0]) !== candidate.source.length) return void 0;
			roots ??= prefixRoots.slice();
			roots[candidate.index] = relexed[0];
		}
		return roots ?? prefixRoots;
	};
	/**
	* Normalized source text of a stable prefix root, cached per root object.
	*
	* @param root - A stable prefix root
	* @param source - Full source the root's offsets refer to
	* @param start - Root start offset in `source`
	* @param end - Root end offset in `source`
	* @returns `normalizeReferenceText` of the root's source span
	* @example
	* ```typescript
	* this.getNormalizedRootText(root, source, 0, root.raw.length)
	* ```
	*/
	getNormalizedRootText = (root, source, start, end) => {
		let text = this.normalizedRootText.get(root);
		if (text === void 0) {
			text = normalizeReferenceText(source.slice(start, end));
			this.normalizedRootText.set(root, text);
		}
		return text;
	};
	/**
	* Re-lexes the whole source; the fallback for every update the tail
	* window or the targeted definition path cannot serve. Definitions are
	* collected from the roots only when the source contains `]:`, and
	* compared with the previous parse's to decide reference sensitivity.
	*
	* @param source - Full source for this update
	* @param isAppendOnly - Whether `source` appends to the previous source
	* @returns A full-parse result (no reused prefix)
	* @example
	* ```typescript
	* this.parseFullSource('# A\n\nB', true) // { tokens: [heading, space, paragraph], usedTailWindow: false, ... }
	* ```
	*/
	parseFullSource = (source, isAppendOnly) => {
		const tokens = lexAndClean(source, this.options, false, void 0, this.provenance);
		const links = source.includes(DEFINITION_SIGIL) ? this.collectLinks(tokens) : NO_LINKS;
		return {
			tokens,
			tailTokens: [],
			usedTailWindow: false,
			reusedPrefixCount: 0,
			hasLengthMismatch: this.sumSourceLength(tokens) !== source.length,
			links,
			referenceSensitive: this.definitionsAffectUses(source, links, isAppendOnly)
		};
	};
	/**
	* Whether the definitions of a fully re-lexed source can change how a
	* root that kept its `raw` renders. For an append, that needs a label
	* whose definition changed and a possible reference use in the previous
	* source. For any other edit (no prefix is reused anyway) it stays as
	* conservative as before: definitions on either side plus a possible use.
	*
	* @param source - Full source for this update
	* @param links - Every definition in the new tokens
	* @param isAppendOnly - Whether `source` appends to the previous source
	* @returns `true` if the update must be treated as reference-sensitive
	* @example
	* ```typescript
	* // prevSource === 'See [a].\n\n' (a use, no definition yet)
	* this.definitionsAffectUses('See [a].\n\n[a]: /x', { a: A }, true) // true
	* ```
	*/
	definitionsAffectUses = (source, links, isAppendOnly) => {
		if (isAppendOnly) return this.prevHasPotentialReferenceUse && getChangedLabels(this.knownLinks, links, NO_LINKS).length > 0;
		return (hasAnyLabel(this.knownLinks) || hasAnyLabel(links)) && (this.prevHasPotentialReferenceUse || this.hasPotentialReferenceUse(source));
	};
	/**
	* Produces this update's tokens: the tail window when it may be used,
	* else a full re-lex. A tail-window (or targeted definition) result whose
	* roots do not add up to the source is discarded for a full re-lex: marked
	* dropped or rewrote source in the tail (a duplicate definition, CRLF),
	* and the separately lexed tail can then split blank lines differently
	* from a one-shot parse (`space "\n\n" + space "\n"` vs `space "\n\n\n"`).
	* That costs one extra lex on the rare update where it happens; the flag
	* the full result carries keeps later updates off the tail window.
	*
	* @param source - Full source for this update
	* @param boundary - Stable-prefix boundary from `getTailWindowBoundary`
	* @param isAppendOnly - Whether `source` appends to the previous source
	* @returns The parse result for this update
	* @example
	* ```typescript
	* this.parseSource(source, this.getTailWindowBoundary(), true)
	* ```
	*/
	parseSource = (source, boundary, isAppendOnly) => {
		if (!this.canUseTailWindow(source, boundary, isAppendOnly)) return this.parseFullSource(source, isAppendOnly);
		const result = this.parseTailWindow(source, boundary);
		return result.usedTailWindow && result.hasLengthMismatch ? this.parseFullSource(source, isAppendOnly) : result;
	};
	/**
	* True when any token in `tokens` has an unknown HTML source span. Tail
	* reparsing can reuse a prefix only when prefix token lengths still map to
	* source offsets; unclosed HTML openings break that invariant.
	*
	* @param tokens - Tokens to inspect for unknown HTML spans
	* @returns `true` if at least one token makes tail-window offsets unsafe
	* @example
	* ```typescript
	* this.hasAnyHtmlSpanMismatch(tailTokens) // scan only the reparsed tail
	* ```
	*/
	hasAnyHtmlSpanMismatch = (tokens) => {
		return tokens.some(this.hasHtmlSpanMismatch);
	};
	/**
	* Computes and caches the next stable-prefix boundary once per committed
	* parser state. The hot-path `getTailWindowBoundary` then returns this
	* object without summing every prefix token on every append.
	*
	* @param tokens - Latest token array after parsing the current source
	* @param sourceLength - Character length of the current source
	* @param offsetsUnsafe - Whether token lengths cannot be mapped to source
	*   offsets: an HTML token has an unknown source span, the roots do not
	*   add up to `sourceLength`, or the source contains a carriage return
	* @returns The prefix token count and source offset to reuse on the next
	*   append-only update
	* @example
	* ```typescript
	* this.prevTailWindowBoundary = this.getNextTailWindowBoundary(tokens, source.length, false)
	* ```
	*/
	getNextTailWindowBoundary = (tokens, sourceLength, offsetsUnsafe) => {
		if (tokens.length === 0 || offsetsUnsafe) return {
			prefixCount: 0,
			reparseOffset: 0
		};
		let cut = tokens.length - 1;
		let reparseOffset = sourceLength - this.getTokenSourceLength(tokens[cut]);
		const heldCount = this.countHeldTokens(tokens);
		if (heldCount === void 0) return {
			prefixCount: 0,
			reparseOffset: 0
		};
		for (let held = heldCount; held > 0; held--) {
			cut--;
			reparseOffset -= this.getTokenSourceLength(tokens[cut]);
		}
		if (this.isUnsafeCut(tokens, cut)) return {
			prefixCount: 0,
			reparseOffset: 0
		};
		return {
			prefixCount: cut,
			reparseOffset
		};
	};
	/**
	* True when the tail must not start at `cut`, because the tail would be
	* lexed in a context a one-shot parse does not have. O(1): inspects the
	* two roots around the cut and one cached fact; the next update then
	* re-lexes in full, and the tail window is used again as soon as the cut
	* moves past the condition.
	*
	* 1. The cut splits ONE marked html block that cleanup expanded into
	*    several roots. marked lexes `<li>x</li>\n<` as one html token and
	*    cleanup turns it into `html <li>` + text `\n<`; the next chunk still
	*    extends that block, so a tail lexed from the second piece becomes a
	*    separate document (`\n</u` => space + paragraph) where a one-shot
	*    parse keeps one html block (`<li>` spanning `</u`). Root-level `text`
	*    only comes from such an expansion; two adjacent html-ish roots with
	*    no `space` between them are treated the same (a false positive only
	*    costs a full re-lex).
	* 2. marked's inline lexer state is not the default at the cut: an inline
	*    `<pre>`/`<code>`/`<kbd>`/`<script>` or `<a ` opened before it is not
	*    closed yet (see `stepInlineState`), and the tail would be lexed with
	*    a fresh state (`a <code>\n\nb` => `b` is escaped text one-shot).
	*
	* @param tokens - Latest root tokens
	* @param cut - Index of the first tail root
	* @returns `true` if the next update must re-lex the whole source
	* @example
	* ```typescript
	* this.isUnsafeCut(lexAndClean('<li>x</li>\n<', options, false), 1) // true
	* this.isUnsafeCut(lexAndClean('<li>x</li>\n\n', options, false), 1) // false
	* ```
	*/
	isUnsafeCut = (tokens, cut) => cut > 0 && (isHtmlPiece(tokens[cut]) && isHtmlPiece(tokens[cut - 1]) || this.getInlineStateAfter(tokens[cut - 1]) !== DEFAULT_INLINE_STATE);
	/**
	* marked's inline lexer state after `root`, as recorded by
	* `recordInlineStates` (the default when nothing was recorded).
	*
	* @param root - A root token of the current parse
	* @returns The inline state bits after the root
	* @example
	* ```typescript
	* this.getInlineStateAfter(tokens[cut - 1]) // DEFAULT_INLINE_STATE
	* ```
	*/
	getInlineStateAfter = (root) => this.inlineStateAfter.get(root) ?? DEFAULT_INLINE_STATE;
	/**
	* Records marked's inline lexer state after each root from `from` on,
	* folding from the state after the root before it. Roots before `from`
	* are the previous parse's objects and keep their recorded state. Only
	* roots whose raw contains `<` can change the state, so prose costs one
	* `includes` per root. Runs on the re-lexed tail on the tail-window
	* path and on every root only after a full re-lex.
	*
	* @param tokens - Root tokens of the committed parse
	* @param from - First root that is not a reused prefix root
	* @example
	* ```typescript
	* this.recordInlineStates(parseResult.tokens, parseResult.reusedPrefixCount)
	* ```
	*/
	recordInlineStates = (tokens, from) => {
		let state = from > 0 ? this.getInlineStateAfter(tokens[from - 1]) : DEFAULT_INLINE_STATE;
		for (let index = from; index < tokens.length; index++) {
			const root = tokens[index];
			if (root.raw.includes("<")) state = stepBlockState([root], state);
			if (state === DEFAULT_INLINE_STATE) this.inlineStateAfter.delete(root);
			else this.inlineStateAfter.set(root, state);
		}
	};
	/**
	* How many tokens BEFORE the last one must stay in the tail because the
	* stream sits on a boundary the next chunk can still move, or `undefined`
	* when the boundary must be refused (full re-lex on the next update).
	* Never scans: it inspects at most `MAX_ADJACENT_HOLDS` + 3 roots at the
	* end, and each rule holds a block only while the stream is on its
	* ambiguous boundary; once a blank line (or a block no line can change)
	* follows, the held block joins the prefix.
	*
	* Principle: the reused prefix ends at the last blank line that closes a
	* block. Two parts:
	*
	* 1. `countBlankLineHolds` — the blocks a blank line does not close (a
	*    list or indented code), and a whitespace-only last line that may
	*    still become indentation.
	* 2. Adjacency — walking back from the first tail root, every root with
	*    no blank line between it and the tail is held while it can still
	*    absorb or be changed by a following line (`isAdjacentOpenBlock`).
	*    The walk stops at a blank line, at the document start, or at a
	*    heading, thematic break or closed fence. A chain longer than
	*    `MAX_ADJACENT_HOLDS` refuses the boundary rather than scanning on.
	*
	* @param tokens - Latest root tokens (non-empty)
	* @returns Tokens to pull into the tail before the last token, or
	*   `undefined` to refuse the boundary
	* @example
	* ```typescript
	* this.countHeldTokens(lexAndClean('# H\n ', options, false)) // 1
	* this.countHeldTokens(lexAndClean('[d]: /d\n"Ti', options, false)) // 1
	* this.countHeldTokens(lexAndClean('1. a\n\n2', options, false)) // 2
	* this.countHeldTokens(lexAndClean('Para\n#N', options, false)) // 1
	* this.countHeldTokens(lexAndClean('P\n+ \n-', options, false)) // 3
	* ```
	*/
	countHeldTokens = (tokens) => {
		let held = this.countBlankLineHolds(tokens);
		let first = tokens.length - 1 - held;
		if (isBlankLineAt(tokens, first)) return held;
		for (let step = 0; step < MAX_ADJACENT_HOLDS; step++) {
			if (first === 0 || !isAdjacentOpenBlock(tokens, first - 1)) return held;
			held++;
			first--;
		}
		return first === 0 || !isAdjacentOpenBlock(tokens, first - 1) ? held : void 0;
	};
	/**
	* The blank-line holds: rules that keep a block in the tail although a
	* blank or whitespace-only line follows it.
	*
	* 1. The last token is `space` and the stream is inside a whitespace-only
	*    line (its raw does not end with a line break): that line may still
	*    become indentation, and marked then assigns the previous block's
	*    trailing newline differently (`# H\n ` => heading `# H` + space,
	*    `# H\n    i` => heading `# H\n` + code). Holds any block type.
	* 2. The last token is `space` ending a line after a list or indented
	*    code: a blank line does not close those blocks.
	* 3. `list|indented code, space, X` where X is an unfinished line that
	*    can still become the list's next item: a paragraph that is only a
	*    partial ordered marker (`2` -> `2. second`), or a thematic break
	*    that opens with a bullet marker and whitespace (`- - -` ->
	*    `- - -c`, one list with item `- -c`). The list is not closed yet.
	*    Any other text after the blank line has closed the list. The rule
	*    does not check that the markers match (`* * *` after `- a` starts a
	*    new list); holding one more root for a single update is harmless.
	*
	* @param tokens - Latest root tokens (non-empty)
	* @returns 0, 1 or 2 tokens to pull into the tail before the last token
	* @example
	* ```typescript
	* this.countBlankLineHolds(lexAndClean('# H\n ', options, false)) // 1
	* this.countBlankLineHolds(lexAndClean('1. a\n\n2', options, false)) // 2
	* this.countBlankLineHolds(lexAndClean('- a\n\n- - -', options, false)) // 2
	* ```
	*/
	countBlankLineHolds = (tokens) => {
		const cut = tokens.length - 1;
		if (cut < 1) return 0;
		const last = tokens[cut];
		const previous = tokens[cut - 1];
		if (last.type === "space") return !last.raw.endsWith("\n") || this.canContinueAcrossBlankLine(previous) ? 1 : 0;
		return cut > 1 && isOpenItemStart(last) && previous.type === "space" && this.canContinueAcrossBlankLine(tokens[cut - 2]) ? 2 : 0;
	};
	/**
	* Blocks a blank or whitespace-only line does NOT terminate: the next
	* chunk may continue them (another list item, a further indented code
	* line), so they must be re-lexed together with the tail. A fenced
	* block (open or closed) is excluded: once a `space` follows it, a
	* closed fence is done, and an open fence absorbs blank lines into its
	* own raw so it is the last token and already in the tail. Only
	* fence-less (indented) code qualifies.
	*
	* @param token - The token immediately before a trailing `space` token
	* @returns `true` for a list or an indented code block
	* @example
	* ```typescript
	* this.canContinueAcrossBlankLine(listToken) // true
	* ```
	*/
	canContinueAcrossBlankLine = (token) => token.type === "list" || token.type === "code" && !CLOSED_FENCE_RE.test(token.raw) && !FENCE_OPEN_RE.test(token.raw);
	/**
	* Commits parser state and refreshes cached bookkeeping facts for the next
	* update. When the current parse reused a stable prefix, only the reparsed
	* tail is inspected for HTML span mismatches so append-only streaming stays
	* proportional to the newly parsed region.
	*
	* @param source - Full source string for the just-completed update
	* @param parseResult - Parsed tokens plus metadata describing whether the
	*   tail-window shortcut was used
	* @param isAppendOnly - Whether `source` appended to the previous source
	* @returns Nothing; updates `prevSource`, `prevTokens`, and cached flags
	* @example
	* ```typescript
	* this.updateCachedState(source, parseResult, isAppendOnly)
	* ```
	*/
	updateCachedState = (source, parseResult, isAppendOnly) => {
		const hasHtmlSpanMismatch = parseResult.usedTailWindow ? this.prevHasHtmlSpanMismatch || this.hasAnyHtmlSpanMismatch(parseResult.tailTokens) : this.hasAnyHtmlSpanMismatch(parseResult.tokens);
		const { hasLengthMismatch } = parseResult;
		const hasCarriageReturn = isAppendOnly ? this.prevHasCarriageReturn || this.appendHasCarriageReturn(source) : source.includes("\r");
		this.prevHasPotentialReferenceUse = isAppendOnly ? this.prevHasPotentialReferenceUse || this.appendIntroducesMatch(source, this.hasPotentialReferenceUseOutsideDefinitions) : this.hasPotentialReferenceUseOutsideDefinitions(source);
		this.knownLinks = parseResult.links;
		this.prevSource = source;
		this.prevTokens = parseResult.tokens;
		this.prevHasHtmlSpanMismatch = hasHtmlSpanMismatch;
		this.prevHasLengthMismatch = hasLengthMismatch;
		this.prevHasCarriageReturn = hasCarriageReturn;
		this.recordInlineStates(parseResult.tokens, parseResult.reusedPrefixCount);
		this.prevTailWindowBoundary = this.getNextTailWindowBoundary(parseResult.tokens, source.length, hasHtmlSpanMismatch || hasLengthMismatch || hasCarriageReturn);
	};
	/**
	* Finds the first root that differs from the previous parse and the
	* absolute source offset where it begins.
	*
	* We compare with the semantic comparator, and for html tokens that
	* includes the structural shape — an unclosed `<div>` and a closed
	* `<div>...</div>` both have `raw === '<div>'` but very different
	* `.tokens` children. Without this check the streaming consumer would
	* never see the partial-to-closed transition. See #291.
	*
	* The scan starts at `parseResult.reusedPrefixCount`: on the plain
	* tail-window path the first `boundary.prefixCount` roots are the previous
	* parse's objects at the same indices (copied by `parseSource`), so
	* comparing them could only return `true`. Skipping them keeps the scan
	* proportional to the re-lexed tail instead of the document (plan 011).
	* Every other path reports 0 and compares from index 0.
	*
	* `divergeOffset` lets `SvelteMarkdown.svelte` skip render-metadata work
	* for the reused prefix. The tail-window path seeds it with the already
	* -known `boundary.reparseOffset` (the reused prefix is covered) and only
	* sums tokens past the prefix. The full-reparse path (which still
	* re-lexes the whole source, e.g. when a built-in extension is not
	* tail-safe) starts at 0 and sums every matched token from index 0, so an
	* append-only update with a stable prefix can still skip the prefix
	* metadata walk even though the tail-window was bypassed.
	*
	* @param newTokens - Tokens from the current parse
	* @param parseResult - How the current parse was produced
	* @param boundary - The tail-window boundary used for this parse
	* @returns The divergence index and offset (`undefined` when unknown)
	* @example
	* ```typescript
	* const { divergeAt, divergeOffset } = this.findDivergence(tokens, parseResult, boundary)
	* ```
	*/
	findDivergence = (newTokens, parseResult, boundary) => {
		let divergeAt = parseResult.reusedPrefixCount;
		let divergeOffset = parseResult.usedTailWindow ? boundary.reparseOffset : 0;
		const minLen = Math.min(this.prevTokens.length, newTokens.length);
		while (divergeAt < minLen) {
			const prev = this.prevTokens[divergeAt];
			const next = newTokens[divergeAt];
			if (!isSameStableNode(prev, next)) break;
			if (parseResult.usedTailWindow) {
				if (divergeOffset !== void 0 && divergeAt >= boundary.prefixCount) divergeOffset += this.getTokenSourceLength(next);
			} else if (divergeOffset !== void 0) {
				if (this.hasHtmlSpanMismatch(next)) divergeOffset = void 0;
				else divergeOffset += this.getTokenSourceLength(next);
			}
			divergeAt++;
		}
		return {
			divergeAt,
			divergeOffset
		};
	};
	/**
	* Parses the full source and diffs against the previous result.
	*
	* @param source - The full accumulated markdown source string
	* @param appendsTo - Optional string the caller has ALREADY verified that
	*   `source` starts with (e.g. its previous buffer before appending a
	*   chunk). When it is the previously parsed source, the parser skips its
	*   own full-length `startsWith` check. Passing a string `source` does not
	*   start with breaks parsing; omit it when unsure.
	* @returns The new tokens and the index where they diverge from the previous parse
	*/
	update = (source, appendsTo) => {
		const boundary = this.getTailWindowBoundary();
		const isAppendOnly = this.isAppendOnlyUpdate(source, appendsTo);
		const parseResult = this.parseSource(source, boundary, isAppendOnly);
		const newTokens = parseResult.tokens;
		if (typeof this.options.walkTokens === "function") for (const token of newTokens) this.options.walkTokens(token);
		const { referenceSensitive } = parseResult;
		const canReuse = isAppendOnly && !referenceSensitive;
		const reuseMode = canReuse ? "prefix" : isAppendOnly ? "tree" : "none";
		const { divergeAt, divergeOffset } = referenceSensitive ? {
			divergeAt: 0,
			divergeOffset: reuseMode === "tree" ? void 0 : 0
		} : this.findDivergence(newTokens, parseResult, boundary);
		this.updateCachedState(source, parseResult, isAppendOnly);
		return {
			tokens: newTokens,
			divergeAt,
			divergeOffset,
			canReuse,
			reuseMode,
			usedTailWindow: parseResult.usedTailWindow,
			reusedPrefixCount: parseResult.reusedPrefixCount
		};
	};
};
// node_modules/@humanspeak/svelte-markdown/dist/utils/footnote-render-metadata.js
var isObject = (value) => typeof value === "object" && value !== null;
var isSourceFootnote = (value) => isObject(value) && typeof value.id === "string" && typeof value.text === "string";
/** Encodes a footnote label injectively without relying on valid Unicode scalar values. */
var encodeFootnoteLabel = (label) => {
	let encoded = "";
	for (let index = 0; index < label.length; index++) {
		const codeUnit = label.charCodeAt(index);
		const character = label[index];
		encoded += /[A-Za-z0-9_-]/.test(character) ? character : `~${codeUnit.toString(16).padStart(4, "0")}`;
	}
	return encoded;
};
var getFootnoteReferenceId = (label, occurrence = 1) => {
	const firstId = `fnref-${encodeFootnoteLabel(label)}`;
	return occurrence === 1 ? firstId : `${firstId}:ref:${occurrence}`;
};
/**
* Prepares navigation props for one complete rendered token tree without mutating it.
*/
var prepareFootnoteRenderMetadata = (tokens) => {
	const referenceProps = /* @__PURE__ */ new WeakMap();
	const sectionProps = /* @__PURE__ */ new WeakMap();
	const referenceCounts = /* @__PURE__ */ new Map();
	const backrefsByLabel = /* @__PURE__ */ new Map();
	const definedLabels = /* @__PURE__ */ new Set();
	const sectionDefinitions = [];
	const visitCollection = (value) => {
		if (!Array.isArray(value)) return;
		for (const item of value) if (Array.isArray(item)) visitCollection(item);
		else if (isObject(item)) visitToken(item);
	};
	const visitToken = (token) => {
		if (token.type === "footnoteRef" && typeof token.id === "string") {
			const occurrence = (referenceCounts.get(token.id) ?? 0) + 1;
			const referenceId = getFootnoteReferenceId(token.id, occurrence);
			referenceCounts.set(token.id, occurrence);
			referenceProps.set(token, Object.freeze({ referenceId }));
			const backrefs = backrefsByLabel.get(token.id);
			if (backrefs) backrefs.push(referenceId);
			else backrefsByLabel.set(token.id, [referenceId]);
		} else if (token.type === "footnoteSection" && Array.isArray(token.footnotes)) {
			const footnotes = [];
			for (const footnote of token.footnotes) {
				if (!isSourceFootnote(footnote) || definedLabels.has(footnote.id)) continue;
				definedLabels.add(footnote.id);
				footnotes.push({
					id: footnote.id,
					text: footnote.text
				});
			}
			sectionDefinitions.push({
				token,
				footnotes
			});
		}
		if (token.type === "image" || token.type === "code" || token.type === "codespan") return;
		visitCollection(token.tokens);
		visitCollection(token.items);
		visitCollection(token.header);
		visitCollection(token.rows);
	};
	visitCollection(tokens);
	for (const section of sectionDefinitions) {
		const footnotes = section.footnotes.map((footnote) => Object.freeze({
			...footnote,
			backrefs: Object.freeze([...backrefsByLabel.get(footnote.id) ?? []])
		}));
		sectionProps.set(section.token, Object.freeze({ footnotes: Object.freeze(footnotes) }));
	}
	return Object.freeze({
		referenceProps,
		sectionProps
	});
};
var STREAM_MAX_OFFSET_GAP = 1e6;
/**
* Checks whether a streaming chunk uses offset-based patching.
*
* @param chunk Streaming chunk passed to the imperative streaming API.
* @returns True when the chunk has an `offset` field.
*/
var isStreamingOffsetChunk = (chunk) => typeof chunk === "object" && chunk !== null && "offset" in chunk;
var getStreamingChunkInstruction = (chunk, currentMode, { currentBufferLength = 0, maxOffsetGap = STREAM_MAX_OFFSET_GAP } = {}) => {
	if (typeof chunk === "string") {
		if (currentMode === "offset") return {
			kind: "drop",
			message: "offset mode active, string chunk dropped. Call resetStream() before switching streaming input modes."
		};
		return {
			kind: "append",
			value: chunk,
			nextMode: "append"
		};
	}
	if (!isStreamingOffsetChunk(chunk) || typeof chunk.value !== "string") return {
		kind: "drop",
		message: "Invalid chunk object passed to writeChunk(); expected { value: string, offset: number }."
	};
	if (!Number.isSafeInteger(chunk.offset) || chunk.offset < 0) return {
		kind: "drop",
		message: "Invalid offset chunk passed to writeChunk(); offset must be a non-negative safe integer."
	};
	if (currentMode === "append") return {
		kind: "drop",
		message: "append mode active, offset chunk dropped. Call resetStream() before switching streaming input modes."
	};
	if (chunk.offset - currentBufferLength > maxOffsetGap) return {
		kind: "drop",
		message: `offset chunk skipped: offset ${chunk.offset} is more than ${maxOffsetGap} chars beyond the current buffer length (${currentBufferLength}).`
	};
	return {
		kind: "offset",
		chunk,
		nextMode: "offset"
	};
};
var appendStreamingChunk = (pendingBuffer, value) => pendingBuffer + value;
var commitStreamingAppendBuffer = (sourceBuffer, pendingBuffer) => {
	if (pendingBuffer === "") return {
		committed: false,
		sourceBuffer,
		pendingBuffer
	};
	return {
		committed: true,
		sourceBuffer: sourceBuffer + pendingBuffer,
		pendingBuffer: ""
	};
};
var shouldFlushStreamingAppendBuffer = (pendingBuffer, maxChars = 256) => pendingBuffer.length >= maxChars;
var applyStreamingOffsetChunk = (source, { value, offset }, { maxOffsetGap = STREAM_MAX_OFFSET_GAP } = {}) => {
	const gap = Math.max(0, offset - source.length);
	const boundedGap = Math.min(gap, Math.max(0, maxOffsetGap));
	const effectiveOffset = offset > source.length ? source.length + boundedGap : offset;
	const padded = boundedGap > 0 ? source + " ".repeat(boundedGap) : source;
	const prefix = padded.slice(0, effectiveOffset);
	const suffix = padded.slice(effectiveOffset + value.length);
	return prefix + value + suffix;
};
// node_modules/@humanspeak/svelte-markdown/dist/utils/stream-flush-profile.js
/**
* Opt-in User Timing instrumentation for the streaming flush.
*
* When enabled, every flush of buffered stream input (parse + token diff +
* reactive state assignment) is recorded as a `performance.measure` entry
* named {@link STREAM_FLUSH_MEASURE}. The entry does NOT include Svelte's
* DOM commit for that state change, which runs in a later microtask —
* benchmarks that need end-to-end frame cost must measure that externally
* (see `src/routes/test/stream-compare`).
*
* Instrumentation is off by default because `performance.measure` entries
* accumulate in the timeline buffer for the page's lifetime; a long chat
* session would otherwise leak one entry per flush. Enable it by setting
* `globalThis.__svelteMarkdownProfile = true` before streaming starts.
*
* @module stream-flush-profile
*/
/** Name of the `performance.measure` entry emitted per stream flush. */
var STREAM_FLUSH_MEASURE = "svelte-markdown:stream-flush";
/**
* Whether stream-flush profiling is currently enabled and supported.
*
* @returns `true` when the opt-in flag is set and `performance.measure` exists
* @example
* ```ts
* globalThis.__svelteMarkdownProfile = true
* isStreamFlushProfilingEnabled() // true (in a browser)
* ```
*/
var isStreamFlushProfilingEnabled = () => globalThis["__svelteMarkdownProfile"] === true && typeof performance !== "undefined" && typeof performance.now === "function" && typeof performance.measure === "function";
/**
* Runs `flush` and, when profiling is enabled, records its wall-clock duration
* as a User Timing measure. Emits nothing when profiling is off.
*
* @param flush - The synchronous flush body to time
* @param detail - Optional detail object attached to the measure entry
* @returns Nothing; the measure (if any) is visible via `performance.getEntriesByName`
* @example
* ```ts
* profileStreamFlush(() => applyStreamingSource(buffer), { sourceLength: buffer.length })
* ```
*/
var profileStreamFlush = (flush, detail) => {
	if (!isStreamFlushProfilingEnabled()) {
		flush();
		return;
	}
	const start = performance.now();
	try {
		flush();
	} finally {
		performance.measure(STREAM_FLUSH_MEASURE, {
			start,
			end: performance.now(),
			detail
		});
	}
};
// node_modules/@humanspeak/svelte-markdown/dist/SvelteMarkdown.svelte
function SvelteMarkdown($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		/**
		* Component Evolution & Design Notes:
		*
		* 1. Core Purpose:
		* - Serves as the main entry point for markdown rendering in Svelte
		* - Handles both string input and pre-parsed tokens for flexibility
		*
		* 2. Key Design Decisions:
		* - Uses a separate Parser component for actual rendering to maintain separation of concerns
		* - Implements token cleanup via shrinkHtmlTokens to optimize HTML token handling
		* - Maintains state synchronization using Svelte 5's $state and $effect
		*
		* 3. Performance Considerations:
		* - Token caching: Parsed tokens are cached to avoid re-parsing unchanged content
		* - Fast FNV-1a hashing for efficient cache key generation
		* - LRU eviction keeps memory usage bounded (default: 50 cached documents)
		* - Cache hit: <1ms (vs 50-200ms parsing)
		* - Uses key directive for proper component rerendering when source changes
		* - Intentionally avoids reactive tokens to prevent double processing
		*
		* 4. Extensibility:
		* - Supports custom renderers through composition pattern
		* - Allows parser configuration via options prop
		* - Provides parsed callback for external token access
		*/
		const { source = [], streaming = false, streamingText = false, streamId = void 0, renderers = {}, options = {}, isInline = false, parsed = void 0, extensions = [], sanitizeUrl = defaultSanitizeUrl, sanitizeAttributes = defaultSanitizeAttributes, $$slots, $$events, ...rest } = $$props;
		const extensionTokenNames = derived(() => getExtensionTokenNames(extensions));
		const combinedOptions = derived(() => buildParserOptions(options, extensions));
		const slugger = new Slugger$1();
		const renderMetadata = createRenderMetadata();
		setContext(RENDER_METADATA_CONTEXT, renderMetadata);
		const hasAsyncExtension$1 = derived(() => hasAsyncExtension(extensions));
		let textCollector;
		let textLedger;
		let textEpoch = 0;
		let lastTracking = false;
		setContext(STREAMING_TEXT_CONTEXT, {
			getBatch: () => textLedger?.batchId,
			getMetadata: (node) => textLedger?.get(node)
		});
		const baselineText = (value) => {
			textCollector = streamingText ? new ProvenanceCollector() : void 0;
			textLedger = streamingText ? new StreamingTextLedger(++textEpoch, value) : void 0;
			lastTracking = streamingText;
		};
		let incrementalParser;
		let lastOptionsSrc;
		let lastExtensionsSrc;
		let lastSourceProp;
		let lastStreamId;
		let streamSourceBuffer = "";
		let pendingStreamAppendBuffer = "";
		let pendingStreamFullSource = null;
		let pendingStreamAppendBase;
		let streamFlushHandle = null;
		let streamInputMode = null;
		let streamTokens = [];
		let lastParserTokens;
		let streamRenderMetadataStartIndex = 0;
		let streamRenderMetadataStartOffset = 0;
		let streamRenderMetadataConsumed = true;
		const warnStreaming = (message) => {
			console.warn(`[svelte-markdown] ${message}`);
		};
		const clearStreamingParser = () => {
			incrementalParser = void 0;
			lastOptionsSrc = void 0;
			lastExtensionsSrc = void 0;
		};
		const cancelScheduledStreamFlush = () => {
			if (!streamFlushHandle) return;
			if (streamFlushHandle.kind === "raf" && typeof cancelAnimationFrame === "function") cancelAnimationFrame(streamFlushHandle.id);
			else if (streamFlushHandle.kind === "timeout") clearTimeout(streamFlushHandle.id);
			streamFlushHandle = null;
		};
		const hasStreamingParserConfigChanged = () => !incrementalParser || lastOptionsSrc !== options || lastExtensionsSrc !== extensions || lastTracking !== streamingText;
		/**
		* Parses `nextSource` and adopts the result as `streamTokens`.
		*
		* @param nextSource - Full accumulated source
		* @param forceNewParser - Start a fresh parser (reset paths)
		* @param appendsTo - A string `nextSource` is KNOWN to start with, so the
		*   parser can skip its own full-length append check (plan 011)
		*/
		const applyStreamingSource = (nextSource, forceNewParser = false, appendsTo, patch) => {
			if (lastTracking !== streamingText || streamingText && !textLedger) {
				baselineText(nextSource);
				forceNewParser = true;
			}
			textLedger?.update(nextSource, patch);
			if (forceNewParser || hasStreamingParserConfigChanged()) {
				incrementalParser = new IncrementalParser(combinedOptions(), textCollector);
				lastOptionsSrc = options;
				lastExtensionsSrc = extensions;
			}
			const parser = incrementalParser;
			if (!parser) return;
			const { tokens: newTokens, divergeAt, divergeOffset, reuseMode, reusedPrefixCount } = parser.update(nextSource, appendsTo);
			const occurrences = textCollector?.capture(newTokens);
			adoptStreamingTokens(newTokens, reuseMode, divergeAt, reusedPrefixCount);
			if (textCollector && occurrences && textLedger) {
				const start = reuseMode === "prefix" ? divergeAt : 0;
				textCollector.bind(streamTokens, occurrences, start);
				textLedger.prepare(streamTokens, textCollector, start);
			}
			lastParserTokens = newTokens;
			updateStreamingRenderMetadataStart(reuseMode, divergeAt, divergeOffset);
		};
		const adoptStreamingTokens = (newTokens, reuseMode, divergeAt, reusedPrefixCount) => {
			if (reuseMode === "prefix") streamTokens = reuseStableTokenArrayInPlace(streamTokens, newTokens, divergeAt, streamTokens === lastParserTokens ? reusedPrefixCount : 0);
			else if (reuseMode === "tree") streamTokens = reuseStableTokenTree(streamTokens, newTokens);
			else streamTokens = newTokens;
		};
		const updateStreamingRenderMetadataStart = (reuseMode, divergeAt, divergeOffset) => {
			const canSkipRenderMetadataPrefix = reuseMode === "prefix" && divergeOffset !== void 0;
			const startIndex = canSkipRenderMetadataPrefix ? divergeAt : 0;
			if (streamRenderMetadataConsumed || startIndex < streamRenderMetadataStartIndex) {
				streamRenderMetadataStartIndex = startIndex;
				streamRenderMetadataStartOffset = canSkipRenderMetadataPrefix ? divergeOffset : 0;
			}
			streamRenderMetadataConsumed = false;
		};
		const commitPendingAppendBuffer = () => {
			const result = commitStreamingAppendBuffer(streamSourceBuffer, pendingStreamAppendBuffer);
			if (!result.committed) return false;
			streamSourceBuffer = result.sourceBuffer;
			pendingStreamAppendBuffer = result.pendingBuffer;
			return true;
		};
		const runPendingStreamFlush = (forceNewParser) => {
			if (pendingStreamFullSource !== null) {
				const nextSource = pendingStreamFullSource;
				const appendsTo = pendingStreamAppendBase;
				pendingStreamFullSource = null;
				pendingStreamAppendBase = void 0;
				pendingStreamAppendBuffer = "";
				streamSourceBuffer = nextSource;
				applyStreamingSource(nextSource, forceNewParser, appendsTo);
				return;
			}
			const previousBuffer = streamSourceBuffer;
			if (!commitPendingAppendBuffer()) return;
			applyStreamingSource(streamSourceBuffer, forceNewParser, previousBuffer);
		};
		const flushPendingStreamChanges = (forceNewParser = false) => {
			cancelScheduledStreamFlush();
			profileStreamFlush(() => runPendingStreamFlush(forceNewParser), { sourceLength: streamSourceBuffer.length });
		};
		const scheduleStreamFlush = () => {
			if (streamFlushHandle || pendingStreamAppendBuffer === "" && pendingStreamFullSource === null) return;
			if (typeof window !== "undefined" && typeof window.requestAnimationFrame === "function") {
				streamFlushHandle = {
					kind: "raf",
					id: window.requestAnimationFrame(() => {
						streamFlushHandle = null;
						flushPendingStreamChanges();
					})
				};
				return;
			}
			streamFlushHandle = {
				kind: "timeout",
				id: setTimeout(() => {
					streamFlushHandle = null;
					flushPendingStreamChanges();
				}, 16)
			};
		};
		const teardownStreamingBuffers = () => {
			cancelScheduledStreamFlush();
			pendingStreamAppendBuffer = "";
			pendingStreamFullSource = null;
			pendingStreamAppendBase = void 0;
			streamInputMode = null;
			streamSourceBuffer = "";
			textCollector = void 0;
			textLedger = void 0;
			streamRenderMetadataStartIndex = 0;
			streamRenderMetadataStartOffset = 0;
			streamRenderMetadataConsumed = true;
		};
		const resetStreamingState = (nextSource = "") => {
			teardownStreamingBuffers();
			streamSourceBuffer = nextSource;
			baselineText(nextSource);
			if (nextSource === "") {
				clearStreamingParser();
				streamTokens = [];
				return;
			}
			applyStreamingSource(nextSource, true);
		};
		const syncStreamingSourceFromProp = (nextSource) => {
			const previousSourceProp = lastSourceProp;
			lastSourceProp = nextSource;
			if (Array.isArray(nextSource)) {
				teardownStreamingBuffers();
				clearStreamingParser();
				streamTokens = [...nextSource];
				return;
			}
			const nextStr = nextSource;
			const isAppendOnly = incrementalParser !== void 0 && streamSourceBuffer !== "" && nextStr !== "" && nextStr.length > streamSourceBuffer.length && nextStr.startsWith(streamSourceBuffer);
			if (isAppendOnly) {
				pendingStreamAppendBuffer = "";
				pendingStreamFullSource = nextStr;
				pendingStreamAppendBase = streamSourceBuffer;
				scheduleStreamFlush();
				return;
			}
			const emptyArrival = streamingText && previousSourceProp === "" && !!textLedger && streamSourceBuffer === "" && nextStr !== "";
			const emptyLedger = emptyArrival ? textLedger : void 0;
			const emptyCollector = emptyArrival ? textCollector : void 0;
			teardownStreamingBuffers();
			if (emptyLedger) {
				textLedger = emptyLedger;
				textCollector = emptyCollector;
			} else baselineText(nextStr);
			if (nextStr === "") {
				clearStreamingParser();
				streamTokens = [];
				return;
			}
			streamSourceBuffer = nextStr;
			applyStreamingSource(nextStr, !isAppendOnly);
		};
		/**
		* Drops every trace of the previous stream and rebaselines on the current
		* `source` prop. Used when `streamId` changes, i.e. when a recycled
		* component instance begins rendering a different message.
		*/
		const resetStreamingSession = () => {
			if (Array.isArray(source)) {
				syncStreamingSourceFromProp(source);
				return;
			}
			lastSourceProp = source;
			resetStreamingState(source);
		};
		const canUseImperativeStreaming = (methodName) => {
			if (!streaming) {
				warnStreaming(`${methodName}() is only available when streaming={true}; call dropped.`);
				return false;
			}
			if (hasAsyncExtension$1()) {
				warnStreaming(`${methodName}() is unavailable when async extensions are used; call dropped.`);
				return false;
			}
			if (Array.isArray(source)) {
				warnStreaming(`${methodName}() requires a string-backed source; token array sources are not supported.`);
				return false;
			}
			return true;
		};
		const applyAppendChunk = (value) => {
			if (pendingStreamFullSource !== null) flushPendingStreamChanges();
			pendingStreamAppendBuffer = appendStreamingChunk(pendingStreamAppendBuffer, value);
			if (shouldFlushStreamingAppendBuffer(pendingStreamAppendBuffer)) {
				flushPendingStreamChanges();
				return;
			}
			scheduleStreamFlush();
		};
		const applyOffsetChunk = (chunk) => {
			streamSourceBuffer = applyStreamingOffsetChunk(streamSourceBuffer, chunk, { maxOffsetGap: STREAM_MAX_OFFSET_GAP });
			applyStreamingSource(streamSourceBuffer, false, void 0, chunk);
		};
		function writeChunk(chunk) {
			if (!canUseImperativeStreaming("writeChunk")) return;
			if (lastStreamId !== streamId) {
				lastStreamId = streamId;
				resetStreamingSession();
			}
			if (lastTracking !== streamingText) {
				baselineText(streamSourceBuffer);
				clearStreamingParser();
			}
			if (pendingStreamFullSource !== null) flushPendingStreamChanges();
			const instruction = getStreamingChunkInstruction(chunk, streamInputMode, {
				currentBufferLength: streamSourceBuffer.length,
				maxOffsetGap: STREAM_MAX_OFFSET_GAP
			});
			if (instruction.kind === "drop") {
				warnStreaming(instruction.message);
				return;
			}
			streamInputMode = instruction.nextMode;
			if (instruction.kind === "append") {
				applyAppendChunk(instruction.value);
				return;
			}
			applyOffsetChunk(instruction.chunk);
		}
		function resetStream(nextSource = "") {
			if (!canUseImperativeStreaming("resetStream")) return;
			resetStreamingState(nextSource);
		}
		if (streamingText && streaming && !hasAsyncExtension$1() && typeof source === "string") {
			resetStreamingState(source);
			lastSourceProp = source;
			lastStreamId = streamId;
		}
		const syncTokens = derived(() => {
			if (hasAsyncExtension$1()) return void 0;
			if (streaming) return void 0;
			if (Array.isArray(source)) return void 0;
			if (source === "") return [];
			return parseAndCacheTokens(source, combinedOptions(), isInline);
		});
		let asyncTokens = void 0;
		const rawTokens = derived(() => Array.isArray(source) ? source : streaming && !hasAsyncExtension$1() ? streamTokens : hasAsyncExtension$1() ? asyncTokens : syncTokens());
		const tokens = derived(() => {
			if (!rawTokens()) return rawTokens();
			const sourceForMetadata = Array.isArray(source) ? void 0 : streaming && !hasAsyncExtension$1() ? streamSourceBuffer : source;
			const streamingStart = streaming && !hasAsyncExtension$1() ? {
				startIndex: streamRenderMetadataStartIndex,
				startOffset: streamRenderMetadataStartOffset
			} : {};
			const prepared = renderMetadata.prepareTokensForRender(rawTokens(), combinedOptions(), {
				source: sourceForMetadata,
				...streamingStart
			});
			streamRenderMetadataConsumed = true;
			return prepared;
		});
		const footnoteMetadata = derived(() => {
			if (!tokens()) return void 0;
			const hasFootnoteExtension = extensionTokenNames().includes("footnoteRef") || extensionTokenNames().includes("footnoteSection");
			if (!Array.isArray(source) && !hasFootnoteExtension) return void 0;
			return prepareFootnoteRenderMetadata(tokens());
		});
		const combinedRenderers = derived(() => buildCombinedRenderers(renderers));
		const allRendererKeys = derived(() => getAllRendererKeys(extensionTokenNames()));
		const snippetOverrides = derived(() => getSnippetOverrides(rest, allRendererKeys()));
		const htmlSnippetOverrides = derived(() => getHtmlSnippetOverrides(rest));
		const passThroughProps = derived(() => getPassThroughProps(rest, allRendererKeys()));
		Parser_1($$renderer, spread_props([
			{
				tokens: tokens(),
				footnoteMetadata: footnoteMetadata()
			},
			passThroughProps(),
			{
				options: combinedOptions(),
				slug: (val) => slugger.slug(val),
				renderers: combinedRenderers(),
				snippetOverrides: snippetOverrides(),
				htmlSnippetOverrides: htmlSnippetOverrides(),
				sanitizeUrl,
				sanitizeAttributes
			}
		]));
		bind_props($$props, {
			writeChunk,
			resetStream
		});
	});
}
// node_modules/@humanspeak/svelte-markdown/dist/index.js
/** The primary markdown rendering component. */
var dist_default = SvelteMarkdown;
// src/routes/paper/[slug]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		$$renderer.push(`<article class="max-w-3xl mx-auto py-16 px-4 font-pixel"><a href="/papers" class="text-sm opacity-60 hover:opacity-100 text-white transition-opacity mb-10 inline-block">← Back</a> <div class="prose prose-neutral text-white dark:prose-invert max-w-none">`);
		dist_default($$renderer, { source: data.content });
		$$renderer.push(`<!----></div></article>`);
	});
}
export { _page as default };

//# sourceMappingURL=_page.svelte.js.map