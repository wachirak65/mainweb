import React from 'react'
import "./WelcomePage.css"
import { useNavigate } from "react-router-dom";
import Navbar from '../component/navbar'
import Slide from '../assets/icons/slide_icon.svg'
import OvalButton from '../component/oval_button'
import PackageCard from '../component/card_package.js'

function WelcomePage() {
    
    const navigate = useNavigate();

    const scrollToPosition = () => {
        // หาตำแหน่งที่คุณต้องการเลื่อนไปยัง และใช้ window.scrollTo() เพื่อเลื่อนหน้าเว็บ
        // ตัวอย่างเช่น 1000px จากบน
        console.log("Click");
        window.scrollTo(0, 900);
    }

    return (
        
        <div>
            <Navbar/>
            <div class="welcome-content" >
           
                <div className='main-container' >
                    <h5>UNTIRED</h5>
                    <h1>ยินดีต้อนรับเข้าสู่เว็บไซต์</h1>
                    <p>“ชาวเกษตรกรทุกท่านจะได้ไม่ต้องเสียแรง เวลา และทรัพยากรให้การเพาะปลูกพืชที่ให้ผลลัพธ์ทางด้านผลผลิตที่ไม่เต็มประสิทธิภาพ ดังนั้นการให้โดรนบินสำรวจของเราช่วยเสริมสร้างฐานข้อมูลเพื่อใช้ในการตัดสินใจที่แม่นยำและปลอดภัยยิ่งขึ้นได้ตั้งแต่วันนี้ ”</p>
                    <img className='slide-obj' src={Slide} alt="slide-icon" width="65" height="77" onClick={scrollToPosition}/>
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
                            <div class="scene-slider">
                            <img src="https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <img src="https://images.unsplash.com/photo-1508175688576-0c076b47b5b5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                        </div>
                        <div class="slider-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        </div>
                    </div>
                    <div class='space-center'></div>
                    <div class="text-content"  >
                        <h1>บริการของพวกเรา ?</h1>
                        <p>พื้นที่ของการให้บริการของพวกเรา คือ การเพิ่มประสิทธิภาพทางการเกษตรของคุณได้ด้วยเทคโนโลยีของเรา โดยการใช้โดรนเพื่อบินสำรวจพื้นที่เพาะปลูกของคุณเพื่อช่วยทำนายพื้นที่ที่เหมาะสมในการปลูกพืชว่าควรปลูกอย่างไรให้เหมาะกับสภาพแวดล้อม ด้วยการสแกนและวิเคราะห์ข้อมูลที่รวบรวมจากโดรนบินสำรวจเรา ท่านจะได้รับข้อมูลที่แม่นยำเกี่ยวกับปริมาณน้ำ, สภาพดิน, และสภาพอากาศที่ช่วยให้การเกษตรของท่านประสบความสำเร็จสูงสุด</p>
                        <div class='btn-groub'>
                            <div className="btn-g-1">
                                <OvalButton title="เข้าสู่ระบบ" color="#BEEFC3" next_route={()=>navigate('/Login')}/>
                            </div>
                            <div class='space-center'></div>
                            <div className="btn-g-2">
                                <OvalButton title="สมัครสมาชิก" color="#82CEDE" next_route={()=>navigate('/Register')}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='space-row'></div>
                <div className="main-container-tail">
                    <p>Our Services</p>
                    <h1>แพ็คเกจทั้งหมด</h1>
                    <div class='package-bar'>
                        <PackageCard icon_pack={
                            <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-magic" viewBox="0 0 16 16">
                                <path d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0v1.829Zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707L14 2.707ZM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707L7.293 4Zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1h1.829Zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1h1.829ZM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707L13.293 10ZM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0v1.829Zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0L8.354 9.06Z"/>
                            </svg>
                        } package_name='แพ็คเกจ 1' package_title='คำอธิบายต่างๆ'/>
                        <div class='space-center'></div>
                        <PackageCard icon_pack={
                            <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-file-code" viewBox="0 0 16 16">
                                <path d="M6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0a.5.5 0 1 0-.708.708L10.293 8 8.646 9.646a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z"/>
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                            </svg>
                        } package_name='แพ็คเกจ 2' package_title='คำอธิบายต่างๆ'/>
                        <div class='space-center'></div>
                        <PackageCard icon_pack={
                            <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                            </svg>
                        } package_name='แพ็คเกจ 3' package_title='คำอธิบายต่างๆ'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage