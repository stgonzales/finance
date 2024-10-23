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
        variant: "primary",
        children: "Placeholder",
    },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
    args: {
        icon: "House",
    }
}