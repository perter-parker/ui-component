import type { Meta, StoryObj } from '@storybook/react'
import { HeroSection11 } from './HeroSection11'

const meta = {
  title: 'Blocks/Marketing/Hero/HeroSection11',
  component: HeroSection11,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeroSection11>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
