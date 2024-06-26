import React from 'react'
import Type from './Type'


const Home = () => {
  return (
    <div className="w-[82%] h-screen flex flex-wrap ml-20 mt-5 mb-0 justify-center items-center text-sm  " id='home'>
      <div className='w-[100%] sm:w-[60%] text-lg'>
      <h1 className='text-slate-400 text-8xl font-sans mb-5'>Hi There <span className='inline-block animate-pulse text-4xl'>🖐</span></h1>
      <h5 className='text-slate-400 text-5xl mb-7 font-sans'>I am Ghulam Hyder Dar</h5>
      <h5 className='text-slate-400 text-xs  mb-7 font-sans sm:text-5xl'><Type /></h5>
      </div>
      <div className='w-[100%]  h-[100%] rounded-xl mt-3 sm:w-[40%] sm:h-[40%'><img src='/dummy-user1.png' alt='hyder' className='w-95 h-95 rounded-full border-2 p-1 hover:shadow-orange-400' /></div>
    </div>
  )
}

export default Home
