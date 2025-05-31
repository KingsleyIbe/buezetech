import React from 'react'
import MobileHeader from '../../components/common/MobileHeader';
import TopHeader from '../../components/common/TopHeader';
import MainHeader from '../../components/common/MainHeader';
import CallToaction from '../../components/our-process/CallToaction';
import Footer from '../../components/common/Footer';
import Community from '../../components/community/Community';

const page = () => {
  return (
    <section className="relative mt-[150px] pt-5">
        <TopHeader />
        <MainHeader />
        <MobileHeader />
        <Community />
        <CallToaction />
        <Footer />
    </section>
  )
}

export default page;