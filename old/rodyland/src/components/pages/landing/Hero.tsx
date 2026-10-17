'use client'

//basic imports
import Image from "next/image";

//other imports
import { motion} from "framer-motion"
import StarsBG from "@/src/components/misc/Stars";


//component
export default function Hero() {
    return (
        <motion.section initial={{ opacity: 0, scale: 0.8 }}  animate={{ opacity: 1, scale: 1 }} id="hero" className="no-select flex h-screen w-full items-center flex-col overflow-hidden justify-center gap-4 text-center">
            <StarsBG/>
            <Image className="absolute dark:invert-0 invert-100 lg:mb-0 mb-20" alt="RodyLanding Title image background" width={1920} height={1080} src="/assets/backgrounds/rody.svg" />
            <Image className="absolute   dark:invert-0 invert-100 lg:bottom-49  w-full" alt="Plains background" width={1920} height={1080} src="/assets/backgrounds/PixelPlains.svg" />
        </motion.section>
    )
}