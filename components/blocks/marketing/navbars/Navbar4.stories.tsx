import type { Meta, StoryObj } from '@storybook/react'
import { Navbar4 } from './Navbar4'

const meta = {
  title: 'Blocks/Marketing/Navbars/Navbar4',
  component: Navbar4,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar4>

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
    button: {
      label: 'Get started',
      href: '/get-started',
    },
    maxWidth: '6xl' as const,
  },
}

