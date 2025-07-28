import { Calendar, AlertTriangle, ShoppingCart, CheckCircle, Users, MapPin, Trophy, Shield, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EcosystemSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Complete Waste Management Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From pickup scheduling to compost purchasing, we've got every aspect of sustainable 
            waste management covered.
          </p>
        </div>

        {/* Three Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-8 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Pickup Scheduling</h3>
              <p className="text-muted-foreground mb-4">
                Schedule waste collection at your convenience. Choose date, time, and waste type.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Flexible timing</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Multiple waste types</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Reliable collectors</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center p-8 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Report Illegal Dumping</h3>
              <p className="text-muted-foreground mb-4">
                Help keep Kenya clean by reporting illegal waste dumping in your area.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Photo evidence</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>GPS tracking</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Follow-up system</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center p-8 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compost Marketplace</h3>
              <p className="text-muted-foreground mb-4">
                Buy premium compost manure from certified producers across Kenya.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Quality assured</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Direct from producers</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Various quantities</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-4 text-primary">CompostConnect</h4>
              <h5 className="font-medium mb-3">Collector Network</h5>
              <p className="text-sm text-muted-foreground mb-3">
                Connect with verified waste collectors in your area with top-notch experience.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Verified profiles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Competitive rates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Service reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="space-y-6">
            <div>
              <h5 className="font-medium mb-3">Location-based Services</h5>
              <p className="text-sm text-muted-foreground mb-3">
                Find services tailored to your specific location across Kenya.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>City-wide coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Local partnerships</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Geographic pricing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <h5 className="font-medium mb-3">Reward System</h5>
              <p className="text-sm text-muted-foreground mb-3">
                Earn points and rewards for contributing to environmental sustainability.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Activity rewards</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Environmental impact</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Community recognition</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;