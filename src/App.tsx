import { useState, createContext, useContext } from 'react'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import Rooms from './components/Rooms'
import About from './components/About'
import Reservation from './components/Reservation'
import Contact from './components/Contact'

// Create a navigation context to share navigation state across components
export const NavigationContext = createContext({
  currentPage: 'home',
  setCurrentPage: (_: string) => {}
})

// Custom hook to use the navigation context
export const useNavigation = () => useContext(NavigationContext)

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Update document title based on current page
  document.title = `Hotelero - ${currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}`

  // Render the appropriate page based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'rooms':
        return <Rooms />
      case 'about':
        return <About />
      case 'reservation':
        return <Reservation />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <NavigationContext.Provider value={{ currentPage, setCurrentPage }}>
      <Layout>
        {/* Page Content */}
        {renderPage()}
      </Layout>
    </NavigationContext.Provider>
  )
}

export default App
