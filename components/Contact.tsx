'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'sonner';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult('Sending....');
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append('access_key', '94aa02a2-d5b5-4cf2-bee2-8adc2e6bf9b4');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success('Form Submitted Successfully');
      setResult('');
      form.reset();
    } else {
      console.log('Error', data);
      toast.error(data.message);
      setResult('');
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-10 py-10 scroll-mt-24 bg-[url(/footer-bg-color.png)] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <h2 className="text-center text-lg font-Ovo">Connect with me</h2>
      <h3 className="text-center text-5xl font-Ovo">Send a message</h3>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I&apos;d love to hear from you. If you have any questions, comments, or
        feedback please use the form below.
      </p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter your name..."
            required
            className="p-3 outline-none border border-gray-500 rounded-md bg-background"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            required
            className="p-3 outline-none border border-gray-500 rounded-md bg-background"
          />
        </div>
        <textarea
          name="message"
          rows={6}
          placeholder="Enter your message..."
          required
          className="w-full p-3 outline-none border border-gray-500 rounded-md bg-background mb-6"
        ></textarea>
        <button
          type="submit"
          className="flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-full hover:shadow-[4px_4px_4px_#333] duration-300 cursor-pointer"
        >
          {result === '' ? 'Send message' : result}
          <Image
            src={assets.right_arrow_white}
            alt="Right arrow."
            width={20}
            height={20}
          />
        </button>
      </form>
    </div>
  );
};

export default Contact;
