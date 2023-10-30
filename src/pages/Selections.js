import React from 'react'
import './Selections.css'

function Selections() {
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
        <div className='medium-container'>
            <h3>กรอกเลข PIN 6 หลักเพื่อเข้าร่วมโปรเจกต์</h3>
            <hr />
            <div className='box'>
                <div className ='box-1'><input type='text' name='number' minLength={1} maxLength={1} required></input></div>
                <div className ='box-2'><input type='text' name='number' minLength={1} maxLength={1} required></input></div>
                <div className ='box-3'><input type='text' name='number' minLength={1} maxLength={1} required></input></div>
                <div className ='box-4'><input type='text' name='number' minLength={1} maxLength={1} required></input></div>
                <div className ='box-5'><input type='text' name='number' minLength={1} maxLength={1} required></input></div>
                <div className ='box-6'><input type='text' name='number' minLength={1} maxLength={1} required></input></div>
            </div>
            <button type='submit' className='w-20 btn btn-l btn-white' href="Uploadpage">ยืนยัน</button>
            
            
        </div>
        <footer>
            <button style={{marginTop:"4rem"}} type="button" className="w-10 btn btn-m btn-white"><a href='Selection' style={{textDecoration:"None",color:"black"}}>ย้อนกลับ</a></button>
        </footer>
    </div>
    
    )
}

export default Selections