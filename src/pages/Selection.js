import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Selection.css"
import Navbar from '../component/navbar.js'
import SelectButton from '../component/selection_button'
function Selection() {
    let navigate = useNavigate();

    return (
        <div class='background'>
        <Navbar/>
        <div className='content'>
            <div class='top-background'></div>
            <div className="selection-card">
                <h1>กรุณาเลือกรายการทำการ</h1>
                
                <div class = "Create-pj">
                    <SelectButton title="สร้างโปรเจกต์" color='#CDFFF3' state="create" width={281} height={40} click_method={()=>navigate('/Locate')}/>
                </div>                    
                    <p id='discription-1' class = "discription">เริ่มต้นสร้างโปรเจกต์ใหม่</p>
                <div className="Join-pj">
                    <SelectButton title="เข้าร่วมโปรเจกต์" color="#C1F5A9" state="join" width={281} height={40} click_method={()=>navigate("/JoinProject")}/>
                </div>
                <p class = "discription">เข้าร่วมโปรเจกต์กับคนอื่นๆผ่านหมายเลข</p>
                <div className="Join-pj">
                  <SelectButton title="ตัวอย่างโปรเจกต์" color="#F0F0F0" state="public" width={281} height={40} click_method={()=>navigate("/PublicProject")}/>
                </div>
                <p class = "discription">แสดงตัวอย่างของโปรเจกต์ที่เป็นสาธารณะ</p>
                <hr/>
            </div>
        </div>
        </div>
    )
}

export default Selection