import type { Meta, StoryObj } from '@storybook/react'
import { CTASection1 } from './CTASection1'

const meta = {
  title: 'Blocks/Marketing/CTA/CTASection1',
  component: CTASection1,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CTASection1>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

