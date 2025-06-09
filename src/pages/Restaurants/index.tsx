import React, { useState } from 'react'
import RestaurantsView from './View'
import { restaurants } from '../../services/restaurants'

const Restaurants: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCuisine, setSelectedCuisine] = useState('')
  const [selectedCity, setSelectedCity] = useState('')

  const cuisines = [...new Set(restaurants.map(r => r.cuisine))]
  const cities = [...new Set(restaurants.map(r => r.city))]

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch =
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCuisine = !selectedCuisine || restaurant.cuisine === selectedCuisine
    const matchesCity = !selectedCity || restaurant.city === selectedCity

    return matchesSearch && matchesCuisine && matchesCity
  })

  return (
    <RestaurantsView
      restaurants={filteredRestaurants}
      cuisines={cuisines}
      cities={cities}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      selectedCuisine={selectedCuisine}
      setSelectedCuisine={setSelectedCuisine}
      selectedCity={selectedCity}
      setSelectedCity={setSelectedCity}
    />
  )
}

export default Restaurants
