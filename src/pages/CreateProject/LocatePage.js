import React, { useEffect ,useState } from 'react';
import "./LocatePage.css"
import Navbar from '../../component/navbar'
import ConfirmBtn from '../../component/confirm_btn'
import BackBtn from '../../component/back_btn'
import { useCreateProject } from '../../context/CreateProjectContet'
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, query, where, addDoc } from 'firebase/firestore';

function Locate() {
    let map;
    let marker;
    let namePlace = ''; 
    let navigate = useNavigate();
    const { project_id, latitude, longitude, land_url, mask, cls_img, updateLatitude, updateLongitude , updateLandURL } = useCreateProject();

    useEffect(() => {
        
        fetch('https://maps.googleapis.com/maps/api/js?key=AIzaSyBCTbDuLw_0s3XN3lYrEVi5UtLFCetzRfA&libraries=places&callback=initMap')
        .then(response => response.json())
        .then(data => {
            console.log('API data:', data);
        })
        .catch(error => {
            console.error('Error fetching data from API:', error);
        });
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBCTbDuLw_0s3XN3lYrEVi5UtLFCetzRfA&libraries=places&callback=initMap`;
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
    
    function centerMapOnMarker() {
        if (map && marker) {
            map.panTo(marker.getPosition());
        }
    }
    
    function initMap() {
        
        map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 13.7563, lng: 100.5018 }, // ตั้งต้นที่กรุงเทพ
            zoom: 8,
            fullscreenControl: false,
            mapTypeControl: true, 
            
        });
        const centerMarkerButton = document.getElementById('center-marker-button');

        centerMarkerButton.addEventListener('click', function () {
            centerMapOnMarker();
        });

        marker = new window.google.maps.Marker({
            position: { lat: 13.7563, lng: 100.5018 },
            map: map,
            draggable: true, // ทำให้ Marker สามารถลากได้
            icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png' 
        });
    
        
        window.google.maps.event.addListener(marker, 'dragstart', function() {
            console.log('เริ่ม Marker');
        });
    
        window.google.maps.event.addListener(marker, 'drag', function() {
            console.log('Marker กำลังลาก');
        });
        
        window.google.maps.event.addListener(marker, 'dragend', function() {
            console.log('ลาก Marker เสร็จ');
            const newPosition = marker.getPosition();
            
            // ละติจูดและลองจิจูด
            updateLatitude(newPosition.lat());
            updateLongitude(newPosition.lng());
            const geocoder = new window.google.maps.Geocoder();
            
            const latlng = {
                lat: newPosition.lat(),
                lng: newPosition.lng()
            };
        
            // ค่าละติจูดและลองจิจูด จาก marker 
            console.log('ละติจูดจาก Marker =', latitude);
            console.log('ลองจิจูดจาก Marker =', longitude);
            
        });
        window.google.maps.event.addListener(map, 'click', function(event) {
            marker.setPosition(event.latLng);
            console.log('ละติจูด ลองติจูดของ Marker จากการ คลิ๊ก:',
             event.latLng.lat(), event.latLng.lng());
        });
    
        const input = document.getElementById('place-input');
    
        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                searchPlace(input.value);
            }
        });
    }
    

    function searchPlace(query) {
        const service = new window.google.maps.places.PlacesService(map);
    
        service.textSearch({
            query: query
        }, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                if (results.length > 0) {
                    const place = results[0];
                    map.setCenter(place.geometry.location);
                    map.setZoom(15);
    
                    const marker = new window.google.maps.Marker({
                        map: map,
                        position: place.geometry.location,
                        title: place.name
                    });
    
                    // ระบุละติจูด ลองติจูดใน console log นะ
                    console.log("ละติจูด :", place.geometry.location.lat());
                    console.log("ลองติจูด :", place.geometry.location.lng());
                    console.log("ชื่อสถานที่ :", place.name);
                } else {
                    alert('ไม่พบสถานที่ที่ระบุ โปรดตรวจสอบอีกครั้ง');
                }
            } else {
                alert('พบข้อผิดพลาด : ' + status);
            }
        });
    }

    function confirmLocate() {
        console.log('Test');
        console.log(project_id, latitude, longitude, land_url, mask, cls_img);
        sendDataToAPI(latitude,longitude)
        
    }
    function sendDataToAPI(latitude, longitude) {
        const apiUrl = 'http://127.0.0.1:5000/location'; 
        const data = {
          latitude: latitude,
          longitude: longitude
        };
      
        fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
            navigate('/Dragareas')
        })
        .catch(error => {
          console.error('Error:', error);
          alert("เกิดข้อผิดพลาดจากการส่งข้อมูล",error)

        });
      }
      
      

    return (
        <div class = "main-all">
            <header>
                <Navbar/>
            </header>
            <span class="layout">
                <div class="left-card">
                    <div class="LocationSearch"> 
                        <p>ระบุพิกัดสถานที่</p>

                        <i class = 'icon-geo1' id="center-marker-button" onClick={() => centerMapOnMarker()} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        </i>
                    </div>
                    <div>
                        <input id="place-input" class = "inputLocate" type="text" placeholder="ค้นหา"/>
                        <hr class="line" />
                    </div>

                    <div class="LocationShow">
                        <div className="inside-locate">
                            <p class="locateShowInside">ตำแหน่งที่กำลังปักหมุด</p></div>
                            {latitude !== "" && longitude !== "" && <p>lat: {latitude} lng:{longitude}</p>}
                            <i class = 'icon-geo2'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
                            </svg></i>
                        </div>
                        
                        <hr class="line2" />
                        <div class = "btn-all">
                                <div class='btn-cf-1'>
                                <ConfirmBtn  id= 'ConfirmBtn' bg_color='#C1F5A9' title='ยืนยัน' onClick={() => {
                                            confirmLocate();}}/>
                            </div>
                            <div class='btn-back-1' >
                                <BackBtn bg_color='#E7E6E6' title='ย้อนกลับ' onClick={()=>
                                        navigate("/Selection")}/>
                            </div>
                        </div>
                        
                        
                </div>
                <div class="right-card">
                    <div id='map' class="Map"></div>             
                </div>
            </span>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>     
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCTbDuLw_0s3XN3lYrEVi5UtLFCetzRfA&libraries=places&callback=initMap" async defer></script>

    </div>
    )
}

export default Locate;

