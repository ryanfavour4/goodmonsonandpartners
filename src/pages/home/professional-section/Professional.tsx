import React from 'react'
import { MdHorizontalRule } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import legal from './images/legal.jpg'
import './professional.css'

export default function Professional() {
  return (
    <div className='bg-[#1E2E45]'>
      <div className='flex ml-[180px] pt-[50px] space-x-[370px] pb-[50px]'>
        <div id='profservice'>
          <img src={legal} alt="" className= 'w-[283px] rounded-sm ' />
          <h2 className='text-white text-3xl absolute -mt-80px ml-[70px] space-y-3'>Professional services<br />
            Prepared to be your <br />lawyer Firm</h2>
        </div>

        <div className='text-white  space-y-[20px]'>
          <div className='space-y-3'>
            <div className='flex'>
              <h2 className='text-white'>Education Lawyer  and Consultation</h2>
              <FaArrowRight className='text-white ml-8 text-2xl' />
            </div>
            <hr />
          </div>

          <div className='space-y-3'>
            <div className='flex space-x-[190px]'>
              <h2 className='text-white'>Business Law</h2>
              <FaArrowRight className='text-white text-2xl' />
            </div>
            <hr />
          </div>

          <div className='space-y-3'>
            <div className='flex'>
              <h2 className='text-white'>Education Lawyer  and Consultation</h2>
              <FaArrowRight className='text-white ml-8 text-2xl' />
            </div>
            <hr />
          </div>

          <div className='space-y-3'>
            <div className='flex space-x-[190px]'>
              <h2 className='text-white'>Business Law</h2>
              <FaArrowRight className='text-white ml-8 text-2xl' />
            </div>
            <hr />
          </div>

         
        </div>
      </div>
    </div>
  )
}
