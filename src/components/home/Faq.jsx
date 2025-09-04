import React, { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const faqs = [
    {
        question: "WHAT IS INTERIOR FIT OUT?",
        answer:
            "Interior fit out is the process of modifying a bare shell of a structure into a functional space. This typically involves installing partition walls, flooring, ceiling, fittings and furniture fixtures.",
    },
    {
        question: "WHAT DO INTERIOR FIT OUT COMPANIES IN DUBAI DO?",
        answer:
            "They specialize in transforming commercial and residential spaces by handling everything from design, approvals, construction, and interior finishing.",
    },
    {
        question: "HOW LONG DOES AN INTERIOR FIT OUT TYPICALLY TAKE?",
        answer:
            "The timeline varies depending on the scope and size of the project, but typically ranges between a few weeks to several months.",
    },
    {
        question: "WHAT IS THE SCOPE OF THE INTERIOR FIT OUT?",
        answer:
            "The scope covers all aspects of creating a usable interior environment, including electrical, mechanical, flooring, ceilings, partitions, furniture, and décor.",
    },
    {
        question: "HOW MUCH DOES AN INTERIOR FIT OUT COST?",
        answer:
            "Costs depend on size, design, and materials chosen. Basic fit outs can be relatively affordable, while high-end luxury finishes are more costly.",
    },
    {
        question: "WHAT COUNTRIES DOES RAYFITOUT OPERATE IN?",
        answer:
            "Rayfitout operates across multiple countries, providing interior fit out and design solutions worldwide.",
    },
];

function Faq() {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <>
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-8 md:py-18   ">
                {/* Banner */}
                <ScrollReveal>
                    <div className="bg-[#F1F1F1] h-auto py-6 md:py-12 w-full flex items-center">
                        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 px-2 sm:px-4 md:px-8">
                            {/* Left Text */}

                            <h1 className="text-lg sm:text-xl md:text-xl font-light text-center md:text-left uppercase tracking-wide">
                                Have a project in mind?
                            </h1>

                            {/* Button */}
                            <span className="flex gap-2 items-center border border-black text-black px-4 sm:px-6 py-2 sm:py-3 group cursor-pointer text-sm sm:text-base transition-all duration-300 hover:bg-black hover:text-white">
                                DROP AN INQUIRY
                                <svg
                                    className="w-4 h-4 stroke-black group-hover:stroke-white transition-colors duration-300"
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
                </ScrollReveal>


                {/* questions and answers */}
                <ScrollReveal>
                    <div className="py-8 md:py-10 lg:py-12  mx-auto text-[#8C8C8C]">
                        <h2 className="text-2xl font-semibold mb-6 border-b border-[#8C8C8C] py-8">FREQUENTLY ASKED QUESTIONS</h2>
                        <div className=" divide-y divide-[#8C8C8C]">
                            {faqs.map((faq, index) => (
                                <div key={index} className="py-4 md:py-4 lg:py-4">
                                    <button
                                        className="flex w-full justify-between items-center text-left "
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        <span className="font-light text-sm md:text-lg">{faq.question}</span>
                                        {openIndex === index ? (
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13 1L13 13M13 13L0.999999 13M13 13L1 0.999999" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        ) : (
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1H13M13 1V13M13 1L1 13" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        )}
                                    </button>
                                    {openIndex === index && (
                                        <p className="mt-4 text-[#8C8C8C] font-extralight">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>



        </>
    )
}

export default Faq