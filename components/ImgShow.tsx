"use client";

import { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import "react-photo-view/dist/react-photo-view.css";

export default function GalerieProduit() {
    const images = [
        'calandis-modern-white-ceramic-flower-vase.jpg.jpeg',
        '/67a09b33dc97f.jpg',
        '/67a09b33dc97f.jpg',
        '/67a09b33dc97f.jpg'
    ];


    const [imgview, setImgview] = useState("")

    return (
        <PhotoProvider>
            <div className="flex gap-2 bg-red-300 flex-col">
                <div className='flex flex-col h-full justify-between'>
                    <PhotoView src={imgview} >
                        <div className=' h-full w-full'>
                            <img src={imgview} alt="" width={120} className='h-80 w-full object-cover' />
                        </div>
                    </PhotoView>
                    <div className='grid grid-cols-4 gap-2 bg-amber-50'>
                        {images.length > 0 && images.map((item, index) => (
                            <>
                                <div className='h-30 '>
                                    <img src={item} alt="" width={120} className='h-full cursor-pointer' onClick={() => setImgview(item)} />
                                </div>

                            </>
                        ))}
                    </div>
                </div>
            </div>
        </PhotoProvider>
    );
}
