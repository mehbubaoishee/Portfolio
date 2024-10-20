import React from 'react';

const Nav = () => {
  return (
    <div className='border-b-4 shadow-lg'>
      <div className="navbar md:w-8/12 m-auto py-6 p-0">
        <div className="navbar-start">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Home</a></li>
              <li>
                <details>
                  <summary>Services</summary>
                  <ul className="p-1 w-46  rounded-sm shadow-none">

                    <li className='group flex cursor-pointer flex-col'>
                      <a className='rounded-sm'>Wordpress Development</a>
                      <span className="p-0 mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className='group flex cursor-pointer flex-col'>
                      <a className='rounded-sm'>Responsive Website Development</a>
                      <span className="p-0 mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>

                    <li className='group flex cursor-pointer flex-col'>
                      <a className='rounded-sm'>eCommerce Development</a>
                      <span className="p-0 mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>

                    <li className='group flex cursor-pointer flex-col'>
                      <a className='rounded-sm'>Content Migration</a>
                      <span className="p-0 mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className='group flex cursor-pointer flex-col'>
                      <a className='rounded-sm'>Multilingual Websites</a>
                      <span className="p-0 mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>

                    <li className='group flex cursor-pointer flex-col'>
                      <a className='rounded-sm'>Portfolio Website</a>
                      <span className="p-0 mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>

                    <li className='group flex cursor-pointer flex-col'>
                      <a className='rounded-sm'>Search Engine Optimization (SEO)</a>
                      <span className="p-0 mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>

                    <li className='group flex cursor-pointer flex-col'>
                      <a className='rounded-sm'>WordPress Maintenance and Support</a>
                      <span className="p-0 mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>

                  </ul>
                </details>
              </li>
              <li><a>About</a></li>
              <li><a>Career</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl pl-0"><img className='h-full' src="https://i.ibb.co/xgBPbvB/dvlogoocom.png" alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 color-primary text-lg font-lato font-semibold">
            {/* <li><a>Home</a></li> */}
            {/* <li>
              <details>
                <summary>Services</summary>
                <ul className="shadow-xl p-2 w-64 rounded-sm">

                  <li className='group flex cursor-pointer flex-col'>
                    <a className='rounded-sm'>Wordpress Development</a>
                    <span className="p-0 mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                  </li>
                  <li className='group flex cursor-pointer flex-col'>
                    <a className='rounded-sm'>Responsive Website Development</a>
                    <span className="p-0 mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                  </li>

                  <li className='group flex cursor-pointer flex-col'>
                    <a className='rounded-sm'>eCommerce Development</a>
                    <span className="p-0 mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                  </li>

                  <li className='group flex cursor-pointer flex-col'>
                    <a className='rounded-sm'>Content Migration</a>
                    <span className="p-0 mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                  </li>
                  <li className='group flex cursor-pointer flex-col'>
                    <a className='rounded-sm'>Multilingual Websites</a>
                    <span className="p-0 mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                  </li>

                  <li className='group flex cursor-pointer flex-col'>
                    <a className='rounded-sm'>Portfolio Website</a>
                    <span className="p-0 mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                  </li>

                  <li className='group flex cursor-pointer flex-col'>
                    <a className='rounded-sm'>Search Engine Optimization (SEO)</a>
                    <span className="p-0 mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                  </li>

                  <li className='group flex cursor-pointer flex-col'>
                    <a className='rounded-sm'>WordPress Maintenance and Support</a>
                    <span className="p-0 mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                  </li>

                </ul>
              </details>
            </li> */}
            <li><a href="#about-me">Introduction</a></li>
            <li><a href="#skill">Skill</a></li>
            <li><a href="#TechnicalExp">Technical Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#Education">Education</a></li>
          </ul>
        </div>
        <div className="navbar-end mr-2 md:mr-0">
          <a href='#Contact' className="btn font-lato font-extrabold text-base md:text-lg hover:bg-[#2566DC] text-white bg-[#262262]">Contact</a>
        </div>
      </div>




    </div>
  );
};

export default Nav;