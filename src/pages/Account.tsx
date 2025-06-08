import React, { useState } from 'react'
import { User, Calendar, CreditCard, Settings, LogOut, Crown, Sparkles } from 'lucide-react'

const Account: React.FC = () => {
  const [user] = useState({
    name: 'Marie Dubois',
    email: 'marie.dubois@email.com',
    subscription: 'Gourmand',
    subscriptionEnd: '15 juin 2024',
    memberSince: 'Janvier 2024',
    totalSavings: 245,
    visitsCount: 12
  })

  const [showCancelModal, setShowCancelModal] = useState(false)

  const recentVisits = [
    {
      id: 1,
      restaurant: 'Le Petit Gourmet',
      date: '12 mars 2024',
      savings: 25,
      city: 'Genève'
    },
    {
      id: 2,
      restaurant: 'Sushi Zen',
      date: '8 mars 2024',
      savings: 35,
      city: 'Montreux'
    },
    {
      id: 3,
      restaurant: 'Osteria Bella Vista',
      date: '3 mars 2024',
      savings: 20,
      city: 'Lausanne'
    }
  ]

  const handleCancelSubscription = () => {
    setShowCancelModal(false)
    // Animation de confirmation
    const button = document.querySelector('#cancel-button')
    if (button) {
      button.classList.add('animate-pulse')
      setTimeout(() => {
        alert('😢 Votre demande d\'annulation a été prise en compte. Nous vous enverrons un email de confirmation.')
        button.classList.remove('animate-pulse')
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Mon compte
            <span className="block text-tomato-500">Majik</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profil principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Informations personnelles */}
            <div className="glass-card p-8 rounded-3xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-tomato-400 to-tomato-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                  <p className="text-gray-600">{user.email}</p>
                  <p className="text-sm text-gray-500">Membre depuis {user.memberSince}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-basil-50 to-basil-100 p-6 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-2">
                    <Sparkles className="h-6 w-6 text-basil-600" />
                    <span className="font-semibold text-basil-800">Économies totales</span>
                  </div>
                  <p className="text-3xl font-bold text-basil-700">CHF {user.totalSavings}</p>
                </div>

                <div className="bg-gradient-to-br from-curry-50 to-curry-100 p-6 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-2">
                    <Calendar className="h-6 w-6 text-curry-600" />
                    <span className="font-semibold text-curry-800">Visites</span>
                  </div>
                  <p className="text-3xl font-bold text-curry-700">{user.visitsCount}</p>
                </div>
              </div>
            </div>

            {/* Historique des visites */}
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                <Calendar className="h-6 w-6 text-tomato-500" />
                <span>Mes dernières visites</span>
              </h3>

              <div className="space-y-4">
                {recentVisits.map((visit) => (
                  <div key={visit.id} className="bg-white/50 p-4 rounded-2xl border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-800">{visit.restaurant}</h4>
                        <p className="text-sm text-gray-600">{visit.city} • {visit.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-basil-600">-CHF {visit.savings}</p>
                        <p className="text-xs text-gray-500">économisé</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Statut abonnement */}
            <div className="glass-card p-6 rounded-3xl">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-tomato-400 to-tomato-600 rounded-full text-white mb-4">
                  <Crown className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Plan {user.subscription}</h3>
                <p className="text-gray-600">Actif jusqu'au {user.subscriptionEnd}</p>
              </div>

              <div className="space-y-3">
                <button className="w-full magic-button bg-gradient-to-r from-tomato-500 to-tomato-600 text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <CreditCard className="h-4 w-4" />
                  <span>Gérer mon abonnement</span>
                </button>

                <button
                  onClick={() => setShowCancelModal(true)}
                  className="w-full text-gray-600 hover:text-red-600 py-2 px-4 rounded-xl font-medium transition-colors duration-300 text-sm"
                >
                  Se désabonner
                </button>
              </div>
            </div>

            {/* Actions rapides */}
            <div className="glass-card p-6 rounded-3xl">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Actions rapides</h3>
              
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-colors duration-300 text-left">
                  <User className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">Modifier le profil</span>
                </button>

                <button className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-colors duration-300 text-left">
                  <Settings className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">Paramètres</span>
                </button>

                <button className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-colors duration-300 text-left">
                  <LogOut className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">Se déconnecter</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal d'annulation */}
        {showCancelModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="glass-card p-8 rounded-3xl max-w-md w-full">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Confirmer l'annulation
              </h3>
              <p className="text-gray-600 mb-6">
                Êtes-vous sûr de vouloir annuler votre abonnement ? Vous perdrez l'accès à tous les avantages Majik.
              </p>
              
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowCancelModal(false)}
                  className="flex-1 magic-button bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-200 transition-colors duration-300"
                >
                  Annuler
                </button>
                <button
                  id="cancel-button"
                  onClick={handleCancelSubscription}
                  className="flex-1 magic-button bg-red-500 text-white py-3 px-4 rounded-xl font-medium hover:bg-red-600 transition-colors duration-300"
                >
                  Confirmer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Account