import React, { useState } from 'react'
import { X, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { useAuth } from '../AuthContext'

interface LoginModalProps {
  onClose: () => void
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const { signIn } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleLogin = async () => {
    setIsLoading(true)
    try {
      await signIn()
      onClose()
    } catch (error) {
      console.error('Login error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="glass-card p-0 rounded-3xl max-w-md w-full relative overflow-hidden animate-slideUp">
        {/* Header avec gradient */}
        <div className="relative bg-gradient-to-br from-tomato-500 via-tomato-600 to-tomato-700 p-8 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-tomato-500 rounded-full"></div>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">Bienvenue sur Majik</h2>
            <p className="text-white/90 text-sm">Connectez-vous pour découvrir la magie</p>
          </div>
        </div>

        {/* Contenu du formulaire */}
        <div className="p-8">
          {/* Formulaire classique (pour l'apparence) */}
          <div className="space-y-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-tomato-400 focus:ring-2 focus:ring-tomato-100 transition-all duration-300 bg-white/70"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 focus:border-tomato-400 focus:ring-2 focus:ring-tomato-100 transition-all duration-300 bg-white/70"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Séparateur */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">ou continuez avec</span>
            </div>
          </div>

          {/* Bouton Google */}
          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full magic-button bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 py-4 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-3 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-gray-300 border-t-tomato-500 rounded-full animate-spin"></div>
            ) : (
              <>
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="group-hover:text-gray-800 transition-colors duration-300">
                  Continuer avec Google
                </span>
              </>
            )}
          </button>

          {/* Liens supplémentaires */}
          <div className="mt-6 text-center space-y-2">
            <p className="text-xs text-gray-500">
              En vous connectant, vous acceptez nos{' '}
              <a href="#" className="text-tomato-600 hover:text-tomato-700 transition-colors duration-300">
                conditions d'utilisation
              </a>
            </p>
            <p className="text-sm text-gray-600">
              Pas encore de compte ?{' '}
              <button className="text-tomato-600 hover:text-tomato-700 font-medium transition-colors duration-300">
                Créer un compte
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal