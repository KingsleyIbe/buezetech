import Footer from "../components/common/Footer";
import MainHeader from "../components/common/MainHeader";
import MobileHeader from "../components/common/MobileHeader";
import TopHeader from "../components/common/TopHeader";

const Home = () => {
  return (
    <div className="relative">
      <TopHeader />
      <MobileHeader />
      <MainHeader />
      <Footer />
    </div>
  );
};

export default Home;
