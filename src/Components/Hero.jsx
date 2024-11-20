import React from 'react'

function Hero() {
  return (
    <>
        <section className='flex flex-col-reverse lg:flex-row items-center justify-between mx-auto gap-8 py-16 px-6 lg:px-16 container max-w-[1400px]  '>
            
            <div className='flex-1 flex flex-col items-start gap-8'>
                <h1 className='text-3xl lg:text-6xl font-bold max-w-lg '>Simply explained with illustrations</h1>
                <p className='text-lg lg:text-xl text-gray-500 max-w-md mt-[-20px] '>There are a lot of different components that will help you create the perfect look for your project</p>
                <div className='flex gap-3 flex-wrap'>
                    <button className='bg-[#5F62E2] hover:bg-blue-700 text-white font-semibold py-2 px-5 sm:py-3 sm:px-6 transition duration-300 rounded-lg '>Get Started</button>
                    <button className='bg-indigo-100 hover:bg-indigo-300 hover:text-white font-semibold py-2 px-5 sm:py-3 sm:px-6 rounded-lg transition duration-300 text-[#5F62E2] '>Learn More</button>
                </div>
            </div>


            <div className='flex-1 '>
                <img className='w-full max-w-lg h-auto' src="/rocket.png" alt="" />
            </div>
        </section>  
    </>
  )
}

export default Hero