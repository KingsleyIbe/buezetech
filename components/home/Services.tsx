'use client';
import React, { useState } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  clientBenefit: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Custom Software Development',
    description: `At Bueze Tech Limited, we specialize in building bespoke software tailored to 
    your exact business needs. Our custom solutions are designed to address your unique challenges—whether 
    it's automating workflows, improving customer interactions, or streamlining backend operations. We follow 
    an agile methodology, allowing flexibility, fast iterations, and continuous feedback throughout development. 
    From initial discovery and wireframing to deployment and post-launch support, our team ensures your 
    software is secure, scalable, and seamlessly integrated with your existing systems.`,
    clientBenefit: `By partnering with Bueze Tech Limited for custom software, clients enjoy tailor-made digital solutions that align perfectly with their operations and goals. This means improved efficiency, reduced manual processes, and competitive advantages that generic software simply can't provide. We also offer long-term maintenance and scalability options, ensuring your software grows as your business does.`

  },
  {
    id: 2,
    title: 'IT Professional Trainings',
    description: `Equip your team or kickstart your tech career with our intensive and practical IT training programs. We offer professional-level instruction in software development, cloud computing, DevOps, cybersecurity, networking, and more. Our trainings are designed to meet current industry demands, combining theory with real-world projects and case studies. Whether you’re a beginner, student, or an IT professional seeking to upskill, our personalized training tracks and mentorship ensure you stay competitive in a fast-evolving tech landscape.`,
    clientBenefit: `When you invest in our IT professional training programs, you’re not just gaining knowledge—you’re gaining an edge. Clients benefit from hands-on instruction, expert mentorship, and certification support that fast-tracks career growth and boosts internal team productivity. Companies can upskill their workforce quickly and affordably, reducing the need for outsourcing and strengthening in-house tech capacity.`,
  },
  {
    id: 3,
    title: 'Cybersecurity',
    description: `In today’s digital-first world, protecting your data and systems is not optional—it’s essential. At Bueze Tech Limited, we offer end-to-end cybersecurity services including risk assessments, penetration testing, vulnerability management, firewall configurations, incident response planning, and security awareness training. Our cybersecurity experts work closely with your team to fortify your digital infrastructure, ensure compliance with international standards (e.g., GDPR, ISO 27001), and build a culture of security from the ground up. We safeguard your business so you can operate with confidence.`,
    clientBenefit: `With Bueze Tech Limited safeguarding your systems, clients gain peace of mind and a proactive defense strategy. You’ll avoid costly breaches, reputational damage, and legal issues by staying ahead of threats. Our security-first approach empowers you to focus on growing your business while we handle compliance, threat mitigation, and 24/7 protection.`,
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: `We believe that good design is more than aesthetics—it’s how your users feel and interact with your product. Our UI/UX design team uses research-driven insights to craft visually stunning, user-friendly interfaces that engage users and drive retention. From prototyping and wireframing to user testing and accessibility optimization, we design experiences that are intuitive, inclusive, and aligned with your brand identity. Whether it’s for a web or mobile product, we make your app not just usable—but delightful.`,
    clientBenefit: `Exceptional UI/UX doesn’t just look good—it drives real results. Our clients benefit from increased user engagement, higher conversion rates, and reduced churn thanks to frictionless and intuitive design. Whether you're launching a new app or improving an existing product, our UX expertise helps you create loyal, satisfied users who keep coming back.`,
  },
  {
    id: 5,
    title: 'Technical Writing',
    description: `Clear communication is the foundation of effective technology use. Our technical writing service helps you bridge the gap between complex systems and everyday users. We create detailed and accurate content such as manuals, technical blogs, developer guides, help documentation, whitepapers, and internal policies. With a deep understanding of both tech and language, our writers ensure your documentation is well-structured, audience-appropriate, and easy to understand—enhancing user experience and reducing support overhead.`,
    clientBenefit: `Clear documentation reduces confusion, improves onboarding, and cuts down on support requests. Clients who use our technical writing services benefit from polished, professional content that boosts user confidence and product adoption. You’ll also save valuable time and ensure consistency across your team and user base with our well-structured documentation assets.`,
  },
  {
    id: 6,
    title: 'Software Documentation',
    description: `Every successful software product needs comprehensive documentation that supports developers, users, and stakeholders. We provide professionally written software documentation covering system architecture, API references, user instructions, coding standards, release notes, and integration guides. Our documentation solutions are tailored to fit agile workflows and are delivered in formats suitable for digital distribution, online help centers, or internal dev wikis. With our service, your team spends less time deciphering code and more time innovating.`,
    clientBenefit: `With our comprehensive software documentation, clients gain clarity and consistency that supports smooth development cycles, reduces technical debt, and accelerates onboarding for new team members. This results in lower support costs, better collaboration, and enhanced maintainability of your product over time.`,
  },
  {
    id: 7,
    title: 'Website Development',
    description: `Your website is often the first impression customers have of your brand—so we make it count. We develop responsive, modern, and visually appealing websites that not only look great but perform flawlessly across all devices. Our team uses the latest web technologies and best SEO practices to ensure your site is fast, secure, and discoverable. Whether you need a corporate site, landing page, blog, or full-scale e-commerce platform, we deliver solutions tailored to your brand, goals, and user journey.`,
    clientBenefit: `Your website becomes your digital headquarters—accessible 24/7. Clients benefit from stunning, high-performance websites that build brand credibility, drive traffic, and convert visitors into customers. Our SEO optimization and responsive design practices ensure your site ranks well on search engines and delivers a flawless experience on any device.`,
  },
   {
    id: 8,
    title: 'Low-Code/No-Code Solutions',
    description: `For businesses seeking rapid digital transformation without heavy development costs, our low-code/no-code solutions are ideal. We use platforms like Webflow, Bubble, Glide, and Microsoft PowerApps to build robust applications for internal operations, customer engagement, CRM, and more—often in days instead of months. Our experts help you design, configure, and launch these tools with minimal code while maintaining professional quality, scalability, and reliability. It’s speed and agility without compromising functionality.`,
    clientBenefit: `Clients benefit from faster time-to-market, lower development costs, and the ability to manage and tweak applications without waiting on a development cycle. With our support, businesses can launch MVPs quickly, test ideas affordably, and stay flexible in a changing market—all while maintaining a professional-grade product.`,
  },
   {
    id: 9,
    title: 'Mobile App Development',
    description: `Mobile is the future—and we help you meet your users where they are. Bueze Tech Limited develops cutting-edge mobile applications for Android, iOS, and cross-platform frameworks like React Native and Flutter. We handle everything from ideation, UI/UX design, development, testing, to publishing on app stores. Our apps are built to be fast, reliable, and engaging, whether for e-commerce, productivity, healthcare, or any custom purpose. We prioritize smooth performance and consistent updates to ensure long-term success.`,
    clientBenefit: `By choosing Bueze Tech for mobile development, clients unlock the power of a seamless mobile presence. Our apps help businesses boost user engagement, enable personalized customer experiences, and open up new revenue channels. We also ensure smooth app store approvals and provide post-launch support for updates and growth.`,
  },
  {
    id: 10,
    title: 'Tech Courses Tutorship',
    description: `Master the skills that matter with hands-on guidance from tech industry professionals. Our tutoring service offers personalized, interactive learning for individuals and groups across topics like HTML/CSS, JavaScript, Python, UI/UX, WordPress, Cloud Basics, Data Analytics and more. Unlike static video courses, our approach focuses on real-time feedback, project-based learning, and mentorship tailored to your pace and goals. Whether you're transitioning into tech or enhancing your existing skillset, we make learning effective and enjoyable.`,
    clientBenefit: `Clients benefit from guided learning tailored to individual goals, ensuring faster comprehension and better retention. Whether you’re switching careers or training a team, our approach shortens the learning curve and produces job-ready skills. You’ll walk away not just with knowledge, but with confidence and real-world experience to back it up.`,
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState<Service>(services[0]);

  return (
    <section id="services" className="bg-[#ddd] bg-deco1 px-6 md:px-16 py-20 text-[#181842]">
      <h2 className="text-[34px] md:text-4xl mb-4 relative font-bold">
        <span className="after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-[4px] after:bg-[#fd9800] mr-4" />
        Our Services
      </h2>
      <p className="mb-10 font-[BreeSerif]">
        At Bueze Tech Limited, we offer a diverse range of professional tech services tailored to meet the unique needs of businesses, individuals, and organizations that are ready to embrace innovation and drive meaningful transformation. Whether you're a startup seeking a scalable digital foundation, a growing business looking to automate operations, or an enterprise aiming to stay ahead in the digital race — our team of seasoned experts is committed to delivering solutions that generate real value. From custom software development and cybersecurity to UI/UX design and tech training, we don’t just provide services; we become your strategic technology partner. By choosing Bueze Tech, you’re not just keeping up with the future — you're staying ahead of it.
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
          <p className="font-[BreeSerif] mb-5">{activeService.description}</p>
          <p className="font-[BreeSerif]">{activeService.clientBenefit}</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
