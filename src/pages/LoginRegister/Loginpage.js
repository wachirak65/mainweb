import React ,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./LoginRegisterpage.css"
import Navbar from '../../component/navbar';
import Arrow from '../../assets/icons/arrow_auth.svg'
import google_icon from '../../assets/icons/google_icon.svg'
import { useUserAuth } from '../../context/UserAuthContext';

function Login  () {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError ] = useState(""); 
    const { user, logIn, SignUpUsingGoogle } = useUserAuth();
    
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
            const userData =  await logIn(email, password);
            console.log("User: " + userData.user.uid)
            navigate("/Selection");
        } catch (err) {
            console.log("error:", err.message);
            setError(err.message);
        }
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
                    <div class="big-button" onClick={handleGoogleSubmit}><img src={google_icon} alt="google-icon" width='20' height='20'/><p>เข้าสู่ระบบด้วยบัญชี Google</p></div>
                    <div class='or-line'><p>OR</p></div>
                </div>
                
                <form>
                    <div class="mb-3">
                        <label for="email-input" class="form-label">อีเมล</label>
                        <input type="email" class="form-control" id="email-input" aria-describedby="emailHelp" placeholder='username@gmail.com'
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <div class="mb-3">
                        <div class='label-content'>
                            <label for="password-input" class="form-label" >รหัสผ่าน</label>
                            <a href='#'>ลืมรหัสผ่าน ?</a>
                        </div>
                        <input type="password" class="form-control" id="password-input" placeholder='Enter your password'
                            onChange={(e)=> setPassword(e.target.value)}
                        />
                        <div class='big-button-login' onClick={handleSubmit}>เข้าสู่ระบบ</div>

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