import React from "react";

const teamMembers = [
  { name: "John Doe", role: "CEO", photo: "path/to/john-doe-photo.jpg" },
  { name: "Jane Smith", role: "CTO", photo: "path/to/jane-smith-photo.jpg" },
  { name: "Michael Johnson", role: "CFO", photo: "path/to/michael-johnson-photo.jpg" },
  { name: "Emily Davis", role: "COO", photo: "path/to/emily-davis-photo.jpg" },
  // Add more team members as needed
];

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-6 rounded-lg shadow-md w-full">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">About Us</h1>
        <div className="mb-8 bg-gray-100 p-8 rounded-lg shadow-xl">
          <img src="path/to/company-photo.jpg" alt="Company" className="w-full h-64 object-cover rounded-lg shadow-md" />
        </div>
        <div className="mb-8 bg-gray-100 p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to provide the best car rental service in the industry. We strive to offer a wide range of vehicles to meet the diverse needs of our customers, ensuring a seamless and enjoyable rental experience. Our commitment to quality, safety, and customer satisfaction is at the core of everything we do.
          </p>
        </div>
        <div className="mb-8 bg-gray-100 p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            Our vision is to be the leading car rental company, known for our exceptional service, innovative solutions, and dedication to customer satisfaction. We aim to expand our reach and continue to set new standards in the car rental industry.
          </p>
        </div>
        <div className="mb-8 bg-gray-100 p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Customer Satisfaction: We prioritize our customers' needs and strive to exceed their expectations.</li>
            <li>Quality: We maintain a high standard of quality in our vehicles and services.</li>
            <li>Integrity: We conduct our business with honesty and transparency.</li>
            <li>Innovation: We embrace new technologies and innovative solutions to enhance our services.</li>
            <li>Safety: We ensure the safety of our customers and employees through rigorous safety standards.</li>
          </ul>
        </div>
        <div className="mb-8 bg-gray-100 p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <img src={member.photo} alt={member.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8 bg-gray-100 p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions or would like to learn more about our services, please feel free to contact us. We are here to assist you and ensure you have the best car rental experience possible.
          </p>
          <div className="mt-4">
            <p className="text-gray-700"><strong>Email:</strong> support@carrental.com</p>
            <p className="text-gray-700"><strong>Phone:</strong> (123) 456-7890</p>
            <p className="text-gray-700"><strong>Address:</strong> 123 Main St, Anytown, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;