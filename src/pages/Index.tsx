
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, BarChart3, Globe, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-green-800">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            New Zealand Cricket
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Participation Data Management Platform
          </p>
          <div className="w-16 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardHeader className="text-center">
              <Smartphone className="w-12 h-12 text-green-400 mx-auto mb-2" />
              <CardTitle className="text-white">Mobile Data Entry</CardTitle>
              <CardDescription className="text-blue-100">
                Quick session data capture for activators
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/mobile-form">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Enter Session Data
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardHeader className="text-center">
              <Globe className="w-12 h-12 text-blue-400 mx-auto mb-2" />
              <CardTitle className="text-white">National Dashboard</CardTitle>
              <CardDescription className="text-blue-100">
                NZC HQ overview and national metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/national-dashboard">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  View National Data
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardHeader className="text-center">
              <BarChart3 className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
              <CardTitle className="text-white">Regional Dashboard</CardTitle>
              <CardDescription className="text-blue-100">
                Major & District Association analytics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/regional-dashboard">
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                  View Regional Data
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardHeader className="text-center">
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-2" />
              <CardTitle className="text-white">Insights</CardTitle>
              <CardDescription className="text-blue-100">
                Advanced analytics and trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/insights">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  View Insights
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <p className="text-blue-100 text-sm">
            Empowering grassroots cricket development across Aotearoa New Zealand
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
