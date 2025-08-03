import { Outlet } from "react-router-dom";
import StarsCanvas from "@/components/StarsCanvas.jsx";
import Navbar from "@/components/Navbar.jsx";
import blackhole from "@/assets/blackhole.webm";
import { useTheme } from "@/context/ThemeContext.jsx";

const PublicLayout = () => {
    const { theme } = useTheme();
    return (
        <div className={"relative min-h-screen bg-white dark:bg-[#040315] transition-colors duration-300"}>
            {theme === "dark" && (
                <>
                    <video className={"absolute rotate-180 top-[-340px] left-0 w-[700px] lg:w-full lg:h-[700px] " +
                        "object-cover overflow-hidden opacity-70"} src={blackhole} autoPlay loop playsInline muted/>
                    <StarsCanvas />
                </>
            )}
            <Navbar/>
            <main className={"relative z-10 text-black dark:text-white min-h-screen"}>
                <Outlet/>
            </main>
        </div>
    );
};

export default PublicLayout;