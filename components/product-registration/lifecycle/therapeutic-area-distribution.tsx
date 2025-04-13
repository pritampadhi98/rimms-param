"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  {
    name: "Cardiology",
    development: 8,
    submission: 6,
    approved: 4,
    marketed: 32,
    discontinued: 3,
  },
  {
    name: "Neurology",
    development: 10,
    submission: 8,
    approved: 5,
    marketed: 24,
    discontinued: 2,
  },
  {
    name: "Oncology",
    development: 12,
    submission: 9,
    approved: 6,
    marketed: 18,
    discontinued: 1,
  },
  {
    name: "Immunology",
    development: 6,
    submission: 7,
    approved: 5,
    marketed: 22,
    discontinued: 4,
  },
  {
    name: "Infectious",
    development: 4,
    submission: 4,
    approved: 3,
    marketed: 28,
    discontinued: 3,
  },
  {
    name: "Other",
    development: 2,
    submission: 2,
    approved: 1,
    marketed: 8,
    discontinued: 1,
  },
]

export function TherapeuticAreaDistribution() {
  return (
    <div className="w-full">
      <Card>
        <CardContent className="pt-6">
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    borderColor: "hsl(var(--border))",
                    borderRadius: "0.5rem",
                  }}
                />
                <Legend />
                <Bar dataKey="development" name="Development" fill="#3b82f6" />
                <Bar dataKey="submission" name="Submission" fill="#f59e0b" />
                <Bar dataKey="approved" name="Approved" fill="#10b981" />
                <Bar dataKey="marketed" name="Marketed" fill="#8b5cf6" />
                <Bar dataKey="discontinued" name="Discontinued" fill="#6b7280" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
