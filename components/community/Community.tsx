// components/Community.tsx
import React from 'react';
import Link from 'next/link';

const Community: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-24 text-[181842]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#fd9800]">Join the Bueze Tech Community</h2>
        <p className="text-lg mb-8">
          A thriving space where tech enthusiasts, professionals, and learners come together to grow, connect, and explore new opportunities.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left mb-10">
          <div className="bg-amber-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#fd9800] mb-2">Opportunities</h3>
            <p>Get access to jobs, internships, and freelance gigs curated just for our members.</p>
          </div>
          <div className="bg-amber-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#fd9800] mb-2">Latest Tech News</h3>
            <p>Stay up-to-date with trends, tools, and innovations in the tech world.</p>
          </div>
          <div className="bg-amber-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#fd9800] mb-2">Career Seminars</h3>
            <p>Attend monthly virtual sessions with industry experts and mentors.</p>
          </div>
          <div className="bg-amber-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#fd9800] mb-2">Free Growth Resources</h3>
            <p>Download ebooks, guides, and templates to level up your tech journey.</p>
          </div>
          <div className="bg-amber-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#fd9800] mb-2">Networking</h3>
            <p>Connect with like-minded individuals across the tech ecosystem.</p>
          </div>
          <div className="bg-amber-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#fd9800] mb-2">Supportive Community</h3>
            <p>Join a safe and inclusive space for all career levels and backgrounds.</p>
          </div>
        </div>

        <Link href="/register" passHref>
          <button className="mt-4 px-8 py-3 bg-[#fd9800] hover:bg-[#181842] text-[#181842] hover:text-[#fd9800] rounded-[8px] transition">
            Join the Community
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Community;
