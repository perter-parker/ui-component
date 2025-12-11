import type { Meta, StoryObj } from '@storybook/react'
import { PriceDisplay } from './price-display'

const meta = {
  title: 'UI/PriceDisplay',
  component: PriceDisplay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PriceDisplay>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    price: 100000,
  },
}

export const WithDiscount: Story = {
  args: {
    price: 100000,
    discount: 20,
  },
}

export const WithOriginalPrice: Story = {
  args: {
    price: 100000,
    discount: 30,
    showOriginalPrice: true,
  },
}

export const LargePrice: Story = {
  args: {
    price: 1500000,
    discount: 15,
    showOriginalPrice: true,
  },
}

