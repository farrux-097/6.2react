import React from 'react'
import "../footer/footer.css"
import Header from '../header/header'
const Footer = () => {
  return (
    <>
        <footer className='footer relative w-[100%] h-[378px]'>
            <div className="containers">
                <div className="box flex items-center  flex-col gap-[20px]">
                        <div className=' mt-[81px] flex items-center justify-center flex-col'>
                                <h2 className='text-[25px] text-[#EFEFEF] mb-[17px]'>Stay in Touch</h2>
                        <div className='w-[188px] h-[1px] bg-[#DEDEDE]'></div>
                </div>
                <form className='form relative' action="">
                     <input type="text" className='w-[500px] h-[50px] rounded-tl-[3px] rounded-bl-[3px]  outline-none shadow-lg bg-[#FFFFFF] opacity-55 pt-[18px] pb-[18px] pl-[35px]' placeholder='Enter your email address' />
                    <button type='button' className='absolute top-[0.5px] left-[375px] right-0 w-[125px] h-[49.5px] flex justify-center items-center bg-[#FFFFFF47] rounded-tr-[3px] rounded-br-[3px]'>Submit</button>
                </form>
                </div>
            </div>
            <div className='absolute top-[180px] bottom-0 right-0 left-0 w-[100%] p-[20px]  bg-[#232F3899]   mt-[110px]'>
            <Header/>
            </div>
        </footer>
    </>
  )
}

export default Footer