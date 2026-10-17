<script lang="ts">

    interface Paper {
        name: string;
        slug: string;
        id: string;
        post_date: string;
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



    const papers: Paper[] = [
        { name: "Librewolf", slug: "librewolf", id: "1", post_date: "12/08/2026" },
        { name: "Why async - renewed", slug: "async2", id: "2", post_date: "01/09/2026" },
        { name: "Java basics", slug: "java", id: "3", post_date: "11/09/2026" },
        { name: "Here my friends websites", slug: "friends", id: "4", post_date: "01/08/2026" },
        { name: "How setup a Minecraft server", slug: "mc-server", id: "11", post_date: "30/08/2025" },
        { name: "JS/TS diferences", slug: "js-ts", id: "12", post_date: "30/08/2025" },
        { name: "Why use async functions?", slug: "async", id: "13", post_date: "30/08/2025" },
        { name: "the diference of UI and UX", slug: "ui-ux", id: "14", post_date: "30/08/2025" },

    ];
</script>

<section id="papers-container" class='flex items-center flex-col font-departure font-bold '>
    <section id='profile-content' class='flex w-full items-center justify-center '>
        <div class='flex gap-10 flex-col items-center justify-center lg:w-1/3 w-full'>
            <article class='border-1 w-full dark:border-gray-200/10 border-gray-400/30 flex flex-col '>
                    <ol class="flex gap-3 w-full flex-col scale-75 lg:scale-100 paper-cli flex-wrap items-left p-5">
                        {#each papers as papers, index (papers.name)}
                            <li >
                                <a onclick={playSwoosh} onmouseenter={playHover} href={`/paper/${papers.slug}`} class="flex flex-col w-fit hover:gap-5 dark:text-gray-800 text-black text-left transition-all duration-200">
                                     <span class="font-medium"> {papers.post_date} | <span class='text-black hover:text-white hover:bg-black dark:hover:bg-gray-100 dark:hover:text-black dark:text-gray-100'> [{papers.name}]</span></span>
                                </a>
                            </li>
                        {/each}
                </ol>
            </article>
        </div>
    </section>
</section>