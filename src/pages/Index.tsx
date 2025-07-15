
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Smartphone, TrendingUp } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to analytics dashboard immediately
    navigate("/analytics");
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-green-800 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold text-white mb-2">Loading Cricket Analytics...</h1>
        <p className="text-blue-100">Redirecting to dashboard</p>
      </div>
    </div>
  );
};

export default Index;
