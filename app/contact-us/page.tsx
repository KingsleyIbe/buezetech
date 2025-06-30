import React from 'react'
import ContactUs from '../../components/contact-us/ContactUs';
import MainHeader from '../../components/common/MainHeader';
import TopHeader from '../../components/common/TopHeader';
import MobileHeader from '../../components/common/MobileHeader';
import Footer from '../../components/common/Footer';
import Schedule from '../../components/contact-us/Schedule';

export const metadata = {
  title: 'Bueze Tech Limited - IT Consulting Firm, Software Development Company, Tech Skills Training',
  description: 'IT Consulting Firm, Software Development Company, Tech Skills Training. Enroll in online courses like web development, mobile app dev, cybersecurity, and more. Bueze Tech helps you build a future in tech.',
  keywords: ['Bueze Tech', 'Online Tech Training', 'Web Development', 'Cybersecurity Courses', 'Learn Programming Online', 'IT Professional Trainings', 'Custom Software Development solutions', 'Technical Writing', 'Software Documentation', 'Low-Code/No-Code Solutions', 'best software company'],
  openGraph: {
    title: 'Bueze Tech Limited - IT Consulting Firm, Software Development Company, Tech Skills Training',
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
    title: 'Bueze Tech Limited - IT Consulting Firm, Software Development Company, Tech Skills Training',
    description: 'IT Consulting Firm, Software Development Company, Tech Skills Training. Start your tech journey today.',
    images: ['https://buezetech.com/og-image.png'],
  },
};

const page = () => {
  return (
    <div className="relative mt-[150px] pt-5">
        <TopHeader />
        <MainHeader />
        <MobileHeader />
        <ContactUs />
        <Schedule />
        <Footer />
    </div>
  );
};

export default page;
