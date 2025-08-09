import { useRef } from "react";
import FeaturedProjects from "@/components/FeaturedProjects.jsx";
import Hero from "@/components/Hero.jsx";
import TechSkills from "@/components/TechSkills.jsx";

const LandingPage = () => {
    const projectsRef = useRef(null);
    return (
        <div className={"min-h-screen flex flex-col justify-center items-center"}>
            <Hero onViewWorkClick={() => projectsRef.current?.scrollIntoView({ behavior: "smooth"})}/>
            <div ref={projectsRef} className={"w-full"}>
                <FeaturedProjects />
            </div>
            <TechSkills />
        </div>
    )
};

export default LandingPage;