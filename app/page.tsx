import Carousel from "../components/common/Carousel";
import Footer from "../components/common/Footer";
import MainHeader from "../components/common/MainHeader";
import MobileHeader from "../components/common/MobileHeader";
import TopHeader from "../components/common/TopHeader";
import AboutUs from "../components/home/AboutUs";
import Accordion from "../components/home/Accordion";
import OurIndustries from "../components/home/OurIndustries";
import Services from "../components/home/Services";
import CallToaction from "../components/our-process/CallToaction";

const Home = () => {
  return (
    <div className="relative">
      <TopHeader />
      <MobileHeader />
      <MainHeader />
      <Carousel />
      <Services />
      <OurIndustries />
      <AboutUs />
      <Accordion />
      <CallToaction />
      <Footer />
    </div>
  );
};

export default Home;
