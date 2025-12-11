import type { Meta, StoryObj } from '@storybook/react'
import { HeroSection4 } from './HeroSection4'

const meta = {
  title: 'Blocks/Marketing/Hero/HeroSection4',
  component: HeroSection4,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeroSection4>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

