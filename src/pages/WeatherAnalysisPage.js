import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';
  
import Navbar from '../component/navbar';
import './WeatherAnalysisPage.css'



function WeatherAnalysisPage(){
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

    return (
        <div className='background'>
            <Navbar/>
            <div className="main-content">
                <div className="weather-table">
                    <div className="title-chart">
                        <div className="weather-header">
                            <div className="weather-title">
                                <p>Weather conditions of the area</p>
                                <h1>สภาพอากาศของพื้นที่</h1>
                            </div>
                            <div className="dropdown">
                                <div className="dropdown-weather-detail">
                                    <p>เพิ่มเติม</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </div>
                                <div class="dropdown-content">
                                    <a href="#">ภาพรวม</a>
                                    <a href="#">คุณภาพดิน</a>
                                    <a href="#">การเข้าถึงพื้นที่</a>
                                </div>
                            </div>
                        </div>
                        <div className="label-chart">
                            <div className="label">
                                <div className="circle-label" style={{backgroundColor:'#93AAFD'}}></div>
                                <p>ปริมาณน้ำฝน</p>
                            </div>
                            <div className="space-label"></div>
                            <div className="label">
                                <div className="circle-label" style={{backgroundColor:'#FF718B'}}></div>
                                <p>อุณหภูมิ</p>
                            </div>
                        </div>
                        <div className="date-range">
                            <p>Days</p>
                            <p>Weeks</p>
                            <p>Months</p>
                        </div>
                    </div>
                    <div className="dropdown-graph-table">
                        <div className="dropdown-weather-detail">
                            <p>ทั้งหมด</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                        <div class="dropdown-content">
                            <a href="#">ทั้งหมด</a>
                            <a href="#">ปริมาณน้ำฝน</a>
                            <a href="#">อุณหภูมิ</a>
                        </div>
                    </div>
                    <div className="weather-chart">
                        <ResponsiveContainer width="90%" height="80%">
                            <LineChart width={500} height={300} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="pv" stroke="#93AAFD" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="uv" stroke="#FF718B" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default WeatherAnalysisPage;