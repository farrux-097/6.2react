import React from 'react'
import './posts.css'
import rasim from "../../assets/avatar.png"

const Posts = () => {
  return (
    <section className='mt-[7px] mb-[60px]'> 
            <div className='containers'>
                <div className='flex items-center flex-col'>
                <h3 className='text-[20px] text-[#2E2E2E]'>Featured Posts</h3>
                <div className='w-[188px] h-[1px] bg-[#DEDEDE]'></div>
                </div>

              <div className='flex itmes-center gap-[20px] mt-[23px]'>
                <div className='ahead w-[460px] h-[280px] flex items-end pb-[15px]  '>
                  <div >

                    <h2 className='ml-[20px] text-[27px]  text-[#FFFFFF] mb-[6px]'>The Road Ahead</h2>
                    <p className='ml-[20px] text-[14px] text-[#FFFFFFB2] mb-[12px]'>The road ahead might be paved - it might not be.</p>
                    <div className=' flex items-center justify-between mr-[20px] ml-[20px]'>
                        <span className='flex items-center gap-[10px]'>
                            <img src={rasim} alt="bro" />
                            <p className='text-[12px] text-[#FFFFFFB2]'>Mat Vogels</p>
                        </span>
                        <h3 className='text-[12px] text-[#FFFFFFB2] ml-[200px]'>September 25, 2015</h3>
                    </div>
                  </div>
                </div>
                <div className='frame w-[460px] h-[280px]'></div>
              </div>

            </div>        
    </section>
  )
}

export default Posts