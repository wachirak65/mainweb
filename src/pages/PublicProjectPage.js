import React from 'react'
import Navbar from '../component/navbar'
import './PublicProjectPage.css'
import SelectButton from '../component/selection_button'
import ProjectCard from '../component/project_card'
import BackBtn from '../component/back_btn'

function PublicProjectPage() {
    return (
        <div class='background'>
           <Navbar/> 
           <div className="public-project-bar">
                <div className="hearder-bar">
                    <div className="title-header-bar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                        </svg>
                        <h1>โปรเจกต์สาธารณะ</h1>
                    </div>
                    <hr />
                    <p>เป็นโปรเจกต์ที่ได้รับการยินยอมต่อการเปิดเผยต่อสาธารณะ</p>
                </div>
                <div className="tail-bar">
                    <SelectButton title="สร้างโปรเจกต์" color='#CDFFF3' state="create" width={190} height={40}/>
                    <div className="space-row"></div>
                    <SelectButton title="เข้าร่วมโปรเจกต์" color="#C1F5A9" state="join" width={190} height={40}/>
                </div>
           </div>
           <div className="public-project-content">
                <div className="public-project-view">
                    <ProjectCard url_img='http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSWyCtondkGyVRIr2LoxfFmrVomZE1zoxLa8iqCxSX76MWkmXHPNgTWvm88xMtEazloaB_5osOSmyY0csUKgpA' project_name='สบายดีไร่นา' project_owner='นาย สวัสดี อังคาร' viewer={200} comment={15} love={200}/>
                    
                </div>
                <div className="public-project-tool">
                    <div className="tool">
                        <div class="dropdown2">
                            <div class="dropdown-button2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                <h5 class="dropdown-title2">เรียงลำดับ</h5>
                            </div>
                            <div class="dropdown-content2">
                                <a href="#">ผู้ชมมาก - น้อย</a>
                                <a href="#">ผู้ชมน้อย - มาก</a>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                    </div>
                    <BackBtn bg_color='#E7E6E6' title='ย้อนกลับ' onClick={()=>
                        console.log("back")}/>
                </div>
           </div>
        </div>
    )
}

export default PublicProjectPage;