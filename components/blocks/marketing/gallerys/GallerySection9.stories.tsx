import type { Meta, StoryObj } from '@storybook/react'
import { GallerySection9 } from './GallerySection9'

const meta = {
  title: 'Blocks/Marketing/Gallerys/GallerySection9',
  component: GallerySection9,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GallerySection9>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

