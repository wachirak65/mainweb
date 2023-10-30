import { createUserWithEmailAndPassword} from "firebase/auth";
import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import "../pages/LoginRegisterpage.css"
import {auth,provider } from "../until/App2"
import { signInWithPopup } from "firebase/auth";
import Navbar from "../component/navbar";
import Arrow from '../assets/icons/arrow_auth.svg'
import google_icon from '../assets/icons/google_icon.svg'
import people_icon from '../assets/icons/register_logo.svg'

function Register () {
    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)
    const [inputs, setInputs] = useState("");
    // const [value, setValue] = useState("")

    // const handleClick =async(e)=>{
    //     const provider = await new GoogleAuthProvider();
    //     return signInWithPopup(auth,provider);
    // }
    const handleChange = (event) => {
        
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const signInWithGoogle = () =>{
        signInWithPopup(auth,provider)
        .then((result)=>{
            console.log(result);
            navigate('../Selection')
            MySwal.fire({
            html:<i>{result.message}</i>,
            icon:"success"})
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('profilePic', profilePic);
        })
        .catch((error) =>{
            console.log(error);
            MySwal.fire({
            html:<i>{error.message}</i>,
            icon:"error",
            })
        });
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth ,inputs)
        
        .then((user)=>{
            console.log(user);
            navigate('../Selection')
            MySwal.fire({
            html:<i>{user.message}</i>,
            icon:"success"})
        }).catch((error) => {
            console.log(error);
            MySwal.fire({
            html:<i>{error.message}</i>,
            icon:"error",
            })
        });
        
    };
    
    return (
    <div>
        <Navbar/>
        
        <div class='authen-center'>
            <div class='authen-form'>
                <div class='header-authen'>
                    <img src={people_icon} alt="arrow-auth-icon" width='40' height='40'/>
                    <h2>สมัครสมาชิก</h2>
                    <br />
                    <div class="big-button"><img src={google_icon} alt="google-icon" width='20' height='20'/><p>เข้าสู่ระบบด้วยบัญชี Google</p></div>
                    <div class='or-line'><p>OR</p></div>
                </div>
                
                <form action="">
                <div class="mb-3">
                        <label for="text-input" class="form-label">ชื่อบัญชี</label>
                        <input type="text" class="form-control" id="text-input" aria-describedby="textHelp" placeholder='Enter your name'/>
                    </div>
                    <div class="mb-3">
                        <label for="email-input" class="form-label">อีเมล</label>
                        <input type="email" class="form-control" id="email-input" aria-describedby="emailHelp" placeholder='username@gmail.com'/>
                    </div>
                    <div class="mb-3">
                        <div class='label-content'>
                            <label for="password-input" class="form-label" >รหัสผ่าน <p>(ความยาวอย่างน้อย จํานวน6-16 ตัวอักษร)</p></label>
                        </div>
                        <input type="password" class="form-control" id="password-input" placeholder='Enter your password'/>
                    </div>
                    <div class='big-button-login register-btn'>สมัครสมาชิก</div>
                </form>
                
            </div>
            <p class='end-authen'>มีบัญชีอยู่แล้ว ? <a href="/">เข้าสู่ระบบ</a></p>
        </div>
    </div>
    )
}
export default  Register


