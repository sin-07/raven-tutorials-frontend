import React from "react"
import { motion } from "framer-motion"

const TeamMember = ({ img, name, role, description }) => {
  console.log(img)
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative pb-2/3">
        <img 
          src={img} 
          alt={name} 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-sm font-medium text-blue-600 mb-3">{role}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </motion.div>
  )
}

const AboutUs = () => {
  const teamMembers = [
    {
      img: "./images/dummy.png",
      name: "S. Nandan Verma",
      role: "Faculty & Operations Head @ RAVEN Tutorials",
      description: `Being a student of Life Sciences, I cherish life and its forms. Want to develop an inquisitive aptitude in students regarding their education and career.`,
    },
    {
      img: "./images/dummy.png",
      name: "Rakesh Ranjan",
      role: "CEO @ RAVEN Tutorials",
      description: `Pursuing MBBS at NMCH, Patna. Ardent reader. Teaching students for previous 3-4 years as freelancer. Exploring academia for delectational pedagogy with student community in focus. Want to develop a platform for students having dreams of exploration other than trendy profession.`,
    },
    {
      img: "./images/dummy.png",
      name: "Abhinay Gupta",
      role: "Chief Project Officer @ RAVEN Tutorials",
      description: `Expertise in Commerce, Digital Marketing, Social media Coordinator. B.com Graduate Having a strong foundation in business principle, finance, taxation, accounting, Auditing, Business Management. My degree reflects my passion to do business in effective and efficient manner.`,
    },
    {
      img: "./images/dummy.png",
      name: "Niraj Kumar",
      role: "Faculty & CPRO @RAVEN Tutorials",
      description: `Pursuing Integrated B.Ed(B.A-B.Ed) from BRABU. CTET Qualified. Expertise in teaching.`,
    },
    {
      img: "./images/dummy.png",
      name: "Guddu Kumar",
      role: "Faculty @ RAVEN Tutorials",
      description: `B. Sc. Graduate in Mathematics. I have a passion for teaching and interacting with students coming from different backgrounds. An experience of 4 years as a full-time teacher has enabled me to unlock my problem-solving aptitude for my students.`,
    },
  ]

  const devMembers = [
    {
      img: "./images/my_pic.jfif",
      name: "ANIKET SINGH",
      role: "CTO @ RAVEN Tutorials",
      description: `MERN Developer | Expertise in REACTJS | ITER College student. A skilled Full stack web-developer with 3 years of learning in development and good practice on ReactJs Projects`,
    },
    {
      img: "./images/developer.jpg",
      name: "ABHAY RAJ",
      role: "Backend Developer @ RAVEN Tutorials",
      description: `Backend Developer | Expertise in MONGODB | ITER College student. As a seasoned backend developer with three years of hands-on experience specializing in NodeJS.`,
    },
  ]

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <motion.div
        className="container mx-auto py-24 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-8 text-blue-900">About Us</h1>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to RAVEN Tutorials, a home-based institution dedicated to providing an affordable and
            comprehensive learning experience. We boost each student's potential, both academically and morally,
            to maximize their future opportunities.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            As a science-themed institute, we emphasize Science and Mathematics through detailed theory,
            practical sessions, and lab work. Our clear concepts and hands-on approach ensure a thorough
            understanding of subjects.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our team members are lifelong learners, constantly improving their skills and knowledge. We believe
            that to be a good teacher, one must also be an excellent learner.
          </p>
        </motion.div>
      </motion.div>

      <div className="bg-blue-900 py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-blue-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Developer Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {devMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs