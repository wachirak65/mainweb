import React, { useState,useEffect } from 'react';
import "../pages/ChoosePage.css"
import Navbar from '../component/navbar'
import ConfirmBtn from '../component/confirm_btn'
import BackBtn from '../component/back_btn'
import Sidebar from '../component/sidebar'
import { useNavigate } from 'react-router-dom';
import BoxChoose from '../component/choosepage/box'
import SlideBox from '../component/choosepage/slide-box'
import { imageUrlRanking } from '../context/imageUrl';

function ChoosePage() {
    let index
    
    const [selectedPlants, setSelectedPlants] = useState([]);
    const [hiddenSlideBoxes, setHiddenSlideBoxes] = useState({});
    const areaResult = JSON.parse(localStorage.getItem('areaAll'));
    console.log('AreaResult = ' , areaResult.length)
    const RankingData = JSON.parse(localStorage.getItem('RankingData')); //  ranking data array
    const PercentData = JSON.parse(localStorage.getItem('PercentData')); // percent data array 

    const maxChoose = areaResult.length
    console.log('In ChoosePage rankingResult = ' , RankingData)
    console.log('In ChoosePage PercentResult = ' , PercentData)
    console.log('length = ', RankingData.length);
    
    index = RankingData.indexOf('ไม่มีพืชไหนปลูกได้');
    
    // screen ตัว model และ ranking model
    if(index != 0){
        console.log('not zero')
        RankingData.splice(index, 1);
        PercentData.splice(index, 1);
    }else if(index == 0){
        console.log('its zero')
        RankingData.splice(0, index);
        RankingData.splice(index + 1);
        PercentData.splice(0, index);
        PercentData.splice(index + 1);
    }

    const UpdatePercentData = PercentData.map((percent) => (percent * 100).toFixed(2));

    //array สุดท้ายจากการกรองที่จะนำไปใช้
    console.log('update RankingData = ' , RankingData);
    console.log('update PercentData = ' , UpdatePercentData);

    
    const slideBoxes = UpdatePercentData.map((percent, index) => (
        <SlideBox
            key={index}
            img={imageUrlRanking[RankingData[index]]}
            name={RankingData[index]} // = ข้าว 
            suitability={percent}
            details={`นี่คือ${RankingData[index]}`}
            onClick={() => addPlantToSelection(RankingData[index])}
            hidden={hiddenSlideBoxes[RankingData[index]]}
        />
    ));

    let navigate = useNavigate();

    const addPlantToSelection = (name) => {
        if (selectedPlants.length < maxChoose) {
          if (!selectedPlants.includes(name)) {
            setSelectedPlants([...selectedPlants, name]);
            setHiddenSlideBoxes((prevHidden) => {
              console.log(`Hiding SlideBox for plant: ${name}`);
              console.log('Previous hidden state:', prevHidden);
              return { ...prevHidden, [name]: true };
            });
          } else {
            alert(`พืช "${name}" ได้ถูกเลือกไว้แล้ว`);
        }
        } else {
            alert(`คุณสามารถเลือกได้ ${maxChoose} ชนิดเท่านั้น`);}
      };
      
    const removePlantFromSelection = (name) => {
        setSelectedPlants(selectedPlants.filter((plant) => plant !== name));
        setHiddenSlideBoxes((prevHidden) => {
            console.log(`Showing SlideBox for plant: ${name}`);
            console.log('Previous hidden state:', prevHidden);
            return { ...prevHidden, [name]: false };
        });
    };


    let numberOfItemsToAdd = maxChoose-selectedPlants.length
    var randomIndex = Math.floor(Math.random() * selectedPlants.length);
    var randomString = selectedPlants[randomIndex];
   
    function sendSelectedPlants(){
        if(maxChoose == selectedPlants.length){
            localStorage.setItem('selectedPlants' , JSON.stringify(selectedPlants)) ; 
        }else{
            for (var i = 0; i < numberOfItemsToAdd; i++) {
                selectedPlants.push(randomString);
            }
            localStorage.setItem('selectedPlants' , JSON.stringify(selectedPlants)) ; 
        }

        const checkLocalStorage = setInterval(() => {
            const selectedPlants = JSON.parse(localStorage.getItem('selectedPlants'));

            if (selectedPlants) {
                clearInterval(checkLocalStorage); 
                navigate("/ShowArea");
            }
        }, 100);
    }

    useEffect(() => {
    }, [hiddenSlideBoxes]);

    return (
        
        <div class = "ChoosePageNew">
            <header>
                <Navbar/>
            </header>
            <div class = "All-in-Container">
                <div class="left-on-top">
                <div class = "first-icon">
                    
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                </div>

                <p class = "text-for-show">เลือกรายการพืชที่เหมาะสม : (สามารถเลือกได้มากที่สุด {maxChoose} ชนิด)</p>
                <div class = 'button-sort-line'>
                     <button>เรียงลำดับ</button>
                    
                
                </div>
                <div class = "Icon-Sec">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </div>
                </div>
                <div class = "line-lefttop">
                    <hr />
                </div>
                <div class="left-on-bottom">
                    <div class="scrollbox">
                        <div class = "scrollbox-inner">
                        {slideBoxes}
                        </div>
                    </div>
                    
                </div>
                <div class="right-on-container">
                    <p id='name-1'>ประเภทจัดสรรพื้นที่</p>
                    <div class = 'button-right'>
                        <button>แบบพื้นฐาน
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        </button>
                        <div class="dropdown-content-sec">
                            <a href="#">ตัวเลือกเก็บเกี่ยวง่าย</a>
                            <a href="#">เน้นประสิทธิภาพ</a>
                        </div>
                    </div>
                    <div class = "buttom-line-1">
                       <hr /> 
                    </div>
                    
                    <p id='name-2'>พืชที่เลือกทั้งหมด :</p>
                    <div className = "space-bucket">
                        {selectedPlants.map((plantName, index) => (
                        <BoxChoose
                        key={index}
                        nameBox={plantName}
                        onClick={() => removePlantFromSelection(plantName)}/>   
                        
                        ))}
                        
                      
                    </div>
                    <div class = "buttom-line-1">
                       <hr /> 
                    </div>
                    <div class = "btn-all-in">
                    <div class='btn-cf-1'>
                    <ConfirmBtn  bg_color='#E4E4E4' title='ยืนยัน' onClick={()=>
                        {sendSelectedPlants()}}/>
                    </div>
                    <div class='btn-back-1'>
                        <BackBtn bg_color='#E7E6E6' title='ย้อนกลับ' onClick={()=>
                                navigate("/areadata")}/>
                    </div>
                </div>
                </div>
            </div>
            
                
           
            
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>        </div>
    )
}

export default ChoosePage;
