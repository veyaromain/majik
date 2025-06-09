import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Clock, MapPin, Percent, Zap, ChefHat, Users, TrendingUp } from 'lucide-react'
import MountainSeparator from '../../components/MountainSeparator'
import { useParallax, useIntersectionParallax } from '../../hooks/useParallax'
import styles from './styles.module.css'

const HomeView: React.FC = () => {
  const scrollY = useParallax()
  
  // Refs pour les sections
  const heroRef = useRef<HTMLElement>(null)
  const heroImageRef = useRef<HTMLDivElement>(null)
  const heroOverlayRef = useRef<HTMLDivElement>(null)
  const sparklesRef = useRef<HTMLDivElement>(null)
  
  // Parallax pour chaque section avec intersection observer
  const { parallaxValue: section1Parallax, setRef: setSection1Ref } = useIntersectionParallax(0.3)
  const { parallaxValue: section2Parallax, setRef: setSection2Ref } = useIntersectionParallax(0.2)
  const { parallaxValue: section3Parallax, setRef: setSection3Ref } = useIntersectionParallax(0.25)
  const { parallaxValue: section4Parallax, setRef: setSection4Ref } = useIntersectionParallax(0.15)

  // Effet de parallax optimisé pour le hero
  useEffect(() => {
    const updateParallax = () => {
      if (heroImageRef.current) {
        const heroOffset = heroRef.current?.offsetTop || 0
        const relativeScroll = Math.max(0, scrollY - heroOffset)
        const parallaxOffset = relativeScroll * 0.5
        
        heroImageRef.current.style.transform = `translate3d(0, ${parallaxOffset}px, 0)`
      }
      
      if (heroOverlayRef.current) {
        const heroOffset = heroRef.current?.offsetTop || 0
        const relativeScroll = Math.max(0, scrollY - heroOffset)
        const parallaxOffset = relativeScroll * 0.3
        
        heroOverlayRef.current.style.transform = `translate3d(0, ${parallaxOffset}px, 0)`
      }
      
      if (sparklesRef.current) {
        const heroOffset = heroRef.current?.offsetTop || 0
        const relativeScroll = Math.max(0, scrollY - heroOffset)
        const parallaxOffset = relativeScroll * 0.7
        
        sparklesRef.current.style.transform = `translate3d(0, ${parallaxOffset}px, 0)`
      }
    }

    updateParallax()
  }, [scrollY])

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
    <div className={`${styles.container} overflow-hidden`}>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Image de fond avec parallax */}
        <div 
          ref={heroImageRef}
          className="absolute inset-0 z-0"
          style={{ 
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            perspective: '1000px'
          }}
        >
          <img
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
            alt="Restaurant gastronomique"
            className="w-full h-[120%] object-cover"
            style={{ 
              willChange: 'transform',
              transform: 'translateZ(0)'
            }}
          />
        </div>
        
        {/* Overlays avec parallax différentiel */}
        <div 
          ref={heroOverlayRef}
          className="absolute inset-0 z-10"
          style={{ 
            willChange: 'transform',
            backfaceVisibility: 'hidden'
          }}
        >
          {/* Overlay sombre pour assombrir l'image */}
          <div className="absolute inset-0 bg-black/50"></div>
          {/* Overlay couleur crème pour maintenir l'harmonie */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" style={{backgroundColor: 'rgba(237, 229, 204, 0.3)'}}></div>
        </div>

        {/* Éléments décoratifs flottants */}
        <div 
          ref={sparklesRef}
          className="absolute inset-0 overflow-hidden pointer-events-none z-20"
          style={{ 
            willChange: 'transform',
            backfaceVisibility: 'hidden'
          }}
        >
          <div className="sparkle top-20 left-20"></div>
          <div className="sparkle top-40 right-32"></div>
          <div className="sparkle bottom-32 left-16"></div>
          <div className="sparkle bottom-20 right-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-30">
          <div className="floating-element mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-tomato-500 rounded-full shadow-2xl glow-tomato">
              <Sparkles className="h-12 w-12 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow-lg">
            Et si aller au resto
            <span className="block text-tomato-500 drop-shadow-lg">
              devenait magique ?
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Découvrez des réductions exclusives dans les meilleurs restaurants de Suisse romande. 
            Une expérience culinaire unique vous attend.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/restaurants"
              className="magic-button bg-tomato-500 hover:bg-tomato-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-2 glow-tomato"
            >
              <span>Parcourir les restaurants</span>
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              to="/abonnements"
              className="magic-button bg-white/15 backdrop-blur-md border border-white/40 px-8 py-4 rounded-2xl font-semibold text-lg text-white hover:text-white hover:bg-white/25 transition-all duration-300 flex items-center space-x-2 shadow-xl"
            >
              <span>Découvrir les abonnements</span>
              <Sparkles className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Séparateur montagne - transition crème vers blanc */}
      <MountainSeparator 
        fromColor="#EDE5CC" 
        toColor="rgba(255, 255, 255, 0.5)" 
      />

      {/* Section avec images percutantes */}
      <section 
        ref={setSection1Ref}
        className="py-20 bg-white/50"
        style={{ 
          transform: `translate3d(0, ${-section1Parallax}px, 0)`,
          willChange: 'transform'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              L'expérience restaurant réinventée
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez une nouvelle façon de vivre vos sorties culinaires
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image restaurant élégant */}
            <div className="relative group">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
                  alt="Restaurant élégant"
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Restaurants d'exception</h3>
                  <p className="text-white/90">Une sélection rigoureuse des meilleurs établissements</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass-card p-8 rounded-3xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-tomato-100 rounded-xl flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-tomato-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Réductions exclusives</h3>
                </div>
                <p className="text-gray-600">
                  Bénéficiez de réductions jusqu'à 30% dans une sélection de restaurants partenaires triés sur le volet.
                </p>
              </div>

              <div className="glass-card p-8 rounded-3xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-basil-100 rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-basil-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Simplicité absolue</h3>
                </div>
                <p className="text-gray-600">
                  Plus besoin de codes promo ou de coupons. Votre réduction s'applique automatiquement.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 lg:order-2">
              <div className="glass-card p-8 rounded-3xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-curry-100 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-curry-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Partout en Suisse romande</h3>
                </div>
                <p className="text-gray-600">
                  De Genève à Fribourg, découvrez les pépites culinaires de votre région.
                </p>
              </div>

              <div className="glass-card p-8 rounded-3xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-tomato-100 rounded-xl flex items-center justify-center">
                    <Zap className="h-6 w-6 text-tomato-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Expérience premium</h3>
                </div>
                <p className="text-gray-600">
                  Réservations prioritaires, événements exclusifs et service client dédié.
                </p>
              </div>
            </div>

            {/* Image plats gastronomiques */}
            <div className="relative group lg:order-1">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg"
                  alt="Plats gastronomiques"
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Cuisine d'exception</h3>
                  <p className="text-white/90">Des saveurs authentiques et des créations uniques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Séparateur montagne - transition blanc vers basil */}
      <MountainSeparator 
        fromColor="rgba(255, 255, 255, 0.5)" 
        toColor="#f0fdf4" 
      />

      {/* Section Avantages */}
      <section 
        ref={setSection2Ref}
        className="py-20 bg-basil-50"
        style={{ 
          transform: `translate3d(0, ${-section2Parallax}px, 0)`,
          willChange: 'transform'
        }}
      >
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
                style={{ 
                  transform: `translate3d(0, ${section2Parallax * (0.1 + index * 0.05)}px, 0)`,
                  transitionDelay: `${index * 100}ms`,
                  willChange: 'transform'
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-tomato-100 group-hover:bg-tomato-200 rounded-2xl mb-6 text-tomato-600 transition-all duration-300">
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

      {/* Séparateur montagne - transition basil vers blanc */}
      <MountainSeparator 
        fromColor="#f0fdf4" 
        toColor="rgba(255, 255, 255, 0.5)" 
        direction="reverse"
      />

      {/* Section Fonctionnement */}
      <section 
        ref={setSection3Ref}
        className="py-20 bg-white/50"
        style={{ 
          transform: `translate3d(0, ${-section3Parallax}px, 0)`,
          willChange: 'transform'
        }}
      >
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
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-tomato-300 transform translate-x-6"></div>
                )}

                <div 
                  className="glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-300 hover:shadow-2xl relative z-10"
                  style={{ 
                    transform: `translate3d(0, ${section3Parallax * (0.15 + index * 0.1)}px, 0)`,
                    transitionDelay: `${index * 150}ms`,
                    willChange: 'transform'
                  }}
                >
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

          <div className="text-center mt-12">
            <Link
              to="/abonnements"
              className="magic-button bg-tomato-500 hover:bg-tomato-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-2 glow-tomato"
            >
              <span>Commencer l'aventure</span>
              <Sparkles className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Séparateur montagne - transition blanc vers curry */}
      <MountainSeparator 
        fromColor="rgba(255, 255, 255, 0.5)" 
        toColor="#fefce8" 
      />

      {/* Section Restaurateurs */}
      <section 
        ref={setSection4Ref}
        className="py-20 bg-gradient-to-br from-curry-400 to-curry-500 text-white relative overflow-hidden"
        style={{ 
          transform: `translate3d(0, ${-section4Parallax}px, 0)`,
          willChange: 'transform'
        }}
      >
        {/* Éléments décoratifs */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            transform: `translate3d(0, ${section4Parallax * 0.2}px, 0) rotate(${section4Parallax * 0.01}deg)`,
            willChange: 'transform'
          }}
        >
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 bg-white rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenu texte */}
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
                <ChefHat className="h-8 w-8 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Vous êtes restaurateur ?
                <span className="block text-white/90">
                  Rejoignez notre réseau !
                </span>
              </h2>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Attirez de nouveaux clients passionnés de gastronomie et développez votre activité 
                sans frais d'installation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white/90">Plus de clients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white/90">Zéro frais d'installation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white/90">Visibilité immédiate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white/90">Support dédié</span>
                </div>
              </div>

              <Link
                to="/restaurateurs"
                className="magic-button bg-white text-curry-600 hover:bg-white/90 px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Rejoindre Majik</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Image chef */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg"
                  alt="Chef professionnel"
                  className="w-full h-96 object-cover transition-transform duration-700"
                  style={{ 
                    transform: `scale(${1 + section4Parallax * 0.0002})`,
                    willChange: 'transform'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-basil-900/40 to-transparent"></div>
              </div>
              
              {/* Badge flottant */}
              <div 
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl"
                style={{ 
                  transform: `translate3d(0, ${section4Parallax * 0.1}px, 0) rotate(${section4Parallax * 0.02}deg)`,
                  willChange: 'transform'
                }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-curry-600 mb-1">100+</div>
                  <div className="text-sm text-gray-600">Restaurants partenaires</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeView
