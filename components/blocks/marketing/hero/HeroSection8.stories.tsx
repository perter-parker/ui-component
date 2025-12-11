import type { Meta, StoryObj } from '@storybook/react'
import { HeroSection8 } from './HeroSection8'

const meta = {
  title: 'Blocks/Marketing/Hero/HeroSection8',
  component: HeroSection8,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeroSection8>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

