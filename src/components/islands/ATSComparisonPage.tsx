import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Search, Filter, CheckCircle, X, ArrowUpDown, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ATSVendor {
  id: string;
  name: string;
  companySize: string[];
  industries: string[];
  pricing: string;
  priceRange: string;
  startingPrice: number | null;
  g2Rating: number;
  g2Reviews: string;
  capterraRating: number;
  capterraReviews: string;
  criticScore?: string;
  features: {
    aiScreening: boolean;
    interviewScheduling: boolean;
    careerSite: boolean;
    crm: boolean;
    hris: boolean;
    mobileApp: boolean;
    diversityAnalytics: boolean;
    customScorecard: boolean;
  };
  integrations: string;
  bestFor: string;
  website: string;
}

const vendors: ATSVendor[] = [
  {
    id: "jatura",
    name: "Jatura",
    companySize: ["Small", "Mid-Market"],
    industries: ["All Industries", "Technology", "Professional Services", "Retail"],
    pricing: "$99/month",
    priceRange: "<$200",
    startingPrice: 99,
    g2Rating: 4.9,
    g2Reviews: "247",
    capterraRating: 4.9,
    capterraReviews: "128",
    criticScore: "Editor's Choice",
    features: {
      aiScreening: true,
      interviewScheduling: true,
      careerSite: true,
      crm: true,
      hris: false,
      mobileApp: true,
      diversityAnalytics: true,
      customScorecard: true,
    },
    integrations: "Email, Calendar, SendGrid, Twilio, OpenAI",
    bestFor: "Startups and growing companies (1-500 employees) seeking AI-powered hiring automation at startup-friendly pricing",
    website: "/signup"
  },
  {
    id: "greenhouse",
    name: "Greenhouse",
    companySize: ["Mid-Market", "Enterprise"],
    industries: ["Technology", "Professional Services", "Enterprise"],
    pricing: "Custom pricing",
    priceRange: "Enterprise",
    startingPrice: 6000,
    g2Rating: 4.4,
    g2Reviews: "1,000+",
    capterraRating: 4.5,
    capterraReviews: "738",
    criticScore: "#1 ATS on G2 2025",
    features: {
      aiScreening: true,
      interviewScheduling: true,
      careerSite: true,
      crm: false,
      hris: false,
      mobileApp: true,
      diversityAnalytics: true,
      customScorecard: true,
    },
    integrations: "800+ via marketplace, Workday, ADP, LinkedIn, Slack",
    bestFor: "Mid-market to enterprise (100-5,000+ employees) with structured hiring processes and data-driven recruiting teams",
    website: "https://greenhouse.com"
  },
  {
    id: "lever",
    name: "Lever",
    companySize: ["Mid-Market", "Enterprise"],
    industries: ["Technology", "Professional Services", "Staffing"],
    pricing: "Custom pricing",
    priceRange: "Enterprise",
    startingPrice: 3500,
    g2Rating: 4.1,
    g2Reviews: "1,000+",
    capterraRating: 4.5,
    capterraReviews: "434",
    features: {
      aiScreening: true,
      interviewScheduling: true,
      careerSite: true,
      crm: true,
      hris: false,
      mobileApp: true,
      diversityAnalytics: true,
      customScorecard: true,
    },
    integrations: "LinkedIn, Workday, SAP, Slack, G Suite",
    bestFor: "Fast-growing tech companies (50-1,000 employees) needing combined ATS + CRM with strong candidate relationship management",
    website: "https://lever.co"
  },
  {
    id: "workable",
    name: "Workable",
    companySize: ["Small", "Mid-Market"],
    industries: ["All Industries", "Technology", "Retail"],
    pricing: "$299-349/month",
    priceRange: "$200-500",
    startingPrice: 299,
    g2Rating: 4.3,
    g2Reviews: "950+",
    capterraRating: 4.4,
    capterraReviews: "620",
    features: {
      aiScreening: true,
      interviewScheduling: true,
      careerSite: true,
      crm: false,
      hris: true,
      mobileApp: true,
      diversityAnalytics: true,
      customScorecard: true,
    },
    integrations: "LinkedIn, Indeed, Glassdoor, Slack, 200+ job boards",
    bestFor: "Small to mid-sized businesses (10-250 employees) with multi-location or international hiring needs",
    website: "https://workable.com"
  },
  {
    id: "bamboohr",
    name: "BambooHR",
    companySize: ["Small", "Mid-Market"],
    industries: ["All Industries"],
    pricing: "$250+/month",
    priceRange: "$200-500",
    startingPrice: 250,
    g2Rating: 4.5,
    g2Reviews: "1,500+",
    capterraRating: 4.6,
    capterraReviews: "2,600+",
    criticScore: "PCMag 4.5/5",
    features: {
      aiScreening: false,
      interviewScheduling: true,
      careerSite: false,
      crm: false,
      hris: true,
      mobileApp: true,
      diversityAnalytics: false,
      customScorecard: false,
    },
    integrations: "Payroll providers, background checks, benefits admin",
    bestFor: "SMBs (10-500 employees) seeking all-in-one HRIS with basic recruiting (best if you prioritize HR over advanced ATS)",
    website: "https://bamboohr.com"
  },
  {
    id: "jazzhr",
    name: "JazzHR",
    companySize: ["Small"],
    industries: ["All Industries", "Startups"],
    pricing: "$75-450/month",
    priceRange: "<$200",
    startingPrice: 75,
    g2Rating: 4.2,
    g2Reviews: "580+",
    capterraRating: 4.4,
    capterraReviews: "750+",
    features: {
      aiScreening: false,
      interviewScheduling: true,
      careerSite: false,
      crm: false,
      hris: false,
      mobileApp: true,
      diversityAnalytics: false,
      customScorecard: false,
    },
    integrations: "ADP, Indeed, LinkedIn, QuickBooks, Zapier",
    bestFor: "Small businesses and startups (1-50 employees) with straightforward recruiting needs on a tight budget",
    website: "https://jazzhr.com"
  },
  {
    id: "smartrecruiters",
    name: "SmartRecruiters",
    companySize: ["Mid-Market", "Enterprise"],
    industries: ["Technology", "Retail", "Healthcare"],
    pricing: "Custom pricing",
    priceRange: "Enterprise",
    startingPrice: null,
    g2Rating: 4.2,
    g2Reviews: "820+",
    capterraRating: 4.1,
    capterraReviews: "320+",
    features: {
      aiScreening: true,
      interviewScheduling: true,
      careerSite: true,
      crm: false,
      hris: false,
      mobileApp: true,
      diversityAnalytics: true,
      customScorecard: true,
    },
    integrations: "600+ apps, LinkedIn, Indeed, Workday, SAP",
    bestFor: "Mid-market to enterprise (250-10,000+ employees) with extensive marketplace integration and global hiring needs",
    website: "https://smartrecruiters.com"
  },
  {
    id: "icims",
    name: "iCIMS",
    companySize: ["Enterprise"],
    industries: ["Healthcare", "Retail", "Manufacturing", "Finance", "Government"],
    pricing: "Custom pricing",
    priceRange: "Enterprise",
    startingPrice: null,
    g2Rating: 4.1,
    g2Reviews: "600+",
    capterraRating: 3.9,
    capterraReviews: "68",
    features: {
      aiScreening: true,
      interviewScheduling: true,
      careerSite: true,
      crm: false,
      hris: false,
      mobileApp: true,
      diversityAnalytics: true,
      customScorecard: true,
    },
    integrations: "800+ integrations, Workday, ADP, Oracle, SAP",
    bestFor: "Large enterprises (1,000-50,000+ employees) with complex compliance, multi-location, and high-volume hiring needs",
    website: "https://icims.com"
  },
  {
    id: "recruitee",
    name: "Recruitee",
    companySize: ["Small", "Mid-Market"],
    industries: ["Technology", "Services", "Retail"],
    pricing: "$199-249/month",
    priceRange: "<$200",
    startingPrice: 199,
    g2Rating: 4.5,
    g2Reviews: "570+",
    capterraRating: 4.6,
    capterraReviews: "210+",
    features: {
      aiScreening: false,
      interviewScheduling: true,
      careerSite: true,
      crm: false,
      hris: false,
      mobileApp: true,
      diversityAnalytics: false,
      customScorecard: true,
    },
    integrations: "Job boards, LinkedIn, Indeed, Google Calendar",
    bestFor: "Growing teams (10-200 employees) in Europe needing collaborative hiring with customizable talent pipeline templates",
    website: "https://recruitee.com"
  },
  {
    id: "breezyhr",
    name: "Breezy HR",
    companySize: ["Small"],
    industries: ["All Industries", "Startups"],
    pricing: "$143/month",
    priceRange: "<$200",
    startingPrice: 143,
    g2Rating: 4.3,
    g2Reviews: "520+",
    capterraRating: 4.5,
    capterraReviews: "380+",
    features: {
      aiScreening: false,
      interviewScheduling: true,
      careerSite: false,
      crm: false,
      hris: false,
      mobileApp: true,
      diversityAnalytics: false,
      customScorecard: false,
    },
    integrations: "Zapier, LinkedIn, Indeed, Slack",
    bestFor: "Startups and small teams (1-30 employees) with unlimited hiring needs on a budget-friendly flat rate",
    website: "https://breezyhr.com"
  },
  {
    id: "recruitcrm",
    name: "Recruit CRM",
    companySize: ["Small", "Mid-Market"],
    industries: ["Staffing", "Recruitment Agencies"],
    pricing: "$85/user/month",
    priceRange: "<$200",
    startingPrice: 85,
    g2Rating: 4.6,
    g2Reviews: "290+",
    capterraRating: 4.7,
    capterraReviews: "180+",
    features: {
      aiScreening: true,
      interviewScheduling: true,
      careerSite: false,
      crm: true,
      hris: false,
      mobileApp: true,
      diversityAnalytics: false,
      customScorecard: false,
    },
    integrations: "5000+ via Zapier, LinkedIn, email platforms",
    bestFor: "Staffing agencies and third-party recruitment firms (5-100 recruiters) needing CRM + ATS in one platform",
    website: "https://recruitcrm.io"
  },
  {
    id: "togglhire",
    name: "Toggl Hire",
    companySize: ["Small", "Mid-Market"],
    industries: ["Technology", "All Industries"],
    pricing: "$20-469/month",
    priceRange: "<$200",
    startingPrice: 20,
    g2Rating: 4.4,
    g2Reviews: "240+",
    capterraRating: 4.5,
    capterraReviews: "120+",
    features: {
      aiScreening: false,
      interviewScheduling: true,
      careerSite: false,
      crm: false,
      hris: false,
      mobileApp: true,
      diversityAnalytics: false,
      customScorecard: true,
    },
    integrations: "Zapier, Slack, Google Calendar",
    bestFor: "Companies (5-250 employees) prioritizing skills-based hiring with pre-employment assessments and objective screening",
    website: "https://toggl.com/hire"
  },
  {
    id: "bullhorn",
    name: "Bullhorn",
    companySize: ["Mid-Market", "Enterprise"],
    industries: ["Staffing", "Executive Search"],
    pricing: "Custom pricing",
    priceRange: "Enterprise",
    startingPrice: null,
    g2Rating: 4.2,
    g2Reviews: "2,100+",
    capterraRating: 4.1,
    capterraReviews: "580+",
    criticScore: "PCMag 4.5/5",
    features: {
      aiScreening: true,
      interviewScheduling: true,
      careerSite: false,
      crm: true,
      hris: false,
      mobileApp: true,
      diversityAnalytics: false,
      customScorecard: true,
    },
    integrations: "LinkedIn, job boards, email, accounting software",
    bestFor: "Mid-sized to large staffing agencies (20-500+ recruiters) with back-office integration, payroll, and placement tracking needs",
    website: "https://bullhorn.com"
  },
  {
    id: "workday",
    name: "Workday",
    companySize: ["Enterprise"],
    industries: ["Finance", "Healthcare", "Higher Education", "Government"],
    pricing: "Custom pricing",
    priceRange: "Enterprise",
    startingPrice: null,
    g2Rating: 4.0,
    g2Reviews: "1,400+",
    capterraRating: 4.4,
    capterraReviews: "1,300+",
    features: {
      aiScreening: true,
      interviewScheduling: true,
      careerSite: true,
      crm: false,
      hris: true,
      mobileApp: true,
      diversityAnalytics: true,
      customScorecard: true,
    },
    integrations: "SAP, Oracle, Salesforce, ServiceNow",
    bestFor: "Large enterprises (5,000-100,000+ employees) needing full HCM suite with recruiting, HR, payroll, and talent management",
    website: "https://workday.com"
  },
  {
    id: "jobvite",
    name: "Jobvite",
    companySize: ["Mid-Market", "Enterprise"],
    industries: ["Technology", "Healthcare", "Financial Services"],
    pricing: "Custom pricing",
    priceRange: "Enterprise",
    startingPrice: null,
    g2Rating: 4.0,
    g2Reviews: "430+",
    capterraRating: 4.1,
    capterraReviews: "190+",
    features: {
      aiScreening: true,
      interviewScheduling: true,
      careerSite: true,
      crm: false,
      hris: false,
      mobileApp: true,
      diversityAnalytics: true,
      customScorecard: true,
    },
    integrations: "LinkedIn, Indeed, Facebook, HRIS systems",
    bestFor: "Mid-market companies (100-1,000 employees) needing end-to-end talent acquisition suite with recruitment marketing focus",
    website: "https://jobvite.com"
  },
  {
    id: "ashby",
    name: "Ashby",
    companySize: ["Mid-Market", "Enterprise"],
    industries: ["Technology", "Startups", "SaaS"],
    pricing: "$300+/month",
    priceRange: "$200-500",
    startingPrice: 300,
    g2Rating: 4.7,
    g2Reviews: "340+",
    capterraRating: 4.5,
    capterraReviews: "12",
    criticScore: "Editor's Choice",
    features: {
      aiScreening: true,
      interviewScheduling: true,
      careerSite: true,
      crm: true,
      hris: false,
      mobileApp: true,
      diversityAnalytics: true,
      customScorecard: true,
    },
    integrations: "Slack, Greenhouse (migration), LinkedIn, Calendly, Gem",
    bestFor: "Data-driven mid-market companies (50-1,000 employees) wanting best-in-class analytics, modern UX, and all-in-one platform",
    website: "https://ashbyhq.com"
  },
  {
    id: "taleo",
    name: "Oracle Taleo",
    companySize: ["Enterprise"],
    industries: ["Healthcare", "Retail", "Manufacturing", "Government"],
    pricing: "Custom pricing",
    priceRange: "Enterprise",
    startingPrice: null,
    g2Rating: 3.7,
    g2Reviews: "900+",
    capterraRating: 3.8,
    capterraReviews: "260+",
    features: {
      aiScreening: false,
      interviewScheduling: true,
      careerSite: true,
      crm: false,
      hris: true,
      mobileApp: true,
      diversityAnalytics: true,
      customScorecard: true,
    },
    integrations: "Oracle HCM, Oracle ERP, LinkedIn, job boards",
    bestFor: "Large enterprises (10,000+ employees) already using Oracle ecosystem with complex, compliance-heavy hiring processes",
    website: "https://oracle.com/taleo"
  },
  {
    id: "teamtailor",
    name: "Teamtailor",
    companySize: ["Small", "Mid-Market"],
    industries: ["Technology", "Retail", "Professional Services"],
    pricing: "$249+/month",
    priceRange: "$200-500",
    startingPrice: 249,
    g2Rating: 4.6,
    g2Reviews: "470+",
    capterraRating: 4.7,
    capterraReviews: "95+",
    features: {
      aiScreening: false,
      interviewScheduling: true,
      careerSite: true,
      crm: false,
      hris: false,
      mobileApp: true,
      diversityAnalytics: false,
      customScorecard: true,
    },
    integrations: "Slack, LinkedIn, Indeed, job boards, Zapier",
    bestFor: "European companies (10-500 employees) prioritizing employer branding with beautiful career sites and candidate experience",
    website: "https://teamtailor.com"
  },
];

export default function ATSComparisonPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [companySizeFilter, setCompanySizeFilter] = useState<string>("all");
  const [priceRangeFilter, setPriceRangeFilter] = useState<string>("all");
  const [industryFilter, setIndustryFilter] = useState<string>("all");
  const [featureFilters, setFeatureFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("name");


  const toggleFeatureFilter = (feature: string) => {
    setFeatureFilters(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const filteredAndSortedVendors = useMemo(() => {
    let filtered = vendors.filter(vendor => {
      // Search filter
      if (searchQuery && !vendor.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Company size filter
      if (companySizeFilter !== "all" && !vendor.companySize.includes(companySizeFilter)) {
        return false;
      }

      // Price range filter
      if (priceRangeFilter !== "all" && vendor.priceRange !== priceRangeFilter) {
        return false;
      }

      // Industry filter
      if (industryFilter !== "all" && !vendor.industries.includes(industryFilter)) {
        return false;
      }

      // Feature filters
      if (featureFilters.length > 0) {
        const hasAllFeatures = featureFilters.every(feature => {
          return vendor.features[feature as keyof typeof vendor.features];
        });
        if (!hasAllFeatures) return false;
      }

      return true;
    });

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "price-low") {
        const aPrice = a.startingPrice || Infinity;
        const bPrice = b.startingPrice || Infinity;
        return aPrice - bPrice;
      } else if (sortBy === "price-high") {
        const aPrice = a.startingPrice || 0;
        const bPrice = b.startingPrice || 0;
        return bPrice - aPrice;
      }
      return 0;
    });

    return filtered;
  }, [searchQuery, companySizeFilter, priceRangeFilter, industryFilter, featureFilters, sortBy]);

  const allIndustries = Array.from(new Set(vendors.flatMap(v => v.industries))).sort();

  return (
    <>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              ATS Vendor Comparison Matrix 2025
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-6">
              Compare 18 leading applicant tracking systems side-by-side with verified G2 and Capterra ratings. Filter by price, company size, features, and industry to find your perfect match.
            </p>
            <p className="text-sm text-slate-500">
              Updated November 2025 • Data from vendor websites and verified user reviews
            </p>
          </div>

          {/* Filters */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Filter & Search
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    type="text"
                    placeholder="Search vendors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Company Size */}
                <Select value={companySizeFilter} onValueChange={setCompanySizeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Company Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sizes</SelectItem>
                    <SelectItem value="Small">Small (1-50)</SelectItem>
                    <SelectItem value="Mid-Market">Mid-Market (50-500)</SelectItem>
                    <SelectItem value="Enterprise">Enterprise (500+)</SelectItem>
                  </SelectContent>
                </Select>

                {/* Price Range */}
                <Select value={priceRangeFilter} onValueChange={setPriceRangeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="<$200">Under $200/month</SelectItem>
                    <SelectItem value="$200-500">$200-500/month</SelectItem>
                    <SelectItem value="Enterprise">Enterprise (Custom)</SelectItem>
                  </SelectContent>
                </Select>

                {/* Industry */}
                <Select value={industryFilter} onValueChange={setIndustryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Industries</SelectItem>
                    {allIndustries.map(industry => (
                      <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Feature Filters */}
              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                  Required Features:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { key: "aiScreening", label: "AI Screening" },
                    { key: "crm", label: "Built-in CRM" },
                    { key: "hris", label: "HRIS Integration" },
                    { key: "careerSite", label: "Career Site Builder" },
                    { key: "diversityAnalytics", label: "Diversity Analytics" },
                    { key: "customScorecard", label: "Custom Scorecards" },
                  ].map(({ key, label }) => (
                    <Badge
                      key={key}
                      variant={featureFilters.includes(key) ? "default" : "outline"}
                      className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
                      onClick={() => toggleFeatureFilter(key)}
                    >
                      {label}
                      {featureFilters.includes(key) && (
                        <X className="ml-1 h-3 w-3" />
                      )}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Showing {filteredAndSortedVendors.length} of {vendors.length} vendors
                </p>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <ArrowUpDown className="mr-2 h-4 w-4" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Sort by Name</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-4">
            {filteredAndSortedVendors.map((vendor) => (
              <Card key={vendor.id} className={vendor.id === "jatura" ? "border-2 border-blue-600" : ""}>
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-12 gap-6">
                    {/* Vendor Info */}
                    <div className="lg:col-span-3">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {vendor.name}
                        </h3>
                        {vendor.id === "jatura" && (
                          <Badge variant="default" className="bg-blue-600">
                            You're here
                          </Badge>
                        )}
                      </div>
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {vendor.pricing}
                      </div>
                      
                      {/* Ratings */}
                      <div className="space-y-2 mb-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                            <span className="text-sm font-semibold text-slate-900 dark:text-white">
                              {vendor.g2Rating}
                            </span>
                          </div>
                          <span className="text-xs text-slate-500">G2 ({vendor.g2Reviews})</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-3.5 w-3.5 fill-blue-500 text-blue-500" />
                            <span className="text-sm font-semibold text-slate-900 dark:text-white">
                              {vendor.capterraRating}
                            </span>
                          </div>
                          <span className="text-xs text-slate-500">Capterra ({vendor.capterraReviews})</span>
                        </div>
                        {vendor.criticScore && (
                          <Badge variant="secondary" className="text-xs">
                            {vendor.criticScore}
                          </Badge>
                        )}
                      </div>

                      <div className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                        <span className="font-semibold text-slate-900 dark:text-white">Best for:</span> {vendor.bestFor}
                      </div>
                      {vendor.id === "jatura" ? (
                        <a href={vendor.website}>
                          <Button size="sm" className="w-full">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </a>
                      ) : (
                        <a href={vendor.website} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="w-full">
                            Learn More
                          </Button>
                        </a>
                      )}
                    </div>

                    {/* Features */}
                    <div className="lg:col-span-5">
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {Object.entries(vendor.features).map(([key, value]) => (
                          <div key={key} className="flex items-center gap-2">
                            {value ? (
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            ) : (
                              <X className="h-4 w-4 text-slate-300 dark:text-slate-700 flex-shrink-0" />
                            )}
                            <span className={`text-sm ${value ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-600'}`}>
                              {key === 'aiScreening' && 'AI Screening'}
                              {key === 'interviewScheduling' && 'Interview Scheduling'}
                              {key === 'careerSite' && 'Career Site'}
                              {key === 'crm' && 'CRM'}
                              {key === 'hris' && 'HRIS'}
                              {key === 'mobileApp' && 'Mobile App'}
                              {key === 'diversityAnalytics' && 'Diversity Analytics'}
                              {key === 'customScorecard' && 'Custom Scorecards'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="lg:col-span-4">
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                          Company Size
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {vendor.companySize.map(size => (
                            <Badge key={size} variant="secondary" className="text-xs">
                              {size}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                          Industries
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {vendor.industries.slice(0, 3).map(industry => (
                            <Badge key={industry} variant="outline" className="text-xs">
                              {industry}
                            </Badge>
                          ))}
                          {vendor.industries.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{vendor.industries.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                          Integrations
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {vendor.integrations}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredAndSortedVendors.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                  No vendors match your filters
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setCompanySizeFilter("all");
                    setPriceRangeFilter("all");
                    setIndustryFilter("all");
                    setFeatureFilters([]);
                  }}
                >
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          )}

          {/* CTA */}
          <Card className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 border-0">
            <CardContent className="p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-3">
                Ready to simplify your hiring?
              </h3>
              <p className="text-blue-50 mb-6 text-lg max-w-2xl mx-auto">
                Jatura combines the power of enterprise ATS platforms with the simplicity and affordability small to mid-market companies need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/signup">
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
        </div>
      </div>

    </>
  );
}
