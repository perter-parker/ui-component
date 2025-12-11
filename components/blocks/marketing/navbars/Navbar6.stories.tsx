import type { Meta, StoryObj } from '@storybook/react'
import { Navbar6 } from './Navbar6'
import { 
  Component, 
  Plug, 
  Blocks, 
  FileText, 
  Palette 
} from 'lucide-react'

const meta = {
  title: 'Blocks/Marketing/Navbars/Navbar6',
  component: Navbar6,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar6>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    logoHref: '/',
    links: [
      {
        label: 'Products',
        href: '/products',
        items: [
          {
            label: 'Components',
            href: '/products/components',
            icon: <Component className="size-4" />,
            description: 'Pixel-perfect shadcn/ui components for Figma',
          },
          {
            label: 'Plugin',
            href: '/products/plugin',
            icon: <Plug className="size-4" />,
            description: 'Go from Figma to shadcn/ui in seconds',
          },
          {
            label: 'Blocks',
            href: '/products/blocks',
            icon: <Blocks className="size-4" />,
            description: 'Top-quality blocks for Figma and React',
          },
          {
            label: 'Templates',
            href: '/products/templates',
            icon: <FileText className="size-4" />,
            description: 'Figma and React templates for shadcn/ui',
          },
          {
            label: 'Themes',
            href: '/products/themes',
            icon: <Palette className="size-4" />,
            description: 'Free shadcn/ui themes for your next project',
          },
        ],
      },
      { label: 'Resources', href: '/resources' },
      { label: 'Docs', href: '/docs' },
      { label: 'Help', href: '/help' },
      { label: 'Pricing', href: '/pricing' },
    ],
    primaryButton: {
      label: 'Buy now',
      href: '/buy',
    },
    secondaryButton: {
      label: 'Preview',
      href: '/preview',
    },
  },
}

