import React from 'react'
import FAQs from '../components/FAQ'

const PolicyPage = () => {
  return (
    <div className="m-20">
      <FAQs />
      <div>
        <h1 className="text-5xl font-header mb-6 text-left mt-10">Booking Policy</h1>
        <p className="text-left font-body"> To confirm your reservation, a 50% advance booking amount is required.
          The remaining balance must be paid at the time of check-in.
        </p>

        <h1 className="text-5xl font-header mb-6 text-left mt-10">Mode of Payment</h1>
        <p className="text-left font-body"> Advance payment can be made via UPI, Master/Visa Debit/Credit card, or NEFT.
          For international payments, use wire transfer, mail Authorization with Master/Visa Credit cards, or PayPal.
          Upon arrival, payments can be made in cash or via Master/Visa credit card or UPI.
        </p>
        
        <p className="text-left italic mt-10">Kindly note that NO REFUND will be made available upon cancellation.</p>
        
      </div>
    </div>
  )
}

export default PolicyPage
