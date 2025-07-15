
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Users, Calendar, TrendingUp, School } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const RegionalDashboard = () => {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState("auckland");
  const [dateRange, setDateRange] = useState("30");

  // Mock data for demonstration
  const regionStats = {
    totalSessions: 298,
    studentsReached: 4567,
    schoolsVisited: 78,
    activatorsActive: 23
  };

  const activatorPerformance = [
    { name: 'Sarah Johnson', sessions: 45, students: 672, engagement: 'High' },
    { name: 'Mike Chen', sessions: 38, students: 589, engagement: 'Moderate' },
    { name: 'Emma Wilson', sessions: 42, students: 634, engagement: 'High' },
    { name: 'David Brown', sessions: 35, students: 523, engagement: 'Moderate' },
    { name: 'Lisa Garcia', sessions: 48, students: 721, engagement: 'High' },
  ];

  const schoolParticipation = [
    { school: 'Auckland Primary School', sessions: 12, students: 234, lastVisit: '2024-02-10' },
    { school: 'Westfield Elementary', sessions: 8, students: 145, lastVisit: '2024-02-08' },
    { school: 'Hillside School', sessions: 15, students: 289, lastVisit: '2024-02-12' },
    { school: 'Riverside Academy', sessions: 10, students: 178, lastVisit: '2024-02-06' },
    { school: 'Greenfield Primary', sessions: 6, students: 98, lastVisit: '2024-02-04' },
  ];

  const weeklyTrends = [
    { week: 'Week 1', sessions: 18, students: 276 },
    { week: 'Week 2', sessions: 24, students: 362 },
    { week: 'Week 3', sessions: 21, students: 318 },
    { week: 'Week 4', sessions: 27, students: 401 },
    { week: 'Week 5', sessions: 22, students: 334 },
    { week: 'Week 6', sessions: 29, students: 445 },
  ];

  const sessionTypeBreakdown = [
    { type: 'Yeah Girls', count: 89, percentage: 30 },
    { type: 'Smash Play', count: 72, percentage: 24 },
    { type: 'Girls Smash', count: 65, percentage: 22 },
    { type: 'Other', count: 72, percentage: 24 }
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
            <h1 className="text-2xl font-bold text-white ml-4">Regional Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-48 bg-white/10 text-white border-white/20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="auckland">Auckland</SelectItem>
                <SelectItem value="wellington">Wellington</SelectItem>
                <SelectItem value="canterbury">Canterbury</SelectItem>
                <SelectItem value="otago">Otago</SelectItem>
                <SelectItem value="northern-districts">Northern Districts</SelectItem>
                <SelectItem value="central-districts">Central Districts</SelectItem>
              </SelectContent>
            </Select>
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-40 bg-white/10 text-white border-white/20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Last 7 days</SelectItem>
                <SelectItem value="30">Last 30 days</SelectItem>
                <SelectItem value="90">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-white/10 hover:bg-white/20 text-white">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Regional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-white">Regional Sessions</CardTitle>
              <Calendar className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{regionStats.totalSessions}</div>
              <p className="text-xs text-blue-200">+5% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-white">Students Reached</CardTitle>
              <Users className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{regionStats.studentsReached.toLocaleString()}</div>
              <p className="text-xs text-green-200">+7% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-white">Schools Visited</CardTitle>
              <School className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{regionStats.schoolsVisited}</div>
              <p className="text-xs text-yellow-200">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-white">Active Activators</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{regionStats.activatorsActive}</div>
              <p className="text-xs text-purple-200">+2% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-blue-900">Weekly Performance Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sessions" stroke="#3b82f6" strokeWidth={2} />
                  <Line type="monotone" dataKey="students" stroke="#10b981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-blue-900">Session Type Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={sessionTypeBreakdown}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="type" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Tables Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-blue-900">Activator Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Sessions</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Engagement</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activatorPerformance.map((activator, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{activator.name}</TableCell>
                      <TableCell>{activator.sessions}</TableCell>
                      <TableCell>{activator.students}</TableCell>
                      <TableCell>
                        <Badge variant={activator.engagement === 'High' ? 'default' : 'secondary'}>
                          {activator.engagement}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-blue-900">School Participation</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>School</TableHead>
                    <TableHead>Sessions</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Last Visit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {schoolParticipation.map((school, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{school.school}</TableCell>
                      <TableCell>{school.sessions}</TableCell>
                      <TableCell>{school.students}</TableCell>
                      <TableCell>{school.lastVisit}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RegionalDashboard;
