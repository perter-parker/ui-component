import type { Meta, StoryObj } from '@storybook/react'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from './Empty'
import { Package, Inbox } from 'lucide-react'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'UI/Empty',
  component: Empty,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Empty className="w-[400px]">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Package />
        </EmptyMedia>
        <EmptyTitle>No items found</EmptyTitle>
        <EmptyDescription>
          Get started by creating a new item.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Create Item</Button>
      </EmptyContent>
    </Empty>
  ),
}

export const Simple: Story = {
  render: () => (
    <Empty className="w-[400px]">
      <EmptyHeader>
        <EmptyMedia>
          <Inbox className="size-12 text-muted-foreground" />
        </EmptyMedia>
        <EmptyTitle>No data available</EmptyTitle>
        <EmptyDescription>
          There are no items to display at this time.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Empty className="w-[400px]">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Package />
        </EmptyMedia>
        <EmptyTitle>No products</EmptyTitle>
        <EmptyDescription>
          You haven't added any products yet. Start by adding your first product.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Add Product</Button>
        <Button variant="outline">Learn More</Button>
      </EmptyContent>
    </Empty>
  ),
}

