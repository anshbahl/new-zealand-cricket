
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, TrendingUp, Clock, Users, Target } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const InsightsDashboard = () => {
  const navigate = useNavigate();
  const [timeframe, setTimeframe] = useState("90");

  // Mock data for insights
  const keyMetrics = {
    avgSessionLength: 32.5,
    avgTeacherEngagement: 78,
    mostActiveRegion: "Auckland",
    sessionGrowthRate: 12.4
  };

  const engagementTrends = [
    { month: 'Jan', engagement: 72, sessions: 145 },
    { month: 'Feb', engagement: 75, sessions: 178 },
    { month: 'Mar', engagement: 78, sessions: 203 },
    { month: 'Apr', engagement: 81, sessions: 234 },
    { month: 'May', engagement: 79, sessions: 256 },
    { month: 'Jun', engagement: 83, sessions: 289 },
  ];

  const sessionFrequency = [
    { dayOfWeek: 'Monday', sessions: 45, avgLength: 28 },
    { dayOfWeek: 'Tuesday', sessions: 67, avgLength: 32 },
    { dayOfWeek: 'Wednesday', sessions: 78, avgLength: 35 },
    { dayOfWeek: 'Thursday', sessions: 82, avgLength: 34 },
    { dayOfWeek: 'Friday', sessions: 56, avgLength: 30 },
  ];

  const performanceRadar = [
    { metric: 'Session Frequency', value: 85 },
    { metric: 'Student Engagement', value: 78 },
    { metric: 'Teacher Participation', value: 72 },
    { metric: 'Program Diversity', value: 68 },
    { metric: 'Regional Coverage', value: 82 },
    { metric: 'Student Retention', value: 75 },
  ];

  const topPerformers = [
    { name: 'Auckland Primary', metric: 'Most Sessions', value: 45, badge: 'Sessions' },
    { name: 'Sarah Johnson', metric: 'Top Activator', value: 672, badge: 'Students' },
    { name: 'Yeah Girls', metric: 'Most Popular', value: 34, badge: 'Percentage' },
    { name: 'Canterbury', metric: 'Highest Growth', value: 23, badge: 'Growth %' },
  ];

  const insights = [
    {
      title: "Peak Session Times",
      description: "Most sessions occur between 10-11 AM and 2-3 PM",
      trend: "up",
      impact: "High"
    },
    {
      title: "Teacher Engagement Correlation",
      description: "High teacher engagement correlates with 34% more student participation",
      trend: "up",
      impact: "Medium"
    },
    {
      title: "Session Length Optimization",
      description: "30-35 minute sessions show highest engagement rates",
      trend: "neutral",
      impact: "Medium"
    },
    {
      title: "Regional Enjoyment Level Gap",
      description: "Northern regions show 15% lower participation than southern",
      trend: "down",
      impact: "High"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-green-800">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold text-white ml-4">Insights Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-40 bg-white/10 text-white border-white/20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">Last 30 days</SelectItem>
                <SelectItem value="90">Last 90 days</SelectItem>
                <SelectItem value="180">Last 6 months</SelectItem>
                <SelectItem value="365">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-white/10 hover:bg-white/20 text-white">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-white">Avg Session Length</CardTitle>
              <Clock className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{keyMetrics.avgSessionLength} min</div>
              <p className="text-xs text-blue-200">+2.3 min from last period</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-white">Avg Teacher Engagement</CardTitle>
              <Users className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{keyMetrics.avgTeacherEngagement}%</div>
              <p className="text-xs text-green-200">+5% from last period</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-white">Most Active Region</CardTitle>
              <Target className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{keyMetrics.mostActiveRegion}</div>
              <p className="text-xs text-yellow-200">298 sessions this month</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-white">Session Growth</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">+{keyMetrics.sessionGrowthRate}%</div>
              <p className="text-xs text-purple-200">Month over month</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-blue-900">Engagement Trends Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={engagementTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="engagement" stroke="#3b82f6" strokeWidth={2} />
                  <Line type="monotone" dataKey="sessions" stroke="#10b981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-blue-900">Session Frequency by Day</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={sessionFrequency}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="dayOfWeek" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sessions" fill="#3b82f6" />
                  <Bar dataKey="avgLength" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-blue-900">Performance Radar</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={performanceRadar}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="metric" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar name="Performance" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-blue-900">Top Performers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPerformers.map((performer, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">{performer.name}</p>
                      <p className="text-sm text-gray-600">{performer.metric}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">{performer.value}</p>
                      <Badge variant="outline">{performer.badge}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Insights Panel */}
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-blue-900">Key Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {insights.map((insight, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{insight.title}</h3>
                    <Badge variant={insight.impact === 'High' ? 'destructive' : insight.impact === 'Medium' ? 'default' : 'secondary'}>
                      {insight.impact}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{insight.description}</p>
                  <div className="mt-2 flex items-center">
                    <TrendingUp className={`w-4 h-4 mr-1 ${
                      insight.trend === 'up' ? 'text-green-500' : 
                      insight.trend === 'down' ? 'text-red-500' : 'text-gray-500'
                    }`} />
                    <span className="text-xs text-gray-500">
                      {insight.trend === 'up' ? 'Positive trend' : 
                       insight.trend === 'down' ? 'Negative trend' : 'Stable'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InsightsDashboard;
