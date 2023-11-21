import React from 'react'
import "../pages/ShowArea.css"
import Navbar from '../component/navbar'
import Sidebar from '../component/sidebar'
import TreeIcon from '../assets/icons/tree.svg'
import Chatbot from '../component/chatbot'
import { useNavigate } from 'react-router-dom';

function ShowArea() {
    let navigate = useNavigate();

    return (
        
        <div className='ShowArea-Container'>
            <header>
            <Chatbot/>
                <Navbar/>
                <Sidebar/>

            </header>
            <div class = "Container-all">
            <span>
                <div class = "Sidemain">
                <span>
                    <p></p>
                </span>
                </div>
            </span>
            <div class="Side-Right">
            <div class="Zonebutton">
                <button class="dp-button">Zone : All</button>
                <div class="dp-content">
                    <a href="#">Zone 1</a>
                    <a href="#">Zone 2</a>
                    <a href="#">Zone 3</a>
                </div>
            </div>  
                <div class = "text-1">
                    <p>รายการที่กำลังดำเนินการ</p>
                    <hr/>
                    <div className='Progress-work'>
                            <ul>
                            <li>รายการ A </li>
                            <li>รายการ B </li>
                            <li>รายการ C </li>
                            <li>รายการ D </li>
                            
                        </ul>
                    </div>
                    
                </div>
                <div class = 'text-2'>
                    <button  onClick={()=>
                            navigate('/ShowAlocate')}>การจัดสรรพื้นที่</button>
                </div>
                
                <div class="SideLine">
                    <hr />
                    <span><button className='Tree-btn'><img src={TreeIcon} alt="tree_icon" /></button></span>&nbsp;&nbsp;&nbsp;
                    <span class="SideLine-DataShow">ข้อมูลความสมดุลพื้นที่</span>
                </div>
            </div>
            
        
            </div>
            
            
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>        </div>
    )
}

export default ShowArea;