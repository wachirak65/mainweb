import React from 'react'
import "./Selection.css"
import Navbar from '../component/navbar.js'
import SelectButton from '../component/selection_button'

function Selection() {
    return (
        <div>
        <Navbar/>
        <div className='content'>
            <div class='top-background'></div>
            <div className="selection-card">
                <h1>กรุณาเลือกรายการทำการ</h1>
                <SelectButton title="สร้างโปรเจกต์" color='#CDFFF3' state="create"/>
                <p>เริ่มต้นสร้างโปรเจกต์ใหม่</p>
                <SelectButton title="เข้าร่วมโปรเจกต์" color="#C1F5A9" state="join"/>
                <p>เข้าร่วมโปรเจกต์กับคนอื่นๆผ่านหมายเลข</p>
                <SelectButton title="ตัวอย่างโปรเจกต์" color="#F0F0F0" state="tutorial"/>
                <p>แสดงตัวอย่างของโปรเจกต์ที่เป็นสาธารณะ</p>
                <hr/>
            </div>
        </div>
        </div>
    )
}

export default Selection