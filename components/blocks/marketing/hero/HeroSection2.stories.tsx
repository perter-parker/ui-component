import type { Meta, StoryObj } from '@storybook/react'
import { HeroSection2 } from './HeroSection2'

const meta = {
  title: 'Blocks/Marketing/Hero/HeroSection2',
  component: HeroSection2,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeroSection2>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

