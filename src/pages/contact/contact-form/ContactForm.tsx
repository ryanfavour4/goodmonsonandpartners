/* eslint-disable jsx-a11y/iframe-has-title */
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { WiTime8 } from "react-icons/wi";
import Button from "../../../components/buttons/Button";

export default function ContactForm() {
    return (
        <div>
            <div className="wrapper flex justify-between gap-10 py-16 md:flex-row flex-col">
                <div className="flex flex-col justify-between w-full max-w-2xl">
                    <h2 className="mb-8 text-2xl md:text-4xl">Get In Touch</h2>
                    <form
                        method="POST"
                        action="https://formspree.io/f/xdoqwbnj"
                        className="grid grid-cols-2 gap-7"
                    >
                        {/* FIRST NAME */}
                        <div className="flex flex-col gap-2">
                            <label
                                className="text-lg md:text-xl text-heading"
                                htmlFor="First_Name"
                            >
                                First Name*
                            </label>
                            <input
                                className="outline-none bg-transparent p-2 text-lg border-2 border-primary"
                                id="First_Name"
                                name="First_Name"
                                type="text"
                                placeholder="Enter first name"
                            />
                        </div>
                        {/* LAST NAME */}
                        <div className="flex flex-col gap-2">
                            <label
                                className="text-lg md:text-xl text-heading"
                                htmlFor="Last_Name"
                            >
                                Last Name*
                            </label>
                            <input
                                className="outline-none bg-transparent p-2 text-lg border-2 border-primary"
                                id="Last_Name"
                                name="Last_Name"
                                type="text"
                                placeholder="Enter last name"
                            />
                        </div>
                        {/* PHONE */}
                        <div className="flex flex-col gap-2">
                            <label
                                className="text-lg md:text-xl text-heading"
                                htmlFor="Your_Phone"
                            >
                                Your Phone*
                            </label>
                            <input
                                className="outline-none bg-transparent p-2 text-lg border-2 border-primary"
                                id="Your_Phone"
                                name="Your_Phone"
                                type="tel"
                                placeholder="Enter your phone"
                            />
                        </div>
                        {/* EMAIL */}
                        <div className="flex flex-col gap-2">
                            <label
                                className="text-lg md:text-xl text-heading"
                                htmlFor="Your_Email"
                            >
                                Your Email*
                            </label>
                            <input
                                className="outline-none bg-transparent p-2 text-lg border-2 border-primary"
                                id="Your_Email"
                                name="Your_Email"
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="w-full col-span-2 flex flex-col gap-2">
                            <label
                                className="text-lg md:text-xl text-heading"
                                htmlFor="Message"
                            >
                                Message
                            </label>
                            <textarea
                                name="Message"
                                id="Message"
                                className="resize-y outline-none bg-transparent p-2 text-lg border-2 border-primary"
                                rows={5}
                                placeholder="Enter message"
                            />
                        </div>

                        <Button
                            className="bg-primary text-light max-w-[200px] py-2 text-heading text-lg"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </form>
                </div>
                <div className="">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.6765849757057!2d-0.004357388280295379!3d51.53749150838771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761db9938f9863%3A0x5b74375dbe7442ff!2s4%20Cam%20Rd%2C%20London%20E15%202SN%2C%20UK!5e0!3m2!1sen!2sng!4v1712159548342!5m2!1sen!2sng"
                        className="md:w-[450px] md:h-[600px] w-full h-96"
                        style={{ border: 0 }}
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            <div className="wrapper flex md:justify-between justify-stretch flex-wrap pb-16 pt-8 gap-4">
                <div className="flex gap-3 items-center">
                    <BsTelephone className="w-6 text-xl" />
                    <a href="tel:+442081850983">+44 208 185-0983</a>
                </div>
                <div className="flex gap-3 items-center">
                    <IoMailOutline className="text-xl" />
                    <a href="mailto:contact@goodmonsonandpartners.co.uk">
                        contact@goodmonsonandpartners.co.uk
                    </a>
                </div>
                <div className="flex gap-3 items-center">
                    <IoLocationOutline className="text-xl" />
                    <a href="#/">4 Cam Road, Stratford, London E15 2SN</a>
                </div>
                <div className="flex gap-3 items-center">
                    <WiTime8 className="text-xl" />
                    <a href="#/">08:00 a.m. - 04:00 p.m.</a>
                </div>
            </div>
        </div>
    );
}
