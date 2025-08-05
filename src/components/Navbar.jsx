import { useState } from "react";
import { useTheme } from "@/context/ThemeContext.jsx";
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <>
      <motion.header
        variants={containerVariants}
        initial={"hidden"}
        animate={"visible"}
        className={"flex fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 rounded-xl py-3 px-4 bg-white/20 dark:bg-[#050816]/20 backdrop-blur-sm justify-between items-center shadow-md"}
      >
        <motion.div variants={childVariants} className={"flex items-center"}>
          <Link to={"/"} className={"dark:text-white text-xl font-bold"}>
            Angel Dev
          </Link>
        </motion.div>

        <motion.nav
          variants={childVariants}
          className={"hidden md:flex md:space-x-2 relative"}
        >
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              className={"relative px-3 py-2 rounded-lg"}
              layout
            >
              {isActive(link.href) && (
                <motion.div
                  layoutId={"navbar-highlight"}
                  className={"absolute inset-0 rounded-lg bg-gray-300/30 dark:bg-white/20 shadow-md dark:shadow-white/30"}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <Link
                to={link.href}
                className={`relative z-10 text-sm font-medium transition-transform duration-200 transform hover:scale-105 ${
                  isActive(link.href) ? "text-black dark:text-white" : "dark:text-white"
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
        <motion.div variants={childVariants} className={"flex items-center gap-2"}>
          <button onClick={toggleTheme} className={"cursor-pointer p-2"}>
            {theme === "dark" ? (
              <MoonIcon className={"size-5 text-white"} />
            ) : (
              <SunIcon className={"size-5 text-gray-800"} />
            )}
          </button>

          <button onClick={() => setMenuOpen(true)} className={"md:hidden p-2"}>
            <Bars3Icon className={"size-6 text-black dark:text-white"} />
          </button>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className={"fixed top-0 right-0 z-[999] h-screen w-3/4 sm:w-1/2 bg-white dark:bg-[#0b0b0b] shadow-lg p-6 flex flex-col gap-6"}
          >
            <div className={"flex justify-between items-center"}>
              <h2 className={"text-xl font-bold dark:text-white"}>Menu</h2>
              <button onClick={() => setMenuOpen(false)}>
                <XMarkIcon className={"size-6 text-black dark:text-white"} />
              </button>
            </div>
            <nav className={"flex flex-col gap-4 mt-4"}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg font-medium ${
                    isActive(link.href)
                      ? "text-black dark:text-white"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
