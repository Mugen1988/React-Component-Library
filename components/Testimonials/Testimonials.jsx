import React from 'react'
import TestimonialWithImage from "./TestimonialWithImage"
import TestimonialWithoutImage from "./TestimonialWithoutImage"

export default function Testimonials(){
    return (
        <>
        <h1 className="component-title">Testimonials</h1>
        <br/>
        <div className="testimonials-container">
            <h2 className="component-description">With Pic</h2>
            <TestimonialWithImage />
            <h2 className="component-description">Without Pic</h2>
            <TestimonialWithoutImage />
        </div>
        </>
    )
}