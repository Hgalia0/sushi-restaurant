import React from 'react'

export default function Footer() {
    return (
        <footer className="flex flex-col  md:flex-row w-full h-[400px] max-md:flex-col overflow-x-hidden" id='contact'>
            {/* Map Section */}

            {/* Info Section */}
            <div className="w-122  bg-[#fcefdc] flex flex-col gap-2 justify-center p-6 max-sm:w-104">


                <div className='max-sm:flex'>

                    <div className=''>

                        <div className='flex items-center max-sm:ml-15 max-sm:mt-[-10px]'>
                            <p className="text-4xl  font-bold bg-gradient-to-r from-[#efa236] via-[#4e4f50] to-[#000000] bg-clip-text text-transparent">
                                sushigarden
                            </p>


                            <img src="./footersushi.png" alt="" className="w-16" />
                        </div>


                        <div className='flex items-center max-sm:ml-[-12px]'>
                            <img src="./local.png" alt="" className='w-6' />
                            <p className="mb-1 max-sm:hidden underline sm:whitespace-nowrap hover:text-[#efa236]">Alger centre ,
                                Métro khelifa boukhalfa</p>

                                   <p className="mb-1  sm:hidden underline sm:whitespace-nowrap hover:text-[#efa236]">Alger centre ,<br />
                                Métro khelifa boukhalfa</p>
                        </div>
                        <div className='flex items-center gap-2 ml-1 max-sm:ml-[-10px]'>
                            <img src="./clock.png" alt="" className='w-4    ' />
                            <p className='text- m'>De 10h à 23h30</p>

                        </div>
                        <br />
                        
                    <div className='flex sm:hidden ml-[-160px]  mt-[-20px] items-center gap-10  max-sm:flex-col max-sm:gap-1 max-sm:whitespace-nowrap '>


                        <p className="font-semibold max-sm:ml-[-20px]  text-xl max-sm:text-xl bg-gradient-to-r from-[#efa236] via-[#d49e4d] to-[#a09797] bg-clip-text text-transparent">
                            Our platforms:

                        </p>

                        <div className=" flex items-center gap-5 mt-[px] ">
                            <a
                                href="https://www.instagram.com/sushigardendz/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="./insta.png"
                                    alt="Profile"
                                    className="w-8 hover:scale-105 transition"
                                />
                            </a>
                            <a
                                href="https://wa.me/213540454162"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="./wts.png"
                                    alt="Chat on WhatsApp"
                                    className="w-11 ml-[-14px] hover:scale-110 transition 
                                    "
                                />
                            </a>
                        </div>
                    </div>
                  

                    </div>


                 <div className='max-sm:flex-col max-sm:mt-13 max-sm:ml-[-40px]'>
                    <div className="flex flex-col gap-0 ">
                        <p className="text-xl font-bold text-[#efa236]">Quick Links</p>
                        <a href="#menu" className="text-[#4b2e05] underline hover:text-[#efa236]">Menu</a>
                        <a href="#about" className="text-[#4b2e05] underline hover:text-[#efa236]">About Us</a>
                        <a href="#contact" className="text-[#4b2e05] underline hover:text-[#efa236]">Contact</a>
                    </div>


                    <div className='max-sm:hidden'>
                    <br />
                    <div className='border border-t-[#efa236] w-105'></div>
                    <br />
                    </div>


                    

                    <div className='flex  max-sm:hidden items-center gap-10  max-sm:flex-col max-sm:gap-1 max-sm:whitespace-nowrap '>


                        <p className="font-semibold max-sm:ml-[-20px]  text-xl max-sm:text-xl bg-gradient-to-r from-[#efa236] via-[#d49e4d] to-[#a09797] bg-clip-text text-transparent">
                            Our platforms:

                        </p>

                        <div className=" flex items-center gap-5 mt-[px] ">
                            <a
                                href="https://www.instagram.com/sushigardendz/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="./insta.png"
                                    alt="Profile"
                                    className="w-8 hover:scale-105 transition"
                                />
                            </a>
                            <a
                                href="https://wa.me/213540454162"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="./wts.png"
                                    alt="Chat on WhatsApp"
                                    className="w-11 ml-[-14px] hover:scale-110 transition 
                                    "
                                />
                            </a>
                        </div>
                    </div>

                 </div>
                    <br />

                   <div className='border border-t-[#efa236] w-105 max-sm:hidden'></div>

                <div className=" text-center italic sm:w-120 max-sm:w-40 sm:ml-[-30px]  max-sm:hidden">
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

            </div>
            <img src="./bg3.png" alt="" className='absolute max-sm:hidden w-67 mt-[0px] ml-55 z-10' />



            <div
                className="max-sm:relative w-300 max-sm:w-105   max-sm:h-120 sm:h-[400px] bg-cover bg-center"
                style={{ backgroundImage: "url('./map.png')" }}
            >
                <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center sm:mt-735 sm:ml-105">
                    <a
                        href="https://www.google.com/maps/place/Sushi+garden/@36.7664541,3.0520793,16.75z/data=!4m6!3m5!1s0x128fb30021ff9a41:0xd21a18c4eac84814!8m2!3d36.7666735!4d3.054886!16s%2Fg%2F11vz1m3gqg?entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 max-sm:px-2 bg-amber-400 text-white font-semibold rounded-lg hover:bg-amber-500 transition  max-sm:mt-[-60px] sm:mt-[-240px]"
                    >
                        View on Google Maps
                    </a>
                </div>
            </div>
            <div className="italic text-center py-4 sm:mt-30 sm:w-120 max-sm:w-105 sm:ml-[-30px] h-8 sm:hidden">
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
