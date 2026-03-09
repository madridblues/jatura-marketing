import { useState } from "react";
import {
  Users, Calendar, MessageSquare, BarChart3, Sparkles,
  CheckCircle2, Mail, Phone, Bell
} from "lucide-react";

export default function LandingPlatformTabs() {
  const [activeTab, setActiveTab] = useState('ats');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'ats':
        return (
          <div className="bg-gradient-to-br from-slate-950 to-black rounded-2xl p-8 border border-slate-800">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Senior Full-Stack Engineer</div>
                    <div className="text-xs text-slate-400">San Francisco, CA &bull; Full-time</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="px-3 py-1.5 bg-slate-800 rounded text-xs text-slate-300">14 applicants</div>
                  <div className="px-3 py-1.5 bg-blue-600 rounded text-xs text-white font-medium">Active</div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {[
                  { label: 'Applied', count: 14, color: 'blue' },
                  { label: 'Screening', count: 8, color: 'emerald' },
                  { label: 'Interview', count: 3, color: 'orange' },
                  { label: 'Offer', count: 1, color: 'green' }
                ].map((stage) => (
                  <div key={stage.label} className="bg-slate-900/50 rounded-lg p-4 border border-slate-800">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs font-medium text-slate-400">{stage.label}</div>
                      <div className={`h-6 w-7 bg-${stage.color}-950 text-${stage.color}-400 rounded flex items-center justify-center text-xs font-semibold`}>
                        {stage.count}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-14 bg-slate-900 border border-slate-800 rounded p-2">
                        <div className="h-2 w-full bg-slate-800 rounded mb-1.5"></div>
                        <div className="h-2 w-3/4 bg-slate-800 rounded"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-blue-950/30 to-slate-900/30 rounded-lg p-4 border border-blue-900/30">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-4 w-4 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white mb-1">AI Match Score: 92%</div>
                    <div className="text-xs text-slate-400">Sarah Chen is an excellent match for this role based on skills, experience, and cultural fit indicators.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'scheduling':
        return (
          <div className="bg-gradient-to-br from-slate-950 to-black rounded-2xl p-8 border border-slate-800">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Interview Scheduler</div>
                    <div className="text-xs text-slate-400">Automated scheduling &amp; calendar sync</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <div key={day} className="text-center text-xs font-medium text-slate-500 py-2">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 35 }).map((_, i) => (
                  <div key={i} className={`aspect-square rounded border ${
                    i === 10 || i === 11 || i === 17
                      ? 'bg-emerald-950/50 border-emerald-800'
                      : 'bg-slate-900 border-slate-800'
                  } flex items-center justify-center text-xs text-slate-400`}>
                    {i + 1}
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                {[
                  { time: '10:00 AM', candidate: 'Technical Interview - Sarah Chen', type: 'Video Call' },
                  { time: '2:00 PM', candidate: 'Culture Fit - Michael Ross', type: 'In-person' },
                  { time: '4:30 PM', candidate: 'Final Round - Emma Wilson', type: 'Video Call' }
                ].map((interview, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <div className="w-1 h-12 bg-emerald-500 rounded"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white">{interview.candidate}</div>
                      <div className="text-xs text-slate-400">{interview.time} &bull; {interview.type}</div>
                    </div>
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'communication':
        return (
          <div className="bg-gradient-to-br from-slate-950 to-black rounded-2xl p-8 border border-slate-800">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Multi-Channel Communication</div>
                    <div className="text-xs text-slate-400">SMS, Email &amp; In-app messaging</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { Icon: Mail, label: 'Email', count: 24 },
                  { Icon: Phone, label: 'SMS', count: 12 },
                  { Icon: Bell, label: 'In-app', count: 8 }
                ].map((channel) => (
                  <div key={channel.label} className="bg-slate-900 rounded-lg p-3 border border-slate-800 text-center">
                    <channel.Icon className="h-5 w-5 text-blue-400 mx-auto mb-2" />
                    <div className="text-xs text-slate-400 mb-1">{channel.label}</div>
                    <div className="text-lg font-bold text-white">{channel.count}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                {[
                  { from: 'Sarah Chen', message: 'Thank you for the interview opportunity! I am very excited...', time: '2m ago' },
                  { from: 'Michael Ross', message: 'Confirmed for tomorrow at 2 PM', time: '15m ago' },
                  { from: 'Emma Wilson', message: 'I have a quick question about the role requirements...', time: '1h ago' }
                ].map((msg, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {msg.from.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-sm font-medium text-white">{msg.from}</div>
                        <div className="text-xs text-slate-500">{msg.time}</div>
                      </div>
                      <div className="text-xs text-slate-400 truncate">{msg.message}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="bg-gradient-to-br from-slate-950 to-black rounded-2xl p-8 border border-slate-800">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Hiring Analytics</div>
                    <div className="text-xs text-slate-400">Real-time metrics &amp; insights</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Time-to-Hire', value: '18 days', change: '-26%' },
                  { label: 'Cost per Hire', value: '$3,200', change: '-35%' },
                  { label: 'Offer Accept', value: '87%', change: '+12%' },
                  { label: 'Quality Score', value: '92/100', change: '+8%' }
                ].map((metric) => (
                  <div key={metric.label} className="bg-slate-900 rounded-lg p-4 border border-slate-800">
                    <div className="text-xs text-slate-400 mb-2">{metric.label}</div>
                    <div className="flex items-end justify-between">
                      <div className="text-2xl font-bold text-white">{metric.value}</div>
                      <div className="text-xs font-semibold text-green-400">{metric.change}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900 rounded-lg p-4 border border-slate-800">
                <div className="text-xs text-slate-400 mb-3">Source Effectiveness</div>
                <div className="space-y-2">
                  {[
                    { source: 'LinkedIn', percentage: 75, hires: 12 },
                    { source: 'Referrals', percentage: 60, hires: 8 },
                    { source: 'Job Boards', percentage: 45, hires: 5 }
                  ].map((source) => (
                    <div key={source.source}>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-slate-300">{source.source}</span>
                        <span className="text-slate-400">{source.hires} hires</span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-green-500"
                          style={{ width: `${source.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="grid md:grid-cols-4 gap-3 mb-12">
        {[
          { id: 'ats', label: 'ATS' },
          { id: 'scheduling', label: 'Scheduling' },
          { id: 'communication', label: 'Communication' },
          { id: 'analytics', label: 'Analytics' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-medium border transition ${
              activeTab === tab.id
                ? 'bg-slate-900 text-white border-slate-700'
                : 'bg-transparent text-slate-500 hover:text-slate-300 border-slate-800 hover:border-slate-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="text-center mb-12">
        {activeTab === 'ats' && (
          <>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Track every candidate from first contact to hire
            </h2>
            <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Visual Kanban pipeline, AI-powered screening, and smart candidate matching. Everything you need to manage your hiring pipeline in one place.
            </p>
          </>
        )}
        {activeTab === 'scheduling' && (
          <>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Interview scheduling that actually works
            </h2>
            <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Self-scheduling links, automated reminders, and calendar sync. No more email ping-pong. Candidates book their own interviews in seconds.
            </p>
          </>
        )}
        {activeTab === 'communication' && (
          <>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Reach candidates on email, SMS, and in-app messaging
            </h2>
            <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
              All your conversations in one unified inbox. Send automated sequences, track engagement, and never miss a reply from top candidates.
            </p>
          </>
        )}
        {activeTab === 'analytics' && (
          <>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              See exactly what&apos;s working in your recruiting
            </h2>
            <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Real-time dashboards show time-to-hire, source effectiveness, and team performance. Make data-driven decisions with 50+ pre-built reports.
            </p>
          </>
        )}
      </div>

      {renderTabContent()}
    </>
  );
}
