"use client";
import { useState, useEffect } from "react";
import {
  Bell,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle,
  BarChart2,
  Globe,
  FileText,
  DollarSign,
  Users,
  Activity,
  LineChart,
  GitBranch,
  TrendingUp,
} from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Sample data for demonstration
const sampleProducts = [
  {
    id: 1,
    name: "CardioStat",
    formulation: "Tablet",
    strength: "25mg",
    presentation: "Blister Pack",
    renewalDate: "2025-07-15",
    status: "active",
    region: "EU",
    progress: 70,
  },
  {
    id: 2,
    name: "CardioStat",
    formulation: "Tablet",
    strength: "50mg",
    presentation: "Bottle",
    renewalDate: "2025-05-20",
    status: "warning",
    region: "US",
    progress: 45,
  },
  {
    id: 3,
    name: "NeuroCare",
    formulation: "Oral Solution",
    strength: "10mg/5ml",
    presentation: "Glass Bottle",
    renewalDate: "2025-04-25",
    status: "danger",
    region: "APAC",
    progress: 20,
  },
  {
    id: 4,
    name: "DermaSoothe",
    formulation: "Topical Cream",
    strength: "2%",
    presentation: "Tube",
    renewalDate: "2025-08-10",
    status: "active",
    region: "EU",
    progress: 85,
  },
  {
    id: 5,
    name: "RespirEase",
    formulation: "Dry Powder Inhaler",
    strength: "100mcg",
    presentation: "Inhaler Device",
    renewalDate: "2025-04-20",
    status: "danger",
    region: "LATAM",
    progress: 15,
  },
];

const sampleNotifications = [
  {
    id: 1,
    type: "danger",
    message: "NeuroCare 10mg/5ml renewal deadline in 5 days",
    date: "2025-04-13",
    unread: true,
  },
  {
    id: 2,
    type: "warning",
    message: "CardioStat 50mg renewal due in 30 days",
    date: "2025-04-11",
    unread: true,
  },
  {
    id: 3,
    type: "success",
    message: "DermaSoothe 2% renewal application approved",
    date: "2025-04-12",
    unread: false,
  },
  {
    id: 4,
    type: "danger",
    message: "RespirEase 100mcg renewal deadline in 7 days",
    date: "2025-04-10",
    unread: true,
  },
  {
    id: 5,
    type: "info",
    message: "Document request for CardioStat 25mg renewal",
    date: "2025-04-09",
    unread: false,
  },
];

// Helper function to calculate days until renewal
const calculateDaysUntil = (dateString) => {
  const today = new Date();
  const targetDate = new Date(dateString);
  const diffTime = targetDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

// Static data for charts
const userEngagementData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Daily Active Users",
      data: [1200, 1900, 3000, 5000, 4000, 6000],
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
    {
      label: "Session Duration (minutes)",
      data: [15, 25, 30, 35, 40, 45],
      borderColor: "rgb(255, 99, 132)",
      tension: 0.1,
    },
  ],
};

const uxMetricsData = {
  labels: [
    "Page Load",
    "Error Rate",
    "Satisfaction",
    "Bounce Rate",
    "Conversion",
  ],
  datasets: [
    {
      label: "Performance Score",
      data: [85, 92, 88, 78, 82],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
      ],
    },
  ],
};

const userJourneyData = {
  labels: ["Landing", "Browse", "Details", "Cart", "Checkout", "Complete"],
  datasets: [
    {
      label: "User Flow",
      data: [1000, 800, 600, 400, 200, 100],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
  ],
};

const featureAdoptionData = {
  labels: ["Feature A", "Feature B", "Feature C", "Feature D", "Feature E"],
  datasets: [
    {
      data: [30, 25, 20, 15, 10],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
      ],
    },
  ],
};

export default function RIMSRenewalDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [notifications, setNotifications] = useState(sampleNotifications);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);
  const [products, setProducts] = useState(sampleProducts);
  const [filterRegion, setFilterRegion] = useState("All");

  // Calculate unread notifications count
  useEffect(() => {
    setUnreadCount(notifications.filter((n) => n.unread).length);
  }, [notifications]);

  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, unread: false } : n))
    );
  };

  const clearAllNotifications = () => {
    setNotifications(notifications.map((n) => ({ ...n, unread: false })));
  };

  const filteredProducts =
    filterRegion === "All"
      ? products
      : products.filter((p) => p.region === filterRegion);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-indigo-800">
            RIMS Renewal Management
          </h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-full hover:bg-gray-100 relative"
              >
                <Bell className="h-6 w-6 text-gray-600" />
                {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notifications Panel */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-10 overflow-hidden">
                  <div className="p-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="font-semibold">Notifications</h3>
                    {unreadCount > 0 && (
                      <button
                        onClick={clearAllNotifications}
                        className="text-xs text-indigo-600 hover:text-indigo-800"
                      >
                        Mark all as read
                      </button>
                    )}
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.length > 0 ? (
                      notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-3 border-b border-gray-100 hover:bg-gray-50 ${
                            notification.unread ? "bg-indigo-50" : ""
                          } ${
                            notification.type === "danger"
                              ? "border-l-4 border-l-red-500"
                              : notification.type === "warning"
                              ? "border-l-4 border-l-yellow-500"
                              : notification.type === "success"
                              ? "border-l-4 border-l-green-500"
                              : "border-l-4 border-l-blue-500"
                          }`}
                          onClick={() => markAsRead(notification.id)}
                        >
                          <div className="flex justify-between items-start">
                            <p
                              className={`text-sm ${
                                notification.unread ? "font-medium" : ""
                              }`}
                            >
                              {notification.message}
                            </p>
                            <span className="text-xs text-gray-500">
                              {notification.date}
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-gray-500">
                        No notifications
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center">
              <span className="font-bold">RA</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 pb-2">
          <nav className="flex space-x-6">
            <button
              onClick={() => setActiveTab("overview")}
              className={`pb-2 px-1 ${
                activeTab === "overview"
                  ? "border-b-2 border-indigo-600 text-indigo-600 font-medium"
                  : "text-gray-500"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("calendar")}
              className={`pb-2 px-1 ${
                activeTab === "calendar"
                  ? "border-b-2 border-indigo-600 text-indigo-600 font-medium"
                  : "text-gray-500"
              }`}
            >
              Calendar
            </button>
            <button
              onClick={() => setActiveTab("documents")}
              className={`pb-2 px-1 ${
                activeTab === "documents"
                  ? "border-b-2 border-indigo-600 text-indigo-600 font-medium"
                  : "text-gray-500"
              }`}
            >
              Documentation
            </button>
            <button
              onClick={() => setActiveTab("markets")}
              className={`pb-2 px-1 ${
                activeTab === "markets"
                  ? "border-b-2 border-indigo-600 text-indigo-600 font-medium"
                  : "text-gray-500"
              }`}
            >
              Markets
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`pb-2 px-1 ${
                activeTab === "analytics"
                  ? "border-b-2 border-indigo-600 text-indigo-600 font-medium"
                  : "text-gray-500"
              }`}
            >
              Analytics
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6">
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-700">
                    Total Products
                  </h3>
                  <FileText className="h-8 w-8 text-indigo-500" />
                </div>
                <p className="text-3xl font-bold mt-2">42</p>
                <p className="text-sm text-gray-500 mt-1">
                  Across 8 therapeutic areas
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-700">
                    Upcoming Renewals
                  </h3>
                  <Calendar className="h-8 w-8 text-yellow-500" />
                </div>
                <p className="text-3xl font-bold mt-2">12</p>
                <p className="text-sm text-gray-500 mt-1">
                  In the next 90 days
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-700">
                    Critical Renewals
                  </h3>
                  <AlertTriangle className="h-8 w-8 text-red-500" />
                </div>
                <p className="text-3xl font-bold mt-2">3</p>
                <p className="text-sm text-gray-500 mt-1">Due within 7 days</p>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-700">
                    Completed
                  </h3>
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <p className="text-3xl font-bold mt-2">8</p>
                <p className="text-sm text-gray-500 mt-1">
                  In the last 30 days
                </p>
              </div>
            </div>

            {/* Filter and Region Selection */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex flex-wrap items-center justify-between">
                <h3 className="text-lg font-medium text-gray-700 mb-2 sm:mb-0">
                  Product Renewal Status
                </h3>
                <div className="flex space-x-2">
                  <select
                    className="border border-gray-300 rounded-md px-3 py-1 text-sm"
                    value={filterRegion}
                    onChange={(e) => setFilterRegion(e.target.value)}
                  >
                    <option value="All">All Regions</option>
                    <option value="US">United States</option>
                    <option value="EU">Europe</option>
                    <option value="APAC">Asia Pacific</option>
                    <option value="LATAM">Latin America</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Renewal Status List */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="min-w-full divide-y divide-gray-200">
                <div className="bg-gray-50 px-6 py-3 flex font-medium text-gray-500 uppercase tracking-wider text-xs">
                  <div className="w-1/4">Product</div>
                  <div className="w-1/6">Formulation</div>
                  <div className="w-1/6">Strength</div>
                  <div className="w-1/6">Region</div>
                  <div className="w-1/6">Renewal Date</div>
                  <div className="w-1/6">Progress</div>
                </div>
                <div className="bg-white divide-y divide-gray-200">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="px-6 py-4 flex items-center hover:bg-gray-50"
                    >
                      <div className="w-1/4">
                        <div className="font-medium text-gray-900 flex items-center">
                          {calculateDaysUntil(product.renewalDate) <= 7 && (
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
                          )}
                          {product.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {product.presentation}
                        </div>
                      </div>
                      <div className="w-1/6 text-sm text-gray-500">
                        {product.formulation}
                      </div>
                      <div className="w-1/6 text-sm text-gray-500">
                        {product.strength}
                      </div>
                      <div className="w-1/6 text-sm text-gray-500">
                        {product.region}
                      </div>
                      <div className="w-1/6 text-sm">
                        <span
                          className={
                            calculateDaysUntil(product.renewalDate) <= 7
                              ? "text-red-600 font-medium"
                              : calculateDaysUntil(product.renewalDate) <= 30
                              ? "text-yellow-600 font-medium"
                              : "text-gray-500"
                          }
                        >
                          {product.renewalDate}
                          <br />
                          {calculateDaysUntil(product.renewalDate)} days left
                        </span>
                      </div>
                      <div className="w-1/6">
                        <div className="flex items-center">
                          <div className="flex-1 h-2 bg-gray-200 rounded-full mr-2">
                            <div
                              className={`h-full rounded-full ${
                                product.progress >= 70
                                  ? "bg-green-500"
                                  : product.progress >= 40
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                              }`}
                              style={{ width: `${product.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-500">
                            {product.progress}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* User Engagement & UX Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-700">
                    Renewal Distribution
                  </h3>
                  <Activity className="h-6 w-6 text-indigo-500" />
                </div>
                <div className="bg-gray-50 rounded-lg h-64 p-4">
                  <Line
                    data={userEngagementData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: "top" as const,
                        },
                      },
                    }}
                  />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-700">
                    Global Renewal Map{" "}
                  </h3>
                  <LineChart className="h-6 w-6 text-indigo-500" />
                </div>
                <div className="bg-gray-50 rounded-lg h-64 p-4">
                  <Bar
                    data={uxMetricsData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: "top" as const,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            {/* User Behavior Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-700">
                    Resource Allocation
                  </h3>
                  <GitBranch className="h-6 w-6 text-indigo-500" />
                </div>
                <div className="bg-gray-50 rounded-lg h-64 p-4">
                  <Bar
                    data={userJourneyData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: "top" as const,
                        },
                      },
                    }}
                  />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-700">
                    Financial Overview
                  </h3>
                  <TrendingUp className="h-6 w-6 text-indigo-500" />
                </div>
                <div className="bg-gray-50 rounded-lg h-64 p-4">
                  <Doughnut
                    data={featureAdoptionData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: "top" as const,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other tab content would be implemented similarly */}
        {(activeTab === "calendar" ||
          activeTab === "documents" ||
          activeTab === "markets" ||
          activeTab === "analytics") && (
          <div className="bg-white rounded-lg shadow p-6">
            <div className="bg-gray-50 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <p className="text-lg text-gray-500">
                  This {activeTab} tab would show interactive D3.js
                  visualizations
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  With detailed renewal tracking for all product specifications
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
