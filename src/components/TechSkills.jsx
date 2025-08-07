import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs.jsx";
import { skills } from "@/constants/Skills.js";
import Badge from "@/components/ui/Badge.jsx";
import TechIcon from "@/components/TechIcon.jsx";

const TechSkills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Languages");
  const categories = Object.keys(skills);

  return (
    <section className={"py-12 md:py-24"}>
      <div className={"container px-4 md:px-6 mx-auto max-w-6xl text-center"}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={"flex flex-col items-center justify-center space-y-4 text-center"}
        >
          <h2 className={"text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"}>
            Technical Skills
          </h2>
          <p className={"mx-auto max-w-[700px] text-muted-foreground dark:text-muted-foreground-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}>
            My expertise across various technologies and tools
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={"mt-8 md:mt-12"}
        >
          <Tabs
            defaultValue={"Languages"}
            value={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value)}
            className={"w-full"}
          >
            <div className={"flex justify-center mb-8"}>
              <TabsList className={"flex flex-wrap gap-2 h-auto relative"}>
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className={"relative px-4 py-2 rounded-lg transition-colors duration-200 data-[state=active]:text-primary-foreground-dark dark:data-[state=active]:text-primary-foreground"}
                  >
                    {/* Highlight animado */}
                    {selectedCategory === category && (
                      <motion.div
                        layoutId="tab-highlight"
                        className="absolute inset-0 rounded-lg bg-primary/20 dark:bg-primary-dark/30 z-0"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{category}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            {categories.map((category) => (
                <TabsContent key={category} value={category} className={"w-full"}>
                    <div className={"bg-muted/50 dark:bg-muted-dark/50 rounded-lg py-6 px-4"}>
                        <div className={"flex flex-wrap gap-3 justify-center"}>
                            {skills[category].map((skill, index) => (
                                <motion.div key={skill.name} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: index * 0.05 }}>
                                    <Badge variant={"outline"} className={"text-sm py-2 px-4 bg-background dark:bg-background-dark hover:bg-accent dark:hover:bg-accent-dark transition-colors flex items-center gap-2"}>
                                        <TechIcon logoKey={skill.logoKey} name={skill.name} className={"size-5"} />
                                        {skill.name}
                                    </Badge>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSkills;
