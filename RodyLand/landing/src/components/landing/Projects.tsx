'use client'

import Link from "next/link";
import Image from "next/image";

import Stripe from "@/src/components/landing/misc/Stripe";
import showInformation from "@/src/utils/card";

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
            <section id="projects" className="relative z-6 -mt-20 flex w-full flex-col items-center justify-center overflow-hidden bg-white lg:p-20">
                <div id="project-section" className="relative z-10 mb-10 flex w-full flex-wrap items-center justify-center gap-10 no-select">
                    {projects.map((project, index) => (
                        <Link  key={index}  href={project.view}   onMouseEnter={showInformation}  onMouseLeave={showInformation}     className="flex min-h-80 max-h-80 min-w-150 max-w-150 items-center justify-center border-1 border-black bg-white p-2 duration-200 active:scale-95 lg:hover:scale-105" >
                            <Image alt={`${project.title} project image`} src={project.image}  width={1000} height={100} className="relative z-10 h-full w-full items-center justify-center border-1 border-black object-cover" />

                            <div className="information absolute z-40 hidden h-90 w-140 flex-col flex-wrap justify-center p-5 text-center text-white backdrop-blur-sm lg:text-left">
                                <h2 className="text-3xl font-black">
                                    {project.title}
                                </h2>

                                <article>
                                    <p>{project.description}</p>

                                    <Link href={project.concept}>
                                        <strong>Concept</strong>
                                    </Link>
                                </article>
                            </div>
                        </Link>
                    ))}
                </div>

                <h2 className="relative bottom-0 z-2 mb-50 flex w-full items-center justify-center text-left text-6xl font-black text-black lg:text-8xl">
                    DIVE IN <br />
                    AN OCEAN OF PERSPECTIVES
                </h2>
            </section>

            <div className="flex w-full items-center justify-center overflow-hidden">
                <Stripe />
            </div>
        </>
    );
}