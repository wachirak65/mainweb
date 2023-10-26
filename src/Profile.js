import React from 'react'

function Profile() {
    return (
        <div class="container" >
        <header style={{boxShadow:"5px 5px 5px 5px rgba(0,0,0,0.2)",strokeOpacity:"0.8"}} class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a  class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none" href='Profile'>
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
        <div className='main-container' >
            <h5>UNTIRED</h5>
            <h1>ยินดีต้อนรับเข้าสู่เว็บไซต์</h1>
            <p>“ท่านไม่ต้องเสียเวลาและทรัพยากรในการทดลองผิดพลาดและทำลายพืชอีกต่อไป ให้โดรนบินสำรวจของเราช่วยเสริมสร้างฐานข้อมูลเพื่อการตัดสินใจที่แม่นยำและปลอดภัย เริ่มเพิ่มประสิทธิภาพในการเกษตรของคุณด้วยโดรนบินสำรวจเราวันนี้ ”</p>
        </div>
        <footer className="foot-container">
            <p>our Services</p>
            <h3>แพ็คเกจทั้งหมด</h3>
            <div className='service'>
                <div>
                    <img src=''/>
                    <h4>แพ็คเกจ 1</h4>
                    <p>คำอธิบายต่างๆ</p>
                </div>
                <div>
                    <img src=''/>
                    <h4>แพ็คเกจ 2</h4>
                    <p>คำอธิบายต่างๆ</p>
                </div>
                <div>
                    <img src=''/>
                    <h4>แพ็คเกจ 3</h4>
                    <p>คำอธิบายต่างๆ</p>
                </div>
            </div>
        </footer>
        </div>
    )
}

export default Profile