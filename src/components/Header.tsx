import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const handlePickupClick = () => {
    toast({
      title: "Pickup Service",
      description: "Opening pickup scheduling...",
    });
    // Navigate to pickup section
    const pickupSection = document.getElementById('pickup-section');
    if (pickupSection) {
      pickupSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReportClick = () => {
    toast({
      title: "Reports Dashboard",
      description: "Opening reports section...",
    });
    // This will open a reports modal or navigate to reports page
    const reportsModal = document.getElementById('reports-modal');
    if (reportsModal) {
      reportsModal.style.display = 'block';
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CompostConnect</h1>
              <p className="text-xs text-muted-foreground">Smart Waste Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
              🏠 Home
            </a>
            <button 
              onClick={handlePickupClick}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              🚛 Pickup
            </button>
            <button 
              onClick={handleReportClick}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              📊 Report
            </button>
            <a href="#marketplace" className="text-muted-foreground hover:text-primary transition-colors">
              🛒 Marketplace
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button size="sm">
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                🏠 Home
              </a>
              <button 
                onClick={handlePickupClick}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                🚛 Pickup
              </button>
              <button 
                onClick={handleReportClick}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                📊 Report
              </button>
              <a href="#marketplace" className="text-muted-foreground hover:text-primary transition-colors">
                🛒 Marketplace
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
                <Button size="sm">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;