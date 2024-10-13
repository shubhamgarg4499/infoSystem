import React from 'react'
import CircleButton from '../utils/CircleButton'

function Home() {
    let logos = ["zydus-life.png", "art-of-living.png", "astral.png", "emaar.png", 'google.png', "npci.png", "viacom-media.png", "zydus-life.png"]
    return (
        <>
            {/* /////// hero section starts from here////////////////////// */}
            <div className='w-full min-h-full inline-flex overflow-hidden items-center justify-center'>
                <div className='mx-auto'>
                    <h1 className='text-5xl poppins-bold text-[rgb(0,201,255)]'>Mobile App</h1>
                    <h1 className='text-3xl poppins-regular my-3'>Development Company</h1>

                    <div className='flex items-center max-h-fit my-8'>
                        <h1 className='text-[rgb(220,46,61)] text-4xl poppins-semibold'>#1</h1>
                        <div className='w-[2px] bg-gray-200 h-[25px] rounded-lg mx-5' ></div>
                        <div>
                            <p className='text-base poppins-regular'>Ranked as <span className='text-[rgb(220,46,61)] poppins-semibold'>#1 Top App Development </span> <br />Company in USA and India</p>
                        </div>

                    </div>

                    <CircleButton borderClass={'border-black'} arrowClass={'text-black text-4xl'} text={"Drop your Queries"} textClass={""} />
                </div>


                <div className='relative overflow-hidden  '>
                    {/* <div className='w-[100%] h-56 absolute bg-gradient-to-r z-10 from-[#00C8FF] to-[#92FE9D] rounded-[70px] shadow-xl rotate-[-45deg] right-[-30%] top-[-12%]'>
                    </div> */}
                    <img src="/assets/mobile-app-development.png.png" alt="mobile-app-development" className='relative z-50 w-2/3 aspect-video' />
                </div>
            </div>

            {/* hero section ends///////////// */}

            {/* <div className='flex justify-evenly items-center p-0 my-28'>
                {logos.map((element) => {
                    return (<>
                        <img src={`/assets/logos/${element}`} alt={element.replace(" ", "")} />
                    </>)
                })}


            </div> */}
        </>
    )
}

export default Home






