<script>
    import favicon from '#lib/assets/favicon.svg';
    import {Menu} from "@lucide/svelte";

    let isOpen = $state(false);

    function toggleMenu() {
            isOpen = !isOpen;
    }

    const playHover = () => {
        const audio = new Audio("/assets/sounds/hover.mp3"); 
        audio.volume = 0.2;
        audio.play().catch(() => {});
    };
    const playSwoosh = () => {
        const audio = new Audio("/assets/sounds/swoosh.mp3"); 
        audio.volume = 0.1;
        audio.play().catch(() => {});
    };

</script>

<header id="topbar"  class="w-full show-down-anim flex items-center justify-center mix-blend-difference lg:absolute fixed p-2 z-30">
    <nav  class="flex items-center  uppercase text-sm justify-between  lg:px-20 font-black w-full border-b-1 p-2">
        <div class="border-white/10 border-r-1 lg:hidden flex px-3">
            <a href="/"><img src={favicon} alt="Logo" /></a>
        </div>
            <div class="flex flex-col lowercase text-2xl mt-5 text-white">
                <p> Minimalism isn't about remove  <br>is about the message.</p>
                <a onmouseenter={playHover} class=" text-lg font-light w-fit mt-5 bg-white rounded-4xl p-4 text-black hover:bg-black hover:text-white hover:rounded-0 hover:border-white border-1 duration-200 lg:flex hidden" href="#projects">Talk with me -></a>

            </div>
            <div class="flex right-10   gap-5 uppercase text-xl fixed text-white">
                <a onmouseenter={playHover} class=" text-lg font-geist w-fit text-white hover:bg-white hover:text-black hover:rounded-0 duration-200 lg:flex hidden" href="#projects">Github</a>

                <p>/</p>
                <a onmouseenter={playHover} class=" text-lg font-geist w-fit text-white hover:bg-white hover:text-black hover:rounded-0 duration-200 lg:flex hidden" href="#projects">Linkedin</a>

            </div>
        <div class="border-white/10 lg:hidden flex border-l-1 px-3">
            <button  onmouseenter={() => isOpen = true} aria-label="open menu" ><Menu class="text-white duration-200 transform {isOpen ? 'translate-x-0' : 'translate-x-full'} " /></button>
        </div>
    </nav>
</header>
<aside id="menubar" onmouseleave={() => isOpen = false} class="z-50 p-10  bg-white right-0 fixed h-screen lg:w-80 md:w-80 w-full {isOpen ? 'translate-x-0 duration-500' : 'translate-x-300 duration-500'}">
    <div class="flex items-center gap-3 w-full justify-center ">
        <p class="text-3xl font-black">NAVIGATION </p>
        <div class="w-full items-center justify-center border-1 border-black border-dashed">
                
        </div>
        <button id="menubutton" onclick={toggleMenu} class="text-black lg:hidden md:hidden sm:hidden block font-bold py-2 px-4 active:scale-95 duration-200 hover:bg-black hover:text-white transition-colors duration-300">
            <Menu />
        </button>
    </div>
        <ol class="flex flex-col gap-4 p-10 text-2xl">
            <li class="hover:bg-gray-200 active:scale-95 w-fit flex duration-200">
                <a href="#about" onmouseenter={playHover} onclick={toggleMenu}>
                    ABOUT
                 </a>
            </li>
             <li class="hover:bg-gray-200 active:scale-95 w-fit flex duration-200">
                <a href="#projects" onmouseenter={playHover} onclick={toggleMenu}>
                    PROJECTS
                </a>
            </li>
            <li class="hover:bg-gray-200 active:scale-95 w-fit flex duration-200">
                <a href="/socials" onmouseenter={playHover} onclick={playSwoosh}>
                    SOCIALS
                </a>
            </li>
            <li class="hover:bg-gray-200 active:scale-95 w-fit flex duration-200">
                <a href="/papers" onmouseenter={playHover} onclick={playSwoosh}>
                    PAPERS
                </a>
            </li>
        </ol>
        <div class="flex items-center gap-3 w-full justify-center ">
            <p class="text-3xl font-black" onmouseenter={playHover} >
                GET IN CONTACT
            </p>
            <div class="w-full items-center justify-center border-1 border-black border-dashed"></div>
        </div>
        <ol  class="flex flex-col gap-4 p-10 text-2xl">
            <li class="hover:bg-gray-200 active:scale-95 w-fit flex duration-200">
                 <a href="/socials" onmouseenter={playHover} onclick={playSwoosh}>
                    Discord
                </a>
            </li>
        <li class="hover:bg-gray-200 active:scale-95 w-fit flex duration-200">
            <a href="/socials" class={playHover} onclick={playSwoosh}>
                inkedin
            </a>
        </li>
    </ol>
</aside>