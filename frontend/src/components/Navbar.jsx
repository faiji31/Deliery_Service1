import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl font-bold text-primary">
          🚚 DeliveryParcel
        </Link>
      </div>

      <div className="flex-none gap-2">
        {/* Navigation Links */}
        <div className="hidden md:flex gap-4 mr-4">
          <Link to="/" className="btn btn-ghost btn-sm hover:text-primary">
            Home
          </Link>
          <a href="#features" className="btn btn-ghost btn-sm hover:text-primary">
            Features
          </a>
          <a href="#how-it-works" className="btn btn-ghost btn-sm hover:text-primary">
            How It Works
          </a>
          <a href="#pricing" className="btn btn-ghost btn-sm hover:text-primary">
            Pricing
          </a>
          <a href="#contact" className="btn btn-ghost btn-sm hover:text-primary">
            Contact
          </a>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="btn btn-circle btn-ghost swap swap-rotate"
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDark ? (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 18a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 100-8 4 4 0 000 8zm0-12v-2m0 16v2m6.364-3.636l1.414 1.414m-4.728-11.728l1.414-1.414M6.636 7.636L5.222 6.222m4.728 11.728l-1.414 1.414M19 12h2M1 12h2m16.364-6.364l1.414-1.414m-4.728 11.728l1.414 1.414" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end md:hidden">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#how-it-works">How It Works</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Auth Buttons */}
        <div className="gap-2 hidden sm:flex">
          <button className="btn btn-ghost btn-sm">Login</button>
          <button className="btn btn-primary btn-sm">Sign Up</button>
        </div>
      </div>
    </div>
  )
}
