"use client";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useIntegration } from "@/contexts/integration-context";

const data = [
  {
    name: "Jan",
    submissions: 12,
    approvals: 8,
  },
  {
    name: "Feb",
    submissions: 18,
    approvals: 10,
  },
  {
    name: "Mar",
    submissions: 15,
    approvals: 12,
  },
  {
    name: "Apr",
    submissions: 22,
    approvals: 15,
  },
  {
    name: "May",
    submissions: 28,
    approvals: 20,
  },
  {
    name: "Jun",
    submissions: 25,
    approvals: 18,
  },
  {
    name: "Jul",
    submissions: 32,
    approvals: 22,
  },
];

export function Overview() {
  const { integrations } = useIntegration();

  // Calculate integration metrics for the chart
  const activeIntegrations = integrations.filter(
    (i) => i.status === "connected" && i.enabled
  ).length;
  const totalIntegrations = integrations.length;

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip />
        <Bar
          dataKey="submissions"
          fill="#adfa1d"
          radius={[4, 4, 0, 0]}
          name="Submissions"
        />
        <Bar
          dataKey="approvals"
          fill="#0ea5e9"
          radius={[4, 4, 0, 0]}
          name="Approvals"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
