import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Globe, Users, Brain, Shield, Smartphone, Gauge } from "lucide-react";
import { useEffect, useState } from "react";
import InteractiveDemo from "@/components/InteractiveDemo";
import AIPredictionTool from "@/components/AIPredictionTool";

/**
 * RoadRescue Showcase - Premium, engineered aesthetic
 * Design: Deep indigo + vibrant teal, Sora + Inter typography
 * Layout: Asymmetric, staggered grid with smooth scroll animations
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header with Glassmorphism */}
      <header className="fixed top-0 w-full z-50 transition-all duration-300" style={{
        backgroundColor: scrollY > 50 ? "rgba(245, 247, 250, 0.95)" : "rgba(245, 247, 250, 0.7)",
        backdropFilter: scrollY > 50 ? "blur(12px)" : "blur(4px)",
        borderBottom: scrollY > 50 ? "1px solid #dee2e6" : "none"
      }}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663783453524/KNywzArMze2HMgapTsHUtx/roadrescue-logo-mark-fVRATHc5UkrURg8XaJKZeD.webp" 
              alt="RoadRescue" 
              className="h-8 w-8"
            />
            <span className="font-bold text-xl text-primary">RoadRescue</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-foreground">
            <a href="#features" className="hover:text-accent transition">Features</a>
            <a href="#modules" className="hover:text-accent transition">Modules</a>
            <a href="#cta" className="hover:text-accent transition">Get Started</a>
          </nav>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Launch App
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background with parallax effect */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663783453524/KNywzArMze2HMgapTsHUtx/roadrescue-hero-bg-oBATtK2uKrmUKycQ79c5GR.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent z-10" />

        <div className="container mx-auto px-4 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="animate-fade-in">
              <div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
                <span className="text-accent font-semibold text-sm">AI-Powered Rescue Platform</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Stranded?<br />Help Arrives<br /><span className="text-accent">in Minutes</span>
              </h1>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Connect with verified mechanics instantly. AI predicts your vehicle's issues. Support in English, Kannada, and Hindi.
              </p>
              <div className="flex gap-4">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-semibold">
                  Request Help Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-base">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right: Feature Highlight */}
            <div className="relative h-96 lg:h-full">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663783453524/KNywzArMze2HMgapTsHUtx/ai-prediction-feature-XHVHLvG58Qzz4o7oUjF4NK.webp"
                alt="AI Prediction System"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Engineered for Speed & Trust
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every feature designed to get you help faster and keep you informed every step of the way.
            </p>
          </div>

          {/* Feature Grid - Staggered Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2 transform">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Brain className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">AI Fault Prediction</h3>
              <p className="text-muted-foreground">
                Intelligent diagnosis of vehicle issues. Describe your problem, and our AI predicts the fault with 94% accuracy.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2 transform md:mt-8">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Multilingual Support</h3>
              <p className="text-muted-foreground">
                English, Kannada, and Hindi. Get help in your preferred language with real-time translation.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2 transform">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Verified Mechanics</h3>
              <p className="text-muted-foreground">
                Connected with a trusted network of skilled, verified mechanics ready to help 24/7.
              </p>
            </Card>

            {/* Feature 4 */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2 transform">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Instant Matching</h3>
              <p className="text-muted-foreground">
                Real-time mechanic matching based on your vehicle type, location, and issue severity.
              </p>
            </Card>

            {/* Feature 5 */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2 transform md:mt-8">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Secure & Safe</h3>
              <p className="text-muted-foreground">
                End-to-end encrypted communication. Your data is protected with enterprise-grade security.
              </p>
            </Card>

            {/* Feature 6 */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2 transform">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Mobile First</h3>
              <p className="text-muted-foreground">
                Fully responsive design. Request help, track status, and communicate—all from your phone.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Prediction Tool Section */}
      <AIPredictionTool />

      {/* Interactive Demo Section */}
      <InteractiveDemo />

      {/* Modules Section */}
      <section id="modules" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
            Built for Everyone
          </h2>

          {/* Module 1: User */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
                <span className="text-accent font-semibold text-sm">For Drivers</span>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-4">User Module</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Stranded on the road? Our user-friendly interface gets you help in seconds.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Quick assistance requests with vehicle type selection</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Real-time request status tracking</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Direct communication with assigned mechanic</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Request history and service ratings</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663783453524/KNywzArMze2HMgapTsHUtx/multilingual-support-feature-Wi6thjhBpmEioyprc7D6tn.webp"
                alt="User Module"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Module 2: Mechanic */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-96 order-2 lg:order-1">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663783453524/KNywzArMze2HMgapTsHUtx/mechanic-network-feature-FBSLES53TSRtJUJ89rPrBs.webp"
                alt="Mechanic Module"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
                <span className="text-accent font-semibold text-sm">For Mechanics</span>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-4">Mechanic Module</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Grow your business with a steady stream of verified rescue requests.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Browse and accept nearby assistance requests</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>AI-predicted fault information for quick diagnosis</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Real-time customer communication</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Earnings tracking and performance ratings</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Module 3: Admin */}
          <div className="bg-primary text-white rounded-2xl p-12 text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 border border-white/30 rounded-full">
              <span className="text-accent font-semibold text-sm">For Administrators</span>
            </div>
            <h3 className="text-3xl font-bold mb-4">Admin Dashboard</h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Complete platform control with real-time analytics, user management, and system monitoring.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">2,500+</div>
                <p className="text-white/70">Active Users</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">450+</div>
                <p className="text-white/70">Verified Mechanics</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">98%</div>
                <p className="text-white/70">Satisfaction Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <p className="text-white/70">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Ready to Get Help?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of drivers and mechanics who trust RoadRescue for instant, reliable vehicle rescue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-semibold">
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-base">
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663783453524/KNywzArMze2HMgapTsHUtx/roadrescue-logo-mark-fVRATHc5UkrURg8XaJKZeD.webp" 
                  alt="RoadRescue" 
                  className="h-6 w-6"
                />
                <span className="font-bold text-lg">RoadRescue</span>
              </div>
              <p className="text-white/70">Connecting stranded drivers with nearby mechanics instantly.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-accent transition">Features</a></li>
                <li><a href="#" className="hover:text-accent transition">Pricing</a></li>
                <li><a href="#" className="hover:text-accent transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-accent transition">About</a></li>
                <li><a href="#" className="hover:text-accent transition">Blog</a></li>
                <li><a href="#" className="hover:text-accent transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-accent transition">Privacy</a></li>
                <li><a href="#" className="hover:text-accent transition">Terms</a></li>
                <li><a href="#" className="hover:text-accent transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/70">
            <p>&copy; 2026 RoadRescue. All rights reserved. Engineered for speed, designed for trust.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
