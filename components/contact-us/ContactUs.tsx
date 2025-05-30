import React from 'react';

const ContactUs = () => {
  return (
    <section className="flex gap-5 justify-between px-[50px]">
      <div className="w-[50%]">
        <h2 className="my-5 text-3xl"><span>Get</span><span className="text-[#fd9800]"> in touch today</span></h2>
        <ul className="flex flex-col gap-2">
          <li className="bg-amber-100 p-2 rounded-[5px]"><span className="rounded-[100%] border border-[#fd9800] text-[#fd9800] py-0 px-2 mr-5">-</span><span>We’ll hop on a call and hear out your idea, protected by our NDA.</span></li>
          <li className="bg-amber-100 p-2 rounded-[5px]"><span className="rounded-[100%] border border-[#fd9800] text-[#fd9800] py-0 px-2 mr-5">-</span><span>We’ll provide a free analysis & quote + send over a proposal.</span></li>
          <li className="bg-amber-100 p-2 rounded-[5px]"><span className="rounded-[100%] border border-[#fd9800] text-[#fd9800] py-0 px-2 mr-5">-</span><span>Even if we don’t work together, feel free to consider us a free technical resource to bounce your thoughts/questions off of.</span></li>
        </ul>
        <p className="my-2">Alternatively, contact us via phone <span className="text-[#fd9800]">+234 902 095 6168</span> or email <span className="text-[#fd9800]">info@buezetech.com</span></p>
      </div>
      <form className="w-[50%] p-5 bg-[#fff] shadow-lg rounded-lg"> 
        <h3 className="border-b pb-5 border-b-[#ccc] text-xl">We respond promptly, typically within <span className="text-[#fd9800]"> 30 minutes.</span></h3>
        <div className="my-10">
          <div className="flex flex-col mb-5">
            <label htmlFor="fullNmae">Full Name<sup className="text-[#f00]">*</sup></label>
            <input type="text" placeholder="Enter full name" className="border p-2 mt-2 rounded-[5px]" />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="email">Email<sup className="text-[#f00]">*</sup></label>
            <input type="email" placeholder="johndoe@example.com" className="border p-2 mt-2 rounded-[5px]" />
          </div>
          <div className="flex gap-10 mb-5">
            <div className="flex-col flex w-[50%]">
              <label htmlFor="phone">Phone<sup className="text-[#f00]">*</sup></label>
              <input type="tel" placeholder="+234 555 333 6666" className="border p-2 mt-2 rounded-[5px]" />
            </div>
            <div className="flex flex-col mb-5 w-[50%]">
              <label htmlFor="fullNmae">Budget<sup className="text-[#f00]">*</sup></label>
              <select name="budget" id="" className="border p-2 mt-2 rounded-[5px]">
                <option value="">Select</option>
                <option value="">$10-$1k</option>
                <option value="">$1-$20k</option>
                <option value="">$20-$50k</option>
                <option value="">$50-$100k</option>
                <option value="">$100-$250k</option>
                <option value="">No funding yet</option>
              </select>
          </div>
          </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="email">Description<sup className="text-[#f00]">*</sup></label>
              <textarea required placeholder="Enter your message" className="border p-2 mt-2 rounded-[5px]"></textarea>
          </div>
           <div className="flex flex-col mb-5 w-[50%] m-auto">
              <button type="submit" className="bg-[#fd9800] hover:text-[#fd9800] rounded-lg py-[12px] px-[22px] text-[#181842] hover:bg-[#181842]">Submit</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
