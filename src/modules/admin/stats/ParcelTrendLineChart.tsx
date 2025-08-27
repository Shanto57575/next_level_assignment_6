import { LineChart, Line, XAxis, CartesianGrid } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  ChartContainer,
  type ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface Props {
  trendData: { date: string; parcels: number; fee: number }[];
}

export default function ParcelTrendLineChart({ trendData }: Props) {
  const chartConfig = {
    parcels: { label: "Parcels", color: "var(--chart-1)" },
    fee: { label: "Delivery Fee", color: "var(--chart-2)" },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Parcel Trends</CardTitle>
        <CardDescription>Number of parcels and fees over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full h-64">
          <LineChart data={trendData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="date" />
            <Line
              dataKey="parcels"
              stroke="var(--color-parcels)"
              strokeWidth={2}
            />
            <Line dataKey="fee" stroke="var(--color-fee)" strokeWidth={2} />
            <ChartTooltip content={<ChartTooltipContent />} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
