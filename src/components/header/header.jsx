import React from 'react'
import Escape from '../../assets/Escape..svg'
import { UlItems } from '../../static'
import { CiSearch,CiUser } from "react-icons/ci";
import toast, { Toaster } from 'react-hot-toast';


const Header = () => {
  const myFunk = () =>{
    toast.success("Nima gap bro")
  }
  return (
    <>
    <header className='containers'>
    <div className="flex items-center justify-between pt-[17px]">
      <img src={Escape} alt="Logo" />
      <ul className='flex items-center gap-[21px]'>
        {
          UlItems?.map((item, index) =>(
            <li key={index}>
              <span className='text-amber-50 cursor-pointer hover:animate-pulse hover:shadow-lg shadow-blue-200'>{item}</span>
            </li>
          ))
        }
       
      </ul>
      <span className='flex justify-center gap-5'>
        <button onClick={myFunk}>
        <CiSearch  className='w-[20px] h-[20px] fill-violet-50'/>
        </button>
        <button onClick={()=> toast.error("Ruyxatdan utmabsizu Toy")}>
        <CiUser   className='w-[20px] h-[20px] fill-violet-50'/>
        </button>
       
      </span>


      <Toaster   position="top-center" reverseOrder={false}/>
    </div>
    </header>
    </>
  )
}

export default Header