import React from 'react'
import HeadPara from './HeadPara'

function IdeationSlider() {
    // let data = [
    //     { heading: "", para: "Brainstorm creative ideas to ideate them and come up with a plan to turn them into a successful smart solution." },
    //     { heading: "", para: "" },
    //     { heading: "", para: "" },
    // ]

    return (
        <div className='w-full'>
            <div className='w-100 flex justify-center items-center'>
                <div className='w-1/3 flex flex-col justify-center px-8 relative'>
                    <h1 className='poppins-semibold text-red-600 text-lg my-2'>01</h1>
                    <HeadPara heading={"Ideation"} headingClass={"poppins-semibold"} paragraph={"Brainstorm creative ideas to ideate them and come up with a plan to turn them into a successful smart solution."} paraClass={" leading-losse poppins-light"} />
                    <i class="fa-solid fa-circle-chevron-left text-3xl absolute top-[50%]  
                    translate-y-[-50%] left-0" ></i>
                </div>
                <div className='w-1/3 object-cover aspect-square flex flex-col justify-center px-8' style={{
                    backgroundImage: `url(assets/sliderImage.jpeg)`
                }}>

                    <h1 className='poppins-semibold text-white text-lg my-2'>02</h1>
                    <HeadPara heading={"Plan"} headingClass={"text-white poppins-semibold"}
                        lineClass={"bg-green-100"} paragraph={"Define the project goals, create a timeline & milestones, and build a team based on your development requirements."} paraClass={"text-white leading-losse poppins-light"} />

                </div>

                <div className='w-1/3 flex flex-col justify-center px-8 relative'>

                    <h1 className='poppins-semibold text-red-600 text-lg my-2'>03</h1>
                    <HeadPara heading={"Design"} headingClass={"poppins-semibold"} paragraph={"Build interactive prototypes based on sketches and wireframes to illustrate and visualize the interface of the solution."} paraClass={" leading-losse poppins-light"} />
                    <i class="fa-solid fa-circle-chevron-right text-3xl absolute top-[50%]  
                    translate-y-[-50%] right-0" ></i>
                </div>

            </div>
        </div>
    )
}

export default IdeationSlider