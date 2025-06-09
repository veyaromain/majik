import React from 'react'
import { Search, Filter, MapPin } from 'lucide-react'
import RestaurantCard from '../../components/RestaurantCard'
import { Restaurant } from '../../services/restaurants'
import styles from './styles.module.css'

interface Props {
  restaurants: Restaurant[]
  cuisines: string[]
  cities: string[]
  searchTerm: string
  setSearchTerm: (value: string) => void
  selectedCuisine: string
  setSelectedCuisine: (value: string) => void
  selectedCity: string
  setSelectedCity: (value: string) => void
}

const RestaurantsView: React.FC<Props> = ({
  restaurants,
  cuisines,
  cities,
  searchTerm,
  setSearchTerm,
  selectedCuisine,
  setSelectedCuisine,
  selectedCity,
  setSelectedCity
}) => (
  <div className={styles.container}>
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
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-tomato-400 focus:ring-2 focus:ring-tomato-100 transition-all duration-300 bg-white/70"
            />
          </div>

          {/* Filtre cuisine */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              value={selectedCuisine}
              onChange={e => setSelectedCuisine(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-tomato-400 focus:ring-2 focus:ring-tomato-100 transition-all duration-300 bg-white/70 appearance-none"
            >
              <option value="">Toutes les cuisines</option>
              {cuisines.map(cuisine => (
                <option key={cuisine} value={cuisine}>
                  {cuisine}
                </option>
              ))}
            </select>
          </div>

          {/* Filtre ville */}
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              value={selectedCity}
              onChange={e => setSelectedCity(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-tomato-400 focus:ring-2 focus:ring-tomato-100 transition-all duration-300 bg-white/70 appearance-none"
            >
              <option value="">Toutes les villes</option>
              {cities.map(city => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Grille des restaurants */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {restaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>

      {/* Message si aucun résultat */}
      {restaurants.length === 0 && (
        <div className="text-center py-12">
          <div className="glass-card p-8 rounded-3xl max-w-md mx-auto">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Aucun restaurant trouvé
            </h3>
            <p className="text-gray-600">Essayez de modifier vos critères de recherche</p>
          </div>
        </div>
      )}
    </div>
  </div>
)

export default RestaurantsView
