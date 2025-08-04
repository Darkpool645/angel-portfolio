import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownTrayIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import pin from "@/assets/pin.avif";
import github from "@/assets/svgs/github.svg";
import linkedin from "@/assets/svgs/linkedin.svg";
import mail from "@/assets/svgs/mail.svg";
import phone from "@/assets/svgs/phone.svg";

const roles = ["UI/UX Designer", "Software Developer", "Full Stack Engineer", "Coffee Lover"];

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay,
            ease: "easeOut"
        },
    }),
};

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length);
        }, 4000);
        return () => clearInterval(interval);
    },[]);

    return (
        <section className={"h-screen flex items center justify-center w-full py-12"}>
            <div className={"max-w-6xl w-full flex flex-col md:flex-row items-center gap-12"}>
                <div className={"flex-1 text-center md:text-left"}>
                    <motion.h1 className={"text-5xl md:text-6xl font-bold dark:text-white"} initial={"hidden"} animate={"visible"} custom={0} variants={fadeInUp}>
                        Hi, I'm Angel Camargo
                    </motion.h1>
                    
                    <motion.p className={"mt-4 text-2xl font-semibold dar:text-white h-[40px] overflow-hidden relative"} initial={"hidden"} animate={"visible"} custom={0.2} variants={fadeInUp}>
                        <AnimatePresence mode="wait">
                            <motion.span key={roles[index]} initial={{ y: 30, opacity: 0, position: "absolute" }} animate={{ y: 0, opacity: 1, position: "absolute" }} exit={{ y: -30, opacity: 0, position: "absolute" }} transition={{ duration: 0.25 }}>
                                {roles[index]}
                            </motion.span>
                        </AnimatePresence>
                    </motion.p>

                    <motion.p className={"mt-6 text-lg dark:text-white max-w-xl"} initial={"hidden"} animate={"visible"} custom={0.4} variants={fadeInUp}>
                        A passionate developer with expertise in React, Tailwind CSS and dabatase technologies.
                    </motion.p>
                    <motion.div className={"mt-8 flex gap-4 justify-center md:justify-start"} initial={"hidden"} animate={"visible"} custom={0.6} variants={fadeInUp}>
                        <button className={"flex items-center justify-between gap-2 px-6 py-3 bg-black dark:bg-white dark:text-black text-white rounded-xl"}>
                            View My Work
                            <ArrowRightIcon className={"size-4"} />
                        </button>
                        <button className={"px-6 py-3 border border-gray-300 rounded-xl flex gap-2 items-center justify-center"}>
                            <ArrowDownTrayIcon className={"size-4 dark:text-gray-300"} />
                            Resume
                        </button>
                    </motion.div>
                    <motion.div className={"mt-8 flex gap-4 justify-center md:justify-start transition-colors duration-300"} initial={"hidden"} animate={"visible"} custom={0.8} variants={fadeInUp}>
                        <a href={"https://github.com/Darkpool645"} target={"_blank"} className={"dark:bg-[oklch(.279_.041_260.031)] bg-gray-100 rounded-full p-2 flex items-center justify-center"}>
                            <img src={github} className={"size-3 dark:text-white"} />
                         </a>
                         <a href={"https://www.linkedin.com/in/angel-gabriel-camargo-silva/"} target={"_blank"} className={"dark:bg-[oklch(.279_.041_260.031)] bg-gray-100 rounded-full p-2 flex items-center justify-center"}>
                            <img src={linkedin} className={"size-3 dark:text-white"} />
                         </a>
                         <a href={"mailto:angel_camargo2020@outlook.com"} target={"_blank"} className={"dark:bg-[oklch(.279_.041_260.031)] bg-gray-100 rounded-full p-2 flex items-center justify-center"}>
                            <img src={mail} className={"size-3 dark:text-white"} />
                         </a>
                         <a href={"tel:+527775539274"} target={"_blank"} className={"dark:bg-[oklch(.279_.041_260.031)] bg-gray-100 rounded-full p-2 flex items-center justify-center"}>
                            <img src={phone} className={"size-3 dark:invert-0 invert"} />
                         </a>
                    </motion.div>
                </div>
                <motion.div className={"flex justify-center"} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1}} transition={{ duration: 0.4, delay: 0.9, ease: "easeOut"}}>
                    <img src={pin} alt="Profile Icon" className=" w-96 h-96 object-cover rounded-full shadow-lg" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;