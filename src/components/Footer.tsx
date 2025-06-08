import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Heart } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="glass-card border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-8 w-8 text-tomato-500" />
              <span className="text-2xl font-bold text-tomato-500">
                Majik
              </span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              La plateforme qui rend vos sorties au restaurant magiques avec des réductions exclusives 
              dans les meilleurs établissements de Suisse romande.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Fait avec</span>
              <Heart className="h-4 w-4 text-tomato-500 mx-1" />
              <span>en Suisse</span>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/restaurants" className="text-gray-600 hover:text-tomato-600 transition-colors duration-300">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link to="/abonnements" className="text-gray-600 hover:text-tomato-600 transition-colors duration-300">
                  Abonnements
                </Link>
              </li>
              <li>
                <Link to="/compte" className="text-gray-600 hover:text-tomato-600 transition-colors duration-300">
                  Mon compte
                </Link>
              </li>
            </ul>
          </div>

          {/* Pour les professionnels */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Professionnels</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/restaurateurs" className="text-gray-600 hover:text-tomato-600 transition-colors duration-300">
                  Rejoindre Majik
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-tomato-600 transition-colors duration-300">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-tomato-600 transition-colors duration-300">
                  Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2024 Majik. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer