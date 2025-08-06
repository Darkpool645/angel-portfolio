import { Link } from "react-router-dom";
import { ArrowTopRightOnSquareIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import GitHubIcon from "@/assets/svgs/GitHubIcon.jsx";
import LinkedInIcon from "@/assets/svgs/LinkedInIcon.jsx";

const Footer = () => {
    return (
        <footer className={"w-full pt-8 pb-4 border-t-[1px] border-gray-300 bg-white dark:bg-[#040315] transition-colors duration-300 backdrop-blur-sm"}>
            <div className={"container px-4 md:px-6 mx-auto"}>
                <div className={"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"}>
                    <div className={"space-y-4"}>
                        <h3 className={"text-lg font-bold dark:text-white"}>Angel Camargo</h3>
                        <p className={"text-[#62748e] text-sm max-w-xs"}>Full Stack Software Engienere & Data Analytic, specialized in creating modern web applications, device applications and better solutions.</p>
                    </div>
                    <div className={"space-y-4"}>
                        <h3 className={"text-lg font-bold dark:text-white"}>Quick Links</h3>
                        <ul className={"space-y-2"}>
                            <li>
                                <Link to={"/about"} className={"text-sm text-[#62748e] hover:text-[#e2e8f0] transition-colors"}>
                                    About me
                                </Link>
                            </li>
                            <li>
                                <Link to={"/projects"} className={"text-sm text-[#62748e] hover:text-[#e2e8f0] transition-colors"}>
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <a href="/" target={"_blank"} className={"text-sm text-[#62748e] hover:text-[#e2e8f0] transition-colors flex items-center gap-1"}>
                                    Resume
                                    <ArrowTopRightOnSquareIcon className={"size-4"} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={"space-y-4"}>
                        <h3 className={"text-lg font-bold dark:text-white"}>Connect</h3>
                        <div className={"flex flex-wrap gap-2"}>
                            <a href={"https://github.com/Darkpool645"} target={"_blank"} className={"dark:bg-[oklch(.279_.041_260.031)] bg-gray-100 rounded-full p-2 flex items-center justify-center"}>
                                <GitHubIcon style={"size-4 dark:text-white"} />
                            </a>
                            <a href={"https://www.linkedin.com/in/angel-gabriel-camargo-silva/"} target={"_blank"} className={"dark:bg-[oklch(.279_.041_260.031)] bg-gray-100 rounded-full p-2 flex items-center justify-center"}>
                                <LinkedInIcon style={"size-4 dark:text-white"} />
                            </a>
                            <a href={"mailto:angel_camargo2020@outlook.com"} target={"_blank"} className={"dark:bg-[oklch(.279_.041_260.031)] bg-gray-100 rounded-full p-2 flex items-center justify-center"}>
                                <EnvelopeIcon className={"size-4 dark:text-white"} />
                            </a>
                            <a href={"tel:+527775539274"} target={"_blank"} className={"dark:bg-[oklch(.279_.041_260.031)] bg-gray-100 rounded-full p-2 flex items-center justify-center"}>
                                <PhoneIcon className={"size-4 dark:text-white"} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={"mt-8 border-t-[0.5px] border-gray-500 pt-4"}>
                    <div className={"flex flex-col md:flex-row justify-center items-center gap-4"}>
                        <span className={"sr-only"}>
                        Design inspired by <a href="https://github.com/achyut21" target="_blank" rel="noopener noreferrer">Achyut Katiyar</a>
                        </span>
                        <div className={"text-sm text-[#90a1b9] flex items-center gap-1.5"}>
                            <span>Build with</span>
                            <HeartIcon className={"size-4"} />
                            <span>using React.js & Tailiwnd CSS</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;