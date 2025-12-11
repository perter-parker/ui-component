import type { Meta, StoryObj } from '@storybook/react'
import { HeroSection12 } from './HeroSection12'

const meta = {
  title: 'Blocks/Marketing/Hero/HeroSection12',
  component: HeroSection12,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeroSection12>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

