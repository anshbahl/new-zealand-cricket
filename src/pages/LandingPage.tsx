
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Smartphone, TrendingUp, Users, Calendar, FileText, Plus, Eye, ChevronRight, Zap, Target, Globe, ArrowUpRight, Star, Trophy, Shield, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import Footer from "@/components/common/Footer";

const LandingPage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const quickActions = [
    {
      title: "Add New Participation",
      description: "Register new cricket participation data quickly and efficiently",
      icon: Plus,
      action: () => navigate("/mobile-form"),
      gradient: "from-nzc-green via-nzc-green to-emerald-600",
      shadowColor: "shadow-nzc-green/25"
    },
    {
      title: "View Analytics",
      description: "Comprehensive insights and trends visualization",
      icon: BarChart3,
      action: () => navigate("/analytics"),
      gradient: "from-nzc-blue via-nzc-blue to-blue-600",
      shadowColor: "shadow-nzc-blue/25"
    }
  ];

  const statsOverview = [
    { label: "Participants Today", value: "156", icon: Users, change: "+24%", trend: "up", color: "text-nzc-green", bgColor: "bg-nzc-light-green" },
    { label: "Sessions Today", value: "12", icon: Calendar, change: "+8", trend: "up", color: "text-nzc-blue", bgColor: "bg-nzc-light-blue" },
    { label: "Data Entries Today", value: "156", icon: FileText, change: "+24%", trend: "up", color: "text-orange-600", bgColor: "bg-orange-100" },
    { label: "Today's Growth", value: "+8.2%", icon: TrendingUp, change: "+2.1%", trend: "up", color: "text-emerald-600", bgColor: "bg-emerald-100" }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800/20 via-slate-700/10 to-slate-600/20">
      {/* Enhanced Header Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 backdrop-blur-lg border-b border-slate-600/30 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-0">
            <div className="flex items-center space-x-3 lg:space-x-4 w-full lg:w-auto">
              <img 
                src="/lovable-uploads/0cff761b-365d-4044-84fb-508cfc2d8022.png" 
                alt="NZC Logo" 
                className="w-12 h-12 lg:w-14 lg:h-14 object-fit object-center p-2 bg-white rounded-2xl shadow-lg flex-shrink-0"
              />
              <div className="min-w-0 flex-1">
                <h1 className="text-xl lg:text-3xl font-bold text-white truncate">
                  NZC Participation Platform
                </h1>
                <p className="text-gray-300 text-xs lg:text-sm font-medium">Empowering cricket activators nationwide</p>
              </div>
            </div>
            <div className="flex items-center gap-3 lg:gap-4 w-full lg:w-auto justify-end">
              <Button 
                onClick={() => navigate("/analytics")} 
                className="bg-slate-700 hover:bg-slate-600 text-white shadow-lg transition-all duration-300 group border-0 text-sm lg:text-base"
              >
                <Eye className="w-4 h-4 mr-1 lg:mr-2 transition-transform group-hover:scale-110" />
                <span className="hidden sm:inline">Dashboard</span>
                <span className="sm:hidden">Dash</span>
                <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
              </Button>
              <Button 
                onClick={handleLogout}
                className="bg-slate-600 hover:bg-slate-500 text-white transition-all duration-300 w-10 h-10 p-0 flex-shrink-0"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mobile optimized layout */}
        {/* Hero Section */}
        <div className="text-center mb-12 lg:mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800/10 via-transparent to-slate-700/10 rounded-3xl -z-10"></div>
          <div className="py-10 lg:py-20 px-4 lg:px-8">
            <Badge variant="outline" className="mb-6 lg:mb-8 border-slate-500/30 text-slate-700 bg-slate-100/50 text-sm px-4 py-2">
              ✨ Welcome to the Future of Cricket Data
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-6 lg:mb-8 leading-tight">
              Welcome, <span className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-800 bg-clip-text text-transparent">{user?.displayName || "Activator"}</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6 lg:mb-8">
              Streamline your cricket participation management with our professional platform. 
              Record sessions, analyze participation data, and track program success with precision and ease.
            </p>
          </div>
        </div>

        {/* Enhanced Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-12 lg:mb-20">
          {statsOverview.map((stat, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 hover:shadow-2xl hover:scale-105 transition-all duration-500 group overflow-hidden relative shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-4 lg:p-8 relative">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-4 lg:mb-6">
                  <div className={`p-3 lg:p-4 ${stat.bgColor} rounded-2xl shadow-sm mb-3 lg:mb-0`}>
                    <stat.icon className={`w-5 h-5 lg:w-7 lg:h-7 ${stat.color}`} />
                  </div>
                  <Badge className={`${stat.color.replace('text-', 'bg-').replace('-600', '-100')} ${stat.color} border-0 font-semibold text-xs lg:text-sm`}>
                    {stat.change}
                  </Badge>
                </div>
                <div>
                  <p className="text-xs lg:text-sm font-semibold text-muted-foreground mb-1 lg:mb-2">{stat.label}</p>
                  <p className="text-2xl lg:text-4xl font-bold text-foreground">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Quick Actions - Mobile Optimized */}
        <div className="mb-8 lg:mb-20">
          <div className="text-center mb-6 lg:mb-12">
            <h3 className="text-2xl lg:text-4xl font-bold text-foreground mb-3 lg:mb-6">Quick Actions</h3>
            <p className="text-sm lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">Choose your next step to streamline your cricket participation management</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-4xl mx-auto">
            {quickActions.map((action, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-sm border-0 hover:shadow-2xl transition-all duration-700 group cursor-pointer overflow-hidden relative">
                <CardHeader className="pb-4 lg:pb-6 relative">
                  <div className="flex flex-col lg:flex-row items-start lg:items-start justify-between">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 w-full lg:w-auto">
                      <div className={`p-4 lg:p-5 rounded-3xl bg-gradient-to-br ${action.gradient} ${action.shadowColor} shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                        <action.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <div className="flex-1 lg:flex-none">
                        <CardTitle className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-nzc-blue transition-colors">
                          {action.title}
                        </CardTitle>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-muted-foreground group-hover:text-nzc-blue group-hover:translate-x-2 transition-all self-end lg:self-start mt-2 lg:mt-0" />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 lg:mb-8 leading-relaxed text-base lg:text-lg">{action.description}</p>
                  <Button 
                    onClick={action.action}
                    className="w-full bg-slate-700 hover:bg-slate-600 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 h-11 lg:h-12 text-base lg:text-lg font-semibold"
                  >
                    Get Started
                    <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
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
      
      <Footer />
    </div>
  );
};

export default LandingPage;
