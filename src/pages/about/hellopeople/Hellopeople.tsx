import React from 'react'
import person1 from './images/person1.png'

export default function Hellopeople() {
  return (
    <div>
      <div className='flex'>
        <div>
          <img src={person1} className='w-[120px]'/>
        </div>
        <div>
          <p>Welcome Message</p>
          <p>Hello People,<br>
          Welcome to Goodmonsonand partners</br></p>
        </div>
        <div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum distinctio, quis optio suscipit velit amet maiores quaerat laboriosam quasi, accusantium quod ex explicabo modi facere eligendi vero qui doloremque temporibus.<br/>
          At a, veniam est aliquam magnam nemo iste cupiditate aperiam placeat exercitationem ea hic sed. Perspiciatis minus, perferendis omnis quibusdam voluptatibus nam nobis id, accusamus dicta reiciendis eum totam tempora?</p>
        </div>
      </div>
    </div>
  )
}
