import { motion } from "framer-motion";
import { projects } from "@/constants/Projects.js";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card.jsx";
import Badge from "@/components/ui/Badge.jsx";
import Button from "@/components/ui/Button.jsx";
import { ArrowRightIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import GitHubIcon from "@/assets/svgs/GitHubIcon.jsx";
import { Link } from "react-router-dom";

const FeaturedProjects = () => {
    const featuredProjects = projects.filter(project => project.featured);
    return (
        <section className={"py-12 md:py-24 bg-muted/50 dark:bg-muted-dark/50"}>
            <div className={"container px-4 md:px-6 mx-auto"}>
                <div className={"flex flex-col items-center justify-center space-y-4 text-center"}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        <h2 className={"text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white"}>
                            Featured Projects
                        </h2>
                        <p className={"mx-auto max-w-[700px] text-muted-foreground dark:text-muted-foreground-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}>
                            Check out some of my recent work
                        </p>
                    </motion.div>
                    <div className={"grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full"}>
                        {featuredProjects.map((project, index) => (
                            <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y:0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 * index }}>
                                <Card className={"h-full flex flex-col overflow-hidden border-2 transition-all hover:border-primary dark:hover:border-primary-dark"}>
                                    {project.image && (
                                        <div className={"aspect-video overflow-hidden"}>
                                            <img src={project.image} alt={project.title} className={"h-full w-full object-cover transition-transform hover:scale-105"} width={600} height={400} />
                                        </div>
                                    )}
                                    <CardHeader>
                                        <CardTitle>{project.title}</CardTitle>
                                        <CardDescription>{project.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className={"flex-1"}>
                                        <div className={"flex flex-wrap gap-2 mb-4"}>
                                            {project.technologies.slice(0, 4).map((tech) => (
                                                <Badge key={tech} variant={"secondary"}>
                                                    {tech}
                                                </Badge>
                                            ))}
                                            {project.technologies.length > 4 && (
                                                <Badge variant={"outline"}>+{project.technologies.length - 4}</Badge>
                                            )}
                                        </div>
                                        <ul className={"space-y-2 text-sm text-muted-foreground dark:text-muted-foreground-dark"}>
                                            {project.achievements.slice(0, 2).map(( achievement, i) => (
                                                <li key={i} className={"flex items-start"}>
                                                    <ArrowRightIcon className={"mr-2 size-4 text-primary dark:text-primary-dark mt-0-5"} />
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter className={"flex gap-2"}>
                                        <Button asChild variant={"default"} size={"sm"}>
                                            <Link to={`/projects/${project.id}`}>
                                                View Details
                                                <ArrowRightIcon className={"ml-2 size-4"} />
                                            </Link>
                                        </Button>
                                        <div className={"flex-1"} />
                                        {project.github && (
                                            <Button asChild variant={"ghost"} size={"icon"}>
                                                <a href={project.github} target={"_blank"} rel={"noopener noreferrer"} aria-label="GitHub">
                                                    <GitHubIcon className={"size-4"} />
                                                </a>
                                            </Button>
                                        )}
                                        {project.liveUrl && (
                                            <Button asChild variant={"ghost"} size={"icon"}>
                                                <a href={project.liveUrl} target={"_blank"} rel={"noopener noreferrer"} aria-label={"Live Demo"}>
                                                    <ArrowTopRightOnSquareIcon className={"size-4"} />
                                                </a>
                                            </Button>
                                        )}
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                    <Button asChild variant={"outline"} className={"mt-8"}>
                        <Link to={"/projects"}>
                            View All Projects
                            <ArrowRightIcon className={"ml-2 size-4"} />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;