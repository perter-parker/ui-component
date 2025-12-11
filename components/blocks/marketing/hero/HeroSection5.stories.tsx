import type { Meta, StoryObj } from '@storybook/react'
import { HeroSection5 } from './HeroSection5'

const meta = {
  title: 'Blocks/Marketing/Hero/HeroSection5',
  component: HeroSection5,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeroSection5>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    headline: "Headline that solves user's main problem",
    description:
      "Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.",
    inputPlaceholder: "Your email",
    primaryAction: {
      label: 'Sign up',
      onClick: () => console.log('Sign up clicked'),
    },
    videoSrc: undefined,
    videoPoster: undefined,
  },
}

