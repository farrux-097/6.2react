import React from 'react'
import { AllItems} from '../../static'

const Recent = () => {
  return (
    <>
    <section>
<div className='containers'>

     <div className='flex items-center flex-col mb-[16px]'>
        <h3 className='text-[20px] text-[#2E2E2E]'>Most Recent</h3>
        <div className='w-[188px] h-[1px] bg-[#DEDEDE]'></div>
    </div>
    <div className='flex items-center justify-center gap-[24px] flex-wrap'>
        {
            AllItems?.map((items) => (
                <div className='w-[296px] h-[291px]'>
                <img className='w-[295px] h-[150px] mb-[15px]' src={items.image} alt="" />
                    <h2 className='text-[16px] text-[#101315] mb-[6px] font-medium'>{items.title}</h2>
                    <p className='text-[13px] text-[#7A7A7A] mb-[40px]'> {items.text}</p>
                <div className='w-[100%] h-[1px] bg-[#c9c7c7] mb-[10px]'></div>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-[10px]'>   
                        <img className='w-[26px] h-[26px] rounded-[50%]' src={items.avatar} alt="" />
                        <h3 className='text-[#999999] text-[11px]'>{items.imgTitle}</h3>
                    </div>
                    <p className='text-[#999999] text-[12px]'>{items.data}</p>
                </div>
                    </div>
            ))
        }
    </div>
    <li>
        <span>

        </span>
    </li>
        </div>
        </section>
    </>
  )
}

export default Recent