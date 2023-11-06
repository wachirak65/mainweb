import React from 'react'
import "../pages/ChoosePage.css"
import Navbar from '../component/navbar'
<<<<<<< HEAD
import ConfirmBtn from '../component/confirm_btn'
import BackBtn from '../component/back_btn'
import Sidebar from '../component/sidebar'

function ChoosePage() {
    return (
        <div class = "ChoosePageNew">
            <header>
                <Navbar/>
            </header>
            <div class = "All-in-Container">
                <div class="left-on-top">
                <div class = "first-icon">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="black" class="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </div>

                <p class = "text-for-show">เลือกรายการพืชที่เหมาะสม : (สามารถเลือกได้มากที่สุด _ ชนิด)</p>
                <div class = 'button-sort-line'>
                     <button><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>เรียงลำดับ</button>
                </div>
               
                <div class = "Icon-Sec">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </div>
                </div>
                <div class = "line-lefttop">
                    <hr />
                </div>
                <div class="left-on-bottom">
                    <div class="scrollbox">
                        <div class = "scrollbox-inner">
                            <div class="box-scroll">
                                <div class = "inside-scroll">
                                    <div class= "img-scroll">Img</div>
                                    <div class="discript-scroll">
                                        <p>ชื่อ :</p>
                                        <p>ความเหมาะสม :</p>
                                        <p>รายละเอียดอื่นๆ :</p>
                                    </div>

                                </div>
                            </div>
                            <div class="box-scroll">
                                <div class = "inside-scroll">
                                    <div class= "img-scroll">Img</div>
                                    <div class="discript-scroll">
                                        <p>ชื่อ :</p>
                                        <p>ความเหมาะสม :</p>
                                        <p>รายละเอียดอื่นๆ :</p>
                                    </div>

                                </div>
                            </div>
                            <div class="box-scroll">
                                <div class = "inside-scroll">
                                    <div class= "img-scroll">Img</div>
                                    <div class="discript-scroll">
                                        <p>ชื่อ :</p>
                                        <p>ความเหมาะสม :</p>
                                        <p>รายละเอียดอื่นๆ :</p>
                                    </div>

                                </div>
                            </div>
                            <div class="box-scroll">
                                <div class = "inside-scroll">
                                    <div class= "img-scroll">Img</div>
                                    <div class="discript-scroll">
                                        <p>ชื่อ :</p>
                                        <p>ความเหมาะสม :</p>
                                        <p>รายละเอียดอื่นๆ :</p>
                                    </div>

                                </div>
                            </div>
                            <div class="box-scroll">
                                <div class = "inside-scroll">
                                    <div class= "img-scroll">Img</div>
                                    <div class="discript-scroll">
                                        <p>ชื่อ :</p>
                                        <p>ความเหมาะสม :</p>
                                        <p>รายละเอียดอื่นๆ :</p>
                                    </div>

                                </div>
                            </div>
                            <div class="box-scroll">
                                <div class = "inside-scroll">
                                    <div class= "img-scroll">Img</div>
                                    <div class="discript-scroll">
                                        <p>ชื่อ :</p>
                                        <p>ความเหมาะสม :</p>
                                        <p>รายละเอียดอื่นๆ :</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="right-on-container">
                    <p>ประเภทจัดสรรพื้นที่</p>
                    <div class = 'button-right'>
                        <button>แบบพื้นฐาน
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        </button>
                    </div>
                    <div class = "buttom-line-1">
                       <hr /> 
                    </div>
                    
                    <p>พื้นที่เลือกทั้งหมด :</p>
                    <div class = "buttom-line-1">
                       <hr /> 
                    </div>
                    <div>
                        <button>ยืนยัน</button>
                    </div>
                    <div>
                        <button>ย้อนกลับ</button>
                    </div>
                </div>
            </div>
            
                
           
=======

function ChoosePage() {
    return (
        <div class = "row">
            <header>
                <Navbar/>
            </header>
            <div class="main">
                <p>เลือกรายการพืชที่เหมาะสม : (สามารถเลือกได้มากที่สุด 4 ชนิด)</p>
            </div>
            <div class="side">
                <p>ประเภทจัดสรรพื้นที่</p>
                <p>พืชที่เลือกทั้งหมด</p>
            </div>
>>>>>>> a37502186e677990060f7cfcd3315ecc1dc21753
            
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>        </div>
    )
}

export default ChoosePage;
