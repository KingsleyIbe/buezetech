'use client'

import { useState } from "react";

const faqData = {
  administrative: [
    {
      question: "What services do you offer?",
      answer: `At Bueze Tech Limited, we offer a wide range of professional tech services tailored to meet the needs of individuals, businesses, and organizations. Our services include Custom Software Development, Website & Mobile App Development, UI/UX Design, Cybersecurity Solutions, IT Professional Training, Software Documentation, Technical Writing, Low-Code/No-Code Solutions, and Tech Courses Tutorship.`,
    },
    {
      question: "How much do you charge for your services?",
      answer: `Consider it like purchasing a car: are you looking for a high-performance luxury vehicle or a dependable small car? Customization, features, and complexity all affect the price. Don't worry, though; we have choices to suit every budget.`,
    },
     {
      question: "What is your policy on refund?",
      answer: `We aim for complete client satisfaction. However, in cases where expectations are not met and valid reasons are provided, refunds may be considered within 14–30 days depending on the nature of the service. Each project or training program may have specific refund terms, so please review your agreement or contact us for clarity.`,
    },
    {
      question: "What are the office working hours?",
      answer: "Our office is open Monday to Friday, from 9 AM to 5 PM.",
    },
    {
      question: "How do I request a formal invoice?",
      answer: `Requesting a formal invoice is simple. After initiating a service or making a payment, you can send an email to our finance team at accounts@buezetech.com with your transaction details and company information. You will receive a properly formatted invoice promptly.`,
    },
     {
      question: "Will you sign a NDA?",
      answer: `Absolutely. At Bueze Tech Limited, we understand the importance of confidentiality and intellectual property protection. We are more than willing to sign a Non-Disclosure Agreement (NDA) to ensure that your ideas, data, and project details remain secure and private.`,
    },
    
  ],
  technical: [
    {
      question: "How important is user experience (UX) in mobile app development?",
      answer: `Everything is involved. An excellent user experience (UX) makes users happy, encourages them to return, and makes sure your software doesn't become simply another forgotten symbol. UX is crucial, not just important, to put it briefly.`,
    },
    {
      question: "What is the difference between native and cross-platform development?",
      answer: `Cross-platform apps are off-the-shelf solutions that work on several platforms, whereas native apps are like custom-tailored suits for one platform (iOS or Android). Cross-platform offers versatility, while native seems a bit sharper—the choice is yours!`,
    },
    {
      question: "Do you guys develop for Apple or Android?",
      answer: `We compete on both the iOS and Android teams. We can help you whether you're creating for Google Play users or Apple devotees. And we'll use cross-platform wizardry to make it happen if you want both.`,
    },
    {
      question: "How long does it take to develop a mobile app?",
      answer: `"How long does it take to cook a great meal?" is akin to that question. The recipe determines this. 3 to 9 months on average, but we make sure every second matters. A feature-rich masterpiece or a quick MVP? We have schedules for both.`,
    },
    {
      question: "How do I choose a mobile app development company?",
      answer: `Seek for a business that can deliver on time, has experience, and shares your goal (hint: us!). Extra points if they guarantee a 100% success rate, agile development, and post-launch support. Wait a minute—we've checked off every box (touchwood).`
    }
  ],
};

export default function Accordion() {
  const [activeCategory, setActiveCategory] = useState<"administrative" | "technical">("administrative");
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAnswer = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const questions = faqData[activeCategory];

  return (
    <section id="faq" className="px-[50px] my-[100px]">
          <div className="mb-10">
                <h2 className="text-[34px] font-bold text-[#181842] relative" > <span className="after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-[4px] after:bg-[#fd9800] mr-4"></span>FAQ</h2>
                <p className="text-[#181842] font-[BreeSerif]">
                    We understand that navigating the tech world can come with many questions, and we&#39;re here to provide clarity every step of the way. Our FAQ section is designed to address the most common inquiries about our services, processes, pricing, timelines, support, and more. Whether you&#39;re curious about how our custom software development works, need help understanding our cybersecurity approach, or want to know how to get started with a project, you&#39;ll find helpful answers here. We believe in transparency, open communication, and empowering our clients with the right information to make confident decisions. If you don&#39;t find what you&#39;re looking for, our support team is always ready to assist you directly.
                    </p>
            </div>
      <div className="flex justify-center mb-6 gap-4">
        <button
          onClick={() => {
            setActiveCategory("administrative");
            setOpenIndexes([]);
          }}
          className={`px-4 py-2 rounded-md text-[#181842] transition-all hover:bg-[#181842] hover:text-[#fd9800] cursor-pointer duration-300 ${
            activeCategory === "administrative" ? "bg-[#fd9800]" : "bg-[#ddd]"
          }`}
        >
          Administrative
        </button>
        <button
          onClick={() => {
            setActiveCategory("technical");
            setOpenIndexes([]);
          }}
          className={`px-4 py-2 rounded-md text-[#181842] cursor-pointer hover:bg-[#181842] hover:text-[#fd9800] transition-all duration-300 ${
            activeCategory === "technical" ? "bg-[#fd9800]" : "bg-gray-400"
          }`}
        >
          Technical
        </button>
      </div>

      <div className="space-y-4">
        {questions.map((faq, index) => (
          <div key={index} className="border rounded-md p-4 shadow-sm">
            <button
              onClick={() => toggleAnswer(index)}
              className="flex justify-between items-center w-full text-left font-medium text-lg"
            >
              {faq.question}
              <span>{openIndexes.includes(index) ? "−" : "+"}</span>
            </button>
            {openIndexes.includes(index) && (
              <div className="mt-2 text-gray-700 text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
