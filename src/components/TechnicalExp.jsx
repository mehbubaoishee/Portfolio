import React from 'react';
import { FaClock, FaMapLocationDot, FaRegIdCard } from 'react-icons/fa6';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { TbWorldSearch } from 'react-icons/tb';

const TechnicalExp = () => {
    return (
        <>
            <div className='w-11/12 md:w-6/12 m-auto text-center  rounded-2xl p-4' id="TechnicalExp">
                <h1 className=' text-4xl md:text-5xl font-bold mb-8'>Technical Experience</h1>

                <p>Technical experience built from a lifelong passion for coding, refined through years of hands-on practice and professional work across various tech landscapes.</p>
            </div>

            <div className='w-11/12 md:w-10/12 m-auto text-center  rounded-2xl p-4 grid md:grid-cols-2 gap-6 mb-24'>

                {/* Left */}
                <div className='text-lg border p-4 rounded-lg shadow-lg'>
                    <h1 className='text-2xl font-bold p-2 grid grid-cols-2 justify-between items-center bg-[#262262] rounded-lg text-white'>
                        <span className='text-center'>Full Time Job</span>
                        <span className='badge border border-black m-auto text-base h-auto'>(02 May 2024 - Ongoing)</span>
                    </h1>
                    <hr className='border-b-2' />

                    <div className='md:flex gap-2 text-start'>
                        {/* Left Content */}
                        <div className='font-medium text-black/70 p-4 flex flex-col gap-2 md:w-4/6'>
                            <h1 className='flex justify-between items-center gap-2 text-xl font-bold'>
                                <span className='flex items-center gap-2'>
                                    <span><HiBuildingOffice2 /></span>
                                    <span>CBC Capital & Equity Management Ltd.</span>
                                </span>

                                {/* <span className='flex items-center gap-2'>
                                    <span><FaClock /></span>
                                    <span className='whitespace-nowrap'>Ongoing</span>
                                </span> */}
                            </h1>
                            <h1 className='flex items-center gap-2 text-xl font-semibold '>
                                <span><FaRegIdCard /></span>
                                <span className='badge border bg-[#232F39] text-white'>Senior Officer (IT)</span>
                            </h1>
                            <h1 className='flex items-center gap-2'>
                                <span><FaMapLocationDot /></span>
                                <span>Level-6, Unit-6L, N, Tower-A, Police Plaza Concord Tower, Plot# 2, Road# 144, Gulshan-1, Dhaka-1206, Bangladesh</span>
                            </h1>
                            <h1 className='flex items-center gap-2'>
                                <span><TbWorldSearch /></span>
                                <span>www.cbccapital.net</span>
                            </h1>
                        </div>



                        {/* Right Image (Fixed Size) */}
                        <div className='bg-[#232F39] rounded-lg m-4 flex items-center justify-center md:w-2/6 h-40'>
                            <img src="https://cbccapital.net/wp-content/uploads/2023/01/CBCCapitalLogo2.png" alt="Company Logo" className='h-full object-contain p-4' />
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className='text-lg border p-4 rounded-lg shadow-lg'>
                    <h1 className='text-2xl font-bold p-2 grid grid-cols-2 justify-between items-center bg-[#262262] rounded-lg text-white'>
                        <span className='text-center'>Internship</span>
                        <span className='badge border border-black m-auto text-base h-auto'>(October 2023 - March 2024)</span>
                    </h1>
                    <hr className='border-b-2' />

                    <div className='md:flex gap-2 text-start items-center'>
                        {/* Right Content */}
                        <div className='font-medium text-black/70 p-4 flex flex-col gap-2 md:w-4/6'>
                            <h1 className='md:flex justify-between items-center gap-2 text-xl font-bold'>
                                <span className='flex items-center gap-2'>
                                    <span><HiBuildingOffice2 /></span>
                                    <span>ReformedTech</span>
                                </span>
                                <span className='flex items-center gap-2'>
                                    <span><FaClock /></span>
                                    <span className='whitespace-nowrap'>06 Months</span>
                                </span>
                            </h1>
                            <h1 className='flex items-center gap-2 text-xl font-semibold '>
                                <span><FaRegIdCard /></span>
                                <span className='badge border bg-[#232F39] text-white'>Software Developer</span>
                            </h1>
                            <h1 className='flex items-center gap-2'>
                                <span><FaMapLocationDot /></span>
                                <span>House: 32/1, Road:03, Shyamoli, Dhaka-1207, Bangladesh.</span>
                            </h1>

                            <h1 className='flex items-center gap-2'>
                                <span><TbWorldSearch /></span>
                                <span>www.reformedtech.org</span>
                            </h1>
                        </div>



                        {/* Right Image (Fixed Size) */}
                        <div className='bg-[#232F39] rounded-lg m-4 flex items-center justify-center md:w-2/6 h-40'>
                            <img src="https://reformedtech.org/_nuxt/img/logo.2e45bce.png" alt="Company Logo" className='h-full object-contain p-4' />
                        </div>
                    </div>
                </div>


            </div >
        </>
    );
};

export default TechnicalExp;