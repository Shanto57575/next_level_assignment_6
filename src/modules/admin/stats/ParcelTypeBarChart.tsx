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
  typeData: { type: string; count: number }[];
}

export default function ParcelTypeBarChart({ typeData }: Props) {
  console.log("ParcelTypeBarChart", typeData);
  const chartConfig = typeData?.reduce((acc, item) => {
    acc[item.type] = { label: item.type, color: "var(--chart-1)" };
    return acc;
  }, {} as ChartConfig);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Parcel Types</CardTitle>
        <CardDescription>Count of each parcel type</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full h-64">
          <BarChart data={typeData}>
            <XAxis dataKey="type" />
            <Bar dataKey="count" fill="var(--color-primary)" radius={4} />
            <ChartTooltip content={<ChartTooltipContent />} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
