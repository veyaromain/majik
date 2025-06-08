import React, { useState } from 'react'
import { Search, Filter, MapPin, Star, Percent } from 'lucide-react'

interface Restaurant {
  id: number
  name: string
  cuisine: string
  city: string
  image: string
  discount: string
  rating: number
  description: string
}

const Restaurants: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCuisine, setSelectedCuisine] = useState('')
  const [selectedCity, setSelectedCity] = useState('')

  const restaurants: Restaurant[] = [
    {
      id: 1,
      name: "Le Petit Gourmet",
      cuisine: "Française",
      city: "Genève",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      discount: "jusqu'à -25%",
      rating: 4.8,
      description: "Cuisine française raffinée dans un cadre intimiste"
    },
    {
      id: 2,
      name: "Osteria Bella Vista",
      cuisine: "Italienne",
      city: "Lausanne",
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg",
      discount: "jusqu'à -20%",
      rating: 4.6,
      description: "Authentique cuisine italienne avec vue sur le lac"
    },
    {
      id: 3,
      name: "Sushi Zen",
      cuisine: "Japonaise",
      city: "Montreux",
      image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg",
      discount: "jusqu'à -30%",
      rating: 4.9,
      description: "Sushi frais et créatif dans un ambiance zen"
    },
    {
      id: 4,
      name: "Brasserie du Lac",
      cuisine: "Suisse",
      city: "Neuchâtel",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
      discount: "jusqu'à -15%",
      rating: 4.5,
      description: "Spécialités suisses traditionnelles au bord du lac"
    },
    {
      id: 5,
      name: "Curry Palace",
      cuisine: "Indienne",
      city: "Fribourg",
      image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg",
      discount: "jusqu'à -25%",
      rating: 4.7,
      description: "Épices authentiques et saveurs exotiques"
    },
    {
      id: 6,
      name: "Tapas & Co",
      cuisine: "Espagnole",
      city: "Genève",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
      discount: "jusqu'à -20%",
      rating: 4.4,
      description: "Ambiance conviviale et tapas traditionnelles"
    }
  ]

  const cuisines = [...new Set(restaurants.map(r => r.cuisine))]
  const cities = [...new Set(restaurants.map(r => r.city))]

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCuisine = !selectedCuisine || restaurant.cuisine === selectedCuisine
    const matchesCity = !selectedCity || restaurant.city === selectedCity
    
    return matchesSearch && matchesCuisine && matchesCity
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nos restaurants
            <span className="block text-tomato-500">partenaires</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez une sélection de restaurants d'exception en Suisse romande
          </p>
        </div>

        {/* Filtres */}
        <div className="glass-card p-6 rounded-3xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Recherche */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Rechercher un restaurant, ville..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-tomato-400 focus:ring-2 focus:ring-tomato-100 transition-all duration-300 bg-white/70"
              />
            </div>

            {/* Filtre cuisine */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={selectedCuisine}
                onChange={(e) => setSelectedCuisine(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-tomato-400 focus:ring-2 focus:ring-tomato-100 transition-all duration-300 bg-white/70 appearance-none"
              >
                <option value="">Toutes les cuisines</option>
                {cuisines.map(cuisine => (
                  <option key={cuisine} value={cuisine}>{cuisine}</option>
                ))}
              </select>
            </div>

            {/* Filtre ville */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-tomato-400 focus:ring-2 focus:ring-tomato-100 transition-all duration-300 bg-white/70 appearance-none"
              >
                <option value="">Toutes les villes</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Grille des restaurants */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRestaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="glass-card rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-tomato-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {restaurant.discount}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-tomato-600 transition-colors duration-300">
                    {restaurant.name}
                  </h3>
                  <div className="flex items-center space-x-1 text-curry-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium">{restaurant.rating}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <span className="bg-basil-100 text-basil-700 px-2 py-1 rounded-lg">
                    {restaurant.cuisine}
                  </span>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{restaurant.city}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {restaurant.description}
                </p>

                {/* Bouton d'action */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="w-full magic-button bg-gradient-to-r from-tomato-500 to-tomato-600 text-white py-2 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                    <Percent className="h-4 w-4" />
                    <span>Voir les offres</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message si aucun résultat */}
        {filteredRestaurants.length === 0 && (
          <div className="text-center py-12">
            <div className="glass-card p-8 rounded-3xl max-w-md mx-auto">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Aucun restaurant trouvé
              </h3>
              <p className="text-gray-600">
                Essayez de modifier vos critères de recherche
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Restaurants