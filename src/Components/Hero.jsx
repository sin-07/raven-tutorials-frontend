import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Hero() {
  const imgData = [
    "./images/WhatsApp Image 2024-03-09 at 23.07.52_bd555d59.jpg",
    "./images/wi3.jpg",
    "./images/wi4.jpg",
    "./images/wi5.jpg",
    "./images/wi6.jpg",
  ];

  const [slider, setSlider] = useState(0);

  const handleLeft = () => {
    setSlider(slider === 0 ? imgData.length - 1 : slider - 1);
  };

  const handleRight = () => {
    setSlider(slider === imgData.length - 1 ? 0 : slider + 1);
  };

  useEffect(() => {
    const slideClear = setInterval(() => {
      handleRight();
    }, 5000);
    return () => clearInterval(slideClear);
  }, [slider]);

  return (
    <>
      <motion.div
        className="relative overflow-hidden w-full"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] top-[63px]">
          {imgData.map((item, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                slider === i ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={item}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-between px-4 max-w-7xl mx-auto">
            <button
              onClick={handleLeft}
              className="text-white hover:text-gray-300 transition-colors duration-300"
              aria-label="Previous slide"
            >
              <FaAngleLeft size={30} />
            </button>
            <button
              onClick={handleRight}
              className="text-white hover:text-gray-300 transition-colors duration-300"
              aria-label="Next slide"
            >
              <FaAngleRight size={30} />
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div className="bg-gradient-to-b from-gray-100 to-white min-h-full"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1}}
      >
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Our Theme
              </h1>
              <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Development of Science-backed Rationale",
                  description:
                    "We focus on developing a strong scientific understanding in students through evidence-based learning and practical applications.",
                  icon: "🧪",
                },
                {
                  title: "Perseverant Competitive Attitude",
                  description:
                    "We instill a competitive spirit in students, encouraging them to persevere and excel in the face of challenges and setbacks.",
                  icon: "🏆",
                },
                {
                  title: "Student-Friendly Environment",
                  description:
                    "We create a welcoming and supportive environment where students feel comfortable to learn and grow.",
                  icon: "🌟",
                },
                {
                  title: "Practical Scientific Approach",
                  description:
                    "Our teaching methods focus on practical applications to enhance students' scientific thinking and aptitude.",
                  icon: "🔬",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-6 rounded-lg hover:shadow-xl shadow-lg transition-shadow duration-500"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
