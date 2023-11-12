import { createUserWithEmailAndPassword} from "firebase/auth";
import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import "../pages/LoginRegisterpage.css"
import {auth,provider } from "../until/App2"
import { signInWithPopup } from "firebase/auth";
import Navbar from "../component/navbar";
import google_icon from '../assets/icons/google_icon.svg'
import people_icon from '../assets/icons/register_logo.svg'
import { useUserAuth } from "../context/UserAuthContext";

function Register () {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError ] = useState(""); 
    const { signUp, SignUpUsingGoogle } = useUserAuth();

    let navigate = useNavigate();

    const handleGoogleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await SignUpUsingGoogle();
            navigate("/");
        } catch (err) {
            console.log("error:", err.message);
            setError(err.message)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await signUp(email, password);
            navigate("/welcome")
        } catch (err) {
            console.log("error:", err.message);
            setError(err.message);
        }
    }

    return (
    <div class='background'>
        <Navbar/>
        
        <div class='authen-center'>
            <div class='authen-form register-from'>
                <div class='header-authen'>
                    <img src={people_icon} alt="arrow-auth-icon" width='40' height='40'/>
                    <h2>สมัครสมาชิก</h2>
                    <br />
                    <div class="big-button" onClick={handleGoogleSubmit}><img src={google_icon} alt="google-icon" width='20' height='20'/><p>เข้าสู่ระบบด้วยบัญชี Google</p></div>
                    <div class='or-line'><p>OR</p></div>
                </div>
                
                <form>
                <div class="mb-3">
                        <label for="text-input" class="form-label">ชื่อบัญชี</label>
                        <input type="text" class="form-control" id="text-input" aria-describedby="textHelp" placeholder='Enter your name'
                            onChange={
                                (e)=> setUsername(e.target.value)
                            }
                        />
                    </div>
                    <div class="mb-3">
                        <label for="email-input" class="form-label">อีเมล</label>
                        <input type="email" class="form-control" id="email-input" aria-describedby="emailHelp" placeholder='username@gmail.com'
                            onChange={
                                (e)=> setEmail(e.target.value)
                            }
                        />
                    </div>
                    <div class="mb-3">
                        <div class='label-content'>
                            <label for="password-input" class="form-label" >รหัสผ่าน <p>(ความยาวอย่างน้อย จํานวน 6-16 ตัวอักษร)</p></label>
                        </div>
                        <input type="password" class="form-control" id="password-input" placeholder='Enter your password'
                            onChange={
                                (e)=> setPassword(e.target.value)
                            }
                        />
                    </div>
                    <div class = "btn-in">
                        <div class='big-button-login register-btn' onClick={handleSubmit}>สมัครสมาชิก</div>
                    </div>
                </form>
                {error && <p>{error}</p>}
            </div>
            <p class='end-authen'>มีบัญชีอยู่แล้ว ? <a href="/Login">เข้าสู่ระบบ</a></p>
        </div>
    </div>
    )
}
export default  Register

