import React from "react";
import { Accordion } from "flowbite-react";

const FAQ = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>General Questions</Accordion.Title>
          <Accordion.Content>
            <h2 className="text-xl font-semibold mb-4">What is Car Rental?</h2>
            <p>Car Rental is a service that allows you to rent cars for a specified period of time. You can choose from a variety of cars and enjoy the convenience of having a vehicle without the commitment of ownership.</p>
            <h2 className="text-xl font-semibold mb-4">How do I book a car?</h2>
            <p>To book a car, simply browse our selection of available cars, select the one you want, and follow the booking process. You will need to provide some personal information and payment details to complete the booking.</p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Pricing and Payments</Accordion.Title>
          <Accordion.Content>
            <h2 className="text-xl font-semibold mb-4">What are the payment options?</h2>
            <p>We accept various payment methods including credit cards, debit cards, and online payment services like PayPal. You can choose the payment method that is most convenient for you during the booking process.</p>
            <h2 className="text-xl font-semibold mb-4">Are there any hidden fees?</h2>
            <p>No, there are no hidden fees. The price you see during the booking process is the final price you will pay. Any additional charges, such as for extra services or damages, will be clearly communicated to you.</p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Rental Policies</Accordion.Title>
          <Accordion.Content>
            <h2 className="text-xl font-semibold mb-4">What is the minimum age to rent a car?</h2>
            <p>The minimum age to rent a car is typically 21 years old. However, this may vary depending on the car rental company and the type of car you wish to rent. Please check the specific requirements during the booking process.</p>
            <h2 className="text-xl font-semibold mb-4">Can I cancel my booking?</h2>
            <p>Yes, you can cancel your booking. Please refer to our cancellation policy for more details on the terms and conditions of cancellations and any applicable fees.</p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default FAQ;