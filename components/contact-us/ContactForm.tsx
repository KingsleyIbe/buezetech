'use client';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName, email, phone, budget, description }),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <form
      className="w-full md:w-[50%] p-5 bg-[#fff] shadow-lg rounded-lg"
      onSubmit={handleSubmit}
    >
      <h3 className="border-b pb-5 border-b-[#ccc] text-xl">
        We respond promptly, typically within{' '}
        <span className="text-[#fd9800]">30 minutes.</span>
      </h3>

      <div className="my-10">
        <div className="flex flex-col mb-5">
          <label htmlFor="fullName">
            Full Name<sup className="text-[#f00]">*</sup>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter full name"
            className="border p-2 mt-2 rounded-[5px]"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="email">
            Email<sup className="text-[#f00]">*</sup>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@example.com"
            className="border p-2 mt-2 rounded-[5px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex gap-10 mb-5 flex-col md:flex-row">
          <div className="flex flex-col w-full md:w-[50%]">
            <label htmlFor="phone">
              Phone<sup className="text-[#f00]">*</sup>
            </label>
            <PhoneInput
              country={'ng'}
              value={phone}
              onChange={setPhone}
              inputClass="!w-full !h-[42px] !border !border-gray-300 !rounded-[5px] !pl-12"
              containerClass="!w-full mt-2"
              buttonClass="!border-gray-300"
              inputStyle={{ width: '100%' }}
              enableSearch
              inputProps={{ name: 'phone', required: true }}
            />
          </div>

          <div className="flex flex-col w-full md:w-[50%]">
            <label htmlFor="budget">
              Budget<sup className="text-[#f00]">*</sup>
            </label>
            <select
              name="budget"
              id="budget"
              className="border p-2 mt-2 rounded-[5px]"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="$10-$1k">$10-$1k</option>
              <option value="$1-$20k">$1-$20k</option>
              <option value="$20-$50k">$20-$50k</option>
              <option value="$50-$100k">$50-$100k</option>
              <option value="$100-$250k">$100-$250k</option>
              <option value="No funding yet">No funding yet</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="description">
            Description<sup className="text-[#f00]">*</sup>
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter your message"
            required
            className="border p-2 mt-2 rounded-[5px]"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="flex flex-col mb-5 w-full md:w-[50%] m-auto">
          <button
            type="submit"
            className="bg-[#fd9800] hover:text-[#fd9800] rounded-lg py-[12px] px-[22px] text-[#181842] hover:bg-[#181842]"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
