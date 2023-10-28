import { createUserWithEmailAndPassword} from "firebase/auth";
import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import "../component/Login.css"
import {signInWithGoogle,auth } from "../until/App2"



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

    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth ,inputs)
        
        .then((user)=>{
            console.log(user);
            navigate('../Homepage')
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
    <div class="container">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a  class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img style={{borderRadius: "50%"}} src="https://www.zarla.com/images/zarla-k-1x1-2400x2400-20211119-y8r6jygpdqy7qwr4bhcp.png?crop=1:1,smart&width=250&dpr=2" width="20%" height="20%"/>
                    <h2>LOGO</h2>
                </a>

                <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" class="nav-link px-2 link-secondary">หน้าหลัก</a></li>
                    <li><a href="#" class="nav-link px-2 link-dark">เกี่ยวกับเรา</a></li>
                    <li><a href="#" class="nav-link px-2 link-dark">เทคโนโลยี AI</a></li>
                    <li><a href="#" class="nav-link px-2 link-dark">บริการ</a></li>
                    <li><a href="#" class="nav-link px-2 link-dark">ติดต่อเรา</a></li>
                </ul>
                <select name="cars" id="cars" style={{outline: "0px solid transparent"}}>
                    <option value="Guest" selected>Guest</option>
                    <option value="volvo">โหมดผู้ใช้ทั่วไป</option>
                    <option value="saab">สมัครสมาชิก</option>
                </select>
                {/* <ul>
                    <li style={{ listStyleType :"none",textDecoration:"none" ,color: "#5DADE2"}}><a href="#" class="nav-link px-2 link-lightblue">
                        Guest
                            <i class="fa-solid fa-chevron-down"></i>
                        </a>
                            <ul className='dropdown' style={{ listStyleType :"none",textDecoration:"none" ,color: "#5DADE2"}}>
                                <li style={{ listStyleType :"none",textDecoration:"none" ,color: "#5DADE2"}}><a href="#">โหมดผู้ใช้ทั่วไป</a></li>
                                <ul style={{ listStyleType :"none",textDecoration:"none" ,color: "#5DADE2"}}><a href="#">เข้าสู่ระบบ</a>
                                    <li style={{ listStyleType :"none",textDecoration:"none" ,color: "#5DADE2"}}><a href="#">เข้าสู่ระบบ</a></li>
                                    <li style={{ listStyleType :"none",textDecoration:"none" ,color: "#5DADE2"}}><a href="#">Logout</a></li>
                                    
                                </ul>
                            </ul>
                    </li>
                </ul> */}
                
            </header>
        <br/>
        <div id = "form-area" class="form-floating my-2">
            <main class="form-signin w-100 m-auto">
                <form id='registerForm' onSubmit={handleSubmit}>
                    <h1 style={{textAlign:"center"}}>สมัครสมาชิก</h1>
                    <p style={{textAlign:"center"}}>Or</p>
                    <div className='google-2'>
                        {navigate('../Homepage')}
                        <button style={{borderRadius:"40px" ,margin:"10px"}} onClick={signInWithGoogle} className="mx-auto border-1 bg-white-500 text-black rounded-full px-2 py-1"><img src="https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK" width={"5%"} height={"5%"}/> สมัครสมาชิกด้วยบัญชี Google</button>
                    </div>

                    <label>ชื่อบัญชี
                    <br/>
                    <input 
                        className='form-control'
                        type="text" 
                        name="username" 
                        minLength={5}
                        maxLength={20}
                        value={inputs.username || ""} 
                        onChange={handleChange}
                        placeholder='Enter your name'
                    />
                    </label>
                    <label>อีเมล
                    <br/>
                    <input 
                        className='form-control'
                        type="email" 
                        name="email"
                        value={inputs.email || ""} 
                        onChange={handleChange}
                        placeholder='username@gmail.com'
                    />
                    </label>
                    <label>รหัสผ่าน (ความยาวอย่างน้อย จํานวน 6-16 ตัวอักษร)
                    <br/>
                        <input 
                            className='form-control'
                            type="password" 
                            name="password" 
                            minLength={6}
                            maxLength={20}
                            value={inputs.password || ""} 
                            onChange={handleChange}
                            placeholder='Enter your password'
                    />
                    </label>
                    <br/>
                        <button 
                            class="w-100 btn btn-l btn"
                            type="submit" style={{backgroundColor:"purple"}}>
                            <a class="w-100 btn btn-l btn" style={{backgroundColor:'purple', color:"white"}}>สมัครสมาชิก</a>
                    </button>
                    <p class="mt-5 mb-3 text-muted">มีบัญชีสมาชิกแล้ว?<a href="Login" style={{textDecoration:"none"}}>เข้าสู่ระบบ</a></p> 
                </form>
            </main>
        </div>
    </div>
    )
}
export default  Register


