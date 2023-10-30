import React from 'react'
import "./LocatePage.css"
import Navbar from './component/navbar'

function Locate() {
    return (
        <div class = "main">
            <header>
                <Navbar/>
            </header>
            <span class="layout">
                <div class="left-card">
                    <div class="LocationSearch"> 
                        Location Search
                        <input class = "input" type="text" placeholder="Your name.."/>
                    </div>
                    <div class="LocationShow">Location Show</div>
                </div>
                <div class="right-card">
                    <div class="Map">Map</div>
                </div>
            </span>
            
        </div>
    )
}

export default Locate;
