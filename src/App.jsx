import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Code from './components/Code'
import Hex from './components/Hex'
import Wave from './animation/Wave'

// Navigation
import Nav from './components/Nav'
import Header from './components/Header'
import Introduction from './components/Introduction'
import TechnicalExp from './components/TechnicalExp'
import Project from './components/Project'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='bg-gradient-to-br from-[#00AEEF] to-[#262262]'> */}
      <div className=''>
        <Nav></Nav>
        <Header></Header>
        <Introduction></Introduction>


        {/* Our Tech Wizards Section  -gradient-to-b from-[#F5F5F5] to*/}
        <div className='bg-[#262262] pt-20 relative' id="skill">
          <div className='w-11/12 md:w-6/12 m-auto text-center  rounded-2xl p-4 text-white' >
            <h1 className=' text-4xl md:text-5xl font-bold mb-8'>Tech Wizards</h1>

            <p>I'm a software developer with a strong passion for technology. With specialized skills and hands-on experience, I excel in a variety of tech domains. Explore the languages and tools I'm fluent in below.</p>
          </div>
          <Hex></Hex>
          <div className='absolute bottom-0 left-0 w-full'>
            <Wave></Wave>
          </div>
        </div>
        {/* Our Tech Wizards Section */}


        <TechnicalExp></TechnicalExp>
        <div className='bg-[#F5F5F5] py-10'>
          <Project></Project>
        </div>

        <div className='bg-[#262262] p-5'>
          <Education></Education>
        </div>

        <Contact></Contact>
        <Footer></Footer>



      </div>

    </>
  )
}

export default App
