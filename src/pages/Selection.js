import React from 'react'
import "./Selection.css"
import Navbar from '../component/navbar.js'

function Selection() {
    return (
        <div>
        <Navbar/>
        <div className='middle-container'>
            <h1 style={{padding:"10px"}}>กรุณาเลือกรายการทำการ</h1>
            <button type='submit' className='w-50 btn btn-l btn-info' ><a href="Uploading" style={{textDecoration:"none",color:"black"}}>สร้างโปรเจกต์ +</a></button>
            <p style={{fontSize:"12px",opacity:"0.7",padding:"20px"}}>เริ่มต้นสร้างโปรเจกต์ใหม่</p>
            <button type='submit' className='w-50 btn btn-l btn-success' ><a href="Selections" style={{textDecoration:"none",color:"black"}}>เข้าร่วมโปรเจกต์</a> </button>
            <p style={{fontSize:"12px",opacity:"0.7",padding:"20px"}}>เข้าร่วมโปรเจกต์กับคนอื่นๆผ่านหมายเลข</p>
            <button type='submit' className='w-50 btn btn-l btn-white' ><a href="https://www.youtube.com/watch?v=RZ5soAZXSxU" style={{textDecoration:"none",color:"black"}}>ตัวอย่างโปรเจกต์</a> </button>
            <p style={{fontSize:"12px",opacity:"0.7",padding:"20px"}}>แสดงตัวอย่างของโปรเจกต์ที่เป็นสาธารณะ</p>
            <hr />
        </div>
        </div>
    )
}

export default Selection