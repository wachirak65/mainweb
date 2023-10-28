import React from 'react'
import "./Uploading.css"

function Uploading() {
    return (
        <div class="container" >
        <header style={{boxShadow:"5px 5px 5px 5px rgba(0,0,0,0.2)",strokeOpacity:"0.8"}} class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a  class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img style={{borderRadius: "50%"}} src="https://www.zarla.com/images/zarla-k-1x1-2400x2400-20211119-y8r6jygpdqy7qwr4bhcp.png?crop=1:1,smart&width=250&dpr=2" width="15%" height="15%"/> 
                <h2>LOGO</h2>
            </a>

            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" class="nav-link px-2 link-secondary">หน้าหลัก</a></li>
                <li><a href="#" class="nav-link px-2 link-dark">เกี่ยวกับเรา</a></li>
                <li><a href="#" class="nav-link px-2 link-dark">เทคโนโลยี AI</a></li>
                <li><a href="#" class="nav-link px-2 link-dark">บริการ</a></li>
                <li><a href="#" class="nav-link px-2 link-dark">ติดต่อเรา</a></li>
            </ul>

            <select name="cars" id="cars">
                <option value="Guest" selected>Guest</option>
                <option value="volvo">โหมดผู้ใช้ทั่วไป</option>
                <option value="saab">สมัครสมาชิก</option>
            </select>
            {/* <ul>
                <li style={{ listStyleType :"none",textDecoration:"none" ,color: "#5DADE2"}}><a href="#" class="nav-link px-2 link-lightblue">
                    Guest
                    <i class="fa-solid fa-chevron-down"></i>
                    </a>
                        <ul className='dropdown'>
                            <li style={{ listStyleType :"none",textDecoration:"none" ,color: "#5DADE2"}}><a href="#">โหมดผู้ใช้ทั่วไป</a></li>
                            <ul style={{ listStyleType :"none",textDecoration:"none" ,color: "#5DADE2"}}><a href="#">สมัครสมาชิก</a>
                                <li style={{ listStyleType :"none",textDecoration:"none" ,color: "#5DADE2"}}><a href="#">สมัครสมาชิก</a></li>
                                <li style={{ listStyleType :"none",textDecoration:"none" ,color: "#5DADE2"}}><a href="#">Logout</a></li>
                            </ul>
                        </ul>
                    </li>
            </ul> */}
            
        </header>
        <div class="container-2">
            <h3>ลาก & วางไฟล์ของคุณ or <a href='#'  style={{textDecoration:"none"}}>เปิดโฟลเดอร์</a></h3>
            <p>อัพโหลดข้อมูลรูปภาพ สภาพแวดล้อมต่างๆ เพื่อให้ AI ใช้ในการวิเคราะห์ </p>
            <hr />
        </div>
            <p>ประเภทไฟล์ที่รองรับ JPG , PNG ขนาดสูงสุดครั้งละ 800 MB</p>
            <p>ไฟล์ที่กำลังอัปโหลด...</p>
            <button type="button" className="w-10 btn btn-l btn-white"><a href='#' style={{textDecoration:"None",color:"black"}}>อัปโหลดและสร้างโปรเจค</a></button>
        <footer>
            <button type="button" className="w-10 btn btn-m btn-white"><a href='Upload' style={{textDecoration:"None",color:"black"}}>ย้อนกลับ</a></button>
        </footer>
        </div>
        
    )
}

export default Uploading