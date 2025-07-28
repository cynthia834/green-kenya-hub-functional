import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EcosystemSection from "@/components/EcosystemSection";
import TailoredSolutions from "@/components/TailoredSolutions";
import PickupSection from "@/components/PickupSection";
import Marketplace from "@/components/Marketplace";
import ReportsModal from "@/components/ReportsModal";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
      <EcosystemSection />
      <TailoredSolutions />
      <PickupSection />
      <Marketplace />
      <ReportsModal />
      <Footer />
    </div>
  );
};

export default Index;
