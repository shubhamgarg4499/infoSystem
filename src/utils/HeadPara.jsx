import React from 'react'

function HeadPara({ className, headingClass, paraClass, paragraph, heading, lineClass }) {
    return (
        <div className={`w-full ${className && className}`}>
            <h1 className={`text-2xl poppins-bold ${headingClass && headingClass}`}>{heading && heading}</h1>
            <div className={`w-[15%] h-[2px] bg-black my-4 ${lineClass && lineClass}`}></div>
            <p className={`poppins-regular leading-loose text-sm ${paraClass && paraClass}`}>{paragraph && paragraph}</p>
        </div>
    )
}

export default HeadPara