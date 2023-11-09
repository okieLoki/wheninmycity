import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'; // Import the icons from react-icons

const data = [
    {
        heading: 'We are good at',
        subheading: 'Work',
    },
    {
        heading: 'What we do',
        subheading: 'Capabilities',
    },
    {
        heading: 'How we deliver',
        subheading: 'Our process',
    },
    {
        heading: 'Who we are',
        subheading: 'Agency',
    },
    {
        heading: 'The Blog',
        subheading: 'Latest',
    },
]

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#bf8884] pb-6">
            <div className="mx-auto w-full">
                <div>
                    <p className='text-[15rem] league-spartan tracking-[-12px] font-extrabold text-center text-[#ffffe3]'>
                        when in my
                    </p>
                </div>

                <div className='flex gap-[7rem] justify-center'>
                    {data.map((item, index) => (
                        <div key={index} className='flex flex-col gap-2'>
                            <p className='text-[#ffffe3]'>{item.heading}</p>
                            <p className='text-[#ffffe3] text-2xl'>{item.subheading}</p>
                        </div>
                    ))}
                </div>

                <div className="flex mt-20 text-[#ffffe3] justify-evenly">

                    <p>© When in my City, 2023.</p>

                    <div className='flex justify-center items-center gap-6'>                    
                        <a href="#" className="text-[#ffffe3]"><FaTwitter size={24} /></a>
                        <a href="#" className="text-[#ffffe3]"><FaInstagram size={24} /></a>
                        <a href="#" className="text-[#ffffe3]"><FaFacebook size={24} /></a>
                        <a href="#" className="text-[#ffffe3]"><FaLinkedin size={24} /></a>
                    </div>


                    <p>All rights reserved. All wrongs reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
