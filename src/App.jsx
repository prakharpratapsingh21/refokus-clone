

//--------------------Refokus Clone-------------------------------

import Navbar from './Refokus/Navbar'
import Work from './Refokus/Work'
import Stripes from './Refokus/Stripes'
import Products from './Refokus/Products'
import Marquees from './Refokus/Marquees'
import Cards from './Refokus/Cards'
import Footer from './Refokus/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
    const locomotiveScroll = new LocomotiveScroll();   //-------------For Smooth Scroll--------------
  return (
    <div className='w-full bg-zinc-900 text-white'>
        <Navbar/>
        <Work/>
        <Stripes/>
        <Products/>
        <Marquees/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default App