import type { Meta, StoryObj } from "@storybook/react"
import { Icon } from "."

const meta: Meta<typeof Icon> = {
    component: Icon,
}

export default meta
type Story = StoryObj<typeof Icon>

export const CaretLeft: Story = {
    args: {
        icon: "CaretLeft",
        size: 16
    }
}