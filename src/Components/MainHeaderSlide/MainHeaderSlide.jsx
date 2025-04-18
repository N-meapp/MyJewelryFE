import React, { useState, useEffect } from 'react';

const MainHeaderSlide = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        '/public/assets/Images/header/slide1.png',
        '/public/assets/Images/header/slide2.png',
        '/public/assets/Images/header/slide3.png',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="relative w-full max-w-md overflow-hidden mx-auto rounded-xl">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((src, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <img src={src} alt={`Slide ${index}`} className="w-full h-[70vh] rounded-[20px] object-cover roun" />
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center gap-1.5 mt-3">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-[7px] rounded-full cursor-pointer transition-all duration-300 ${currentSlide === index ? 'w-6 bg-[#513535]' : 'w-4 bg-[#d2b48c]/40'
                            }`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default MainHeaderSlide;
