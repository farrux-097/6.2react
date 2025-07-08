import React from 'react'
import { LI } from '../../static'

export const Elements = () => {
  return (
    <>
    <section className='w-[100%] h-[65px] bg-[#FFFFFF] pt-[22px] pb-[23px] '> 
    <ul className='containers  flex items-center justify-center gap-[21px]'>
        {
            LI?.map((element, index) =>(
                <li className='w-[139px]' key={index}>
                     <span className='text-[#768088] text-[14px] cursor-pointer hover:animate-pulse hover:shadow-lg shadow-blue-200'>{element}</span>
                 </li>
            ))
        }
    </ul>
    </section>
    </>
  )
}

export default Elements