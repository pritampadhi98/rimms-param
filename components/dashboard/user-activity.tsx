"use client";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import { useAuth } from "@/contexts/auth-context";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

// Mock data for user activity
const userActivityData = [
  {
    name: "Jan",
    activeUsers: 45,
    newUsers: 12,
    sessions: 120,
  },
  {
    name: "Feb",
    activeUsers: 52,
    newUsers: 15,
    sessions: 145,
  },
  {
    name: "Mar",
    activeUsers: 48,
    newUsers: 10,
    sessions: 132,
  },
  {
    name: "Apr",
    activeUsers: 60,
    newUsers: 18,
    sessions: 168,
  },
  {
    name: "May",
    activeUsers: 65,
    newUsers: 22,
    sessions: 185,
  },
  {
    name: "Jun",
    activeUsers: 58,
    newUsers: 16,
    sessions: 162,
  },
  {
    name: "Jul",
    activeUsers: 70,
    newUsers: 25,
    sessions: 210,
  },
];

// Mock data for user roles distribution
const userRolesData = [
  { name: "Regulatory Manager", value: 15 },
  { name: "Regulatory Specialist", value: 25 },
  { name: "Quality Manager", value: 10 },
  { name: "Viewer", value: 50 },
];

// Mock data for user activity by department
const departmentActivityData = [
  {
    name: "Regulatory Affairs",
    submissions: 45,
    approvals: 30,
    reviews: 60,
  },
  {
    name: "Quality Assurance",
    submissions: 25,
    approvals: 20,
    reviews: 40,
  },
  {
    name: "Clinical",
    submissions: 15,
    approvals: 10,
    reviews: 25,
  },
  {
    name: "Manufacturing",
    submissions: 10,
    approvals: 8,
    reviews: 15,
  },
  {
    name: "R&D",
    submissions: 20,
    approvals: 12,
    reviews: 30,
  },
];

export function UserActivity() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("activity");

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>User Activity</CardTitle>
        <CardDescription>User engagement and activity metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="activity">Activity Trends</TabsTrigger>
            <TabsTrigger value="roles">User Roles</TabsTrigger>
            <TabsTrigger value="departments">Department Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="activity" className="mt-4">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userActivityData}>
                <CartesianGrid strokeDasharray="3 3" />
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
                />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="activeUsers"
                  stroke="#adfa1d"
                  strokeWidth={2}
                  name="Active Users"
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="newUsers"
                  stroke="#0ea5e9"
                  strokeWidth={2}
                  name="New Users"
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="sessions"
                  stroke="#f43f5e"
                  strokeWidth={2}
                  name="Sessions"
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>

          <TabsContent value="roles" className="mt-4">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userRolesData}>
                <CartesianGrid strokeDasharray="3 3" />
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
                />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  name="Users"
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>

          <TabsContent value="departments" className="mt-4">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={departmentActivityData}>
                <CartesianGrid strokeDasharray="3 3" />
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
                />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="submissions"
                  stroke="#adfa1d"
                  strokeWidth={2}
                  name="Submissions"
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="approvals"
                  stroke="#0ea5e9"
                  strokeWidth={2}
                  name="Approvals"
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="reviews"
                  stroke="#f43f5e"
                  strokeWidth={2}
                  name="Reviews"
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
