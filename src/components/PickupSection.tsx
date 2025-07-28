import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const PickupSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    wasteType: "",
    notes: "",
    preferredDate: "",
    preferredTime: ""
  });
  const [showCollectorFinder, setShowCollectorFinder] = useState(false);
  const [collectors] = useState([
    { id: 1, name: "Green Valley Collectors", rating: 4.8, distance: "2.3 km", price: "$25" },
    { id: 2, name: "EcoWaste Solutions", rating: 4.9, distance: "3.1 km", price: "$22" },
    { id: 3, name: "Urban Compost Co.", rating: 4.7, distance: "4.2 km", price: "$28" }
  ]);

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSchedulePickup = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCollectorFinder(true);
    toast({
      title: "Pickup Scheduled!",
      description: "Now finding available collectors in your area...",
    });
  };

  const handleFindCollector = () => {
    setShowCollectorFinder(true);
    toast({
      title: "Finding Collectors",
      description: "Searching for available collectors in your area...",
    });
  };

  const handleSelectCollector = (collector: any) => {
    toast({
      title: "Collector Selected!",
      description: `${collector.name} has been notified of your pickup request.`,
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      wasteType: "",
      notes: "",
      preferredDate: "",
      preferredTime: ""
    });
    setShowCollectorFinder(false);
  };

  return (
    <section id="pickup-section" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Schedule Your Waste Pickup
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below to schedule a pickup with local waste collectors
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {!showCollectorFinder ? (
            <Card>
              <CardHeader>
                <CardTitle>Pickup Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSchedulePickup} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="wasteType">Waste Type</Label>
                      <Input
                        id="wasteType"
                        name="wasteType"
                        placeholder="e.g., Organic kitchen waste"
                        value={formData.wasteType}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Pickup Address</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="preferredDate">Preferred Date</Label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferredTime">Preferred Time</Label>
                      <Input
                        id="preferredTime"
                        name="preferredTime"
                        type="time"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      placeholder="Any special instructions or additional information..."
                      value={formData.notes}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" className="flex-1">
                      Schedule Pickup
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={handleFindCollector}
                      className="flex-1"
                    >
                      Find Collector
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Available Collectors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {collectors.map((collector) => (
                    <div key={collector.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{collector.name}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                            <span>⭐ {collector.rating}</span>
                            <span>📍 {collector.distance}</span>
                            <span className="font-medium text-primary">{collector.price}</span>
                          </div>
                        </div>
                        <Button 
                          onClick={() => handleSelectCollector(collector)}
                          size="sm"
                        >
                          Select
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button 
                    variant="outline" 
                    onClick={() => setShowCollectorFinder(false)}
                    className="w-full"
                  >
                    Back to Form
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default PickupSection;