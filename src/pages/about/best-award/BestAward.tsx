import React from 'react'
import bestImage from './images/bestwardimg.png'
import person2 from  './images/person2.png'
export default function BestAwardcomponent() {
  return (
    <div>
            <div>
                <img src={bestImage} alt=''/>
                <div>
                    <p>Success Story</p>
                    <h2>The Best Award Has been<br/>
                    given to goodmonsonandpartners Legal<br/>
                    Lawyer</h2>
                </div>
            </div>
            <div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, architecto veniam ratione a repudiandae consequuntur quia quaerat eveniet vero quam, atque molestias quidem voluptate laborum. Consequatur dolores voluptate nulla suscipit?<br/>
                    Voluptas praesentium, itaque recusandae adipisci expedita labore delectus sed natus, autem corporis, a veniam nulla quis? Doloremque ut recusandae facilis hic quisquam odio, beatae sit natus porro reprehenderit? Eos, dolor?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, officia odio nam consequatur eius hic quia earum velit fugiat minus repellendus aspernatur aut modi facilis molestiae reiciendis? Harum, neque. Consequuntur!<br/>
                    Numquam, quam tempore officia suscipit nobis sunt et optio enim repellat eos voluptatibus consequuntur quisquam rem perspiciatis vero voluptates soluta, quaerat totam obcaecati id praesentium ab. Necessitatibus, quos! Corporis, iure?</p>
                </div>
                <div>
                    <img src={person2} alt="" />
                </div>
            </div>
    </div>
  )
}
