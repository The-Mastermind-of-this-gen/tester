import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider w-fit whitespace-nowrap shrink-0",
  {
    variants: {
      variant: {
        default:
          "border-white/10 bg-white/[0.05] text-brand-ink",
        magenta: "border-brand-magenta/30 bg-brand-magenta/15 text-brand-magenta",
        cyan: "border-brand-cyan/30 bg-brand-cyan/15 text-brand-cyan",
        violet: "border-brand-violet/30 bg-brand-violet/15 text-brand-violet",
        outline: "border-white/15 text-brand-muted bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
