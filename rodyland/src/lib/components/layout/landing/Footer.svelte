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

 <footer id="footer" class="flex flex-col pt-40 pb-20 font-geist overflow-hidden text-white bg-white dark:text-black  items-center justify-center w-full">
        <h1 class="text-20xl text-center flex flex-nowrap font-pixel leading-none">Rody</h1>
    <div class='link-section p max-w-2/4 font-black text-center items-center lg:gap-3 flex-wrap justify-between  lg:flex-nowrap flex w-full mt-10'>
        <p>&copy; {new Date().getFullYear()} RODY.CITY All rights reserved.</p>
        <div translate="no" class='flex gap-10 flex-wrap  z-40   items-center justify-center'>
         {#each socials as social, index (social.name)}
            <a class='border-b-1 border-white duration-200 hover:bg-white hover:text-black'href={social.url}>{social.name}</a>
         {/each}
        </div>
    </div>
</footer>