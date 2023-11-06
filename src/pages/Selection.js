import React from 'react'
import "./Selection.css"
import Navbar from '../component/navbar.js'
import SelectButton from '../component/selection_button'

function Selection() {
    return (
<<<<<<< HEAD
        <div class='background'>
=======
        <div>
>>>>>>> a37502186e677990060f7cfcd3315ecc1dc21753
        <Navbar/>
        <div className='content'>
            <div class='top-background'></div>
            <div className="selection-card">
                <h1>กรุณาเลือกรายการทำการ</h1>
<<<<<<< HEAD
                <div class = "Create-pj">
                    <SelectButton title="สร้างโปรเจกต์" color='#CDFFF3' state="create" width={281} height={40}/>
                </div>                    
                    <p id='discription-1' class = "discription">เริ่มต้นสร้างโปรเจกต์ใหม่</p>
                <SelectButton title="เข้าร่วมโปรเจกต์" color="#C1F5A9" state="join" width={281} height={40}/>
                <p class = "discription">เข้าร่วมโปรเจกต์กับคนอื่นๆผ่านหมายเลข</p>
                <SelectButton title="ตัวอย่างโปรเจกต์" color="#F0F0F0" state="public" width={281} height={40}/>
                <p class = "discription">แสดงตัวอย่างของโปรเจกต์ที่เป็นสาธารณะ</p>
=======
                <SelectButton title="สร้างโปรเจกต์" color='#CDFFF3' state="create"/>
                <p>เริ่มต้นสร้างโปรเจกต์ใหม่</p>
                <SelectButton title="เข้าร่วมโปรเจกต์" color="#C1F5A9" state="join"/>
                <p>เข้าร่วมโปรเจกต์กับคนอื่นๆผ่านหมายเลข</p>
                <SelectButton title="ตัวอย่างโปรเจกต์" color="#F0F0F0" state="tutorial"/>
                <p>แสดงตัวอย่างของโปรเจกต์ที่เป็นสาธารณะ</p>
>>>>>>> a37502186e677990060f7cfcd3315ecc1dc21753
                <hr/>
            </div>
        </div>
        </div>
    )
}

export default Selection