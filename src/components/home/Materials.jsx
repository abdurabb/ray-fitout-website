import React from 'react';
import ScrollReveal from './ScrollReveal'

function Materials() {
  return (
    <>

      <ScrollReveal>
        <div
          className="relative w-full h-[350px] sm:h-[350px] md:h-[500px] lg:h-[700px] bg-cover bg-center flex items-center middle-banner"
          style={{ backgroundImage: "url('/main.jpg')" }}
        >
          {/* Content */}
          <div className="relative z-10 w-full mx-4 sm:mx-6 md:mx-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">

            {/* Left Text */}
            <div className="p-2 sm:p-4 text-white max-w-xl">
              <h1 className="uppercase text-sm sm:text-sl md:text-lg">
                <span className="font-extralight">seamless </span>
                <span className="font-light">integration</span>
              </h1>
              <p className="uppercase mt-2 sm:mt-3 md:mt-5 text-base sm:text-xl md:text-3xl leading-snug">
                <span className='font-light'>Bespoke</span> <span className='font-extralight'>systems</span>,<br />
                <span className='font-light' >custom made <span className='font-extralight' >for your</span> space</span>
              </p>
            </div>

            {/* Right Button */}
            <div className="p-2 sm:p-4">
              <span className="flex gap-2 items-center border text-white border-white px-4 sm:px-6 py-2 sm:py-3 group cursor-pointer text-sm sm:text-base transition-all duration-300 hover:bg-white hover:text-black">
                DROP AN INQUIRY
                <svg
                  className="w-4 h-4 stroke-white group-hover:stroke-black transition-colors duration-300"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 1.5625H16M16 1.5625V16.5625M16 1.5625L1 16.5625" />
                </svg>
              </span>
            </div>

          </div>
        </div>
      </ScrollReveal>


      <div className='w-full md:flex my-4 md:my-16  h-auto md:h-[400px]  gap-0'>
        <div className='w-full md:w-1/2 h-[300px] md:h-full md:pr-12'>
          <video
            className='w-full h-full object-cover'
            src="/two.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className='w-full md:w-1/2 h-[300px] md:h-full mt-1 md:mt-0'>
          <video
            className='w-full h-full object-cover'
            src="/three.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      {/* materials content */}
      <ScrollReveal>
        <div className='border-t border-b border-gray-300'>
          <div className='w-full md:flex h-auto md:h-[400px]'>
            {/* content */}
            <div className='w-full md:w-1/2 py-8 px-8 md:px-16   flex-col justify-between'>
              <h1 className="text-sm md:text-xl text-[#9A9A9A] md:pt-8 font-extralight">MATERIALS</h1>
              <div className='pt-2'>
                <h1 className='text-2xl text-[#9A9A9A] font-light' >UNLIKE PLASTICS,</h1>
                <h1 className='text-2xl text-[#000000] font-light' >ALUMINUM IS 100%</h1>
                <h1 className='text-2xl text-[#9A9A9A] font-light' ><span className='text-[#000000]' >RECYCLABLE</span>.MOREOVER,</h1>
                <h1 className='text-2xl text-[#9A9A9A] font-light' >APPROXIMATELY 70% OF IT</h1>
                <h1 className='text-2xl text-[#000000] font-light' >PRODUCED IS STILL IN USE.</h1>
              </div>
              <div className="pt-8 md:pt-12" >
                <button className=" md:w-auto px-4 md:px-8 py-3 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-colors duration-200">
                  <span className='flex gap-2 items-center group cursor-pointer'>
                    VIEW PROJECTS
                    <svg
                      className='w-4 h-4 mt-1 stroke-black group-hover:stroke-white transition-colors duration-200'
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 1.5625H16M16 1.5625V16.5625M16 1.5625L1 16.5625" />
                    </svg>
                  </span>

                </button>
              </div>
            </div>

            {/* image */}
            <div
              className='w-full h-[300px] md:h-full md:w-1/2 bg-cover bg-center'
              style={{ backgroundImage: `url('/one.png')` }}
            >
              {/* Optional overlay or text */}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}

export default Materials;
