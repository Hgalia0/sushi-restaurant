import React from 'react'

export default function Footer() {
    return (
        <footer className="flex flex-col  md:flex-row w-full h-[400px] max-md:flex-col overflow-x-hidden">
            {/* Map Section */}

            {/* Info Section */}
            <div className="w-120  bg-[#fcefdc] flex flex-col gap-2 justify-center p-6 max-sm:w-104">

        
             <div className='max-sm:flex'>

              <div className=''>

                <div className='flex items-center max-sm:ml-15 max-sm:mt-[-10px]'>
                    <p className="text-4xl  font-bold bg-gradient-to-r from-[#efa236] via-[#4e4f50] to-[#000000] bg-clip-text text-transparent">
                        sushigarden
                    </p>


                    <img src="./footersushi.png" alt="" className="w-16" />
                </div>


                <div className='flex items-center max-sm:ml-[-12px]'>
                    <img src="./local.png" alt="" className='w-8' />
                    <p className="mb-1 text-[#696c70]">Alger centre ,<br />
                     Métro khelifa boukhalfa</p>
                </div>
                <div className='flex items-center gap-2 ml-1 max-sm:ml-[-10px]'>
                    <img src="./clock.png" alt="" className='w-6' />
                    <p className='text-[#696c70] m'>De 10h à 23h30</p>

                </div>
                <br />
              </div>



                <div className='flex  items-center gap-10 max-sm:flex-col max-sm:gap-5 max-sm:whitespace-nowrap max-sm:mt-14'>


                    <p className="font-bold  max-sm:ml-[-30px] text-3xl max-sm:text-xl bg-gradient-to-r from-[#efa236] via-[#d49e4d] to-[#a09797] bg-clip-text text-transparent">
                        Our platforms:

                    </p>

                    <div className=" flex items-center gap-5 mt-[px] ">
                        <a
                            href="https://instagram.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="./insta.png"
                                alt="Profile"
                                className="w-10 hover:scale-105 transition"
                            />
                        </a>
                        <a
                            href="https://wa.me/213555123456"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="./wts.png"
                                alt="Chat on WhatsApp"
                                className="w-13 ml-[-14px] hover:scale-110 transition"
                            />
                        </a>
                    </div>
                </div>
             </div>


                <div className="bg-amber-100 text-center py-4 sm:mt-38 sm:w-120 max-sm:w-40 sm:ml-[-30px] max-sm:hidden">
                    <p className="text-[#4b2e05] font-medium">
                        Made by <span className="font-bold">Galia Nourh ❤️</span> —{" "}
                        <a
                            href="https://www.instagram.com/coffeecode.dz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline transition hover:text-red-500"
                        >
                            Visit my Instagram
                        </a>
                    </p>
                </div>
            </div>
            <img src="./hand.png" alt="" className='absolute max-sm:hidden w-80 mt-[-50px] ml-80 z-10' />



            <div
                className="max-sm:relative w-300 max-sm:w-105   max-sm:h-120 sm:h-[400px] bg-cover bg-center"
                style={{ backgroundImage: "url('./map.png')" }}
            >
                <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center sm:mt-735 sm:ml-105">
                    <a
                        href="https://www.google.com/maps/place/Sushi+garden/@36.7664541,3.0520793,16.75z/data=!4m6!3m5!1s0x128fb30021ff9a41:0xd21a18c4eac84814!8m2!3d36.7666735!4d3.054886!16s%2Fg%2F11vz1m3gqg?entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-amber-400 text-white font-semibold rounded-lg hover:bg-amber-500 transition mt-[-70px]"
                    >
                        View on Google Maps
                    </a>
                </div>
            </div>
            <div className="bg-amber-100 text-center py-4 sm:mt-30 sm:w-120 max-sm:w-105 sm:ml-[-30px] h-8 sm:hidden">
                    <p className="text-[#4b2e05] font-medium mt-[-10px]">
                        Made by <span className="font-bold">Galia Nourh ❤️</span> —{" "}
                        <a
                            href="https://www.instagram.com/coffeecode.dz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline transition hover:text-red-500"
                        >
                            Visit my Instagram
                        </a>
                    </p>
                </div>


        </footer>



    )
}
