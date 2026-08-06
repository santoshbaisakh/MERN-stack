import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Providers from "./components/Providers";
import DownloadApp from "./components/DownloadApp";
import Testimonial from "./components/Testimonial";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <Providers />
      <DownloadApp />
      <Testimonial />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
