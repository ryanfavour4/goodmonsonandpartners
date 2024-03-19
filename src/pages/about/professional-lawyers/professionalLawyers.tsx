import React from 'react'
import person1 from './images/person1.png'
import person2 from './images/person2.png'
import person3 from './images/person3.png'
export default function ProfLaw() {
  return (
    <div className='bg-[#E8E9E1] ml-[180px] pt-[30px]'>
        <div className='space-y-4'>
            <div>
                <h4>Lawyer</h4>
            </div>

            <div className='flex space-x-[340px]'>
                <div>
                    <h2 className='text-3xl'>Professional lawyers<br/>
                     and advisors with more<br/>
                      experience</h2>
                </div>
                <div>
                    <p>
                        Whats up guy, lets drain <br/>
                        with Raymond
                    </p>
                </div>
            </div>

            <div className='flex space-x-[70px] p-8'>
                <div className='text-center'>
                    <img src={person1} alt="" className='w-[250px]' />
                    <p className="text-1xl font-bold">Jenifer Smith</p>
                    <p>Senior Business Lawyer</p>
                </div>
                <div className='text-center'>
                    <img src={person2} alt="" className='w-[250px]' />
                    <p className="text-1xl font-bold">Jenifer Smith</p>
                    <p>Senior Business Lawyer</p>
                </div>
                <div className='text-center'>
                    <img src={person3} alt="" className='w-[250px]' />
                    <p className="text-1xl font-bold">Jenifer Smith</p>
                    <p>Senior Business Lawyer</p>
                </div>
            </div>
        </div>

    </div>
  )
}
