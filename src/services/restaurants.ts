export interface Restaurant {
  id: number
  name: string
  cuisine: string
  city: string
  image: string
  discount: string
  rating: number
  description: string
}

export const restaurants: Restaurant[] = [
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
