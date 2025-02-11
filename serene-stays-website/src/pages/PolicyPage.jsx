import React from 'react';
import FAQs from '../components/FAQ';

const PolicyPage = () => {
  return (
    <div className="mx-5 md:mx-10 lg:mx-20 my-10">
      <FAQs />
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-header mb-4 md:mb-6 text-left mt-6 md:mt-10">
          Booking Policy
        </h1>
        <p className="text-left font-body text-sm md:text-base">
          To confirm your reservation, a 50% advance booking amount is required.
          The remaining balance must be paid at the time of check-in.
        </p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-header mb-4 md:mb-6 text-left mt-6 md:mt-10">
          Mode of Payment
        </h1>
        <p className="text-left font-body text-sm md:text-base">
          Advance payment can be made via UPI, Master/Visa Debit/Credit card, or NEFT.
          For international payments, use wire transfer, mail Authorization with Master/Visa Credit cards, or PayPal.
          Upon arrival, payments can be made in cash or via Master/Visa credit card or UPI.
        </p>

        <p className="text-left italic mt-6 md:mt-10 text-sm md:text-base">
          Kindly note that <span className="font-semibold">NO REFUND</span> will be made available upon cancellation.
        </p>
      </div>
    </div>
  );
};

export default PolicyPage;
