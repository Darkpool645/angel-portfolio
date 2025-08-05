import { useTheme } from "@/context/ThemeContext.jsx";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

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

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 rounded-xl py-3 px-4 bg-white/20 dark:bg-[#050816]/20 backdrop-blur-sm justify-between items-center shadow-md"
    >
      <motion.div variants={childVariants} className="flex items-center">
        <Link to="/" className="dark:text-white text-xl font-bold">
          Angel Dev
        </Link>
      </motion.div>

      <motion.nav
        variants={childVariants}
        className="hidden md:flex md:space-x-2 relative"
      >
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(link.href);

          return (
            <motion.div
              key={link.name}
              className="relative px-3 py-2 rounded-lg"
              layout
            >
              {isActive && (
                <motion.div
                  layoutId="navbar-highlight"
                  className="absolute inset-0 rounded-lg bg-gray-300/30 dark:bg-white/20 shadow-md dark:shadow-white/30"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <Link
                to={link.href}
                className={`relative z-10 text-sm font-medium transition-transform duration-200 transform hover:scale-105 ${
                  isActive ? "text-black dark:text-white" : "dark:text-white"
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          );
        })}
      </motion.nav>

      <motion.div variants={childVariants} className="flex items-center">
        <button onClick={toggleTheme} className="cursor-pointer p-2">
          {theme === "dark" ? (
            <MoonIcon className="h-5 w-5 text-white" />
          ) : (
            <SunIcon className="h-5 w-5 text-gray-800" />
          )}
        </button>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
