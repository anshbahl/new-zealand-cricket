
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Download, 
  Users, 
  Calendar, 
  TrendingUp, 
  MapPin, 
  Clock, 
  Target, 
  School,
  Plus,
  Filter
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

const AnalyticsDashboard = () => {
  const navigate = useNavigate();
  const [viewLevel, setViewLevel] = useState("national");
  const [dateRange, setDateRange] = useState("30");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [sessionType, setSessionType] = useState("all");

  // Mock data - this would come from your backend
  const overviewStats = {
    totalSessions: viewLevel === "national" ? 1247 : viewLevel === "regional" ? 298 : 89,
    studentsReached: viewLevel === "national" ? 18965 : viewLevel === "regional" ? 4567 : 1234,
    schoolsVisited: viewLevel === "national" ? 342 : viewLevel === "regional" ? 78 : 23,
    activatorsActive: viewLevel === "national" ? 89 : viewLevel === "regional" ? 23 : 8,
    avgSessionLength: 32.5,
    avgTeacherEngagement: 78,
    sessionGrowthRate: 12.4
  };

  const genderData = [
    { name: 'Male', value: 9823, color: '#3b82f6' },
    { name: 'Female', value: 9142, color: '#ef4444' }
  ];

  const sessionsOverTime = [
    { date: '2024-01-01', sessions: 45, students: 678, engagement: 72 },
    { date: '2024-01-08', sessions: 62, students: 891, engagement: 75 },
    { date: '2024-01-15', sessions: 58, students: 834, engagement: 78 },
    { date: '2024-01-22', sessions: 73, students: 1024, engagement: 81 },
    { date: '2024-01-29', sessions: 67, students: 967, engagement: 79 },
    { date: '2024-02-05', sessions: 89, students: 1234, engagement: 83 },
    { date: '2024-02-12', sessions: 94, students: 1345, engagement: 85 },
  ];

  const sessionTypeData = [
    { name: 'Yeah Girls', sessions: 423, color: '#10b981' },
    { name: 'Smash Play', sessions: 356, color: '#f59e0b' },
    { name: 'Girls Smash', sessions: 289, color: '#8b5cf6' },
    { name: 'Other', sessions: 179, color: '#6b7280' }
  ];

  const regionalData = [
    { region: 'Auckland', sessions: 298, students: 4567, growth: 12 },
    { region: 'Wellington', sessions: 234, students: 3456, growth: 8 },
    { region: 'Canterbury', sessions: 187, students: 2834, growth: 15 },
    { region: 'Otago', sessions: 156, students: 2345, growth: 5 },
    { region: 'Northern Districts', sessions: 203, students: 3123, growth: 10 },
    { region: 'Central Districts', sessions: 169, students: 2640, growth: 7 }
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
      impact: "High"
    },
    {
      title: "Teacher Engagement Correlation",
      description: "High teacher engagement correlates with 34% more student participation",
      impact: "Medium"
    },
    {
      title: "Session Length Optimization",
      description: "30-35 minute sessions show highest engagement rates",
      impact: "Medium"
    },
    {
      title: "Regional Performance Gap",
      description: "Northern regions show 15% lower participation than southern",
      impact: "High"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-green-800">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Cricket Analytics Dashboard</h1>
            <p className="text-blue-100">Comprehensive participation data insights</p>
          </div>
          <Button 
            onClick={() => navigate("/mobile-form")}
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3 h-auto"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New Session
          </Button>
        </div>

        {/* Filters */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Filters & View Options
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm text-white mb-2 block">View Level</label>
                <Select value={viewLevel} onValueChange={setViewLevel}>
                  <SelectTrigger className="bg-white/10 text-white border-white/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="national">National</SelectItem>
                    <SelectItem value="regional">Regional</SelectItem>
                    <SelectItem value="local">Local</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm text-white mb-2 block">Date Range</label>
                <Select value={dateRange} onValueChange={setDateRange}>
                  <SelectTrigger className="bg-white/10 text-white border-white/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">Last 7 days</SelectItem>
                    <SelectItem value="30">Last 30 days</SelectItem>
                    <SelectItem value="90">Last 90 days</SelectItem>
                    <SelectItem value="365">Last year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm text-white mb-2 block">Region</label>
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger className="bg-white/10 text-white border-white/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="auckland">Auckland</SelectItem>
                    <SelectItem value="wellington">Wellington</SelectItem>
                    <SelectItem value="canterbury">Canterbury</SelectItem>
                    <SelectItem value="otago">Otago</SelectItem>
                    <SelectItem value="northern-districts">Northern Districts</SelectItem>
                    <SelectItem value="central-districts">Central Districts</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm text-white mb-2 block">Session Type</label>
                <Select value={sessionType} onValueChange={setSessionType}>
                  <SelectTrigger className="bg-white/10 text-white border-white/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="yeah-girls">Yeah Girls</SelectItem>
                    <SelectItem value="smash-play">Smash Play</SelectItem>
                    <SelectItem value="girls-smash">Girls Smash</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button className="bg-white/10 hover:bg-white/20 text-white">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-white">Total Sessions</CardTitle>
              <Calendar className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{overviewStats.totalSessions.toLocaleString()}</div>
              <p className="text-xs text-blue-200">+12% from last period</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-white">Students Reached</CardTitle>
              <Users className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{overviewStats.studentsReached.toLocaleString()}</div>
              <p className="text-xs text-green-200">+8% from last period</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-white">Schools Visited</CardTitle>
              <School className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{overviewStats.schoolsVisited}</div>
              <p className="text-xs text-yellow-200">+15% from last period</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-white">Active Activators</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{overviewStats.activatorsActive}</div>
              <p className="text-xs text-purple-200">+3% from last period</p>
            </CardContent>
          </Card>
        </div>

        {/* Advanced Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-white">Avg Session Length</CardTitle>
              <Clock className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{overviewStats.avgSessionLength} min</div>
              <p className="text-xs text-blue-200">+2.3 min from last period</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-white">Teacher Engagement</CardTitle>
              <Target className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{overviewStats.avgTeacherEngagement}%</div>
              <p className="text-xs text-green-200">+5% from last period</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-white">Growth Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">+{overviewStats.sessionGrowthRate}%</div>
              <p className="text-xs text-purple-200">Month over month</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Analytics */}
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white/10 backdrop-blur-sm">
            <TabsTrigger value="overview" className="text-white data-[state=active]:bg-white/20">Overview</TabsTrigger>
            <TabsTrigger value="performance" className="text-white data-[state=active]:bg-white/20">Performance</TabsTrigger>
            <TabsTrigger value="insights" className="text-white data-[state=active]:bg-white/20">Insights</TabsTrigger>
            <TabsTrigger value="regional" className="text-white data-[state=active]:bg-white/20">Regional</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-900">Sessions & Engagement Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={sessionsOverTime}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="sessions" stroke="#3b82f6" strokeWidth={2} />
                      <Line type="monotone" dataKey="students" stroke="#10b981" strokeWidth={2} />
                      <Line type="monotone" dataKey="engagement" stroke="#f59e0b" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-900">Gender Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={genderData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {genderData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-900">Session Types Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={sessionTypeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="sessions" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
          </TabsContent>

          <TabsContent value="insights" className="space-y-8">
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
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="regional" className="space-y-8">
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-900">Regional Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={regionalData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="region" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sessions" fill="#3b82f6" />
                    <Bar dataKey="students" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-900">Regional Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Region</TableHead>
                      <TableHead>Sessions</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Growth</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {regionalData.map((region, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{region.region}</TableCell>
                        <TableCell>{region.sessions}</TableCell>
                        <TableCell>{region.students}</TableCell>
                        <TableCell>
                          <Badge variant="outline">+{region.growth}%</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
