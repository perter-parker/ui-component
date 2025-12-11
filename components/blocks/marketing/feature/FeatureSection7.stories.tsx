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
  args: {},
}

