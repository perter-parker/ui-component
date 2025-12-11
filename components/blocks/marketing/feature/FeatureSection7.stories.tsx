import type { Meta, StoryObj } from '@storybook/react'
import { FeatureSection7 } from './FeatureSection7'

const meta = {
  title: 'Blocks/Marketing/Feature/FeatureSection7',
  component: FeatureSection7,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FeatureSection7>

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
    image: 'https://github.com/shadcn.png',
    imageAlt: 'Feature section image',
  },
}

