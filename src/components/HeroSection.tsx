import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const [location, setLocation] = useState("");
  const { toast } = useToast();

  const handleShopCompost = () => {
    const marketplace = document.getElementById('marketplace');
    if (marketplace) {
      marketplace.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/lovable-uploads/5dbf62a4-1024-4ff3-a990-a16a8a5b069b.png')`
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-3xl">
          {/* Main Headline */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 leading-tight">
              Transform Waste
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 leading-tight">
              Into Wealth
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-white/95 mb-4 font-medium">
              Connect Communities Through Sustainable Composting
            </p>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Join our platform to buy premium compost, schedule waste pickups, and contribute to a greener future for your community.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              onClick={handleShopCompost}
            >
              Shop Compost →
            </Button>
            <Input
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full sm:w-64 bg-white border-white/20"
            />
          </div>
        </div>

        {/* Stats Section - positioned at bottom */}
        <div className="absolute bottom-24 left-4 right-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <div className="text-white">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">✓</span>
              </div>
              <div className="text-3xl font-bold text-primary mb-1">50K+</div>
              <div className="text-sm text-white/80">Waste Pickups</div>
            </div>
            
            <div className="text-white">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">✓</span>
              </div>
              <div className="text-3xl font-bold text-primary mb-1">25K+</div>
              <div className="text-sm text-white/80">Tons Composted</div>
            </div>
            
            <div className="text-white">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">✓</span>
              </div>
              <div className="text-3xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-white/80">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;