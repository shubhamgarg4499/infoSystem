import React from 'react'

function HeadPara({ className, headingClass, paraClass, paragraph, heading, lineClass }) {
    return (
        <div className={`w-full  ${className && className}`}>
            {heading && <h1 className={`text-2xl poppins-bold ${headingClass && headingClass}`}>{heading}</h1>}
            <div className={`w-[15%] h-[2px] bg-black my-4 ${lineClass && lineClass}`}></div>
            {paragraph && <p className={`poppins-regular leading-loose text-sm ${paraClass && paraClass}`}>{paragraph}</p>}
        </div>
    )
}

export default HeadPara