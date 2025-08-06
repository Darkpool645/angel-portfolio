export const Card = ({ className, ...props }) => {
    return (
        <div data-slot="card" className={`bg-card dark:bg-card-dark text-card-foreground dark:text-card-foreground-dark flex flex-col gap-6 rounded-xl border border-border dark:border-border-dark py-6 shadow-sm ${className}`} {...props} />
    );
};

export const CardHeader = ({ className, ...props }) => {
    return(
        <div data-slot="card-header" className={`@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 ${className}`} {...props} />
    );
};

export const CardTitle = ({ className, ...props }) => {
    return(
        <div data-slot="card-title" className={`leading-none font-semibold ${className}`} {...props}/>
    );
};

export const CardDescription = ({ className, ...props }) => {
    return (
        <div data-slot="card-description" className={`text-muted-foreground dark:text-muted-foreground-dark text-sm ${className}`} {...props}/>
    );
};

export const CardAction = ({ className, ...props }) => {
    return (
        <div data-slot="card-action" className={`col-start-2 row-span-2 row-start-1 self-start justify-self-end ${className}`} {...props} />
    );
};

export const CardContent = ({ className, ...props }) => {
    return (
        <div data-slot="card-content" className={`px-6 ${className}`} {...props} />
    );
};

export const CardFooter = ({ className, ...props }) => {
    return (
        <div data-slot="card-footer" className={`flex items-center px-6 [.border-t]:pt-6 ${className}`} {...props} />
    );
};