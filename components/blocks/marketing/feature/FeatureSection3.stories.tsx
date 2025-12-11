import type { Meta, StoryObj } from '@storybook/react'
import { FeatureSection3 } from './FeatureSection3'

const meta = {
  title: 'Blocks/Marketing/Feature/FeatureSection3',
  component: FeatureSection3,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FeatureSection3>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

