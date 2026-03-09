import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Search, Mail, Key, ArrowRight, CheckCircle } from "lucide-react";

const API_BASE = 'https://app.jatura.com';

export default function CheckStatusPage() {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [activeTab, setActiveTab] = useState<"email" | "token">("email");
  const [verificationStep, setVerificationStep] = useState<"email" | "code">("email");

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(`${API_BASE}/api/send-status-verification-code`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || "Failed to send verification code");
        return;
      }

      setSuccess("Verification code sent! Check your email.");
      setVerificationStep("code");
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE}/api/verify-status-code`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code: verificationCode }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to verify code");
        return;
      }

      if (data.applications && data.applications.length > 0) {
        sessionStorage.setItem('statusLookupResults', JSON.stringify(data.applications));
        window.location.href = "/status-results";
      } else {
        setError("No applications found");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleTokenLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (token.trim()) {
      window.location.href = `/apply/status/${token.trim()}`;
    }
  };

  const handleBackToEmail = () => {
    setVerificationStep("email");
    setVerificationCode("");
    setError("");
    setSuccess("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-950 rounded-full mb-4">
            <Search className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">Check Application Status</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Track your application progress and view updates
          </p>
        </div>

        <Card className="shadow-xl border-slate-200 dark:border-slate-700">
          <CardHeader>
            <div className="flex gap-4 mb-4">
              <button
                onClick={() => {
                  setActiveTab("email");
                  setVerificationStep("email");
                  setError("");
                  setSuccess("");
                }}
                className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                  activeTab === "email"
                    ? "bg-blue-100 text-blue-700 border-2 border-blue-300 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-700"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400"
                }`}
                data-testid="button-tab-email"
              >
                <Mail className="w-4 h-4 inline mr-2" />
                Search by Email
              </button>
              <button
                onClick={() => {
                  setActiveTab("token");
                  setError("");
                  setSuccess("");
                }}
                className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                  activeTab === "token"
                    ? "bg-blue-100 text-blue-700 border-2 border-blue-300 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-700"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400"
                }`}
                data-testid="button-tab-token"
              >
                <Key className="w-4 h-4 inline mr-2" />
                Use Status Link
              </button>
            </div>

            <CardTitle>
              {activeTab === "email"
                ? verificationStep === "email"
                  ? "Find Your Applications"
                  : "Enter Verification Code"
                : "Enter Your Status Link"}
            </CardTitle>
            <CardDescription>
              {activeTab === "email"
                ? verificationStep === "email"
                  ? "Enter the email address you used when applying"
                  : "Check your email for the 6-digit verification code"
                : "Paste the status link from your confirmation email"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="mb-4 bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                <AlertDescription className="text-green-800 dark:text-green-300">{success}</AlertDescription>
              </Alert>
            )}

            {activeTab === "email" ? (
              <>
                {verificationStep === "email" ? (
                  <form onSubmit={handleSendCode} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12 text-base"
                        data-testid="input-email"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-12 text-base"
                      disabled={isLoading}
                      data-testid="button-send-code"
                    >
                      {isLoading ? (
                        "Sending Code..."
                      ) : (
                        <>
                          Send Verification Code
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <form onSubmit={handleVerifyCode} className="space-y-4">
                    <div>
                      <label htmlFor="code" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Verification Code
                      </label>
                      <Input
                        id="code"
                        type="text"
                        placeholder="Enter 6-digit code"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                        required
                        maxLength={6}
                        className="h-12 text-base text-center text-2xl font-bold tracking-widest"
                        data-testid="input-verification-code"
                      />
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 text-center">
                        Code sent to {email}
                      </p>
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-12 text-base"
                      disabled={isLoading || verificationCode.length !== 6}
                      data-testid="button-verify-code"
                    >
                      {isLoading ? (
                        "Verifying..."
                      ) : (
                        <>
                          Verify & View Applications
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBackToEmail}
                      className="w-full h-12 text-base"
                      data-testid="button-back-to-email"
                    >
                      Back to Email Entry
                    </Button>
                  </form>
                )}
              </>
            ) : (
              <form onSubmit={handleTokenLookup} className="space-y-4">
                <div>
                  <label htmlFor="token" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Status Token or Link
                  </label>
                  <Input
                    id="token"
                    type="text"
                    placeholder="Enter your status token or paste the full link"
                    value={token}
                    onChange={(e) => {
                      const value = e.target.value;
                      const match = value.match(/\/apply\/status\/([a-f0-9]+)/);
                      setToken(match ? match[1] : value);
                    }}
                    required
                    className="h-12 text-base font-mono"
                    data-testid="input-token"
                  />
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    You can find this in your confirmation email
                  </p>
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 text-base"
                  data-testid="button-lookup-token"
                >
                  View Application Status
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            )}

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg dark:bg-blue-950 dark:border-blue-800">
              <p className="text-sm text-blue-900 dark:text-blue-200">
                <strong>Tip:</strong> {activeTab === "email"
                  ? "We'll send a verification code to your email to ensure security before showing your applications."
                  : "Check your email for the confirmation message you received when you applied. It contains a direct link to track your application status."}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
