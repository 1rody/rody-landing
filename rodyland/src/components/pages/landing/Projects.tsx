'use client'

import Link from "next/link";
import Image from "next/image";


export default function Projects() {
    const projects = [
        {
            title: "RodyLanding",
            description: "Rody.Land is the new version of rody.city, my personal portfolio created to showcase ideas, perspectives and my evolution as developer and software engineering student at UCSAL.",
            image: "/assets/backgrounds/projects/karasuBanner.png",
            view: "/",
            concept: "/pageforconcept"
        },
        {
            title: "Project name",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita.",
            image: "/assets/backgrounds/projects/karasuBanner.png",
            view: "/",
            concept: "/pageforconcept"
        },
        {
            title: "Project name",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita.",
            image: "/assets/backgrounds/projects/karasuBanner.png",
            view: "/",
            concept: "/pageforconcept"
        }
    ];

    return (
        <>
            <section id="projects" className=" z-6 -mt-20 flex w-full flex-col items-center justify-center overflow-hidden bg-white lg:p-20">
                <div id="project-section" className="relative z-10 mb-10 flex w-full flex-wrap items-center justify-center p-5 gap-10 no-select">
                    {projects.map((project, index) => (
                        <Link  key={index}  href={project.view}      className="flex project lg:min-h-80 lg:max-h-80 lg:min-w-150 lg:max-w-150 items-center justify-center border-1 border-black bg-white p-2 duration-200 active:scale-95 lg:hover:scale-105" >
                            <Image alt={`${project.title} project image`} src={project.image}  width={1000} height={100} className="relative z-10 h-full w-full items-center justify-center border-1 border-black object-cover" />

                            <div className="information absolute z-40  lg:h-80 lg:w-140 flex-col flex flex-wrap justify-center p-5 text-center text-white backdrop-blur-sm lg:text-left">
                                <h2 className="text-3xl font-black">
                                    {project.title}
                                </h2>

                                <article className="flex flex-col gap-3">
                                    <p>{project.description}</p>

                                    <Link className="bg-white mt-5 w-fit flex duration-200 active:scale-95 hover:scale-95 text-black  px-2 py-1 text-2xl" href={project.concept}>
                                        <strong>Concept</strong>
                                    </Link>
                                </article>
                            </div>
                        </Link>
                    ))}
                </div>

                <h2 className="relative bottom-0 z-2 mb-50 flex w-full items-center justify-center text-left text-5xl p-5 font-black text-black lg:text-8xl">
                    DIVE IN <br />
                    AN OCEAN OF PERSPECTIVES
                </h2>
            </section>
        </>
    );
}

