"use client";
import { useIntegration } from "@/contexts/integration-context";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Database, AlertTriangle, CheckCircle } from "lucide-react";

export function IntegrationStatus() {
  const { integrations } = useIntegration();

  // Calculate statistics
  const totalIntegrations = integrations.length;
  const activeIntegrations = integrations.filter(
    (i) => i.status === "connected" && i.enabled
  ).length;
  const errorIntegrations = integrations.filter(
    (i) => i.status === "error"
  ).length;
  const integrationHealth =
    totalIntegrations > 0
      ? Math.round((activeIntegrations / totalIntegrations) * 100)
      : 0;

  // Get recent integrations with issues
  const integrationsWithIssues = integrations
    .filter((i) => i.status === "error")
    .slice(0, 3);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Database className="h-5 w-5 mr-2 text-primary" />
          <h3 className="font-medium">Integration Health</h3>
        </div>
        <Badge
          variant={
            integrationHealth > 80
              ? "success"
              : integrationHealth > 50
              ? "default"
              : "destructive"
          }
        >
          {integrationHealth}%
        </Badge>
      </div>

      {/* <Progress value={integrationHealth} className="h-2" /> */}

      <div className="flex justify-between text-sm text-muted-foreground">
        <div>{activeIntegrations} Active</div>
        <div>{errorIntegrations} Issues</div>
        <div>{totalIntegrations} Total</div>
      </div>

      {errorIntegrations > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2 flex items-center">
            <AlertTriangle className="h-4 w-4 mr-1 text-destructive" />
            Integration Issues
          </h4>
          <div className="space-y-2">
            {integrationsWithIssues.map((integration) => (
              <div
                key={integration.id}
                className="text-sm flex justify-between items-center"
              >
                <span>{integration.name}</span>
                <Badge variant="outline" className="text-destructive">
                  Error
                </Badge>
              </div>
            ))}
          </div>
        </div>
      )}

      {errorIntegrations === 0 && activeIntegrations > 0 && (
        <div className="mt-4 flex items-center text-sm text-green-600">
          <CheckCircle className="h-4 w-4 mr-1" />
          All integrations are functioning properly
        </div>
      )}
    </div>
  );
}
