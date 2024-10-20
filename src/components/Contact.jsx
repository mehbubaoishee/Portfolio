import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
    return (
        <>

            <div className='w-11/12 md:w-6/12 m-auto text-center  rounded-2xl p-4 mt-20' id="Contact">
                <h1 className=' text-4xl md:text-5xl font-bold mb-8'>Contact Me</h1>

            </div>

            <div className='grid md:grid-cols-2 md:w-7/12 w-11/12 m-auto'>
                <div className='flex justify-center items-center'>
                    <div className="w-full max-w-md rounded-lg bg-white px-10 pb-10 pt-8 shadow-md dark:bg-zinc-900">
                        <p className='text-4xl font-bold'>Get in Touch: </p>
                        <p className='font-medium text-lg'>I Welcome Opportunities for Collaboration, Feedback, and Networking</p>
                        <div className='flex flex-col items-center'>
                            <p className='text-4xl mt-8'><SiGmail /></p>
                            <p className='font-medium text-lg'>Shimulgub@gmail.com</p>

                            <p className='text-4xl mt-8'><FaLocationDot /></p>
                            <p className='font-medium text-lg'>Address:

                                Level-6, Unit-6L, N, Tower-A,
                                Police Plaza Concord Tower,
                                Plot# 2, Road# 144, Gulshan-1,
                                Dhaka-1206, Bangladesh</p>
                        </div>
                    </div>

                </div>
                <div className='flex justify-center'>
                    <div className="w-full max-w-md rounded-lg bg-white px-10 pb-10 pt-8 shadow-md dark:bg-zinc-900">
                        <div className="mb-6">
                            <h2 className="text-center text-3xl font-semibold tracking-tight">Contact Us</h2>
                            <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">We&apos;d love to hear from you!</p>
                        </div>
                        <form className="w-full space-y-6">
                            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                                <label className="block font-medium" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                    id="name"
                                    placeholder="Your Name"
                                    name="name"
                                    type="text"
                                />
                            </div>
                            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                                <label className="block font-medium" htmlFor="_email">
                                    Email
                                </label>
                                <input
                                    className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                    id="_email"
                                    placeholder="Your Email"
                                    name="email"
                                    type="email"
                                />
                            </div>
                            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                                <label className="block font-medium" htmlFor="_message">
                                    Message
                                </label>
                                <textarea
                                    className="min-h-[80px] w-full rounded border px-3 py-2 leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                    id="_message"
                                    placeholder="what's in your mind"
                                    name="message"
                                />
                            </div>
                            <button className="rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">Submit</button>
                        </form>
                    </div>
                </div>

            </div>


        </>
    );
};

export default Contact;