import React from 'react'
import "./WelcomePage.css"
import { useNavigate } from "react-router-dom";
import Navbar from '../component/navbar'
import Slide from '../assets/icons/slide_icon.svg'
import OvalButton from '../component/oval_button'

function WelcomePage() {
    const navigate = useNavigate();

    return (
        <div>
            <Navbar/>
            <div class="welcome-content">
                <div className='main-container' >
                    <h5>UNTIRED</h5>
                    <h1>ยินดีต้อนรับเข้าสู่เว็บไซต์</h1>
                    <p>“ท่านไม่ต้องเสียเวลาและทรัพยากรในการทดลองผิดพลาดและทำลายพืชอีกต่อไป ให้โดรนบินสำรวจของเราช่วยเสริมสร้างฐานข้อมูลเพื่อการตัดสินใจที่แม่นยำและปลอดภัย เริ่มเพิ่มประสิทธิภาพในการเกษตรของคุณด้วยโดรนบินสำรวจเราวันนี้ ”</p>
                    <img src={Slide} alt="slide-icon" width="65" height="77"/>
                </div>
                <div class='space-row'></div>
                <div className='main-container-hidden'>
                    <div class="image-slider">
                        <div class="slider-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                        </div>
                        <div class="image-content">
                            <div class="scene-slider"></div>
                        </div>
                        <div class="slider-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        </div>
                    </div>
                    <div class='space-center'></div>
                    <div class="text-content">
                        <h1>บริการของพวกเรา ?</h1>
                        <p>ท่านสามารถเพิ่มประสิทธิภาพการเกษตรของคุณได้ด้วยเทคโนโลยีของเรา โดรนบินสำรวจของเราจะช่วยท่านทำนายพื้นที่ที่เหมาะสมในการปลูกพืชและพืชที่ควรปลูกอย่างไรให้เหมาะกับสภาพแวดล้อม ด้วยการสแกนและวิเคราะห์ข้อมูลที่รวบรวมจากโดรนบินสำรวจเรา ท่านจะได้รับข้อมูลที่แม่นยำเกี่ยวกับปริมาณน้ำ, สภาพดิน, และสภาพอากาศที่ช่วยให้การเกษตรของท่านประสบความสำเร็จ</p>
                        <div class='btn-groub'>
                            <OvalButton title="เข้าสู่ระบบ" color="#BEEFC3" next_route={()=>navigate('/Login')}/>
                            <div class='space-center'></div>
                            <OvalButton title="สมัครสมาชิก" color="#82CEDE" next_route={()=>navigate('/Register')}/>
                        </div>
                    </div>
                </div>
                <div class='space-row'></div>
                <div className="main-container-tail">
                    <p>Our Services</p>
                    <h1>แพ็คเกจทั้งหมด</h1>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage