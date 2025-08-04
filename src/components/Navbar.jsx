import { useTheme } from "@/context/ThemeContext.jsx";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
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

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 rounded-xl py-3 px-4 bg-white/20 dark:bg-[#050816]/20 backdrop-blur-sm border-[0.5px] border-white/10 justify-between items-center"
    >
      <motion.div variants={childVariants} className="flex items-center">
        <Link to="/" className="dark:text-white text-xl font-bold">
          Angel Dev
        </Link>
      </motion.div>

      <motion.nav
        variants={childVariants}
        className="hidden md:flex md:space-x-8"
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className="dark:text-white"
          >
            {link.name}
          </Link>
        ))}
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
