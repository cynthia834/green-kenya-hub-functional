import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const [location, setLocation] = useState("");
  const { toast } = useToast();

  const handleSchedulePickup = () => {
    toast({
      title: "Schedule Pickup",
      description: "Opening pickup form...",
    });
    // Scroll to pickup form
    const pickupSection = document.getElementById('pickup-section');
    if (pickupSection) {
      pickupSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 to-green-100">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:rgb(34,197,94);stop-opacity:0.3" /><stop offset="100%" style="stop-color:rgb(22,163,74);stop-opacity:0.5" /></linearGradient></defs><rect width="1200" height="600" fill="url(%23grad1)"/><circle cx="100" cy="100" r="50" fill="rgb(34,197,94)" opacity="0.1"/><circle cx="300" cy="200" r="30" fill="rgb(22,163,74)" opacity="0.1"/><circle cx="800" cy="150" r="40" fill="rgb(34,197,94)" opacity="0.1"/><circle cx="1000" cy="300" r="35" fill="rgb(22,163,74)" opacity="0.1"/></svg>')`
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
          <span className="mr-2">🌱</span>
          Join Our Smart Waste Partner & Compost Finder
        </div>

        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            CompostConnect
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
          Connect with local collectors and turn your organic waste into valuable compost
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
            onClick={handleSchedulePickup}
          >
            Schedule Pickup →
          </Button>
          <Input
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full sm:w-64 bg-white/10 border-white/20 text-white placeholder:text-white/60"
          />
        </div>

        {/* Complete Waste Management Ecosystem Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Complete Waste Management Ecosystem
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            From pickup scheduling to compost purchasing, we've got every aspect of sustainable waste management covered.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 text-white">
            <div className="flex items-center justify-center mb-2">
              <span className="text-2xl mr-2">🗑️</span>
            </div>
            <div className="text-3xl font-bold text-primary mb-1">50K+</div>
            <div className="text-sm text-white/80">Waste Pickups</div>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 text-white">
            <div className="flex items-center justify-center mb-2">
              <span className="text-2xl mr-2">🌱</span>
            </div>
            <div className="text-3xl font-bold text-primary mb-1">25K+</div>
            <div className="text-sm text-white/80">Tons Composted</div>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 text-white">
            <div className="flex items-center justify-center mb-2">
              <span className="text-2xl mr-2">😊</span>
            </div>
            <div className="text-3xl font-bold text-primary mb-1">98%</div>
            <div className="text-sm text-white/80">Customer Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;