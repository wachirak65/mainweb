import React ,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Swal from "sweetalert2"
// import withReactContent from "sweetalert2-react-content"
import "./Login.css"
import {signInWithGoogle,auth} from '../until/App2';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login  () {
    const navigate = useNavigate()
    // const MySwal = withReactContent(Swal)
    
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
            navigate('../Homepage')
            console.log(user);
        }).catch((error) => {
            console.log(error);
        });
        
    };
    const handleReset = ()=>{
        navigate('/Reset');
    }
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
                <select name="cars" id="cars">
                    <option value="Guest" selected>Guest</option>
                    <option value="volvo">โหมดผู้ใช้ทั่วไป</option>
                    <option value="saab">สมัครสมาชิก</option>
                </select>
                {/* <ul>
                    <li style={{ listStyleType :"none",textDecoration:"none" ,color: "#5DADE2"}}><a href="#" class="nav-link px-2 link-lightblue">
                        Guest
                        <i class="fa-solid fa-chevron-down"></i>
                        </a>
                            <ul className='dropdown'>
                                <li style={{ listStyleType :"none",textDecoration:"none" ,color: "#5DADE2"}}><a href="#">โหมดผู้ใช้ทั่วไป</a></li>
                                <ul style={{ listStyleType :"none",textDecoration:"none" ,color: "#5DADE2"}}><a href="#">สมัครสมาชิก</a>
                                    <li style={{ listStyleType :"none",textDecoration:"none" ,color: "#5DADE2"}}><a href="#">สมัครสมาชิก</a></li>
                                    <li style={{ listStyleType :"none",textDecoration:"none" ,color: "#5DADE2"}}><a href="#">Logout</a></li>
                                </ul>
                            </ul>
                        </li>
                </ul>
                 */}
            </header>
        <br/>
        <div id = "form-area" className="form-floating">
            
            <main className="form-signin w-100 m-auto">
                <form id='loginForm' onSubmit={handleSubmit}>
                <h1>เข้าสู่ระบบ</h1>
                <p>กรอกบัญชีอีเมลและรหัสผ่านเพื่อเข้าสู่ระบบ</p>
                <p>Or</p>
                <div>
                    {navigate('../Homepage')}
                    <button onClick={signInWithGoogle} className="mx-auto border-1 bg-white-500 text-black rounded-full px-4 py-2">เข้าสู่ระบบด้วยบัญชี Google</button>
                </div>
                    <label>อีเมล
                    <br/>
                    <input 
                        className='from-control'
                        type="email" 
                        name="email" 
                        value={inputs.email || ""} 
                        onChange={handleChange}
                        placeholder='username@gmail.com'
                    />
                    </label>
                    <label>รหัสผ่าน<p onClick={handleReset}>ลืมรหัสผ่าน?</p>
                    <br/>
                        <input 
                            className='from-control'
                            type="password" 
                            name="password" 
                            value={inputs.password || ""} 
                            onChange={handleChange}
                            placeholder='Enter your password'
                    />
                    </label>
                    <br/>
                        <button 
                            class="w-100 btn btn-lg btn-primary"
                            type="submit">
                            <a class="w-100 btn btn-lg btn-primary" href="Homepage">เข้าสู่ระบบ</a>
                        </button>
                    <p class="mt-5 mb-3 text-muted">ยังไม่มีบัญชีสมาชิก?<a href="Register">สมัครสมาชิก</a></p> 
                </form>
            </main>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </div>
    )
}


export default Login