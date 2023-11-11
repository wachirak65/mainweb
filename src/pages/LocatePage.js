import React from 'react'
import "../pages/LocatePage.css"
import Navbar from '../component/navbar'
import ConfirmBtn from '../component/confirm_btn'
import BackBtn from '../component/back_btn'

function Locate() {
    return (
        <div class = "main-all">
            <header>
                <Navbar/>
            </header>
            <span class="layout">
                <div class="left-card">
                    <div class="LocationSearch"> 
                        <p>ระบุพิกัดสถานที่</p>

                        <i class = 'icon-geo1' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        </i>
                    </div>
                    <div>
                        <input class = "inputLocate" type="text" placeholder="ค้นหา"/>
                        <hr class="line" />
                    </div>

                    <div class="LocationShow">
                        <p class="locateShowInside">ตำแหน่งที่กำลังปักหมุด</p></div>
                        <i class = 'icon-geo2'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
                        </svg></i>
                        <hr class="line2" />
                        <div class = "btn-all">
                                <div class='btn-cf-1'>
                                <ConfirmBtn  bg_color='#E4E4E4' title='ยืนยัน' onClick={()=>
                                    console.log("confirm")}/>
                            </div>
                            <div class='btn-back-1' >
                                <BackBtn bg_color='#E7E6E6' title='ย้อนกลับ' onClick={()=>
                                        console.log("back")}/>
                            </div>
                        </div>
                        
                        
                </div>
                <div class="right-card">
                    <div> <iframe class="Map" src="https://www.google.com/maps/embed?
                        pb=!1m14!1m8!1m3!1d120867.06238707463!2d98.9331292!
                        3d18.793888!3m2!1i1024!2i768!4f13.1!3m3!1m2!
                        1s0x30da3ab069eed275%3A0x8f895bdf1c2a33af!
                        2sArcobaleno%20Italian%20Restaurant!5e0!3m2!
                        1sth!2sth!4v1698573157298!5m2!1sth!2sth" 
                allowfullscreen 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title='Responsive Google Map'>
                </iframe></div>
                    
                    
                </div>
            </span>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>        </div>
    )
}

export default Locate;