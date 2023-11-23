import React , {useEffect,useState}from 'react'
import "../pages/ShowArea.css"
import Navbar from '../component/navbar'
import Sidebar from '../component/sidebar'
import TreeIcon from '../assets/icons/tree.svg'
import Chatbot from '../component/chatbot'
import { useNavigate } from 'react-router-dom';

function ShowArea() {
    let navigate = useNavigate();
    let map;
    const [selectedZone, setSelectedZone] = useState(null);

    const LocateResult = JSON.parse(localStorage.getItem('LocationResult'));

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
        map = new window.google.maps.Map(document.getElementById('Sidemain'), {
            center: {lat: LocateResult.latitude, lng: LocateResult.longitude},  // ตำแหน่งกึ่งกลาง
            zoom: 17,
            mapTypeId: 'satellite',
            
            fullscreenControl: false,
            mapTypeControl: true, 
            streetViewControl: false ,
            mapTypeControlOptions: {
                style: window.google.maps.MapTypeControlStyle.VERTICAL_BAR, 
                position: window.google.maps.ControlPosition.BOTTOM_RIGHT 
              }
            
        });
        const polygonNames = ["พื้นที่ทั้งหมด", "พื้นที่ A", "พื้นที่ B", "พื้นที่ C"]; //ชื่อ
       
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
                disableAutoPan: true, // ไม่อนุญาตให้ InfoWindow ย้ายตำแหน่งเมื่อขนาดของแผนที่เปลี่ยนแปลง
                closeOnClick: true, 
            });

            
        
              infoWindow.setPosition(path[0]);
        
              infoWindow.open(map);

              polygon.setMap(map);
              polyline.setMap(map); 
             
        }
        function addOptionsToSelect() {
            clearSelectOptions(); // เพิ่มการเรียกฟังก์ชันเพื่อลบตัวเลือกทั้งหมดก่อน
            var selectElement = document.getElementById("zone-btn");
    
            for (var i = 0; i < polygonNames.length; i++) {
                var option = document.createElement("option");
                option.text = polygonNames[i];
                selectElement.add(option);
            }
    
            console.log(selectElement.length);
        }
    
        function clearSelectOptions() {
            var selectElement = document.getElementById("zone-btn");
            while (selectElement.options.length > 0) {
                selectElement.remove(0);
            }
        }
        addOptionsToSelect()
    
        


     
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
        console.log("this is B Page" , apiResult)
        console.log("area = ",area);
        console.log("location = ",locations);

    return (
        
        <div className='ShowArea-Container'>
            <header>
            <Chatbot/>
                <Navbar/>
                <Sidebar/>

            </header>
            <div class = "Container-all">
            <span>
                <div class = "Sidemain" id='Sidemain'>
                </div>
            </span>
            <div class="Side-Right">
            <div class="Zonebutton">
                <select id = 'zone-btn'class="dp-button"></select>
                
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