import React from 'react'
import Card from "./Card"

export default function Cards(){
    return (
        <>
        <h1 className="component-title">Cards</h1>
        <br/>
        <div className="cards-container">
            <div className="card">
                <h2 className="component-description card-description">Ordinary</h2>
                <Card type="ordinary"/>
            </div>
            <div className="card-hover">
                <h2 className="component-description card-description">Hoverable</h2>
                <Card type="hoverable"/>
            </div>
        </div>
        </>
    )
}