import React from 'react'
import hero from './images/Hero.png'
import { FaGripLinesVertical } from "react-icons/fa";


export default function AboutHero() {
  return (
    <div>
      <div className='relative'>
        <img src={hero} alt="" className='h-[280px] w-full' />
        <div className='flex absolute -mt-[190px] text-white space-x-[60px]'>
          <p className='text-[30px] font-bold'>About Us</p>
          <FaGripLinesVertical className='h-[80px]'/>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/>Distinctio repudiandae rerum totam, voluptate nulla ea tempora asperiores aut a sed praesentium vel suscipit <br/>
          modi fugit quia consequuntur deserunt laudantium tempore.
        </p></div>
        </div>
    </div>
  )
}
