import React from "react"
import { motion } from "framer-motion"

const servicesData = [
  {
    title: "Full Week Classes",
    description: "Classes conducted throughout the week with extra doubt session class on Sundays and Holidays (subjected to future references).",
    icon: "📚"
  },
  {
    title: "Informative Workshops",
    description: "Workshops aimed at inculcating future career prospects in various other fields.",
    icon: "🎓"
  },
  {
    title: "Individual-based Mentorship",
    description: "Programmes designed for students facing hurdles in their academic performance.",
    icon: "👥"
  },
  {
    title: "Science Practical Classes",
    description: "Hands-on practical classes for science subjects.",
    icon: "🧪"
  },
  {
    title: "Month-end Tests",
    description: "Tests conducted at the end of each month to check academic progress in each subject.",
    icon: "📝"
  },
  {
    title: "Board Pattern Tests",
    description: "Tests conducted every 3 months for Std. XII and Std. X based on respective board patterns.",
    icon: "📊"
  },
  {
    title: "Special Revision Batches",
    description: "Special batches for Std. XII and Std. X based on respective board patterns.",
    icon: "📖"
  },
  {
    title: "Crash Course",
    description: "Crash courses strictly following board patterns for Std. XII and Std. X.",
    icon: "🚀"
  }
]

const classDetails = [
  { class: "Std. XII", annual: "Physics, Chemistry, Biology", crash: "Physics, Chemistry, Biology", options: "Subject-wise & Unit-wise Option available" },
  { class: "Std. XI", annual: "Physics, Chemistry, Biology", crash: "Subjected to future references", options: "Subject-wise & Unit-wise Option available" },
  { class: "Std. X", annual: "Mathematics, Science, Social Science, English, IT (Optional)", crash: "Mathematics, Science, English", options: "Subject-wise & Unit-wise Option available" }
]

const feeStructures = [
  {
    title: "Std. XII and Std. XI",
    details: [
      "Registration form charges: ₹50 (Subjected to future references)",
      "Course fee (per student/year):",
      "- One time payment: ₹18,000",
      "- Two time payment: ₹10,000",
      "English Fees:",
      "- CBSE: ₹2500 (One time payment only)",
      "- BSEB: ₹2000 (One time payment only)",
      "Crash Course charges:",
      "- Per subject: ₹10000",
      "- Per Unit: ₹3000",
      "- Per Chapter: ₹800",
      "Presence of guardians is MANDATORY at the time of admission.",
      "WhatsApp mediated attendance."
    ]
  },
  {
    title: "Std. X and Std. IX",
    details: [
      "Registration form charges: ₹50",
      "Course fee for Std. X:",
      "- One time payment: ₹11,000",
      "- Monthly: ₹1,200",
      "Course fee for Std. IX:",
      "- One time payment: ₹10,000",
      "- Monthly: ₹1,100"
    ]
  }
]

export default function OurServices() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Class, Batch and Subject Details</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Class</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Annual Batch Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Crash-course Batch Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Options</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {classDetails.map((detail, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{detail.class}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{detail.annual}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{detail.crash}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{detail.options}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Fee-Structures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {feeStructures.map((structure, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">{structure.title}</h3>
                <ul className="space-y-2">
                  {structure.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-gray-600">
                      {detail.startsWith('-') ? (
                        <span className="ml-4">{detail}</span>
                      ) : (
                        <span className="font-medium">{detail}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}