import React from 'react'
import CardWithTitle from './CardWithTitle'
import ScrollReveal from './ScrollReveal'

function OtherServices() {

    const content = [
        {
            tittle: "INTERIOR FIT OUT",
            image: "four.jpg"
        },
        {
            tittle: "INTERIOR DESIGN",
            image: "five.jpg"
        },
        {
            tittle: "ARCHITECTURE DESIGN",
            image: "six.jpg"
        }
    ]

    return (
        <>
            <ScrollReveal>
                <div className='border-t  border-gray-300'>
                    <div className='max-w-[1400px] mx-auto px-1 md:px-4 lg:px-8 py-8 md:py-12 mb:-4 md:mb-24 '>
                        <h1 className='text-2xl md:text-3xl font-sm font-poppins'>
                            OTHER SERVICES
                        </h1>


                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-6 mt-6  ">
                            {content.map((ctn, index) => (
                                <CardWithTitle
                                    key={index}
                                    title={ctn?.tittle}
                                    image={ctn?.image}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </>
    )
}

export default OtherServices