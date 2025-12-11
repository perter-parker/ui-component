import type { Meta, StoryObj } from '@storybook/react'
import { FeatureSection2 } from './FeatureSection2'

const meta = {
  title: 'Blocks/Marketing/Feature/FeatureSection2',
  component: FeatureSection2,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FeatureSection2>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

