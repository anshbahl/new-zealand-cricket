import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, Save, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
    yearGroups: [],
    maleStudents: "",
    femaleStudents: "",
    sessionLength: "",
    teacherEngagement: "",
    sessionType: "",
    geolocation: null
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-green-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/analytics")}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </Button>
          <h1 className="text-xl font-bold text-white ml-4">Session Data Entry</h1>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center text-blue-900">
              Cricket Session Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="activatorName">Activator Name</Label>
                  <Input
                    id="activatorName"
                    value={formData.activatorName}
                    onChange={(e) => setFormData(prev => ({ ...prev, activatorName: e.target.value }))}
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="association">Association</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, association: value }))}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select association" />
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
                </div>
              </div>

              <div>
                <Label htmlFor="school">School</Label>
                <Input
                  id="school"
                  value={formData.school}
                  onChange={(e) => setFormData(prev => ({ ...prev, school: e.target.value }))}
                  placeholder="Start typing school name..."
                  className="mt-1"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                    className="mt-1"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="classPeriod">Class Period of the Day</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, classPeriod: value }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select class period" />
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
              </div>

              <div>
                <Label>Year Groups (select all that apply)</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6', 'Year 7', 'Year 8'].map((year) => (
                    <div key={year} className="flex items-center space-x-2">
                      <Checkbox id={year} />
                      <Label htmlFor={year} className="text-sm">{year}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="maleStudents">Male Students</Label>
                  <Input
                    id="maleStudents"
                    type="number"
                    value={formData.maleStudents}
                    onChange={(e) => setFormData(prev => ({ ...prev, maleStudents: e.target.value }))}
                    className="mt-1"
                    min="0"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="femaleStudents">Female Students</Label>
                  <Input
                    id="femaleStudents"
                    type="number"
                    value={formData.femaleStudents}
                    onChange={(e) => setFormData(prev => ({ ...prev, femaleStudents: e.target.value }))}
                    className="mt-1"
                    min="0"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="sessionLength">Session Length</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, sessionLength: value }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select session length" />
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
              </div>

              <div>
                <Label>Teacher Engagement</Label>
                <RadioGroup
                  value={formData.teacherEngagement}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, teacherEngagement: value }))}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="high" id="high" />
                    <Label htmlFor="high">High</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="moderate" id="moderate" />
                    <Label htmlFor="moderate">Moderate</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="none" id="none" />
                    <Label htmlFor="none">None</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="sessionType">Session Type</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, sessionType: value }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select session type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yeah-girls">Yeah Girls</SelectItem>
                    <SelectItem value="smash-play">Smash Play</SelectItem>
                    <SelectItem value="girls-smash">Girls Smash</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={getGeolocation}
                  className="flex items-center space-x-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Tag Location</span>
                </Button>
                {formData.geolocation && (
                  <span className="text-sm text-green-600">✓ Location captured</span>
                )}
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                <Save className="w-4 h-4 mr-2" />
                Submit Session Data
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MobileForm;
