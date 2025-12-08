import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { KanjiDecoration } from "@/components/KanjiDecoration";
import SEO from "@/components/SEO";
import supabase from "@/lib/supabaseClient";

const Reservations = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    if (currentStep === 1 && !formData.groupSize) {
      toast({ title: "Please select a group size.", variant: "destructive" });
      return;
    }
    if (currentStep === 2 && !formData.date) {
      toast({ title: "Please select a date.", variant: "destructive" });
      return;
    }
    if (currentStep === 3 && !formData.time) {
      toast({ title: "Please select a time.", variant: "destructive" });
      return;
    }
    if (currentStep === 4) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
        toast({ title: "Please fill in all personal information.", variant: "destructive" });
        return;
      }
    }
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // Function to extract the number of people from groupSize
  const getPeopleCount = (groupSize: string): number => {
    if (groupSize.includes("1")) return 2;
    if (groupSize.includes("2-3")) return 4;
    if (groupSize.includes("4-5")) return 6;
    if (groupSize.includes("6-7")) return 7;
    return 1;
  };

  // Function to get minimum date based on group size
  const getMinDate = () => {
    const today = new Date();
    const daysToAdd = (formData.groupSize.includes("6-7")) ? 2 : 1;
    today.setDate(today.getDate() + daysToAdd);
    return today.toISOString().split("T")[0];
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    const { data, error } = await supabase
      .from('reservations')
      .insert([
        {
          date: formData.date,
          time: formData.time,
          people: getPeopleCount(formData.groupSize),
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          occasion: formData.occasion || null,
          special_requests: formData.specialRequests || null,
          status: 'pending',
        },
      ])
      .select();

    setIsSubmitting(false);

    if (error) {
      console.error('Error:', error);
      toast({ 
        title: "Error creating reservation", 
        description: error.message,
        variant: "destructive" 
      });
    } else {
      toast({ 
        title: "Reservation confirmed!", 
        description: "We'll send you a confirmation email shortly.",
      });
      // Redirect after a short delay so the user sees the message
      setTimeout(() => {
        window.location.href = '/menu';
      }, 1500);
    }
  };

  const groupSizes = ["1 people", "2-3 people", "4-5 people", "6-7 people"];
  const timeSlots = [
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", 
    "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM",
  ];
  const occasions = ["Birthday", "Anniversary", "Business Dinner", "Special Celebration", "Just Dining"];

  
  return (
    <main className="min-h-screen pt-20 bg-secondary">
       <SEO
        title="Reservations | Oyama Sushi - Book Your Table"
        description="Reserve your table at Oyama Sushi. Enjoy a unique Japanese dining experience. Easy and fast reservations for groups of any size."
        canonicalUrl="https://www.oyamasushi.restaurant/reservations"
        keywords="book sushi table, Japanese restaurant reservations, Oyama Sushi booking, Japanese dinner, reserve online"
        ogImage="https://www.oyamasushi.restaurant/Futomaki/FutaMar2.webp"
      />
       <KanjiDecoration />
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
                      aria-required="true"
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
                  {(formData.groupSize.includes("6-7")) && (
                    <p className="text-sm text-amber-600 bg-amber-50 p-3 rounded-lg">
                      ⚠️ For groups of 6+ people, reservations require at least 2 days advance notice.
                      Same policy applies for cancellations.
                    </p>
                  )}
                  <Input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={getMinDate()}
                    className="text-lg h-12"
                    required
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
                      aria-required="true"
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
                        required
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
                        required
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
                      required
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
                      required
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
                  <Button 
                    onClick={handleSubmit} 
                    disabled={isSubmitting}
                    className="w-40 bg-accent hover:bg-accent/90"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Confirm
                      </>
                    )}
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
                <p>Phone:+353433340929</p>
                <p>We're happy to assist with any questions!</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Reservation Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Reservations held for 15 minutes</p>
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
