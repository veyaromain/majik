import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'
import { useAuth } from '../AuthContext'
import LoginModal from './LoginModal'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const { user, signOutUser } = useAuth()
  const location = useLocation()

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Restaurants', href: '/restaurants' },
    { name: 'Abonnements', href: '/abonnements' },
    { name: 'Mon compte', href: '/compte' },
    { name: 'Restaurateurs', href: '/restaurateurs' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="glass-card sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-tomato-500 group-hover:text-tomato-600 transition-colors duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-curry-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold text-tomato-500">
              Majik
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'bg-tomato-100 text-tomato-700 shadow-md'
                    : 'text-gray-700 hover:text-tomato-600 hover:bg-white/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {user ? (
              <button
                onClick={signOutUser}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-tomato-600"
              >
                Déconnexion
              </button>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-tomato-600"
              >
                Connexion
              </button>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-tomato-600 hover:bg-white/50 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'bg-tomato-100 text-tomato-700 shadow-md'
                      : 'text-gray-700 hover:text-tomato-600 hover:bg-white/50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              {user ? (
                <button
                  onClick={() => {
                    signOutUser()
                    setIsMenuOpen(false)
                  }}
                  className="text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-tomato-600"
                >
                  Déconnexion
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsMenuOpen(false)
                    setShowLogin(true)
                  }}
                  className="text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-tomato-600"
                >
                  Connexion
                </button>
              )}
            </nav>
          </div>
        )}
        {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      </div>
    </header>
  )
}

export default Header