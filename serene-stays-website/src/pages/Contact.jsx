import * as React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Alert } from 'antd';
import { useState } from 'react';

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);

    // Handle form submission logic here (e.g., send data to API)
  };

  return (
    <div>
      {showAlert && (
        <div className="flex justify-end mx-10 mt-10 relative">
            <Alert
              message="Message Sent"
              description="Thanks for reaching out! Please allow us 2-3 business days for a response."
              type="success"
              showIcon
              className="h-fit text-left text-semibold z-50 absolute top-0 right-0 m-4"
            />
        </div>

      )}
      <div className="max-w-6xl mx-auto py-20 px-10 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/3 space-y-8">
          <h1 className="text-6xl font-header mb-6 text-left">Contact Information</h1>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center">
              <PhoneIcon className="text-[var(--color-secondary)]" sx={{ fontSize: "2rem" }} />
            </div>
            <div>
              <p className="text-xl font-body text-left text-[var(--color-text)]">Phone Number</p>
              <p className="font-body text-left">+91 97690 95698</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center">
              <EmailIcon className="text-[var(--color-secondary)]" sx={{ fontSize: "2rem" }} />
            </div>
            <div>
              <p className="text-xl font-body text-left text-[var(--color-text)]">Email Address</p>
              <p className="font-body text-left">contact@example.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center">
              <LocationOnIcon className="text-[var(--color-secondary)]" sx={{ fontSize: "2rem" }} />
            </div>
            <div>
              <p className="text-xl font-body text-left text-[var(--color-text)]">Location</p>
              <p className="font-body text-left">123 Business Avenue, Suite 100</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center">
              <AccessTimeIcon className="text-[var(--color-secondary)]" sx={{ fontSize: "2rem" }} />
            </div>
            <div>
              <p className="text-xl font-body text-left text-[var(--color-text)]">Business Hours</p>
              <p className="font-body text-left">Mon - Fri: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        <div className="min-h-10 w-0.5 bg-[var(--color-primary)] opacity-50"></div>

        <div className="md:w-2/3">
          <h1 className="text-6xl font-header mb-6 text-left">Send Us A Message</h1>
          <p className="font-body mb-6 text-left text-lg">Should you have trouble contacting us, kindly fill out the form below, and a member of our team will get back to you as soon as possible.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-secondary)]"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-secondary)]"
                  placeholder="Your phone number"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-secondary)]"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-secondary)]"
                  placeholder="Message subject"
                  required
                />
              </div>
            </div>

            <div>
              <textarea
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-secondary)] h-32"
                placeholder="Please write your query here"
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-transparent text-[var(--color-secondary)] font-navigation border-[1px] text-[var(--color-primary)] font-[var(--font-navigation)] border-[var(--color-primary)] border-secondary rounded-xl px-4 py-2 cursor-pointer hover:bg-[var(--color-primary)] hover:text-white"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
