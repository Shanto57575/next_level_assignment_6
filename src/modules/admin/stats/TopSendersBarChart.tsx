import { Bar, BarChart, XAxis } from "recharts";
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
  senderData: { name: string; count: number }[];
}

const chartColors = ["#f69222", "#22c55e", "#3b82f6", "#f43f5e", "#8b5cf6"];

export default function TopSendersBarChart({ senderData }: Props) {
  const chartConfig = senderData.reduce((acc, item, i) => {
    acc[item.name] = {
      label: item.name,
      color: chartColors[i % chartColors.length],
    };
    return acc;
  }, {} as ChartConfig);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Senders</CardTitle>
        <CardDescription>Users who sent the most parcels</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full h-64">
          <BarChart data={senderData}>
            <XAxis dataKey="name" />
            <Bar dataKey="count" fill="var(--color-primary)" radius={4} />
            <ChartTooltip content={<ChartTooltipContent />} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
