import React from 'react'
import "./Launchwebpage.css"

function launchweb() {
    return (
    <div>
        <div className='main-container' >
            <h5>UNTIRED</h5>
            <h1>ยินดีต้อนรับเข้าสู่เว็บไซต์</h1>
            <p>“ท่านไม่ต้องเสียเวลาและทรัพยากรในการทดลองผิดพลาดและทำลายพืชอีกต่อไป ให้โดรนบินสำรวจของเราช่วยเสริมสร้างฐานข้อมูลเพื่อการตัดสินใจที่แม่นยำและปลอดภัย เริ่มเพิ่มประสิทธิภาพในการเกษตรของคุณด้วยโดรนบินสำรวจเราวันนี้ ”</p>
            <hr/>
            <div className="last-container">
                <button type="submit" class="w-30 btn btn-m btn-success" ><a class="w-100 btn btn-m btn-success" href="Profile">เข้าสู่เว็บไซต์</a></button>
            </div>
        </div>
    </div>
    )
}

export default launchweb