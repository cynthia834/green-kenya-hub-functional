import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Leaf, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = () => {
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary to-green-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Stay Updated on Sustainable Living
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Get tips on composting, waste reduction, and environmental sustainability delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white border-white/20 text-foreground"
            />
            <Button 
              onClick={handleSubscribe}
              className="bg-foreground text-primary hover:bg-foreground/90 whitespace-nowrap"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">CompostConnect</span>
              </div>
              <p className="text-sm text-background/70">
                Transforming waste management in Kenya through smart technology, connecting rural 
                farmers with sustainable waste solutions and premium compost products.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-background/70 hover:text-primary cursor-pointer" />
                <Twitter className="h-5 w-5 text-background/70 hover:text-primary cursor-pointer" />
                <Instagram className="h-5 w-5 text-background/70 hover:text-primary cursor-pointer" />
              </div>
            </div>

            {/* Platform */}
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#" className="hover:text-primary">How it Works</a></li>
                <li><a href="#" className="hover:text-primary">For Makers</a></li>
                <li><a href="#" className="hover:text-primary">For Collectors</a></li>
                <li><a href="#" className="hover:text-primary">Pricing</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#" className="hover:text-primary">Help Center</a></li>
                <li><a href="#" className="hover:text-primary">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary">Safety Guidelines</a></li>
                <li><a href="#" className="hover:text-primary">Partnership Program</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#" className="hover:text-primary">About</a></li>
                <li><a href="#" className="hover:text-primary">Careers</a></li>
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-background/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-background/70">
              <div>
                <strong>Service Area:</strong><br />
                Nairobi - Kisumu - Eldoret<br />
                Mombasa - Nakuru - Kisumu
              </div>
              <div>
                <strong>Phone:</strong> +254 704 738 245<br />
                <strong>Support:</strong> support@compostconnect.co.ke
              </div>
              <div>
                <strong>Address:</strong><br />
                USIU Africa<br />
                Kahawa Sukari - Ruiru
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-background/20 text-center text-sm text-background/70">
            <p>© 2024 Copyright CompostConnect. All rights reserved.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-primary">Supported by</a> 
              <span className="mx-2">·</span> 
              <a href="#" className="hover:text-primary">Nairobi</a>
              <span className="mx-2">·</span>
              <a href="#" className="hover:text-primary">Kisumu</a>
              <span className="mx-2">·</span>
              <a href="#" className="hover:text-primary">Eldoret</a>
              <span className="mx-2">·</span>
              <a href="#" className="hover:text-primary">Terms & Service</a>
              <span className="mx-2">·</span>
              <a href="#" className="hover:text-primary">Service Areas</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;