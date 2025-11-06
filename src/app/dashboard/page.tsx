import ActivityOverview from "@/components/Dashboard/ActivityOverview";
import MainActions from "@/components/Dashboard/MainActions";
import WelcomeSection from "@/components/Dashboard/WelcomeSection";
import Navbar from "@/components/Navbar";

function DashboardPage() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        <WelcomeSection />
        <MainActions />
        <ActivityOverview />
      </div>
    </>
  );
}
export default DashboardPage;