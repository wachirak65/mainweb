import React from 'react';
import  {  useState } from 'react';
import "./Areadata.css"
import Navbar from '../component/navbar';
import BackBtn from '../component/back_btn';
import ConfirmBtn from '../component/confirm_btn';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from '../component/choosepage/loadingscreen';

function Areadata() {
    let navigate = useNavigate();
    const LocateResult = JSON.parse(localStorage.getItem('LocationResult'));
    const areaResult = JSON.parse(localStorage.getItem('areaAll'));
    const [loading, setLoading] = useState(false);
    
    // const projectname = document.getElementById('projectname').value;
    let cost 
    let time 
    let manpower 
    let nameofProject

    function sendData() {
        cost = document.getElementById("costInput").value;
        time = document.getElementById("timeInput").value;
        manpower = document.getElementById("manpowerInput").value;
        const postData = {
            area: parseFloat(areaResult[0]),
            cost: parseFloat(cost),
            time: parseInt(time),
            manpower: parseInt(manpower),
            lat: parseFloat(LocateResult.latitude),
            long: parseFloat(LocateResult.longitude)
        };

        
        fetch('http://127.0.0.1:5000/ranking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log("message"  , data.message);
            console.log("ranking"  , data.ranking);
            console.log("percent_ranking"  , data.percent_ranking);
            localStorage.setItem('RankingData', JSON.stringify(data.ranking));
            localStorage.setItem('PercentData' , JSON.stringify(data.percent_ranking)) ; 
            const checkLocalStorage = setInterval(() => {
                const RankingData = JSON.parse(localStorage.getItem('RankingData'));

                if (RankingData) {
                    clearInterval(checkLocalStorage); 
                    setLoading(false);
                    navigate("/ChoosePage");
                }
            }, 100);
        })
        .catch(error => {
            console.error('Error:', error);
        });}
    

    

    const [inputs, setInputs] = useState("");
    const handleChange = (event) => {
        
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    return (
        loading ? (
            <LoadingScreen timetoload={9000} />
        ) : (
        <div class = "all-AreaData" >
        <Navbar/>  
        <div class='top-background-3'>
            <h4>กรอกข้อมูลพื้นฐานของคุณ</h4>
        </div>      
        <div className='first-container'>
            
            <label id='p1'>ชื่อโปรเจกต์:
                <div className='FCL-1'>
                <input 
                        id='nameofProject'
                        className='form-control'
                        type="text" 
                        name="username" 
                        maxLength={16}
                        value={inputs.username || ""} 
                        onChange={handleChange}
                        placeholder='ความยาวไม่เกิน 16 ตัวอักษร '
                        required
                    />
                    </div>
            </label>
            <br/>
            <label id='p2'>ต้นทุนต่อรอบ:
                <div className='FCL-2'>
                <input 
                        id='costInput'
                        className='form-control'
                        type="number" 
                        name="number" 
                        value={inputs.number || ""} 
                        onChange={handleChange}
                        placeholder='แสดงยอดตัวเลขต้นทุนต่อรอบ'
                        required
                    /></div><p style={{position:"relative", right:"-170%",transform:"translateY(-250%)"}}>บาท</p>
            </label>
            <br/>
            <label style={{marginTop:"-2rem"}} id='p3'>พืชที่ปลูกในปัจจุบัน:
                <div className='FCL-3'>
                <input 
                        
                        className='form-control'
                        type="text" 
                        name="plant" 
                        value={inputs.plant || ""} 
                        onChange={handleChange}
                        placeholder='เลือกชนิดของพืช'
                        required
                    /></div>
                    <button id='none-btn' type='submit' class="w-20 btn btn-m btn-white nothing-1">ไม่มี</button>
            </label>
            <br/>
            <label style={{marginTop:"-2rem"}} id='p4'>พืชที่เคยปลูก:
            <div className='FCL-4'>
                <input 
                        className='form-control'
                        type="text" 
                        name="plants" 
                        value={inputs.plants || ""} 
                        onChange={handleChange}
                        placeholder='เลือกชนิดของพืช'
                        required
                    /></div>
                    <button id='none-btn-2' type='submit' class="w-20 btn btn-m btn-white nothing-2">ไม่มี</button>
            </label>
            <br/>
            <label style={{marginTop:"-2rem"}} id='p5'>กำลังคนที่มีในการดูแล :
                <div className='FCL-5'>
                <input 
                        id='timeInput'
                        className='form-control'
                        type="number" 
                        name="human" 
                        value={inputs.human || ""} 
                        onChange={handleChange}
                        placeholder='กรอกเป็นตัวเลข'
                        required
                    /></div><p style={{position:"relative", right:"-190%",transform:"translateY(-260%)"}}>คน</p>
            </label>
            <br/>
            <label style={{marginTop:"-2rem"}} id='p6'>ระยะเวลาที่สามารถรอได้ :
            <div className='FCL-6'>
                <input 
                        id='manpowerInput'
                        className='form-control'
                        type="number" 
                        name="humans" 
                        value={inputs.humans || ""} 
                        onChange={handleChange}
                        placeholder='กรอกเป็นตัวเลข'
                        required
                    /></div>
                <div className='SSS-1'>
                    <button type='submit' class="w-20 btn btn-m btn-white day" maxLength={31} >วัน</button> </div>
                    <div className='SSS-2'>
                    <button type='submit' class="w-20 btn btn-m btn-white month" maxLength={12}>เดือน</button></div>
                    <div className='SSS-3'><button type='submit' class="w-20 btn btn-m btn-white year">ปี</button></div>
            <div class="down-container">
                <div class='black-btn-div-4'>
                    <BackBtn bg_color='#E7E6E6' title='ย้อนกลับ' onClick={()=>
                            navigate('dragareas')}/>
                </div>
                <div class='button-state-4'>
                    <ConfirmBtn  bg_color='#d9fac8' title='เริ่มประมวลพื้นที่' onClick={()=> {
                        cost = document.getElementById("costInput").value;
                        time = document.getElementById("timeInput").value;
                        manpower = document.getElementById("manpowerInput").value;
                        nameofProject = document.getElementById('nameofProject').value;
                        if (cost.trim() === '' || time.trim() === '' || manpower.trim() === '' || nameofProject.trim() === '') {
                            alert("กรุณากรอกข้อมูลในทุกช่อง");
                            return false; // ไม่ไปหน้าอื่น
                        }else{
                            sendData();
                            setLoading(true)
                        }
                    }
                       
                    }/>
                </div>
            </div>
            </label>
            
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </div>)
    )
}

export default Areadata