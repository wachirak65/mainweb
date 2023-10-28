import React from 'react'
import "./Selection.css"
function Selection() {
    return (
        <div class="container">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a  class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img style={{borderRadius: "50%"}} src="https://www.zarla.com/images/zarla-k-1x1-2400x2400-20211119-y8r6jygpdqy7qwr4bhcp.png?crop=1:1,smart&width=250&dpr=2" width="20%" height="20%"/>
                    <h2>LOGO</h2>
                </a>

                <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" class="nav-link px-2 link-secondary">หน้าหลัก</a></li>
                    <li><a href="#" class="nav-link px-2 link-dark">เกี่ยวกับเรา</a></li>
                    <li><a href="#" class="nav-link px-2 link-dark">เทคโนโลยี AI</a></li>
                    <li><a href="#" class="nav-link px-2 link-dark">บริการ</a></li>
                    <li><a href="#" class="nav-link px-2 link-dark">ติดต่อเรา</a></li>
                </ul>
                <select name="cars" id="cars" style={{outline: "0px solid transparent"}}>
                    <option value="Guest" selected>Guest</option>
                    <option value="volvo">โหมดผู้ใช้ทั่วไป</option>
                    <option value="saab">สมัครสมาชิก</option>
                </select>
            </header>
        <div className='middle-container'>
            <h1 style={{padding:"10px"}}>กรุณาเลือกรายการทำการ</h1>
            <button type='submit' className='w-50 btn btn-l btn-info' >สร้างโปรเจกต์ +</button>
            <p style={{fontSize:"12px",opacity:"0.7",padding:"20px"}}>เริ่มต้นสร้างโปรเจกต์ใหม่</p>
            <button type='submit' className='w-50 btn btn-l btn-success' >เข้าร่วมโปรเจกต์ </button>
            <p style={{fontSize:"12px",opacity:"0.7",padding:"20px"}}>เข้าร่วมโปรเจกต์กับคนอื่นๆผ่านหมายเลข</p>
            <button type='submit' className='w-50 btn btn-l btn-white' >ตัวอย่างโปรเจกต์ </button>
            <p style={{fontSize:"12px",opacity:"0.7",padding:"20px"}}>แสดงตัวอย่างของโปรเจกต์ที่เป็นสาธารณะ</p>
            <hr />
        </div>
        </div>
    )
}

export default Selection