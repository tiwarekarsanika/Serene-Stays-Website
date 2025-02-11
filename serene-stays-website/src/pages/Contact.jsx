import * as React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Alert } from 'antd';
import { useState } from 'react';

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    query: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show the success alert
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);

    // Sending the form data to the web3forms API
    const form = new FormData();
    form.append("access_key", "3f14351c-c160-454d-8c19-0c2a16b9ec83");
    form.append("name", formData.name);
    form.append("phone", formData.phone);
    form.append("email", formData.email);
    form.append("subject", formData.subject);
    form.append("query", formData.query);

    // Sending the request to Web3Forms API
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: form
    });

    // Reset form fields after submission
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      query: ''
    });

    
    const data = await response.json();
    if (data.success) {
      console.log("Form submitted successfully");
    } else {
      console.error("Form submission failed");
    }
  };

  return (
    <div>
      <div className="fixed top-10 right-0 z-50 w-full pointer-events-none">
        <div className={`transition-all duration-500 ease-in-out transform ${showAlert ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} flex justify-end mx-10`}>
          <Alert
            message="Message Sent"
            description="Thanks for reaching out! Please allow us 2-3 business days for a response."
            type="success"
            showIcon
            className="h-fit text-left text-semibold w-96 pointer-events-auto"
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-20 px-10 flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/3 space-y-8">
          <h1 className="text-6xl font-header mb-6 text-left">Contact Information</h1>

          <div className="flex items-center gap-4">
           <div className="flex items-center justify-center">
             <PhoneIcon className="text-[var(--color-secondary)]" sx={{ fontSize: "2rem" }} />
           </div>
           <div>
             <p className="text-xl font-body text-left text-[var(--color-text)]">Phone Number</p>
             <p className="font-body text-left">+91 98201 16789</p>
           </div>
         </div>

         <div className="flex items-center gap-4">
           <div className="flex items-center justify-center">
             <EmailIcon className="text-[var(--color-secondary)]" sx={{ fontSize: "2rem" }} />
           </div>
           <div>
             <p className="text-xl font-body text-left text-[var(--color-text)]">Email Address</p>
             <p className="font-body text-left">prasadraorane173@gmail.com</p>
           </div>
         </div>

         <div className="flex items-center gap-4">
            <div className="flex items-center justify-center">
              <AccessTimeIcon className="text-[var(--color-secondary)]" sx={{ fontSize: "2rem" }} />
            </div>
            <div>
              <p className="text-xl font-body text-left text-[var(--color-text)]">Business Hours</p>
              <p className="font-body text-left">Mon - Sun: 10:00 AM - 10:00 PM</p>
            </div>
        </div>
        </div>

        <div className="hidden lg:block min-h-10 w-0.5 bg-[var(--color-primary)] opacity-50"></div>

        <div className="lg:w-2/3">
          <h1 className="text-6xl font-header mb-6 text-left">Send Us A Message</h1>
          <p className="font-body mb-6 text-left text-lg">Should you have trouble contacting us, kindly fill out the form below, and a member of our team will get back to you as soon as possible.</p>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-secondary)]"
                  placeholder="Your name"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-secondary)]"
                  placeholder="Your phone number"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-secondary)]"
                  placeholder="Your email"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-secondary)]"
                  placeholder="Message subject"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div>
              <textarea
                name="query"
                value={formData.query}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-secondary)] h-32"
                placeholder="Please write your query here"
                required
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="custom-button">
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

