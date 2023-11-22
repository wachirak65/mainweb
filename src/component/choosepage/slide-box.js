import './slide-box.css'
import React, { useState } from 'react';
import BoxChoose from './box';

function SlideBox(props){
  const handleAddToSelection = () => {
    props.onClick();
};

    return (
      <div className={`box-scroll ${props.hidden ? 'hidden' : ''}`}>
      <div class="inside-scroll">
          <div class="img-scroll"><img src={props.img} alt="" /></div>
          <div class="discript-scroll">
            <p>ชื่อ : {props.name}</p>
            <p>ความเหมาะสม : {props.suitability} %</p>
            <div className="inside-detail">

            <p id='details-slide'>รายละเอียดอื่นๆ : {props.details}</p>
            </div>

            <div className="inline-choose">
                
              <button className="btn-choose" onClick={handleAddToSelection}>
                เพิ่มพืช
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-plus-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
        
    

}

export default SlideBox