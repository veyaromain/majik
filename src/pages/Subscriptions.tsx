import React, { useState } from 'react'
import { Check, Sparkles, Crown, Zap } from 'lucide-react'

interface Plan {
  id: string
  name: string
  duration: string
  price: number
  originalPrice: number
  discount: string
  features: string[]
  popular: boolean
  icon: React.ReactNode
  color: string
}

const Subscriptions: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('6-months')

  const plans: Plan[] = [
    {
      id: '1-month',
      name: 'Découverte',
      duration: '1 mois',
      price: 19,
      originalPrice: 25,
      discount: 'jusqu\'à -15%',
      features: [
        'Accès à 50+ restaurants',
        'Réductions jusqu\'à 15%',
        'Support client',
        'Application mobile'
      ],
      popular: false,
      icon: <Sparkles className="h-6 w-6" />,
      color: 'bg-curry-500'
    },
    {
      id: '6-months',
      name: 'Gourmand',
      duration: '6 mois',
      price: 89,
      originalPrice: 150,
      discount: 'jusqu\'à -25%',
      features: [
        'Accès à 100+ restaurants',
        'Réductions jusqu\'à 25%',
        'Réservations prioritaires',
        'Support client premium',
        'Application mobile',
        'Invitations événements'
      ],
      popular: true,
      icon: <Crown className="h-6 w-6" />,
      color: 'bg-tomato-500'
    },
    {
      id: '12-months',
      name: 'Épicurien',
      duration: '12 mois',
      price: 149,
      originalPrice: 300,
      discount: 'jusqu\'à -30%',
      features: [
        'Accès à tous les restaurants',
        'Réductions jusqu\'à 30%',
        'Réservations VIP',
        'Concierge personnel',
        'Application mobile',
        'Événements exclusifs',
        'Carte physique premium'
      ],
      popular: false,
      icon: <Zap className="h-6 w-6" />,
      color: 'bg-basil-500'
    }
  ]

  const handleSubscribe = (planId: string) => {
    // Simulation de l'abonnement
    const plan = plans.find(p => p.id === planId)
    if (plan) {
      // Animation magique
      const button = document.querySelector(`[data-plan="${planId}"]`)
      if (button) {
        button.classList.add('animate-pulse')
        setTimeout(() => {
          alert(`🎉 Félicitations ! Vous êtes maintenant abonné au plan ${plan.name} !`)
          button.classList.remove('animate-pulse')
        }, 1000)
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Choisissez votre
            <span className="block text-tomato-500">
              formule magique
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos abonnements et commencez à économiser dès aujourd'hui dans vos restaurants préférés
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative glass-card rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular ? 'ring-2 ring-tomato-400 shadow-2xl' : ''
              }`}
            >
              {/* Badge populaire */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-tomato-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Plus populaire
                  </div>
                </div>
              )}

              {/* Icône et nom */}
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${plan.color} rounded-2xl text-white mb-4 shadow-xl`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600">{plan.duration}</p>
              </div>

              {/* Prix */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-3xl md:text-4xl font-bold text-gray-800">
                    CHF {plan.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    CHF {plan.originalPrice}
                  </span>
                </div>
                <div className="bg-basil-100 text-basil-700 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  {plan.discount}
                </div>
              </div>

              {/* Fonctionnalités */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-basil-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-basil-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Bouton d'abonnement */}
              <button
                data-plan={plan.id}
                onClick={() => handleSubscribe(plan.id)}
                className={`w-full magic-button py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl ${
                  plan.popular
                    ? 'bg-tomato-500 hover:bg-tomato-600 text-white glow-tomato'
                    : 'bg-white text-gray-800 border-2 border-gray-200 hover:border-tomato-300'
                }`}
              >
                {plan.popular ? '✨ Je m\'abonne' : 'Choisir ce plan'}
              </button>
            </div>
          ))}
        </div>

        {/* Section avantages */}
        <div className="mt-20 glass-card p-8 md:p-12 rounded-3xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Pourquoi s'abonner à Majik ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-tomato-100 rounded-xl text-tomato-600 mb-4">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Économies garanties</h3>
              <p className="text-gray-600 text-sm">
                Votre abonnement est rentabilisé dès la 3ème visite
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-basil-100 rounded-xl text-basil-600 mb-4">
                <Crown className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Restaurants premium</h3>
              <p className="text-gray-600 text-sm">
                Accès exclusif aux meilleurs établissements de Suisse romande
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-curry-100 rounded-xl text-curry-600 mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Sans engagement</h3>
              <p className="text-gray-600 text-sm">
                Résiliez à tout moment depuis votre espace personnel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscriptions