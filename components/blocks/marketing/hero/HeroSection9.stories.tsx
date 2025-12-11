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
  args: {
    headline: "Headline that solves user's main problem",
    description:
      "Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.",
    primaryAction: {
      label: 'Get started',
      onClick: () => console.log('Get started clicked'),
    },
    videoSrc: undefined,
    videoPoster: undefined,
  },
}

