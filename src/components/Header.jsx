import React, { } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
function Header() {
    const navItems = [
        {
            items: [{
                name: "About us", link: "/about-us",
                children: {
                    submenu: [
                        {
                            name: 'Who we are', desc: "Meet the trailblazers of tech"
                        },
                        {
                            name: 'Services we offer', desc: "Extensive portfolio of services"
                        },
                        {
                            name: 'Industries We Serve', desc: "Customizing Industry solutions."
                        },
                        {
                            name: 'Career', desc: "Looking For a job? We got you!"
                        }
                    ],
                    content: { title: "We're the Top #1 IT Company Contributing towards a Smart World!", description: "From websites to applications, along with the latest software technologies, we can make up all kinds of successful solutions", email: "contact@iclimbs.com", phone: "9599598301", location: "Plot-269, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015" },
                    imageSection: { image: "/assets/navbar-image.jpg", textonImage: "Hire The Top 3% of Best-In-Class Developers!" }
                }
            },
            {
                name: "Services", link: "/services",
                children: {
                    submenu: [
                        {
                            name: 'Mobile App Development',
                        },
                        {
                            name: 'Web and CMS Development',
                        },
                        {
                            name: 'Ecommerce Development',
                        }
                        , {
                            name: 'AI & ML',
                        }
                        , {
                            name: 'UI/UX Services',
                        }
                        , {
                            name: 'Cyber Security',
                        }
                        , {
                            name: 'Digital Marketing',
                        }
                        , {
                            name: 'Staff Augmentation',
                        }
                    ],
                    content: { title: "We're the Top #1 IT Company Contributing towards a Smart World!", description: "From websites to applications, along with the latest software technologies, we can make up all kinds of successful solutions", email: "contact@iclimbs.com", phone: "9599598301", location: "Plot-269, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015" },
                    imageSection: { image: "/assets/navbar-image.jpg", textonImage: "Hire The Top 3% of Best-In-Class Developers!" }
                }
            },
            {
                name: "Industries", link: "/industries",
                children: {
                    submenu: [
                        {
                            name: 'E-Commerce', desc: "Boost your E-commerce with our solutions."
                        },
                        {
                            name: 'Travel &  Hospitality', desc: "Enhancing Travel with Cutting-edge solutions."
                        },
                        {
                            name: 'Automotive', desc: "Accelerate your automotive evolution."
                        }
                        , {
                            name: 'Banking', desc: "Future- ready banking starts here."
                        }
                        , {
                            name: 'Blue Economy', desc: "Charting success across Blue Frontiers."
                        }
                        , {
                            name: 'Capital Markets', desc: "Unlocking potential with the market intelligence"
                        }
                        , {
                            name: 'Communications & Media', desc: "Orchestrating media moments with innovation."
                        }
                        , {
                            name: 'Consumer Goods', desc: "Innovating everyday essentials for tomorrow"
                        }
                        , {
                            name: 'Education', desc: "Building the future, one institution at a time."
                        }
                        , {
                            name: 'Healthcare', desc: "Apps that care better, smarter and faster."
                        }
                        , {
                            name: 'Information Services', desc: "Crafting clarity from complex  information."
                        }
                        , {
                            name: 'Insurance', desc: "Transforming risk into resilience."
                        }
                        , {
                            name: 'Life Science', desc: "Pioneering progress in life and health."
                        }
                        , {
                            name: 'Manufacturing', desc: "Building tomorrow with intelligent manufacturing"
                        }
                        , {
                            name: 'Oil & Gas', desc: "Powering the future with innovative energy"
                        }
                        , {
                            name: 'Retail', desc: "Redefining retail with future-forward innovation."
                        }
                        , {
                            name: 'Transportation & Logistics', desc: "Optimize your supply chain, and thrive."
                        }
                        , {
                            name: 'Utilities', desc: "Innovating utility management for tomorrow"
                        }
                    ],
                    content: { title: "We're the Top #1 IT Company Contributing towards a Smart World!", description: "From websites to applications, along with the latest software technologies, we can make up all kinds of successful solutions", email: "contact@iclimbs.com", phone: "9599598301", location: "Plot-269, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015" },
                    imageSection: { image: "/assets/navbar-image.jpg", textonImage: "Hire The Top 3% of Best-In-Class Developers!" }
                }
            },
            { name: "Portfolio", link: "/portfolio" },
            { name: "Contact Us", link: "/contact-us" }],
            callToAction: "Get A Free Quote"
        }
    ]

    // const [open, setopen] = useState({})
    return (
        <>
            <header className='bg-white w-screen'>
                <ul className='flex items-center justify-end me-16'>
                    {navItems.map((element) => {
                        return (
                            <>
                                {element.items.map((items) => {
                                    return (
                                        <>
                                            <li className='mx-2 NavbarItems font-medium text-sm p-5' title={items.name}>
                                                <Link to={items.link}>{items.name}</Link>
                                                {items?.children?.submenu?.length >= 1 && <span className='mx-1'>
                                                    <i class="fa-solid fa-angle-down my-auto text-xs"></i></span>}
                                                {items?.children?.submenu?.length > 1 &&
                                                    <ul key={items.name.replace(' ', "")} className='top-[8%] left-[50%] right-[50%] overflow-hidden p-8 rounded-3xl translate-x-[-50%] absolute bg-white h-[80vh] w-[95%] 
                                                    flex flex-col flex-wrap text-left hidden'
                                                    >
                                                        {items.children.submenu.map((subitems) => {
                                                            return (
                                                                <>
                                                                    <div className='mx-5 my-4'>
                                                                        <strong><li className='text-base hover:text-[#0131B7] subitems cursor-pointer'>{subitems.name} <i class="fa-solid fa-arrow-right ms-1"></i></li> </strong>
                                                                        <p className='mt-1'>{subitems.desc}</p>
                                                                    </div>


                                                                </>
                                                            )
                                                        })}

                                                        {items?.children?.submenu?.length < 10 &&
                                                            <div className='w-[50%] h-[100%] px-20 py-10'>
                                                                <h1 className='text-3xl font-bold'>{items.children.content.title}</h1>
                                                                <p className='font-normal leading-7 my-4 text-lg'>{items.children.content.description}</p>

                                                                <div className='flex mt-16'>
                                                                    <div>
                                                                        <p className='text-[rgb(1,49,183)] text-lg'><i class="fa-solid fa-envelope"></i> E-Mail</p>
                                                                        <p className='text-lg'>{items.children.content.email}</p>
                                                                    </div>
                                                                    <div className='ms-auto'>
                                                                        <p className='text-[rgb(1,49,183)] text-lg'><i class="fa-solid fa-phone"></i> Phone</p>
                                                                        <p className='text-lg'>{items.children.content.phone}</p>
                                                                    </div>


                                                                </div>
                                                                <div className='my-8'>
                                                                    <p className='text-[rgb(1,49,183)] text-lg'><i class="fa-solid fa-location-dot"></i> Location</p>
                                                                    <p className='text-lg'>{items.children.content.location}</p>
                                                                </div>
                                                            </div>}


                                                        <div className='h-[100%] text-end ms-auto'>
                                                            <img src={items.children.imageSection.image} alt="header-image" className='h-[100%] object-cover rounded-e-2xl' style={{ aspectRatio: "1/1.5" }} />

                                                        </div>

                                                    </ul>}
                                            </li>
                                        </>
                                    )
                                })}
                                <button className='bg-[rgb(1,49,183)] ms-4 text-white px-4 py-2 rounded-3xl'>{element.callToAction}</button>
                            </>
                        )
                    })}
                </ul>
            </header>
        </>
    )
}

export default Header