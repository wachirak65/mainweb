import { sendPasswordResetEmail } from 'firebase/auth'
import React from 'react'
import { auth } from './until/App2'
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {

    const navigate = useNavigate()

    const handleOnsubmit = async(e)=>{
        e.preventDefault();
        const emailVal = e.target.email.value
        sendPasswordResetEmail(auth,emailVal)
        .then(data=>{
            alert("ตรวจสอบอีเมลของคุณ")
            navigate("./component/Login")
        })
        .catch(err=>{
            alert(err.code);
        })
        }
    
    return (
    <div className='container'>
        <header style={{strokeOpacity:"0.8"}} class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
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
        </header>
        <h1 style={{textAlign:"center",margin:"14rem 0rem 0rem 0rem"}}>ForgotPassword</h1>
        <form style={{textAlign:"center",margin:"2rem 0rem 2rem 0rem"}} onsubmit = {(e)=>handleOnsubmit(e)}>
            <input  name = "email"/>
            <button>Reset</button>
        </form>
    </div>
    )
}

export default ForgotPassword