import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import FeaturedProjects from "@/components/FeaturedProjects.jsx";
import Hero from "@/components/Hero.jsx";
import TechSkills from "@/components/TechSkills.jsx";
import { useTheme } from "@/context/ThemeContext.jsx";

const LandingPage = () => {
    const { scrollYProgress } = useScroll();
    const { theme } = useTheme();
    const projectsRef = useRef(null);
    return (
        <div className={"min-h-screen flex flex-col justify-center items-center"}>
            <motion.div id={"scroll-indicator"} style={{scaleX: scrollYProgress, position: "fixed", top: 0, left: 0, right: 0, height: 5, originX: 0, backgroundColor: theme === "dark" ? "#fff": "#64748b"}}/>
            <Hero onViewWorkClick={() => projectsRef.current?.scrollIntoView({ behavior: "smooth"})}/>
            <div ref={projectsRef} className={"w-full"}>
                <FeaturedProjects />
            </div>
            <TechSkills />
        </div>
    )
};

export default LandingPage;