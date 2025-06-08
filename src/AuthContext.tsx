import React, { createContext, useContext, useEffect, useState } from 'react'
import { User, onAuthStateChanged, signInWithRedirect, signOut, GoogleAuthProvider, getRedirectResult } from 'firebase/auth'
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

    // Handle redirect result when user returns from Google sign-in
    getRedirectResult(auth).catch((error) => {
      console.error('Redirect sign-in error:', error)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const signIn = async () => {
    await signInWithRedirect(auth, provider)
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