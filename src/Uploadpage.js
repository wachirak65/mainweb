import React from 'react'
import "./Uploadpage.css"

function Uploadpage() {
    return (
        <div>
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
            </div>
            <article class="before">
                <h6 style={{textAlign:'left', padding:"15px"}} >ระบุพิกัดสถานที่ <img src='https://png.pngtree.com/png-vector/20190507/ourmid/pngtree-vector-location-icon-png-image_1025829.jpg' width={"10%"}/></h6>
                <form novalidate="" method="post" action="#" class="transparentTextEditing" >
                    <input placeholder="ค้นหา Google Map" autocomplete="on" autocorrect="on" class="flt-text-editing transparentTextEditing" />
                        <a class="submitBtn" type="submit" ><img width={"10%"}  style={{position:"relative",left:"50%",transform:"translateY(-110%)"}} src='https://cdn.icon-icons.com/icons2/1129/PNG/512/searchmagnifierinterfacesymbol1_79893.png'/></a>
                </form>
                <hr/>
                <h6 ><img src='https://img2.thaipng.com/20180621/acv/kisspng-grace-covenant-church-seminole-computer-icons-0-location-mark-5b2bc0d792a869.6669111315295940716007.jpg' width={"15%"}/>ตำแหน่งที่กำลังปักหมุด :
                    <br/>
                <iframe src="https://www.google.com/maps/embed?
                pb=!1m14!1m8!1m3!1d120867.06238707463!2d98.9331292!
                3d18.793888!3m2!1i1024!2i768!4f13.1!3m3!1m2!
                1s0x30da3ab069eed275%3A0x8f895bdf1c2a33af!
                2sArcobaleno%20Italian%20Restaurant!5e0!3m2!
                1sth!2sth!4v1698573157298!5m2!1sth!2sth" 
                width="220" height="250"  
                allowfullscreen 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title='Responsive Google Map'>
        
                </iframe>
                </h6>
                <hr/>
                <button style={{marginTop:"3rem"}} type="button" className="w-10 btn btn-m btn-white"><a href='Dragarea' style={{textDecoration:"None",color:"black"}}>ยืนยัน</a></button>
                <br/>
                <button style={{marginTop:"1rem"}} type="button" className="w-10 btn btn-m btn-white"><a href='Uploading' style={{textDecoration:"None",color:"black"}}>ย้อนกลับ</a></button>
            </article>
            <section class="After">
                <iframe src="https://www.google.com/maps/embed?
                pb=!1m14!1m8!1m3!1d120867.06238707463!2d98.9331292!
                3d18.793888!3m2!1i1024!2i768!4f13.1!3m3!1m2!
                1s0x30da3ab069eed275%3A0x8f895bdf1c2a33af!
                2sArcobaleno%20Italian%20Restaurant!5e0!3m2!
                1sth!2sth!4v1698573157298!5m2!1sth!2sth" 
                width="1100" height="600"  
                allowfullscreen 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title='Responsive Google Map'>
        
                </iframe>
            </section>
        </div>
    )
}

export default Uploadpage