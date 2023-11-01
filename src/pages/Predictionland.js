import React from 'react'
import Navbar from '../component/navbar.js'
import "./Predictionland.css"
import Chumphon_9 from '../assets/Chumphon_9.jpg';
import { useNavigate } from "react-router-dom";
import OvalButton from '../component/oval_button.js';

function Predictionland() {
    const navigate = useNavigate();
    return (
    <div>
    <Navbar/>
    <div className='Land'>
        <div class='top-background-2'>
            <h3>รายการที่กำลังประมวลผล(1)</h3>
        </div>
        <div className='cf-2'>
            <div className='C-3'>
                <img src={Chumphon_9} alt='Chumphon' className='Chumphon' width={"20%"} />
            </div>
            
            <div className='fifth'>
                <p>ชื่อโปรเจกต์ : ไร่ของสิทธาครับผม
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.92971 19.283L5.92972 19.283L5.95149 19.2775L5.95151 19.2775L8.58384 18.6194C8.59896 18.6156 8.61396 18.6119 8.62885 18.6082C8.85159 18.5528 9.04877 18.5037 9.2278 18.4023C9.40683 18.301 9.55035 18.1571 9.71248 17.9947C9.72332 17.9838 9.73425 17.9729 9.74527 17.9618L16.9393 10.7678L16.9393 10.7678L16.9626 10.7445C17.2761 10.4311 17.5461 10.1611 17.7333 9.91573C17.9339 9.65281 18.0858 9.36038 18.0858 9C18.0858 8.63961 17.9339 8.34719 17.7333 8.08427C17.5461 7.83894 17.276 7.5689 16.9626 7.2555L16.9393 7.23223L16.5858 7.58579L16.9393 7.23223L16.7678 7.06066L16.7445 7.03738C16.4311 6.72395 16.1611 6.45388 15.9157 6.2667C15.6528 6.0661 15.3604 5.91421 15 5.91421C14.6396 5.91421 14.3472 6.0661 14.0843 6.2667C13.8389 6.45388 13.5689 6.72395 13.2555 7.03739L13.2322 7.06066L6.03816 14.2547C6.02714 14.2658 6.01619 14.2767 6.00533 14.2875C5.84286 14.4496 5.69903 14.5932 5.59766 14.7722C5.4963 14.9512 5.44723 15.1484 5.39179 15.3711C5.38809 15.386 5.38435 15.401 5.38057 15.4162L4.71704 18.0703C4.71483 18.0791 4.7126 18.088 4.71036 18.097C4.67112 18.2537 4.62921 18.421 4.61546 18.5615C4.60032 18.7163 4.60385 18.9773 4.81326 19.1867C5.02267 19.3961 5.28373 19.3997 5.43846 19.3845C5.57899 19.3708 5.74633 19.3289 5.90301 19.2896C5.91195 19.2874 5.92085 19.2852 5.92971 19.283Z" stroke="#222222"/>
                        <path d="M12.5 7.5L15.5 5.5L18.5 8.5L16.5 11.5L12.5 7.5Z" fill="#222222"/>
                    </svg></p>
                <p>สถานะ : ทำการวิเคราะห์พืช</p>
                <p>เปอร์เซ็นต์การประมวลผล : 22 %</p>
                <div className='mix-1'>
                    <div className='w-10 btn btn-xs btn-success disabled boxs-1' aria-disabled="true"></div>
                    <div className='w-10 btn btn-xs btn-white boxs-2'></div>
                </div> 
                <p>เวลาที่เหลือโดยประมาณ : 44 นาที</p>
            </div>
            
        </div>
        <hr style={{width:"80vw"}}/>
        <div className='manage'>
            <OvalButton className="w-10 btn btn-m btn-white M-4" title="ดำเนินการต่อ" color="#BEEFC3" next_route={()=>navigate('Predictionland')}></OvalButton>
        </div>
        <section className='hamburger-1'>
            <div className='hamburger-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>
        </section>

    </div>
    </div>
    )
}

export default Predictionland