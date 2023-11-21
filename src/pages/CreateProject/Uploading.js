import React from 'react'
import "./Uploading.css"
import { useState } from "react"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from '../../component/navbar'
import BackBtn  from '../../component/back_btn'
import { useUserAuth } from '../../context/UserAuthContext';
import { useCreateProject } from '../../context/CreateProjectContet'

function Uploading() {
    // drag state
    const [dragActive, setDragActive] = React.useState(false);
    const inputRef = React.useRef(null);
    const { user } = useUserAuth();
    const { updateProjectID, updateLandURL, updateClsImg, updateMask } = useCreateProject();

    let navigate = useNavigate();
    // handle drag events
    const handleDrag = function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            // setDragActive(true);
            // console.log(e.dataTransfer.files[0])
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = function(e) {
        e.preventDefault();
        console.log('drop');
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          // at least one file has been dropped so do something
          // handleFiles(e.dataTransfer.files);
          console.log(e.dataTransfer.files[0])
        }
    };

    const handleChange = function(e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
          // at least one file has been selected so do something
          // handleFiles(e.target.files);
        }
    };

    const onButtonClick = async  () => {
        inputRef.current.click();
        await waitForFileSelection();
        setDragActive(true);
    };

    const waitForFileSelection = () => {
        return new Promise(resolve => {
          const fileInput = inputRef.current;
    
          const checkFiles = () => {
            if (fileInput.files.length > 0) {
              resolve();
            } else {
              setTimeout(checkFiles, 100); // ตรวจสอบอีกครั้งใน 100 มิลลิวินาที
            }
          };
    
          checkFiles();
        });
      };
    
    function uploadfile() {
        const file = inputRef.current.files[0];

        if (!file){
            alert('กรุณาเลือกไฟล์ที่จะอัปโหลด');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        
        fetch('http://127.0.0.1:5000/upload', {
            method: "POST",
            body: formData
        })
        .then((response) => {
            if (response.status === 201) {
                return response.json()
            } 
            else
            {
                throw new Error('ไม่สามารถรับข้อมูลได้');
            }
        }).then((data) => {
            createProject(data['url_public']);
            updateLandURL(data['url_public']);
            // postDataToApi(data['url_public']);
            console.log('data:', data['url_public']);
        }).catch((error) => {
            console.error('Error:', error);
        })
    }

    const postDataToApi = async (data) => {
          // ส่งข้อมูลไปที่ API และไม่รอคำตอบ
        await fetch('http://127.0.0.1:5001/segment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'img_url': data
            }),
            }).then((response) => {
            if (response.status === 201) {
                return response.json()
            } 
            else
            {
                throw new Error('ไม่สามารถรับข้อมูลได้');
            }
        }).then((data) => {
            updateClsImg(data['cls_img']);
            updateMask(data['mask']);
            alert("segment success");
        }).catch((error) => {
            console.error('Error:', error);
            alert("segment error");
        });
    
        
      };

    function createProject(url_public) {
        
        fetch('http://127.0.0.1:5000/createProject', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "member": user.email,
                "land_url": url_public
            })
        }).then((response) => {
            if (response.status === 201) {
                navigate("/Locate")
                return response.json()
            } 
            else
            {
                throw new Error('ไม่สามารถรับข้อมูลได้');
            }
        }).then((data) => {
            updateProjectID(data['project_id']);
        }).catch((error) => {
            console.error('Error:', error);
        })
    }
    

    return (
        <div class = "Body-Uploading">
        <Navbar/>
        <div className="content">
            <div class='top-background' style={{backgroundColor:'#F8FDFF'}}>
                <div className="header-title">
                    <p class = "Discription-Create">สร้างโปรเจกต์</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    
                </div>
            </div>
            
            <form className={ dragActive ? 'upload-card-active': 'upload-card'} action="" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
                <input ref={inputRef} type="file" className='input-upload-img' onChange={handleChange}/>
                <label id="label-file-upload" htmlFor="input-upload-img">
                    <div className='label-div'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-cloud-upload" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                            <path fill-rule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"/>
                        </svg>
                        <h5>ลาก & วางไฟล์ของคุณ or <p onClick={onButtonClick}>เปิดโฟลเดอร์</p> เพิ่มเติม</h5>
                        <p>อัพโหลดข้อมูลรูปภาพ สภาพแวดล้อมต่างๆ เพื่อให้ AI ใช้ในการวิเคราะห์ </p>
                    </div> 
                </label>
                <div className={ dragActive ? "drag-element-active":"drag-element"}>
                    <p>ประเภทไฟล์ที่รองรับ JPG , PNG ขนาดสูงสุง 800 MB</p>
                    { dragActive && 
                    <div className="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
                        <p>ไฟล์ที่กำลังอัพโหลด...</p>
                        <div className="construction-area">{inputRef.current.files[0].name}</div>
                        <div className="button-element">

                            <div className="commit-button" onClick={uploadfile}>
                                <p>อัพโหลดและสร้างโปรเจ็ค</p>
                            </div>
                        </div>
                    </div> 
                    }
                    
                </div>
            </form>

        </div>
        <div class='black-btn-div'>
            <BackBtn bg_color='#E7E6E6' title='ย้อนกลับ' onClick={()=>
                    navigate("/Selection")}/>
        </div>
        </div>
    )
}

export default Uploading