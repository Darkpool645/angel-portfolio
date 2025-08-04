import { useTheme } from "@/context/ThemeContext.jsx";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className={"flex fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 rounded-xl py-3 px-4 " +
            "bg-white/20 dark:bg-[#050816]/20 backdrop-blur-sm border-[0.5px] border-white/10 justify-between " +
            "items-center transition-all duration-300"}>
            <div className={"flex items-center justify-center"}>
                <Link to={"/"} className={"dark:text-white text-xl font-bold whitespace-nowrap"}>Angel Dev</Link>
            </div>
            <div className={"w-full md:flex md:items-center md:justify-center md:space-x-8 hidden"}>
                {navLinks.map((link) => (
                    <Link to={link.href} key={link.name} className={"dark:text-white"}>{link.name}</Link>
                ))}
            </div>
            <div className={"flex items-center justify-center"}>
                <button onClick={toggleTheme} className={"cursor-pointer p-2"}>
                    {theme === "dark" ? (
                        <MoonIcon className={"size-5 text-white"} />
                    ) : (
                        <SunIcon className={"size-5"} />
                    )}
                </button>
            </div>
        </header>
    );
};

export default Navbar;