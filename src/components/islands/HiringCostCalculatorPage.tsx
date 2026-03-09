import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, DollarSign, Users, Clock, TrendingUp, Briefcase, Calculator } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export default function HiringCostCalculatorPage() {
  // Inputs - Recruiter Costs
  const [numRecruiters, setNumRecruiters] = useState(2);
  const [avgRecruiterSalary, setAvgRecruiterSalary] = useState(65000);
  const [recruiterBenefitsPercent, setRecruiterBenefitsPercent] = useState(30);

  // Inputs - Job Board Costs
  const [linkedInJobs, setLinkedInJobs] = useState(5);
  const [indeedJobs, setIndeedJobs] = useState(10);
  const [otherJobBoards, setOtherJobBoards] = useState(3);

  // Inputs - ATS & Software Costs
  const [atsMonthly, setAtsMonthly] = useState(500);
  const [otherSoftware, setOtherSoftware] = useState(200);

  // Inputs - Hiring Metrics
  const [hiresPerYear, setHiresPerYear] = useState(24);
  const [avgTimeToFill, setAvgTimeToFill] = useState(45);
  const [avgSalary, setAvgSalary] = useState(75000);

  // Additional costs
  const [backgroundChecks, setBackgroundChecks] = useState(50);
  const [assessmentTools, setAssessmentTools] = useState(100);


  const calculateCosts = () => {
    // Recruiter Costs (annual)
    const totalRecruiterSalary = numRecruiters * avgRecruiterSalary;
    const recruiterBenefits = totalRecruiterSalary * (recruiterBenefitsPercent / 100);
    const totalRecruiterCost = totalRecruiterSalary + recruiterBenefits;

    // Job Board Costs (annual)
    const linkedInCost = linkedInJobs * 495; // ~$495 per 30-day job post
    const indeedCost = indeedJobs * 150; // ~$150 per sponsored job
    const otherBoardsCost = otherJobBoards * 400; // Average $400 per posting
    const totalJobBoardCost = linkedInCost + indeedCost + otherBoardsCost;

    // Software Costs (annual)
    const atsAnnual = atsMonthly * 12;
    const otherSoftwareAnnual = otherSoftware * 12;
    const totalSoftwareCost = atsAnnual + otherSoftwareAnnual;

    // Time-to-Fill Costs (productivity loss)
    const avgDaysVacant = avgTimeToFill;
    const dailyProductivityLoss = (avgSalary / 260) * 0.75; // 75% of daily salary value
    const productivityLossPerHire = avgDaysVacant * dailyProductivityLoss;
    const totalProductivityLoss = productivityLossPerHire * hiresPerYear;

    // Additional Costs
    const backgroundCheckCosts = backgroundChecks * hiresPerYear;
    const assessmentCosts = assessmentTools * hiresPerYear;
    const totalAdditionalCosts = backgroundCheckCosts + assessmentCosts;

    // Interview Time Costs
    const avgInterviewHours = 8; // Average hours spent in interviews per hire
    const avgInterviewerRate = 75; // $75/hour blended rate
    const interviewTimeCost = avgInterviewHours * avgInterviewerRate * hiresPerYear;

    // Onboarding Costs
    const onboardingCostPerHire = avgSalary * 0.15; // 15% of salary for onboarding
    const totalOnboardingCost = onboardingCostPerHire * hiresPerYear;

    // Total Annual Cost
    const totalAnnualCost =
      totalRecruiterCost +
      totalJobBoardCost +
      totalSoftwareCost +
      totalProductivityLoss +
      totalAdditionalCosts +
      interviewTimeCost +
      totalOnboardingCost;

    // Cost Per Hire
    const costPerHire = totalAnnualCost / hiresPerYear;

    // Cost as % of Salary
    const costAsPercentOfSalary = (costPerHire / avgSalary) * 100;

    return {
      // Recruiter
      totalRecruiterSalary,
      recruiterBenefits,
      totalRecruiterCost,

      // Job Boards
      linkedInCost,
      indeedCost,
      otherBoardsCost,
      totalJobBoardCost,

      // Software
      atsAnnual,
      otherSoftwareAnnual,
      totalSoftwareCost,

      // Time-to-Fill
      productivityLossPerHire,
      totalProductivityLoss,

      // Additional
      backgroundCheckCosts,
      assessmentCosts,
      totalAdditionalCosts,

      // Interview & Onboarding
      interviewTimeCost,
      totalOnboardingCost,

      // Totals
      totalAnnualCost,
      costPerHire,
      costAsPercentOfSalary,
    };
  };

  const results = calculateCosts();

  return (
    <>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-950 rounded-full text-green-700 dark:text-green-300 text-sm font-medium mb-6">
              <Calculator className="h-4 w-4" />
              Interactive Cost Calculator
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Hiring Cost Calculator
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Calculate the true cost of hiring across all categories. Understand where your recruiting budget goes and identify opportunities for savings.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="space-y-6">
              {/* Recruiter Costs */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                      Recruiter Costs
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-base font-medium">Number of recruiters</Label>
                        <span className="text-2xl font-bold text-blue-600">{numRecruiters}</span>
                      </div>
                      <Slider
                        value={[numRecruiters]}
                        onValueChange={(value) => setNumRecruiters(value[0])}
                        min={1}
                        max={20}
                        step={1}
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-base font-medium">Average salary per recruiter</Label>
                        <span className="text-2xl font-bold text-blue-600">${avgRecruiterSalary.toLocaleString()}</span>
                      </div>
                      <Slider
                        value={[avgRecruiterSalary]}
                        onValueChange={(value) => setAvgRecruiterSalary(value[0])}
                        min={40000}
                        max={120000}
                        step={5000}
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-base font-medium">Benefits % of salary</Label>
                        <span className="text-2xl font-bold text-blue-600">{recruiterBenefitsPercent}%</span>
                      </div>
                      <Slider
                        value={[recruiterBenefitsPercent]}
                        onValueChange={(value) => setRecruiterBenefitsPercent(value[0])}
                        min={0}
                        max={50}
                        step={5}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Job Board Costs */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-50 dark:bg-green-950 rounded-lg">
                      <Briefcase className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                      Job Board Costs
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-base font-medium">LinkedIn posts/year</Label>
                        <span className="text-2xl font-bold text-green-600">{linkedInJobs}</span>
                      </div>
                      <Slider
                        value={[linkedInJobs]}
                        onValueChange={(value) => setLinkedInJobs(value[0])}
                        min={0}
                        max={50}
                        step={1}
                      />
                      <p className="text-xs text-slate-500 mt-1">~$495 per 30-day posting</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-base font-medium">Indeed sponsored jobs/year</Label>
                        <span className="text-2xl font-bold text-green-600">{indeedJobs}</span>
                      </div>
                      <Slider
                        value={[indeedJobs]}
                        onValueChange={(value) => setIndeedJobs(value[0])}
                        min={0}
                        max={100}
                        step={1}
                      />
                      <p className="text-xs text-slate-500 mt-1">~$150 per sponsored post</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-base font-medium">Other job boards/year</Label>
                        <span className="text-2xl font-bold text-green-600">{otherJobBoards}</span>
                      </div>
                      <Slider
                        value={[otherJobBoards]}
                        onValueChange={(value) => setOtherJobBoards(value[0])}
                        min={0}
                        max={50}
                        step={1}
                      />
                      <p className="text-xs text-slate-500 mt-1">~$400 per posting average</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Software Costs */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-50 dark:bg-green-950 rounded-lg">
                      <DollarSign className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                      Software & Tools
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-base font-medium">ATS monthly cost</Label>
                        <span className="text-2xl font-bold text-green-600">${atsMonthly}</span>
                      </div>
                      <Slider
                        value={[atsMonthly]}
                        onValueChange={(value) => setAtsMonthly(value[0])}
                        min={0}
                        max={2000}
                        step={50}
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-base font-medium">Other software/month</Label>
                        <span className="text-2xl font-bold text-green-600">${otherSoftware}</span>
                      </div>
                      <Slider
                        value={[otherSoftware]}
                        onValueChange={(value) => setOtherSoftware(value[0])}
                        min={0}
                        max={1000}
                        step={50}
                      />
                      <p className="text-xs text-slate-500 mt-1">Background checks, assessments, etc.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hiring Metrics */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-orange-50 dark:bg-orange-950 rounded-lg">
                      <Clock className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                      Hiring Metrics
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-base font-medium">Hires per year</Label>
                        <span className="text-2xl font-bold text-orange-600">{hiresPerYear}</span>
                      </div>
                      <Slider
                        value={[hiresPerYear]}
                        onValueChange={(value) => setHiresPerYear(value[0])}
                        min={1}
                        max={200}
                        step={1}
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-base font-medium">Avg time-to-fill (days)</Label>
                        <span className="text-2xl font-bold text-orange-600">{avgTimeToFill}</span>
                      </div>
                      <Slider
                        value={[avgTimeToFill]}
                        onValueChange={(value) => setAvgTimeToFill(value[0])}
                        min={15}
                        max={120}
                        step={5}
                      />
                      <p className="text-xs text-slate-500 mt-1">Industry average: 42 days</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-base font-medium">Avg new hire salary</Label>
                        <span className="text-2xl font-bold text-orange-600">${avgSalary.toLocaleString()}</span>
                      </div>
                      <Slider
                        value={[avgSalary]}
                        onValueChange={(value) => setAvgSalary(value[0])}
                        min={30000}
                        max={200000}
                        step={5000}
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-base font-medium">Background check cost</Label>
                        <span className="text-2xl font-bold text-orange-600">${backgroundChecks}</span>
                      </div>
                      <Slider
                        value={[backgroundChecks]}
                        onValueChange={(value) => setBackgroundChecks(value[0])}
                        min={0}
                        max={200}
                        step={10}
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-base font-medium">Assessment tools per hire</Label>
                        <span className="text-2xl font-bold text-orange-600">${assessmentTools}</span>
                      </div>
                      <Slider
                        value={[assessmentTools]}
                        onValueChange={(value) => setAssessmentTools(value[0])}
                        min={0}
                        max={500}
                        step={25}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div className="space-y-6">
              {/* Main Results */}
              <Card className="border-2 border-blue-600">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-2">
                      Total Annual Hiring Cost
                    </div>
                    <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      ${Math.round(results.totalAnnualCost).toLocaleString()}
                    </div>
                    <div className="text-lg text-slate-600 dark:text-slate-400">
                      ${Math.round(results.totalAnnualCost / 12).toLocaleString()} per month
                    </div>
                  </div>

                  <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Cost Per Hire</div>
                        <div className="text-3xl font-bold text-slate-900 dark:text-white">
                          ${Math.round(results.costPerHire).toLocaleString()}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">% of Salary</div>
                        <div className="text-3xl font-bold text-slate-900 dark:text-white">
                          {Math.round(results.costAsPercentOfSalary)}%
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cost Breakdown */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                    Cost Breakdown
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-800">
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white">Recruiter Costs</div>
                        <div className="text-xs text-slate-500">Salary + benefits</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-slate-900 dark:text-white">
                          ${Math.round(results.totalRecruiterCost).toLocaleString()}
                        </div>
                        <div className="text-xs text-slate-500">
                          {Math.round((results.totalRecruiterCost / results.totalAnnualCost) * 100)}%
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-800">
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white">Job Board Costs</div>
                        <div className="text-xs text-slate-500">LinkedIn, Indeed, other boards</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-slate-900 dark:text-white">
                          ${Math.round(results.totalJobBoardCost).toLocaleString()}
                        </div>
                        <div className="text-xs text-slate-500">
                          {Math.round((results.totalJobBoardCost / results.totalAnnualCost) * 100)}%
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-800">
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white">Software & Tools</div>
                        <div className="text-xs text-slate-500">ATS and other platforms</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-slate-900 dark:text-white">
                          ${Math.round(results.totalSoftwareCost).toLocaleString()}
                        </div>
                        <div className="text-xs text-slate-500">
                          {Math.round((results.totalSoftwareCost / results.totalAnnualCost) * 100)}%
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-800">
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white">Productivity Loss</div>
                        <div className="text-xs text-slate-500">Vacant position costs</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-slate-900 dark:text-white">
                          ${Math.round(results.totalProductivityLoss).toLocaleString()}
                        </div>
                        <div className="text-xs text-slate-500">
                          {Math.round((results.totalProductivityLoss / results.totalAnnualCost) * 100)}%
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-800">
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white">Interview Time</div>
                        <div className="text-xs text-slate-500">Team member time costs</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-slate-900 dark:text-white">
                          ${Math.round(results.interviewTimeCost).toLocaleString()}
                        </div>
                        <div className="text-xs text-slate-500">
                          {Math.round((results.interviewTimeCost / results.totalAnnualCost) * 100)}%
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-800">
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white">Onboarding</div>
                        <div className="text-xs text-slate-500">Training and ramp-up time</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-slate-900 dark:text-white">
                          ${Math.round(results.totalOnboardingCost).toLocaleString()}
                        </div>
                        <div className="text-xs text-slate-500">
                          {Math.round((results.totalOnboardingCost / results.totalAnnualCost) * 100)}%
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white">Additional Costs</div>
                        <div className="text-xs text-slate-500">Background checks, assessments</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-slate-900 dark:text-white">
                          ${Math.round(results.totalAdditionalCosts).toLocaleString()}
                        </div>
                        <div className="text-xs text-slate-500">
                          {Math.round((results.totalAdditionalCosts / results.totalAnnualCost) * 100)}%
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Insights */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Key Insights
                    </h3>
                  </div>
                  <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <p>
                      • Your largest cost is{" "}
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {results.totalRecruiterCost > results.totalProductivityLoss
                          ? "recruiter salaries"
                          : "productivity loss from vacant positions"}
                      </span>
                    </p>
                    <p>
                      • Industry benchmark for cost-per-hire: $4,700 (SHRM 2023)
                    </p>
                    <p>
                      • You're spending{" "}
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {results.costPerHire > 4700 ? "above" : "below"}
                      </span>{" "}
                      the industry average
                    </p>
                    <p>
                      • Reducing time-to-fill by 20 days could save{" "}
                      <span className="font-semibold text-slate-900 dark:text-white">
                        ${Math.round((results.totalProductivityLoss * 0.44)).toLocaleString()}/year
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0">
                <CardContent className="p-6 text-center text-white">
                  <h3 className="text-xl font-bold mb-2">
                    Ready to reduce your hiring costs?
                  </h3>
                  <p className="text-blue-50 mb-4">
                    Jatura helps you hire faster and more efficiently with AI-powered automation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href="/signup">
                      <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                        Start free trial
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </a>
                    <a href="/tools/roi-calculator">
                      <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                        Calculate ROI
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
