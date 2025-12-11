import type { Meta, StoryObj } from '@storybook/react'
import { HeroSection9 } from './HeroSection9'

const meta = {
  title: 'Blocks/Marketing/Hero/HeroSection9',
  component: HeroSection9,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeroSection9>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

