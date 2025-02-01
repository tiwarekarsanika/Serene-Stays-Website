import React from 'react'
import FAQs from '../components/FAQ'

const PolicyPage = () => {
  return (
    <div className="m-20">
      <FAQs />
      <div>
        <h1 className="text-5xl font-header mb-6 text-left mt-10">Booking Policy</h1>
        <p className="text-left font-body"> To confirm your reservation, a 25% advance booking amount is required.
          The remaining balance must be paid in full 15 days prior to your arrival or at the time of check-in.
          During peak seasons (e.g., Christmas, New Year, Diwali), full payment is required at the time of booking.
        </p>

        <h1 className="text-5xl font-header mb-6 text-left mt-10">Mode of Payment</h1>
        <p className="text-left font-body"> Advance payment can be made via UPI, Master/Visa Debit/Credit card, or NEFT.
          For international payments, use wire transfer, Mail Authorization with Master/Visa Credit cards, or PayPal.
          Upon arrival, payments can be made in cash or via Master/Visa credit card.
        </p>

        <h1 className="text-5xl font-header mb-6 text-left mt-10">Cancellation Policy & Refunds</h1>
        <ul style={{ listStyleType: 'disc' }} className="text-left font-body ml-4 text-lg">
          <li>No refund if cancellation is made within 2 days before check-in date.</li>
          <li>50% refund if cancellation is made 3 to 14 days prior to check-in date.</li>
          <li>90% refund if cancellation is made more than 15 days in advance.</li>
          <li>No-show results in a charge for up to two nights' stay.</li>
        </ul>
      </div>
    </div>
  )
}

export default PolicyPage
