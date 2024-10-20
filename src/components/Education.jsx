import React from 'react';

const Education = () => {
    return (
        <>
            <div className='w-11/12 md:w-6/12 m-auto text-center rounded-2xl p-4 text-white' id="Education">
                <h1 className='text-4xl md:text-5xl font-bold mb-8'>Education</h1>
                <p>A Reflection of My Educational Background and Learning Experiences That Have Shaped My Career and Personal Growth</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 w-11/12 md:w-8/12 m-auto mb-20 font-semibold mt-10'>
                {/* Card 1 */}
                <div className='bg-white shadow-md rounded-lg p-4 '>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Green_University_of_Bangladesh_logo.svg/1200px-Green_University_of_Bangladesh_logo.svg.png" alt="Green University" className="w-full h-32 object-scale-down rounded-t-lg" />
                    <p className='inline-block bg-blue-500 text-white text-sm font-semibold rounded px-2 py-1 mt-1'>B.Sc</p> <br />
                    <p className='mt-2 badge bg-blue-900 text-white text-base h-auto'>Computer Science and Engineering (CSE)</p>
                    <h2 className='text-xl font-bold mt-2'>Green University of Bangladesh</h2>

                    <p className='mt-1'><span className='font-bold'>Passing Year:</span> 2024</p>
                    <p className='font-semibold'><span className='font-bold'>CGPA:</span> 2.83 / 4</p>
                </div>

                {/* Card 2 */}
                <div className='bg-white shadow-md rounded-lg p-4'>
                    <img src="https://ems-files.softbd.xyz/govtshahsultancollege/images/institute_img/logo.jpg" alt="Govt Shah Sulta College" className="w-full h-32 object-scale-down rounded-t-lg" />
                    <p className='inline-block bg-blue-500 text-white text-sm font-semibold rounded px-2 py-1 mt-1'>HSC</p>
                    <br />
                    <p className='mt-2 badge bg-blue-900 text-white text-base h-auto'>Science</p>
                    <h2 className='text-xl font-bold mt-2'>Govt Shah Sulta College, Bogura</h2>
                    <p className='mt-1'><span className='font-bold'>Passing Year:</span> 2019</p>
                    <p className='font-semibold'><span className='font-bold'>GPA:</span> 4.5 / 5</p>
                </div>

                {/* Card 3 */}
                <div className='bg-white shadow-md rounded-lg p-4'>
                    <img src="/bzs.jpeg" alt="Bogra Zilla School" className="w-full h-32 object-scale-down rounded-t-lg" />
                    <p className='inline-block bg-blue-500 text-white text-sm font-semibold rounded px-2 py-1 mt-1'>SSC</p>
                    <br />
                    <p className='mt-2 badge bg-blue-900 text-white text-base h-auto'>Science</p>
                    <h2 className='text-xl font-bold mt-2'>Bogra Zilla School, Bogra</h2>
                    <p className='mt-1'><span className='font-bold'>Passing Year:</span> 2017</p>
                    <p className='font-semibold'><span className='font-bold'>GPA:</span> 5.00 / 5.00</p>
                </div>
            </div>
        </>
    );
};

export default Education;
