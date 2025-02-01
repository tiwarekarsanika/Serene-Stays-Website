import React from 'react'
import Collapsible from 'react-collapsible';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const FAQ = () => {
  const [open, setOpen] = React.useState(false);

  const faqs = [
    {
      question: "What types of accommodations do you offer?",
      answer: "We offer a variety of accommodations, including luxurious villas and rooms at various resorts. Each location has unique features and amenities to suit different preferences and group sizes."
    },
    {
      question: "How can I make a booking?",
      answer: "You can make a booking by contacting us through our booking form, or you can reach us directly via phone or email. You can also visit our office. All these details are provided in the Contact Us page."
    },
    {
      question: "What amenities are available at the villas?",
      answer: "Our villas come with a range of amenities such as swimming pools, lawn, Wi-Fi, air conditioning, and more. Please refer to the individual villa pages for a full list of amenities at each location."
    },
    {
      question: "Can I book a villa for a group gathering?",
      answer: "Yes, we offer facilities for birthdays, engagements, and large group gatherings. Contact us for custom packages and availability at the resort of your choice.",
    },
    {
      question: "Can I modify or cancel my booking?",
      answer: "Booking modifications or cancellations can be made based on our policies. Please review the terms at the time of booking or contact us for assistance."
    },
  ]

  const customTriggerStyle = (question, isLast) => (
    <div
      className={`flex items-center justify-between p-4 text-white hover:bg-white/5 transition-all cursor-pointer ${!isLast ? 'border-b border-white/50' : ''}`}
      onClick={() => setOpen(!open)}
    >
      <span className="text-lg">{question}</span>
      {open ? <ArrowDropUpIcon className="transform transition-transform duration-200" size={24} /> : <ArrowDropDownIcon className="transform transition-transform duration-200" size={24} />}
    </div>
  );

  return (
    <div>
      <h1 className="text-5xl font-header mb-6 text-left">Frequently Asked Questions (FAQs)</h1>
      <div className="border border-white/50 rounded-lg font-body">
        {faqs.map((faq, index) => (
          <div key={index}>
            <Collapsible
              trigger={customTriggerStyle(faq.question, index === faqs.length - 1)}
              classParentString="border-0"
              contentInnerClassName="p-4 text-white text-left"
              transitionTime={200}
            >
              <p>{faq.answer}</p>
            </Collapsible>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ
