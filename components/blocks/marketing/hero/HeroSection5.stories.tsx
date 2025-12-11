import type { Meta, StoryObj } from '@storybook/react'
import { HeroSection5 } from './HeroSection5'

const meta = {
  title: 'Blocks/Marketing/Hero/HeroSection5',
  component: HeroSection5,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeroSection5>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

