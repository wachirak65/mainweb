import React, { createContext, useContext, useState, useEffect } from "react";

const CreateProjectContext = createContext();

export const CreateProjectContextProvider = ({ children }) => {
    const [project_id, setProjectID] = useState(null);
    const [land_url, setLandURL] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [mask, setMask] = useState(null);
    const [cls_img, setClsImg] = useState(null);
    

    const updateProjectID = (newProjectID) => {
        setProjectID(newProjectID);
        localStorage.setItem('project_id', newProjectID);
    }

    const updateLatitude = (newLatitude) => {
        setLatitude(newLatitude);
        localStorage.setItem('latitude', newLatitude);
    }

    const updateLongitude = (newLongitude) => {
        setLongitude(newLongitude);
        localStorage.setItem('longitude', newLongitude);
    }

    const updateLandURL = (newURL) => {
        setLandURL(newURL);
        localStorage.setItem('land_url', newURL);
    }

    const updateClsImg = (newClsImg) => {
        setClsImg(newClsImg);
        localStorage.setItem('cls_img', newClsImg)
    }

    const updateMask = (newMask) => {
        setMask(newMask);
        localStorage.setItem('mask', newMask);
    }

    useEffect(() => {
        const storedProjectID = localStorage.getItem('project_id');
        const storedLatitude = localStorage.getItem('latitude');
        const storedLongitude = localStorage.getItem('longitude');
        const storedLandURL = localStorage.getItem('land_url');
        const storedClsImg = localStorage.getItem('cls_img');
        const storedMask = localStorage.getItem('mask');

        setProjectID(storedProjectID);
        setLatitude(storedLatitude);
        setLongitude(storedLongitude);
        setLandURL(storedLandURL);
        setClsImg(storedClsImg);
        setMask(storedMask);
        // console.log("storage:", storedProjectID, storedLatitude, storedLongitude, storedLandURL)
    }, [])
    
    return (
        <CreateProjectContext.Provider value={{ project_id, latitude, longitude, land_url, mask, cls_img, updateProjectID, updateLatitude, updateLongitude, updateLandURL , updateClsImg, updateMask}}>
            {children}
        </CreateProjectContext.Provider>
    )

    

}

export const useCreateProject = () =>{
    return useContext(CreateProjectContext);
}