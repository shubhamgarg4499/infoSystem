import React from 'react'
import CircleButton from './CircleButton'

function HeadingParagraph({ heading, paragraph, buttonText, buttonClass, headingClass, paragraphClass, className }) {
    return (
        <>
            <div className={`flex w-[100%] justify-center px-24 ${className && className}`}>
                <div className='w-1/2'>
                    <h1 className={`poppins-bold text-3xl leading-relaxed ${headingClass && headingClass}`}>{heading && heading}</h1>
                    <div className='w-[15%] h-[2px] bg-black my-4'></div>
                </div>
                <div className='poppins-light w-1/2 px-12 m-auto'>
                    <p className={`text-sm leading-snug ${paragraphClass && paragraphClass}`}>{paragraph && paragraph}</p>
                    <CircleButton text={buttonText && buttonText} className={buttonClass && buttonClass} textClass={'poppins-regular'} />
                </div>
            </div>
        </>
    )
}

export default HeadingParagraph