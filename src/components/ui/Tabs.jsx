import * as TabsPrimitive from "@radix-ui/react-tabs";

export const Tabs = ({ className, ...props }) => {
    return(
        <TabsPrimitive.Root data-slot="tabs" className={`flex flex-col gap-2 ${className}`} {...props} />
    );
};

export const TabsList = ({ className, ...props }) => {
    return (
      <TabsPrimitive.List
        data-slot="tabs-list"
        className={`bg-muted dark:bg-muted-dark 
    text-muted-foreground dark:text-muted-foreground-dark 
    flex flex-wrap md:flex-row flex-col 
    items-stretch md:items-center 
    justify-start md:justify-center 
    gap-2 w-fit 
    rounded-lg  ${className}`}
        {...props}
      />
    );
  };
  

  export const TabsTrigger = ({ className, ...props }) => {
    return (
      <TabsPrimitive.Trigger
        data-slot="tabs-trigger"
        className={`relative inline-flex items-center justify-center text-sm font-medium px-4 py-2 border border-transparent rounded-md whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:focus-visible:ring-ring-dark data-[state=active]:bg-background dark:data-[state=active]:bg-input-dark/30 ${className}`}
        {...props}
      />
    );
  };
  

export const TabsContent = ({ className, ...props }) => {
    return(
        <TabsPrimitive.Content data-slot="tabs-content" className={`flex-1 outline-none ${className}`} {...props} />
    );
};