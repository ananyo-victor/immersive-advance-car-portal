import React,{ useContext } from 'react';
import Slider from "./Slider";
import CarSection from "./CarSection";
import userContext from "../UserContext";



function Landing() {
    const { navHeight } = useContext(userContext);
    console.log(navHeight);

    const height = navHeight + 2;
    console.log(height);

    return (
        <>
            <div className="App relative">
                <div style={{ marginTop: `${height}px` }}>
                    <Slider />
                    <div className="flex flex-col items-center max-h-fit w-full">
                        <CarSection title="Featured Car" />
                        <CarSection title="Popular Car" />
                        <CarSection title="Featured Car" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing
