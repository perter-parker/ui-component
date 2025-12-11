import type { Meta, StoryObj } from '@storybook/react'
import { RichSection3 } from './RichSection3'

const meta = {
  title: 'Blocks/Marketing/Richs/RichSection3',
  component: RichSection3,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RichSection3>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

