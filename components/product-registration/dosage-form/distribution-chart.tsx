"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const data = [
  { name: "Tablets", value: 42, color: "#0ea5e9" },
  { name: "Capsules", value: 28, color: "#22c55e" },
  { name: "Injectables", value: 18, color: "#f59e0b" },
  { name: "Oral Solutions", value: 15, color: "#8b5cf6" },
  { name: "Topical", value: 12, color: "#ec4899" },
  { name: "Inhalation", value: 8, color: "#06b6d4" },
  { name: "Other", value: 5, color: "#94a3b8" },
]

export function DosageFormDistribution() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value} Products`, "Count"]} />
          <Legend layout="horizontal" verticalAlign="bottom" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
