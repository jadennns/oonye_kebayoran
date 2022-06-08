import Footer from "../components/Footer";
import Menus from "../components/Menus";
import Navbar from "../components/Navbar";

export default function Menu() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <div className="flex justify-center mx-8">
        <div className="max-w-7xl relative w-full">
          <div className="mt-10">
            <Menus />
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}
