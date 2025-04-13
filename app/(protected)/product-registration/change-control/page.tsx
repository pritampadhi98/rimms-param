import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChangeControlOverview } from "@/components/product-registration/change-control/overview";
import { ChangeControlStats } from "@/components/product-registration/change-control/stats";
import { ChangeControlRequests } from "@/components/product-registration/change-control/requests";
import { ChangeHistoryDashboard } from "@/components/product-registration/change-control/history";
import { ChangeManagementDescription } from "@/components/product-registration/change-control/description";

export default function ChangeControlPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <ChangeManagementDescription />
        <Button>Create Change Request</Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="requests">Change Requests</TabsTrigger>
          <TabsTrigger value="history">Change History</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <ChangeControlStats />
          <ChangeControlOverview />
        </TabsContent>

        <TabsContent value="requests" className="space-y-4">
          <ChangeControlRequests />
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <ChangeHistoryDashboard />
        </TabsContent>
      </Tabs>
    </div>
  );
}
