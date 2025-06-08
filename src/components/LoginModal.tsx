import React, { useState } from 'react'
import { X, LogIn } from 'lucide-react'
import { useAuth } from '../AuthContext'

interface LoginModalProps {
  onClose: () => void
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const { signIn } = useAuth()
  const [isLoading, setIsLoading] = useState(false)

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Fermer le modal seulement si on clique sur le backdrop (pas sur le contenu)
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

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

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn cursor-pointer"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-3xl max-w-md w-full relative shadow-2xl border border-gray-100 animate-slideUp cursor-default">
        {/* Header */}
        <div className="relative p-8 text-center border-b border-gray-100">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-300 p-2 rounded-full hover:bg-gray-50"
          >
            <X className="h-5 w-5" />
          </button>
          
          {/* Logo simple */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-tomato-500 rounded-2xl mb-4 shadow-lg">
            <LogIn className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Connexion
          </h2>
          <p className="text-gray-600">
            Connectez-vous pour accéder à votre compte Majik
          </p>
        </div>

        {/* Formulaire de connexion */}
        <div className="p-8">
          <div className="space-y-6">
            {/* Titre de section */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Se connecter avec
              </h3>
              <p className="text-sm text-gray-500">
                Utilisez votre compte Google pour vous connecter
              </p>
            </div>

            {/* Bouton Google */}
            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full bg-white border-2 border-gray-200 hover:border-tomato-300 rounded-xl py-4 px-6 transition-all duration-300 hover:shadow-md hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group"
            >
              <div className="flex items-center justify-center space-x-3">
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-200 border-t-tomato-500 rounded-full animate-spin"></div>
                    <span className="text-gray-600 font-medium">Connexion en cours...</span>
                  </>
                ) : (
                  <>
                    {/* Logo Google */}
                    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    
                    <span className="text-gray-700 font-medium group-hover:text-tomato-600 transition-colors duration-300">
                      Continuer avec Google
                    </span>
                  </>
                )}
              </div>
            </button>

            {/* Avantages de la connexion */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                Pourquoi se connecter ?
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Accès à vos réductions exclusives</li>
                <li>• Historique de vos visites</li>
                <li>• Gestion de votre abonnement</li>
              </ul>
            </div>

            {/* Texte légal */}
            <p className="text-xs text-gray-400 text-center leading-relaxed">
              En vous connectant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal