import type { Meta, StoryObj } from '@storybook/react'
import { HeroSection7 } from './HeroSection7'

const meta = {
  title: 'Blocks/Marketing/Hero/HeroSection7',
  component: HeroSection7,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeroSection7>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

