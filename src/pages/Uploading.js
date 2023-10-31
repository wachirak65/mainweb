import React from 'react'
import "./Uploading.css"
import { useState } from "react"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/navbar'
import BackBtn  from '../component/back_btn'
import OvalButton from '../component/oval_button'
import SelectButton from '../component/selection_button';

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
        <div>
        <Navbar/>
        <div className="contents">
            <div class='top-background'>
                <div class='SB-1'>
                    <SelectButton title="สร้างโปรเจกต์" color='white' state="create"/>
                </div>
            </div>
            <div class="container-2">
            <svg width="69" height="60" viewBox="0 0 69 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.1366 14.7458L36.2288 14.7733L36.2328 14.7688C36.6705 14.8481 37.1047 14.586 37.2332 14.1519C38.4049 10.2152 42.096 7.46504 46.2084 7.46504C46.6953 7.46504 47.0901 7.07016 47.0901 6.5833C47.0901 6.09643 46.6952 5.70156 46.2084 5.70156C41.1542 5.70156 36.9071 9.06665 35.5433 13.6493C35.4042 14.1162 35.6701 14.6067 36.1366 14.7458Z" fill="#088586" stroke="#F9FFF9" stroke-width="0.3"/>
                <path d="M56.4523 42.4384H52.062C51.658 42.4384 51.3302 42.1107 51.3302 41.7067C51.3302 41.3027 51.6579 40.9749 52.062 40.9749H56.4523C62.5042 40.9749 67.4283 36.0509 67.4283 29.999C67.4283 23.9471 62.5042 19.023 56.4523 19.023H56.3467C56.1345 19.023 55.9328 18.9311 55.7937 18.7706C55.6547 18.6101 55.592 18.3974 55.6223 18.1873C55.6877 17.7315 55.7206 17.2737 55.7206 16.8279C55.7206 11.5829 51.4529 7.31531 46.208 7.31531C44.1675 7.31531 42.2216 7.95296 40.5804 9.15978C40.2198 9.42478 39.7076 9.30718 39.499 8.91047C34.851 0.0596993 22.7108 -1.12887 16.4168 6.57053C13.7653 9.81417 12.7236 14.0336 13.5583 18.146C13.6503 18.6002 13.3028 19.0236 12.8412 19.0236H12.548C6.49615 19.0236 1.57208 23.9477 1.57208 29.9996C1.57208 36.0514 6.49615 40.9755 12.548 40.9755H16.9384C17.3424 40.9755 17.6701 41.3032 17.6701 41.7072C17.6701 42.1113 17.3424 42.439 16.9384 42.439H12.548C5.68905 42.439 0.108551 36.8585 0.108551 29.9995C0.108551 23.3329 5.3801 17.8742 11.9736 17.5731C11.3543 13.3066 12.5386 9.00295 15.2836 5.64437C22.0223 -2.5996 34.9365 -1.67556 40.3957 7.51707C42.1372 6.42522 44.1301 5.85244 46.2078 5.85244C52.5623 5.85244 57.5977 11.261 57.1571 17.58C63.6899 17.9463 68.8915 23.3763 68.8915 29.999C68.8915 36.8585 63.311 42.4384 56.452 42.4384L56.4523 42.4384Z" fill="#088586"/>
                <path d="M15.9586 41.2935C15.9586 51.4634 24.2322 59.737 34.402 59.737C44.572 59.737 52.8455 51.4633 52.8455 41.2935C52.8455 31.1235 44.572 22.85 34.402 22.85C24.2321 22.85 15.9586 31.1237 15.9586 41.2935ZM17.7224 41.2935C17.7224 32.0966 25.205 24.6138 34.402 24.6138C43.5989 24.6138 51.0817 32.0964 51.0817 41.2935C51.0817 50.4904 43.5989 57.9732 34.402 57.9732C25.2051 57.9732 17.7224 50.4905 17.7224 41.2935Z" fill="#088586" stroke="#F9FFF9" stroke-width="0.3"/>
                <path d="M34.0513 48.6577C34.0513 49.0363 34.3584 49.3434 34.737 49.3434C35.1156 49.3434 35.4227 49.0367 35.4227 48.6577V34.7291C35.4227 34.3504 35.1157 34.0434 34.737 34.0434C34.3584 34.0434 34.0513 34.3504 34.0513 34.7291V48.6577Z" fill="#088586" stroke="#483EA8" stroke-width="0.3"/>
                <path d="M34.7367 35.7004L30.936 39.5011L34.7367 35.7004ZM34.7367 35.7004L38.5374 39.5012C38.6711 39.6349 38.8472 39.702 39.0223 39.702L34.7367 35.7004ZM29.9661 39.5012C30.2339 39.769 30.6683 39.7691 30.9359 39.5012L39.0223 39.702C39.1971 39.702 39.3733 39.6355 39.5072 39.5011C39.7751 39.2332 39.775 38.7992 39.5072 38.5314L35.2215 34.2457C34.9537 33.9779 34.5193 33.9778 34.2517 34.2457C34.2517 34.2458 34.2517 34.2458 34.2517 34.2458L29.9661 38.5314C29.6982 38.7993 29.6982 39.2333 29.9661 39.5012Z" fill="#088586" stroke="#483EA8" stroke-width="0.3"/>
            </svg>
                <h4 style={{position:"relative",left:"7%"}}>ลาก & วางไฟล์ของคุณ or <input className='choose-1' style={{color:"green",fontSize:"24px"}} onChange={(e)=>{setFile(e.target.files[0])}} type='file'></input></h4>
                <p>อัพโหลดข้อมูลรูปภาพ สภาพแวดล้อมต่างๆ เพื่อให้ AI ใช้ในการวิเคราะห์ </p>
                <hr />
            </div>
            <p style={{paddingLeft:"50px" ,textAlign:'center',transform:"translateY(-350%)"}}>ประเภทไฟล์ที่รองรับ JPG , PNG ขนาดสูงสุดครั้งละ 800 MB</p>
            {msg && <div style={{textAlign:"center",position:"relative",left:"-1%"}}>{msg}</div>}
            {progress.started && <progress style={{color:"green",textAlign:"center",position:"relative",left:"44%"}} min={0} max={100} value={progress.pc}></progress>}
            <br/>
            <div className="last-container-1">
                <OvalButton onClick={handleUploading} title="อัพโหลดและสร้างโปรเจ็ค" color="#BEEFC3" next_route={()=>navigate('Login')}/>
            </div>
            </div>
        <footer className='f-1'>
            <div class='black-btn-div-1'>
                <BackBtn bg_color='#E7E6E6' title='ย้อนกลับ' onClick={()=>
                        console.log("back")}/>
            </div>
        </footer>
        </div>
    )
}

export default Uploading