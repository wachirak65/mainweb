// Navbar.js
import React from 'react';
import logo_untired from '../assets/logo_untired.PNG';
import person_icon from '../assets/icons/person_icon.svg'
import gear_icon from '../assets/icons/gear_icon.svg'
import './navbar.css'

function Navbar() {
    return (
        <nav class="navbar">
                    <div class="first-navbar">
                        <a class="navbar-logo" href="#">
                            <img src={logo_untired} alt="Logo" class="logo" />
                        </a> 
                        <div class = "nav-burgur">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                </div>
                    </div> 
                    
                    <div class="last-navbar">
                        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" class="nav-link px-2 link-dark">หน้าหลัก</a></li>
                            <li><a href="#" class="nav-link px-2 link-dark">เกี่ยวกับเรา</a></li>
                            <li><a href="#" class="nav-link px-2 link-dark">เทคโนโลยี AI</a></li>
                            <li><a href="#" class="nav-link px-2 link-dark">บริการ</a></li>
                            <li><a href="#" class="nav-link px-2 link-dark">ติดต่อเรา</a></li>
                        </ul>
                        <div class="dropdown">
                            <div class = "position-touch"></div>
                            
                            <div class="dropdown-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                
                                <h5 class="dropdown-title">Guest</h5>
                            </div>
                            <div class="dropdown-content">
                                <a href="#"><img src={person_icon} alt="person_icon_img" class="icon-dropdown-content"/> โหมดผู้ใช้ทั่วไป</a>
                                <a href="#"><img src={gear_icon} alt="person_icon_img" class="icon-dropdown-content"/> สมัครสมาชิก</a>
                            </div>
                        </div>
                        <div class="check-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                            </svg>
                        </div>
                    </div>
                </nav> 
    );
}

export default Navbar;