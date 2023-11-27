import React , {useEffect,useState}from 'react'
import "../pages/Tasktodo.css"
import Navbar from '../component/navbar'
import Sidebar from '../component/sidebar'
import TreeIcon from '../assets/icons/tree.svg'
import Chatbot from '../component/chatbot'
import { useNavigate } from 'react-router-dom';
import TodolistIcon from '../assets/icons/check2-circle.svg'

function Tasktodo() {
    let navigate = useNavigate();

    function toggleDropdown(buttonNumber) {
        var dropdown = document.getElementById("dropdown" + buttonNumber);
        dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
        
    }
    return (
        
        <div className='tasktodo-Container'>
            <header>
            
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            </header>
            <div className="inside-tasktodo">

            <div className="nav-header-taskname">
                <p>รายการที่ต้องดำเนินการ </p>
                <p>  Icon</p>
            </div>
            <div className="all-task">
            <div className="left-container-taskname">
                <div className="left-image-todo">
                    image
                </div>
                <div className="name-image-todo">พืช : ข้าวโพด</div>
                <div className="detail-left-todo">รายละเอียด : </div>
                <div className="progress-lefr-todo">
                    <p>ดำเนินการทั้งหมด : 23%</p>
                    <p>progress bar</p>
                </div>
            </div>
            <div className="right-container-taskname">
                <div className="right-tasktodo">
                <div class="button-container-taskname">
                    <div class="dropdown-container-taskname">
                        <button class="dropdown-button-taskname" onClick={()=>
                                toggleDropdown(1)}>
                                    <div className="inside-task-dropdown">
                                        <div className="inside-task-text">
                                            รายการที่ 1 : เตรียมดิน 
                                        </div>
                                        <div className="inside-task-btn">
                                            <button>ติดต่อคนงาน</button>
                                        </div>
                                        <div className="inside-task-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    </button>
                        <div class="dropdown-content-taskname" id="dropdown1">
                            <a href="#">Item 1</a>
                            <a href="#">Item 2</a>
                            <a href="#">Item 3</a>
                        </div>
                    </div>

                    <div class="dropdown-container-taskname">
                        <button class="dropdown-button-taskname"onClick={()=>
                                toggleDropdown(2)}>
                                    <div className="inside-task-dropdown">
                                        <div className="inside-task-text">
                                            รายการที่ 2 : เตรียมดิน 
                                        </div>
                                        <div className="inside-task-btn">
                                            <button>ติดต่อคนงาน</button>
                                        </div>
                                        <div className="inside-task-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    </button>
                        <div class="dropdown-content-taskname" id="dropdown2">
                            <a href="#">Item 1</a>
                            <a href="#">Item 2</a>
                            <a href="#">Item 3</a>
                        </div>
                    </div>

                </div>
                </div>
            </div>
            
            </div>
            
            </div>
        </div>
        
    )
}

export default Tasktodo;