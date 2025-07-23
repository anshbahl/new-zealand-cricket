
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save, MapPin, User, School, Users, Settings, Target, RefreshCw, Heart, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FormField } from "@/components/form/FormField";
import { FormSection } from "@/components/form/FormSection";
import { YearGroupSelector } from "@/components/form/YearGroupSelector";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { useFirestore } from "@/hooks/useFirestore";
import Footer from "@/components/common/Footer";

const MobileForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const { addSession } = useFirestore();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    activatorName: "",
    association: "",
    school: "",
    zipcode: "",
    nearestClub: "",
    date: "",
    time: "",
    classPeriod: "",
    yearGroups: [] as string[],
    maleStudents: "",
    femaleStudents: "",
    sessionLength: "",
    teacherEngagement: "",
    sessionType: "",
    studentEnjoymentLevel: "",
    notes: "",
    geolocation: null as { lat: number; lng: number } | null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to submit session data.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    try {
      await addSession({
        ...formData,
        maleStudents: parseInt(formData.maleStudents) || 0,
        femaleStudents: parseInt(formData.femaleStudents) || 0,
        userId: user.uid
      });
      
      toast({
        title: "Session data submitted successfully!",
        description: "Your participation data has been recorded.",
      });
      
      navigate("/analytics");
    } catch (error: any) {
      toast({
        title: "Submission failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
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

  const handleZipcodeChange = (zipcode: string) => {
    setFormData(prev => ({ ...prev, zipcode }));
    
    // Simulate finding nearest club based on zipcode
    if (zipcode.length >= 4) {
      const clubs = [
        "Wellington Cricket Club",
        "Auckland Cricket Club", 
        "Canterbury Cricket Club",
        "Otago Cricket Club",
        "Waikato Cricket Club",
        "Northern Districts Cricket Club"
      ];
      const nearestClub = clubs[Math.floor(Math.random() * clubs.length)];
      setFormData(prev => ({ ...prev, nearestClub }));
      
      toast({
        title: "Nearest club found",
        description: `Linked to ${nearestClub}`,
      });
    }
  };

  const clearForm = () => {
    setFormData({
      activatorName: "",
      association: "",
      school: "",
      zipcode: "",
      nearestClub: "",
      date: "",
      time: "",
      classPeriod: "",
      yearGroups: [] as string[],
      maleStudents: "",
      femaleStudents: "",
      sessionLength: "",
      teacherEngagement: "",
      sessionType: "",
      studentEnjoymentLevel: "",
      notes: "",
      geolocation: null as { lat: number; lng: number } | null
    });
    
    toast({
      title: "Form cleared",
      description: "All fields have been reset.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800/20 via-slate-700/10 to-slate-600/20">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="container mx-auto px-4 lg:px-6 py-4 lg:py-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center space-x-3 lg:space-x-4 flex-1 min-w-0">
              <Button
                variant="ghost"
                onClick={() => navigate("/analytics")}
                className="bg-slate-600 hover:bg-slate-500 text-white p-2 flex-shrink-0"
              >
                <ArrowLeft className="w-4 h-4 lg:w-5 lg:h-5" />
              </Button>
              <div className="flex items-center space-x-2 lg:space-x-3 min-w-0 flex-1">
                <img 
                  src="/lovable-uploads/0cff761b-365d-4044-84fb-508cfc2d8022.png" 
                  alt="NZC Logo" 
                  className="w-8 h-8 lg:w-10 lg:h-10 object-fit object-center p-1 lg:p-2 bg-white rounded-xl shadow-lg flex-shrink-0"
                />
                <h1 className="text-lg lg:text-xl font-bold truncate">Session Data Entry</h1>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={getGeolocation}
              className="flex items-center gap-1 lg:gap-2 px-3 lg:px-4 py-2 border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400 text-sm lg:text-base flex-shrink-0"
            >
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Tag Location</span>
              <span className="sm:hidden">Tag</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <Card className="max-w-5xl mx-auto shadow-lg">
          <CardHeader className="bg-gradient-to-r from-slate-100 to-slate-200 border-b border-slate-300">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              Cricket Session Information
            </CardTitle>
            <p className="text-gray-600 mt-2">Complete the form below to record your cricket session data</p>
          </CardHeader>
          
          <CardContent className="p-10">
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Activator Information */}
              <FormSection title="Activator Information" icon={<User className="w-5 h-5 text-blue-600" />}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <FormField label="Activator Name" required>
                    <Input
                      value={formData.activatorName}
                      onChange={(e) => setFormData(prev => ({ ...prev, activatorName: e.target.value }))}
                      className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter your name"
                      required
                    />
                  </FormField>

                  <FormField label="Association" required>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, association: value }))}>
                      <SelectTrigger className="h-12 border-gray-300 focus:border-blue-500">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <FormField label="School" required>
                    <Input
                      value={formData.school}
                      onChange={(e) => setFormData(prev => ({ ...prev, school: e.target.value }))}
                      placeholder="Start typing school name..."
                      className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </FormField>

                  <FormField label="School Zipcode" required>
                    <Input
                      value={formData.zipcode}
                      onChange={(e) => handleZipcodeChange(e.target.value)}
                      placeholder="Enter school zipcode..."
                      className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </FormField>
                </div>

                {formData.nearestClub && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2 text-green-700">
                      <Target className="w-4 h-4" />
                      <span className="font-medium">Nearest Cricket Club: {formData.nearestClub}</span>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField label="Date" required>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                      className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </FormField>

                  <FormField label="Time" required>
                    <Input
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                      className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </FormField>

                  <FormField label="Class Period">
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, classPeriod: value }))}>
                      <SelectTrigger className="h-12 border-gray-300 focus:border-blue-500">
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

                <div className="grid grid-cols-2 gap-8">
                  <FormField label="Male Students" required>
                    <Input
                      type="number"
                      value={formData.maleStudents}
                      onChange={(e) => setFormData(prev => ({ ...prev, maleStudents: e.target.value }))}
                      className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
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
                      className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      min="0"
                      placeholder="0"
                      required
                    />
                  </FormField>
                </div>
              </FormSection>

              {/* Session Configuration */}
              <FormSection title="Session Configuration" icon={<Settings className="w-5 h-5 text-orange-600" />}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <FormField label="Session Length" required>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, sessionLength: value }))}>
                      <SelectTrigger className="h-12 border-gray-300 focus:border-orange-500">
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
                      <SelectTrigger className="h-12 border-gray-300 focus:border-orange-500">
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

              {/* Student Enjoyment Level */}
              <FormSection title="Student Enjoyment Level" icon={<Heart className="w-5 h-5 text-pink-600" />}>
                <FormField label="How much did students enjoy the session?" required>
                  <RadioGroup
                    value={formData.studentEnjoymentLevel}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, studentEnjoymentLevel: value }))}
                    className="grid grid-cols-1 sm:grid-cols-5 gap-4"
                  >
                    {[
                      { value: "very-low", label: "Very Low", desc: "1/5", color: "text-red-600" },
                      { value: "low", label: "Low", desc: "2/5", color: "text-orange-600" },
                      { value: "moderate", label: "Moderate", desc: "3/5", color: "text-yellow-600" },
                      { value: "high", label: "High", desc: "4/5", color: "text-blue-600" },
                      { value: "very-high", label: "Very High", desc: "5/5", color: "text-green-600" }
                    ].map((option) => (
                      <div key={option.value} className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                        <RadioGroupItem value={option.value} id={option.value} />
                        <div className="flex flex-col">
                          <Label htmlFor={option.value} className={`font-medium cursor-pointer ${option.color}`}>{option.label}</Label>
                          <span className="text-sm text-gray-500">{option.desc}</span>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </FormField>
              </FormSection>

              {/* Notes */}
              <FormSection title="Additional Notes" icon={<FileText className="w-5 h-5 text-indigo-600" />}>
                <FormField label="Session Notes (Optional)">
                  <Textarea
                    value={formData.notes}
                    onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                    placeholder="Add any additional comments about the session, challenges faced, highlights, or suggestions for improvement..."
                    className="min-h-[120px] border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 resize-none"
                    rows={5}
                  />
                  <p className="text-sm text-gray-500 mt-2">Optional: Share any observations, feedback, or notes about the session</p>
                </FormField>
              </FormSection>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={clearForm}
                    className="flex items-center gap-2 h-12 px-6 border-gray-300 hover:border-red-500 hover:text-red-600"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Clear Form</span>
                  </Button>
                </div>
                
                {formData.geolocation && (
                  <span className="flex items-center gap-2 text-green-600 font-medium">
                    <MapPin className="w-4 h-4" />
                    Location captured
                  </span>
                )}

                <Button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-8 font-semibold"
                  disabled={loading}
                >
                  <Save className="w-4 h-4 mr-2" />
                  {loading ? "Submitting..." : "Submit Session Data"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default MobileForm;
