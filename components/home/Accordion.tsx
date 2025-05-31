'use client'

import { useState } from "react";

const faqData = {
  administrative: [
    {
      question: "What is our refund policy?",
      answer: "Our refund policy allows refunds within 30 days of purchase.",
    },
    {
      question: "How can I update my billing information?",
      answer: "You can update billing information through your account settings.",
    },
    {
      question: "What are the office working hours?",
      answer: "Our office is open Monday to Friday, from 9 AM to 5 PM.",
    },
    {
      question: "How do I request a formal invoice?",
      answer: "Formal invoices can be requested by contacting our finance department.",
    },
  ],
  technical: [
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking 'Forgot Password' on the login page.",
    },
    {
      question: "What should I do if I encounter an error?",
      answer: "If you encounter an error, please contact support with the error code.",
    },
    {
      question: "How can I update my software version?",
      answer: "You can update the software version from the settings menu under 'Updates.'",
    },
    {
      question: "What browsers are supported?",
      answer: "Our platform supports Chrome, Firefox, Safari, and Edge.",
    },
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
                    We understand that navigating the tech world can come with many questions, and we’re here to provide clarity every step of the way. Our FAQ section is designed to address the most common inquiries about our services, processes, pricing, timelines, support, and more. Whether you're curious about how our custom software development works, need help understanding our cybersecurity approach, or want to know how to get started with a project, you'll find helpful answers here. We believe in transparency, open communication, and empowering our clients with the right information to make confident decisions. If you don’t find what you’re looking for, our support team is always ready to assist you directly.
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
}
