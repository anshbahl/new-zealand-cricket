
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Smartphone, TrendingUp, Users, Calendar, FileText, Plus, Eye, ChevronRight, Zap, Target, Globe, ArrowUpRight } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      title: "Add New Participation",
      description: "Register new cricket participation data quickly and efficiently",
      icon: Plus,
      action: () => navigate("/mobile-form"),
      color: "bg-gradient-to-br from-nzc-green to-nzc-green/80",
      textColor: "text-white",
      badge: "Popular"
    },
    {
      title: "View Analytics",
      description: "Comprehensive insights and trends visualization",
      icon: BarChart3,
      action: () => navigate("/analytics"),
      color: "bg-gradient-to-br from-nzc-blue to-nzc-blue/80",
      textColor: "text-white",
      badge: "Pro"
    },
    {
      title: "Mobile Entry Form",
      description: "Optimized for on-the-go data collection",
      icon: Smartphone,
      action: () => navigate("/mobile-form"),
      color: "bg-gradient-to-br from-nzc-light-blue to-nzc-light-blue/80",
      textColor: "text-nzc-dark-blue",
      badge: "Fast"
    }
  ];

  const statsOverview = [
    { label: "Total Participants", value: "2,847", icon: Users, change: "+12%", trend: "up" },
    { label: "Active Programs", value: "42", icon: Calendar, change: "+3", trend: "up" },
    { label: "Data Entries Today", value: "156", icon: FileText, change: "+24%", trend: "up" },
    { label: "Growth Rate", value: "+12%", icon: TrendingUp, change: "+2.1%", trend: "up" }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Quick data entry and real-time processing"
    },
    {
      icon: Target,
      title: "Precise Tracking",
      description: "Accurate participation metrics and analytics"
    },
    {
      icon: Globe,
      title: "Nationwide Coverage",
      description: "Supporting cricket development across New Zealand"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-nzc-light-blue/20 via-white to-nzc-light-green/20">
      {/* Enhanced Header Section */}
      <div className="bg-white/90 backdrop-blur-md border-b border-nzc-blue/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-nzc-blue to-nzc-green rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-nzc-dark-blue">NZC Participation Platform</h1>
                <p className="text-gray-600 text-sm">Empowering cricket activators nationwide</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                onClick={() => navigate("/analytics")} 
                variant="outline"
                className="border-nzc-blue/20 text-nzc-blue hover:bg-nzc-blue hover:text-white transition-all duration-300 group"
              >
                <Eye className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                Dashboard
                <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-nzc-blue/5 to-nzc-green/5 rounded-3xl -z-10"></div>
          <div className="py-16 px-8">
            <Badge variant="outline" className="mb-6 border-nzc-blue/20 text-nzc-blue">
              ✨ Welcome to the Future of Cricket Data
            </Badge>
            <h2 className="text-5xl font-bold text-nzc-dark-blue mb-6 leading-tight">
              Welcome, <span className="bg-gradient-to-r from-nzc-blue to-nzc-green bg-clip-text text-transparent">Activator</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your cricket participation management with our cutting-edge platform. 
              Record entries, analyze trends, and drive program success with intelligence and precision.
            </p>
          </div>
        </div>

        {/* Enhanced Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statsOverview.map((stat, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-nzc-blue/10 hover:shadow-xl hover:scale-105 transition-all duration-300 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-nzc-light-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-6 relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-nzc-light-blue to-nzc-light-blue/80 rounded-xl">
                    <stat.icon className="w-6 h-6 text-nzc-blue" />
                  </div>
                  <Badge variant="secondary" className="text-nzc-green bg-nzc-light-green/20 border-0">
                    {stat.change}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-nzc-dark-blue">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Quick Actions */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-nzc-dark-blue mb-4">Quick Actions</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose your next step to streamline your cricket participation management</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-nzc-blue/10 hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden relative">
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="secondary" className="bg-white/90 text-nzc-dark-blue border-0 text-xs">
                    {action.badge}
                  </Badge>
                </div>
                <CardHeader className="pb-4 relative">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-2xl ${action.color} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        <action.icon className={`w-7 h-7 ${action.textColor}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-nzc-dark-blue group-hover:text-nzc-blue transition-colors">
                          {action.title}
                        </CardTitle>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-nzc-blue group-hover:translate-x-1 transition-all" />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6 leading-relaxed">{action.description}</p>
                  <Button 
                    onClick={action.action}
                    className={`w-full ${action.color} ${action.textColor} hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                    size="lg"
                  >
                    Get Started
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* New Features Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-nzc-dark-blue mb-4">Why Choose Our Platform</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Built for cricket activators, by cricket enthusiasts</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-nzc-blue to-nzc-green rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-nzc-dark-blue mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Recent Activity */}
        <Card className="bg-white/90 backdrop-blur-sm border-nzc-blue/10 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-nzc-light-blue/20 to-nzc-light-green/20 border-b border-nzc-blue/10">
            <CardTitle className="text-2xl font-bold text-nzc-dark-blue flex items-center gap-3">
              <div className="p-2 bg-nzc-blue/10 rounded-lg">
                <TrendingUp className="w-6 h-6 text-nzc-blue" />
              </div>
              Recent Activity
              <Badge variant="secondary" className="ml-auto bg-nzc-green/10 text-nzc-green border-nzc-green/20">
                Live
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-100">
              <div className="flex items-center justify-between p-6 hover:bg-nzc-light-blue/10 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-nzc-green rounded-full animate-pulse"></div>
                  <div>
                    <span className="font-semibold text-nzc-dark-blue">New participation recorded</span>
                    <p className="text-sm text-gray-500">Wellington Cricket Club - Junior Program</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-400">2 minutes ago</span>
                  <div className="w-2 h-2 bg-nzc-green rounded-full ml-auto mt-1 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-6 hover:bg-nzc-light-green/10 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-nzc-blue rounded-full"></div>
                  <div>
                    <span className="font-semibold text-nzc-dark-blue">Analytics report generated</span>
                    <p className="text-sm text-gray-500">Monthly participation summary</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-400">1 hour ago</span>
                  <div className="w-2 h-2 bg-nzc-blue rounded-full ml-auto mt-1 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-6 hover:bg-nzc-light-blue/10 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-nzc-green rounded-full"></div>
                  <div>
                    <span className="font-semibold text-nzc-dark-blue">Data export completed</span>
                    <p className="text-sm text-gray-500">Regional participation data - Q4 2024</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-400">3 hours ago</span>
                  <div className="w-2 h-2 bg-nzc-green rounded-full ml-auto mt-1 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LandingPage;
