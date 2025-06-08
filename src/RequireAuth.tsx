import React from 'react'
import { useAuth } from './AuthContext'

const RequireAuth: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user, loading, signIn } = useAuth()

  if (loading) {
    return <div className="p-8 text-center">Chargement...</div>
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <button onClick={signIn} className="magic-button bg-tomato-500 text-white px-4 py-2 rounded-xl">
          Se connecter avec Google
        </button>
      </div>
    )
  }

  return children
}

export default RequireAuth
