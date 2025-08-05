import { Outlet } from "react-router-dom";
import StarsCanvas from "@/components/StarsCanvas.jsx";
import Navbar from "@/components/Navbar.jsx";
import blackhole from "@/assets/blackhole.webm";
import { useTheme } from "@/context/ThemeContext.jsx";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

const PublicLayout = () => {
  const { theme } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={"relative min-h-screen bg-white dark:bg-[#040315] transition-colors duration-300"}>
      {theme === "dark" && (
        <>
          <video
            className={"fixed rotate-180 top-[-340px] left-0 w-[700px] lg:w-full lg:h-[700px] object-cover overflow-hidden opacity-70"}
            src={blackhole}
            autoPlay
            loop
            playsInline
            muted
          />
          <StarsCanvas />
        </>
      )}
      <Navbar />
      <main className={"relative z-10 text-black dark:text-white min-h-screen pt-[80px]"}>
        <Outlet />
      </main>
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key={"scroll-to-top"}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={scrollToTop}
            className={"cursor-pointer fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#1f1f1f] dark:bg-white shadow-lg dark:shadow-white/10 hover:scale-110 transition-transform"}
          >
            <ArrowUpIcon className={"h-5 w-5 text-white dark:text-black"} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PublicLayout;
