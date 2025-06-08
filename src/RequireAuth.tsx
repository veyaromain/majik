import React, { useEffect, useState } from 'react'
import { useAuth } from './AuthContext'
import LoginModal from './components/LoginModal'

const RequireAuth: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user, loading } = useAuth()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (!loading && !user) {
      setShowModal(true)
    } else {
      setShowModal(false)
    }
  }, [loading, user])

  if (loading) {
    return <div className="p-8 text-center">Chargement...</div>
  }

  if (!user) {
    return showModal ? <LoginModal onClose={() => setShowModal(false)} /> : null
  }

  return children
}

export default RequireAuth
