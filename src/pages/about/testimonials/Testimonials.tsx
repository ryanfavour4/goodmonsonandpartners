import React from 'react'
import testimonialImg from './images/testimonialimage.png'
import happyclient from './images/happyclient.png'
import Framerate from './images/Framerate.png'
export default function Testimonialscomponent() {
    return (
        <div>
            <p>Testimonials</p>
            <div>
                <div>
                    <p>Our Happy Client Say<br/>
                        About Us</p>
                </div>
                <div>
                    <img src={happyclient} alt="" />
                </div>

            </div>
            <div>
                <div>
                    <img src={testimonialImg} alt="" />
                </div>
                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ipsum eveniet delectus, reprehenderit accusamus <br />
                        quo veniam numquam voluptatum beatae expedita repellendus laudantium quod vel nemo repellat quaerat<br />
                        et ipsam eligendi. Saepe commodi sed vero, provident at harum incidunt aliquid eligendi voluptates dolorum<br />
                        excepturi, ut voluptatem ipsam sapiente nostrum eius fugit quo? Perferendis sapiente laudantium a sed ratione. Nam, esse obcaecati.</p>
                    <div>
                        <p>Jonathan G</p>
                        <img src={Framerate} alt='' />
                    </div>
                </div>
            </div>

        </div>

    
    )
}
