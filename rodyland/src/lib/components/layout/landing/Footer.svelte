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

 <footer id="footer" class="flex flex-col font-geist  overflow-hidden h-fit items-center justify-center w-full">
        <h2 class="relative bottom-0 z-2  flex w-full items-center justify-center text-left lg:text-7xl md:text-6xl text-5xl p-20 font-black bg-white text-black lg:text-8xl">
            DIVE IN <br />
            AN OCEAN OF PERSPECTIVES
        </h2>
        <img  class='dark:invert-0 invert-100 w-full mt-5' alt="RodyLanding Title image background" src={Rody} />
    <div class='link-section p-2 max-w-2/3 font-black text-white text-center items-center gap-10 flex-wrap justify-between  flex w-full mt-10'>
        <p>&copy; {new Date().getFullYear()} RODY.CITY All rights reserved.</p>
        <div translate="no" class='flex gap-10 flex-wrap  z-40   items-center justify-center'>
         {#each socials as social, index (social.name)}
            <a class='border-b-1 border-white duration-200 hover:bg-white hover:text-black'href={social.url}>{social.name}</a>
         {/each}
        </div>
    </div>
</footer>