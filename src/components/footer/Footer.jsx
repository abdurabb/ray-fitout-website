import React from "react";

function Footer() {
  return (
    <footer className="bg-[#F5F5F5] text-black ">
      <div className="border-b border-t border-gray-300 ">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-16">
          {/* Top Section - Hero and Button */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start  md:mb-10  gap-8">
            {/* Left Side - Hero Text and Email */}
            <div className="flex-1 ">
              <h2 className="text-[32px] md:text-[50px] font-mont font-light leading-[1.1] tracking-[-0.02em] text-[#000000]  max-w-[700px]">
                IDEAS COME TO LIFE <br />
                WITH CONVERSATION.
              </h2>
              <a
                href="mailto:info@rayfitout.com"
                className=" font-extralight text-lg md:text-xl lg:text-2xl font-mont"
              >
                INFO@RAYFITOUT.COM
              </a>
            </div>

            {/* Right Side - Button */}
            <div className="flex-shrink-0">
              <button className="w-full md:w-auto px-8 py-3 border-2 border-[#D9D9D9] text-black font-medium hover:bg-black hover:text-white transition-colors duration-200">
                DROP AN INQUIRY
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* office */}
      <div className="border-b border-gray-300">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 md:py-8 ">
          <div className="md:flex mx-auto text-center md:text-start ">
            {/* heading */}
            <div className="w-full md:w-1/4 ">
              <h3 className="text-sm font-semibold text-black">OFFICE</h3>
            </div>

            {/* body */}
            <div className="flex-1 ml-0 md:ml-8  grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="font-semibold text-black mb-2">DUBAI, UAE</p>
                <p className="text-sm text-black leading-relaxed">
                  23, ST 35, AL QUSAIS 5<br />
                  +971 800 729 43
                </p>
              </div>
              <div>
                <p className="font-semibold text-black mb-2">RIYADH, SAUDI ARABIA</p>
                <p className="text-sm text-black leading-relaxed">
                  LEVEL 6, GATE D, AL<br />
                  AKARIA PLAZA, RIYADH<br />
                  SAUDI ARABIA<br />
                  + 966 800 891 2050
                </p>
              </div>
              <div>
                <p className="font-semibold text-black mb-2">NAIROBI, KENYA</p>
                <p className="text-sm text-black leading-relaxed">
                  OFFICE 2504, BRITAM<br />
                  TOWER, HOSPITAL HILL<br />
                  ROAD, UPPERHILL, KENYA<br />
                  +254 2076 40228
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Business */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 md:py-8  ">
          <div className="md:flex mx-auto text-center md:text-start ">
            {/* heading */}
            <div className="w-full md:w-1/4 ">
              <h3 className="text-sm font-semibold text-black">BUSINESS</h3>
            </div>

            {/* body */}
            <div className="flex-1 ml-0 md:ml-8  grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="font-semibold text-black mb-2">INQUIRIES</p>
                <p className="text-sm text-black leading-relaxed">
                  INFO@RAYFITOUT.COM
                </p>
              </div>
              <div>
                <p className="font-semibold text-black mb-2">CAREER</p>
                <p className="text-sm text-black leading-relaxed">
                  INFO@RAYFITOUT.COM
                </p>
              </div>
              <div>
                <p className="font-semibold text-black mb-2">SUPPLIERS</p>
                <p className="text-sm text-black leading-relaxed">
                  INFO@RAYFITOUT.COM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border Section */}
      <div className=" border-gray-300 ">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 md:py-6">
          <div className="flex flex-col md:flex-row md:justify-between  items-center text-sm text-black gap-4">
            <div className="flex flex-wrap gap-6 md:gap-12">
              <a href="#" className="hover:underline">PRIVACY POLICY</a>
            </div>
            <div className=" md:flex gap-8">
              <a href="#" className="hover:underline">YOUTUBE</a>
              <a href="#" className="hover:underline">PINTEREST</a>
            </div>
            <p className="md:text-right">© 2025 RAYFITOUT</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;