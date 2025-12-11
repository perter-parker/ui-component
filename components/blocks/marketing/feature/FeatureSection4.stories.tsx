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
  args: {},
}

