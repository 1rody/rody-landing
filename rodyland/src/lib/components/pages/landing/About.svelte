<script>
    import Stackbox from "#lib/assets/backgrounds/misc/Stackbox.svg";
    import RodyBackground from '#lib/assets/backgrounds/PixelPlains.svg';

</script>

<section id="about" class=" z-6 relative p-10 flex-col min-h-screen lg:sticky top-[2px]  w-full flex items-center justify-center">
        <div class="bg-black border-1 border-gray-400/20 flex rounded-2xl items-center flex-col">
        <div class=" border-gray-400/20 border-b-1 flex justify-between font-pixel w-full text-white font-black p-2 ">
            <p>-</p>
            <p>WHOAMI</p>
            <p>□</p>
        </div>
                    <div class="w-full lg:flex-nowrap flex-wrap  text-white flex items-center justify-center">
                        <section id="whoami" class="mt-30 p-5 pb-20 flex flex-col items-start justify-center ">
                            <p class="text-sm font-black uppercase text-gray-400 lg:text-left text-center lg:mb-0 mb-5">Rodolfo Rocha Falcao - Software engenierr</p>
                            <h1 class="lg:text-7xl md:text-6xl text-4xl  lg:text-left text-center font-geist font-black uppercase">Let’s bring <br> your idea to life<span class="animate-pulse">_</span></h1>
                            <article class=" flex flex-col gap-8 lg:text-left mt-5 text-gray-200 text-center font-medium max-w-2xl text-lg">
                            <p id="introduction">
                                I'm Rodolfo, also known as Rody / 1rody.  
                                Software Engineering student at <a class="border-b-1 hover:bg-black font-black duration-200 hover:text-white" href="https://www.ucsal.br/">UCSal</a>, focused on front-end development and UI/UX design.
                            </p>

                            <p>
                                I care about building simple, fast pages that work well on any screen and communicate clearly.  
                                My main stack is <strong>Next.js</strong> and <strong>React</strong>, but I also enjoy using <strong>Svelte</strong> when the project benefits from it.  
                                I spend most of my time refining interfaces, improving performance, and turning ideas into clean, usable products.
                            </p>

                            <p>
                                Currently working on personal projects and experiments. From landing pages to small apps.  
                                You can check my <a class="border-b-1 hover:bg-black font-black duration-200 hover:text-white" href="#projects">resume</a> or jump straight to the <a class="border-b-1 hover:bg-black font-black duration-200 hover:text-white" href="#projects">projects section</a> below.
                            </p>
                            </article>
                        </section>
                        <div class="lg:w-1/3 md:w-1/4 w-full p-5 flex items-start justify-start flex-col">
                            <img src={Stackbox} class="w-250 mt-50 invert-100" alt="My tech stacks nextjs javascript typescript java figma">
                        </div>
                    </div>
        </div>
</section>