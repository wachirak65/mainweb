import React from 'react'
import "../pages/ShowAlocate.css"
import Navbar from '../component/navbar'
import Sidebar from '../component/sidebar'
import OvalButton from '../component/oval_button'
import Chatbot from '../component/chatbot'
import { useNavigate } from 'react-router-dom';

function ShowAlocate() {
    let navigate = useNavigate();

    return (
        <div class = "Allin">
            <header>
                <Navbar/>
                <Chatbot/>

                <div className="Sidebar">
                    <Sidebar/>
                </div>
            </header>
            <div class="grid-container">
                <div class="AlocateShow"></div>
                    <div class = 'button-line'>
                    <div class ="text-word"><p>พืชที่แนะนำ : มะละกอ</p></div>
                        <span class = 'btn-inline-1'>
                            <button >เปลี่ยนชนิดพืช</button>
                        </span>                            
                        <span class = 'btn-inline-2'>
                            <button>เปลี่ยนการวางแผนพื้นที่</button>
                        </span>        
                        <div class = "Reload-Icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                                </svg>

                            </div>
                        <span class = 'btn-inline-3'>
                        <button onClick={()=>
                        navigate("/ShowArea")}>พื้นที่ทั้งหมด</button>           
                    </span>
                    </div>
                
                    <div class="Data-1">
                       
                        
                        <label class="use-label">
			                <input class="checkbox-input" type="checkbox" />
			                    <div class="flip-card">
				                    <div class="front">
                                        <p>ผลผลิต คาดการณ์:</p>

                                        <hr class="line-on-top"/>
                                        <p>รายรับ คาดการณ์:</p>
                                        <hr class="line-on-top"/>
                                        <p>ค่าใช้จ่าย คาดการณ์:</p>
				                        </div>
				<div class="back">
                    <p>สรุปค่าใช้จ่ายต่างๆ</p>
                    <hr class="line-on-top"/>

				</div>
			</div>
		</label>
                    </div>  
                <div class="Data-2">
                    <h4>ข้อมูลพื้นฐานทั่วไป</h4>
                    <hr class="line-on-bottom"/>
                    <p id='p-1'>พื้นที่เพาะปลูก : </p>
                    <p id='p-2'>ปริมาณการใช้น้ำ : </p>
                    <p id='p-3'>ปริมาณการใช้ปุ๋ย : </p>
                    <p>ระยะเวลาในการเพาะปลูก : </p>
                    <div class ="show-process">
                        <hr class="line-on-bottom"/>
                        <p>รายการที่กำลังดำเนินการ</p>
                    </div>
                
                </div>
                <div class="Data-3">
                    <h4>รายละเอียด</h4>
                    <p>ชนิดพืช :</p>
                    <p>ข้อมูลเพิ่มเติม :</p>
                </div>
            </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>            
        </div>
    )
}

export default ShowAlocate;