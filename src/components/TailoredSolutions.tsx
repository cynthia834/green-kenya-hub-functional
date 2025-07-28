import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const TailoredSolutions = () => {
  const { toast } = useToast();

  const handleGetStarted = (solutionType: string) => {
    toast({
      title: "Getting Started",
      description: `Initializing ${solutionType} solution setup...`,
    });
    
    // Navigate to the pickup section for all get started actions
    const pickupSection = document.getElementById('pickup-section');
    if (pickupSection) {
      pickupSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const solutions = [
    {
      title: "Residential Pickup",
      description: "Perfect for households looking to compost kitchen scraps and organic waste.",
      icon: "🏠",
      features: ["Weekly pickup", "Organic waste only", "Compost delivery", "Mobile tracking"],
      price: "From $25/month"
    },
    {
      title: "Commercial Services",
      description: "Comprehensive waste management for restaurants, cafes, and businesses.",
      icon: "🏢",
      features: ["Daily pickup", "All organic waste", "Bulk processing", "Sustainability reports"],
      price: "From $150/month"
    },
    {
      title: "Community Programs",
      description: "Large-scale composting solutions for neighborhoods and municipalities.",
      icon: "🌍",
      features: ["Community bins", "Educational programs", "Bulk composting", "Impact tracking"],
      price: "Custom pricing"
    }
  ];

  return (
    <section className="py-16 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tailored Solutions for Every Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect composting solution that fits your lifestyle or business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                <p className="text-muted-foreground">{solution.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4">
                  <div className="text-lg font-semibold text-primary mb-3">
                    {solution.price}
                  </div>
                  <Button 
                    className="w-full"
                    onClick={() => handleGetStarted(solution.title)}
                  >
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => handleGetStarted("Custom")}
          >
            Contact Us for Custom Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TailoredSolutions;