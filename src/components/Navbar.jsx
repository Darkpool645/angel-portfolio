import { useTheme } from "@/context/ThemeContext.jsx";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return(
        <header className={"fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 transition-all duration-300 " +
            "rounded-xl py-3 px-4 bg-white/70 dark:bg-[#050816]/80 backdrop-blur-sm border-[0.5px] " +
            "border-white/10"}
            style={{ opacity: 1, transform: "none"}}>
            <span className={"text-xl font-bold dark:text-white"}>Ángel Dev</span>
            <button onClick={toggleTheme} className={"px-4 py-2 rounded bg-black text-white dark:bg-white " +
                "dark:text-black transition-all"}>
                {theme === "dark" ? "Light": "Dark"}
            </button>
        </header>
    );
};

export default Navbar;