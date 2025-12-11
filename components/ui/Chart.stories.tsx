import type { Meta, StoryObj } from '@storybook/react'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from './chart'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

const meta = {
  title: 'UI/Chart',
  component: ChartContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChartContainer>

export default meta
type Story = StoryObj<typeof meta>

const chartData = [
  { month: 'January', desktop: 186 },
  { month: 'February', desktop: 305 },
  { month: 'March', desktop: 237 },
  { month: 'April', desktop: 273 },
  { month: 'May', desktop: 209 },
  { month: 'June', desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
}

export const BarChartExample: Story = {
  render: () => (
    <ChartContainer config={chartConfig} className="h-[300px] w-[500px]">
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
}

export const SimpleBarChart: Story = {
  render: () => {
    const data = [
      { name: 'A', value: 400 },
      { name: 'B', value: 300 },
      { name: 'C', value: 200 },
      { name: 'D', value: 500 },
    ]
    const config = {
      value: {
        label: 'Value',
        color: 'hsl(var(--chart-1))',
      },
    }
    return (
      <ChartContainer config={config} className="h-[300px] w-[400px]">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="value" fill="var(--color-value)" radius={4} />
        </BarChart>
      </ChartContainer>
    )
  },
}

