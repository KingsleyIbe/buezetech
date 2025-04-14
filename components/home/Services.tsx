'use client';
import React, { useState } from 'react';

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: 'Software Development',
    description: 'We build scalable, maintainable software solutions tailored to your business needs. From planning to deployment, we ensure quality at every step.',
  },
  {
    title: 'IT Professional Trainings',
    description: 'Our hands-on IT training programs empower professionals with real-world skills in software development, cybersecurity, cloud, and more.',
  },
  {
    title: 'Cybersecurity',
    description: 'We offer top-notch cybersecurity services, including risk assessments, penetration testing, and secure systems implementation.',
  },
  {
    title: 'UI Research',
    description: 'Our research-driven approach ensures user interfaces are intuitive, efficient, and aligned with user expectations and behaviors.',
  },
  {
    title: 'UI/UX Design',
    description: 'We craft delightful digital experiences through user-focused interface and experience design.',
  },
  {
    title: 'Technical Writing',
    description: 'We create clear, concise, and user-friendly documentation that simplifies complex systems for end-users and developers alike.',
  },
  {
    title: 'Software Documentation',
    description: 'From API references to user manuals, our documentation supports software usability and maintenance.',
  },
  {
    title: 'Web Development',
    description: 'We develop responsive, performant websites that elevate your brand and meet business goals.',
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState<Service>(services[0]);

  return (
    <section className="bg-[#ddd] bg-deco1 px-6 md:px-16 py-20 text-[#181842]">
      <h2 className="text-3xl md:text-4xl mb-4 relative">
        <span className="after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-[4px] after:bg-[#fd9800] mr-4" />
        Our Services
      </h2>
      <p className="mb-10 max-w-2xl font-[BreeSerif]">
        At Bueze Tech Limited, we offer a diverse range of professional tech services tailored to businesses, individuals, and organizations ready to leverage innovation.
      </p>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 bg-deco2 bg-white p-4 shadow-md">
          <ul className="space-y-2">
            {services.map((service) => (
              <li
                key={service.title}
                onClick={() => setActiveService(service)}
                className={`cursor-pointer z-[50] p-3 rounded-md transition hover:bg-[#181842] hover:text-white ${
                  activeService.title === service.title ? 'bg-[#181842] text-white' : ''
                }`}
              >
                {service.title}
              </li>
            ))}
          </ul>
        </aside>

        {/* Content Section */}
        <div className="w-full lg:w-3/4 bg-white p-6 shadow-md]">
          <h3 className="text-2xl font-[BreeSerif] mb-4">{activeService.title}</h3>
          <p className="font-[BreeSerif]">{activeService.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
