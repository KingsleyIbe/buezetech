import Link from 'next/link';
import React from 'react';

const CallToaction = () => {
  return (
    <section className="bg-[#ddd] text-center p-10 flex flex-col ">
        <div className="text-3xl mb-5">
        <p>Curious to Learn More About our </p>
        <p className="text-[#fd9800]">App Development Process?</p>
        <p>Let&#39;s Connect!</p>
        </div>
        <div className="w-[50%] m-auto">
        <button type="button" className={` bg-[#fd9800] hover:text-[#fd9800] rounded-lg py-[12px] px-[22px] text-[#181842] hover:bg-[#181842]`}>
                      <Link href="/contact-us#calendly">Book A Session</Link>
                    </button>
        </div>
    </section>
  );
};

export default CallToaction;