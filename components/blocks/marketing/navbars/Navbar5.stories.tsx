import type { Meta, StoryObj } from '@storybook/react'
import { Navbar5 } from './Navbar5'

const meta = {
  title: 'Blocks/Marketing/Navbars/Navbar5',
  component: Navbar5,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar5>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    logoHref: '/',
    links: [
      { label: 'Products', href: '/products' },
      { label: 'Use cases', href: '/use-cases' },
      { label: 'Docs', href: '/docs' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'FAQ', href: '/faq' },
    ],
    primaryButton: {
      label: 'Get started',
      href: '/get-started',
    },
    secondaryButton: {
      label: 'Login',
      href: '/login',
    },
  },
}

