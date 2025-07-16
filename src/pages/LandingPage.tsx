
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Smartphone, TrendingUp, Users, Calendar, FileText, Plus, Eye, ChevronRight, Zap, Target, Globe, ArrowUpRight, Star, Trophy, Shield } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      title: "Add New Participation",
      description: "Register new cricket participation data quickly and efficiently",
      icon: Plus,
      action: () => navigate("/mobile-form"),
      gradient: "from-nzc-green via-nzc-green to-emerald-600",
      shadowColor: "shadow-nzc-green/25",
      badge: "Popular",
      badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200"
    },
    {
      title: "View Analytics",
      description: "Comprehensive insights and trends visualization",
      icon: BarChart3,
      action: () => navigate("/analytics"),
      gradient: "from-nzc-blue via-nzc-blue to-blue-600",
      shadowColor: "shadow-nzc-blue/25",
      badge: "Pro",
      badgeColor: "bg-blue-100 text-blue-700 border-blue-200"
    },
    {
      title: "Mobile Entry Form",
      description: "Optimized for on-the-go data collection",
      icon: Smartphone,
      action: () => navigate("/mobile-form"),
      gradient: "from-purple-500 via-purple-600 to-purple-700",
      shadowColor: "shadow-purple-500/25",
      badge: "Fast",
      badgeColor: "bg-purple-100 text-purple-700 border-purple-200"
    }
  ];

  const statsOverview = [
    { label: "Total Participants", value: "2,847", icon: Users, change: "+12%", trend: "up", color: "text-nzc-green", bgColor: "bg-nzc-light-green" },
    { label: "Active Programs", value: "42", icon: Calendar, change: "+3", trend: "up", color: "text-nzc-blue", bgColor: "bg-nzc-light-blue" },
    { label: "Data Entries Today", value: "156", icon: FileText, change: "+24%", trend: "up", color: "text-orange-600", bgColor: "bg-orange-100" },
    { label: "Growth Rate", value: "+12%", icon: TrendingUp, change: "+2.1%", trend: "up", color: "text-emerald-600", bgColor: "bg-emerald-100" }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Quick data entry and real-time processing for immediate insights",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Precise Tracking",
      description: "Accurate participation metrics with advanced analytics",
      color: "text-nzc-blue",
      bgColor: "bg-nzc-light-blue",
      gradient: "from-nzc-blue to-nzc-dark-blue"
    },
    {
      icon: Globe,
      title: "Nationwide Coverage",
      description: "Supporting cricket development across all regions",
      color: "text-nzc-green",
      bgColor: "bg-nzc-light-green",
      gradient: "from-nzc-green to-emerald-600"
    }
  ];

  const achievements = [
    { icon: Trophy, label: "Award Winning", desc: "Best Sports Platform 2024" },
    { icon: Shield, label: "Secure & Reliable", desc: "Enterprise-grade security" },
    { icon: Star, label: "Highly Rated", desc: "4.9/5 user satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-nzc-light-blue/30 via-white to-nzc-light-green/30">
      {/* Enhanced Header Section */}
      <div className="bg-white/95 backdrop-blur-lg border-b border-nzc-blue/20 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-nzc-blue to-nzc-green rounded-2xl flex items-center justify-center shadow-lg">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-nzc-blue to-nzc-green bg-clip-text text-transparent">
                  NZC Participation Platform
                </h1>
                <p className="text-muted-foreground text-sm font-medium">Empowering cricket activators nationwide</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="hidden lg:flex items-center gap-2 text-xs text-muted-foreground">
                  <achievement.icon className="w-4 h-4 text-nzc-green" />
                  <span className="font-medium">{achievement.label}</span>
                </div>
              ))}
              <Button 
                onClick={() => navigate("/analytics")} 
                className="bg-nzc-blue hover:bg-nzc-dark-blue text-white shadow-lg transition-all duration-300 group border-0"
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
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-nzc-blue/5 via-transparent to-nzc-green/5 rounded-3xl -z-10"></div>
          <div className="py-20 px-8">
            <Badge variant="outline" className="mb-8 border-nzc-blue/30 text-nzc-blue bg-nzc-light-blue/20 text-sm px-4 py-2">
              ✨ Welcome to the Future of Cricket Data
            </Badge>
            <h2 className="text-6xl font-bold text-foreground mb-8 leading-tight">
              Welcome, <span className="bg-gradient-to-r from-nzc-blue via-purple-600 to-nzc-green bg-clip-text text-transparent">Activator</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your cricket participation management with our cutting-edge platform. 
              Record entries, analyze trends, and drive program success with intelligence and precision.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-nzc-blue/10">
                  <achievement.icon className="w-4 h-4 text-nzc-green" />
                  <span className="text-sm font-medium text-foreground">{achievement.label}</span>
                  <span className="text-xs text-muted-foreground">• {achievement.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {statsOverview.map((stat, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 hover:shadow-2xl hover:scale-105 transition-all duration-500 group overflow-hidden relative shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-8 relative">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 ${stat.bgColor} rounded-2xl shadow-sm`}>
                    <stat.icon className={`w-7 h-7 ${stat.color}`} />
                  </div>
                  <Badge className={`${stat.color.replace('text-', 'bg-').replace('-600', '-100')} ${stat.color} border-0 font-semibold`}>
                    {stat.change}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">{stat.label}</p>
                  <p className="text-4xl font-bold text-foreground">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Quick Actions */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-foreground mb-6">Quick Actions</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Choose your next step to streamline your cricket participation management</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {quickActions.map((action, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-sm border-0 hover:shadow-2xl transition-all duration-700 group cursor-pointer overflow-hidden relative">
                <div className="absolute top-6 right-6 z-10">
                  <Badge className={`${action.badgeColor} border-0 text-xs font-semibold`}>
                    {action.badge}
                  </Badge>
                </div>
                <CardHeader className="pb-6 relative">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-6">
                      <div className={`p-5 rounded-3xl bg-gradient-to-br ${action.gradient} ${action.shadowColor} shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                        <action.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-foreground group-hover:text-nzc-blue transition-colors">
                          {action.title}
                        </CardTitle>
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-nzc-blue group-hover:translate-x-2 transition-all" />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">{action.description}</p>
                  <Button 
                    onClick={action.action}
                    className={`w-full bg-gradient-to-r ${action.gradient} text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 h-12 text-lg font-semibold`}
                  >
                    Get Started
                    <ArrowUpRight className="w-5 h-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-foreground mb-6">Why Choose Our Platform</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Built for cricket activators, by cricket enthusiasts</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-500">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Recent Activity */}
        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-nzc-light-blue/30 to-nzc-light-green/30 border-b border-nzc-blue/20">
            <CardTitle className="text-3xl font-bold text-foreground flex items-center gap-4">
              <div className="p-3 bg-nzc-blue/10 rounded-xl">
                <TrendingUp className="w-7 h-7 text-nzc-blue" />
              </div>
              Recent Activity
              <Badge className="ml-auto bg-nzc-green/20 text-nzc-green border-nzc-green/30 font-semibold">
                Live
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-nzc-blue/10">
              <div className="flex items-center justify-between p-8 hover:bg-nzc-light-blue/10 transition-colors group">
                <div className="flex items-center gap-6">
                  <div className="w-4 h-4 bg-nzc-green rounded-full animate-pulse shadow-lg shadow-nzc-green/50"></div>
                  <div>
                    <span className="font-bold text-foreground text-lg">New participation recorded</span>
                    <p className="text-muted-foreground mt-1">Wellington Cricket Club - Junior Program</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm text-muted-foreground">2 minutes ago</span>
                  <div className="w-3 h-3 bg-nzc-green rounded-full ml-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-8 hover:bg-nzc-light-green/10 transition-colors group">
                <div className="flex items-center gap-6">
                  <div className="w-4 h-4 bg-nzc-blue rounded-full shadow-lg shadow-nzc-blue/50"></div>
                  <div>
                    <span className="font-bold text-foreground text-lg">Analytics report generated</span>
                    <p className="text-muted-foreground mt-1">Monthly participation summary</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm text-muted-foreground">1 hour ago</span>
                  <div className="w-3 h-3 bg-nzc-blue rounded-full ml-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-8 hover:bg-nzc-light-blue/10 transition-colors group">
                <div className="flex items-center gap-6">
                  <div className="w-4 h-4 bg-nzc-green rounded-full shadow-lg shadow-nzc-green/50"></div>
                  <div>
                    <span className="font-bold text-foreground text-lg">Data export completed</span>
                    <p className="text-muted-foreground mt-1">Regional participation data - Q4 2024</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm text-muted-foreground">3 hours ago</span>
                  <div className="w-3 h-3 bg-nzc-green rounded-full ml-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
