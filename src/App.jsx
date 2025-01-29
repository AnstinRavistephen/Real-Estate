import './App.css'
import Advantages from './Components/Advantages/Advantages'
import Agent from './Components/Agents/Agent'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Testimonials from './Components/Header/Testimonials'
import Listing from './Components/Listings/Listing'
import Location from './Components/Locations/Location'
import Map from './Components/Map/Map'
import Nav from './Components/Nav/Nav'

function App() {

  return (
    <>
      <Nav />
      <Header />
      <Testimonials />
      <Advantages />
      <Location />
      <Listing />
      <Banner />
      <Agent />
      <Map />
      <Footer />
    </>
  )
}

export default App
