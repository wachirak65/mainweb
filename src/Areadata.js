import React from 'react';
import  {  useState } from 'react';

function Areadata() {
    const [inputs, setInputs] = useState("");
    const handleChange = (event) => {
        
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

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
            <select name="cars" id="cars">
                <option value="Guest" selected>Guest</option>
                <option value="volvo">โหมดผู้ใช้ทั่วไป</option>
                <option value="saab">สมัครสมาชิก</option>
            </select>
        </header>
        <div className='first-container'>
            <h2>กรอกข้อมูลพื้นฐานของคุณ</h2>
            <label>ชื่อโปรเจกต์:
                <input 
                        className='form-control'
                        type="text" 
                        name="username" 
                        maxLength={16}
                        value={inputs.username || ""} 
                        onChange={handleChange}
                        placeholder='ความยาวไม่เกิน 16 ตัวอักษร '
                    />
            </label>
            <br/>
            <label>ต้นทุนต่อรอบ:
                <input 
                        className='form-control'
                        type="text" 
                        name="number" 
                        value={inputs.number || ""} 
                        onChange={handleChange}
                        placeholder='แสดงยอดตัวเลขต้นทุนต่อรอบ'
                    />บาท
            </label>
            <br/>
            <label>พืชที่ปลูกในปัจจุบัน:
                <input 
                        className='form-control'
                        type="text" 
                        name="plant" 
                        value={inputs.plant || ""} 
                        onChange={handleChange}
                        placeholder='เลือกชนิดของพืช'
                    />
                    <button type='submit' class="w-20 btn btn-m btn-white">ไม่มี</button>
            </label>
            <br/>
            <label>พืชที่เคยปลูก:
                <input 
                        className='form-control'
                        type="text" 
                        name="plants" 
                        value={inputs.plants || ""} 
                        onChange={handleChange}
                        placeholder='เลือกชนิดของพืช'
                    />
                    <button type='submit' class="w-20 btn btn-m btn-white">ไม่มี</button>
            </label>
            <br/>
            <label>กำลังคนที่มีในการดูแล :
                <input 
                        className='form-control'
                        type="text" 
                        name="human" 
                        value={inputs.human || ""} 
                        onChange={handleChange}
                        placeholder='กรอกเป็นตัวเลข'
                    />คน
            </label>
            <br/>
            <label>ระยะเวลาที่สามารถรอได้ :
                <input 
                        className='form-control'
                        type="text" 
                        name="human" 
                        value={inputs.human || ""} 
                        onChange={handleChange}
                        placeholder='กรอกเป็นตัวเลข'
                    />
                <button type='submit' class="w-20 btn btn-m btn-white" maxLength={31} >วัน</button>
                <button type='submit' class="w-20 btn btn-m btn-white" maxLength={12}>เดือน</button>
                <button type='submit' class="w-20 btn btn-m btn-white">ปี</button>
            </label>
            <footer class="down-container">
                <button style={{marginTop:"7rem"}} type="button" className="w-10 btn btn-m btn-white"><a href='Dragarea' style={{textDecoration:"None",color:"black"}}>ย้อนกลับ</a></button>
                <button style={{marginTop:"7rem"}} type="button" className="w-10 btn btn-m btn-white"><a href='' style={{textDecoration:"None",color:"black"}}>เริ่มประมวลผลพื้นที่</a></button>
            </footer>
        </div>
    </div>
    )
}

export default Areadata