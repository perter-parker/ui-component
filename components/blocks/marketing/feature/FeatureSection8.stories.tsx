import type { Meta, StoryObj } from '@storybook/react'
import { FeatureSection8 } from './FeatureSection8'

const meta = {
  title: 'Blocks/Marketing/Feature/FeatureSection8',
  component: FeatureSection8,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FeatureSection8>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

