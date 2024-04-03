"use client";

// import "globals.css"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Icons } from './Icons/Icons'



const Featured = () => {

const [data, setData] = useState([]);
const getData = () => {
    fetch("links.json")
        .then((response) => response.json())
        .then((data) => {
            setData(data);
        });
};
useEffect(() => {
    getData();
    console.log(data)
}, []);


    return (
        <div className='w-full'>
            {/* CONTAINER */}
            <div className='container mx-auto p-5 w-full '>
                {/* TITLE */}
                <div className='m-4 py-8'>
                    <div className='mb-10 flex items-center gap-5'>
                        <div className='w-6 h-12 bg-green-500 rounded-lg'></div>
                        <h1 className='text-xl'>categories</h1>
                    </div>
                    <h1 className='text-4xl font-bold'>Browse by categories</h1>
                </div>
                <div className='hide-scroll overflow-x-scroll'>
                    {/* WRAPPER */}
                    <div className='flex gap-5 w-max' >
                        {/* SINGLE ITEM */}
                        {data?.map((item: any) => (
                            item.properties?.map((categ: any) => (
                                <div key={categ.id} className='w-40 h-40 border-2 border-slate-300 rounded-lg text-myBlack hover:text-myWhite hover:bg-primary flex flex-col items-center p-2 transition-all duration-300 cursor-pointer shadow-xl'>
                                    {/* IMAGE CONTAINER */}
                                    <div className='flex-1 flex items-center w-10 h-10' >
                                        <Icons name={categ.icon} />
                                    </div>
                                    {/* TEXT CONTAINER */}
                                    <div className='flex-1'>
                                        <h1 className='text-center'>{categ.title}</h1>
                                    </div>
                                </div>
                            ))
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured