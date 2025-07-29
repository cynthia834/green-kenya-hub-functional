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
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/lovable-uploads/community-garden.png')`
            }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Welcome to
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              CompostConnect
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
              Buy high-quality compost manure directly from certified producers
            </p>

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

          {/* ✅ Moved stats inside normal flow instead of absolutely positioning */}
          <div className="mt-16">
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