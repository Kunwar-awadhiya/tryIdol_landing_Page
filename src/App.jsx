import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero-Section/Hero'
import Footer from './components/footer/Footer'
import About from './components/AboutUs/About'
import Packages from './components/ourPackages/Packages'
import Testimonials from './components/Testimonials/Testimonials'
import Faq from './components/Faq/Faq'
import Services from './components/OurServices/Services'

function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Packages/>
     <Services/>
     <Testimonials/>
     <Faq/>
     <Footer/>
    </>
  )
}

export default App
