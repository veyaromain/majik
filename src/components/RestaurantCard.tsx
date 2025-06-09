import React from 'react'
import { MapPin, Star, Percent } from 'lucide-react'
import { Restaurant } from '../services/restaurants'

interface Props {
  restaurant: Restaurant
}

const RestaurantCard: React.FC<Props> = ({ restaurant }) => (
  <div className="glass-card rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer">
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
      <p className="text-gray-600 text-sm leading-relaxed">{restaurant.description}</p>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <button className="w-full magic-button bg-gradient-to-r from-tomato-500 to-tomato-600 text-white py-2 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
          <Percent className="h-4 w-4" />
          <span>Voir les offres</span>
        </button>
      </div>
    </div>
  </div>
)

export default RestaurantCard
