import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        success:
          "border-transparent badge-success-muted",
        warning:
          "border-transparent badge-warning-muted",
        danger:
          "border-transparent badge-danger-muted",
        info:
          "border-transparent badge-info-muted",
        accent:
          "border-transparent badge-accent-muted",
      },
      shape: {
        pill: "rounded-full",
        rounded: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      shape: "pill",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, shape, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(badgeVariants({ variant, shape }), className)} {...props} />
    )
  }
)
Badge.displayName = "Badge"

export { Badge, badgeVariants }
