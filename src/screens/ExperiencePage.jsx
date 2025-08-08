import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, MapPinIcon, BriefcaseIcon, AcademicCapIcon, UsersIcon } from "@heroicons/react/24/outline";
import Badge from "@/components/ui/Badge.jsx";
import Separator from "@/components/ui/Separator.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card.jsx";
import {experiences} from "@/constants/Experiences.js";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs.jsx";

const ExperiencePage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredExperiences =
    activeTab === "all"
      ? experiences
      : experiences.filter((exp) => exp.type === activeTab);

  const getExperienceIcon = (type) => {
    switch (type) {
      case "work":
        return <BriefcaseIcon className={"size-5"} />;
      case "leadership":
        return <UsersIcon className={"size-5"} />;
      case "education":
        return <AcademicCapIcon className={"size-5"} />;
      default:
        return <BriefcaseIcon className={"size-5"} />;
    }
  };

  const categories = [
    { value: "all", label: "All" },
    { value: "work", label: "Work" },
    { value: "leadership", label: "Leadership" },
    { value: "education", label: "Education" },
  ];

  return (
    <section className={"py-12 md:py-24"}>
      <div className={"container px-4 md:px-6 mx-auto"}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={
            "flex flex-col items-center justify-center space-y-4 text-center"
          }
        >
          <h1 className={"text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter"}>
            Experience
          </h1>
          <p
            className={
              "mx-auto max-w-[700px] text-muted-foreground dark:text-muted-foreground-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            }
          >
            My professional journey in development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <Tabs
            defaultValue={"all"}
            value={activeTab}
            onValueChange={setActiveTab}
            className={"w-full max-w-3xl mx-auto"}
          >
            <div className="flex justify-center mb-8">
              <TabsList className={"flex flex-wrap gap-2 h-auto relative"}>
                {categories.map((cat) => (
                  <TabsTrigger
                    key={cat.value}
                    value={cat.value}
                    className={
                      "relative px-4 py-2 rounded-lg transition-colors duration-200 data-[state=active]:text-primary-foreground-dark dark:data-[state=active]:text-primary-foreground"
                    }
                  >
                    {activeTab === cat.value && (
                      <motion.div
                        layoutId="tab-highlight"
                        className="absolute inset-0 rounded-lg bg-primary/20 dark:bg-primary-dark/30 z-0"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
        </motion.div>
        <div className={"mx-auto max-w-3xl mt-12"}>
            <div className={"relative mx-auto"}>
                <div className={"absolute left-1/2 h-full w-[2px] -translate-x-1/2 bg-border dark:bg-border-dark"} />
                {filteredExperiences.map((experience, index) => (
                    <motion.div key={experience.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className={"relative mb-12 flex flex-col md:flex-row"}>
                        <div className={"absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary dark:bg-primary-dark size-3 rounded-full"} />
                        <div className={`hidden md:block absolute -translate-y-6 ${index % 2 === 0 ? "right-[calc(50%+12px)]" : "left-[calc(50%+12px)]"} text-primary dark:text-primary-dark`}>
                            {getExperienceIcon(experience.type)}
                        </div>
                        <div className={`md:hidden absolute -translate-y-6 ${ index % 2 === 0 ? "left-[calc(50%+12px)]" : "right-[calc(50%+12px)]"} text-primary dark:text-primary-dark`}>
                            {getExperienceIcon(experience.type)}
                        </div>
                        <div className={`mx-5 md:w-1/2 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                            <Card className={"overflow-hidden border border-border dark:border-border-dark hover:border-primary/50 dark:hover:border-primary/50 transition-colors"}>
                                <CardHeader className={"bg-muted/50 dark:bg-muted-dark/50 p-4"}>
                                    <div className={"flex justify-between items-start"}>
                                        <div className={"flex-1"}>
                                            <CardTitle>
                                                <h3 className={"text-xl font-bold"}>{experience.title}</h3>
                                                <p className={"text-sm text-muted-foreground dark:text-muted-foreground-dark mt-1"}>{experience.company}
                                                </p>
                                            </CardTitle>
                                        </div>
                                        <Badge variant={"outline"} className={"shrink-0"}>
                                            {experience.startDate} - {experience.endDate}
                                        </Badge>
                                    </div>
                                    <div className={"flex items-center text-sm text-muted-foreground dark:text-muted-foreground-dark mt-2"}>
                                        <MapPinIcon className={"mr-1 size-4"} />
                                        {experience.location}
                                    </div>
                                </CardHeader>
                                <CardContent className={"p-4"}>
                                    <p className={"mb-4 text-sm"}>{experience.description}</p>
                                    <Separator className={"my-4"} />
                                    <h4 className={"font-medium mb-2 text-sm"}>Key Achievements:</h4>
                                    <ul className={"space-y-2"}>
                                        {experience.achievements.map((achievement, i) => (
                                            <li key={i} className={"flex items-start"}>
                                                <ArrowRightIcon className={"mr-2 size-4 text-primary dark:text-primary-dark mt-0.5 shrink-0"} />
                                                <span className={"text-sm"}>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
