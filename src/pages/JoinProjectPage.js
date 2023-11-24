import React from 'react'
import './JoinProjectPage.css'
import Navbar from '../component/navbar.js'
import ConfirmBtn from '../component/confirm_btn'
import BackBtn from '../component/back_btn'
import Chatbot from '../component/chatbot.js'
import { useNavigate } from 'react-router-dom';

function JoinProjectPage() {
    let navigate = useNavigate();

    return (
        <div class='background'>
            <Navbar/>
            <Chatbot/>
            <div class='content'>
                <div class='top-background'>
                    <div className="header-title">
                        <p>เข้าร่วมโปรเจกต์</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="joinProject-card">
                <h1>กรอกเลข PIN 6 หลักเพื่อเข้าร่วมโปรเจกต์</h1>
                <hr />
                <div className="otp-field">
                    <input type="text" maxLength='1'/>
                    <input type="text" maxLength='1'/>
                    <input type="text" maxLength='1'/>
                    <input type="text" maxLength='1'/>
                    <input type="text" maxLength='1'/>
                    <input type="text" maxLength='1'/>
                </div>
                <div class='button-state'>
                    <ConfirmBtn  bg_color='#E4E4E4' title='ยืนยัน' onClick={()=>
                        console.log("confirm")}/>
                </div>
            </div>
            <div class='black-btn-div'>
                <BackBtn bg_color='#E7E6E6' title='ย้อนกลับ' onClick={()=>
                        navigate("/Selection")}/>
            </div>
        </div>
    
    )
}

export default JoinProjectPage