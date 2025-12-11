import type { Meta, StoryObj } from '@storybook/react'
import { ShadeProLandingPageWithBlocks } from './ShadeProLandingPageWithBlocks'

const meta = {
  title: 'Blocks/Marketing/Examples/ShadeProLandingPageWithBlocks',
  component: ShadeProLandingPageWithBlocks,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ShadeProLandingPageWithBlocks>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

