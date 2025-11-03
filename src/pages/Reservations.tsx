import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Reservations = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    groupSize: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    occasion: "",
    specialRequests: "",
  });

  const { toast } = useToast();

  const totalSteps = 6;
  const progress = (currentStep / totalSteps) * 100;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Reservation Confirmed!",
      description: "We've sent a confirmation email to " + formData.email,
    });
    // Reset form
    setFormData({
      groupSize: "",
      date: "",
      time: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      occasion: "",
      specialRequests: "",
    });
    setCurrentStep(1);
  };

  const groupSizes = ["1-2 people", "3-4 people", "5-6 people", "7+ people (Private Event)"];
  const timeSlots = [
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
  ];
  const occasions = ["Birthday", "Anniversary", "Business Dinner", "Special Celebration", "Just Dining"];

  return (
    <main className="min-h-screen pt-20 bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-center mb-4 animate-fade-in-up">
          Reserve Your Table
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-12 animate-fade-in">
          Complete your reservation in just a few simple steps
        </p>

        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <Progress value={progress} className="h-2" />
            <p className="text-center mt-2 text-sm text-muted-foreground">
              Step {currentStep} of {totalSteps}
            </p>
          </div>

          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">
                {currentStep === 1 && "Party Size"}
                {currentStep === 2 && "Select Date"}
                {currentStep === 3 && "Choose Time"}
                {currentStep === 4 && "Your Information"}
                {currentStep === 5 && "Occasion & Requests"}
                {currentStep === 6 && "Confirm Reservation"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Group Size */}
              {currentStep === 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {groupSizes.map((size) => (
                    <Button
                      key={size}
                      variant={formData.groupSize === size ? "default" : "outline"}
                      className="h-20 text-lg"
                      onClick={() => setFormData((prev) => ({ ...prev, groupSize: size }))}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              )}

              {/* Step 2: Date */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <Label htmlFor="date">Select Date</Label>
                  <Input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="text-lg h-12"
                  />
                </div>
              )}

              {/* Step 3: Time */}
              {currentStep === 3 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={formData.time === time ? "default" : "outline"}
                      className="h-16"
                      onClick={() => setFormData((prev) => ({ ...prev, time }))}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              )}

              {/* Step 4: Personal Information */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="h-12"
                    />
                  </div>
                </div>
              )}

              {/* Step 5: Occasion */}
              {currentStep === 5 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="occasion">Occasion (Optional)</Label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
                      {occasions.map((occasion) => (
                        <Button
                          key={occasion}
                          variant={formData.occasion === occasion ? "default" : "outline"}
                          onClick={() => setFormData((prev) => ({ ...prev, occasion }))}
                        >
                          {occasion}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
                    <Textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      placeholder="Any dietary restrictions or special requests..."
                      rows={4}
                    />
                  </div>
                </div>
              )}

              {/* Step 6: Confirmation */}
              {currentStep === 6 && (
                <div className="space-y-6">
                  <div className="bg-secondary p-6 rounded-lg space-y-3">
                    <h3 className="font-semibold text-lg mb-4">Reservation Summary</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Party Size</p>
                        <p className="font-medium">{formData.groupSize}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Date</p>
                        <p className="font-medium">{formData.date}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Time</p>
                        <p className="font-medium">{formData.time}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Name</p>
                        <p className="font-medium">
                          {formData.firstName} {formData.lastName}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">{formData.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium">{formData.phone}</p>
                      </div>
                    </div>
                    {formData.occasion && (
                      <div>
                        <p className="text-sm text-muted-foreground">Occasion</p>
                        <p className="font-medium">{formData.occasion}</p>
                      </div>
                    )}
                    {formData.specialRequests && (
                      <div>
                        <p className="text-sm text-muted-foreground">Special Requests</p>
                        <p className="font-medium">{formData.specialRequests}</p>
                      </div>
                    )}
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-sm">
                    <p className="font-semibold mb-2">Cancellation Policy</p>
                    <p className="text-muted-foreground">
                      Please notify us at least 24 hours in advance if you need to cancel or modify
                      your reservation. Late cancellations may incur a fee.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="w-32"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                {currentStep < totalSteps ? (
                  <Button onClick={handleNext} className="w-32 bg-accent hover:bg-accent/90">
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} className="w-40 bg-accent hover:bg-accent/90">
                    <Check className="w-4 h-4 mr-2" />
                    Confirm
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>Phone: (555) 123-4567</p>
                <p>Email: reservations@oyamasushi.com</p>
                <p>We're happy to assist with any questions!</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Reservation Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Reservations held for 15 minutes</p>
                <p>• Large parties (7+) require deposit</p>
                <p>• 24-hour cancellation notice required</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Reservations;
