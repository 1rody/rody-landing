<script>
    //import images
    import arkhan from "#lib/assets/backgrounds/projects/arkhan.png";
    import karasu from "#lib/assets/backgrounds/projects/karasuBanner.png";
    import unseen from "#lib/assets/backgrounds/projects/Unseen.png";

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

<section id="projects" class=" flex-col items-center justify-center overflow-hidden bg-white z-9 relative lg:p-20">
    <div id="project-section" class="relative z-10 mb-10 flex w-full flex-wrap overflow-hidden items-center justify-center p-5 gap-10 no-select">
    <!--Migracao para svelte (de projexts.map to #each)-->
        {#each projects as project, index (project.title)}
                <a  href={project.view}    class="flex project lg:scale-100  scale-60 lg:min-h-80 lg:max-h-80 lg:min-w-120 lg:max-w-150 items-center justify-center border-1 border-black bg-white p-2 duration-200 active:scale-95 lg:hover:scale-105" >
                    <img alt={`${project.title} project image`} src={project.image}  class=" z-10 w-fit h-fit lg:min-h-80 max-h-80 min-w-150 max-w-150 items-center justify-center border-1 border-black " />
                    <div class="information absolute z-40  w-fit h-fit lg:min-h-80 max-h-80 min-w-120 max-w-130 flex-col flex flex-wrap justify-center p-5 text-center text-white backdrop-blur-sm lg:text-left">
                        <h2 class="text-3xl font-black">
                            {project.title}
                        </h2>
                        <article class="flex flex-col gap-3">
                            <p>{project.description}</p>
                        </article>
                    </div>
                </a>
        {/each}
    </div>
</section>