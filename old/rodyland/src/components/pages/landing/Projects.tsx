'use client'

import Link from "next/link";
import Image from "next/image";


export default function Projects() {
    const projects = [
        {
            title: "Arkhan",
            description: "Arkhan is an security team division of nextfur (nextfur.net), the landing page now is down but the source is on my github.",
            image: "/assets/backgrounds/projects/arkhan.png",
            view: "https://www.github.com/1rody/arkhan-landing",
            concept: "/pageforconcept"
        },
        {
            title: "karasu",
            description: "Landing page for karasu.sh security team. ",
            image: "/assets/backgrounds/projects/karasuBanner.png",
            view: "https://www.karasu.sh",
            concept: "/pageforconcept"
        },
        {
            title: "Unseen",
            description: "Imagine a world... unseen is an plataform developed to unify email, calendar, LLM, notes and sync all of them between the apps.",
            image: "/assets/backgrounds/projects/Unseen.png",
            view: "https://www.unseen.domain",
            concept: "/pageforconcept"
        }
    ];

    return (
        <>
            <section id="projects" className=" z-6  flex-col items-center justify-center overflow-hidden bg-white lg:p-20">
                <div id="project-section" className="relative z-10 mb-10 flex w-full flex-wrap overflow-hidden items-center justify-center p-5 gap-10 no-select">
                    {projects.map((project, index) => (
                        <Link  key={index}  href={project.view}    className="flex project lg:scale-100 scale-60 lg:min-h-80 lg:max-h-80 lg:min-w-120 lg:max-w-150 items-center justify-center border-1 border-black bg-white p-2 duration-200 active:scale-95 lg:hover:scale-105" >
                            <Image alt={`${project.title} project image`} src={project.image}  width={1000} height={100} className=" z-10 w-fit h-fit lg:min-h-80 max-h-80 min-w-150 max-w-150 items-center justify-center border-1 border-black " />

                            <div className="information absolute z-40  w-fit h-fit lg:min-h-80 max-h-80 min-w-120 max-w-130 flex-col flex flex-wrap justify-center p-5 text-center text-white backdrop-blur-sm lg:text-left">
                                <h2 className="text-3xl font-black">
                                    {project.title}
                                </h2>

                                <article className="flex flex-col gap-3">
                                    <p>{project.description}</p>
                                </article>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}

