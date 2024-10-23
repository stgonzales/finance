import { cn } from "@/utils";
import { ComponentProps } from "react";
import { tv } from "tailwind-variants"
import { Icon, type IconType } from "../icon";

export type ButtonType = {
    variant?: "primary" | "secondary" | "pagination" | "destroy"
    icon?: IconType["icon"]
    iconSide: "left" | "right"
} & ComponentProps<"button">
 
const button = tv({
    base: "text-4 font-bold p-4 rounded-lg flex items-center gap-4",
    variants: {
        variant: {
            primary: "bg-grey-900 text-white hover:bg-grey-900/50",
            secondary: "bg-beige-100 text-grey-900 hover:bg-white/50 hover:outline hover:outline-1 hover:outline-beige-500",
            destroy: "bg-red text-white hover:bg-red/50",
            pagination: "py-[9.5px] text-grey-900 border [&_svg]:fill-beige-500 border-beige-500 hover:bg-beige-500 hover:text-white [&_svg]:hover:fill-white"
        },
    },
    defaultVariants: {
        variant: "primary",
    }
})

export function Button({className, children, variant, icon, iconSide="left", ...rest}: ButtonType) {
    return (
        <button className={cn(button({ variant: variant }), className)} {...rest}>
            {icon && iconSide === "left" && <Icon icon={icon} size={16}/>}
            {children}
            {icon && iconSide === "right" && <Icon icon={icon} size={16}/>}
        </button>
    )
}