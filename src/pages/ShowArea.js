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
    let arrCoordinateAll
    const LocateResult = JSON.parse(localStorage.getItem('LocationResult'));
    const apiResult = JSON.parse(localStorage.getItem('apiResult'));
    const coordinateLine = JSON.parse(localStorage.getItem('coordinateLine'));
    const selectedPlants = JSON.parse(localStorage.getItem('selectedPlants'));
    const areaAll = ["พื้นที่ทั้งหมด"]
    const areaSlected = selectedPlants
    let polygonNames = [...areaAll, ...areaSlected];
    
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
        let zoomPath 
        let coordinates
        for (let index in coordinateLine) {
            
            let coordinates = coordinateLine[index];
            const swap_coordinates = coordinates.map(point => [point[1], point[0]]);
            const path = swap_coordinates.map(point => ({ lat: point[0], lng: point[1] }));
            zoomPath = path
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
                content: contentString, 
                disableAutoPan: true, 
                closeOnClick: true, 
            });

              infoWindow.setPosition(path[0]);
              infoWindow.open(map);
              polygon.setMap(map);
              polyline.setMap(map); 
             
        }
        let arrCoordinateAll = []
        arrCoordinateAll = arrCoordinateAll.concat(LocateResult.latitude)
        arrCoordinateAll = arrCoordinateAll.concat(LocateResult.longitude)
        let checkAreaCoodinate = true
        localStorage.setItem('boolCheck', JSON.stringify(checkAreaCoodinate));
        localStorage.setItem('Showlat', JSON.stringify(arrCoordinateAll));

        function addOptionsToSelect() {
            clearSelectOptions();
        
            var selectElement = document.getElementById("zone-btn");
        
            polygonNames.forEach(function (name) {
                var option = document.createElement("option");
                option.text = name;
                selectElement.add(option);
            });
            

            selectElement.addEventListener("change", function () {
                const selectedOption = selectElement.options[selectElement.selectedIndex].text;
                const selectedIndex = selectElement.selectedIndex;
                
                console.log('arrCoordinateAll' ,arrCoordinateAll)
                console.log('Selected Index:', selectedIndex);
                console.log('Selected Option:', selectedOption);
                
                if(selectedIndex == 0){
                    checkAreaCoodinate = true
                    localStorage.setItem('boolCheck', JSON.stringify(checkAreaCoodinate));
                }else if (selectedIndex !== 0){
                    checkAreaCoodinate = false
                    localStorage.setItem('Showlat', JSON.stringify(coordinateLine[selectedIndex]));
                    localStorage.setItem('boolCheck', JSON.stringify(checkAreaCoodinate));
                }
            });}
    
        function clearSelectOptions() {
            var selectElement = document.getElementById("zone-btn");
            while (selectElement.options.length > 0) {
                selectElement.remove(0);
            }
        }
        addOptionsToSelect()
    
        
        const pathCoordinates = [];
        let latLng
        locations.forEach((locateArr) => {
        locateArr.forEach((locationArray) => {
            let latLng = new window.google.maps.LatLng(locationArray[0], locationArray[1]);
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
                                
                            </ul>
                    </div>
                    
                </div>
                <div class = 'text-2'>
                    <button  onClick={()=> {
                    setTimeout(() => {
                        navigate('/ShowAlocate');
                    }, 2000);
                    }
                           }>การจัดสรรพื้นที่</button>
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