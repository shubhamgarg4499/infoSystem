import React from 'react'
// import App from '../App'
// import { Link } from 'react-router-dom'
function Footer() {
    let links = [
        {
            name: "Services", sublinks: [
                "Mobile App Development",
                "Web & CMS Development",
                "E-Commerce Development",
                "AI & ML",
                "UI/UX Services",
                "Cloud Computing",
                "Digital Marketing"
            ]
        },
        {
            name: "Discover",
            sublinks: [
                "Who we are",
                "Services we offer",
                "Industries we serve",
                "Career"
            ]
        },

        {
            name: "Quick Links", sublinks: [
                "Contact Us", "Sitemap"
            ]
        },
    ]
    return (

        <div className='w-full bg-black p-20'>
            <div className='w-5/6  flex flex-wrap justify-center mx-auto'>
                <div className='w-1/2  text-white'>
                    <p>A place where knowledge and invitations <br /> are designed to enable future growth.</p>
                    <div className='flex justify-between my-14'>
                        {links.map(element => {
                            return (<>
                                <div>
                                    <h1 className='poppins-semibold text-xl my-4'>{element.name}</h1>
                                    {element.sublinks.map(links => {
                                        return (<>
                                            <li className='list-none text-xs poppins-regular my-4'>{links}</li>
                                        </>)
                                    })}
                                </div>
                            </>)
                        })}
                    </div>
                    <hr className='w-[70%]' />
                </div>

                <div className='w-1/2 text-white '>
                    <div className='w-[100%] flex flex-col items-end'>
                        <div>
                            <h1 className='poppins-semibold text-2xl '>Social Media</h1>
                            <p className='poppins-light text-sm w-96'>Don’t miss to follow us on our social network accounts.</p>
                            <div className='flex'>
                                <i class="fa-brands fa-linkedin text-white text-3xl hover:text-blue-500 transition-all duration-500 me-6 my-4"></i>
                                <i class="fa-brands fa-square-facebook text-white text-3xl hover:text-blue-500 transition-all duration-500 me-6 my-4"></i>
                                <i class="fa-brands fa-square-instagram text-white text-3xl hover:text-blue-500 transition-all duration-500 me-6 my-4"></i>
                                <i class="fa-brands fa-square-pinterest text-white text-3xl hover:text-blue-500 transition-all duration-500 me-6 my-4"></i>
                            </div>
                        </div>


                        <div>
                            <div className='my-8'>
                                <i class="fa-solid fa-envelope"></i>
                                <span className='poppins-semibold mx-4'>E-mail</span>
                                <p className='poppins-light text-base my-2'>contact@domain.com</p>
                            </div>
                            <div className='my-8'>
                                <i class="fa-solid fa-phone"></i>
                                <span className='poppins-semibold mx-4'>Phone</span>
                                <p className='poppins-light text-base my-2'>9599598301</p>
                            </div>
                            <div className='my-8'>
                                <i class="fa-solid fa-location-dot"></i>
                                <span className='poppins-semibold mx-4'>Location</span>
                                <p className='poppins-light text-base my-2 w-96'>Plot-269, Phase IV, Udyog Vihar, Sector 18 <br /> Gurugram, Haryana 122015
                                </p>
                            </div>
                        </div>
                        <hr className='w-[70%] ms-auto' />
                    </div>
                </div>
            </div>

            <div>

                <h1>Subscribe to our NewsLetter</h1>
                <p>Stay Updated with our latest Technology</p>
                <input type="email" name="email" id="email" className='bg-[#333333] p-2 w-40 text-white' placeholder='Email' />
            </div>
        </div>
    )
}

export default Footer