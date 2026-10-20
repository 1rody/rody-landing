<script>
    import RodyBanner from '#lib/assets/backgrounds/rody.svg'; 
    import RodyBackground from '#lib/assets/backgrounds/PixelPlains.svg';
    import { ChevronDown } from 'lucide-svelte';
</script>


<section id="hero" class="w-full h-screen font- flex flex-col dark:invert-0 invert-100 items-center justify-center">
        <div class=" text-white  flex"><div class="font-pixel text-6xl leading-none">"</div><span class="bg-foreground/4 lg:text-2xl text-sm px-4 text-center items-center justify-center flex py-2 font-geist text-2xl font-black">Welcome to a calm land on internet...</span><div class="font-pixel text-6xl">"</div></div>
        <h1 class="text-white text-20xl text-center flex flex-nowrap font-pixel leading-none">Rody land</h1>
        <div class="absolute bottom-3 flex items-center justify-center text-white flex-col animate-pulse">
            <ChevronDown/>
            <p>Scroll down to see more...</p>
        </div>
</section>