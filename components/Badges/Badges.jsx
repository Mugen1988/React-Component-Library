import React from 'react'
import Badge from "./Badge"

export default function Badges(){
    const colors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]
    return (
        <>
        <h1 className="component-title">Badges</h1>
        <br/>
        <div className="square-badges">
            <h2 className="component-description">Square</h2>
            <Badge shape="square" />
        </div>
        <div className="pill-badges">
            <h2 className="component-description">Pill</h2>
            <Badge shape="pill" />
        </div>
        </>
    )
}