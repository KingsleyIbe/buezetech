import Carousel from "../components/common/Carousel";
import Footer from "../components/common/Footer";
import MainHeader from "../components/common/MainHeader";
import MobileHeader from "../components/common/MobileHeader";
import TopHeader from "../components/common/TopHeader";
import OurIndustries from "../components/home/OurIndustries";
import Services from "../components/home/Services";

const Home = () => {
  return (
    <div className="relative">
      <TopHeader />
      <MobileHeader />
      <MainHeader />
      <Carousel />
      <Services />
      <OurIndustries />
      <Footer />
    </div>
  );
};

export default Home;
