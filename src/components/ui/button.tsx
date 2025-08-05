import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-inter",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-light hover:shadow-construction transition-luxury",
        luxury: "bg-gradient-gold text-primary-foreground hover:shadow-glow hover:scale-105 transition-luxury font-semibold",
        construction: "bg-gradient-construction text-construction-foreground hover:shadow-construction hover:scale-105 transition-luxury font-semibold",
        hero: "bg-primary/10 backdrop-blur-sm text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground hover:shadow-luxury transition-luxury font-semibold",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-luxury",
        outline: "border border-border bg-card/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground transition-luxury",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-light transition-luxury",
        ghost: "hover:bg-accent hover:text-accent-foreground transition-luxury",
        link: "text-primary underline-offset-4 hover:underline transition-luxury",
      },
      size: {
        default: "h-12 px-6 py-3 text-sm",
        sm: "h-10 rounded-md px-4 text-sm",
        lg: "h-14 rounded-xl px-8 text-base",
        xl: "h-16 rounded-xl px-10 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
