import React,{useState,useEffect} from "react"
import "./Progressbar.css"

export default function Progressbar(){
    const [filled1,setFilled1]=useState(0);
    const [filled2,setFilled2]=useState(0);
    const [filled3,setFilled3]=useState(0);
    const [isRunning,setIsRunning]=useState(0);
    useEffect(() =>{
        
    })
    return(
        <div>
            <div className="progressbar">
                <div style={{
                    height: '100%',
                    width:`${filled1}%`,
                    backgroundColor:"#FF718B",
                    transition:"width 0.5s"
                }}></div>
                <div style={{
                    height: '100%',
                    width:`${filled2}%`,
                    backgroundColor:"#FFEB3A",
                    transition:"width 0.5s"
                }}></div>
                <div style={{
                    height: '100%',
                    width:`${filled3}%`,
                    backgroundColor:"#7FE47E",
                    transition:"width 0.5s"
                }}></div> 
                <span className="progressPercent-1">{filled1}%</span>
                <span className="progressPercent-2">{filled2}%</span>
                <span className="progressPercent-3">{filled3}%</span>
            </div>
            <p><a className="BTN" onClick={() =>setIsRunning(true)}>💬</a></p>
        </div>
    )
}
