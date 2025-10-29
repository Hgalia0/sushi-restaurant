import React from 'react'
export default function Home() {
  return (
    <div className="relative" id='home'>
      {/* ✅ Background image behind everything */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover w-140 h-120 max-sm:w-40 max-sm:h-40 max-sm:hidden sm:mt-[-320px] max-sm:mt-[-300px] max-sm:ml-[-10px] sm:ml-[-200px] z-[-1] overflow-x-hidden"
        style={{
          backgroundImage: "url('./home.png')",
        }}
      />

      {/* ✅ Foreground content */}
      <div className="relative sm:ml-10 z-10">
        <div className="flex flex-col gap-2 max-sm:gap-2 max-sm:mt-15 max-sm:p-4   ">
          <div className="flex items-center">
            <p className="text-[40px] font-semibold text-[#a5a8ac] max-sm:text-2xl max-sm:ml-2">L'art du sushi</p>
            <img src="./suchiholder.png" alt="" className="w-25 sm:mt-[-80px] max-sm:w-10 max-sm:mt-[-35px]" />
          </div>

          <p className="text-6xl max-sm:text-3xl  font-bold bg-gradient-to-r from-[#efa236] via-[#4e4f50] to-[#000000] bg-clip-text text-transparent">
            Sushi Combo
          </p>
           <p className="text-gray-600 text-[14px] font-semibold sm:hidden max-sm:ml-4">"25 combinaisons" </p>
        </div>
       <div className='max-sm:mt-40'>

        <div className="mt-5 flex flex-col gap-3 ">
          <p className="text-gray-600 text-[20px] font-semibold max-sm:hidden">25 combinaisons</p>
          <p className="text-gray-400 max-sm:w-70 max-sm:text-center max-sm:text-2xl max-sm:ml-16">
            Des ingrédients frais, un savoir-faire japonais, <br />
            et des saveurs qui enchantent à chaque bouchée.
          </p>
        </div>

        <div className="mt-5 flex items-center gap-10 max-sm:p-10 max-sm:ml-5">
          
 
      

          <button className="bg-gradient-to-r from-[#efa236] via-[#d49e4d] to-[#6e6c6c]
          text-white font-semibold px-6 py-2 rounded-[12px] shadow-lg
          hover:from-[#dabd94] hover:via-[#e0c08f] hover:to-[#8b8686]
          transition-all duration-300"   onClick={() => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  }}>
            Order Now
          </button>
         

           <a href="menu">

          <button className="bg-[#e6d3b4] text-[#797979] font-semibold px-6 py-2 rounded-[12px] shadow-lg hover:bg-[#eae0cf] transition-all duration-300"   onClick={() => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  }}>
            The Menu
          </button>

           </a>
         
        </div>
      </div>
       </div>
    </div>
  )
}
