<script>
    //import images
    import arkhan from "#lib/assets/backgrounds/projects/arkhan.png";
    import karasu from "#lib/assets/backgrounds/projects/karasuBanner.png";
    import unseen from "#lib/assets/backgrounds/projects/Unseen.png";
    import TransitionImage from "#lib/assets/backgrounds/PIXEL.svg";

    const projects = [
        {
            title: "Arkhan",
            description: "Arkhan is an security team division of nextfur (nextfur.net), the landing page now is down but the source is on my github.",
            image: arkhan,
            view: "https://www.github.com/1rody/arkhan-landing",
            concept: "/pageforconcept"
        },
        {
            title: "karasu",
            description: "Landing page for karasu.sh security team. ",
            image: karasu,
            view: "https://www.karasu.sh",
            concept: "/pageforconcept"
        },
        {
            title: "Unseen",
            description: "Imagine a world... unseen is an plataform developed to unify email, calendar, LLM, notes and sync all of them between the apps.",
            image: unseen,
            view: "https://www.unseen.domain",
            concept: "/pageforconcept"
        }
    ];
</script>
<!--style for card hover effect only-->
<style>
    .project {
        display: flex;
        transform: .2s;
    .information {
        opacity: 0;
    }
    &:hover {
        .information {
            opacity: 100;
        }
    }
    }
</style>
<img src={TransitionImage} class="w-full z-6 relative lg:-mb-20" alt="transition">
<section id="projects" class=" flex-col flex min-h-screen items-center justify-center overflow-hidden bg-white z-9 relative lg:p-20">
    <h2 class="font-pixel  max-w-3/4 lg:text-7xl text-3xl mt-20 text-center">Why design, code or work with me?</h2>
    <p class="text-center mt-5 max-w-3/4">Great design is more than visuals. It’s about creating intuitive, impactful, memorable experiences and show it to the user...</p>
    <div id="project-section" class="relative mt-30 z-10 mb-10 flex w-full flex-col overflow-hidden items-center justify-center p-5 gap-40">
    <!-- Migracao para svelte (de projects.map to #each) -->
    {#each projects as project, index (project.title)}
            <div class="flex items-center flex-wrap lg:flex-nowrap w-full justify-center  {index % 2 === 1 ? 'lg:flex-row-reverse flex-col lg:flex-nowrap lg:text-right' : ''}" >
            <img alt={`${project.title} project image`} src={project.image} class=" duration-200 hover:scale-106 lg:max-h-140 lg:max-w-220 overflow-hidden  w-full" />
            <div class="flex flex-col p-10  text-black">
                <h2 class="lg:text-7xl uppercase text-4xl font-black">
                    {project.title}
                </h2>
                <article class="flex flex-col w-fit lg:text-2xl gap-8 justify-between {index % 2 === 1 ? 'flex-col lg:items-end lg:w-full max-w-full justify-end' : ''}">
                    <p>{project.description}</p>
                    <a class="bg-black p-7 text-white w-fit font-geist duration-200 active:scale-90 border-1 border-black hover:bg-white hover:text-black" href={project.view}>
                        See more ->
                    </a>
                </article>
            </div>
        </div>
    {/each}
    </div>

    <div class="w-full pb-20  justify-center flex">
    </div>
</section>