import { createUserWithEmailAndPassword} from "firebase/auth";
import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import "../pages/LoginRegisterpage.css"
import {auth,provider } from "../until/App2"
import { signInWithPopup } from "firebase/auth";
import Navbar from "../component/navbar";


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
        <br/>
        <div id = "form-area" class="form-floating my-2">
            <main class="form-signin w-100 m-auto">
                <form id='registerForm' onSubmit={handleSubmit}>
                    <h1 style={{textAlign:"center"}}>สมัครสมาชิก</h1>
                    <p style={{textAlign:"center"}}>Or</p>
                    <div className='google-2'>
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


