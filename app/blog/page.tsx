import React from 'react'
import MobileHeader from '../../components/common/MobileHeader';
import TopHeader from '../../components/common/TopHeader';
import MainHeader from '../../components/common/MainHeader';
import CallToaction from '../../components/our-process/CallToaction';
import Footer from '../../components/common/Footer';
import Blog from '../../components/blog/Blog';

const page = () => {
  return (
    <section className="relative pt-5">
        <TopHeader />
        <MainHeader />
        <MobileHeader />
        <Blog />
        <CallToaction />
        <Footer />
    </section>
  )
}

export default page;