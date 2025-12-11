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
  args: {},
}

