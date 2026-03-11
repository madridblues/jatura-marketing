import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, CheckCircle, TrendingUp, AlertCircle, Target, Users, BarChart3 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface Question {
  id: string;
  domain: string;
  question: string;
  options: Array<{
    text: string;
    value: number;
    description: string;
  }>;
}

const questions: Question[] = [
  {
    id: "q1",
    domain: "Technology",
    question: "How do you currently track job applications?",
    options: [
      { text: "Email and spreadsheets", value: 0, description: "Manual tracking with no dedicated system" },
      { text: "Basic ATS with limited features", value: 1, description: "Entry-level applicant tracking" },
      { text: "Modern ATS with automation", value: 2, description: "Automated workflows and integrations" },
      { text: "AI-powered ATS with intelligent matching", value: 3, description: "Advanced AI and analytics" }
    ]
  },
  {
    id: "q2",
    domain: "Process",
    question: "How standardized is your hiring process across the organization?",
    options: [
      { text: "No standard process - varies by manager", value: 0, description: "Ad-hoc, inconsistent approach" },
      { text: "Basic templates but not enforced", value: 1, description: "Guidelines exist but optional" },
      { text: "Defined process with some flexibility", value: 2, description: "Structured with documented steps" },
      { text: "Optimized process with continuous improvement", value: 3, description: "Data-driven refinement" }
    ]
  },
  {
    id: "q3",
    domain: "Technology",
    question: "How do candidates apply for your open positions?",
    options: [
      { text: "Email their resume", value: 0, description: "No application portal" },
      { text: "Fill out a form on our website", value: 1, description: "Basic web form" },
      { text: "Apply through a career site with branded experience", value: 2, description: "Professional career portal" },
      { text: "Multiple channels with unified tracking (site, text-to-apply, social)", value: 3, description: "Omnichannel with automation" }
    ]
  },
  {
    id: "q4",
    domain: "Analytics",
    question: "How do you measure recruiting performance?",
    options: [
      { text: "We don't track metrics", value: 0, description: "No measurement" },
      { text: "Basic metrics like time-to-fill", value: 1, description: "Limited tracking" },
      { text: "Multiple KPIs tracked in dashboards", value: 2, description: "Structured reporting" },
      { text: "Predictive analytics and AI insights", value: 3, description: "Advanced intelligence" }
    ]
  },
  {
    id: "q5",
    domain: "Collaboration",
    question: "How do hiring managers and recruiters collaborate?",
    options: [
      { text: "Email and phone calls", value: 0, description: "No shared platform" },
      { text: "Shared documents and occasional meetings", value: 1, description: "Basic coordination" },
      { text: "Dedicated platform with comments and feedback", value: 2, description: "Structured collaboration" },
      { text: "Real-time collaboration with automated workflows", value: 3, description: "Seamless integration" }
    ]
  },
  {
    id: "q6",
    domain: "Candidate Experience",
    question: "How do candidates stay informed about their application status?",
    options: [
      { text: "They don't - we contact finalists only", value: 0, description: "No communication" },
      { text: "Manual emails when we remember", value: 1, description: "Inconsistent updates" },
      { text: "Automated status updates at key stages", value: 2, description: "Systematic communication" },
      { text: "Self-service portal with real-time status and messaging", value: 3, description: "Transparent, proactive" }
    ]
  },
  {
    id: "q7",
    domain: "Process",
    question: "How do you screen candidates?",
    options: [
      { text: "Manually review every resume", value: 0, description: "100% manual process" },
      { text: "Keyword filtering in our ATS", value: 1, description: "Basic automation" },
      { text: "Knockout questions and scoring rubrics", value: 2, description: "Structured screening" },
      { text: "AI-powered screening with intelligent matching", value: 3, description: "Advanced automation" }
    ]
  },
  {
    id: "q8",
    domain: "Analytics",
    question: "Do you know your cost-per-hire?",
    options: [
      { text: "No idea", value: 0, description: "No cost tracking" },
      { text: "Rough estimate without details", value: 1, description: "Ballpark figure" },
      { text: "Calculated annually with breakdown", value: 2, description: "Regular measurement" },
      { text: "Tracked in real-time by source and role", value: 3, description: "Detailed analytics" }
    ]
  },
  {
    id: "q9",
    domain: "Collaboration",
    question: "How do you schedule interviews?",
    options: [
      { text: "Back-and-forth emails to find time", value: 0, description: "Manual coordination" },
      { text: "Shared calendar but manual coordination", value: 1, description: "Basic scheduling" },
      { text: "Scheduling links candidates can book", value: 2, description: "Self-service booking" },
      { text: "AI-powered scheduling with automatic coordination", value: 3, description: "Fully automated" }
    ]
  },
  {
    id: "q10",
    domain: "Candidate Experience",
    question: "What is your typical response time to applicants?",
    options: [
      { text: "2+ weeks or never", value: 0, description: "Slow or no response" },
      { text: "1-2 weeks", value: 1, description: "Delayed response" },
      { text: "2-5 business days", value: 2, description: "Timely response" },
      { text: "Within 24-48 hours (automated)", value: 3, description: "Immediate acknowledgment" }
    ]
  },
  {
    id: "q11",
    domain: "Technology",
    question: "How many tools do you use for recruiting?",
    options: [
      { text: "5+ disconnected tools", value: 0, description: "Fragmented stack" },
      { text: "3-4 tools with manual integration", value: 1, description: "Some overlap" },
      { text: "2-3 integrated tools", value: 2, description: "Connected ecosystem" },
      { text: "All-in-one platform or fully integrated suite", value: 3, description: "Unified solution" }
    ]
  },
  {
    id: "q12",
    domain: "Process",
    question: "How do you ensure hiring compliance and avoid bias?",
    options: [
      { text: "No formal process", value: 0, description: "Unstructured approach" },
      { text: "Basic guidelines for hiring managers", value: 1, description: "Informal practices" },
      { text: "Documented process with training", value: 2, description: "Structured compliance" },
      { text: "Automated checks and AI-powered bias detection", value: 3, description: "Proactive prevention" }
    ]
  }
];

export default function ATSAssessmentPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);


  const handleAnswer = (questionId: string, value: number) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateResults = () => {
    const domainScores: Record<string, { total: number; count: number }> = {};
    
    questions.forEach(q => {
      if (!domainScores[q.domain]) {
        domainScores[q.domain] = { total: 0, count: 0 };
      }
      if (answers[q.id] !== undefined) {
        domainScores[q.domain].total += answers[q.id];
        domainScores[q.domain].count += 1;
      }
    });

    const domainAverages = Object.entries(domainScores).map(([domain, data]) => ({
      domain,
      score: data.count > 0 ? data.total / data.count : 0,
      percentage: data.count > 0 ? (data.total / (data.count * 3)) * 100 : 0
    }));

    const overallScore = domainAverages.reduce((sum, d) => sum + d.score, 0) / domainAverages.length;
    
    let maturityLevel = "";
    let maturityDescription = "";
    let maturityColor = "";
    
    if (overallScore < 0.75) {
      maturityLevel = "Reactive";
      maturityDescription = "Your hiring process is ad-hoc and manual. Significant opportunity to improve efficiency and candidate experience.";
      maturityColor = "text-red-600";
    } else if (overallScore < 1.5) {
      maturityLevel = "Emerging";
      maturityDescription = "You have basic processes in place, but there's room for automation and standardization.";
      maturityColor = "text-orange-600";
    } else if (overallScore < 2.5) {
      maturityLevel = "Advanced";
      maturityDescription = "You have a solid hiring process with good tools and metrics. Ready for AI-powered optimization.";
      maturityColor = "text-blue-600";
    } else {
      maturityLevel = "Optimized";
      maturityDescription = "Your hiring process is mature and data-driven. You're in the top tier of recruiting organizations.";
      maturityColor = "text-green-600";
    }

    return {
      overallScore,
      overallPercentage: (overallScore / 3) * 100,
      maturityLevel,
      maturityDescription,
      maturityColor,
      domainScores: domainAverages
    };
  };

  const getRecommendations = (results: ReturnType<typeof calculateResults>) => {
    const recommendations = [];
    
    const weakestDomain = results.domainScores.reduce((min, d) => 
      d.score < min.score ? d : min
    );

    if (weakestDomain.score < 2) {
      if (weakestDomain.domain === "Technology") {
        recommendations.push({
          title: "Upgrade Your Technology Stack",
          description: "Consider implementing a modern ATS with automation features to reduce manual work and improve efficiency.",
          icon: TrendingUp,
          priority: "high"
        });
      } else if (weakestDomain.domain === "Analytics") {
        recommendations.push({
          title: "Start Tracking Key Metrics",
          description: "Implement basic recruiting KPIs like time-to-hire, cost-per-hire, and source effectiveness to make data-driven decisions.",
          icon: BarChart3,
          priority: "high"
        });
      } else if (weakestDomain.domain === "Candidate Experience") {
        recommendations.push({
          title: "Improve Candidate Communication",
          description: "Set up automated status updates and reduce response times to enhance candidate experience and employer brand.",
          icon: Users,
          priority: "high"
        });
      } else if (weakestDomain.domain === "Process") {
        recommendations.push({
          title: "Standardize Your Hiring Process",
          description: "Document and enforce consistent hiring workflows across all hiring managers to improve quality and compliance.",
          icon: Target,
          priority: "high"
        });
      } else if (weakestDomain.domain === "Collaboration") {
        recommendations.push({
          title: "Enable Team Collaboration",
          description: "Adopt tools that allow hiring managers and recruiters to collaborate in real-time with shared visibility.",
          icon: Users,
          priority: "high"
        });
      }
    }

    if (results.overallScore < 2) {
      recommendations.push({
        title: "Consider an All-in-One ATS",
        description: "Replace multiple disconnected tools with a unified platform to reduce complexity and improve team efficiency.",
        icon: CheckCircle,
        priority: "medium"
      });
    }

    if (recommendations.length === 0) {
      recommendations.push({
        title: "Explore AI-Powered Features",
        description: "You have a strong foundation. Consider AI-powered screening, matching, and insights to reach the next level.",
        icon: TrendingUp,
        priority: "medium"
      });
    }

    return recommendations;
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;
  const canProceed = answers[currentQuestion?.id] !== undefined;

  if (showResults) {
    const results = calculateResults();
    const recommendations = getRecommendations(results);

    return (
      <>
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Results Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-950 rounded-full text-green-700 dark:text-green-300 text-sm font-medium mb-6">
                <CheckCircle className="h-4 w-4" />
                Assessment Complete
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Your Hiring Maturity Score
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Based on your responses, here's where you stand
              </p>
            </div>

            {/* Overall Score Card */}
            <Card className="mb-8 border-2">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-7xl font-bold mb-2" style={{ color: results.maturityColor.replace('text-', '') }}>
                    {Math.round(results.overallPercentage)}%
                  </div>
                  <div className={`text-3xl font-bold ${results.maturityColor} mb-2`}>
                    {results.maturityLevel}
                  </div>
                  <p className="text-lg text-slate-600 dark:text-slate-400">
                    {results.maturityDescription}
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                    Breakdown by Category
                  </h3>
                  <div className="space-y-4">
                    {results.domainScores.map((domain) => (
                      <div key={domain.domain}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {domain.domain}
                          </span>
                          <span className="text-sm font-bold text-slate-900 dark:text-white">
                            {Math.round(domain.percentage)}%
                          </span>
                        </div>
                        <Progress value={domain.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Personalized Recommendations
              </h2>
              <div className="space-y-4">
                {recommendations.map((rec, idx) => {
                  const Icon = rec.icon;
                  return (
                    <Card key={idx} className={rec.priority === 'high' ? 'border-l-4 border-l-blue-600' : ''}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                            <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                              {rec.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                              {rec.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0">
              <CardContent className="p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-3">
                  Ready to improve your hiring maturity?
                </h3>
                <p className="text-blue-50 mb-6 text-lg">
                  Jatura helps organizations move to the "Optimized" level with AI-powered automation, analytics, and seamless collaboration.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://app.jatura.com/signup">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                      Start free trial
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <a href="/demo">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                      Watch demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Retake */}
            <div className="text-center mt-8">
              <Button
                variant="ghost"
                onClick={() => {
                  setCurrentStep(0);
                  setAnswers({});
                  setShowResults(false);
                }}
              >
                Retake Assessment
              </Button>
            </div>
          </div>
        </div>

      </>
    );
  }

  return (
    <>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Free ATS Assessment Tool
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
              Evaluate your hiring maturity in just 5 minutes. Get personalized recommendations to improve your recruitment process.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>12 questions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Free forever</span>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Question {currentStep + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card>
            <CardContent className="p-8">
              <div className="mb-2">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {currentQuestion.domain}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {currentQuestion.question}
              </h2>
              
              <div className="space-y-3">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = answers[currentQuestion.id] === option.value;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(currentQuestion.id, option.value)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50 dark:bg-blue-950'
                          : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          isSelected
                            ? 'border-blue-600 bg-blue-600'
                            : 'border-slate-300 dark:border-slate-600'
                        }`}>
                          {isSelected && (
                            <CheckCircle className="h-3 w-3 text-white" fill="currentColor" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-slate-900 dark:text-white mb-1">
                            {option.text}
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            {option.description}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={!canProceed}
            >
              {currentStep === questions.length - 1 ? 'See Results' : 'Next'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

    </>
  );
}
