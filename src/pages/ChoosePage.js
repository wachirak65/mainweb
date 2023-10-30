import React from 'react'
import "../pages/ChoosePage.css"
import Navbar from '../component/navbar'

function ChoosePage() {
    return (
        <div class = "row">
            <header>
                <Navbar/>
            </header>
            <div class="main">
                <p>เลือกรายการพืชที่เหมาะสม : (สามารถเลือกได้มากที่สุด 4 ชนิด)</p>
            </div>
            <div class="side">
                <p>ประเภทจัดสรรพื้นที่</p>
                <p>พืชที่เลือกทั้งหมด</p>
            </div>
            
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>        </div>
    )
}

export default ChoosePage;
