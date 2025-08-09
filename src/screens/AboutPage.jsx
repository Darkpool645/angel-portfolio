import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card.jsx";
import Badge from "@/components/ui/Badge.jsx";
import { education } from "@/constants/Education.js";
import { skills } from "@/constants/Skills.js";

const AboutPage = () => {
    return (
        <section className={"py-12 md:py-24"}>
            <div className={"container px-4 md:px-6 mx-auto"}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className={"flex flex-col items-center justify-center space-y-4 text-center mb-12"}>
                    <h1 className={"text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter"}>
                        About me
                    </h1>
                    <p className={"mx-auto max-w-[700px] text-muted-foreground dark:text-muted-foreground-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}>
                        Get to know more about my backgorund and skills
                    </p>
                </motion.div>
                <div className={"grid gap-8 md:grid-cols-2"}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                        <h2 className={"text-2xl font-bold mb-4"}>Who I Am</h2>
                        <div className={"space-y-4 text-muted-foreground dark:text-muted-foreground-dark"}>
                            <p>
                                I&apos;m Angel Gabriel, a Full Stack Developer with a passion for creating innovative web aplications and exploring blockchain technologies. I recently earned my degree as an Engineer in Software Management and Development in Systems from Universidad Tecnológica Emiliano Zapata (UTEZ)
                            </p>
                            <p>
                                With expertise in React.js, Angular.js and various Backend technologies, I enjoy building scalable and user-friendly applications that solve real-world problems. My backgorund in computer science has given me a strong foundation in algorithms, data structures, and system design, which I apply to create efficient and maintainable code.
                            </p>
                        </div>
                        <h2 className={"text-2xl font-bold mt-8 mb-4"}>Education</h2>
                        <div className={"space-y-4"}>
                            {education.map((edu) => (
                                <Card key={edu.id}>
                                    <CardHeader className={"p-4"}>
                                        <CardTitle>
                                            <div>
                                                <h3 className={"text-lg font-bold"}>{edu.degree}</h3>
                                                <p className={"text-sm text-muted-foreground dark:text-muted-foreground-dark"}>{edu.institution}</p>
                                            </div>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className={"p-4 pt-0"}>
                                        <div className={"flex justify-between items-center text-sm"}>
                                            <span className={"text-muted-foreground dark:text-muted-foreground-dark"}>
                                                {edu.startDate} - {edu.endDate}
                                            </span>
                                        </div>
                                        {edu.gpa && (
                                            <Badge variant={"outline"} className={"mt-2"}>
                                                CGPA: {edu.gpa}
                                            </Badge>
                                        )}
                                        {edu.description && (
                                            <p className={"mt-2 text-sm"}>{edu.description}</p>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y:0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                        <h2 className={"text-2xl font-bold mb-4"}>Skills</h2>
                        {Object.keys(skills).map((category) => (
                            <div key={category} className={"mb-6"}>
                                <h3 className={"text-lg font-semibold mb-3"}>{category}</h3>
                                <div className={"flex flex-wrap gap-2"}>
                                    {skills[category].map((skill) => (
                                        <Badge key={skill.name} variant={"secondary"}>
                                            {skill.name}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;