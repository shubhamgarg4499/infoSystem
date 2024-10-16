import React from 'react'

function CircleButton({ borderClass, arrowClass, text, textClass, className }) {
    return (

        <>
            <div className={`inline-flex  items-center p-0 m-0 ${className && className}`}>
                <div className={`w-9 h-9 rounded-full border-2 border-black relative group 
            transition-all ease-in-out duration-150 ${borderClass && borderClass} inline-flex`}>
                    <p><i class={`fa-solid fa-arrow-right-long absolute left-[80%] top-[50%] translate-y-[-50%] text-2xl group-hover:left-[120%]  transition-all ease-in-out duration-150  ${arrowClass && arrowClass}`}></i></p>
                </div>

                <div className={`mx-9  poppins-regular  ${textClass && textClass}`}>{text}</div>

            </div>

        </>
    )
}

export default CircleButton