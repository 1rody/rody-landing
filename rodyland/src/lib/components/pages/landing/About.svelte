<script>
    import TransitionImage from "#lib/assets/backgrounds/TransitionStroke.svg";
    import Stackbox from "#lib/assets/backgrounds/misc/Stackbox.svg";
</script>

<img src={TransitionImage} class="w-full z-7  font-geist relative" alt="transition">
<section id="about" class="bg-white z-6 relative flex-col min-h-screen  w-full flex items-center justify-center">
            <div class="w-full lg:flex-nowrap flex-wrap  flex items-center justify-center">
                <section id="whoami" class="mt-30 p-5 flex flex-col items-end justify-center ">
                    <h1 class="lg:text-7xl md:text-6xl text-5xl  lg:text-right text-center font-geist font-black ">WHO IS RODY?</h1>
                    <article class="text-black flex flex-col gap-8 lg:text-right text-center font-medium max-w-2xl text-lg">
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
                    <img src={Stackbox} class="w-250 mt-50" alt="My tech stacks nextjs javascript typescript java figma">
                </div>
            </div>
                    <div class="w-full flex items-center justify-center text-left mt-20 pb-40 lg:pb-0 ">
                        <div class="bgwhite border-1 border-black/10 text-3xl w-2/3 lg:p-10 p-4 gap-10 flex  flex-col lg:flex-nowrap items-center justify-center rounded-3xl">
                            <p class=" text-black font-pixel">Let’s bring an extraordinary code or idea to life! </p>
                            <a class="font-black text-white bg-black w-fit text-lg rounded-4xl py-2 px-3 hover:px-5 duration-200 text-center " href="">Get in touch</a>
                        </div>
                    </div>
        </section>