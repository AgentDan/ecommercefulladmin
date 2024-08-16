import React from 'react'
import "./rack.css"
import img0 from "./foto/0.jpg"
import img1 from "./foto/1.jpg"
import img2 from "./foto/2.jpg"
import img3 from "./foto/3.jpg"
import img4 from "./foto/4.jpg"
import img5 from "./foto/5.jpg"
import img6 from "./foto/6.jpg"
import img7 from "./foto/7.jpeg"
import img8 from "./foto/8.jpg"
import img9 from "./foto/9.jpeg"
import img10 from "./foto/10.jpg"

const Rack = () => {
    const render =
        <div className="bg-gray-400 w-auto">
            <h4 className="font-bold bg-red-400">RACK</h4>
            <div className="grid auto-rows-fr xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-auto">

                <div className="bg-red-300 rounded-md xs:h-full md:h-5/6 lg:h-4/6 m-2">
                    <img
                        src={img0}
                        alt=""
                        className="xs:h-5/6 lg:h-5/6 p-2 xs:w-auto"
                    />
                    <div className="h-auto">
                        <span className="font-bold h-auto">0</span>
                        <span className="block text-gray-600 text-sm h-auto">0</span>
                    </div>
                </div>

                <div className="bg-red-300 rounded-md xs:h-full md:h-5/6 lg:h-4/6 m-2">
                    <img
                        src={img1}
                        alt=""
                        className="xs:h-5/6 lg:h-5/6 p-2 "
                    />
                    <div className="h-auto">
                        <span className="font-bold h-auto">1</span>
                        <span className="block text-gray-600 text-sm h-auto">0</span>
                    </div>
                </div>

                <div className="bg-red-300 rounded-md xs:h-full md:h-5/6 lg:h-4/6 m-2 w-auto">
                    <img
                        src={img2}
                        alt=""
                        className="xs:h-5/6 lg:h-5/6 p-2"
                    />
                    <div className="h-auto">
                        <span className="font-bold h-auto">0</span>
                        <span className="block text-gray-600 text-sm h-auto">0</span>
                    </div>
                </div>

                <div className="bg-red-300 rounded-md xs:h-full md:h-5/6 lg:h-4/6 m-2 w-auto">
                    <img
                        src={img3}
                        alt=""
                        className="xs:h-5/6 lg:h-5/6 p-2"
                    />
                    <div className="h-auto">
                        <span className="font-bold h-auto">0</span>
                        <span className="block text-gray-600 text-sm h-auto">0</span>
                    </div>
                </div>

                <div className="bg-red-300 rounded-md xs:h-full md:h-5/6 lg:h-4/6 m-2 w-auto">
                    <img
                        src={img4}
                        alt=""
                        className="xs:h-5/6 lg:h-5/6 p-2"
                    />
                    <div className="h-auto">
                        <span className="font-bold h-auto">0</span>
                        <span className="block text-gray-600 text-sm h-auto">0</span>
                    </div>
                </div>

                <div className="bg-red-300 rounded-md xs:h-full md:h-5/6 lg:h-4/6 m-2 w-auto">
                    <img
                        src={img5}
                        alt=""
                        className="xs:h-5/6 lg:h-5/6 p-2"
                    />
                    <div className="h-auto">
                        <span className="font-bold h-auto">0</span>
                        <span className="block text-gray-600 text-sm h-auto">0</span>
                    </div>
                </div>

                <div className="bg-red-300 rounded-md xs:h-full md:h-5/6 lg:h-4/6 m-2 w-auto">
                    <img
                        src={img6}
                        alt=""
                        className="xs:h-5/6 lg:h-5/6 p-2"
                    />
                    <div className="h-auto">
                        <span className="font-bold h-auto">0</span>
                        <span className="block text-gray-600 text-sm h-auto">0</span>
                    </div>
                </div>

                <div className="bg-red-300 rounded-md xs:h-full md:h-5/6 lg:h-4/6 m-2 w-auto">
                    <img
                        src={img7}
                        alt=""
                        className="xs:h-5/6 lg:h-5/6 p-2"
                    />
                    <div className="h-auto">
                        <span className="font-bold h-auto">0</span>
                        <span className="block text-gray-600 text-sm h-auto">0</span>
                    </div>
                </div>

                <div className="bg-red-300 rounded-md xs:h-full md:h-5/6 lg:h-96 m-2 w-auto">
                    <img
                        src={img0}
                        alt=""
                        className="xs:h-full p-2 md:h-full lg:h-full"
                    />
                    <div className="">
                        <span className="font-bold ">8</span>
                        <span className="block text-gray-600 ">8</span>
                    </div>
                </div>

                <div className="bg-red-300 rounded-md xs:h-full md:h-5/6 lg:h-4/6 m-2 w-auto">
                    <img
                        src={img9}
                        alt=""
                        className="xs:h-5/6 lg:h-5/6 p-2"
                    />
                    <div className="h-auto">
                        <span className="font-bold h-auto">0</span>
                        <span className="block text-gray-600 text-sm h-auto">0</span>
                    </div>
                </div>

                <div className="bg-red-300 rounded-md xs:h-full md:h-5/6 lg:h-4/6 m-2 w-auto">
                    <img
                        src={img10}
                        alt=""
                        className="xs:h-5/6 lg:h-5/6 p-2"
                    />
                    <div className="h-auto">
                        <span className="font-bold h-auto">0</span>
                        <span className="block text-gray-600 text-sm h-auto">0</span>
                    </div>
                </div>

            </div>
        </div>

    return (
        <div className="h-auto">
            {render}
        </div>
    )
}

export default Rack