import React, { createContext, useContext, useEffect, useState } from 'react'
import { User, onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth'
import { auth, provider } from './firebase'

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: () => Promise<void>
  signOutUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const signIn = async () => {
    try {
      // Force popup mode for web environments
      provider.setCustomParameters({
        prompt: 'select_account'
      });
      await signInWithPopup(auth, provider)
    } catch (error: any) {
      if (error.code === 'auth/popup-blocked') {
        // Fallback: show instructions to user
        alert('Les popups sont bloquées. Veuillez autoriser les popups pour ce site et réessayer.')
      } else if (error.code === 'auth/invalid-action-code') {
        alert('Action invalide. Veuillez réessayer.')
      } else if (error.code === 'auth/unauthorized-domain') {
        // Show helpful message for domain issues
        alert('Erreur de domaine. Veuillez contacter le support.')
      } else {
        console.error('Erreur de connexion:', error)
        alert(`Erreur de connexion: ${error.message}`)
      }
    }
  }

  const signOutUser = async () => {
    await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOutUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)