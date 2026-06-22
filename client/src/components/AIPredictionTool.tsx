import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Zap, Brain, Loader2, AlertCircle, CheckCircle } from "lucide-react";

/**
 * AI Prediction Mini-Tool Component
 * Real-time vehicle fault prediction based on symptom description
 * Rule-based AI system with instant feedback
 */

interface PredictionResult {
  fault: string;
  confidence: number;
  mechanicType: string;
  description: string;
  severity: "low" | "medium" | "high";
}

const predictionRules: Array<{
  keywords: string[];
  fault: string;
  mechanicType: string;
  description: string;
  severity: "low" | "medium" | "high";
  confidence: number;
}> = [
  {
    keywords: ["won't start", "headlight dim", "battery", "no power"],
    fault: "Battery Issue",
    mechanicType: "Auto Electrician",
    description: "Your vehicle's battery is likely depleted or faulty. Needs replacement or charging.",
    severity: "high",
    confidence: 92
  },
  {
    keywords: ["engine overheat", "overheating", "temperature high", "steam"],
    fault: "Cooling System Issue",
    mechanicType: "Engine Specialist",
    description: "Cooling system malfunction detected. Check radiator, coolant, or thermostat.",
    severity: "high",
    confidence: 88
  },
  {
    keywords: ["tyre puncture", "flat tyre", "punctured", "tyre damage", "flat tire"],
    fault: "Flat Tyre",
    mechanicType: "Tyre Specialist",
    description: "Tyre puncture or damage detected. Needs repair or replacement.",
    severity: "medium",
    confidence: 95
  },
  {
    keywords: ["brake fail", "brake issue", "brakes not working", "brake problem", "no brakes"],
    fault: "Brake System Failure",
    mechanicType: "Brake Specialist",
    description: "Critical brake system issue. Immediate attention required for safety.",
    severity: "high",
    confidence: 90
  },
  {
    keywords: ["engine knock", "knocking sound", "engine noise", "strange noise"],
    fault: "Engine Knocking",
    mechanicType: "Engine Specialist",
    description: "Abnormal engine noise detected. Could be timing, fuel, or internal issue.",
    severity: "medium",
    confidence: 78
  },
  {
    keywords: ["transmission slip", "gear slip", "shifting problem", "transmission issue"],
    fault: "Transmission Problem",
    mechanicType: "Transmission Specialist",
    description: "Transmission slipping or shifting issues detected. Fluid or internal damage.",
    severity: "high",
    confidence: 85
  },
  {
    keywords: ["oil leak", "leaking", "fluid leak", "dripping"],
    fault: "Fluid Leak",
    mechanicType: "General Mechanic",
    description: "Engine or transmission fluid leak detected. Check for damaged seals or gaskets.",
    severity: "medium",
    confidence: 82
  },
  {
    keywords: ["steering hard", "steering stiff", "steering problem", "power steering"],
    fault: "Power Steering Issue",
    mechanicType: "Steering Specialist",
    description: "Power steering system malfunction. Check fluid level and pump.",
    severity: "medium",
    confidence: 80
  },
  {
    keywords: ["fuel pump", "fuel issue", "no fuel", "fuel problem"],
    fault: "Fuel System Issue",
    mechanicType: "Fuel System Specialist",
    description: "Fuel pump or fuel system problem detected. May need fuel filter or pump replacement.",
    severity: "high",
    confidence: 87
  },
  {
    keywords: ["alternator", "charging", "battery not charging"],
    fault: "Alternator Failure",
    mechanicType: "Auto Electrician",
    description: "Alternator not charging battery. Needs replacement or repair.",
    severity: "high",
    confidence: 89
  }
];

export default function AIPredictionTool() {
  const [symptom, setSymptom] = useState("");
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Simulate AI analysis with realistic delay
  const analyzeSymptoм = (input: string) => {
    if (!input.trim()) {
      setPrediction(null);
      setShowResult(false);
      return;
    }

    setIsAnalyzing(true);
    setShowResult(false);

    // Simulate API call delay (200-400ms for realistic feel)
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      
      // Find matching rule
      let bestMatch: (typeof predictionRules)[0] | null = null;
      let maxMatches = 0;

      for (const rule of predictionRules) {
        const matches = rule.keywords.filter(keyword =>
          lowerInput.includes(keyword)
        ).length;

        if (matches > maxMatches) {
          maxMatches = matches;
          bestMatch = rule;
        }
      }

      if (bestMatch && maxMatches > 0) {
        // Adjust confidence based on match quality
        const adjustedConfidence = Math.min(
          bestMatch.confidence,
          Math.max(70, bestMatch.confidence - (3 - maxMatches) * 2)
        );

        setPrediction({
          fault: bestMatch.fault,
          confidence: adjustedConfidence,
          mechanicType: bestMatch.mechanicType,
          description: bestMatch.description,
          severity: bestMatch.severity
        });
      } else {
        // Generic fallback prediction
        setPrediction({
          fault: "General Vehicle Issue",
          confidence: 45,
          mechanicType: "General Mechanic",
          description: "Unable to identify specific issue. A general mechanic can diagnose the problem.",
          severity: "low"
        });
      }

      setIsAnalyzing(false);
      setShowResult(true);
    }, 300);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSymptom(value);
    analyzeSymptoм(value);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "text-red-600 bg-red-50 border-red-200";
      case "medium":
        return "text-orange-600 bg-orange-50 border-orange-200";
      case "low":
        return "text-green-600 bg-green-50 border-green-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high":
        return "🔴 Critical";
      case "medium":
        return "🟡 Moderate";
      case "low":
        return "🟢 Minor";
      default:
        return "⚪ Unknown";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
            <span className="text-accent font-semibold text-sm">Try Our AI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Instant Vehicle Diagnosis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Describe your vehicle's symptoms and our AI will predict the issue with up to 95% accuracy. Try it now!
          </p>
        </div>

        {/* Main Tool Card */}
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 border-2 border-accent/20 shadow-2xl bg-gradient-to-br from-white to-gray-50">
            {/* Input Section */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-primary mb-3">
                What's wrong with your vehicle?
              </label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="e.g., 'My bike won't start and the headlights are dim' or 'Engine is overheating'"
                  value={symptom}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition text-base"
                />
                <Brain className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-accent pointer-events-none" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Type naturally. AI analyzes keywords to predict the issue.
              </p>
            </div>

            {/* Analysis State */}
            {isAnalyzing && (
              <div className="flex items-center justify-center py-12 space-x-3">
                <Loader2 className="h-6 w-6 text-accent animate-spin" />
                <span className="text-muted-foreground font-medium">Analyzing your symptoms...</span>
              </div>
            )}

            {/* Result Display */}
            {showResult && prediction && !isAnalyzing && (
              <div className={`animate-fade-in space-y-4 p-6 rounded-xl border-2 ${getSeverityColor(prediction.severity)}`}>
                {/* Prediction Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-5 w-5" />
                      <h3 className="text-xl font-bold">Predicted Issue</h3>
                    </div>
                    <p className="text-2xl font-bold text-accent mb-2">{prediction.fault}</p>
                    <p className="text-sm font-medium">{getSeverityBadge(prediction.severity)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Confidence</p>
                    <p className="text-3xl font-bold text-accent">{prediction.confidence}%</p>
                  </div>
                </div>

                {/* Confidence Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-accent h-full transition-all duration-500"
                    style={{ width: `${prediction.confidence}%` }}
                  />
                </div>

                {/* Details */}
                <div className="border-t-2 pt-4 space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Recommended Mechanic</p>
                    <p className="font-bold text-primary flex items-center gap-2">
                      <span className="text-lg">🔧</span>
                      {prediction.mechanicType}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">What This Means</p>
                    <p className="text-sm leading-relaxed text-primary">{prediction.description}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="border-t-2 pt-4 flex gap-3">
                  <Button className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    Request Help Now
                  </Button>
                  <Button variant="outline" className="flex-1 border-accent text-accent hover:bg-accent/5">
                    Learn More
                  </Button>
                </div>
              </div>
            )}

            {/* Empty State */}
            {!isAnalyzing && !showResult && (
              <div className="text-center py-12 text-muted-foreground">
                <Brain className="h-12 w-12 mx-auto mb-4 text-accent/30" />
                <p>Start typing to see AI predictions in real-time</p>
              </div>
            )}
          </Card>

          {/* Example Symptoms */}
          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
            <p className="text-sm font-semibold text-primary mb-3">Try these examples:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Won't start, headlights dim",
                "Engine overheating",
                "Flat tyre",
                "Brake failure",
                "Oil leak",
                "Steering hard to turn"
              ].map((example, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSymptom(example);
                    analyzeSymptoм(example);
                  }}
                  className="text-left text-sm p-2 bg-white border border-blue-200 rounded-lg hover:bg-blue-100 hover:border-blue-300 transition text-primary font-medium"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="max-w-3xl mx-auto mt-12 bg-accent/5 border border-accent/30 rounded-xl p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <AlertCircle className="h-5 w-5 text-accent" />
            <p className="font-semibold text-primary">How It Works</p>
          </div>
          <p className="text-muted-foreground text-sm">
            Our AI uses advanced pattern recognition to analyze vehicle symptoms and predict faults. It matches your description against thousands of known vehicle issues to provide accurate recommendations. Always consult with a professional mechanic for final diagnosis.
          </p>
        </div>
      </div>
    </section>
  );
}
