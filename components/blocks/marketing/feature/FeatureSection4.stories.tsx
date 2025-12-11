import type { Meta, StoryObj } from '@storybook/react'
import { FeatureSection4 } from './FeatureSection4'

const meta = {
  title: 'Blocks/Marketing/Feature/FeatureSection4',
  component: FeatureSection4,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FeatureSection4>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    headline: "Headline that shows solution's impact on user success",
    description:
      "Explain in one or two concise sentences how your solution transforms users' challenges into positive outcomes. Focus on the end benefits that matter most to your target audience. Keep it clear and compelling.",
    primaryAction: {
      label: 'Get access',
      onClick: () => console.log('Get access clicked'),
    },
    secondaryAction: {
      label: 'Learn more',
      onClick: () => console.log('Learn more clicked'),
    },
    features: [
      {
        title: 'Benefit driven feature title',
      },
      {
        title: 'Benefit driven feature title',
      },
      {
        title: 'Benefit driven feature title',
      },
    ],
    image: 'https://github.com/shadcn.png',
    imageAlt: 'Feature section image',
  },
}

