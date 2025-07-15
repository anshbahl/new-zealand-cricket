
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
  School,
  Plus,
  Activity,
  Target,
  Clock,
  MapPin
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
  Bar
} from 'recharts';

const AnalyticsDashboard = () => {
  const navigate = useNavigate();
  const [viewLevel, setViewLevel] = useState("national");
  const [dateRange, setDateRange] = useState("30");
  const [selectedRegion, setSelectedRegion] = useState("all");

  // Mock data with NZC-inspired colors
  const overviewStats = {
    totalSessions: viewLevel === "national" ? 1842 : viewLevel === "regional" ? 298 : 89,
    totalParticipants: viewLevel === "national" ? 32567 : viewLevel === "regional" ? 4567 : 1234,
    avgParticipantsPerSession: viewLevel === "national" ? 17.7 : viewLevel === "regional" ? 15.3 : 13.9,
    schoolsReached: viewLevel === "national" ? 528 : viewLevel === "regional" ? 78 : 23,
    sessionsGrowth: 5.4,
    participantsGrowth: 8.2,
    avgGrowth: -0.3,
    schoolsGrowth: 7.1
  };

  const genderData = [
    { name: 'Male', value: 51, color: 'hsl(200, 100%, 28%)' },
    { name: 'Female', value: 49, color: 'hsl(142, 76%, 36%)' }
  ];

  const sessionTypeData = [
    { name: 'Tournament', value: 45, color: 'hsl(200, 100%, 28%)' },
    { name: 'Training Camp', value: 30, color: 'hsl(142, 76%, 36%)' },
    { name: 'Community Event', value: 25, color: 'hsl(200, 100%, 85%)' }
  ];

  const participationTrendData = [
    { month: 'Jan', participants: 2847 },
    { month: 'Feb', participants: 3124 },
    { month: 'Mar', participants: 2956 },
    { month: 'Apr', participants: 3287 },
    { month: 'May', participants: 3456 },
    { month: 'Jun', participants: 3621 },
    { month: 'Jul', participants: 3789 },
    { month: 'Aug', participants: 3945 },
    { month: 'Sep', participants: 4123 },
    { month: 'Oct', participants: 4287 },
    { month: 'Nov', participants: 4456 },
    { month: 'Dec', participants: 4623 }
  ];

  const yearGroupData = [
    { year: 'Year 1-2', sessions: 287, participants: 4123 },
    { year: 'Year 3-4', sessions: 342, participants: 4987 },
    { year: 'Year 5-6', sessions: 298, participants: 4234 },
    { year: 'Year 7-8', sessions: 234, participants: 3567 },
    { year: 'Year 9-10', sessions: 189, participants: 2987 },
    { year: 'Year 11-13', sessions: 156, participants: 2456 }
  ];

  const regionalData = [
    { region: 'Auckland', sessions: 298, participants: 4567, growth: 12 },
    { region: 'Wellington', sessions: 234, participants: 3456, growth: 8 },
    { region: 'Canterbury', sessions: 187, participants: 2834, growth: 15 },
    { region: 'Otago', sessions: 156, participants: 2345, growth: 5 },
    { region: 'Northern Districts', sessions: 203, participants: 3123, growth: 10 },
    { region: 'Central Districts', sessions: 169, participants: 2640, growth: 7 }
  ];

  return (
    <div className="min-h-screen bg-nzc-gray">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-nzc-dark-blue mb-2">NZC Data Dashboard</h1>
              <p className="text-gray-600">National Cricket Participation</p>
            </div>
            <Button 
              onClick={() => navigate("/mobile-form")}
              className="bg-nzc-blue hover:bg-nzc-dark-blue text-white px-6 py-3 h-auto"
            >
              <Plus className="w-5 h-5 mr-2" />
              Enter New Session
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setViewLevel("national")}
              className={`px-6 py-4 text-sm font-medium ${
                viewLevel === "national"
                  ? "border-b-2 border-nzc-blue text-nzc-blue bg-nzc-light-blue"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              National Dashboard
            </button>
            <button
              onClick={() => setViewLevel("regional")}
              className={`px-6 py-4 text-sm font-medium ${
                viewLevel === "regional"
                  ? "border-b-2 border-nzc-blue text-nzc-blue bg-nzc-light-blue"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Regional/District Dashboard
            </button>
            <button
              onClick={() => setViewLevel("local")}
              className={`px-6 py-4 text-sm font-medium ${
                viewLevel === "local"
                  ? "border-b-2 border-nzc-blue text-nzc-blue bg-nzc-light-blue"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Analytics
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h3 className="text-lg font-semibold text-nzc-dark-blue mb-4">Filters</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Date Range</label>
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger>
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
              <label className="text-sm font-medium text-gray-700 mb-2 block">Coaching</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Coaching</SelectItem>
                  <SelectItem value="yeah-girls">Yeah Girls</SelectItem>
                  <SelectItem value="smash-play">Smash Play</SelectItem>
                  <SelectItem value="girls-smash">Girls Smash</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Session Type</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Session Types</SelectItem>
                  <SelectItem value="tournament">Tournament</SelectItem>
                  <SelectItem value="training">Training Camp</SelectItem>
                  <SelectItem value="community">Community Event</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">All Year Groups</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Year Groups</SelectItem>
                  <SelectItem value="1-2">Year 1-2</SelectItem>
                  <SelectItem value="3-4">Year 3-4</SelectItem>
                  <SelectItem value="5-6">Year 5-6</SelectItem>
                  <SelectItem value="7-8">Year 7-8</SelectItem>
                  <SelectItem value="9-10">Year 9-10</SelectItem>
                  <SelectItem value="11-13">Year 11-13</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">Apply</Button>
              <Button variant="outline" size="sm">Reset</Button>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">Print</Button>
              <Button variant="outline" size="sm">Share</Button>
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Sessions</p>
                  <p className="text-2xl font-bold text-nzc-dark-blue">{overviewStats.totalSessions.toLocaleString()}</p>
                  <p className="text-sm text-nzc-green">+{overviewStats.sessionsGrowth}%</p>
                </div>
                <div className="p-3 bg-nzc-light-blue rounded-full">
                  <Calendar className="w-6 h-6 text-nzc-blue" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Participants</p>
                  <p className="text-2xl font-bold text-nzc-dark-blue">{overviewStats.totalParticipants.toLocaleString()}</p>
                  <p className="text-sm text-nzc-green">+{overviewStats.participantsGrowth}%</p>
                </div>
                <div className="p-3 bg-nzc-light-green rounded-full">
                  <Users className="w-6 h-6 text-nzc-green" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg. Participants per Session</p>
                  <p className="text-2xl font-bold text-nzc-dark-blue">{overviewStats.avgParticipantsPerSession}</p>
                  <p className="text-sm text-red-500">{overviewStats.avgGrowth}%</p>
                </div>
                <div className="p-3 bg-orange-100 rounded-full">
                  <Activity className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Schools Reached</p>
                  <p className="text-2xl font-bold text-nzc-dark-blue">{overviewStats.schoolsReached}</p>
                  <p className="text-sm text-nzc-green">+{overviewStats.schoolsGrowth}%</p>
                </div>
                <div className="p-3 bg-purple-100 rounded-full">
                  <School className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-nzc-dark-blue">Gender Breakdown</CardTitle>
              <p className="text-sm text-gray-600">Total: 32,567</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={[{name: 'Male', value: 51}, {name: 'Female', value: 49}]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="hsl(200, 100%, 28%)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-nzc-dark-blue">Session Type Distribution</CardTitle>
              <p className="text-sm text-gray-600">Total: 1,842 sessions</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={sessionTypeData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({name, percent}) => `${name} ${percent}%`}
                  >
                    {sessionTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Participation Trend */}
        <Card className="bg-white shadow-sm mb-8">
          <CardHeader>
            <CardTitle className="text-nzc-dark-blue">Participation Trend</CardTitle>
            <p className="text-sm text-gray-600">Monthly</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={participationTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="participants" stroke="hsl(200, 100%, 28%)" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Year Group Breakdown */}
        <Card className="bg-white shadow-sm mb-8">
          <CardHeader>
            <CardTitle className="text-nzc-dark-blue">Participation by Year Group</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={yearGroupData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="year" type="category" width={80} />
                <Tooltip />
                <Bar dataKey="participants" fill="hsl(200, 100%, 28%)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Regional Data Table */}
        {viewLevel === "national" && (
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-nzc-dark-blue">Regional Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Region</TableHead>
                    <TableHead>Sessions</TableHead>
                    <TableHead>Participants</TableHead>
                    <TableHead>Growth</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {regionalData.map((region, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{region.region}</TableCell>
                      <TableCell>{region.sessions}</TableCell>
                      <TableCell>{region.participants.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-nzc-green">
                          +{region.growth}%
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Last updated: July 15, 2025 at 02:39 AM | Data source: NZC Participation Database</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
