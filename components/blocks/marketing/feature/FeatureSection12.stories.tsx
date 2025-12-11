import type { Meta, StoryObj } from '@storybook/react'
import { FeatureSection12 } from './FeatureSection12'

const meta = {
  title: 'Blocks/Marketing/Feature/FeatureSection12',
  component: FeatureSection12,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FeatureSection12>

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
    testimonial: {
      text: "This is a customer testimonial that supports the feature text above. Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.",
      author: {
        name: 'Lando Norris',
        role: 'Product Designer',
        avatar: 'https://github.com/shadcn.png',
      },
    },
    image: 'https://github.com/shadcn.png',
    imageAlt: 'Feature section image',
  },
}

