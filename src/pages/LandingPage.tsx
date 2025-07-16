
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Smartphone, TrendingUp, Users, Calendar, FileText, Plus, Eye } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      title: "Add New Participation",
      description: "Register new cricket participation data",
      icon: Plus,
      action: () => navigate("/mobile-form"),
      color: "bg-nzc-green hover:bg-nzc-green/90",
      textColor: "text-white"
    },
    {
      title: "View Analytics",
      description: "Check participation statistics and trends",
      icon: BarChart3,
      action: () => navigate("/analytics"),
      color: "bg-nzc-blue hover:bg-nzc-blue/90",
      textColor: "text-white"
    },
    {
      title: "Mobile Entry Form",
      description: "Quick data entry on mobile devices",
      icon: Smartphone,
      action: () => navigate("/mobile-form"),
      color: "bg-nzc-light-blue hover:bg-nzc-light-blue/90",
      textColor: "text-nzc-dark-blue"
    }
  ];

  const statsOverview = [
    { label: "Total Participants", value: "2,847", icon: Users },
    { label: "Active Programs", value: "42", icon: Calendar },
    { label: "Data Entries Today", value: "156", icon: FileText },
    { label: "Growth Rate", value: "+12%", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-nzc-light-blue via-white to-nzc-light-green">
      {/* Header Section */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-nzc-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-nzc-dark-blue">NZC Participation Platform</h1>
              <p className="text-gray-600 mt-1">Cricket participation data management for activators</p>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                onClick={() => navigate("/analytics")} 
                variant="outline"
                className="border-nzc-blue text-nzc-blue hover:bg-nzc-blue hover:text-white"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-nzc-dark-blue mb-4">
            Welcome, Activator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Streamline your cricket participation data management. Record new entries, 
            analyze trends, and track program success all in one place.
          </p>
        </div>

        {/* Quick Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statsOverview.map((stat, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-nzc-blue/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-3xl font-bold text-nzc-dark-blue mt-1">{stat.value}</p>
                  </div>
                  <div className="p-3 bg-nzc-light-blue rounded-full">
                    <stat.icon className="w-6 h-6 text-nzc-blue" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-nzc-dark-blue mb-6 text-center">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-nzc-blue/20 hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full ${action.color} transition-transform group-hover:scale-110`}>
                      <action.icon className={`w-6 h-6 ${action.textColor}`} />
                    </div>
                    <CardTitle className="text-lg font-semibold text-nzc-dark-blue">
                      {action.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4">{action.description}</p>
                  <Button 
                    onClick={action.action}
                    className={`w-full ${action.color} ${action.textColor} transition-all duration-300`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity Preview */}
        <Card className="bg-white/90 backdrop-blur-sm border-nzc-blue/20">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-nzc-dark-blue flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-nzc-light-blue/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-nzc-green rounded-full"></div>
                  <span className="text-sm font-medium text-nzc-dark-blue">New participation recorded</span>
                </div>
                <span className="text-xs text-gray-500">2 minutes ago</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-nzc-light-green/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-nzc-blue rounded-full"></div>
                  <span className="text-sm font-medium text-nzc-dark-blue">Analytics report generated</span>
                </div>
                <span className="text-xs text-gray-500">1 hour ago</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-nzc-light-blue/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-nzc-green rounded-full"></div>
                  <span className="text-sm font-medium text-nzc-dark-blue">Data export completed</span>
                </div>
                <span className="text-xs text-gray-500">3 hours ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LandingPage;
