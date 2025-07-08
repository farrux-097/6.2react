import React from 'react'
import toast, { Toaster } from 'react-hot-toast';


const Hero = () => {
  return (
    <>
    <section className='hero flex items-center mt-[103px] flex-col gap-[30px] containers'>
        <h1 className='text-[50px] text-[#FFFFFF] leading-[51px]'>Let's do it together.</h1>
        <p className='text-[#FFFFFFA1] text-[17px]'>We travel the world in search of stories. Come along for the ride.</p>
        <button onClick={() => toast.success("Hello brat")} className=' w-[167px] pt-[12px] pr-[31px] pb-[12px] pl-[31px]  text-[13px] rounded-md text-[#FFFFFF] bg-[#DD783F]'>View Latest Posts</button>
    <Toaster   position="top-center" reverseOrder={false}/>
    </section>
    </>
  )
}

export default Hero