import React from 'react'
import Badges from './Badges'

export default function Badge({shape}){
    const colors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]
    return (
        colors.map(color => {
            if(shape === "square"){
                return <div key={color} className={`badge badge-square badge-${color}`}>{color}</div>
            } else {
                return <div key={color} className={`badge badge-pill badge-${color}`}>{color}</div>
            }
        })
    )
}