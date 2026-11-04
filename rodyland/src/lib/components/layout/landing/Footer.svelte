<script lang="ts">

    import Rody from "#lib/assets/backgrounds/rody.svg";

    interface Social {
        name: string;
        url: string;
    }
    const socials: Social[] = [
            {name: "Github", url: "https://github.com/1R0-DY"},
            {name: "X", url: "https://x.com/1R0_DY"},
            {name: "Linkedin", url: "https://www.linkedin.com/in/rody-1r0-dy/"},
            {name: "Pinterest", url: "https://www.pinterest.com/1r0dy_/"},
    ];
</script>

 <footer id="footer" class="flex flex-col pt-40 pb-20 font-geist overflow-hidden text-dark bg-white text-base-invert items-center justify-center w-full">
        <h1 class="text-30xl text-center flex font-climate flex-nowrap uppercase font-black leading-none">Rody</h1>
<section id="questions" class="text-dark p-5 lg:px-30 justify-end text-start mt-10 w-full border-black">
    <details class="border-b-1 border-t-1 border-black">
        <summary class="text-2xl p-4 font-black">WHAT ARE UI AND UX?</summary>
        <p class="p-4 text-lg">
            UI (User Interface) is what users see and interact with: the layout, visual elements, typography, colors, and interactive components. It focuses on how an interface looks and how its elements are presented.

            UX (User Experience) is how users experience and navigate an interface: its usability, accessibility, structure, and how easily they can accomplish their goals.

            Although closely related, they are not the same. A website can look visually appealing and still be difficult or frustrating to use.

            Good UX also depends on context and intent. An interface designed for specialists has different requirements and priorities than one intended for a general audience.

            Read more in my paper.
        </p>
    </details>

    <details class="border-b-1 border-black">
        <summary class="text-2xl p-4 font-black">PROJECT SCOPE & DEVELOPMENT PROCESS</summary>
        <p class="p-4 text-lg">
            I work on branding, UI/UX design, Figma wireframes and prototypes, and front-end development using technologies such as Next.js, Svelte, JavaScript, and TypeScript.

            My development process is structured around three main stages:

            <br><br>

            <strong>01. Discovery & Project Scope</strong><br>
            We define the project's objectives, requirements, target audience, and overall direction. You can also share references, inspirations, and examples to help establish the visual and functional expectations.

            <br><br>

            <strong>02. Wireframing & Exploration</strong><br>
            I explore different layouts, structures, and visual approaches, creating multiple wireframe concepts. From these explorations, I select and present the five strongest directions for your review.

            <br><br>

            <strong>03. UI Design & Prototyping</strong><br>
            Based on the selected direction, I develop the Figma prototype, refining the interface and interactions. This stage follows your existing brand guidelines and design system or includes creating a new visual identity and design system when needed.
        </p>
    </details>

    <details class="border-b-1 border-black">
        <summary class="text-2xl p-4 font-black">PRICING & SERVICES</summary>
        <p class="p-4 text-lg">
            <strong>UI/UX Design</strong><br>
            Interface design following existing brand guidelines, including Figma wireframes and prototyping.<br>
            USD 20 / BRL 80

            <br><br>

            <strong>UX Improvements</strong><br>
            Usability improvements, UX corrections, and experience refinements.<br>
            USD 10 / BRL 30 (per page)

            <br><br>

            <strong>UI Development</strong><br>
            Interface implementation, visual refinements, and additional UI components.<br>
            USD 10 / BRL 30 (per page)

            <br><br>

            <strong>UI/UX Design + Branding</strong><br>
            Complete UI/UX services, including brand identity, logo design, and design system creation.<br>
            USD 60 / BRL 100

            <br><br>

            <strong>Front-end Development</strong><br>
            Front-end implementation only. UI/UX design and prototyping are not included.<br>
            USD 10 / BRL 20 (per page)

            <br><br>

            <strong>Landing Page — Public Repository</strong><br>
            Complete landing page project, including UI/UX design and front-end development. Source code delivered through a public repository.<br>
            USD 80 / BRL 150

            <br><br>

            <strong>Landing Page — Private Repository</strong><br>
            Complete landing page project, including UI/UX design and front-end development. Source code delivered through a private, exclusive repository.<br>
            USD 120 / BRL 180

            <br><br>

            <strong>Software Engineering — Complete Front-end Project</strong><br>
            Complete project development, from initial UI/UX planning and design to front-end implementation. Back-end development is not included. Repository visibility (public or private) is entirely up to you.<br>
            USD 180 / BRL 500
        </p>
    </details>
</section>
    <div class='link-section flex w-full items-center px-30 justify-center'>
        <p class="w-full">&copy; {new Date().getFullYear()} RODY.CITY All rights reserved.</p>
        <div translate="no" class='flex gap-4 lg:flex-nowrap flex-wrap items-center justify-center'>
         {#each socials as social, index (social.name)}
            <a class='border-b-1 border-white duration-200 lg:mt-0 mt-10 hover:bg-white hover:text-black'href={social.url}>{social.name}</a>
         {/each}
        </div>
    </div>
</footer>