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
    <div>
        <h1>ForgotPassword</h1>
        <form onsubmit = {(e)=>handleOnsubmit(e)}>
            <input name = "email"/>
            <button>Reset</button>
        </form>
    </div>
    )
}

export default ForgotPassword