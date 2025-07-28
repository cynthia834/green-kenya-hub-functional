import { useState, useEffect } from "react";
import { X, Download, Calendar, TrendingUp, Users, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ReportsModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Create the modal element and add it to the body
    const modal = document.createElement('div');
    modal.id = 'reports-modal';
    modal.style.display = 'none';
    document.body.appendChild(modal);

    // Listen for modal visibility changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          const target = mutation.target as HTMLElement;
          setIsVisible(target.style.display !== 'none');
        }
      });
    });

    observer.observe(modal, { attributes: true });

    return () => {
      observer.disconnect();
      if (document.body.contains(modal)) {
        document.body.removeChild(modal);
      }
    };
  }, []);

  const closeModal = () => {
    const modal = document.getElementById('reports-modal');
    if (modal) {
      modal.style.display = 'none';
    }
    setIsVisible(false);
  };

  const reports = [
    {
      id: 1,
      title: "Monthly Waste Collection Report",
      description: "Comprehensive overview of waste collection activities",
      date: "December 2024",
      status: "Ready",
      type: "PDF",
      size: "2.4 MB"
    },
    {
      id: 2,
      title: "Environmental Impact Summary",
      description: "CO2 reduction and sustainability metrics",
      date: "Q4 2024",
      status: "Ready",
      type: "PDF",
      size: "1.8 MB"
    },
    {
      id: 3,
      title: "Collector Performance Analytics",
      description: "Performance metrics for all registered collectors",
      date: "December 2024",
      status: "Processing",
      type: "Excel",
      size: "3.2 MB"
    },
    {
      id: 4,
      title: "Customer Satisfaction Survey",
      description: "Feedback and satisfaction scores from customers",
      date: "November 2024",
      status: "Ready",
      type: "PDF",
      size: "1.2 MB"
    }
  ];

  const stats = [
    { label: "Total Collections", value: "1,247", icon: Recycle, color: "text-green-600" },
    { label: "Active Collectors", value: "89", icon: Users, color: "text-blue-600" },
    { label: "CO2 Saved (tons)", value: "156.7", icon: TrendingUp, color: "text-emerald-600" },
    { label: "Customer Rating", value: "4.8/5", icon: TrendingUp, color: "text-yellow-600" }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-foreground">Reports Dashboard</h2>
          <Button variant="ghost" size="sm" onClick={closeModal}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Available Reports */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Available Reports</h3>
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                Generate Custom Report
              </Button>
            </div>

            <div className="grid gap-4">
              {reports.map((report) => (
                <Card key={report.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{report.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{report.description}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>📅 {report.date}</span>
                          <span>📄 {report.type}</span>
                          <span>💾 {report.size}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={report.status === "Ready" ? "default" : "secondary"}
                        >
                          {report.status}
                        </Badge>
                        {report.status === "Ready" && (
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 p-4 bg-secondary/20 rounded-lg">
            <h3 className="font-semibold mb-4">Quick Actions</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                📊 Export All Data
              </Button>
              <Button variant="outline" size="sm">
                📧 Email Reports
              </Button>
              <Button variant="outline" size="sm">
                📋 Schedule Automated Reports
              </Button>
              <Button variant="outline" size="sm">
                🔄 Refresh Data
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsModal;