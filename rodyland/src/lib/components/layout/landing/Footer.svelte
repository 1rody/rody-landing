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
        <section id="questions" class=" text-dark p-5 lg:px-30 justify-end text-start mt-10 w-full border-black">
                    <details class="border-b-1 border-t-1 border-black">
                        <summary class="text-2xl p-4 font-black">WHAT IS UI AND UX</summary>
                        <p class="p-4 text-lg">
                            UI (user interface) is what the user sees: the layout, the visual design, the components they interact with. It s driven by design.
                            UX (user experience) is how the interface feels to use: the navigation, the accessibility, how easily someone can accomplish what they came to do.
                            The two are related but not the same — a site can look good and still be frustrating to use. Good UX is also judged against intent: an interface built for a specialist audience has different goals than one meant for everyone. More in my paper.
                        </p>
                    </details>
                    <details class="border-b-1  border-black">
                        <summary class="text-2xl p-4 font-black">SCOPE & DEVELOPER METHOD</summary>
                        <p class="p-4 text-lg">
                            UI (user interface) is what the user sees: the layout, the visual design, the components they interact with. It s driven by design.
                            UX (user experience) is how the interface feels to use: the navigation, the accessibility, how easily someone can accomplish what they came to do.
                            The two are related but not the same — a site can look good and still be frustrating to use. Good UX is also judged against intent: an interface built for a specialist audience has different goals than one meant for everyone. More in my paper.
                        </p>
                    </details>
                    <details class="border-b-1  border-black">
                        <summary class="text-2xl p-4 font-black">PRICING TABLE</summary>
                        <p class="p-4 text-lg">
                            UI (user interface) is what the user sees: the layout, the visual design, the components they interact with. It s driven by design.
                            UX (user experience) is how the interface feels to use: the navigation, the accessibility, how easily someone can accomplish what they came to do.
                            The two are related but not the same — a site can look good and still be frustrating to use. Good UX is also judged against intent: an interface built for a specialist audience has different goals than one meant for everyone. More in my paper.
                        </p>
                    </details>
    </section>
    <div class='link-section  font-black text-center items-center lg:gap-3 flex-wrap justify-between  lg:flex-nowrap flex w-full mt-10'>
        <p class="w-full">&copy; {new Date().getFullYear()} RODY.CITY All rights reserved.</p>
        <div translate="no" class='flex gap-10 flex-wrap  w-full  items-center justify-center'>
         {#each socials as social, index (social.name)}
            <a class='border-b-1 border-white duration-200 lg:mt-0 mt-10 hover:bg-white hover:text-black'href={social.url}>{social.name}</a>
         {/each}
        </div>
    </div>
</footer>