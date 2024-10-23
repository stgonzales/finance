import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "."
import { iconMap } from "../icon"

const meta: Meta<typeof Button> = {
    component: Button,
    argTypes: {
        icon: { 
            options: Object.keys(iconMap), 
            control: { type: "select" }
        },
    },
    args: {
        variant: "pagination",
    }
}

export default meta
type Story = StoryObj<typeof Button>

export const Pagination: Story = {
    args: {
        children: 1
    }
}

export const PaginationNext: Story = {
    args: {
        icon: "CaretRight",
        iconSide: "right",
        children: "Next"
    }
}

export const PaginationPrevious: Story = {
    args: {
        icon: "CaretLeft",
        iconSide: "left",
        children: "Previous"
    }
}