import React from 'react'
import "../pages/LocatePage.css"
import Navbar from '../component/navbar'
function Locate() {
    return (
        <div class = "main">
            <header>
                <Navbar/>
            </header>
            <span class="layout">
                <div class="left-card">
                    <div class="LocationSearch"> 
                        <p>ระบุพิกัดสถานที่</p>
                    </div>
                    <div>
                        <input class = "inputLocate" type="text" placeholder="ค้นหา"/>
                        <hr class="line" />
                    </div>

                    <div class="LocationShow">
                        <p class="locateShowInside">ตำแหน่งที่กำลังปักหมุด</p></div>
                        <hr class="line2" />
                </div>
                <div class="right-card">
                    <div class="Map">Map</div>
                </div>
            </span>
            
        </div>
    )
}

export default Locate;
