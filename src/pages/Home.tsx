import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Clock, MapPin, Percent, Zap } from 'lucide-react'

const Home: React.FC = () => {
  const benefits = [
    {
      icon: <Percent className="h-8 w-8" />,
      title: "Économisez facilement",
      description: "Jusqu'à 30% de réduction dans vos restaurants préférés"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Pas de tracas",
      description: "Pas besoin de code ou coupon, tout est automatique"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Restos triés sur le volet",
      description: "Une sélection des meilleurs établissements de Suisse romande"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Expérience magique",
      description: "Simple, locale et ludique pour tous vos repas"
    }
  ]

  const steps = [
    {
      number: "1",
      title: "Je m'abonne",
      description: "Choisissez votre formule en quelques clics"
    },
    {
      number: "2", 
      title: "Je choisis un resto",
      description: "Parcourez notre sélection de restaurants partenaires"
    },
    {
      number: "3",
      title: "Je profite de la réduction",
      description: "Présentez votre carte Majik et économisez automatiquement"
    }
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 via-white to-tomato-50">
        {/* Éléments décoratifs flottants */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="sparkle top-20 left-20"></div>
          <div className="sparkle top-40 right-32"></div>
          <div className="sparkle bottom-32 left-16"></div>
          <div className="sparkle bottom-20 right-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="floating-element mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-tomato-400 to-tomato-600 rounded-full shadow-2xl glow-tomato">
              <Sparkles className="h-12 w-12 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 text-shadow">
            Et si aller au resto
            <span className="block bg-gradient-to-r from-tomato-500 via-tomato-600 to-basil-500 bg-clip-text text-transparent">
              devenait magique ?
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Découvrez des réductions exclusives dans les meilleurs restaurants de Suisse romande. 
            Une expérience culinaire unique vous attend.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/restaurants"
              className="magic-button bg-gradient-to-r from-tomato-500 to-tomato-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 glow-tomato"
            >
              <span>Parcourir les restaurants</span>
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              to="/abonnements"
              className="magic-button glass-card px-8 py-4 rounded-2xl font-semibold text-lg text-tomato-600 hover:text-tomato-700 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Découvrir les abonnements</span>
              <Sparkles className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pourquoi choisir Majik ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une expérience restaurant révolutionnaire qui transforme chaque sortie en moment magique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-3xl text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-tomato-100 to-tomato-200 rounded-2xl mb-6 text-tomato-600 group-hover:from-tomato-200 group-hover:to-tomato-300 transition-all duration-300">
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
      </section>

      {/* Section Fonctionnement */}
      <section className="py-20 bg-gradient-to-br from-basil-50 to-curry-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trois étapes simples pour transformer vos sorties restaurant
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Ligne de connexion */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-basil-300 to-curry-300 transform translate-x-6"></div>
                )}

                <div className="glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-300 hover:shadow-2xl relative z-10">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-basil-400 to-basil-600 rounded-full text-white text-2xl font-bold mb-6 shadow-xl glow-basil">
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

          <div className="text-center mt-12">
            <Link
              to="/abonnements"
              className="magic-button bg-gradient-to-r from-basil-500 to-basil-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-2 glow-basil"
            >
              <span>Commencer l'aventure</span>
              <Sparkles className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home