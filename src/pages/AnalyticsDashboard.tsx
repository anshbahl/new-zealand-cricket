
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Download, 
  Users, 
  Calendar, 
  TrendingUp, 
  School,
  Plus,
  Activity,
  Target,
  MapPin,
  Eye,
  ArrowRight
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
  BarChart, 
  Bar
} from 'recharts';

const AnalyticsDashboard = () => {
  const navigate = useNavigate();
  const [viewLevel, setViewLevel] = useState("national");
  const [dateRange, setDateRange] = useState("30");

  // Mock data with NZC-inspired colors
  const overviewStats = {
    totalSessions: viewLevel === "national" ? 1245 : viewLevel === "regional" ? 298 : 89,
    totalParticipants: viewLevel === "national" ? 24876 : viewLevel === "regional" ? 4567 : 1234,
    regionsActive: viewLevel === "national" ? "14/16" : viewLevel === "regional" ? "3/4" : "1/1",
    schoolsReached: viewLevel === "national" ? 378 : viewLevel === "regional" ? 78 : 23,
    growthRate: "15.7%",
    targetProgress: 78
  };

  const participationTrendData = [
    { month: 'Jan', participants: 18500 },
    { month: 'Feb', participants: 19200 },
    { month: 'Mar', participants: 20100 },
    { month: 'Apr', participants: 21500 },
    { month: 'May', participants: 22800 },
    { month: 'Jun', participants: 24876 }
  ];

  const regionalPerformance = [
    { region: 'Wellington', progress: 92, color: 'bg-green-500' },
    { region: 'Auckland', progress: 87, color: 'bg-blue-500' },
    { region: 'Canterbury', progress: 78, color: 'bg-orange-500' },
    { region: 'Otago', progress: 65, color: 'bg-yellow-500' },
    { region: 'Waikato', progress: 58, color: 'bg-red-500' }
  ];

  const recentSessions = [
    { date: '14 Jul 2025', location: 'Eden Park, Auckland', type: 'School Program', participants: 32, coach: 'Sarah Thompson', status: 'Completed' },
    { date: '12 Jul 2025', location: 'Hagley Oval, Christchurch', type: 'Community Event', participants: 78, coach: 'Michael Johnson', status: 'Completed' },
    { date: '10 Jul 2025', location: 'University Oval, Dunedin', type: 'Youth Training', participants: 24, coach: 'Emma Wilson', status: 'Completed' },
    { date: '08 Jul 2025', location: 'Basin Reserve, Wellington', type: 'School Program', participants: 45, coach: 'David Clark', status: 'Completed' },
    { date: '05 Jul 2025', location: 'Bay Oval, Mount Maunganui', type: 'Community Event', participants: 56, coach: 'Jessica Brown', status: 'Completed' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Target className="w-5 h-5 text-slate-900" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">NZ Cricket Participation Tracker</h1>
                <p className="text-slate-300 mt-1">Active Region: Auckland</p>
              </div>
            </div>
            <Button 
              onClick={() => navigate("/mobile-form")}
              className="bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 h-auto font-semibold"
            >
              <Plus className="w-5 h-5 mr-2" />
              Record New Session
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex space-x-8">
            {['National', 'Regional', 'Local'].map((tab) => (
              <button
                key={tab}
                onClick={() => setViewLevel(tab.toLowerCase())}
                className={`py-4 px-2 text-sm font-medium border-b-2 transition-colors ${
                  viewLevel === tab.toLowerCase()
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
          <Card className="lg:col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Total Participants</span>
                <Users className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{overviewStats.totalParticipants.toLocaleString()}</div>
              <div className="text-sm text-green-600 mt-1">↑ 12% from last year</div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Regions Active</span>
                <MapPin className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{overviewStats.regionsActive}</div>
              <div className="text-sm text-green-600 mt-1">↑ 2 new regions</div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Schools</span>
                <School className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{overviewStats.schoolsReached}</div>
              <div className="text-sm text-green-600 mt-1">↑ 43 new schools</div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Sessions</span>
                <Calendar className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{overviewStats.totalSessions.toLocaleString()}</div>
              <div className="text-sm text-green-600 mt-1">↑ 18% increase</div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Growth Rate</span>
                <TrendingUp className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{overviewStats.growthRate}</div>
              <div className="text-sm text-green-600 mt-1">↑ 3.2% from target</div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Target Progress</span>
                <Target className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{overviewStats.targetProgress}%</div>
              <Progress value={overviewStats.targetProgress} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold">Participation Trends</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="bg-slate-900 text-white hover:bg-slate-800">Year</Button>
                  <Button variant="outline" size="sm">Quarter</Button>
                  <Button variant="outline" size="sm">Month</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={participationTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="participants" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold">Regional Performance</CardTitle>
                <Button variant="ghost" size="sm">
                  View All <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {regionalPerformance.map((region, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">{region.region}</span>
                    <div className="flex items-center space-x-2 flex-1 mx-4">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${region.color}`}
                          style={{ width: `${region.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900 min-w-[3rem]">{region.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Network Overview Map */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Network Overview Map</CardTitle>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-slate-900 rounded-full"></div>
                    <span>High Activity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                    <span>Medium Activity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <span>Low Activity</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Explore Map <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Interactive map of New Zealand showing regional cricket activity</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Sessions */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Recent Sessions</CardTitle>
              <Button variant="ghost" size="sm">
                View All Sessions <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-gray-600">Date</TableHead>
                  <TableHead className="text-gray-600">Location</TableHead>
                  <TableHead className="text-gray-600">Type</TableHead>
                  <TableHead className="text-gray-600">Participants</TableHead>
                  <TableHead className="text-gray-600">Coach</TableHead>
                  <TableHead className="text-gray-600">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentSessions.map((session, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{session.date}</TableCell>
                    <TableCell>{session.location}</TableCell>
                    <TableCell>{session.type}</TableCell>
                    <TableCell>{session.participants}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium">{session.coach.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                        <span>{session.coach}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-gray-600 bg-gray-50">
                        {session.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-slate-900 text-white rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-slate-900" />
                </div>
                <span className="font-semibold">New Zealand Cricket</span>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <span>About</span>
                <span>Contact</span>
                <span>Help</span>
                <span>Privacy Policy</span>
              </div>
              <div className="text-sm text-gray-300">
                © 2025 NZ Cricket. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
