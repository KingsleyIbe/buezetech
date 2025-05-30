import React from 'react';

const ContactUs = () => {
  return (
    <section className="flex justify-between px-[50px]">
      <div>
        <h2><span>Get</span><span className="text-[#fd9800]"> in touch today</span></h2>
        <ul className="flex flex-col gap-2">
          <li className="bg-amber-100 p-2"><span className="rounded-[100%] border border-[#fd9800] text-[#fd9800] py-0 px-2 mr-5">-</span><span>We’ll hop on a call and hear out your idea, protected by our NDA.</span></li>
          <li><span className="rounded-[100%] border border-[#fd9800] text-[#fd9800] py-0 px-2 mr-5">-</span><span>We’ll provide a free analysis & quote + send over a proposal.</span></li>
          <li><span className="rounded-[100%] border border-[#fd9800] text-[#fd9800] py-0 px-2 mr-5">-</span><span>Even if we don’t work together, feel free to consider us a free technical resource to bounce your thoughts/questions off of.</span></li>
        </ul>
        <p>Alternatively, contact us via phone <span className="text-[#fd9800]">+234 902 095 6168</span> or email <span className="text-[#fd9800]">info@buezetech.com</span></p>
      </div>
      <form> 
        <h3>We respond promptly, typically within <span className="text-[#fd9800]"> 30 minutes.</span></h3>
      </form>
    </section>
  );
};

export default ContactUs;
