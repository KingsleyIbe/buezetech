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


export const metadata = {
  title: 'Bueze Tech Limited – Software Company - Learn Tech Skills Online',
  description: 'IT Consulting Firm, Software Development Company, Tech Skills Training. Enroll in online courses like web development, mobile app dev, cybersecurity, and more. Bueze Tech helps you build a future in tech.',
  keywords: ['Bueze Tech', 'Online Tech Training', 'Web Development', 'Cybersecurity Courses', 'Learn Programming Online', 'IT Professional Trainings', 'Custom Software Development solutions', 'Technical Writing', 'Software Documentation', 'Low-Code/No-Code Solutions', 'best software company'],
  openGraph: {
    title: 'Bueze Tech – IT Company - Online Tech Courses',
    description: 'IT Consulting Firm, Software Development Company, Tech Skills Training. Start your tech journey with Bueze Tech Limited. 100% online, beginner-friendly courses.',
    url: 'https://buezetech.com',
    siteName: 'Bueze Tech Limited',
    images: [
      {
        url: 'https://buezetech.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bueze Tech - IT Consulting Firm, Software Development Company, Tech Skills Training',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bueze Tech – Tech Organisation - Online Tech Courses',
    description: 'IT Consulting Firm, Software Development Company, Tech Skills Training. Start your tech journey today.',
    images: ['https://buezetech.com/og-image.png'],
  },
};

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
