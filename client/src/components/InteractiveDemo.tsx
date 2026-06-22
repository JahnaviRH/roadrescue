import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Zap,
  User,
  Wrench,
  MessageSquare,
  Navigation
} from "lucide-react";

/**
 * Interactive Demo Component
 * Simulates User and Mechanic dashboard workflows with real-time updates
 * Design: Premium interactions with smooth animations and state transitions
 */

interface DemoStep {
  title: string;
  description: string;
  action: string;
  status: "pending" | "active" | "completed";
}

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState("user");
  const [userStep, setUserStep] = useState(0);
  const [mechanicStep, setMechanicStep] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  // User workflow steps
  const userSteps: DemoStep[] = [
    {
      title: "Request Help",
      description: "Select your vehicle type and describe the issue",
      action: "Submit Request",
      status: userStep >= 0 ? (userStep === 0 ? "active" : "completed") : "pending"
    },
    {
      title: "AI Analysis",
      description: "Our AI predicts the fault with 94% accuracy",
      action: "View Prediction",
      status: userStep >= 1 ? (userStep === 1 ? "active" : "completed") : "pending"
    },
    {
      title: "Mechanic Assigned",
      description: "Nearest mechanic matched to your request",
      action: "View Details",
      status: userStep >= 2 ? (userStep === 2 ? "active" : "completed") : "pending"
    },
    {
      title: "Real-time Chat",
      description: "Communicate directly with your mechanic",
      action: "Open Chat",
      status: userStep >= 3 ? (userStep === 3 ? "active" : "completed") : "pending"
    },
    {
      title: "Service Complete",
      description: "Rate your experience and save receipt",
      action: "Rate Service",
      status: userStep >= 4 ? "completed" : "pending"
    }
  ];

  // Mechanic workflow steps
  const mechanicSteps: DemoStep[] = [
    {
      title: "Browse Requests",
      description: "View nearby assistance requests in real-time",
      action: "View Requests",
      status: mechanicStep >= 0 ? (mechanicStep === 0 ? "active" : "completed") : "pending"
    },
    {
      title: "Accept Job",
      description: "Review AI prediction and customer details",
      action: "Accept",
      status: mechanicStep >= 1 ? (mechanicStep === 1 ? "active" : "completed") : "pending"
    },
    {
      title: "Navigate",
      description: "Real-time GPS navigation to customer location",
      action: "Start Navigation",
      status: mechanicStep >= 2 ? (mechanicStep === 2 ? "active" : "completed") : "pending"
    },
    {
      title: "Service Update",
      description: "Send status updates to customer",
      action: "Update Status",
      status: mechanicStep >= 3 ? (mechanicStep === 3 ? "active" : "completed") : "pending"
    },
    {
      title: "Complete & Earn",
      description: "Mark complete and receive payment",
      action: "Complete",
      status: mechanicStep >= 4 ? "completed" : "pending"
    }
  ];

  const handleUserNext = () => {
    if (userStep < userSteps.length - 1) {
      setUserStep(userStep + 1);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    } else {
      setUserStep(0);
    }
  };

  const handleMechanicNext = () => {
    if (mechanicStep < mechanicSteps.length - 1) {
      setMechanicStep(mechanicStep + 1);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    } else {
      setMechanicStep(0);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
            <span className="text-accent font-semibold text-sm">Interactive Walkthrough</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience how RoadRescue connects drivers with mechanics in real-time. Click through the workflow to see each step.
          </p>
        </div>

        {/* Tabs for User/Mechanic Demo */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto mb-12 bg-gray-200">
            <TabsTrigger value="user" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Driver</span>
            </TabsTrigger>
            <TabsTrigger value="mechanic" className="flex items-center gap-2">
              <Wrench className="h-4 w-4" />
              <span className="hidden sm:inline">Mechanic</span>
            </TabsTrigger>
          </TabsList>

          {/* User Demo Tab */}
          <TabsContent value="user" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Workflow Steps */}
              <div className="space-y-4">
                {userSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                      step.status === "active"
                        ? "border-accent bg-accent/5 shadow-lg scale-105"
                        : step.status === "completed"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 bg-white hover:border-accent/50"
                    }`}
                    onClick={() => setUserStep(index)}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                        step.status === "active"
                          ? "bg-accent"
                          : step.status === "completed"
                          ? "bg-green-500"
                          : "bg-gray-300"
                      }`}>
                        {step.status === "completed" ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-primary mb-1">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: Live Demo Screen */}
              <div className="relative">
                <Card className="p-8 border-2 border-accent/20 shadow-2xl bg-gradient-to-br from-white to-gray-50">
                  {/* Demo Screen Content */}
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                      <h3 className="font-bold text-lg text-primary">Driver Dashboard</h3>
                      <div className="text-xs font-semibold text-accent">LIVE</div>
                    </div>

                    {/* Dynamic Content Based on Step */}
                    {userStep === 0 && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <p className="font-semibold text-primary mb-2">Select Vehicle Type</p>
                          <div className="grid grid-cols-3 gap-2">
                            <button className="p-2 bg-white border-2 border-accent rounded-lg text-center hover:bg-accent/10 transition">
                              🏍️ Bike
                            </button>
                            <button className="p-2 bg-white border-2 border-gray-200 rounded-lg text-center hover:bg-gray-50 transition">
                              🚗 Car
                            </button>
                            <button className="p-2 bg-white border-2 border-gray-200 rounded-lg text-center hover:bg-gray-50 transition">
                              🚚 Truck
                            </button>
                          </div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <p className="font-semibold text-primary mb-2">Describe the Issue</p>
                          <textarea 
                            className="w-full p-3 border border-gray-300 rounded-lg text-sm resize-none"
                            placeholder="My bike won't start and the headlights are dim..."
                            rows={3}
                          />
                        </div>
                      </div>
                    )}

                    {userStep === 1 && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="bg-accent/10 p-4 rounded-lg border border-accent/30">
                          <div className="flex items-center gap-2 mb-3">
                            <Zap className="h-5 w-5 text-accent" />
                            <p className="font-semibold text-primary">AI Prediction</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg">
                            <p className="text-sm font-semibold text-primary mb-1">Predicted Issue:</p>
                            <p className="text-lg font-bold text-accent mb-3">Battery Issue</p>
                            <p className="text-sm text-muted-foreground mb-3">
                              Based on your description, your vehicle likely has a battery problem. Recommended mechanic: Auto Electrician.
                            </p>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-accent h-2 rounded-full" style={{width: "94%"}}></div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">94% Confidence</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {userStep === 2 && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <div className="flex items-center gap-2 mb-3">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <p className="font-semibold text-green-900">Mechanic Assigned</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-lg">👨‍🔧</div>
                              <div>
                                <p className="font-bold text-primary">Rahul Sharma</p>
                                <p className="text-sm text-muted-foreground">Auto Electrician • 4.8★</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4 text-accent" />
                              <span>2.3 km away • ETA 8 mins</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Phone className="h-4 w-4 text-accent" />
                              <span>+91 98765 43210</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {userStep === 3 && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <div className="flex items-center gap-2 mb-3">
                            <MessageSquare className="h-5 w-5 text-accent" />
                            <p className="font-semibold text-primary">Live Chat</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg space-y-3 max-h-48 overflow-y-auto">
                            <div className="flex justify-start">
                              <div className="bg-gray-100 p-2 rounded-lg max-w-xs">
                                <p className="text-sm">Hi! I'm on my way. ETA 5 minutes.</p>
                              </div>
                            </div>
                            <div className="flex justify-end">
                              <div className="bg-accent p-2 rounded-lg max-w-xs text-white">
                                <p className="text-sm">Great! Thank you so much.</p>
                              </div>
                            </div>
                            <div className="flex justify-start">
                              <div className="bg-gray-100 p-2 rounded-lg max-w-xs">
                                <p className="text-sm">I have the battery with me. Will replace it shortly.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {userStep === 4 && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <div className="flex items-center gap-2 mb-3">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <p className="font-semibold text-green-900">Service Complete</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg space-y-4">
                            <div>
                              <p className="text-sm font-semibold text-primary mb-2">Rate Your Experience</p>
                              <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <button key={star} className="text-2xl hover:scale-125 transition">
                                    {star <= 5 ? "⭐" : "☆"}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div className="border-t pt-4">
                              <p className="text-sm font-semibold text-primary mb-2">Service Summary</p>
                              <div className="space-y-1 text-sm text-muted-foreground">
                                <p>Service: Battery Replacement</p>
                                <p>Duration: 15 minutes</p>
                                <p className="font-bold text-primary mt-2">Total: ₹850</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Action Button */}
                    <Button 
                      onClick={handleUserNext}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3"
                    >
                      {userStep === userSteps.length - 1 ? "Start Over" : "Next Step"} →
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Mechanic Demo Tab */}
          <TabsContent value="mechanic" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Workflow Steps */}
              <div className="space-y-4">
                {mechanicSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                      step.status === "active"
                        ? "border-accent bg-accent/5 shadow-lg scale-105"
                        : step.status === "completed"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 bg-white hover:border-accent/50"
                    }`}
                    onClick={() => setMechanicStep(index)}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                        step.status === "active"
                          ? "bg-accent"
                          : step.status === "completed"
                          ? "bg-green-500"
                          : "bg-gray-300"
                      }`}>
                        {step.status === "completed" ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-primary mb-1">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: Live Demo Screen */}
              <div className="relative">
                <Card className="p-8 border-2 border-accent/20 shadow-2xl bg-gradient-to-br from-white to-gray-50">
                  {/* Demo Screen Content */}
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                      <h3 className="font-bold text-lg text-primary">Mechanic Dashboard</h3>
                      <div className="text-xs font-semibold text-green-600">ONLINE</div>
                    </div>

                    {/* Dynamic Content Based on Step */}
                    {mechanicStep === 0 && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <p className="font-semibold text-primary mb-3">Nearby Requests</p>
                          <div className="space-y-2">
                            <div className="bg-white p-3 rounded-lg border-2 border-accent cursor-pointer hover:shadow-md transition">
                              <div className="flex justify-between items-start mb-2">
                                <p className="font-bold text-primary">Battery Issue</p>
                                <span className="text-xs bg-accent text-white px-2 py-1 rounded">NEW</span>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">Bike • 2.3 km away</p>
                              <p className="text-xs text-muted-foreground">Predicted: Battery replacement needed</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg opacity-50">
                              <p className="font-bold text-primary">Brake System Issue</p>
                              <p className="text-sm text-muted-foreground">Car • 5.1 km away</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {mechanicStep === 1 && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="bg-accent/10 p-4 rounded-lg border border-accent/30">
                          <p className="font-semibold text-primary mb-3">Request Details</p>
                          <div className="bg-white p-4 rounded-lg space-y-3">
                            <div>
                              <p className="text-xs font-semibold text-muted-foreground mb-1">CUSTOMER</p>
                              <p className="font-bold text-primary">Priya Singh</p>
                              <p className="text-sm text-muted-foreground">+91 90000 00002</p>
                            </div>
                            <div className="border-t pt-3">
                              <p className="text-xs font-semibold text-muted-foreground mb-1">VEHICLE & ISSUE</p>
                              <p className="font-bold text-primary">Bike • Battery Issue</p>
                              <p className="text-sm text-muted-foreground">Won't start, headlights dim</p>
                            </div>
                            <div className="border-t pt-3">
                              <p className="text-xs font-semibold text-muted-foreground mb-1">AI PREDICTION</p>
                              <p className="font-bold text-accent">94% Battery Replacement</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {mechanicStep === 2 && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <div className="flex items-center gap-2 mb-3">
                            <Navigation className="h-5 w-5 text-accent" />
                            <p className="font-semibold text-primary">Navigation</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg space-y-3">
                            <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center text-muted-foreground">
                              📍 Map View
                            </div>
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-muted-foreground">Distance: 2.3 km</span>
                              <span className="font-bold text-accent">ETA: 8 mins</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {mechanicStep === 3 && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <p className="font-semibold text-primary mb-3">Send Status Update</p>
                          <div className="bg-white p-3 rounded-lg space-y-2">
                            <button className="w-full p-2 text-left text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                              ✓ Arrived at location
                            </button>
                            <button className="w-full p-2 text-left text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                              🔧 Working on repair
                            </button>
                            <button className="w-full p-2 text-left text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                              ⏱️ Delayed (traffic)
                            </button>
                            <button className="w-full p-2 text-left text-sm border border-accent/30 rounded-lg hover:bg-accent/5 transition font-semibold text-accent">
                              💬 Custom message
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {mechanicStep === 4 && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <div className="flex items-center gap-2 mb-3">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <p className="font-semibold text-green-900">Mark Complete</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg space-y-4">
                            <div>
                              <p className="text-sm font-semibold text-primary mb-2">Service Details</p>
                              <div className="space-y-2 text-sm text-muted-foreground">
                                <p>Service: Battery Replacement</p>
                                <p>Duration: 15 minutes</p>
                                <p>Parts Cost: ₹500</p>
                                <p>Labor: ₹350</p>
                              </div>
                            </div>
                            <div className="border-t pt-4 bg-green-50 p-3 rounded-lg">
                              <p className="text-sm font-bold text-green-900">You Earned: ₹315</p>
                              <p className="text-xs text-green-700">Payout in 2-4 hours</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Action Button */}
                    <Button 
                      onClick={handleMechanicNext}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3"
                    >
                      {mechanicStep === mechanicSteps.length - 1 ? "Start Over" : "Next Step"} →
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Info Box */}
        <div className="mt-12 bg-accent/5 border border-accent/30 rounded-xl p-6 text-center">
          <p className="text-muted-foreground">
            Click through each step to explore the complete workflow. Both drivers and mechanics benefit from real-time updates, AI predictions, and secure communication.
          </p>
        </div>
      </div>
    </section>
  );
}
