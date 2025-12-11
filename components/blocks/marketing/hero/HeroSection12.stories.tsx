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
  args: {
    headline: "Headline that solves user's main problem",
    description:
      "Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.",
    features: [
      {
        title: "Benefit driven feature title",
      },
      {
        title: "Benefit driven feature title",
      },
      {
        title: "Benefit driven feature title",
      },
    ],
    primaryAction: {
      label: 'Get started',
      onClick: () => console.log('Get started clicked'),
    },
    secondaryAction: {
      label: 'Explore',
      onClick: () => console.log('Explore clicked'),
    },
    avatars: [
      { fallback: "U1" },
      { fallback: "U2" },
      { fallback: "U3" },
      { fallback: "U4" },
      { fallback: "U5" },
    ],
    socialProof: "Loved by 10,000+ designers",
    image: undefined,
    imageAlt: 'Hero section',
  },
}

export const WithAvatars: Story = {
  args: {
    headline: "Headline that solves user's main problem",
    description:
      "Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.",
    primaryAction: {
      label: 'Get started',
      onClick: () => console.log('Get started clicked'),
    },
    avatars: [
      { fallback: "U1" },
      { fallback: "U2" },
      { fallback: "U3" },
      { fallback: "U4" },
      { fallback: "U5" },
    ],
    socialProof: "Loved by 10,000+ designers",
    image: undefined,
    imageAlt: 'Hero section',
  },
}

