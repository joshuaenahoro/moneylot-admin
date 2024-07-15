'use client';

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from './chart';
import { Icon } from '@/components/icon';

const chartData = [
  // { month: 'January', users: 8203 },
  // { month: 'February', users: 6205 },
  // { month: 'March', users: 2400 },
  { month: 'April', users: 12434 },
  { month: 'May', users: 24029 },
  { month: 'June', users: 21321 },
];

const chartConfig = {
  users: {
    label: 'Users',
    color: '#ADB7F9',
  },
} satisfies ChartConfig;

export function UserGrowth() {
  return (
    <div className="flex w-2/5 flex-col justify-between rounded-2xl bg-white p-8 shadow">
      <header className="mb-2">
        <h2 className="sr-only">User growth</h2>

        <p className="flex flex-col items-center font-bold">
          <span className="-mr-8 flex gap-2">
            <span className="text-3xl text-[#2E2E30]">1253</span>
            <Icon name="arrow-up" className="h-6 w-6 text-blue-light" />
          </span>
          {` `}
          <span className="text-[10px] text-[#939393]">
            New users this month
          </span>
        </p>
      </header>
      <ChartContainer config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Area
            dataKey="users"
            type="natural"
            fill="var(--color-users)"
            fillOpacity={0.4}
            stroke="var(--color-users)"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
