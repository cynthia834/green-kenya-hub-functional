import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TailoredSolutions from "@/components/TailoredSolutions";
import PickupSection from "@/components/PickupSection";
import Marketplace from "@/components/Marketplace";
import ReportsModal from "@/components/ReportsModal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TailoredSolutions />
      <PickupSection />
      <Marketplace />
      <ReportsModal />
    </div>
  );
};

export default Index;
