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
  args: {
    headline: "Headline that solves user's main problem",
    description:
      "Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.",
    primaryAction: {
      label: 'Get started',
      onClick: () => console.log('Get started clicked'),
    },
    rating: 5,
    avatars: [
      { fallback: "U1" },
      { fallback: "U2" },
      { fallback: "U3" },
      { fallback: "U4" },
      { fallback: "U5" },
    ],
    socialProof: "Loved by 3200+ developers",
  },
}

