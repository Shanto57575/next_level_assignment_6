/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useAnalyticsDataQuery } from "@/redux/app/features/parcelApi";
import StatusPieChart from "./stats/StatusPieChart";
import ParcelTypeBarChart from "./stats/ParcelTypeBarChart";
import ParcelTrendLineChart from "./stats/ParcelTrendLineChart";
import Loader from "@/components/Loader";
import TopSendersBarChart from "./stats/TopSendersBarChart";
import TopReceiversBarChart from "./stats/TopReceiversBarChart";

const chartColors = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

interface MetricCardProps {
  title: string;
  value: number;
  subtitle?: string;
  icon: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const MetricCard = ({
  title,
  value,
  subtitle,
  icon,
  trend,
}: MetricCardProps) => (
  <div className="rounded-xl border p-6 shadow-sm hover:shadow-md transition-all duration-200">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center">
            <span className="text-red-600 text-lg">{icon}</span>
          </div>
          <p className="text-sm font-medium">{title}</p>
        </div>

        <div className="space-y-1">
          <p className="text-2xl font-bold">{value.toLocaleString()}</p>
          {subtitle && <p className="text-sm">{subtitle}</p>}
        </div>
      </div>

      {trend && (
        <div
          className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
            trend.isPositive
              ? "bg-emerald-50 text-emerald-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          <span>{trend.isPositive ? "↗" : "↘"}</span>
          <span>{Math.abs(trend.value)}%</span>
        </div>
      )}
    </div>

    <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-500"
        style={{ width: "65%" }}
      />
    </div>
  </div>
);

export default function Analytics() {
  const { data: analyticsData, isLoading } = useAnalyticsDataQuery(undefined);

  if (isLoading) return <Loader />;
  if (!analyticsData) return <div>No data available</div>;

  // Calculate metrics
  const totalParcels =
    analyticsData?.data?.status.reduce(
      (sum: number, s: any) => sum + s.count,
      0
    ) || 0;
  const totalRevenue =
    analyticsData?.data?.daily.reduce(
      (sum: number, d: any) => sum + d.totalFee,
      0
    ) || 0;
  const activeUsers =
    (analyticsData?.data?.users.sent?.length || 0) +
    (analyticsData?.data?.users.received?.length || 0);
  const avgDailyParcels = analyticsData?.data?.daily.length
    ? Math.round(
        analyticsData.data.daily.reduce(
          (sum: number, d: any) => sum + d.count,
          0
        ) / analyticsData.data.daily.length
      )
    : 0;

  return (
    <div className="min-h-screen p-4 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="text-center md:text-start">
          <h1 className="text-2xl font-bold">Analytics Overview</h1>
          <p className="mt-1">Track your parcel management performance</p>
        </div>
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-sm text-sm font-medium">
          <span>📊</span>
          <span>Real-time Data</span>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Parcels"
          value={totalParcels}
          subtitle="All time parcels"
          icon="📦"
          trend={{ value: 12, isPositive: true }}
        />

        <MetricCard
          title="Total Revenue"
          value={totalRevenue}
          subtitle="BDT earned"
          icon="💰"
          trend={{ value: 8, isPositive: true }}
        />

        <MetricCard
          title="Active Users"
          value={activeUsers}
          subtitle="Senders & Receivers"
          icon="👥"
          trend={{ value: 5, isPositive: false }}
        />

        <MetricCard
          title="Daily Average"
          value={avgDailyParcels}
          subtitle="Parcels per day"
          icon="📈"
          trend={{ value: 15, isPositive: true }}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl shadow-sm">
          <StatusPieChart
            statusData={analyticsData?.data?.status.map((s: any, i: any) => ({
              status: s._id,
              count: s.count,
              fill: chartColors[i % chartColors.length],
            }))}
          />
        </div>

        <div className="rounded-xl shadow-sm">
          <ParcelTypeBarChart
            typeData={analyticsData?.data?.types.map((t: any) => ({
              type: t._id,
              count: t.count,
            }))}
          />
        </div>

        <div className="rounded-xl shadow-sm">
          <ParcelTrendLineChart
            trendData={analyticsData?.data?.daily.map((d: any) => ({
              date: d._id,
              parcels: d.count,
              fee: d.totalFee,
            }))}
          />
        </div>

        <div className="rounded-xl shadow-sm">
          <TopSendersBarChart senderData={analyticsData?.data?.users.sent} />
        </div>

        <div className="rounded-xl shadow-sm">
          <TopReceiversBarChart
            receiverData={analyticsData?.data?.users.received}
          />
        </div>
      </div>
    </div>
  );
}
