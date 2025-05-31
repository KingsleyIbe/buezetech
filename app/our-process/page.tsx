import React from 'react'
import OurProcess from '../../components/our-process/OurProcess';
import MobileHeader from '../../components/common/MobileHeader';
import TopHeader from '../../components/common/TopHeader';
import MainHeader from '../../components/common/MainHeader';
import Intro from '../../components/our-process/Intro';
import CallToaction from '../../components/our-process/CallToaction';

const page = () => {
  return (
    <section className="relative mt-[150px] pt-5">
        <TopHeader />
        <MainHeader />
        <MobileHeader />
        <Intro />
        <OurProcess />
        <CallToaction />
    </section>
  )
}

export default page;