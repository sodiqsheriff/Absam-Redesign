import { RxTwitterLogo } from 'react-icons/rx'
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { BiMap, BiPhoneCall } from 'react-icons/bi'
import {FiFacebook, FiLinkedin} from 'react-icons/fi'
const Footer =() =>{
    return(
        <div className=' fixed bottom-0 h-full  w-full'>
         <div className="flex flex-col w-full px-5 pt-48 md:flex-row md:px-8 md:gap-20  md:pt-16 lg:flex-row lg:px-20 lg:pt-36 lg:gap-36 ">
            <div className="flex-col">
                <h1 className="text-lg text-white font-semibold pt-5">Contact us</h1>
                <h1 className="flex items-center text-sm md:flex md:text-md gap-2 pt-3">
                    <BiMap className='text-green-500' />
                    Panseke, Abeokuta, Ogun state</h1>
                <h1 className="flex items-center gap-2 py-3">
                    <BiPhoneCall className='text-green-500' />
                    +234 907 3181 312</h1>
                <h1 className="flex items-center gap-2">
                    <AiOutlineMail className='text-green-500' />
                    support@mymetickets.com</h1>
            </div>
            <div className="grid grid-cols-2 pt-5 md:flex gap-16 lg:gap-16">
                <div className="flex-col ">
                    <header className="text-md text-white font-semibold capitalize">quick link</header>
                    <div className="flex flex-col space-y-2 pt-5">
                        <a href="" className="hover:text-white ">Home</a>
                        <a href="" className="hover:text-white ">Events</a>
                        <a href="" className="hover:text-white ">About Us</a>
                        <a href="" className="hover:text-white ">Privacy Policy</a>
                        <a href="" className="hover:text-white ">Terms & Conditions</a>
                    </div>
                </div>
                <div className="flex-col ">
                    <header className="text-md text-white font-semibold capitalize">top categories</header>
                    <div className="flex flex-col space-y-2 pt-5">
                        <a href="" className="hover:text-white">Music Events</a>
                        <a href="" className="hover:text-white">Comedy Events</a>
                        <a href="" className="hover:text-white">Tech Us</a>
                        <a href="" className="hover:text-white">Fashion Events</a>
                        <a href="" className="hover:text-white">Lifeshow Events</a>
                    </div>
                </div>
                <div className="flex-col">
                    <div className='flex flex-col md:hidden lg:flex lg:flex-col'>
                <header className="text-md pb-5 text-white font-semibold capitalize">news letter</header>
                <div className="flex flex-col w-full lg:flex lg:flex-row gap-3">
                    <input type="text" name="" id="" placeholder="user@anymail.com" className="w-80 border-collapse outline-none p-2 bg-white rounded"/>
                    <a href="" className="bg-green-500 w-28 text-center p-2 text-white rounded hover:opacity-50">Subscribe</a>
                </div>
                <div className="flex pt-5 gap-3">
                    <a href=''><AiOutlineInstagram className='text-xl text-green-500' /></a>
                    <a href=''><RxTwitterLogo className='text-xl text-green-500' /></a>
                    <a href=''><FiFacebook className='text-xl text-green-500' /></a>
                    <a href=''><FiLinkedin className='text-xl text-green-500'/></a>


                </div>
                </div>
             

                </div>
                
            </div>
            
         </div>
         <div className='hidden md:flex flex-col pt-5 px-8 lg:hidden'>
                <header className="text-md pb-5 text-white font-semibold capitalize">news letter</header>
                <div className="flex gap-3">
                    <input type="text" name="" id="" placeholder="user@anymail.com" className="border-collapse outline-none p-2 bg-white rounded"/>
                    <a href="" className="bg-green-500 p-2 text-white rounded hover:opacity-50">Subscribe</a>
                </div>
                <div className="flex pt-5 gap-3">
                    <a href=''><AiOutlineInstagram className='text-xl text-green-500' /></a>
                    <a href=''><RxTwitterLogo className='text-xl text-green-500' /></a>
                    <a href=''><FiFacebook className='text-xl text-green-500' /></a>
                    <a href=''><FiLinkedin className='text-xl text-green-500'/></a>


                </div>
                </div>
         <div className="flex justify-center mx-5 mt-10 md:mx-8 lg:mx-20 border-t border-gray-200">
            <h1 className="text-center pt-5">2023 All Rights Reserved. | mymetickets.com</h1>
                
            </div>
        </div>

    )
}

export default Footer