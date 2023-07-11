import React from "react";
import med1 from "./images/nurses.jpg"
import { TiTick } from 'react-icons/ti'

function Home() {

    return (
        <div className="relative container mx-auto bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 p-4 justify-center">
                <div className="flex flex-col p-4 bg-white rounded-lg">
                    <h2 className="text-[2em] font-bold text-blue-800 p-4 text-center">Take control of your health</h2>
                    <div className="flex items-center gap-2 my-2">
                        <div className="text-blue-800"><TiTick size={25} /></div>
                        <h2>Store, manage, and access your medical information securely in one place.</h2>
                    </div>
                    <div className="flex items-center gap-2 my-2">
                        <div className="text-blue-800"><TiTick size={25} /></div>
                        <h2>Track medications, allergies, vital signs, and immunization records effortlessly</h2>
                    </div>
                    <div className="flex items-center gap-2 my-2">
                        <div className="text-blue-800"><TiTick size={25} /></div>
                        <h2>Never miss an appointment again with customizable reminders</h2>
                    </div>
                    <h2>Join us today and revolutionize the way you manage your health</h2>
                    <button className="font-bold text-white my-6 bg-blue-800 w-max mx-auto px-4 py-2 rounded-full text-xl">Sign up now for a healthier future</button>
                </div>
                <div className="flex items-center justify-center">
                    <div className="max-w-lg"> 
                        <img className="rounded-full" alt="Nurses" src={med1} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;