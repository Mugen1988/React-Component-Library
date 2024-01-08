import React from 'react'
import Cards from './Cards'
import { nanoid } from 'nanoid'
import {imageUrl} from "/images/card-icon.png"

export default function Card({type}){
    return (
        <>
            <img src={imageUrl} className="icon" />
            <h2 className="card-title">Easy Deployment</h2>
            <p className="card-text">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
        </>
    )
}