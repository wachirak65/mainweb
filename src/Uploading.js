import React from 'react'
import "./Uploading.css"
import { useState } from "react"
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Uploading() {
    const[ file,setFile ] = useState(null);
    const [progress,setProgress]=useState({started:false,pc:0});
    const [msg,setMsg] = useState(null);
    const navigate = useNavigate()

    function handleUploading(){
        if(!file) {
            console.log("ไม่มีไฟล์ให้อัปโหลด");
            return;
        }
        const finds = new FormData();
        finds.append("file",file);

        setMsg("ไฟล์ที่กำลังอัปโหลด...");
        setProgress(prevState =>{
            return {...prevState, started:true}
        })
        axios.post('http://httpbin.org/post',finds,{
            onUploadProgress:(progressEvent)=>{
                console.log(progressEvent.progress*100)},
            headers:{
                "Custom-Header":"value",
            }
        })
        .then(result=>{
            setMsg("ไฟล์ที่อัปโหลดเสร็จสิ้น");
            navigate("./Homepage")
            console.log(result.data);
        })
        .catch(err=>{
            setMsg("ไฟล์ที่อัปโหลดล้มเหลว...");
            console.error(err)
        });
    }
    return (
        <div class="container" >
        <header style={{boxShadow:"5px 5px 5px 5px rgba(0,0,0,0.2)",strokeOpacity:"0.8"}} class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a  class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
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
            {/* <a href='#'  style={{textDecoration:"none"}}>เปิดโฟลเดอร์</a> */}
        </header>
        <div class="container-2">
            <img src='https://thumb.ac-illust.com/b8/b80225a03252dc8ee79e209da3b57fc3_t.jpeg' width={'20%'} height={"20%"}/>
            <h4 style={{textAlign:"center",position:"relative",left:"7%"}}>ลาก & วางไฟล์ของคุณ or <input style={{color:"green",fontSize:"24px"}} onChange={(e)=>{setFile(e.target.files[0])}} type='file'></input></h4>
            <p>อัพโหลดข้อมูลรูปภาพ สภาพแวดล้อมต่างๆ เพื่อให้ AI ใช้ในการวิเคราะห์ </p>
            <hr />
        </div>
            <p style={{textAlign:"center"}}>ประเภทไฟล์ที่รองรับ JPG , PNG ขนาดสูงสุดครั้งละ 800 MB</p>
            {msg && <div style={{textAlign:"center"}}>{msg}</div>}
            {progress.started && <progress style={{color:"green",textAlign:"center",position:"relative",left:"44%"}} min={0} max={100} value={progress.pc}></progress>}
            <br/>
            <button onClick={handleUploading} style={{left:"42.5%",position:'relative'}} type="button" className="w-10 btn btn-l btn-white"><a href='#' style={{textDecoration:"None",color:"black"}}>อัปโหลดและสร้างโปรเจค</a></button>
        <footer>
            <button style={{marginTop:"7rem"}} type="button" className="w-10 btn btn-m btn-white"><a href='Uploading' style={{textDecoration:"None",color:"black"}}>ย้อนกลับ</a></button>
        </footer>
        </div>
        
    )
}

export default Uploading