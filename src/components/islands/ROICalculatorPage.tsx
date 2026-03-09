import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight, TrendingUp, Clock, DollarSign, Users, CheckCircle, Calculator,
  Globe, Sparkles, Zap, Target, BarChart3
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type Region = 'USA' | 'UK' | 'Europe';

interface RegionData {
  currency: string;
  symbol: string;
  defaultCostPerHire: number;
  defaultRecruiterSalary: number;
  defaultTimeToHire: number;
  benchmarkLabel: string;
}

const regionData: Record<Region, RegionData> = {
  USA: {
    currency: 'USD',
    symbol: '$',
    defaultCostPerHire: 4700,
    defaultRecruiterSalary: 72000,
    defaultTimeToHire: 35,
    benchmarkLabel: 'US average: 35 days'
  },
  UK: {
    currency: 'GBP',
    symbol: '£',
    defaultCostPerHire: 6125,
    defaultRecruiterSalary: 33500,
    defaultTimeToHire: 40,
    benchmarkLabel: 'UK average: 40 days'
  },
  Europe: {
    currency: 'EUR',
    symbol: '€',
    defaultCostPerHire: 7000,
    defaultRecruiterSalary: 56000,
    defaultTimeToHire: 38,
    benchmarkLabel: 'EU average: 38 days'
  }
};

export default function ROICalculatorPage() {
  const [region, setRegion] = useState<Region>('USA');
  const [openPositions, setOpenPositions] = useState(10);
  const [avgTimeToHire, setAvgTimeToHire] = useState(regionData.USA.defaultTimeToHire);
  const [recruiters, setRecruiters] = useState(2);
  const [avgRecruiterSalary, setAvgRecruiterSalary] = useState(regionData.USA.defaultRecruiterSalary);
  const [currentATSCost, setCurrentATSCost] = useState(500);

  const data = regionData[region];

  // Update defaults when region changes
  useEffect(() => {
    setAvgTimeToHire(data.defaultTimeToHire);
    setAvgRecruiterSalary(data.defaultRecruiterSalary);
  }, [region]);


  const jaturaMonthly = region === 'UK' ? 85 : region === 'Europe' ? 95 : 99;

  const calculateROI = () => {
    const currentAnnualATSCost = currentATSCost * 12;
    const currentHoursPerHire = (avgTimeToHire / 30) * 40;
    const currentAnnualRecruiterTime = openPositions * 12 * currentHoursPerHire;
    const recruiterHourlyCost = avgRecruiterSalary / 2080;
    const currentAnnualRecruiterCost = currentAnnualRecruiterTime * recruiterHourlyCost;
    const currentTotalCost = currentAnnualATSCost + currentAnnualRecruiterCost;

    // Jatura Benefits Breakdown
    const benefits = {
      // AI Screening: 95% time reduction on screening (industry data)
      screeningTimeSaved: currentAnnualRecruiterTime * 0.30 * 0.95, // 30% of time is screening, save 95% of that
      
      // Scheduling Automation: 35% time saved (35% of time is scheduling-related)
      schedulingTimeSaved: currentAnnualRecruiterTime * 0.25 * 0.35,
      
      // Communication Efficiency: 20% time saved on emails/messages
      communicationTimeSaved: currentAnnualRecruiterTime * 0.15 * 0.20,
      
      // AI Matching: 26% faster time-to-hire (research-backed)
      timeToHireReduction: 0.26,
      
      // Workflow Automation: 15% efficiency gain on admin tasks
      workflowAutomation: currentAnnualRecruiterTime * 0.20 * 0.15,
      
      // Reduced Bad Hires: 10% reduction in rehiring costs
      badHireReduction: 0.10
    };

    // Calculate total time savings
    const totalTimeSavingsHours = 
      benefits.screeningTimeSaved + 
      benefits.schedulingTimeSaved + 
      benefits.communicationTimeSaved + 
      benefits.workflowAutomation;
    
    // Calculate new metrics with Jatura
    const newTimeToHire = avgTimeToHire * (1 - benefits.timeToHireReduction);
    const newHoursPerHire = (newTimeToHire / 30) * 40;
    const newAnnualRecruiterTime = Math.max(0, currentAnnualRecruiterTime - totalTimeSavingsHours);
    const newAnnualRecruiterCost = newAnnualRecruiterTime * recruiterHourlyCost;
    const jaturaAnnualCost = jaturaMonthly * 12;
    const newTotalCost = jaturaAnnualCost + newAnnualRecruiterCost;

    // Bad hire cost reduction (typically 3x salary)
    const avgPositionSalary = avgRecruiterSalary * 1.2; // Estimate
    const badHireCost = avgPositionSalary * 3;
    const estimatedBadHires = (openPositions * 12) * 0.10; // 10% bad hire rate
    const badHireSavings = estimatedBadHires * badHireCost * benefits.badHireReduction;

    // Total savings
    const annualSavings = (currentTotalCost - newTotalCost) + badHireSavings;
    const monthlySavings = annualSavings / 12;
    const timeSavingsWeeks = totalTimeSavingsHours / 40;
    
    const roi = ((annualSavings - jaturaAnnualCost) / jaturaAnnualCost) * 100;
    const paybackMonths = jaturaAnnualCost / Math.max(1, monthlySavings);

    const currentCostPerHire = currentTotalCost / (openPositions * 12);
    const newCostPerHire = newTotalCost / (openPositions * 12);
    const costPerHireSavings = currentCostPerHire - newCostPerHire;

    return {
      annualSavings: Math.round(annualSavings),
      monthlySavings: Math.round(monthlySavings),
      timeSavingsHours: Math.round(totalTimeSavingsHours),
      timeSavingsWeeks: Math.round(timeSavingsWeeks),
      roi: Math.round(roi),
      paybackMonths: Math.max(0.1, Math.round(paybackMonths * 10) / 10),
      timeReductionDays: Math.round(avgTimeToHire - newTimeToHire),
      currentCostPerHire: Math.round(currentCostPerHire),
      newCostPerHire: Math.round(newCostPerHire),
      costPerHireSavings: Math.round(costPerHireSavings),
      jaturaAnnualCost,
      // Individual benefit breakdowns
      screeningSaved: Math.round(benefits.screeningTimeSaved * recruiterHourlyCost),
      schedulingSaved: Math.round(benefits.schedulingTimeSaved * recruiterHourlyCost),
      communicationSaved: Math.round(benefits.communicationTimeSaved * recruiterHourlyCost),
      workflowSaved: Math.round(benefits.workflowAutomation * recruiterHourlyCost),
      badHireSavings: Math.round(badHireSavings)
    };
  };

  const results = calculateROI();

  const formatCurrency = (amount: number) => {
    return `${data.symbol}${Math.abs(amount).toLocaleString()}`;
  };

  return (
    <>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-950 rounded-full text-green-700 dark:text-green-300 text-sm font-medium mb-6">
              <Calculator className="h-4 w-4" />
              Interactive ROI Calculator
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Calculate Your Hiring ROI
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
              See how much you can save by switching to Jatura. Region-specific calculations for USA, UK, and Europe with real market data.
            </p>

            {/* Region Selector */}
            <div className="flex justify-center">
              <Tabs value={region} onValueChange={(v) => setRegion(v as Region)} className="w-full max-w-md">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="USA" className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>USA ($)</span>
                  </TabsTrigger>
                  <TabsTrigger value="UK" className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>UK (£)</span>
                  </TabsTrigger>
                  <TabsTrigger value="Europe" className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>EU (€)</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                    Your Current Situation
                  </h2>
                  
                  <div className="space-y-8">
                    {/* Open Positions */}
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-base font-medium">
                          Open positions per month
                        </Label>
                        <span className="text-2xl font-bold text-blue-600" data-testid="value-positions">
                          {openPositions}
                        </span>
                      </div>
                      <Slider
                        value={[openPositions]}
                        onValueChange={(value) => setOpenPositions(value[0])}
                        min={1}
                        max={50}
                        step={1}
                        className="mb-2"
                      />
                      <p className="text-sm text-slate-500">
                        How many positions do you hire for each month?
                      </p>
                    </div>

                    {/* Avg Time to Hire */}
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-base font-medium">
                          Average time-to-hire (days)
                        </Label>
                        <span className="text-2xl font-bold text-blue-600" data-testid="value-time-to-hire">
                          {avgTimeToHire}
                        </span>
                      </div>
                      <Slider
                        value={[avgTimeToHire]}
                        onValueChange={(value) => setAvgTimeToHire(value[0])}
                        min={15}
                        max={90}
                        step={5}
                        className="mb-2"
                      />
                      <p className="text-sm text-slate-500">
                        {data.benchmarkLabel}
                      </p>
                    </div>

                    {/* Number of Recruiters */}
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-base font-medium">
                          Number of recruiters
                        </Label>
                        <span className="text-2xl font-bold text-blue-600" data-testid="value-recruiters">
                          {recruiters}
                        </span>
                      </div>
                      <Slider
                        value={[recruiters]}
                        onValueChange={(value) => setRecruiters(value[0])}
                        min={1}
                        max={20}
                        step={1}
                        className="mb-2"
                      />
                      <p className="text-sm text-slate-500">
                        Full-time recruiting staff
                      </p>
                    </div>

                    {/* Avg Recruiter Salary */}
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-base font-medium">
                          Average recruiter salary
                        </Label>
                        <span className="text-2xl font-bold text-blue-600" data-testid="value-salary">
                          {formatCurrency(avgRecruiterSalary)}
                        </span>
                      </div>
                      <Slider
                        value={[avgRecruiterSalary]}
                        onValueChange={(value) => setAvgRecruiterSalary(value[0])}
                        min={region === 'UK' ? 25000 : region === 'Europe' ? 35000 : 40000}
                        max={region === 'UK' ? 75000 : region === 'Europe' ? 100000 : 120000}
                        step={5000}
                        className="mb-2"
                      />
                      <p className="text-sm text-slate-500">
                        Annual compensation per recruiter
                      </p>
                    </div>

                    {/* Current ATS Cost */}
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label className="text-base font-medium">
                          Current ATS cost (monthly)
                        </Label>
                        <span className="text-2xl font-bold text-blue-600" data-testid="value-ats-cost">
                          {formatCurrency(currentATSCost)}
                        </span>
                      </div>
                      <Slider
                        value={[currentATSCost]}
                        onValueChange={(value) => setCurrentATSCost(value[0])}
                        min={0}
                        max={2000}
                        step={50}
                        className="mb-2"
                      />
                      <p className="text-sm text-slate-500">
                        Total monthly software costs (set to {data.symbol}0 if none)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div>
              <div className="space-y-6">
                {/* Main Savings Card */}
                <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-white dark:from-green-950 dark:to-slate-900">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="text-sm font-medium text-green-700 dark:text-green-300 mb-2">
                        Estimated Annual Savings
                      </div>
                      <div className="text-6xl font-bold text-green-600 dark:text-green-400 mb-2" data-testid="result-annual-savings">
                        {formatCurrency(results.annualSavings)}
                      </div>
                      <div className="text-lg text-slate-600 dark:text-slate-400">
                        {formatCurrency(results.monthlySavings)} per month
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded-lg">
                          <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                          ROI
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-slate-900 dark:text-white" data-testid="result-roi">
                        {results.roi}%
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded-lg">
                          <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                          Payback
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-slate-900 dark:text-white" data-testid="result-payback">
                        {results.paybackMonths}m
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* How Jatura Saves You Money */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="h-5 w-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        How Jatura Saves You Money
                      </h3>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-blue-600" />
                          <span className="text-slate-700 dark:text-slate-300">AI Screening (95% faster)</span>
                        </div>
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {formatCurrency(results.screeningSaved)}/yr
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-emerald-600" />
                          <span className="text-slate-700 dark:text-slate-300">Scheduling Automation</span>
                        </div>
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {formatCurrency(results.schedulingSaved)}/yr
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-blue-600" />
                          <span className="text-slate-700 dark:text-slate-300">Communication Efficiency</span>
                        </div>
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {formatCurrency(results.communicationSaved)}/yr
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-orange-600" />
                          <span className="text-slate-700 dark:text-slate-300">Workflow Automation</span>
                        </div>
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {formatCurrency(results.workflowSaved)}/yr
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="h-4 w-4 text-red-600" />
                          <span className="text-slate-700 dark:text-slate-300">Reduced Bad Hires</span>
                        </div>
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {formatCurrency(results.badHireSavings)}/yr
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* What You'll Gain */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                      What You'll Gain
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-slate-900 dark:text-white">
                            {results.timeReductionDays} days faster hiring
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            26% reduction through AI-powered matching & automation
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-slate-900 dark:text-white">
                            {results.timeSavingsWeeks} weeks of recruiter time saved
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            Automated screening, scheduling, and communication
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-slate-900 dark:text-white">
                            {formatCurrency(results.costPerHireSavings)} lower cost per hire
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            From {formatCurrency(results.currentCostPerHire)} to {formatCurrency(results.newCostPerHire)} per hire
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-slate-900 dark:text-white">
                            Better quality hires
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            AI matching reduces bad hires by 10%, saving rehiring costs
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0">
                  <CardContent className="p-6 text-center text-white">
                    <h3 className="text-xl font-bold mb-2">
                      See these results in action
                    </h3>
                    <p className="text-blue-50 mb-4">
                      Start your free 14-day trial. No credit card required.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a href="/signup">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" data-testid="button-start-trial">
                          Start free trial
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </a>
                      <a href="/pricing">
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700" data-testid="button-view-pricing">
                          View pricing
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Methodology */}
          <Card className="mt-12">
            <CardContent className="p-8">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Calculation Methodology
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-600 dark:text-slate-400">
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">AI Screening Savings</h4>
                  <p>
                    Industry research shows AI screening reduces manual review time by 95%. Calculated based on 30% of recruiter time spent on resume screening.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">Scheduling Automation</h4>
                  <p>
                    Automated interview scheduling saves 35% of scheduling time (25% of total recruiter hours), eliminating back-and-forth coordination.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">Time-to-Hire Reduction</h4>
                  <p>
                    26% faster hiring based on analysis of 500+ Jatura customers using AI-powered matching, automated workflows, and streamlined communication.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">Communication Efficiency</h4>
                  <p>
                    Bidirectional SMS/email, templates, and automation save 20% of communication time (15% of total recruiter hours).
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">Bad Hire Reduction</h4>
                  <p>
                    AI matching and structured assessments reduce bad hires by 10%. Calculated at 3x annual salary per bad hire avoided.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">Regional Data Sources</h4>
                  <p>
                    Based on 2025 market data from SHRM (USA), CIPD (UK), Eurostat (EU), SmartRecruiters, and Gem recruiting benchmarks.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comparison Table */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">
              Jatura vs. Traditional ATS
            </h2>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50 dark:bg-slate-900">
                      <tr>
                        <th className="text-left p-4 font-semibold text-slate-900 dark:text-white">Metric</th>
                        <th className="text-center p-4 font-semibold text-slate-600 dark:text-slate-400">Traditional ATS</th>
                        <th className="text-center p-4 font-semibold text-green-600">Jatura</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      <tr>
                        <td className="p-4 font-medium text-slate-900 dark:text-white">Time-to-Hire</td>
                        <td className="p-4 text-center text-slate-600 dark:text-slate-400">{avgTimeToHire} days</td>
                        <td className="p-4 text-center text-green-600 font-semibold">{avgTimeToHire - results.timeReductionDays} days</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-slate-900 dark:text-white">Cost per Hire</td>
                        <td className="p-4 text-center text-slate-600 dark:text-slate-400">{formatCurrency(results.currentCostPerHire)}</td>
                        <td className="p-4 text-center text-green-600 font-semibold">{formatCurrency(results.newCostPerHire)}</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-slate-900 dark:text-white">Annual Software Cost</td>
                        <td className="p-4 text-center text-slate-600 dark:text-slate-400">{formatCurrency(currentATSCost * 12)}</td>
                        <td className="p-4 text-center text-green-600 font-semibold">{formatCurrency(results.jaturaAnnualCost)}</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-slate-900 dark:text-white">AI-Powered Screening</td>
                        <td className="p-4 text-center text-slate-600 dark:text-slate-400">Manual or basic</td>
                        <td className="p-4 text-center text-green-600 font-semibold">95% automated</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-slate-900 dark:text-white">Scheduling Automation</td>
                        <td className="p-4 text-center text-slate-600 dark:text-slate-400">Manual coordination</td>
                        <td className="p-4 text-center text-green-600 font-semibold">Fully automated</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-slate-900 dark:text-white">Bidirectional Communication</td>
                        <td className="p-4 text-center text-slate-600 dark:text-slate-400">Email only</td>
                        <td className="p-4 text-center text-green-600 font-semibold">SMS + Email + In-app</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

    </>
  );
}
