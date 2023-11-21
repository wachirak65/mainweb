import React, { useEffect } from 'react';
import './DragArea_2.css'
import Navbar from '../component/navbar.js'
import ConfirmBtn from '../component/confirm_btn'
import BackBtn from '../component/back_btn'
import { useNavigate } from 'react-router-dom';

function DragArea_2() {
    let map;
    let areaAll = [] 
    let navigate = useNavigate();
    let polygonCoordinates = {};
    let drawnPolygons = [];
    let coordinatesDict = {};

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
    
    function haversineDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; 
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;
        return distance * 1000; // เป็นเมตร
    }
    
    function toRad(deg) {
        return deg * (Math.PI / 180);
    }
        var center = { lat: 13.7563, lng: 100.5018 }; // ตำแหน่งกึ่งกลาง
    var maxDistance = 100; // ระยะทางสูงสุด
    var lastValidCenter = center; // ตำแหน่งสุดท้ายที่ขยับได้และใช้ต่อข้เางล่าง

    function initMap() {
        map = new window.google.maps.Map(document.getElementById('label-drag'), {
            center: center, 
            zoom: 20,
            fullscreenControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            rotateControl: false,
            scaleControl: false,
            panControl: false,
            zoomControl: true,
            mapTypeId: 'satellite',
            draggable: true
        });
        const drawingManager = new window.google.maps.drawing.DrawingManager({
            
            drawingControl: false,
            drawingControlOptions: {
            drawingModes: [
                window.google.maps.drawing.OverlayType.POLYGON,
            ],
            },
            markerOptions: {
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            },
            polygonOptions: {
            fillColor: "#99FF99",
            fillOpacity: 0.7,
            strokeColor: '#99FF99',
            strokeWeight: 3.5,
            clickable: false,
            editable: false,
            zIndex: 1,
            },
        });
        
        drawingManager.setMap(map);
        let overlayAll = []
        let currentOverlay;
        let forwardOverlayAll = []
        let forwardArea = []
        let polygons = {}

        window.google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
            if (event.type === window.google.maps.drawing.OverlayType.POLYGON) {

                // เก็บพิกัดของ polygon ที่วาดลงใน array
                const coordinates = event.overlay.getPath().getArray().map(coord => ({
                    lat: coord.lat(),
                    lng: coord.lng(),
                    
                    
                }));
                const polygonName = `Polygon ${Object.keys(polygons).length + 1}`; 
                polygons[polygonName] = coordinates; 
                console.log(`Coordinates of ${polygonName}:`, coordinates);


                const polygonPath = event.overlay.getPath();
                // คำนวณ พื้นที่
                const area = window.google.maps.geometry.spherical.computeArea(polygonPath);

                areaAll.push(area.toFixed(2)+'ตารางเมตร')
                overlayAll.push(event.overlay)
                forwardOverlayAll.push(event.overlay)
                drawnPolygons.push(coordinates);
                // console.log('Update Area:', areaAll);
                currentOverlay = event.overlay;
            }
            
        });
        
        var listener = map.addListener('drag', function() {
            var centerPosition = map.getCenter();
            var distance = haversineDistance(center.lat, center.lng, centerPosition.lat(), centerPosition.lng());
    
            if (distance > maxDistance) {
                map.panTo(center);
                setTimeout(function() {
                    alert("ไม่สามารถขยับออกจากตำแหน่งพื้นที่หลักของคุณได้");
                }, 600);
            } else {
                lastValidCenter = centerPosition;
            }
        }
        );

        const clearAllPolygons = () => {
            overlayAll.forEach(polygon => {
                polygon.setMap(null);
            });
            drawnPolygons = [];
            overlayAll = []
            currentOverlay = []
            forwardOverlayAll = []
            forwardArea = []
            areaAll = [];

        };
        
        const dragButton = document.getElementById('drag-1');
        dragButton.addEventListener('click' , function(){
            drawingManager.setDrawingMode(window.google.maps.drawing.OverlayType.POLYGON);

        })
        const cfButton = document.getElementById('cf-btn');
        cfButton.addEventListener('click', function() {
            updateCoordinatesDict();
        });
        
        const cancelDragButton = document.getElementById('drag-2');
        cancelDragButton.addEventListener('click', function(){
            drawingManager.setDrawingMode(null);
        });

        const clearButton = document.getElementById('drag-3');
        clearButton.addEventListener('click', clearAllPolygons);

        function updateCoordinatesDict() {
            let coordinatesDict = {}; 
        
            overlayAll.forEach((polygonOverlay, index) => {
                const path = polygonOverlay.getPath(); 
                const coordinates = []; 
                
                for (let i = 0; i < path.getLength(); i++) {
                    const point = path.getAt(i); 
                    coordinates.push([point.lng(), point.lat()]); 
                }
        
                coordinatesDict[index + 1] = coordinates; 
            });
        
            console.log('Coordinates Dictionary:', coordinatesDict);

            fetch('http://127.0.0.1:5000/coordinate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({coordinatesDict}),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Response from API:', data);
                navigate("/ChoosePage")
            })
            .catch(error => {
                // กรณีเกิด error ในการส่งข้อมูลหรือการตอบกลับจาก API
                console.error('Error sending data to API:', error);
                alert("เกิดข้อผิดพลาดจากการส่งข้อมูล",error)

            });
            return coordinatesDict;
        }

        const undoButton = document.getElementById('drag-4');
        undoButton.addEventListener('click', function() {
            if (drawnPolygons.length > 0 && areaAll.length > 0 && overlayAll.length > 0) {
                const removedOverlay = overlayAll.pop();
                const removedArea = areaAll.pop();


                if (removedOverlay !== undefined && removedArea !== undefined) {
                    forwardOverlayAll.unshift(removedOverlay);   
                    forwardArea.unshift(removedArea);  
                }

                removedOverlay.setMap(null);

            } 
        });

        const forwardButton = document.getElementById('drag-5');
        forwardButton.addEventListener('click', function() {
            if (forwardOverlayAll.length > 0 && forwardArea.length > 0) {
                const restoredOverlay = forwardOverlayAll.shift(); 
                const restoredArea = forwardArea.shift(); 

                overlayAll.push(restoredOverlay); 
                drawnPolygons.push(restoredOverlay); 
                areaAll.push(restoredArea); 
                restoredOverlay.setMap(null); 
                restoredOverlay.setMap(map); 

            }

});
        
    }
    return (
        <div class='background' id='bg-dragArea'>
            <header>
                <Navbar/>
                
            </header>
            <div className="All-Drag">
                <div className="left-drag">
                    <div className="title-drag">
                        <h4 id='title-drag-1'>วาดเส้นพื้นที่ของคุณ</h4>
                        <div className='line-drag'>
                        <hr />
                    </div>
                    </div>
                    <div className="label-drag"  id="label-drag">
                        <p  id="label-drag">This is for google map zone</p>
                    </div>
                </div>
                <div className="rightbar">
                    <div className="title-drag"><h4 id='title-drag-2'>เครื่องมือสำหรับการวาดพื้นที่</h4></div>
                    <div className='line-drag-a'>
                        <hr />
                    </div>
                    <div className="button-drag">
                        <div className="line-icon">
                            <button className="icon-drag" id='drag-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                </svg>
                            </button>
                            <div className='title-icon-drag'>โหมดดินสอ</div>
                            <div className='Icon-back'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                </svg>  
                            </div>
                        </div>
                        <div className="line-icon-2">
                            <button className="icon-drag" id='drag-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-index-thumb" viewBox="0 0 16 16">
                            <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.632 2.632 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z"/>
                            </svg>
                            </button>
                            <div className='title-icon-drag'>โหมดลาก</div>
                            <div className='Icon-back'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                </svg>
                            </div>
                        </div>
                        <div className="line-icon-3">
                            <button className="icon-drag" id='drag-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                </svg>
                            </button>
                            <div className='title-icon-drag'>ลบทั้งหมด</div>
                            <div className='Icon-back'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                </svg>  
                            </div>
                        </div>
                        <div className="reverse-btn">
                            <button className="icon-drag" id='drag-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                                </svg>
                            </button>
                            <button className="icon-drag" id='drag-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="button-back-drag"></div>
                    <div className='line-drag-b'>
                        <hr />
                    </div>
                    <div className="btn-drag-all">
                    <div class='btn-cf-1' id='cf-btn'>
                                <ConfirmBtn  bg_color='#C1F5A9' title='ยืนยัน' />
                            </div>
                            <div class='btn-back-1'>
                                <BackBtn bg_color='#E7E6E6' title='ย้อนกลับ' onClick={()=>
                                        navigate("/Locate")}/>
                            </div>
                    </div>
                </div>
            </div>
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCTbDuLw_0s3XN3lYrEVi5UtLFCetzRfA&libraries=places&callback=initMap" async defer></script>

        </div>
    
    )
}

export default DragArea_2