import React from 'react'
import HeadPara from './HeadPara'

function Card({ bgUrl, className, para, heading, style }) {
    return (
        <div className={`w-1/4 aspect-[1.5/2] p-6 ${className && className}`} style={{ backgroundImage: bgUrl ? `linear-gradient(to bottom, rgb(170,90,221),transparent), url(${bgUrl})` : 'none', backgroundRepeat: "no-repeat", backgroundSize: "cover", ...style }}>
            <HeadPara paragraph={`${para ? para : ""}`} heading={`${heading ? heading : ""}`} className={"text-white"} lineClass={"bg-white"} />
        </div>
    )
}

export default Card