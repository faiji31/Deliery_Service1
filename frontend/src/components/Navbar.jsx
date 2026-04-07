import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { useAuth } from '../contexts/AuthProvider'
import { COMPANY } from '../constants/branding'

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const { user, logout, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="navbar bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-gray-800 dark:to-gray-900 shadow-lg sticky top-0 z-50">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-2xl font-bold text-white hover:bg-blue-700 dark:hover:bg-gray-700">
          <span className="text-3xl">{COMPANY.logo}</span>
          <span className="ml-2">{COMPANY.name}</span>
        </Link>
      </div>

      <div className="flex-none gap-2">
        {/* Navigation Links */}
        <div className="hidden md:flex gap-2 mr-4">
          <Link to="/" className="btn btn-ghost btn-sm text-white hover:bg-blue-700 dark:hover:bg-gray-700">
            Home
          </Link>
          <a href="/#features" className="btn btn-ghost btn-sm text-white hover:bg-blue-700 dark:hover:bg-gray-700">
            Features
          </a>
          <a href="/#how-it-works" className="btn btn-ghost btn-sm text-white hover:bg-blue-700 dark:hover:bg-gray-700">
            How It Works
          </a>
          <a href="/#contact" className="btn btn-ghost btn-sm text-white hover:bg-blue-700 dark:hover:bg-gray-700">
            Contact
          </a>
          
          {/* Book Parcel Link - Only for logged in customers */}
          {isAuthenticated && user?.userType === 'customer' && (
            <Link to="/parcel" className="btn btn-sm bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-none font-semibold">
              📦 Book Parcel
            </Link>
          )}
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="btn btn-circle btn-ghost swap swap-rotate text-white hover:bg-blue-700 dark:hover:bg-gray-700"
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDark ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 18a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 100-8 4 4 0 000 8zm0-12v-2m0 16v2m6.364-3.636l1.414 1.414m-4.728-11.728l1.414-1.414M6.636 7.636L5.222 6.222m4.728 11.728l-1.414 1.414M19 12h2M1 12h2m16.364-6.364l1.414-1.414m-4.728 11.728l1.414 1.414" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end md:hidden">
          <button className="btn btn-ghost btn-circle text-white hover:bg-blue-700 dark:hover:bg-gray-700">
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
          <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 dark:bg-gray-800 rounded-box w-52">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/#features">Features</a>
            </li>
            <li>
              <a href="/#how-it-works">How It Works</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
            {isAuthenticated && user?.userType === 'customer' && (
              <li><Link to="/parcel">📦 Book Parcel</Link></li>
            )}
            <li><hr /></li>
            {isAuthenticated ? (
              <>
                <li><a>{user?.name || user?.email}</a></li>
                <li><a onClick={handleLogout}>Logout</a></li>
              </>
            ) : (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Sign Up</Link></li>
              </>
            )}
          </ul>
        </div>

        {/* Auth Buttons */}
        <div className="gap-2 hidden sm:flex">
          {isAuthenticated ? (
            <>
              <div className="dropdown dropdown-end">
                <button className="btn btn-ghost btn-sm text-white hover:bg-blue-700 dark:hover:bg-gray-700">
                  <span className="truncate max-w-[100px]">{user?.name || user?.email}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 dark:bg-gray-800 rounded-box w-52">
                  <li><a className="font-semibold">{user?.name}</a></li>
                  <li><a className="text-xs text-gray-600 dark:text-gray-400">{user?.email}</a></li>
                  {user?.userType && <li><a className="text-xs text-blue-600 dark:text-blue-400">Role: {user.userType}</a></li>}
                  <li><hr /></li>
                  <li><a onClick={handleLogout}>Logout</a></li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost btn-sm text-white hover:bg-blue-700 dark:hover:bg-gray-700">Login</Link>
              <Link to="/register" className="btn btn-sm bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-none font-semibold">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
