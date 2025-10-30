import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'

import Home from './components/Home'
import Overly from './components/Overly'
import Menuu from './components/Menuu'
import Review from './components/Review'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };


  return (
    <>
      <div>
        <div className="w-full overflow-hidden relative h-screen">
          {/* ✅ Background Image */}
          <div
            className=" max-sm:hidden absolute inset-0 bg-no-repeat    bg-cover  sm:h-[720px] sm:w-[990px]  sm:ml-100 max-sm:ml-[-30px]  max-sm:w-[400px] max-sm:h-[320px]   overflow-hidden z-[-1]"
            style={{
              backgroundImage: "url('./suchi.png')",
            }}
          />
          <div
            className="sm:hidden absolute inset-0 bg-no-repeat    bg-cover  max-sm:ml-[10px]  max-sm:w-[460px] max-sm:h-[360px]   overflow-hidden z-[-1]"
            style={{
              backgroundImage: "url('./sushimobile.png')",
            }}
          />



          <div className="relative z-10 max-sm:mt-[50px]">
            <NavBar cartCount={cartItems.length} cartItems={cartItems} setCartItems={setCartItems} />
          </div>
          <div>



            <div className="relative  sm:p-40 z-0  ">
              <Home />

            </div>
          </div>
        </div>




        <div className='max-sm:mt-[-80px]'>

          <Overly />
        </div>
        
{/* making a barrier */}
<div className="flex justify-center items-center mt-[-60px] sm:ml-[140px] max-sm:mt-[-100px]">
  <img
    src="./chinese.png"
    alt=""
    className="w-[400px] max-sm:w-[250px]" // 👈 smaller on mobile
  />
</div>



      
        <div className='sm:mt-[-70px]max-sm:w-20'>
          <Menuu onAddToCart={handleAddToCart} />
        </div>
        <div className='sm:mt-[-203px] max-sm:mt-[-140px] '>
          <Review />
        </div>

        {/*making a brrier  */}

        <div className='max-sm:hidden overflow-x-hidden flex justify-center  items-center w-100 max-sm:w-80 mt-[-60px] max-sm:mt-[-30px] max-sm:ml-15 sm:ml-140'>
          <img src="./chinese.png" alt="" className='' />
        </div>



        {/* making a barrier */}
<div className="sm:hidden flex justify-center items-center mt-[-60px] sm:ml-[140px] max-sm:mt-[10px]">
  <img
    src="./chinese.png"
    alt=""
    className="w-[400px] max-sm:w-[250px]" // 👈 smaller on mobile
  />
</div>



        <div> 
    

        </div>
         <ScrollToTopButton  />
        <div className=''>
          <Footer />
        </div>

      </div>

    </>
  )
}

export default App
