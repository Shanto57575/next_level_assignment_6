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
  receiverData: { name: string; count: number }[];
}

const chartColors = ["#f69222", "#22c55e", "#3b82f6", "#f43f5e", "#8b5cf6"];

export default function TopReceiversBarChart({ receiverData }: Props) {
  const chartConfig = receiverData.reduce((acc, item, i) => {
    acc[item.name] = {
      label: item.name,
      color: chartColors[i % chartColors.length],
    };
    return acc;
  }, {} as ChartConfig);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Receivers</CardTitle>
        <CardDescription>Users who received the most parcels</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full h-64">
          <BarChart data={receiverData}>
            <XAxis dataKey="name" />
            <Bar dataKey="count" fill="var(--color-primary)" radius={4} />
            <ChartTooltip content={<ChartTooltipContent />} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
