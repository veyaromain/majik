import React, { useState } from 'react'
import { ChefHat, Users, TrendingUp, Clock, Mail, Phone, MessageSquare, Send } from 'lucide-react'

const ForRestaurants: React.FC = () => {
  const [formData, setFormData] = useState({
    restaurantName: '',
    contactName: '',
    phone: '',
    email: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Visibilité gratuite",
      description: "Votre restaurant visible par des milliers de gourmets en Suisse romande"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Clients pendant les heures creuses",
      description: "Attirez plus de clients aux moments où vous en avez le plus besoin"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Zéro frais d'installation",
      description: "Aucun coût initial, aucun équipement à acheter, juste plus de clients"
    }
  ]

  const steps = [
    {
      number: "1",
      title: "Inscription gratuite",
      description: "Remplissez le formulaire ci-dessous en 2 minutes"
    },
    {
      number: "2",
      title: "Validation du profil",
      description: "Notre équipe vous contacte pour finaliser votre profil"
    },
    {
      number: "3",
      title: "Clients immédiatement",
      description: "Votre restaurant est visible et vous recevez vos premiers clients Majik"
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Animation du bouton
    const button = document.querySelector('#submit-button')
    if (button) {
      button.classList.add('animate-pulse')
      
      setTimeout(() => {
        setIsSubmitted(true)
        button.classList.remove('animate-pulse')
        
        // Reset du formulaire après 3 secondes
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            restaurantName: '',
            contactName: '',
            phone: '',
            email: '',
            message: ''
          })
        }, 3000)
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen py-12" style={{backgroundColor: '#EDE5CC'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="floating-element mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-basil-500 rounded-full shadow-2xl glow-basil">
              <ChefHat className="h-12 w-12 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 text-shadow">
            Attirez plus de clients,
            <span className="block text-basil-500">
              sans effort
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Rejoignez le réseau Majik et découvrez comment attirer de nouveaux clients 
            passionnés de gastronomie, sans frais d'installation.
          </p>
        </div>

        {/* Section Avantages */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pourquoi rejoindre Majik ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des avantages concrets pour développer votre activité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-3xl text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-basil-100 group-hover:bg-basil-200 rounded-2xl mb-6 text-basil-600 transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Comment ça marche */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trois étapes simples pour rejoindre notre réseau
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Ligne de connexion */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-basil-300 transform translate-x-6"></div>
                )}

                <div className="glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-300 hover:shadow-2xl relative z-10">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-tomato-500 rounded-full text-white text-2xl font-bold mb-6 shadow-xl glow-tomato">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Rejoignez-nous dès maintenant
              </h2>
              <p className="text-gray-600">
                Remplissez ce formulaire et nous vous contacterons très rapidement
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="restaurantName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom du restaurant *
                    </label>
                    <input
                      type="text"
                      id="restaurantName"
                      name="restaurantName"
                      value={formData.restaurantName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-basil-400 focus:ring-2 focus:ring-basil-100 transition-all duration-300 bg-white/70"
                      placeholder="Le Petit Gourmet"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                      Personne de contact *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-basil-400 focus:ring-2 focus:ring-basil-100 transition-all duration-300 bg-white/70"
                      placeholder="Jean Dupont"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-basil-400 focus:ring-2 focus:ring-basil-100 transition-all duration-300 bg-white/70"
                        placeholder="+41 22 123 45 67"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-basil-400 focus:ring-2 focus:ring-basil-100 transition-all duration-300 bg-white/70"
                        placeholder="contact@restaurant.ch"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message (optionnel)
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-basil-400 focus:ring-2 focus:ring-basil-100 transition-all duration-300 bg-white/70 resize-none"
                      placeholder="Parlez-nous de votre restaurant, votre cuisine, vos spécialités..."
                    />
                  </div>
                </div>

                <button
                  id="submit-button"
                  type="submit"
                  className="w-full magic-button bg-basil-500 hover:bg-basil-600 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 glow-basil"
                >
                  <Send className="h-5 w-5" />
                  <span>Envoyer ma demande</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-basil-500 rounded-full text-white mb-6 shadow-xl animate-bounce-gentle">
                  <Send className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  🎉 Merci pour votre demande !
                </h3>
                <p className="text-gray-600 text-lg">
                  Notre équipe vous contactera très bientôt pour finaliser votre inscription au réseau Majik.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForRestaurants