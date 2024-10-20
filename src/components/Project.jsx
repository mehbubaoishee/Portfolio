import React from 'react';

const Project = () => {
    return (
        <>
            <div className='w-11/12 md:w-6/12 m-auto text-center  rounded-2xl p-4 bg-[#F5F5F5]' id="projects">
                <h1 className=' text-4xl md:text-5xl font-bold mb-8'>My Projects</h1>

                <p>Explore the Projects That Reflect My Passion for Web Development, Problem Solving, and User-Centered Design, Showcasing My Commitment to Creating Functional and Aesthetic Solutions Tailored to Real-World Needs and Challenges.</p>
            </div>
            <div className='w-11/12 md:w-10/12 m-auto my-4 '>

                {/* Project 1 */}
                <div className='grid md:grid-cols-2 gap-5 bg-[#F5F5F5] my-10 p-10 rounded-lg shadow-md'>
                    {/* Left */}
                    <div className='shadow-lg border p-10 rounded-lg'>
                        <img className=' rounded-lg' src="/aqua.png" alt="" />
                        <div className='mt-4 flex gap-5 flex-wrap justify-evenly'>
                            <a href="https://real-estate-assignment9.web.app/"><button className='btn bg-blue-950 text-white hover:text-black font-bold'>Live Link</button></a>
                            <a href="https://github.com/programming-hero-web-course-4/b9a9-real-estate-shimul705.git"> <button className='btn bg-blue-950 text-white hover:text-black font-bold'>GitHub Repository (Client)</button></a>
                            <a href=""><button disabled className='btn bg-blue-950 text-white hover:text-black font-bold'>GitHub Repository (Server)</button></a>
                        </div>

                    </div>

                    {/* Right */}
                    <div className='flex flex-col p-10 rounded-lg shadow-lg bg-white'>
                        <h1 className='mt-10 text-2xl font-bold'>Project Name: <span className='font-thinlight'>AQUALIX</span></h1>
                        <p><span className='text-2xl font-bold'>Description: </span> Aqualux is a comprehensive real estate web platform that allows users to browse, view, and book properties after logging in. The platform is designed with a secure authentication system using Firebase, ensuring that only registered users can access property details and booking options. The project is built with a modern frontend and backend architecture, leveraging React for dynamic client-side interactions and a robust MongoDB database to manage property data. The platform also incorporates Firebase for authentication and deployment, ensuring a smooth and scalable user experience.</p>
                        <h1 className=' text-2xl font-bold mt-3'>Core Features: </h1>
                        <ul className='list-disc pl-5 '>
                            <li className='mt-2'><span className='font-semibold'>User Authentication:</span> Secure login and registration using Firebase Authentication.</li>
                            <li className='mt-2'><span className='font-semibold'>Property Browsing:</span> Logged-in users can explore and view available properties with detailed information.</li>
                            <li className='mt-2'><span className='font-semibold'>Property Booking:</span> Registered users can book properties through the platform.</li>
                            <li className='mt-2'><span className='font-semibold'>Data Management:</span> Property data stored and managed using MongoDB for fast and reliable access.</li>
                            <li className='mt-2'><span className='font-semibold'>Client-Side & Server-Side Integration:</span> Seamless interaction between the frontend and backend using Firebase.</li>
                            <li className='mt-2'><span className='font-semibold'>Routing:</span> Dynamic navigation and routing across the website using React Router.</li>
                        </ul>
                        <h1 className=' text-2xl font-bold mt-3'>Used Technologies:</h1>
                        <ul className='list-disc pl-5 '>
                            <li className='mt-2'><span className='font-semibold'>Frontend:</span> React, React Router, Tailwind CSS</li>
                            <li className='mt-2'><span className='font-semibold'>Backend:</span> Node.js, Express</li>
                            <li className='mt-2'><span className='font-semibold'>Database:</span> MongoDB</li>
                            <li className='mt-2'><span className='font-semibold'>Authentication & Hosting:</span> Firebase Authentication, Firebase Hosting</li>
                            <li className='mt-2'><span className='font-semibold'>Other:</span> RESTful API, JavaScript, Firebase Functions</li>
                        </ul>

                    </div>
                </div>

                {/* Project 2 */}
                <div className='grid md:grid-cols-2 gap-5 bg-[#F5F5F5] my-10 p-10 rounded-lg shadow-md'>

                    {/* Left */}
                    <div className='flex flex-col p-10 border rounded-lg shadow-lg bg-white md:order-1 order-2'>
                        <h1 className='mt-10 text-2xl font-bold'>Project Name: <span className='font-thinlight'>Book Vibe</span></h1>
                        <p><span className='text-2xl font-bold'>Description: </span> Book Vibe is an intuitive web platform designed for book lovers, allowing users to manage their reading preferences effectively. Users can easily mark books as their wishlist or read list, enhancing their reading experience. The platform features excellent validation mechanisms, ensuring a seamless user experience when adding or modifying entries. Built with a modern tech stack, Book Vibe leverages advanced JavaScript techniques to provide dynamic interactions and robust performance, creating a delightful environment for book enthusiasts.</p>
                        <h1 className='text-2xl font-bold mt-3'>Core Features: </h1>
                        <ul className='list-disc pl-5 '>
                            <li className='mt-2'><span className='font-semibold'>User Account Management:</span> Secure user login and registration system to personalize the reading experience.</li>
                            <li className='mt-2'><span className='font-semibold'>Wishlist Functionality:</span> Users can mark books as a wishlist for future reading, helping them keep track of titles of interest.</li>
                            <li className='mt-2'><span className='font-semibold'>Read List Management:</span> Seamless feature to mark books that users have read, allowing for easy tracking and organization.</li>
                            <li className='mt-2'><span className='font-semibold'>Excellent Validation:</span> Robust validation processes to ensure data integrity and a smooth user experience when adding or editing books.</li>
                            <li className='mt-2'><span className='font-semibold'>Dynamic Interaction:</span> Utilizes advanced JavaScript for a responsive and interactive user interface, enhancing overall engagement.</li>
                        </ul>
                        <h1 className='text-2xl font-bold mt-3'>Used Technologies:</h1>
                        <ul className='list-disc pl-5 '>
                            <li className='mt-2'><span className='font-semibold'>Frontend:</span> React, React Router, Tailwind CSS</li>
                            <li className='mt-2'><span className='font-semibold'>Backend:</span> Node.js, Express</li>
                            <li className='mt-2'><span className='font-semibold'>Database:</span> MongoDB</li>
                            <li className='mt-2'><span className='font-semibold'>Other:</span> Advanced JavaScript, RESTful API, Axios for HTTP requests</li>
                        </ul>
                    </div>

                    {/* Right */}
                    <div className='shadow-lg border p-10 rounded-lg md:order-2 order-1'>
                        <img className='rounded-lg' src="/Book.png" alt="Book Vibe" />
                        <div className='mt-4 flex gap-5 flex-wrap justify-evenly'>
                            <a href="https://b9a8-book-vibe-shimul705.vercel.app/"><button className='btn bg-blue-950 text-white hover:text-black font-bold'>Live Link</button></a>
                            <a href="https://github.com/programming-hero-web-course-4/b9a8-book-vibe-shimul705.git"> <button className='btn bg-blue-950 text-white hover:text-black font-bold'>GitHub Repository (Client)</button></a>
                            <a href=""><button disabled className='btn bg-blue-950 text-white hover:text-black font-bold'>GitHub Repository (Server)</button></a>
                        </div>
                    </div>
                </div>


                {/* Project 3 */}
                <div className='grid md:grid-cols-2 gap-5 bg-[#F5F5F5] mt-10 p-10 rounded-lg shadow-md'>
                    {/* Left */}
                    <div className='shadow-lg border p-10 rounded-lg'>
                        <img className=' rounded-lg' src="/vmanage.png" alt="" />
                        <div className='mt-4 flex gap-5 flex-wrap justify-evenly'>
                            <a href="https://b9a11-volunteer-management.web.app/"><button className='btn bg-blue-950 text-white hover:text-black font-bold'>Live Link</button></a>
                            <a href="https://github.com/Porgramming-Hero-web-course/b9a11-client-side-shimul705.git"> <button className='btn bg-blue-950 text-white hover:text-black font-bold'>GitHub Repository (Client)</button></a>
                            <a href="https://github.com/Porgramming-Hero-web-course/b9a11-server-side-shimul705.git"><button className='btn bg-blue-950 text-white hover:text-black font-bold'>GitHub Repository (Server)</button></a>
                        </div>

                    </div>

                    {/* Right */}
                    <div className='flex flex-col p-10 rounded-lg shadow-lg bg-white'>
                        <h1 className='mt-10 text-2xl font-bold'>Project Name: <span className='font-thinlight'>Volunteers Hurbor</span></h1>
                        <p><span className='text-2xl font-bold'>Description: </span> Volunteer Management is a dynamic web platform designed to streamline the process of connecting volunteers with organizations. Users can easily register as volunteers or hire volunteers for various tasks. The system features a robust authentication process using Firebase, ensuring secure access. With a comprehensive admin dashboard, administrators can manage user roles, approving applications and controlling volunteer assignments efficiently.</p>
                        <h1 className=' text-2xl font-bold mt-3'>Core Features: </h1>
                        <ul className='list-disc pl-5 '>
                            <li className='mt-2'><span className='font-semibold'>User Authentication:</span> Secure login and registration using Firebase Authentication.</li>
                            <li className='mt-2'><span className='font-semibold'>Dynamic User Roles:</span> Users can register as volunteers or hire volunteers based on their needs.</li>
                            <li className='mt-2'><span className='font-semibold'>Admin Dashboard:</span> Comprehensive tools for managing user roles and applications.</li>
                            <li className='mt-2'><span className='font-semibold'>Real-Time Updates:</span> Instant notifications for users regarding application statuses and volunteer assignments.</li>
                            <li className='mt-2'><span className='font-semibold'>Client-Side & Server-Side Integration:</span> Seamless interaction between the frontend and backend using Firebase.</li>
                            <li className='mt-2'><span className='font-semibold'>User Management:</span> Admins can approve or reject volunteer applications and manage user interactions dynamically.</li>
                        </ul>
                        <h1 className=' text-2xl font-bold mt-3'>Used Technologies:</h1>
                        <ul className='list-disc pl-5 '>
                            <li className='mt-2'><span className='font-semibold'>Frontend:</span> React, React Router, Tailwind CSS</li>
                            <li className='mt-2'><span className='font-semibold'>Backend:</span> Node.js, Express</li>
                            <li className='mt-2'><span className='font-semibold'>Database:</span> MongoDB</li>
                            <li className='mt-2'><span className='font-semibold'>Authentication & Hosting:</span> Firebase Authentication, Firebase Hosting</li>
                            <li className='mt-2'><span className='font-semibold'>Other:</span> RESTful API, JavaScript, Firebase Functions</li>
                        </ul>

                    </div>
                </div>




            </div>

        </>
    );
};

export default Project;