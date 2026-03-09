import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, ArrowRight, CheckCircle, Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface Application {
  token: string;
  jobTitle: string;
  companyName: string;
  companyLogo?: string;
  stage: string;
  status: string;
  appliedAt: string;
  location?: string;
}

const stageInfo: Record<string, { label: string; icon: typeof CheckCircle; color: string }> = {
  application: { label: "Application", icon: Briefcase, color: "text-blue-600" },
  screening: { label: "Screening", icon: Clock, color: "text-yellow-600" },
  interview: { label: "Interview", icon: Calendar, color: "text-purple-600" },
  assessment: { label: "Assessment", icon: CheckCircle, color: "text-indigo-600" },
  offer: { label: "Offer", icon: CheckCircle, color: "text-green-600" },
  hired: { label: "Hired", icon: CheckCircle, color: "text-emerald-600" },
  rejected: { label: "Not Selected", icon: Clock, color: "text-red-600" },
};

const statusBadges: Record<string, { label: string; variant: string }> = {
  active: { label: "Active", variant: "default" },
  rejected: { label: "Not Selected", variant: "destructive" },
  withdrawn: { label: "Withdrawn", variant: "secondary" },
  hired: { label: "Hired", variant: "default" },
};

export default function StatusResultsPage() {
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    const stored = sessionStorage.getItem('statusLookupResults');
    if (stored) {
      setApplications(JSON.parse(stored));
      sessionStorage.removeItem('statusLookupResults');
    } else {
      window.location.href = "/check-status";
    }
  }, []);

  if (applications.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 p-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">Your Applications</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Found {applications.length} {applications.length === 1 ? 'application' : 'applications'}
          </p>
        </div>

        <div className="space-y-4">
          {applications.map((app) => {
            const stage = stageInfo[app.stage] || stageInfo.application;
            const StageIcon = stage.icon;
            const status = statusBadges[app.status] || statusBadges.active;

            return (
              <Card
                key={app.token}
                className="hover:shadow-lg transition-shadow border-slate-200 dark:border-slate-700"
                data-testid={`application-card-${app.token}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      {app.companyLogo && (
                        <img
                          src={app.companyLogo}
                          alt={app.companyName}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      )}
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{app.jobTitle}</CardTitle>
                        <CardDescription className="text-base">
                          {app.companyName}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant={status.variant as any} className="ml-4">
                      {status.label}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <div className="flex items-center gap-2">
                      <StageIcon className={`w-4 h-4 ${stage.color}`} />
                      <span className="font-medium">{stage.label}</span>
                    </div>
                    {app.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{app.location}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Applied {formatDistanceToNow(new Date(app.appliedAt), { addSuffix: true })}</span>
                    </div>
                  </div>

                  <Button
                    className="w-full sm:w-auto"
                    onClick={() => window.location.href = `/apply/status/${app.token}`}
                    data-testid={`button-view-status-${app.token}`}
                  >
                    View Full Status
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Button
            variant="outline"
            onClick={() => window.location.href = "/check-status"}
            data-testid="button-search-again"
          >
            Search Again
          </Button>
        </div>
      </div>
    </div>
  );
}
