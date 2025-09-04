import React from 'react'
import CardWithTitle from './CardWithTitle'
import ScrollReveal from './ScrollReveal'


function ProductAndService() {
    const cards = [
        {
            title: "Complimentary Installation ",
            content: "We offer complimentary professional installation by our in-house technicians to ensure flawless execution on every project."
        },
        {
            title: "Made-to-Measure Architecture",
            content: "Every system is precisely fabricated to its environment. No gaps, no compromises—only bespoke precision."
        },
        {
            title: "Patented Designs",
            content: "Our systems are designed to be embedded in the architecture—not added onto it. They align perfectly with joinery, wall cladding, and interior finishes."
        }
    ];

    const profiles = [
        {
            tittle: "INTERIOR FIT OUT",
            image: "alm1.png"
        },
        {
            tittle: "INTERIOR DESIGN",
            image: "alm2.png"
        },
        {
            tittle: "ARCHITECTURE DESIGN",
            image: "alm3.png"
        }
    ]

    const alm = [
        {
            img: "doors.png",
            tittle: "Doors"
        },
        {
            img: "windowos.png",
            tittle: "Windows"
        },
        {
            img: "partitions.png",
            tittle: "Partitions"
        },
        {
            img: "pergolas.png",
            tittle: "pergolas"
        },
        {
            img: "bulletWindow.png",
            tittle: "BULLET RESISTANT WINDOWS"
        },
        {
            img: "curtainWalls.png",
            tittle: "Curtain Walls & FaCades"
        },

    ]

    return (

        <>
            {/* content under banner */}
            <ScrollReveal>
                <div className='px-8 md:px-12 py-8 md:py-24 text-[#8C8C8C] font-mont font-light'>
                    <p>Our aluminum joinery collection is designed not merely as functional elements, but as architectural statements. Every door, partition, and wardrobe system reflects a deliberate interplay of proportion, material, and technology—where nothing is exposed, yet everything is experienced. Our aluminum joinery collection is designed not merely as functional elements, but as architectural statements. Every door, partition, and wardrobe system reflects a deliberate interplay of proportion, material, and technology—where nothing is exposed, yet everything is experienced. Our aluminum joinery collection is designed not merely as functional elements, but as architectural statements. Every door, partition, and wardrobe system reflects a deliberate interplay of proportion, material, and technology—where nothing is exposed, yet everything is experienced.</p>
                </div>
            </ScrollReveal>
            {/* our alumni items */}
            <div className='border-t border-[#D9D9D9] px-8 md:px-12 py-8 md:py-24'>
                <ScrollReveal>
                    <h1 className='text-2xl font-mont'>OUR ALUMINIUM SYSTEMS</h1>
                    <p className='text-[#8C8C8C]' >Expert craftsmanship in aluminium systems, offering fit your unique space.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 ">
                        {alm.map((ctn, index) => (
                            <div key={index}>
                                <img src={`${ctn?.img}`} alt="" />
                                <h1 className=' uppercase text-[#000000] font-light font-mont mt-1 md:mt-3'>{ctn?.tittle}</h1>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>


            <div className='border-t border-[#D9D9D9] p-8 md:p-12'>
                <ScrollReveal>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6">
                        {profiles.map((ctn, index) => (
                            <CardWithTitle
                                key={index}
                                title={ctn?.tittle}
                                image={ctn?.image}
                            />
                        ))}
                    </div>
                </ScrollReveal>
            </div>



            <div className='my-4 md:my-8   h-auto md:h-[400px]'>
                <ScrollReveal>
                    <div className='max-w-[1400px] mx-auto text-center md:text-start md:px-4 lg:px-8 py-4 md:py-8'>
                        <h1 className='text-xl md:text-2xl font-light font-mont uppercase' >About Our Products & Services</h1>
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                <div className="border-t border-b border-[#D9D9D9]">
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1400px]  px-4 md:px-4 lg:px-8 py-4 md:py-8'>
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className='bg-white p-6 rounded-md  flex flex-col '
                            >
                                <h2 className='text-lg md:text-xl font-light mb-2  uppercase text-[#000000] font-mont'>
                                    {card.title}
                                </h2>
                                <p className=' text-[#8C8C8C]'>
                                    {card.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                </ScrollReveal>
            </div>
        </>
    )
}

export default ProductAndService