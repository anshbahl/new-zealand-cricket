
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, Save, MapPin, User, School, Users, Settings, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FormField } from "@/components/form/FormField";
import { FormSection } from "@/components/form/FormSection";
import { YearGroupSelector } from "@/components/form/YearGroupSelector";
import { Label } from "@/components/ui/label";

const MobileForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    activatorName: "",
    association: "",
    school: "",
    date: "",
    time: "",
    classPeriod: "",
    yearGroups: [] as string[],
    maleStudents: "",
    femaleStudents: "",
    sessionLength: "",
    teacherEngagement: "",
    sessionType: "",
    geolocation: null as { lat: number; lng: number } | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Session data submitted successfully!",
      description: "Your participation data has been recorded.",
    });
    navigate("/analytics");
  };

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prev => ({
            ...prev,
            geolocation: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          }));
          toast({
            title: "Location captured",
            description: "Session location has been tagged.",
          });
        },
        (error) => {
          toast({
            title: "Location unavailable",
            description: "Unable to capture location. Please continue without it.",
            variant: "destructive",
          });
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-slate-900 text-white">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => navigate("/analytics")}
                className="text-white hover:bg-slate-800 p-2"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-slate-900" />
                </div>
                <h1 className="text-xl font-bold">Session Data Entry</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="bg-white border-b border-gray-200">
            <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-blue-600" />
              </div>
              Cricket Session Information
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Activator Information */}
              <FormSection title="Activator Information" icon={<User className="w-5 h-5 text-blue-600" />}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <FormField label="Activator Name" required>
                    <Input
                      value={formData.activatorName}
                      onChange={(e) => setFormData(prev => ({ ...prev, activatorName: e.target.value }))}
                      className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter your name"
                      required
                    />
                  </FormField>

                  <FormField label="Association" required>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, association: value }))}>
                      <SelectTrigger className="h-11 border-gray-300 focus:border-blue-500">
                        <SelectValue placeholder="Select your association" />
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
                  </FormField>
                </div>
              </FormSection>

              {/* School & Session Details */}
              <FormSection title="School & Session Details" icon={<School className="w-5 h-5 text-green-600" />}>
                <FormField label="School" required>
                  <Input
                    value={formData.school}
                    onChange={(e) => setFormData(prev => ({ ...prev, school: e.target.value }))}
                    placeholder="Start typing school name..."
                    className="h-11 border-gray-300 focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </FormField>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField label="Date" required>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                      className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </FormField>

                  <FormField label="Time" required>
                    <Input
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                      className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </FormField>

                  <FormField label="Class Period">
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, classPeriod: value }))}>
                      <SelectTrigger className="h-11 border-gray-300 focus:border-blue-500">
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="period-1">Period 1</SelectItem>
                        <SelectItem value="period-2">Period 2</SelectItem>
                        <SelectItem value="period-3">Period 3</SelectItem>
                        <SelectItem value="period-4">Period 4</SelectItem>
                        <SelectItem value="period-5">Period 5</SelectItem>
                        <SelectItem value="lunch">Lunch Break</SelectItem>
                        <SelectItem value="after-school">After School</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormField>
                </div>
              </FormSection>

              {/* Participants */}
              <FormSection title="Participants" icon={<Users className="w-5 h-5 text-purple-600" />}>
                <FormField label="Year Groups (select all that apply)" required>
                  <YearGroupSelector 
                    selectedYears={formData.yearGroups}
                    onChange={(years) => setFormData(prev => ({ ...prev, yearGroups: years }))}
                  />
                </FormField>

                <div className="grid grid-cols-2 gap-6">
                  <FormField label="Male Students" required>
                    <Input
                      type="number"
                      value={formData.maleStudents}
                      onChange={(e) => setFormData(prev => ({ ...prev, maleStudents: e.target.value }))}
                      className="h-11 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      min="0"
                      placeholder="0"
                      required
                    />
                  </FormField>

                  <FormField label="Female Students" required>
                    <Input
                      type="number"
                      value={formData.femaleStudents}
                      onChange={(e) => setFormData(prev => ({ ...prev, femaleStudents: e.target.value }))}
                      className="h-11 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      min="0"
                      placeholder="0"
                      required
                    />
                  </FormField>
                </div>
              </FormSection>

              {/* Session Configuration */}
              <FormSection title="Session Configuration" icon={<Settings className="w-5 h-5 text-orange-600" />}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <FormField label="Session Length" required>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, sessionLength: value }))}>
                      <SelectTrigger className="h-11 border-gray-300 focus:border-orange-500">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="20">20 minutes</SelectItem>
                        <SelectItem value="25">25 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="35">35 minutes</SelectItem>
                        <SelectItem value="40">40 minutes</SelectItem>
                        <SelectItem value="45">45 minutes</SelectItem>
                        <SelectItem value="50">50 minutes</SelectItem>
                        <SelectItem value="60">60 minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormField>

                  <FormField label="Session Type" required>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, sessionType: value }))}>
                      <SelectTrigger className="h-11 border-gray-300 focus:border-orange-500">
                        <SelectValue placeholder="Select session type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yeah-girls">Yeah Girls</SelectItem>
                        <SelectItem value="smash-play">Smash Play</SelectItem>
                        <SelectItem value="girls-smash">Girls Smash</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormField>
                </div>

                <FormField label="Teacher Engagement Level" required>
                  <RadioGroup
                    value={formData.teacherEngagement}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, teacherEngagement: value }))}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                  >
                    {[
                      { value: "high", label: "High", desc: "Actively participating" },
                      { value: "moderate", label: "Moderate", desc: "Observing and helping" },
                      { value: "none", label: "None", desc: "Not involved" }
                    ].map((option) => (
                      <div key={option.value} className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                        <RadioGroupItem value={option.value} id={option.value} />
                        <div className="flex flex-col">
                          <Label htmlFor={option.value} className="font-medium cursor-pointer">{option.label}</Label>
                          <span className="text-sm text-gray-500">{option.desc}</span>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </FormField>
              </FormSection>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200">
                <Button
                  type="button"
                  variant="outline"
                  onClick={getGeolocation}
                  className="flex items-center gap-2 h-11 px-6 border-gray-300 hover:border-blue-500 hover:text-blue-600"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Tag Location</span>
                </Button>
                
                {formData.geolocation && (
                  <span className="flex items-center gap-2 text-green-600 font-medium">
                    <MapPin className="w-4 h-4" />
                    Location captured
                  </span>
                )}

                <Button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white h-11 px-8 font-semibold"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Submit Session Data
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MobileForm;
