import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Launchwebpage.css"
import OvalButton from '../component/oval_button'

function Launchweb() {
    const navigate = useNavigate();

    return (
    <div class='background-div'>
        <div className='main-container' >
            <h5>UNTIRED</h5>
            <h1>ยินดีต้อนรับเข้าสู่เว็บไซต์</h1>
            <p>“ท่านไม่ต้องเสียเวลาและทรัพยากรในการทดลองผิดพลาดและทำลายพืชอีกต่อไป ให้โดรนบินสำรวจของเราช่วยเสริมสร้างฐานข้อมูลเพื่อการตัดสินใจที่แม่นยำและปลอดภัย เริ่มเพิ่มประสิทธิภาพในการเกษตรของคุณด้วยโดรนบินสำรวจเราวันนี้ ”</p>
            <hr/>
            <div className="last-container">
                <OvalButton title="เข้าสู่เว็บไซต์" color="#BEEFC3" next_route={()=>navigate('Welcome')}/>
            </div>
        </div>
    </div>
    );
}

export default Launchweb;