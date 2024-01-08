import React from 'react'
import Banners from './Banners'
import { nanoid } from 'nanoid'

export default function Banner({line}){
    const variants = ["success", "warning", "error", "neutral"]
    return (
        variants.map(variant => {
            let text =""
            if(variant === "success"){
                text= "Congratulations!"
            } else if (variant === "warning"){
                text= "Attention!"
            } else if (variant === "error"){
                text= "There is a problem with your application!"
            } else if (variant === "neutral"){
                text= "Update available"
            }
            if(line === "single"){
                return <div key={nanoid()} className={`banner banner-single banner-${variant}`}>{text}</div>
            } else {
                return <div key={nanoid()} className={`banner banner-multi banner-${variant}`}>         {text}
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
                </div>
            }
        })
    )
}