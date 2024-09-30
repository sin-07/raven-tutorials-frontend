import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross2 } from "react-icons/rx"

export default function Navbar() {
  const [sidenav, setSidenav] = useState(false)
  const location = useLocation()


  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/our-services' },
    { name: 'Admission', path: '/form' },
    { name: 'About Us', path: '/about-us' },
    // { name: 'Users', path: '/getUsers' },
  ]

  return (
    <nav className={`fixed w-full z-10  transition-all duration-300 bg-white/60`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img className="h-8 w-auto" src="./images/raven.png" alt="Logo" />
              <span className="ml-2 text-xl font-bold text-gray-800">RavenTutorials</span>
            </Link>
          </div>

          <div className="hidden sm:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === item.path
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-800 hover:bg-gray-700 hover:text-white'
                  } transition-colors duration-300`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden sm:block">
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
            >
              Login
            </Link>
          </div>

          <div className="sm:hidden">
            <button
              onClick={() => setSidenav(!sidenav)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {sidenav ? (
                <RxCross2 className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <GiHamburgerMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden fixed inset-0 z-50 bg-gray-800 bg-opacity-75 transition-opacity duration-300 ease-in-out ${
          sidenav ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl transition-transform duration-300 ease-in-out transform ${
            sidenav ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src="./images/raven.png" alt="Logo" />
            </div>
            <button
              onClick={() => setSidenav(false)}
              className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Close menu</span>
              <RxCross2 className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-800 hover:bg-gray-700 hover:text-white'
                } transition-colors duration-300`}
                onClick={() => setSidenav(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              onClick={() => setSidenav(false)}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}