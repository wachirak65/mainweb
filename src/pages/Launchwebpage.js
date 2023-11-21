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
            <p>“ชาวเกษตรกรทุกท่านจะได้ไม่ต้องเสียแรง เวลา และทรัพยากรให้การเพาะปลูกพืชที่ให้ผลลัพธ์ทางด้านผลผลิตที่ไม่เต็มประสิทธิภาพ ดังนั้นการให้โดรนบินสำรวจของเราช่วยเสริมสร้างฐานข้อมูลเพื่อใช้ในการตัดสินใจที่แม่นยำและปลอดภัยยิ่งขึ้นได้ตั้งแต่วันนี้ ”</p>
            <hr/>
            <div className="last-container">
                <OvalButton title="เข้าสู่เว็บไซต์" color="#BEEFC3" next_route={()=>navigate('Welcome')}/>
            </div>
        </div>
    </div>
    );
}

export default Launchweb;