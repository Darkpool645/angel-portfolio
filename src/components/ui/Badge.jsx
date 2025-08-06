import { Slot } from "@radix-ui/react-slot";

const variantClasses = {
    default: "border-transparent bg-primary dark:bg-primary-dark text-primary-foreground dark:text-primary-foreground-dark [a&]:hover:bg-primary/90 dark:[a&]:hover:bg-primary-dark/90",
    secondary: "border-transparent bg-secondary dark:bg-secondary-dark text-secondary-foreground dark:text-secondary-foreground-dark [a&]:hover:bg-secondary/90 dark:[a&]:hover:bg-secondary-dark/90",
    destructive: "border-transparent bg-destructive dakr:bg-destructive-dark text-white [a&]:hover:bg-destructive/90 dark:[a&]:hover:bg-destructive-dark/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive-dark/40 dark:bg-destructive-dark/60",
    outline: "text-foreground dark:text-foreground-dark [a&]:hover:bg-accent dark:[a&]:hover:bg-accent-dark [a&]:hover:text-accent-foreground dark:[a&]:hover:text-accent-foreground-dark",
}

const Badge = ({ className, variant = "default", asChild = false, ...props }) => {
    const Comp = asChild ? Slot : "span";
    const variantClass = variantClasses[variant] || variantClasses.default;

    return (
        <Comp data-slot="badge" className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden ${variantClass} ${className}`} {...props} />
    );
};

export default Badge;