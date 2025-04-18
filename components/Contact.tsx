'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
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
      className="w-full max-w-5xl mx-auto p-10 scroll-mt-24 bg-[url(/footer-bg-color.png)] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-radial from-white/5 to-transparent"
    >
      <motion.div
        initial={{ y: -100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center text-lg font-Ovo">Connect with me</h2>
        <h3 className="text-center text-5xl font-Ovo">Send a message</h3>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          I&apos;d love to hear from you. If you have any questions, comments,
          or feedback please use the form below.
        </p>
      </motion.div>
      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto flex flex-col items-center"
      >
        <div className="flex flex-col md:flex-row md:justify-between gap-10 mt-10 mb-8 w-full">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <motion.input
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name..."
            required
            className="w-full p-3 outline-none border border-gray-500 rounded-md bg-background focus:bg-amber-200/20 dark:focus:bg-muted-foreground dark:focus:text-black"
          />
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <motion.input
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email..."
            required
            className="w-full p-3 outline-none border border-gray-500 rounded-md bg-background focus:bg-amber-200/20 dark:focus:bg-muted-foreground dark:focus:text-black"
          />
        </div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <motion.textarea
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8 }}
          id="message"
          name="message"
          rows={6}
          placeholder="Enter your message..."
          required
          className="w-full p-3 outline-none border border-gray-500 rounded-md bg-background mb-6 focus:bg-amber-200/20 dark:focus:bg-muted-foreground dark:focus:text-black"
        ></motion.textarea>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          type="submit"
          className="flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-full hover:shadow-[4px_4px_10px_#333] duration-300 cursor-pointer hover:-translate-y-1 border dark:border-black"
        >
          {result === '' ? 'Send message' : result}
          <ArrowRight />
        </motion.button>
      </form>
    </div>
  );
};

export default Contact;
