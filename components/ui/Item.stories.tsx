import type { Meta, StoryObj } from '@storybook/react'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from './Item'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MoreHorizontal, Settings, User, Mail } from 'lucide-react'

const meta = {
  title: 'UI/Item',
  component: Item,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'muted'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm'],
    },
  },
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Item>
      <ItemMedia>
        <User className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Item Title</ItemTitle>
        <ItemDescription>This is a description of the item.</ItemDescription>
      </ItemContent>
    </Item>
  ),
}

export const WithActions: Story = {
  render: () => (
    <Item>
      <ItemMedia>
        <User className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Item with Actions</ItemTitle>
        <ItemDescription>This item has action buttons.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="size-4" />
        </Button>
      </ItemActions>
    </Item>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-[400px]">
      <Item variant="default">
        <ItemMedia>
          <User className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Default Variant</ItemTitle>
          <ItemDescription>This is the default variant.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia>
          <Settings className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Outline Variant</ItemTitle>
          <ItemDescription>This item has an outline border.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemMedia>
          <Mail className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Muted Variant</ItemTitle>
          <ItemDescription>This item has a muted background.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-[400px]">
      <Item size="default">
        <ItemMedia>
          <User className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Default Size</ItemTitle>
          <ItemDescription>This is the default size item.</ItemDescription>
        </ItemContent>
      </Item>
      <Item size="sm">
        <ItemMedia>
          <User className="size-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Small Size</ItemTitle>
          <ItemDescription>This is a small size item.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
}

export const WithIconMedia: Story = {
  render: () => (
    <Item>
      <ItemMedia variant="icon">
        <User className="size-4" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Icon Media</ItemTitle>
        <ItemDescription>This item uses icon variant for media.</ItemDescription>
      </ItemContent>
    </Item>
  ),
}

export const WithImageMedia: Story = {
  render: () => (
    <Item>
      <ItemMedia variant="image">
        <img
          src="https://github.com/shadcn.png"
          alt="Avatar"
          className="size-full object-cover"
        />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Image Media</ItemTitle>
        <ItemDescription>This item uses image variant for media.</ItemDescription>
      </ItemContent>
    </Item>
  ),
}

export const WithHeaderAndFooter: Story = {
  render: () => (
    <Item>
      <ItemHeader>
        <ItemMedia>
          <User className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Item with Header</ItemTitle>
          <ItemDescription>This item has a header section.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="size-4" />
          </Button>
        </ItemActions>
      </ItemHeader>
      <ItemFooter>
        <Badge variant="secondary">Tag</Badge>
        <Button variant="outline" size="sm">
          Action
        </Button>
      </ItemFooter>
    </Item>
  ),
}

export const InGroup: Story = {
  render: () => (
    <ItemGroup className="w-[400px]">
      <Item>
        <ItemMedia>
          <User className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>First Item</ItemTitle>
          <ItemDescription>This is the first item in the group.</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemMedia>
          <Settings className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Second Item</ItemTitle>
          <ItemDescription>This is the second item in the group.</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemMedia>
          <Mail className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Third Item</ItemTitle>
          <ItemDescription>This is the third item in the group.</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
}

export const Clickable: Story = {
  render: () => (
    <ItemGroup className="w-[400px]">
      <Item asChild>
        <a href="#">
          <ItemMedia>
            <User className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Clickable Item</ItemTitle>
            <ItemDescription>This item is clickable as a link.</ItemDescription>
          </ItemContent>
        </a>
      </Item>
      <ItemSeparator />
      <Item asChild>
        <a href="#">
          <ItemMedia>
            <Settings className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Another Clickable Item</ItemTitle>
            <ItemDescription>Click to navigate somewhere.</ItemDescription>
          </ItemContent>
        </a>
      </Item>
    </ItemGroup>
  ),
}

