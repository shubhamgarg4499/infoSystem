import React from 'react'
import Card from '../utils/Card'
import CircleButton from '../utils/CircleButton'
import HeadingParagraph from '../utils/Heading&Paragraph'
import HeadPara from '../utils/HeadPara'
import IdeationSlider from '../utils/IdeationSlider'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
    let logos = ["zydus-life.png", "art-of-living.png", "astral.png", "emaar.png", 'google.png', "npci.png", "viacom-media.png", "zydus-life.png"]

    let about = [
        { imgLink: "years-of-experience-icn.svg fill.png", heading: "10+", subHead: "Years of Experience" },
        { imgLink: "mobile-apps-developed-icn.svg.png", heading: "4500+", subHead: "Mobile Apps Developed" },
        { imgLink: "websites-developed-icn.svg.png", heading: "2200+", subHead: "Websites Developed" },
        { imgLink: "ratings-on-clutch-icn.svg.png", heading: "4.9", subHead: "Ratings on Clutch.co" },
        { imgLink: "app-downloads-icn.svg.png", heading: "110M", subHead: "Apps Downloads" },
        { imgLink: "dedicated-developers-icn.svg.png", heading: "1200+", subHead: "Dedicated Developers" },

    ]

    let service = [
        {
            name: "Mobile App",
            services: "Development",
            imgLink: "mobile-app.png",
            icon: "fa-solid fa-mobile-screen-button"
        },
        {
            name: "Web & CMS",
            services: "Development",
            imgLink: "web&cms.png",
            icon: "fa-solid fa-globe"
        },
        {
            name: "E-Commerce",
            services: "Development",
            imgLink: "ecommerce.png",
            icon: "fa-solid fa-cart-shopping"
        },
        {
            name: "AI & ML",
            services: "Services",
            imgLink: "aiml.png",
            icon: "fa-solid fa-star-of-life"
        },
        {
            name: "UI/UX",
            services: "Services",
            imgLink: "uiux.png",
            icon: "fa-solid fa-pen-ruler"
        },
        {
            name: "Cloud Computing",
            services: "Services",
            imgLink: "cloudcomputing.png",
            icon: "fa-solid fa-cloud-arrow-down"
        },
        {
            name: "Digital Marketing",
            services: "Services",
            imgLink: "digi-marketing.png",
            icon: "fa-regular fa-lightbulb"
        },
        {
            name: "Cyber Security",
            services: "Services",
            imgLink: "cybersecurity.png",
            icon: "fa-solid fa-shield-halved"
        }
    ]


    let expertise = [
        {
            title: "Education & e-Learning",
            subhead: "Enhance the learning experience for global learners through tech-driven solutions.",
            imgLink: "cee1b9f5b6076b2de6d084ac0fe23f6d.jpeg"
        },
        {
            title: "Healthcare & Fitness",
            subhead: "Leveraging smart technologies like AI, ML, IoT, and more to empower global health organizations.",
            imgLink: "stethoscope.jpg"
        },
        {
            title: "Logistics & Distribution",
            subhead: "Bring your logistic industry-specific development requirements to get unique customer-centric solutions.",
            imgLink: "logistics.jpg"
        },
        {
            title: "Social Networking",
            subhead: "Build engaging and seasoned social media applications that can offer a unique user experience.",
            imgLink: "SocialNetworking.webp"
        },

    ]

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3.2,
        slidesToScroll: 3,
    };
    return (
        <>
            {/* /////// hero section starts from here////////////////////// */}

            <div className='w-100 min-h-fit flex flex-wrap overflow-hidden items-center justify-center'>
                <div className='w-1/2 flex items-center justify-center overflow-hidden'>
                    <div className=''>
                        <h1 className='text-5xl poppins-bold text-[rgb(0,201,255)]'>Mobile App</h1>
                        <h1 className='text-3xl poppins-regular my-3'>Development Company</h1>

                        <div className='flex items-center max-h-fit my-8'>
                            <h1 className='text-[rgb(220,46,61)] text-4xl poppins-semibold'>#1</h1>
                            <div className='w-[2px] bg-gray-200 h-[25px] rounded-lg mx-5' ></div>
                            <div>
                                <p className='text-base poppins-regular'>Ranked as <span className='text-[rgb(220,46,61)] poppins-semibold'>#1 Top App Development </span> <br />Company in USA and India</p>
                            </div>

                        </div>

                        <CircleButton borderClass={'border-black'} arrowClass={'text-black text-4xl'} text={"Drop your Queries"} textClass={"mx-12"} />
                    </div>
                </div>


                <div className='w-1/2 relative h-[700px]'>
                    <div className='h-full w-full absolute bg-gradient-to-r z-10 from-[#00C8FF] to-[#92FE9D] rounded-[70px] shadow-xl rotate-[-45deg] right-[-20%] top-[-22%]'>
                    </div>

                    {/* <div className='headerGradient w-[500px] h-[500px] overflow-hidden'></div> */}
                    {/* <img src="/assets/gradient.png" alt="gradient" className='w-100 h-100' /> */}

                    <img src="/assets/mobile-app-development.png.png" alt="mobile-app-development" className='max-w-full aspect-square object-contain relative z-50' />
                </div>
            </div>

            {/* hero section ends///////////// */}


            {/* logo section starts */}
            <div className=' flex flex-wrap justify-evenly  items-center p-0 my-28 overflow-hidden'>
                {logos.map((element) => {
                    return (<>
                        <img src={`/assets/logos/${element}`} alt={element.replace(" ", "")} className="max-w-full" />
                    </>)
                })}
            </div>

            {/* logo section ends */}


            <HeadingParagraph heading={"Top Mobile Application development, Software Development & IT Consulting Company, Building Smart Solutions For A Smarter World."}
                paragraph={`Founded in the year 2011, Hyperlink InfoSystem is a leading Mobile App, Software Development and Web development company helping global businesses to bring digital transformation. Being a true technological companion, Hyperlink InfoSystem helps startups to enterprise-level businesses to be the industry leaders.`} buttonClass={'my-8'} buttonText={"About Us"} />


            {/* <div className="flex w-100 justify-center  px-24 ">
                <div className='w-1/2'>
                    <h1 className='poppins-bold my-2 text-3xl leading-relaxed'>Top Mobile Application
                        development, Software
                        Development & IT Consulting
                        Company, Building Smart Solutions
                        For A Smarter World.</h1>
                    <div className='w-[15%] h-[2px] bg-black my-4'></div>
                </div>
                <div className='poppins-light w-1/2 px-12 m-auto'>
                    <p className='text-sm leading-snug'>Founded in the year 2011, <span className='font-bold'>Hyperlink InfoSystem</span> is a leading Mobile App,
                        Software Development and Web development company helping global
                        businesses to bring digital transformation. Being a true technological
                        companion, Hyperlink InfoSystem helps startups to enterprise-level businesses
                        to be the industry leaders.</p>
                    <CircleButton text={"About Us"} className={'my-8'} textClass={'poppins-regular'} />
                </div>
            </div> */}




            <div className='w-full h-fit flex flex-wrap '>
                <div className='w-1/2 h-full p-4 '>
                    <img src="/assets/girlImage.jpeg" alt="girl-Image" className='h-max aspect-square object-fill p-0 m-0' />
                </div>

                <div className='w-1/2 p-4'>
                    <div className='w-full flex flex-wrap justify-center h-1/2 p-6 '>
                        {about.map(element => {
                            return (<>
                                <div className='text-center w-1/3 my-auto max-h-fit'>
                                    <img src={`/assets/${element.imgLink}`} alt={`${element.subHead}`} className='mx-auto aspect-square object-contain w-100' />
                                    <h1 className='poppins-bold my-2 text-2xl'>{element.heading}</h1>
                                    <p className='poppins-regular my-3'>{element.subHead}</p>
                                </div>
                            </>)
                        })}

                    </div>


                    <div className='w-full bg-[#4842A8] text-white p-8 h-1/2 flex flex-col justify-center'>
                        <p className='poppins-light text-sm leading-loose'>Hire Now</p>
                        <h1 className='poppins-semibold text-3xl my-4'>Hire Dedicated Developers</h1>
                        <p className='poppins-light text-sm leading-loose'>Hire our developers to design, develop, and deliver futuristic development solutions by leveraging the experience of a top development company.</p>
                        <CircleButton text={"Hire Developers"} className={"my-4  text-white poppins-regular"} borderClass={"border-white"} />
                    </div>
                </div>
            </div>



            <HeadingParagraph className={"my-10"} buttonClass={'my-4'} paragraph={"Obtain robust software solutions, modernize systems, and leverage futuristic technologies for growth opportunities with the capabilities of a leading development company."} heading={"Amplifying Business Progress Through Smart Solutions"} buttonText={"Explore Services"} paragraphClass={"poppins-regular leading-[1.7rem]"} />

            {/* services section starts from here */}
            <div className='flex px-24 w-full flex-wrap'>
                <div className='w-2/3 flex flex-wrap justify-start'>
                    {service.map(element => {
                        return (
                            <>
                                <div
                                    className='w-[22%]  relative aspect-square rounded-3xl m-2 bgHover'
                                    style={{
                                        backgroundImage: `url(assets/servicesImages/${element.imgLink})`, backgroundSize: "cover", backgroundRepeat: "no-repeat",
                                    }}>



                                    <div className='absolute bottom-12 left-4'>
                                        <i className={`${element.icon} text-[#00C0FF]`}></i>
                                        <h4 className='text-lg poppins-semibold text-white'>{element.name}</h4>
                                        <p className='text-sm uppercase text-white poppins-light'>{element.services}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>


                <div className='w-1/3'>
                    <HeadPara heading={"Mobile App Development"} paragraph={"We specialized in augmenting the mobile experience for users of diffrent niches, industries, products, and more that can help businesses enhance their value with futuristic mobile applications."} />
                    <div className='flex flex-wrap w-full my-6'>
                        {["Android App", "React Native", "iPhone App", "Kotlin", "Flutter", "Ionic", "Swift", "Xamarin"].map(element => {
                            return (<>
                                <li className='w-1/2 poppins-regular leading-loose text-sm' style={{ listStyle: "circle" }}>{element}</li>
                            </>)
                        })}
                    </div>
                </div>
            </div>
            {/* services section ends */}



            <div className='w-3/4 px-24 my-20'>
                <HeadPara heading={"Offering Exclusive Edge Following Custom Software Development Lifecycle"} paragraph={"Customizing and delivering cutting-edge solutions employing the custom software development lifecycle to help businesses meet their future demands"} lineClass={"h-[0.8px]"} headingClass={"text-3xl poppins-bold leading-10"} />
            </div>


            <div className='w-full px-24'>
                <IdeationSlider />
            </div>


            <div className='w-2/4 mx-auto my-16'>
                <HeadPara paragraph={"In this digital world, our IT team makes sure all the global businesses of almost every industry gets the digital solutions carted based on their custom requirement."} heading={"The Industry-Specific Software Development Expertise"} headingClass={"text-4xl poppins-bold pe-20"} />
                <CircleButton text={"Industries we Serve"} className={"my-6"} />
            </div>

            {/* slider starts from here */}
            <div className='w-full mx-auto overflow-x-hidden'>
                <Slider {...settings}>
                    {expertise.map((element, index) => {
                        return (<>
                            <Card bgUrl={`assets/${element.imgLink}`} para={element.subhead} heading={element.title} className={"w-full"} />
                        </>)
                    })}
                </Slider>
            </div>

        </>
    )
}

export default Home






