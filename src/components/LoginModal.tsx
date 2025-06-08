import React, { useState } from 'react'
import { X, Sparkles, Heart, Star } from 'lucide-react'
import { useAuth } from '../AuthContext'

interface LoginModalProps {
  onClose: () => void
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const { signIn } = useAuth()
  const [isLoading, setIsLoading] = useState(false)

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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="relative">
        {/* Éléments décoratifs simples */}
        <div className="absolute -top-8 -left-8 w-16 h-16 bg-tomato-400 rounded-full blur-lg animate-pulse opacity-30"></div>
        <div className="absolute -bottom-6 -right-8 w-12 h-12 bg-tomato-300 rounded-full blur-lg animate-pulse delay-700 opacity-40"></div>
        <div className="absolute top-4 -right-4 w-8 h-8 bg-tomato-500 rounded-full blur-md animate-pulse delay-1000 opacity-25"></div>
        
        {/* Étoiles scintillantes rouges */}
        <div className="absolute -top-4 left-8">
          <Star className="h-4 w-4 text-tomato-400 animate-pulse" fill="currentColor" />
        </div>
        <div className="absolute -bottom-2 left-4">
          <Heart className="h-3 w-3 text-tomato-400 animate-pulse delay-500" fill="currentColor" />
        </div>
        <div className="absolute top-8 -left-2">
          <Sparkles className="h-3 w-3 text-tomato-400 animate-pulse delay-300" />
        </div>
        
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl max-w-sm w-full relative overflow-hidden animate-slideUp shadow-2xl border border-white/30">
          {/* Header */}
          <div className="relative p-8 text-center">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-all duration-300 p-2 rounded-full hover:bg-white/50 group"
            >
              <X className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>
            
            {/* Logo simple avec rouge */}
            <div className="relative inline-flex items-center justify-center w-20 h-20 bg-tomato-500 rounded-2xl mb-6 shadow-xl overflow-hidden group hover:bg-tomato-600 transition-colors duration-300">
              <Sparkles className="h-10 w-10 text-white relative z-10 group-hover:rotate-12 transition-transform duration-500" />
              
              {/* Confettis animés simples */}
              <div className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full animate-bounce delay-100"></div>
              <div className="absolute top-3 right-3 w-1 h-1 bg-white rounded-full animate-bounce delay-300"></div>
              <div className="absolute bottom-2 left-4 w-1 h-1 bg-white rounded-full animate-bounce delay-500"></div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Bienvenue ! 🎉
            </h2>
            <p className="text-gray-600 text-lg">
              Prêt pour une expérience <span className="font-semibold text-tomato-500">magique</span> ?
            </p>
          </div>

          {/* Contenu principal */}
          <div className="px-8 pb-8">
            {/* Bouton Google compact */}
            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full relative group overflow-hidden bg-white border-2 border-gray-100 hover:border-tomato-200 rounded-xl py-3 px-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {/* Effet de brillance simple */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <div className="relative flex items-center justify-center space-x-3">
                {isLoading ? (
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 border-2 border-gray-200 border-t-tomato-500 rounded-full animate-spin"></div>
                    <span className="text-gray-600 font-medium">Connexion...</span>
                  </div>
                ) : (
                  <>
                    {/* Logo Google */}
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                    
                    <span className="text-gray-700 font-medium group-hover:text-tomato-600 transition-colors duration-300">
                      Continuer avec Google
                    </span>
                  </>
                )}
              </div>
            </button>

            {/* Message encourageant simple */}
            <div className="mt-6 p-4 bg-tomato-50 rounded-xl border border-tomato-100">
              <p className="text-sm text-center text-gray-600">
                <span className="font-semibold text-tomato-600">✨ Rejoignez des milliers de gourmets</span><br/>
                qui économisent déjà avec Majik !
              </p>
            </div>

            {/* Texte légal */}
            <p className="text-xs text-gray-400 text-center mt-4 leading-relaxed">
              En continuant, vous acceptez de vivre des moments <span className="text-tomato-400">magiques</span> 🪄
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal