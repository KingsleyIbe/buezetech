import React from 'react';
import ContactImage from "../../public/contact-us.png";
import Image from 'next/image';
import ContactForm from './ContactForm';

const ContactUs = () => {
  return (
    <section className="flex md:flex-row flex-col gap-5 py-5 md:justify-between px-[50px]">
      <div className="md:w-[50%] w-full">
        <div>
          <Image src={ContactImage} alt="" className="" />
        </div>
        <h2 className="my-5 text-3xl"><span>Get</span><span className="text-[#fd9800]"> in touch today</span></h2>
        <ul className="flex flex-col gap-2">
          <li className="bg-amber-100 p-2 rounded-[5px]"><span className="rounded-[100%] border border-[#fd9800] text-[#fd9800] py-0 px-2 mr-5">-</span><span>We’ll hop on a call and hear out your idea, protected by our NDA.</span></li>
          <li className="bg-amber-100 p-2 rounded-[5px]"><span className="rounded-[100%] border border-[#fd9800] text-[#fd9800] py-0 px-2 mr-5">-</span><span>We’ll provide a free analysis & quote + send over a proposal.</span></li>
          <li className="bg-amber-100 p-2 rounded-[5px]"><span className="rounded-[100%] border border-[#fd9800] text-[#fd9800] py-0 px-2 mr-5">-</span><span>Even if we don’t work together, feel free to consider us a free technical resource to bounce your thoughts/questions off of.</span></li>
        </ul>
        <p className="my-2">Alternatively, contact us via phone <span className="text-[#fd9800]">+234 902 095 6168</span> or email <span className="text-[#fd9800]">info@buezetech.com</span></p>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactUs;
