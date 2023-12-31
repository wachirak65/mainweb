import {React,useEffect} from 'react'
import "../pages/ShowAlocate.css"
import Navbar from '../component/navbar'
import Sidebar from '../component/sidebar'
import OvalButton from '../component/oval_button'
import Chatbot from '../component/chatbot'
import Iconandriod from '../assets/icons/android.svg'
import { useNavigate } from 'react-router-dom';
import { OtherDataAlocate } from '../context/imageUrl'

function ShowAlocate() {
    let averageLat 
    let averageLng
    let navigate = useNavigate();
    let map;
    let areaOfIndex
    const areaResult = JSON.parse(localStorage.getItem('areaAll'));
    const LocateResult = JSON.parse(localStorage.getItem('LocationResult'));
    const ShowLat = JSON.parse(localStorage.getItem('Showlat'));
    const selectedPlants = JSON.parse(localStorage.getItem('selectedPlants'));
    const boolCheck = JSON.parse(localStorage.getItem('boolCheck'));
    const selectedOption = JSON.parse(localStorage.getItem('selectedOption'));
    const selectedIndex = JSON.parse(localStorage.getItem('selectedIndex'));

    console.log('selectedIndex ---> ' ,selectedIndex)
   
    if(areaResult){
        areaOfIndex = areaResult[selectedIndex-1]

    }else{
        let resultloop = 0
        for (let i = 0; i < areaResult.length; i++) {
            resultloop = i+resultloop
        }
        areaOfIndex = resultloop
    }
    console.log('พื้นที่ทั้งหมดคือ  =>>' , areaResult[selectedIndex-1])
    console.log('Boolean Check ==>>>>>' , boolCheck)
    console.log('Show Alocate => ' , selectedPlants)
    const areaAll = ["พื้นที่ทั้งหมด"]
    const areaSlected = selectedPlants
    let polygonNames = [...areaAll, ...areaSlected];
    

    let numberOfPoints = ShowLat.length;
    console.log('numberofPoints', numberOfPoints);
    let totalLat = 0;
    let totalLng = 0;

    for (let i = 0; i < numberOfPoints; i++) {
        totalLat += ShowLat[i][0];
        totalLng += ShowLat[i][1];
    }
    if(boolCheck === true){
        averageLat = LocateResult.longitude
        averageLng = LocateResult.latitude
    }
    else if(boolCheck === false){
        averageLat = totalLat / numberOfPoints;
        averageLng = totalLng / numberOfPoints;
    }
    
    console.log('averageLat',averageLat);
    const apiResult = JSON.parse(localStorage.getItem('apiResult'));
    const coordinateLine = JSON.parse(localStorage.getItem('coordinateLine'));
    console.log('coordinateLine =' , coordinateLine[1])

    const area = apiResult.location.area; 
    const locations = apiResult.location.location; 

    useEffect(() => {
        fetch('https://maps.googleapis.com/maps/api/js?key=AIzaSyBCTbDuLw_0s3XN3lYrEVi5UtLFCetzRfA&libraries=places,drawing&callback=initMap')
        .then(response => response.json())
        .then(data => {
            console.log('API data:', data);
        })
        .catch(error => {
            console.error('Error fetching data from API:', error);
        });
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBCTbDuLw_0s3XN3lYrEVi5UtLFCetzRfA&libraries=places,drawing&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    
        script.onload = () => {
            window.initMap = initMap;
            initMap();
        };
    
        script.onerror = (error) => {
            console.error('Error loading Google Maps API:', error);
        };
    
        return () => {
            document.head.removeChild(script);
        };
    }, []);
    
    
    function initMap() {
        map = new window.google.maps.Map(document.getElementById('alocate-show'), {
            center: {lat: averageLng, lng: averageLat},  
            zoom: 18,
            mapTypeId: 'satellite',
            
            fullscreenControl: false,
            mapTypeControl: true, 
            streetViewControl: false ,
            mapTypeControlOptions: {
                style: window.google.maps.MapTypeControlStyle.VERTICAL_BAR, 
                position: window.google.maps.ControlPosition.BOTTOM_RIGHT 
              }
            
        });


        for (let index in coordinateLine) {
            const coordinates = coordinateLine[index];
            console.log(`Coordinates for index ${index}:`, coordinates);
            const swap_coordinates = coordinates.map(point => [point[1], point[0]]);
            console.log('swap' , swap_coordinates)
            const path = swap_coordinates.map(point => ({ lat: point[0], lng: point[1] }));
            const polyline = new window.google.maps.Polyline({
                path: path,
                geodesic: true,
                strokeColor: 'yellow',
                strokeOpacity: 1.0,
                strokeWeight: 2,
              });
            const polygon = new window.google.maps.Polygon({
            paths: path, 
            strokeOpacity: 0, 
            fillColor: 'blue', 
            fillOpacity: 0.1, 
            });
            const contentString = `
            <div style="font-weight: bold; font-size: 14px;">${polygonNames[index]}</div> `;
            const infoWindow = new window.google.maps.InfoWindow({
                content: contentString, // ใช้ชื่อที่ต้องการแสดงจากอาร์เรย์
                disableAutoPan: true, 
                closeOnClick: true, 
            });

              infoWindow.setPosition(path[0]);
              infoWindow.open(map);

              polygon.setMap(map);
              polyline.setMap(map); 

        }
        
     
        const pathCoordinates = [];
        locations.forEach((locateArr) => {
        locateArr.forEach((locationArray) => {
            const latLng = new window.google.maps.LatLng(locationArray[0], locationArray[1]);
            pathCoordinates.push(latLng);
        });
        });
        
        pathCoordinates.forEach((coordinate) => {
            const marker = new window.google.maps.Marker({
                
                position: coordinate,
                map: map, // map คือตัวแปรที่เก็บข้อมูลแผนที่
                icon: {
                    url:'http://maps.google.com/mapfiles/ms/icons/green-dot.png' ,
                    scaledSize: new window.google.maps.Size(15, 15)
                }
                
            });
            marker.setMap(map);
        });
       
      }
    return (
        <div class = "Allin">
            <header>
                <Navbar/>
                <Chatbot/>

                <div className="Sidebar">
                    <Sidebar/>
                </div>
            </header>
            <div class="grid-container" >
                <div class="AlocateShow" id='alocate-show'>
                </div>
                    <div class = 'button-line'>
                    <div class ="text-word"><p>พืชที่แนะนำ : {selectedOption}</p></div>
                        <span class = 'btn-inline-1'>
                            <button onClick={() => navigate('/ChoosePage')}>เปลี่ยนชนิดพืช</button>
                        </span>                            
                        <span class = 'btn-inline-2'>
                            <button>เปลี่ยนการวางแผนพื้นที่</button>
                        </span>        
                        <div class = "Reload-Icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                                </svg>

                            </div>
                        <span class = 'btn-inline-3'>
                        <button onClick={()=>
                        navigate("/ShowArea")}>พื้นที่ทั้งหมด</button>           
                    </span>
                    </div>
                
                    <div class="Data-1">
                       
                        
                        <label class="use-label">
			                <input class="checkbox-input" type="checkbox" />
			                    <div class="flip-card">
				                    <div class="front">
                                        <p>ผลผลิต คาดการณ์:</p>
                                        <p className='front-inside-1'>__</p>
                                        <hr class="line-on-top"/>
                                        <p>รายรับ คาดการณ์:</p>
                                        <p className='front-inside-1'>__</p>
                                        <hr class="line-on-top"/>
                                        <p>ค่าใช้จ่าย คาดการณ์:</p>
                                        <p className='front-inside-1'>__</p>
				                        </div>
				<div class="back">
                    <p>สรุปค่าใช้จ่ายต่างๆ</p>
                    <hr class="line-on-top"/>

				</div>
			</div>
		</label>
                    </div>  
                <div class="Data-2">
                    <h4>ข้อมูลพื้นฐานทั่วไป</h4>
                    <hr class="line-on-bottom"/>
                    <p id='p-1'>พื้นที่เพาะปลูก : {areaOfIndex} ตร.ม</p>
                    
                    <p id='p-2'>ปริมาณการใช้น้ำ : - </p>
                    <p id='p-3'>ปริมาณการใช้ปุ๋ย : - </p>
                    <p id='p-4'>ระยะเวลาในการเพาะปลูก : - </p>
                    <div class ="show-process">
                        <hr class="line-on-bottom"/>
                        <p>รายการที่กำลังดำเนินการ</p>
                    </div>
                
                </div>
                <div class="Data-3">
                    <h4>รายละเอียด</h4>
                    <p>ชนิดพืช : {selectedOption}</p>
                    <div className="Data-other">
                        <p className='Data-Other-3'>ข้อมูลเพิ่มเติม : {OtherDataAlocate[selectedOption]}</p>
                    </div>
                </div>
            </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>            
        </div>
    )
}

export default ShowAlocate;