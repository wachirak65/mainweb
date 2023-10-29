import React from 'react'

function Dragarea() {
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
        <div className="lander">
            <h3>วาดเส้นพื้นที่ของคุณ</h3>
            <hr/>
        </div>
        <div className='narrow-land'>
            <h5>เครื่องมือสำหรับการวาดพื้นที่</h5>
            <hr/>
            <div className='pencil'><a href="#">ดินสอ</a></div>
            <div className='eraser'><a href="#">ยางลบ</a></div>
            <div className='bin'><a href="#">ลบทั้งหมด</a></div>
            <button style={{marginTop:"5rem"}} type="button" className="w-10 btn btn-m btn-white"><a href='Dragarea' style={{textDecoration:"None",color:"black"}}><img width={"10%"}  src='https://i.pinimg.com/736x/3d/22/7b/3d227b9dcead5eae5402744053822072.jpg'/></a></button>
            <button style={{marginTop:"1rem"}} type="button" className="w-10 btn btn-m btn-white"><a href='Uploading' style={{textDecoration:"None",color:"black"}}><img width={"10%"} src='https://png.pngtree.com/png-vector/20190411/ourlarge/pngtree-vector-right-arrow-icon-png-image_925724.jpg'/></a></button>
            <br/>
            <button style={{marginTop:"5rem"}} type="button" className="w-10 btn btn-m btn-white"><a href='Dragarea' style={{textDecoration:"None",color:"black"}}>ยืนยัน</a></button>
            <br/>
            <button style={{marginTop:"1rem"}} type="button" className="w-10 btn btn-m btn-white"><a href='Uploading' style={{textDecoration:"None",color:"black"}}>ย้อนกลับ</a></button>
        </div>
    </div>
    )
}

export default Dragarea