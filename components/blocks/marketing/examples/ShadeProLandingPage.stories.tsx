import type { Meta, StoryObj } from '@storybook/react'
import { ShadeProLandingPage } from './ShadeProLandingPage'

const meta = {
  title: 'Blocks/Marketing/Examples/ShadeProLandingPage',
  component: ShadeProLandingPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ShadeProLandingPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

