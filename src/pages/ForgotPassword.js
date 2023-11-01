import { sendPasswordResetEmail } from 'firebase/auth'
import React from 'react'
import { auth } from '../until/App2'
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/navbar';
import "../pages/ForgotPassword.css"

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
    <div>
        <Navbar/>
        <h1 style={{textAlign:"center",margin:"14rem 0rem 0rem 0rem"}}>ForgotPassword</h1>
        <form className='handsub' onsubmit = {(e)=>handleOnsubmit(e)}>
            <input  name = "email"/>
            <button className='RT-2'>Reset</button>
        </form>
    </div>
    )
}

export default ForgotPassword