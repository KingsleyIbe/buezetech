'use client';

import { useEffect } from 'react';

const Schedule = () => {
     useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <section id="calendly" className="px-[50px] my-[100px]">
        <h1 className="sm:text-6xl text-center">Book a <span className="text-[#fd9800]">Free Consultation</span> and get Customized <span className="text-[#fd9800]">Quote</span> from Our Expert Team</h1>
          <div
      className="calendly-inline-widget min-w-[320px] h-[630px]"
      data-url="https://calendly.com/buezetechlimited/30min"

    ></div>
    </section>
  );
};

export default Schedule;
