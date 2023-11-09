import React ,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import "../pages/LoginRegisterpage.css"
import {provider,auth} from '../until/App2';
import { signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import Navbar from '../component/navbar.js'
import Arrow from '../assets/icons/arrow_auth.svg'
import google_icon from '../assets/icons/google_icon.svg'

function Login  () {
    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)
    
    const [inputs, setInputs] = useState("");
    
    // const handleClick =async(e)=>{
    //     const provider = await new GoogleAuthProvider();
    //     return signInWithPopup(auth,provider)
    // }
    
    const handleChange = (event) => {
        
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // signInWithEmailAndPassword(auth ,email,password)
        signInWithEmailAndPassword(auth ,inputs.name,inputs.value)
        .then((user)=>{
            navigate('../Selection')
            console.log(user);
        }).catch((error) => {
            console.log(error);
            MySwal.fire({
            html:<i>{error.message}</i>,
            icon:"error",
            })
        });
        
    };
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
    
    const handleReset = ()=>{
        navigate('/Reset');
    }
    return (
        <div class='background'>
            
        <Navbar/>
        <div class='authen-center'>
            <div class='authen-form'>
                <div class='header-authen'>
                    <img src={Arrow} alt="arrow-auth-icon" width='40' height='40'/>
                    <h2>เข้าสู่ระบบ</h2>
                    <p>กรอกบัญชีอีเมลและรหัสผ่านเพื่อเข้าสู่ระบบ</p>
                    <div class="big-button"><img src={google_icon} alt="google-icon" width='20' height='20'/><p>เข้าสู่ระบบด้วยบัญชี Google</p></div>
                    <div class='or-line'><p>OR</p></div>
                </div>
                
                <form action="">
                    <div class="mb-3">
                        <label for="email-input" class="form-label">อีเมล</label>
                        <input type="email" class="form-control" id="email-input" aria-describedby="emailHelp" placeholder='username@gmail.com'/>
                    </div>
                    <div class="mb-3">
                        <div class='label-content'>
                            <label for="password-input" class="form-label" >รหัสผ่าน</label>
                            <a href='#'>ลืมรหัสผ่าน ?</a>
                        </div>
                        <input type="password" class="form-control" id="password-input" placeholder='Enter your password'/>
                        <div class='big-button-login'>เข้าสู่ระบบ</div>

                    </div>
                </form>
                
            </div>
            <p class='end-authen'>ยังไม่มีบัญชีสมาชิก ? <a href="Register">สมัครสมาชิก</a></p>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </div>
    )
}


export default Login