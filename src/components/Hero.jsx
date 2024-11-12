import { motion } from "framer-motion"
import { HERO_CONTENT } from "../constants"
import por from "../assets/por.webp"

const textVariants = {
    hidden: { opacity: 0, y:50 },
    visible: {
        opacity: 1, y:0, transition: { duration: 0.8, ease: "easeOut"}
    }
}
const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            stagerChildren: 0.3
        }
    }
}
const imageVariants = {
    hidden: { clipPath: "inset(0 50% 0 50%" },
    visible: {
        clipPath: "inset(0 0% 0 0%",
        transition: { duration: 1.2, ease: "easeInOut" },
    }
}
const Hero = () => {
    return (
        <section>
            <div className="relative z-10 min-h-screen flex flex-wrap flex-col
            md:flex-row items-center justify-center text-black">
                <motion.div 
                className="w-full md:w-1/2 p-8"
                initial="hidden"
                animate="visible">
                    <motion.h1 className="text-2xl md:text-3xl lg:text-5xl my-14">
                        {HERO_CONTENT.greeting}
                    </motion.h1>
                    <p className="text-xl md:text-2xl lg:text-4xl mb-4"
                    variants={textVariants}>
                        {HERO_CONTENT.introduction}
                    </p>
                    <motion.p className="text-xl md:text-2xl lg:text-4xl"
                    variants={textVariants}>
                        {HERO_CONTENT.description}
                    </motion.p>
                    <motion.a 
                    className="bg-red-300 hover:bg-slate-300 text-stone-900 p-3 lg:p-4
                    mt-8 inline-block rounded-2xl"
                    href={HERO_CONTENT.resumeLink}
                    download
                    rel="noopener noreferree"
                    target="_blank"
                    variants={textVariants}>
                        {HERO_CONTENT.resumeLinkText}
                    </motion.a>
                </motion.div>
                <motion.div
                className="w-full md:w-1/2 p-8"
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                >
                    <img src={por} alt="mohammed aslawi" width={650} height={650}
                    className="rounded-3xl"/>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero