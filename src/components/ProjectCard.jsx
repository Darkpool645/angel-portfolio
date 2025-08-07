import { Link } from "react-router-dom";
import { ArrowRightIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import GitHubIcon from "@/assets/svgs/GitHubIcon.jsx";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card.jsx";
import Badge from "@/components/ui/Badge.jsx";
import Button from "@/components/ui/Button.jsx";

const ProjectCard = ({ project }) => {
    return (
        <Card className={"h-full flex flex-col overflow-hidden border-2 transition-all hover:border-primary dark:hover:border-primary-dark"}>
            {project.image && (
                <div className={"aspect-video overflow-hidden relative w-full"}>
                    <img src={project.image} alt={project.title} className={"object-cover object-top"} sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"} />
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
                    {project.achievements.slice(0, 2).map((achievement, i) => (
                        <li key={i} className={"flex items-start"}>
                            <ArrowRightIcon className={"mr-2 size-4 text-primary dark:text-primary-dark mt-0.5 shrink-0"} />
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
                        <a href={project.github} target={"_blank"} rel={"noopener noreferrer"} aria-label={"GitHub"}>
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
    );
};

export default ProjectCard;