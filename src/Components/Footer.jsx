import React from "react"
import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Github, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/raven_tutorials" },
    { icon: Facebook, href: "https://facebook.com/raven_tutorials" },
    { icon: Instagram, href: "https://instagram.com/raven_tutorials" },
    { icon: Github, href: "https://github.com/sin-07" },
    { icon: Mail, href: "mailto:contact@raventutorials.com" },
  ]

  const usefulLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/our-services" },
    { name: "Admission", href: "/form" },
    { name: "Login", href: "/login" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">RAVEN</h2>
            <p className="text-gray-400">
              Empowering minds through innovative education and personalized learning experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <link.icon size={24} />
                  <span className="sr-only">{link.icon.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p>123 Education Street</p>
              <p>Knowledge City, LE 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: contact@raventutorials.com</p>
            </address>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {currentYear} Raven Tutorials. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer