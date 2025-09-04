import React from 'react'
import '../../App.css'


function Banner() {
    return (
        <div
            className="relative w-full h-[400px] sm:h-[400px] md:h-[500px] lg:h-[650px] bg-cover bg-center flex items-end banner-with-overlay"
            style={{ backgroundImage: "url('/bannerImg.jpg')" }}
        >
            {/* Text content */}
            <div className="relative z-10 text-white w-full px-8 md:px-12 py-8 md:py-12 lg:py-16 mx-auto">
                <p className="uppercase text-xs sm:text-sm md:text-sm font-extralight opacity-0 fade-up delay-1">
                    Services / Aluminium Systems
                </p>

                <h1 className="uppercase font-light text-lg sm:text-2xl md:text-4xl lg:text-5xl mt-2 opacity-0 fade-up delay-2">
                    Aluminum Systems
                </h1>

                <p className="uppercase text-xs sm:text-sm md:text-sm font-extralight mt-2 opacity-0 fade-up delay-3">
                    Contemporary Systems, Seamless Integration
                </p>
            </div>

        </div>

    )
}

export default Banner