'use client';

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from './chart';
import { Bar, BarChart, XAxis } from 'recharts';

const chartData = [
  {
    month: 'April',
    transfers: 51200,
    airtime: 102400,
    bills: 40960,
    savings: 76800,
  },
  {
    month: 'May',
    transfers: 40960,
    airtime: 51200,
    bills: 61440,
    savings: 46080,
  },
  {
    month: 'June',
    transfers: 81920,
    airtime: 92160,
    bills: 20480,
    savings: 30720,
  },
];

const chartConfig = {
  transfers: {
    label: 'Transfers',
    color: '#5371FF',
  },
  airtime: {
    label: 'Airtime',
    color: '#FF8210',
  },
  bills: {
    label: 'Bill Payments',
    color: '#E44343',
  },
  savings: {
    label: 'Savings',
    color: '#00C0B3',
  },
} satisfies ChartConfig;

export function QuarterlyOverview() {
  return (
    <div className="w-3/5 rounded-2xl bg-white p-8 shadow">
      <h2 className="mb-2 font-bold text-[#343C6A]">Quarterly overview</h2>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
            axisLine={false}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <ChartLegend verticalAlign="top" content={<ChartLegendContent />} />
          <Bar dataKey="transfers" fill="var(--color-transfers)" radius={9.2} />
          <Bar dataKey="airtime" fill="var(--color-airtime)" radius={9.2} />
          <Bar dataKey="bills" fill="var(--color-bills)" radius={9.2} />
          <Bar dataKey="savings" fill="var(--color-savings)" radius={9.2} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
