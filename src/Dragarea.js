import React from 'react'
import "./Dragarea.css"

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
            <iframe src="https://www.google.com/maps/embed?
            pb=!1m18!1m12!1m3!1d14402.26277481794!2d99.44042693145019!
            3d18.3019556926541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13
            .1!3m3!1m2!1s0x30d96b7afc67151d%3A0xae15ba055913ba7a!2sMr.
            %20Lasagna%20Lampang!5e1!3m2!1sth!2sth!4v1698581952579!5m2!1sth!2sth" 
            width="800" height="450" 
            allowfullscreen
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title='Responsive Google Earth'></iframe>
        </div>
        <div className='narrow-land'>
            <h5>เครื่องมือสำหรับการวาดพื้นที่</h5>
            <hr/>
            <div className='pencil'><a href="#"><img width={"10%"} src='https://png.pngtree.com/png-clipart/20210120/ourlarge/pngtree-illustration-thick-pencil-clipart-black-and-white-png-image_2747230.jpg'/>ดินสอ</a></div>
            <div className='eraser'><a href="#"><img width={"10%"} src='https://png.pngtree.com/element_our/png/20181226/rubber-line-black-icon-png_281637.jpg'/>ยางลบ</a></div>
            <div className='bin'><a href="#"><img width={"10%"} src='https://e7.pngegg.com/pngimages/138/884/png-clipart-rubbish-bins-waste-paper-baskets-computer-icons-encapsulated-postscript-others-miscellaneous-cdr.png'/>ลบทั้งหมด</a></div>
            <button style={{marginTop:"7rem"}} type="button" className="btn btn-s btn-white arrow-1"><a href='Dragarea' style={{textDecoration:"None",color:"black"}} ><img width={"50%"} src='https://i.pinimg.com/736x/3d/22/7b/3d227b9dcead5eae5402744053822072.jpg'/></a></button>
            <button style={{marginTop:"7rem"}} type="button" className="btn btn-s btn-white arrow-2"><a href='Uploading' style={{textDecoration:"None",color:"black"}}><img width={"50%"} src='https://png.pngtree.com/png-vector/20190411/ourlarge/pngtree-vector-right-arrow-icon-png-image_925724.jpg'/></a></button>
            <br/>
            <button style={{marginTop:"3rem"}} type="button" className="w-10 btn btn-m btn-white"><a href='Areadata' style={{textDecoration:"None",color:"black"}}>ยืนยัน</a></button>
            <br/>
            <button style={{marginTop:"1rem"}} type="button" className="w-10 btn btn-m btn-white"><a href='Uploadpage' style={{textDecoration:"None",color:"black"}}>ย้อนกลับ</a></button>
        </div>
    </div>
    )
}

export default Dragarea