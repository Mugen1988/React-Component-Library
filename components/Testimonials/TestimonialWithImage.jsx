import React from "react"
import Testimonials from "./Testimonials"
import {imageUrl} from "/images/testimonial-image.png"
import {iconUrl} from "/images/testimonial-icon.png"

export default function TestimonialWithImage() {
    return (
        <>
            <div className="image-testimonial-container">
                <img src={imageUrl} className="image-testimonial-img" />
                <div className="image-testimonial-text">
                    <img src={iconUrl} className="image-testimonial-icon" />
                    <p className="image-testimonial-quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.</p>
                    <p className="image-testimonial-name">May Andersons</p>
                    <p className="image-testimonial-role">Workcation, CTO</p>
                </div>
            </div>
        </>
    )
}