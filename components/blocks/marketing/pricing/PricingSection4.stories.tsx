import type { Meta, StoryObj } from '@storybook/react'
import { PricingSection4 } from './PricingSection4'

const meta = {
  title: 'Blocks/Marketing/Pricing/PricingSection4',
  component: PricingSection4,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PricingSection4>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
