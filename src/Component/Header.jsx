import logo from '../assets/Myme logo.png'
import patternl from '../assets/patern.png'
import patternr from '../assets/pattern r.png'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai'

const Head = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () =>{
       setIsOpen(!isOpen);
    };
    return (
        <>
        <div className="flex justify-between items-center px-5 text-white md:px-8 lg:px-16 pt-5 capitalize">
            <div className="flex  ">
                <img src={logo} alt='logo' />
            </div>
            <div className="hidden md:hidden lg:flex space-x-12">
                <a href="" className='hover:opacity-50'>Home</a>
                <a href="" className='hover:opacity-50'>Events</a>
                <a href="" className='hover:opacity-50'>about</a>
                <a href="" className='hover:opacity-50'>contact us</a>
            </div>
            <div className="hidden md:hidden lg:flex items-center gap-5">
                <a href="" className='border-gray-400 cursor-pointer hover:opacity-50'>log in</a>
                <a href="" className="bg-green-500  text-white py-1 px-5 rounded cursor-pointer hover:opacity-50"> create event</a>
            </div>
            
      <button className='flex text-4xl px-5  lg:hidden ' onClick={toggleMenu}>
        {isOpen ?( <MdOutlineClose />): <GiHamburgerMenu /> }
      </button>
      {isOpen  &&(
         <div className='flex flex-col fixed top-0 right-0 h-full  space-y-5 w-1/2 bg-gray-800 md:space-y-9 pt-7 px-10   lg:hidden ' onClick={toggleMenu}>
          
          <MdOutlineClose className=' text-4xl ' />
           <a href="" className='hover:opacity-50 cursor-pointer'>Home</a>
           <a href="" className='hover:opacity-50 cursor-pointer'>Events</a>
           <a href="" className='hover:opacity-50 cursor-pointer'>About</a>
           <a href="" className='hover:opacity-50 cursor-pointer'>Contact us</a>
           
           <a href="" className='border-gray-400 hover:opacity-50 cursor-pointer pt-10'>log in</a>
          <a href="" className="bg-green-500  text-white p-1 md:w-1/2  rounded cursor-pointer hover:opacity-50 text-center">create event</a>
           
         </div>


     

      )}
      
        </div>
       
        {/* Hero section */}
        <div className="flex flex-col-reverse  w-full md:flex-row md:gap-5 ">
                <div className='hidden md:flex h-1/2 pt-96'>
                  <img src={patternl} alt="patternl" />
                </div>
            <div className="flex-col w-full pl-5 pt-16  md:w-1/2 md:pl-0  md:pt-28 lg:pl-16  lg:pt-32">
                <a href="" className='bg-green-500 p-2 text-white rounded-2xl'>Home</a>
                <h1 className="text-2xl md:text-lg lg:text-4xl py-5 font-semibold  text-white">
                    Efficient platform where
                    <br />bookings tickets is made
                    <br />easily as secured.
                </h1>
                <h1 className='text-md md:text-sm lg:text-md'>We don't just sell Tickets, we curate unforgettable
                    <br />experiences.
                </h1>
                <div className="flex-col pt-5 md:text-sm lg:leading-10">
                    <h1 className="flex gap-2">
                        <AiFillCheckCircle className='text-green-500 text-lg' />
                        
                        Purchase tickets from the comfort of your home
                    </h1>
                    <h1 className="flex gap-2">
                        <AiFillCheckCircle className='text-green-500 text-lg' />
                        Secure and Seamless Ticket booking process
                    </h1>
                    <h1 className="flex gap-2">
                        <AiFillCheckCircle className='text-green-500 text-lg' />
                        Simple Dashboard to create events and track 
                        <br />your ticket sales
                    </h1>

                </div>
          
            </div>
            <div className='flex-col  w-full md:w-1/2 pt-10 px-5 md:pt-14 lg:pt-16 lg:px-16'>
            <div className=" bg-white py-10 md:py-12 lg:py-20 rounded-2xl">
               <div className="space-y-3">
                 <h1 className="text-2xl font-bold text-black md:text-[27px] lg:text-3xl text-center ">Find Events near you</h1>
                 <h1 className="text-lg md:text-md lg:text-lg text-gray-600 text-center">Check out for available events </h1>
                </div> 
                <div className="pt-10 px-5 md:px-8 space-y-6">
                  <div>
                    <h1 className='pb-2 text-black font-semibold'>Location</h1>
                    <div className="w-full">
                        <input type="text" placeholder='Enter your location' className='w-full border border-gray-300 p-2 outline-none rounded'/> 
                    </div>
                  </div>
                  <div>
                    <h1 className='pb-2 text-black font-semibold'>Category</h1>
                    <div className="w-full">
                        <select value="select category" id="" className='w-full border border-gray-300 p-2 outline-none rounded' >
                             <option value="select">Select category</option>
                            </select> 
                    </div>
                  </div>

                    <div className="w-full pt-3">
                        <a href="" className='w-full bg-green-500 text-center text-white py-3 md:px-24 lg:px-32  rounded'>Search</a>
                    </div>
                </div>
               
            </div>
            
            </div>
             <div className='hidden pt-14 md:flex h-1/2 justify-end'>
                  <img src={patternr} alt="patternr" />
                </div>
        </div>
        </>

    )
}

export default Head