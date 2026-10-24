<script>
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
            <main class='flex items-center flex-col font-departure font-bold '>
                    <section id='profile-header' class='flex   lg:w-1/3 w-full  text-5xl items-center justify-center'>
                        <div class='border-b-1 w-2/4 dark:border-gray-200/10 border-b-gray-300/50 p-1'>

                        </div >
                        <p>RO_DY</p>
                        <div class='border-b-1 w-2/4 dark:border-gray-200/10 border-b-gray-300/50 p-1'>

                        </div>
                    </section>
                    <section id='profile-content' class='flex mb-10 mt-20 w-full items-center justify-center '>
                        <div class='flex gap-10 flex-col items-center justify-center lg:w-1/3 w-full'>
                            <article class='border-1 w-full dark:border-gray-200/10 border-gray-300/50 flex flex-col '>
                                <div class='flex  border-b-1 dark:border-gray-200/10 border-b-gray-300/50 p-3 mb-5 justify-between w-full'>
                                    <h2>[0x00]</h2>
                                    <p>RODY</p>
                                </div>
                                <div class='p-3'>
                                    <p>
                                        You <span class="text-gray-300">rearched</span> the <span class="text-red-500">farlands</span>... <br /> here the world is under construction, under an OLD and frogotten web, an nostalgic style in a modern way of view.
                                        <br><br>
                                        <a onclick={playSwoosh} onmouseenter={playHover} class='hover:text-red-500' href='/'>- back to landing</a><br />
                                    </p>
                                </div>
                            </article>
                            <article class='border-1 w-full dark:border-gray-200/10 border-gray-300/50 flex flex-col '>
                                <div class='flex  border-b-1 dark:border-gray-200/10 border-b-gray-200/30 p-3 mb-5 justify-between w-full'>
                                    <h2>[DC]</h2>
                                    <p>RODY.CITY</p>
                                </div>
                                <div class='p-3'>
                                    <p>
                                        Wanna talk with me?, play games or just see how i code? check my discord server! <br /><br />

                                        <a onclick={playSwoosh} onmouseenter={playHover} class='hover:text-red-500' href='https://discord.gg/aM8Fc86ewR'>- discord server</a><br />
                                    </p>
                                </div>
                            </article>
                        </div>
                    </section>
            </main>