import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Location from "../components/Sections/Location";
import MainSection from "../components/Sections/MainSection";
import StatsSection from "../components/Sections/StatsSection";
import Story from "../components/Sections/Story";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <div className="flex justify-center mx-8">
        <div className="max-w-7xl relative w-full">
          <Children />
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}

function Children() {
  return (
    <div className="flex flex-col items-center space-y-20">
      <MainSection />
      <div className="flex flex-col items-center space-y-10">
        <StatsSection />
        {/* <Story /> */}
        <br />
        <br />
        <br />
        <Location />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
