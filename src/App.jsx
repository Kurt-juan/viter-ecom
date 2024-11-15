import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/frontend/Home'
import Items from './components/pages/backend/Items/Items'
import { StoreProvider } from './components/store/storeContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Settings from './components/pages/backend/settings/Settings'

const App = () => {
  const queryClient = new QueryClient ();
  return (
  <QueryClientProvider client={queryClient}>
  <StoreProvider>
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin/items" element={<Items/>}/> 
      <Route path="/admin/Settings" element={<Settings/>}/> 
    </Routes>
  </Router>
 </StoreProvider>
</QueryClientProvider>

  )
}

export default App