import React from 'react';

const Introduction = () => {
    return (
        <>
            <div className='w-11/12 md:w-9/12 m-auto text-center  rounded-2xl p-4 my-16 ' id="about-me" >
                <div>
                    <h1 className=' text-4xl md:text-5xl font-bold mb-10'>Introduction</h1>
                    
                </div>
                <div className='grid md:grid-cols-2 gap-20'>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="flex flex-col justify-center p-4 md:p-10 h-full">
                            <h2 className="font-bold text-xl text-center">Web Developer</h2>
                            <p>I am a frontend developer specializing in creating modern and user-friendly websites and applications. With expertise in HTML, CSS, JavaScript, and React.js, I am skilled in developing dynamic and interactive user interfaces. My goal is to enhance user experience through technology while assisting clients in achieving their business objectives. I am eager to join a project where I can apply my skills to deliver high-quality solutions.</p>

                        </div>
                    </div>

                    <div className='w-full h-full card shadow-xl justify-center flex flex-col gap-5 p-4'
                    >
                        <div className='border rounded-xl shadow-md'>
                            <img className='rounded-xl p-2' src="https://i.ibb.co.com/WGF0RkT/image.png" alt="" />
                        </div>
                        <div className='shadow-md'>
                            <a
                                href="/Resume.pdf"  // Replace with the actual path to your PDF
                                download="My_Resume.pdf"
                                className='btn w-full bg-[#262262] text-white hover:bg-[#C4D8E1] hover:text-black text-lg font-bold text-center'
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>

                </div>






            </div>



        </>
    );
};

export default Introduction;