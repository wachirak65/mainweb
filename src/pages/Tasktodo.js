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
                <p> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"/>
                    <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"/>
                    <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"/>
                    </svg>
                </p>
            </div>
            <div className="all-task">
            <div className="left-container-taskname">
                <div className="left-image-todo">
                    <img src="https://images.unsplash.com/photo-1519544442-93857b48665e?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <button className='button-task-back' onClick={()=> navigate('/ShowArea')}>พื้นที่ทั้งหมด</button>

                <div className="name-image-todo">พืช : ทุเรียน</div>
                <div className="detail-left-todo">รายละเอียด : </div>
                <div className="progress-lefr-todo">
                    <p>ดำเนินการทั้งหมด : 0%</p>
                    <p className='progressbar'></p>
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

                            {/* Item1 */}
                            <p href="">
                                <div className='inside-task-dropdown-use'>
                                <div className="side-1">
                                <label class="checkbox-container">
                                <input type="checkbox" class="checkbox-task"/>
                                </label>
                            </div>
                                <div className="side-2">ตรวจสอบความเหมาะสมของดิน</div>
                            </div>
                            </p>
                            {/* Item2 */}
                            <p>
                                <div className='inside-task-dropdown-use'>
                                <div className="side-1">
                                <label class="checkbox-container">
                                <input type="checkbox" class="checkbox-task"/>
                                </label>
                            </div>
                                <div className="side-2">ปรับปรุงดินตามความเหมาะสม</div>
                            </div>
                            </p>
                            
                        </div>
                    </div>

                    <div class="dropdown-container-taskname">
                        <button class="dropdown-button-taskname"onClick={()=>
                                toggleDropdown(2)}>
                                    <div className="inside-task-dropdown">
                                        <div className="inside-task-text">
                                            รายการที่ 2 : เตรียมเมล็ด
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

                                <p>
                                <div className='inside-task-dropdown-use'>
                                <div className="side-1">
                                <label class="checkbox-container">
                                <input type="checkbox" class="checkbox-task"/>
                                </label>
                            </div>
                                <div className="side-2">เตรียมเมล็ดพันธุ์ของพืช</div>
                            </div>
                            </p>

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