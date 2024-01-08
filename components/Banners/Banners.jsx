import React from 'react'
import Banner from "./Banner"

export default function Badges(){
    return(
        <>
        <h1 className="component-title">Banners</h1>
        <br/>
        <div className="singleline">
            <h2 className="component-description">Single line</h2>
            <Banner line="single" />
        </div>
        <br/>
        <div className="multiline">
            <h2 className="component-description">Multi line</h2>
            <Banner line="multi" />
        </div>
        </>
    )
}