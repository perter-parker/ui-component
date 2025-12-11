import type { Meta, StoryObj } from '@storybook/react'
import { HeroSection10 } from './HeroSection10'

const meta = {
  title: 'Blocks/Marketing/Hero/HeroSection10',
  component: HeroSection10,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeroSection10>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

