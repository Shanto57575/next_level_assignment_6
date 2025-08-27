import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart";

interface Props {
  statusData: { status: string; count: number; fill: string }[];
}

export default function StatusPieChart({ statusData }: Props) {
  console.log("StatusPieChart", statusData);
  const chartConfig = statusData?.reduce((acc, item) => {
    acc[item.status] = { label: item.status, color: item.fill };
    return acc;
  }, {} as ChartConfig);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Parcel Status</CardTitle>
        <CardDescription>Current status distribution</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full h-64 max-w-xs">
          <PieChart>
            <Pie data={statusData} dataKey="count" nameKey="status" label />
            <ChartLegend
              className="flex flex-wrap"
              content={<ChartLegendContent nameKey="status" />}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
