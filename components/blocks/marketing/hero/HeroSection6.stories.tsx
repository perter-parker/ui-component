import type { Meta, StoryObj } from '@storybook/react'
import { HeroSection6 } from './HeroSection6'

const meta = {
  title: 'Blocks/Marketing/Hero/HeroSection6',
  component: HeroSection6,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeroSection6>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

