import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Restaurants from './pages/Restaurants'
import Subscriptions from './pages/Subscriptions'
import Account from './pages/Account'
import ForRestaurants from './pages/ForRestaurants'
import RequireAuth from './RequireAuth'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/abonnements" element={<Subscriptions />} />
        <Route path="/compte" element={
          <RequireAuth>
            <Account />
          </RequireAuth>
        } />
        <Route path="/restaurateurs" element={<ForRestaurants />} />
      </Routes>
    </Layout>
  )
}

export default App