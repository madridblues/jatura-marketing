import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  PlayCircle,
  Users,
  Briefcase,
  MessageSquare,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Calendar,
  FileText,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Clock,
  Target,
  Mail,
  Phone,
  Award,
  DollarSign,
  Send,
  Globe,
  UserCircle,
  Building2,
  ClipboardList,
} from "lucide-react";

export default function DemoPage() {
  const [currentView, setCurrentView] = useState<
    | "overview"
    | "jobs"
    | "candidates"
    | "pipeline"
    | "analytics"
    | "applications"
    | "messages"
    | "profile"
    | "portal"
    | "career"
  >("overview");
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(
    null
  );

  const demoJobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Remote",
      applicants: 127,
      status: "active",
      filled: 65,
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "New York, NY",
      applicants: 89,
      status: "active",
      filled: 45,
    },
    {
      id: 3,
      title: "Marketing Director",
      department: "Marketing",
      location: "San Francisco, CA",
      applicants: 56,
      status: "active",
      filled: 30,
    },
  ];

  const demoCandidates = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "Senior Software Engineer",
      email: "sarah.chen@example.com",
      phone: "+1 (555) 123-4567",
      stage: "Interview",
      score: 95,
      avatar: "SC",
      appliedDate: "2 days ago",
      experience: "8 years",
      skills: ["React", "TypeScript", "Node.js", "AWS"],
      status: "active",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "Senior Software Engineer",
      email: "m.rodriguez@example.com",
      phone: "+1 (555) 234-5678",
      stage: "Phone Screen",
      score: 88,
      avatar: "MR",
      appliedDate: "5 days ago",
      experience: "6 years",
      skills: ["Python", "Django", "PostgreSQL", "Docker"],
      status: "active",
    },
    {
      id: 3,
      name: "Emily Johnson",
      position: "Product Manager",
      email: "emily.j@example.com",
      phone: "+1 (555) 345-6789",
      stage: "Application Review",
      score: 92,
      avatar: "EJ",
      appliedDate: "1 day ago",
      experience: "5 years",
      skills: ["Product Strategy", "Agile", "Data Analysis", "UX"],
      status: "new",
    },
  ];

  const pipelineStages = [
    { name: "Application Review", count: 45, color: "bg-slate-500" },
    { name: "Phone Screen", count: 28, color: "bg-blue-500" },
    { name: "Interview", count: 15, color: "bg-blue-500" },
    { name: "Technical Assessment", count: 8, color: "bg-amber-500" },
    { name: "Offer", count: 3, color: "bg-emerald-500" },
  ];

  const analyticsData = {
    totalApplications: 272,
    activeJobs: 12,
    avgTimeToHire: "18 days",
    offerAcceptanceRate: "92%",
  };

  const markStepComplete = (step: string) => {
    setCompletedSteps((prev) => new Set([...prev, step]));
  };

  const handleViewChange = (
    view:
      | "overview"
      | "jobs"
      | "candidates"
      | "pipeline"
      | "analytics"
      | "applications"
      | "messages"
      | "profile"
      | "portal"
      | "career"
  ) => {
    setCurrentView(view);
    // Scroll to the tabs section smoothly
    setTimeout(() => {
      const tabsSection = document.querySelector('[data-section="tabs"]');
      if (tabsSection) {
        tabsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const progress = (completedSteps.size / 10) * 100;

  return (
    <>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950/20 dark:to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="mb-6 px-5 py-2 text-sm font-medium bg-slate-100 dark:bg-slate-900/30 text-slate-900 dark:text-slate-100"
            >
              <PlayCircle className="w-4 h-4 mr-2" />
              Interactive Demo
            </Badge>

            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Experience Jatura ATS
              <br />
              <span className="text-blue-600 dark:text-blue-400">
                in Action
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              Explore our platform with realistic sample data. No signup required. See how easy it is to manage your entire hiring process in one place.
            </p>

            {/* Progress Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Demo Progress
                </span>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {completedSteps.size}/10 features explored
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => handleViewChange("jobs")}
                className="bg-blue-600 hover:bg-blue-700 text-white"
                data-testid="button-start-demo"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Start Interactive Tour
              </Button>
              <a href="/signup">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2"
                  data-testid="button-signup-demo"
                >
                  Sign Up for Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-0 z-40 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-sm" data-section="tabs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto hide-scrollbar gap-2 py-4">
            <Button
              variant={currentView === "overview" ? "default" : "ghost"}
              onClick={() => handleViewChange("overview")}
              className={
                currentView === "overview"
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : ""
              }
              data-testid="tab-overview"
            >
              <Target className="w-4 h-4 mr-2" />
              Overview
            </Button>
            <Button
              variant={currentView === "jobs" ? "default" : "ghost"}
              onClick={() => {
                handleViewChange("jobs");
                markStepComplete("jobs");
              }}
              className={
                currentView === "jobs"
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : ""
              }
              data-testid="tab-jobs"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Jobs
              {completedSteps.has("jobs") && (
                <CheckCircle className="w-4 h-4 ml-2 text-emerald-400" />
              )}
            </Button>
            <Button
              variant={currentView === "candidates" ? "default" : "ghost"}
              onClick={() => {
                handleViewChange("candidates");
                markStepComplete("candidates");
              }}
              className={
                currentView === "candidates"
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : ""
              }
              data-testid="tab-candidates"
            >
              <Users className="w-4 h-4 mr-2" />
              Candidates
              {completedSteps.has("candidates") && (
                <CheckCircle className="w-4 h-4 ml-2 text-emerald-400" />
              )}
            </Button>
            <Button
              variant={currentView === "pipeline" ? "default" : "ghost"}
              onClick={() => {
                handleViewChange("pipeline");
                markStepComplete("pipeline");
              }}
              className={
                currentView === "pipeline"
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : ""
              }
              data-testid="tab-pipeline"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Pipeline
              {completedSteps.has("pipeline") && (
                <CheckCircle className="w-4 h-4 ml-2 text-emerald-400" />
              )}
            </Button>
            <Button
              variant={currentView === "analytics" ? "default" : "ghost"}
              onClick={() => {
                handleViewChange("analytics");
                markStepComplete("analytics");
              }}
              className={
                currentView === "analytics"
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : ""
              }
              data-testid="tab-analytics"
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
              {completedSteps.has("analytics") && (
                <CheckCircle className="w-4 h-4 ml-2 text-emerald-400" />
              )}
            </Button>
            <Button
              variant={currentView === "applications" ? "default" : "ghost"}
              onClick={() => {
                handleViewChange("applications");
                markStepComplete("applications");
              }}
              className={
                currentView === "applications"
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : ""
              }
              data-testid="tab-applications"
            >
              <ClipboardList className="w-4 h-4 mr-2" />
              Applications
              {completedSteps.has("applications") && (
                <CheckCircle className="w-4 h-4 ml-2 text-emerald-400" />
              )}
            </Button>
            <Button
              variant={currentView === "messages" ? "default" : "ghost"}
              onClick={() => {
                handleViewChange("messages");
                markStepComplete("messages");
              }}
              className={
                currentView === "messages"
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : ""
              }
              data-testid="tab-messages"
            >
              <Send className="w-4 h-4 mr-2" />
              Messages
              {completedSteps.has("messages") && (
                <CheckCircle className="w-4 h-4 ml-2 text-emerald-400" />
              )}
            </Button>
            <Button
              variant={currentView === "profile" ? "default" : "ghost"}
              onClick={() => {
                handleViewChange("profile");
                markStepComplete("profile");
              }}
              className={
                currentView === "profile"
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : ""
              }
              data-testid="tab-profile"
            >
              <UserCircle className="w-4 h-4 mr-2" />
              Candidate Profile
              {completedSteps.has("profile") && (
                <CheckCircle className="w-4 h-4 ml-2 text-emerald-400" />
              )}
            </Button>
            <Button
              variant={currentView === "portal" ? "default" : "ghost"}
              onClick={() => {
                handleViewChange("portal");
                markStepComplete("portal");
              }}
              className={
                currentView === "portal"
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : ""
              }
              data-testid="tab-portal"
            >
              <Building2 className="w-4 h-4 mr-2" />
              Candidate Portal
              {completedSteps.has("portal") && (
                <CheckCircle className="w-4 h-4 ml-2 text-emerald-400" />
              )}
            </Button>
            <Button
              variant={currentView === "career" ? "default" : "ghost"}
              onClick={() => {
                handleViewChange("career");
                markStepComplete("career");
              }}
              className={
                currentView === "career"
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : ""
              }
              data-testid="tab-career"
            >
              <Globe className="w-4 h-4 mr-2" />
              Career Page
              {completedSteps.has("career") && (
                <CheckCircle className="w-4 h-4 ml-2 text-emerald-400" />
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Overview View */}
          {currentView === "overview" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  Welcome to the Jatura ATS Demo
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  Click on the tabs above to explore different features. All data is sample data for demonstration purposes.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handleViewChange("jobs")}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900/30 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Active Jobs
                      </p>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">
                        {analyticsData.activeJobs}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Click to explore job management
                  </p>
                </Card>

                <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handleViewChange("candidates")}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Total Applications
                      </p>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">
                        {analyticsData.totalApplications}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Click to explore candidate profiles
                  </p>
                </Card>

                <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handleViewChange("pipeline")}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Avg Time to Hire
                      </p>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">
                        {analyticsData.avgTimeToHire}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Click to explore pipeline stages
                  </p>
                </Card>

                <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handleViewChange("analytics")}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Offer Accept Rate
                      </p>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">
                        {analyticsData.offerAcceptanceRate}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Click to explore analytics
                  </p>
                </Card>
              </div>

              {/* Features Highlights */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950/20 dark:to-blue-950/20 rounded-2xl p-8 mt-12">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                  Key Features to Explore
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                      AI-Powered Screening
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Automatic candidate scoring and matching
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Smart Scheduling
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Automated interview scheduling with calendar sync
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <MessageSquare className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Multi-Channel Communication
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Email, SMS, and in-app messaging
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Jobs View */}
          {currentView === "jobs" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    Active Job Openings
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    Manage all your open positions in one place
                  </p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Create New Job
                </Button>
              </div>

              <div className="grid gap-4">
                {demoJobs.map((job) => (
                  <Card
                    key={job.id}
                    className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                    data-testid={`job-card-${job.id}`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                            {job.title}
                          </h3>
                          <Badge variant="secondary" className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-100">
                            {job.status}
                          </Badge>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mb-3">
                          {job.department} · {job.location}
                        </p>
                        <div className="flex items-center gap-6 text-sm">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-slate-500" />
                            <span className="text-slate-600 dark:text-slate-400">
                              {job.applicants} applicants
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-slate-500" />
                            <span className="text-slate-600 dark:text-slate-400">
                              {job.filled}% pipeline filled
                            </span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-6 h-6 text-slate-400" />
                    </div>
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                      <Progress value={job.filled} className="h-2" />
                    </div>
                  </Card>
                ))}
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mt-8">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                      AI-Powered Job Descriptions
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Our AI helps you create compelling job descriptions that attract top talent. Just provide a few details and get a professional JD in seconds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Candidates View */}
          {currentView === "candidates" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    Candidate Pipeline
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    View and manage all applicants with AI-powered insights
                  </p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Users className="w-4 h-4 mr-2" />
                  Add Candidate
                </Button>
              </div>

              <div className="grid gap-4">
                {demoCandidates.map((candidate) => (
                  <Card
                    key={candidate.id}
                    className={`p-6 hover:shadow-lg transition-all cursor-pointer ${
                      selectedCandidate === candidate.id
                        ? "ring-2 ring-blue-500"
                        : ""
                    }`}
                    onClick={() => setSelectedCandidate(candidate.id)}
                    data-testid={`candidate-card-${candidate.id}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-500 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                        {candidate.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                              {candidate.name}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-2">
                              {candidate.position}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="text-right mr-4">
                              <div className="flex items-center gap-2 mb-1">
                                <Star className="w-4 h-4 text-amber-500 fill-current" />
                                <span className="text-lg font-bold text-slate-900 dark:text-white">
                                  {candidate.score}
                                </span>
                              </div>
                              <p className="text-xs text-slate-500">AI Score</p>
                            </div>
                            <Badge
                              variant="secondary"
                              className={
                                candidate.status === "new"
                                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100"
                                  : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                              }
                            >
                              {candidate.stage}
                            </Badge>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-2 mb-3">
                          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <Mail className="w-4 h-4" />
                            {candidate.email}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <Phone className="w-4 h-4" />
                            {candidate.phone}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <Award className="w-4 h-4" />
                            {candidate.experience} experience
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <Clock className="w-4 h-4" />
                            Applied {candidate.appliedDate}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {candidate.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="outline"
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        {selectedCandidate === candidate.id && (
                          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="flex-1"
                              >
                                <Calendar className="w-4 h-4 mr-2" />
                                Schedule Interview
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="flex-1"
                              >
                                <MessageSquare className="w-4 h-4 mr-2" />
                                Send Message
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="flex-1"
                              >
                                <FileText className="w-4 h-4 mr-2" />
                                View Resume
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="bg-slate-50 dark:bg-slate-950/20 border border-slate-200 dark:border-slate-800 rounded-xl p-6 mt-8">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                      AI-Powered Candidate Matching
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Our AI automatically scores and ranks candidates based on job requirements, skills, experience, and cultural fit. Click on any candidate to see detailed actions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Pipeline View */}
          {currentView === "pipeline" && (
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Hiring Pipeline Overview
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Visual pipeline showing candidates at each stage
                </p>
              </div>

              <div className="grid md:grid-cols-5 gap-4">
                {pipelineStages.map((stage, index) => (
                  <Card key={stage.name} className="p-6 relative overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 w-full h-1 ${stage.color}`}
                    />
                    <div className="text-center">
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                        {stage.name}
                      </p>
                      <p className="text-4xl font-bold text-slate-900 dark:text-white mb-1">
                        {stage.count}
                      </p>
                      <p className="text-xs text-slate-500">candidates</p>
                    </div>
                    {index < pipelineStages.length - 1 && (
                      <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                        <ChevronRight className="w-6 h-6 text-slate-300 dark:text-slate-700" />
                      </div>
                    )}
                  </Card>
                ))}
              </div>

              <Card className="p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                  Pipeline Conversion Funnel
                </h3>
                <div className="space-y-4">
                  {pipelineStages.map((stage, index) => {
                    const percentage =
                      (stage.count / pipelineStages[0].count) * 100;
                    return (
                      <div key={stage.name}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                            {stage.name}
                          </span>
                          <span className="text-sm font-semibold text-slate-900 dark:text-white">
                            {stage.count} ({percentage.toFixed(0)}%)
                          </span>
                        </div>
                        <div className="relative h-8 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className={`absolute h-full ${stage.color} transition-all duration-500`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>

              <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Automated Pipeline Management
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Jatura automatically moves candidates through your pipeline based on actions taken. Configure custom automation rules for each stage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Analytics View */}
          {currentView === "analytics" && (
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Recruitment Analytics
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Data-driven insights to optimize your hiring process
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Total Applications
                      </p>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">
                        272
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                    <TrendingUp className="w-4 h-4" />
                    <span>+18% from last month</span>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900/30 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Avg Time to Hire
                      </p>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">
                        18 days
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                    <TrendingUp className="w-4 h-4" />
                    <span>3 days faster</span>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Offer Accept Rate
                      </p>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">
                        92%
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                    <TrendingUp className="w-4 h-4" />
                    <span>+5% improvement</span>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Cost per Hire
                      </p>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">
                        $3,200
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                    <TrendingUp className="w-4 h-4" />
                    <span>15% reduction</span>
                  </div>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
                    Applications by Source
                  </h3>
                  <div className="space-y-4">
                    {[
                      { source: "Direct Apply", count: 112, percent: 41 },
                      { source: "LinkedIn", count: 78, percent: 29 },
                      { source: "Job Boards", count: 52, percent: 19 },
                      { source: "Referrals", count: 30, percent: 11 },
                    ].map((item) => (
                      <div key={item.source}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                            {item.source}
                          </span>
                          <span className="text-sm font-semibold text-slate-900 dark:text-white">
                            {item.count} ({item.percent}%)
                          </span>
                        </div>
                        <Progress value={item.percent} className="h-2" />
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
                    Top Performing Jobs
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: "Senior Software Engineer", apps: 127 },
                      { title: "Product Manager", apps: 89 },
                      { title: "Marketing Director", apps: 56 },
                    ].map((job, index) => (
                      <div
                        key={job.title}
                        className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg"
                      >
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-slate-900 dark:text-white text-sm">
                            {job.title}
                          </p>
                          <p className="text-xs text-slate-500">
                            {job.apps} applications
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <BarChart3 className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Real-Time Analytics Dashboard
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Track your recruitment metrics in real-time. Get insights into source effectiveness, conversion rates, and hiring costs to optimize your recruitment strategy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Applications View */}
          {currentView === "applications" && (
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Application Management
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Track and manage all candidate applications in one place
                </p>
              </div>

              <div className="grid gap-4">
                {demoCandidates.map((candidate) => (
                  <Card key={candidate.id} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-500 flex items-center justify-center text-white text-lg font-bold">
                          {candidate.avatar}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                            {candidate.name}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Applied for {candidate.position}
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100">
                        {candidate.stage}
                      </Badge>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Status</p>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                          Active Application
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Applied</p>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                          {candidate.appliedDate}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-1">AI Match Score</p>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-amber-500 fill-current" />
                          <span className="text-sm font-bold text-slate-900 dark:text-white">
                            {candidate.score}/100
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <ClipboardList className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Streamlined Application Processing
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Review applications efficiently with automated screening, bulk actions, and intelligent filtering. Reduce time-to-review by up to 70%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Messages View */}
          {currentView === "messages" && (
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Multi-Channel Messaging
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Communicate with candidates via email, SMS, and in-app chat
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <Card className="p-6 border-2 border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-slate-100 dark:bg-slate-900/30 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">147</p>
                      <p className="text-xs text-slate-500">Email Threads</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    92% open rate
                  </p>
                </Card>

                <Card className="p-6 border-2 border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">89</p>
                      <p className="text-xs text-slate-500">SMS Sent</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    98% delivery rate
                  </p>
                </Card>

                <Card className="p-6 border-2 border-emerald-200 dark:border-emerald-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">34</p>
                      <p className="text-xs text-slate-500">In-App Chats</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Real-time messaging
                  </p>
                </Card>
              </div>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Recent Conversations
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      name: "Sarah Chen",
                      message: "Thank you for the interview opportunity...",
                      time: "2 hours ago",
                      unread: true,
                    },
                    {
                      name: "Michael Rodriguez",
                      message: "I'm available for the next round...",
                      time: "5 hours ago",
                      unread: false,
                    },
                    {
                      name: "Emily Johnson",
                      message: "Could you provide more details about...",
                      time: "1 day ago",
                      unread: false,
                    },
                  ].map((conv, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors ${
                        conv.unread ? "bg-slate-50 dark:bg-slate-950/20" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-slate-900 dark:text-white">
                          {conv.name}
                        </p>
                        <span className="text-xs text-slate-500">{conv.time}</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {conv.message}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Send className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Unified Communication Hub
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      All candidate communications in one place. Use templates, schedule messages, and track engagement across all channels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Candidate Profile View */}
          {currentView === "profile" && (
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Candidate Profile
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Comprehensive candidate information and hiring timeline
                </p>
              </div>

              <Card className="p-8">
                <div className="flex items-start gap-6 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-500 flex items-center justify-center text-white text-3xl font-bold">
                    SC
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                          Sarah Chen
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-2">
                          Senior Software Engineer Candidate
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-slate-500" />
                            <span className="text-slate-600 dark:text-slate-400">
                              sarah.chen@example.com
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-slate-500" />
                            <span className="text-slate-600 dark:text-slate-400">
                              +1 (555) 123-4567
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-6 h-6 text-amber-500 fill-current" />
                          <span className="text-3xl font-bold text-slate-900 dark:text-white">
                            95
                          </span>
                        </div>
                        <p className="text-xs text-slate-500">AI Match Score</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-100">
                        Interview Stage
                      </Badge>
                      <Badge variant="outline">8 years experience</Badge>
                      <Badge variant="outline">Applied 2 days ago</Badge>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                      Skills & Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["React", "TypeScript", "Node.js", "AWS", "Docker", "GraphQL", "PostgreSQL", "CI/CD"].map(
                        (skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                      Timeline
                    </h4>
                    <div className="space-y-3">
                      {[
                        { event: "Application Submitted", date: "2 days ago", status: "completed" },
                        { event: "Resume Screening", date: "1 day ago", status: "completed" },
                        { event: "Phone Interview", date: "Today", status: "current" },
                        { event: "Technical Assessment", date: "Pending", status: "upcoming" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              item.status === "completed"
                                ? "bg-emerald-500"
                                : item.status === "current"
                                ? "bg-blue-500"
                                : "bg-slate-300 dark:bg-slate-700"
                            }`}
                          />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-900 dark:text-white">
                              {item.event}
                            </p>
                            <p className="text-xs text-slate-500">{item.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              <div className="bg-slate-50 dark:bg-slate-950/20 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <UserCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                      360° Candidate View
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Complete candidate profiles with resume parsing, interview notes, feedback scores, and hiring timeline - all in one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Candidate Portal View */}
          {currentView === "portal" && (
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Candidate Self-Service Portal
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Empower candidates with a dedicated portal to track their application
                </p>
              </div>

              <Card className="p-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950/20 dark:to-blue-950/20">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Building2 className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Welcome back, Sarah!
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Track your application status for Senior Software Engineer
                  </p>
                </div>

                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: "Applied", status: "completed", date: "Jan 10" },
                    { label: "Screening", status: "completed", date: "Jan 11" },
                    { label: "Interview", status: "current", date: "Today" },
                    { label: "Decision", status: "upcoming", date: "Pending" },
                  ].map((step, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-lg text-center ${
                        step.status === "completed"
                          ? "bg-emerald-100 dark:bg-emerald-900/30"
                          : step.status === "current"
                          ? "bg-blue-100 dark:bg-blue-900/30"
                          : "bg-white dark:bg-slate-900"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center ${
                          step.status === "completed"
                            ? "bg-emerald-500"
                            : step.status === "current"
                            ? "bg-blue-500"
                            : "bg-slate-300 dark:bg-slate-700"
                        }`}
                      >
                        {step.status === "completed" && (
                          <CheckCircle className="w-5 h-5 text-white" />
                        )}
                        {step.status === "current" && (
                          <Clock className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <p className="font-medium text-slate-900 dark:text-white text-sm mb-1">
                        {step.label}
                      </p>
                      <p className="text-xs text-slate-500">{step.date}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-xl p-6">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                    Upcoming Actions
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <div className="flex-1">
                        <p className="font-medium text-slate-900 dark:text-white text-sm">
                          Phone Interview Scheduled
                        </p>
                        <p className="text-xs text-slate-500">
                          Today at 2:00 PM with Alex Thompson
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-950/20 rounded-lg">
                      <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <div className="flex-1">
                        <p className="font-medium text-slate-900 dark:text-white text-sm">
                          Complete Technical Assessment
                        </p>
                        <p className="text-xs text-slate-500">
                          Due in 3 days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Building2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Enhanced Candidate Experience
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Give candidates transparency with self-service portals. They can track application status, view interview schedules, and communicate directly with your team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Career Page View */}
          {currentView === "career" && (
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Branded Career Pages
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Showcase your company culture and attract top talent
                </p>
              </div>

              <Card className="overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-4xl font-bold mb-2">Join Our Team</h3>
                    <p className="text-xl text-slate-100">
                      Build the future with us
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {[
                      {
                        title: "Innovation First",
                        desc: "Work with cutting-edge technologies",
                        icon: Sparkles,
                      },
                      {
                        title: "Great Benefits",
                        desc: "Competitive salary and perks",
                        icon: Award,
                      },
                      {
                        title: "Remote Flexible",
                        desc: "Work from anywhere",
                        icon: Globe,
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="text-center">
                        <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                          <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    Open Positions
                  </h4>
                  <div className="space-y-3">
                    {demoJobs.map((job) => (
                      <div
                        key={job.id}
                        className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-blue-300 dark:hover:border-blue-700 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="font-semibold text-slate-900 dark:text-white mb-1">
                              {job.title}
                            </h5>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {job.department} · {job.location}
                            </p>
                          </div>
                          <Button size="sm" variant="outline">
                            Apply Now
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Customizable Career Sites
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Create beautiful, branded career pages that showcase your company culture, values, and open positions. No coding required - fully customizable to match your brand.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Completion CTA */}
      {completedSteps.size === 10 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950/20 dark:to-blue-950/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Demo Complete! 🎉
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              You've explored all the key features of Jatura ATS. Ready to transform your hiring process?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/signup">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  data-testid="button-cta-signup"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2"
                  data-testid="button-cta-pricing"
                >
                  View Pricing
                </Button>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to see Jatura in your workflow?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Start your free 14-day trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/signup">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Talk to Sales
              </Button>
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
