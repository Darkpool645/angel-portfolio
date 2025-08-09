import { motion } from "framer-motion";
import GitHubIcon from "@/assets/svgs/GitHubIcon.jsx";
import LinkedInIcon from "@/assets/svgs/LinkedInIcon.jsx";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card.jsx";
import { socials } from "@/constants/Socials.js";

const ContactPage = () => {

    const getIconComponent = (iconName) => {
        switch(iconName) {
            case "github": return <GitHubIcon style={"h-5 w-5"} />
            case "linkedin": return <LinkedInIcon style={"h-5 w-5"} />
            case "mail": return <EnvelopeIcon className={"h-5 w-5"} />
            case "phone": return <PhoneIcon className={"h-5 w-5"} />
            default: return null;
        }
    }
    return (
        <section className={"py-12 md:py-24"}>
            <div className={"container px-4 md:px-6 mx-auto"}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className={"space-y-4 text-center mx-auto mb-5"}>
                    <h2 className={"text-3xl sm:text-4xl md:text-5xl  font-bold tracking-tighter"}>
                        Get In touch
                    </h2>
                    <p className={"max-w-[700px] text-muted-foreground dark:text-muted-foreground-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto"}>
                        Have a project in mind or want to collaborate? I&apos;d love to hear from you!
                    </p>
                </motion.div>
                <div className={"grid gap-8 md:grid-cols-2 max-w-5xl mx-auto"}>
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1}}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Send me a Message</CardTitle>
                                <CardDescription>
                                    Fill out the form below and I&apos;ll get back to you as soon as posible.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {/* FORM */}
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{duration: 0.5, delay: 0.2 }}>
                        <Card className={"h-full"}>
                            <CardHeader>
                                <CardTitle>Connect with me</CardTitle>
                                <CardDescription>You can also reach out to me directly through these channels</CardDescription>
                            </CardHeader>
                            <CardContent className={"flex flex-col space-y-6"}>
                                {socials.map((social, index) => (
                                    <motion.a key={social.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.1 }} href={social.url} target={"_blank"} rel={"noopener noreferrer"} className={"flex items-center rounded-md border p-4 transition-colors hover:bg-muted dark:hover:bg-muted-dark"}>
                                        <div className={"mr-4 rounded-full bg-primary/10 dark:bg-primary-dark/10 p-2"}>
                                        {getIconComponent(social.icon)}
                                        </div>
                                        <div>
                                            <h3 className={"font-medium text-foreground dark:text-foreground-dark"}>{social.name}</h3>
                                            <p className={"text-sm text-muted-foreground dark:text-muted-foreground-dark"}>
                                                {social.url.replace(/(mailto:|tel:|https:\/\/)/g, "")}
                                            </p>
                                        </div>
                                    </motion.a>
                                ))}
                                <div className={"pt-6 flex flex-col text-center "}>
                                    <h3 className={"font-medium mb-2"}>Current Location</h3>
                                    <p className={"text-sm text-muted-foreground dark:text-muted-foreground-dark"}>
                                        Xochitepec, Morelos, Mexico
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;