import type { Meta, StoryObj } from '@storybook/react'
import { ScrollArea } from './scroll-area'

const meta = {
  title: 'UI/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div className="space-y-4">
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="text-sm">
            Item {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const LongContent: Story = {
  render: () => (
    <ScrollArea className="h-[300px] w-[400px] rounded-md border p-4">
      <div className="space-y-2">
        <h3 className="font-semibold mb-4">Article Content</h3>
        {Array.from({ length: 30 }, (_, i) => (
          <p key={i} className="text-sm leading-relaxed">
            Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const CodeBlock: Story = {
  render: () => (
    <ScrollArea className="h-[250px] w-[500px] rounded-md border bg-muted p-4">
      <pre className="text-xs font-mono">
        {`function example() {
  const items = [1, 2, 3, 4, 5];
  
  items.forEach((item) => {
    console.log(\`Item: \${item}\`);
  });
  
  return items.map((item) => {
    return (
      <div key={item}>
        {item}
      </div>
    );
  });
}

export default example;`.repeat(5)}
      </pre>
    </ScrollArea>
  ),
}

export const List: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[300px] rounded-md border">
      <div className="p-4">
        <ul className="space-y-2">
          {Array.from({ length: 50 }, (_, i) => (
            <li key={i} className="text-sm py-1 border-b last:border-b-0">
              List item {i + 1}
            </li>
          ))}
        </ul>
      </div>
    </ScrollArea>
  ),
}

