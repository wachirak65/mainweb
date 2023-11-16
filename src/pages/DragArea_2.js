    import React, { useState, useEffect } from 'react';

    import './DragArea_2.css'
    import Navbar from '../component/navbar.js'
    import ConfirmBtn from '../component/confirm_btn'
    import BackBtn from '../component/back_btn'


    function DragArea_2() {
        let map;

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
            const R = 6371; // รัศมีของโลกเป็นกิโลเมตร
            const dLat = toRad(lat2 - lat1);
            const dLon = toRad(lon2 - lon1);
            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
                    Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const distance = R * c;
            return distance * 1000; // คืนค่าเป็นเมตร
        }
        
        function toRad(deg) {
            return deg * (Math.PI / 180);
        }
            var center = { lat: 13.7563, lng: 100.5018 }; // ตำแหน่งกึ่งกลาง
        var maxDistance = 100; // ระยะทางสูงสุดที่อนุญาตให้ขยับ (หน่วยเป็นเมตร)
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
                strokeWeight: 1.4,
                clickable: false,
                editable: false,
                zIndex: 1,
                },
            });
            
            drawingManager.setMap(map);
            let drawnPolygons = []; // Array สำหรับเก็บพิกัดของ polygon ที่วาด
            let overlayAll = []
            let areaAll = [] // Array สำหรับเก็บพท.ของ polygon ที่วาด
            let currentOverlay;
            let forwardOverlayAll = []

            window.google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
                if (event.type === window.google.maps.drawing.OverlayType.POLYGON) {

                    // เก็บพิกัดของ polygon ที่วาดลงใน array
                    const coordinates = event.overlay.getPath().getArray().map(coord => ({
                        lat: coord.lat(),
                        lng: coord.lng(),
                        
                        
                    }));
                    const polygonPath = event.overlay.getPath();
                    // คำนวณ พื้นที่
                    const area = window.google.maps.geometry.spherical.computeArea(polygonPath);

                    areaAll.push(area.toFixed(2)+'ตารางเมตร')
                    overlayAll.push(event.overlay)
                    forwardOverlayAll.push(event.overlay)
                    drawnPolygons.push(coordinates);
                    
                    console.log('Area', areaAll)
                    console.log('Polygon coordinates:', drawnPolygons);
                    currentOverlay = event.overlay;
                }
                
            });
            
          

            //ฟังก์ชันสำหรับเข้าถึงตัว drag และกำหนด last position 
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
            
            const dragButton = document.getElementById('drag-1');
            dragButton.addEventListener('click' , function(){
                drawingManager.setDrawingMode(window.google.maps.drawing.OverlayType.POLYGON);
            })
            const undoButton = document.getElementById('drag-4');
            undoButton.addEventListener('click', function() {
            if (drawnPolygons.length >= 0) {
                drawnPolygons.pop();
                areaAll.pop();
                console.log('Updated drawnPolygons:', drawnPolygons);
                console.log('Update Area :',areaAll)
                
                if (overlayAll.length > 0) {
                    const lastOverlayIndex = overlayAll.length - 1;
                    const lastOverlay = overlayAll[lastOverlayIndex];
                    lastOverlay.setMap(null);
                    overlayAll.pop();
                }
            }
            });

            const forwardButton = document.getElementById('drag-5');
            forwardButton.addEventListener('click', function() {
                if (forwardOverlayAll.length>0) {
                    const lastIndexPolygon = forwardOverlayAll.length - 1;
                    forwardOverlayAll[lastIndexPolygon].setMap(map); 
                    overlayAll.push(forwardOverlayAll[lastIndexPolygon])
                    forwardOverlayAll.pop()
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
                                <div className='title-icon-drag'>ดินสอ</div>
                                <div className='Icon-back'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                    </svg>  
                                </div>
                            </div>
                            <div className="line-icon-2">
                                <button className="icon-drag" id='drag-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eraser" viewBox="0 0 16 16">
                                    <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"/>
                                    </svg>
                                </button>
                                <div className='title-icon-drag'>ยางลบ</div>
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
                        <div class='btn-cf-1'>
                                    <ConfirmBtn  bg_color='#E4E4E4' title='ยืนยัน' onClick={()=>
                                        console.log("confirm")}/>
                                </div>
                                <div class='btn-back-1'>
                                    <BackBtn bg_color='#E7E6E6' title='ย้อนกลับ' onClick={()=>
                                            console.log("back")}/>
                                </div>
                        </div>
                    </div>
                </div>
                <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCTbDuLw_0s3XN3lYrEVi5UtLFCetzRfA&libraries=places&callback=initMap" async defer></script>

            </div>
        
        )
    }

    export default DragArea_2