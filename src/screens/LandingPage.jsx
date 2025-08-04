import { motion, useScroll } from "framer-motion";
import Hero from "@/components/Hero.jsx";
import { useTheme } from "@/context/ThemeContext.jsx";

const LandingPage = () => {
    const { scrollYProgress } = useScroll();
    const { theme } = useTheme();
    return (
        <div className={"min-h-screen flex flex-col gap-20 justify-center items-center"}>
            <motion.div id={"scroll-indicator"} style={{scaleX: scrollYProgress, position: "fixed", top: 0, left: 0, right: 0, height: 7, originX: 0, backgroundColor: theme === "dark" ? "#fff": "#64748b"}}/>
            <Hero />
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
            <h1>Landing Page</h1>
        </div>
    )
};

export default LandingPage;