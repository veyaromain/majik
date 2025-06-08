import React from 'react'
import { X } from 'lucide-react'
import { useAuth } from '../AuthContext'

interface LoginModalProps {
  onClose: () => void
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const { signIn } = useAuth()

  const handleLogin = async () => {
    await signIn()
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass-card p-6 rounded-3xl max-w-sm w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Se connecter</h2>
        <div className="text-center">
          <button
            onClick={handleLogin}
            className="magic-button bg-tomato-500 text-white px-4 py-2 rounded-xl"
          >
            Connexion Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
