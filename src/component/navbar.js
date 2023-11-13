import React, { useState } from 'react'; 
import logo_untired from '../assets/logo_untired.PNG';
import person_icon from '../assets/icons/person_icon.svg'
import gear_icon from '../assets/icons/gear_icon.svg'
import './navbar.css'
import { useUserAuth } from '../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Navbar() {
    
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const { logOut } = useUserAuth();

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await logOut();

               const MySwal = withReactContent(Swal);
               await MySwal.fire({
                   icon: 'success',
                   title: 'ออกจากระบบเรียบร้อย',
                   text: 'You have been logged out.',
                   showConfirmButton: false,
                   timer: 2300 
               });
   
               navigate("/login");
        } catch (err) {
            console.log("error:", err.message);
        }
    }
  
    const toggleMobileMenu = () => {
      setShowMobileMenu(!showMobileMenu);
    };

    return (
         <nav class="navbar" id='nav-all'>
                    <div className="on-nav"></div>
                    <div class="first-navbar">
                        <a class="navbar-logo" href="#">
                            <img src={logo_untired} alt="Logo" class="logo" />
                        </a> 
                    </div> 
                    <div class="last-navbar">
                        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" class="nav-link px-2 link-dark">หน้าหลัก</a></li>
                            <li><a href="#" class="nav-link px-2 link-dark">เกี่ยวกับเรา</a></li>
                            <li><a href="#" class="nav-link px-2 link-dark">เทคโนโลยี AI</a></li>
                            <li><a href="#" class="nav-link px-2 link-dark">บริการ</a></li>
                            <li><a href="#" class="nav-link px-2 link-dark">ติดต่อเรา</a></li>
                        </ul>
                        <div class="dropdown">
                            <div class = "position-touch"></div>
                            
                            <div class="dropdown-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                
                                <h5 class="dropdown-title">Guest</h5>
                            </div>
                            <div class="dropdown-content">
                                <a href="#"><img src={person_icon} alt="person_icon_img" class="icon-dropdown-content"/> โหมดผู้ใช้ทั่วไป</a>
                                <a href="#"><img src={gear_icon} alt="person_icon_img" class="icon-dropdown-content"/> สมัครสมาชิก</a>
                                <a onClick={handleSubmit}><img src={gear_icon} alt="person_icon_img" class="icon-dropdown-content"/> ออกจากระบบ</a>
                            </div>
                        </div>
                        <div class="check-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="nav-burger" id='nav-burger-bar'  onClick={toggleMobileMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                    </div>
                    {showMobileMenu && (
                        <div className="mobile-menu">
                        <ul>
                            <p id = "All-project-nav">โปรเจกต์ทั้งหมด</p>
                            <li><div class = 'Block-for-project'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consequuntur, aspernatur enim quod natus eligendi, eum nostrum exercitationem quia autem doloremque recusandae fugiat eaque quasi sunt repudiandae temporibus dignissimos excepturi dolor sed necessitatibus. Deserunt quasi tenetur similique voluptate eum nostrum explicabo animi sunt facere totam voluptas molestias repellat, corrupti at velit accusamus ipsum, excepturi ullam quisquam mollitia? Alias enim nam iste error aspernatur, cumque dolores voluptates nemo expedita ullam sit, ut distinctio iusto necessitatibus adipisci eum repudiandae quis? Repellendus sint quia at nam nobis unde ipsum eligendi voluptates iure veritatis aut, pariatur facilis magni quod natus ratione dicta, assumenda expedita, tempora veniam corrupti repellat. Vel nisi dolorem amet quaerat quasi ut magnam sint quod odit voluptatem rem repudiandae sunt ad nam iusto eos animi eaque, quo, culpa rerum saepe quam vitae aspernatur! Repellendus, saepe magni soluta neque repellat quae! Fuga qui, hic nesciunt facilis incidunt aspernatur repudiandae non beatae voluptates ab ad vitae harum ullam! Iusto quas amet sunt quam quod, debitis asperiores fugit explicabo ut cupiditate. Accusamus quae cum molestiae accusantium quos. Cum ipsam, nobis beatae reprehenderit vero consequuntur quos nemo ipsa delectus illum porro dolor unde magnam asperiores, officia laudantium voluptates tenetur at earum. Doloribus obcaecati amet possimus error nam est. Architecto voluptatum ratione fugit at consequatur earum ipsa accusamus ut quasi sit illum, rerum atque optio reiciendis dolor fuga expedita pariatur suscipit delectus laborum similique. Quas quia, accusamus sapiente ducimus praesentium aut ullam quidem et, molestiae magni quisquam doloremque aliquid dolores ea soluta. Sapiente fugit corrupti consectetur atque cumque, sit at velit pariatur officiis architecto placeat aspernatur eveniet asperiores qui quod nostrum porro aliquid culpa distinctio aut eaque tenetur saepe. Est fuga eos fugiat natus repudiandae a magnam vero quos quae nobis voluptatibus doloremque, enim error tempore doloribus atque ipsam nisi? Excepturi molestiae recusandae ex. A?
                                </div>
                            </li>
                            <p className='other-discript'>ส่วนตัว</p>


                            <div class = "ground-setting-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/></svg>                                 
                                <p>โปรไฟล์</p>
                            </div>
                            <div class = "ground-setting-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16"><path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/></svg>
                                <p>แจ้งเตือน</p>
                            </div>
                            <div class = "ground-setting-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/></svg>
                                <p>การตั้งค่า</p>
                            </div>
                            <hr />
                            <p className='other-discript'>เพิ่มเติม</p>
                            <div className='Other-out'>
                                <li><a href="#">หน้าหลัก</a></li>
                                <li><a href="#">เกี่ยวกับเรา</a></li>
                                <li><a href="#">เทคโนโลยี AI</a></li>
                                <li><a href="#">บริการ</a></li>
                                <li><a href="#">ติดต่อเรา</a></li>
                            </div>

                        </ul>
                        </div>
                    )}
    </nav> 
    );
}

export default Navbar;