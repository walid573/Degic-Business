import React from 'react'
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { ArrowForward } from "@mui/icons-material"
function Time() {
  return (
    <section className='gap-24 py-16 px-6 lg:px-16 max-w-[1400px] mx-auto'> 


        <div className='flex flex-col-reverse lg:flex-row items-center justify-between'>
            {/* left side */}
            <div className='flex-1 items-start'>
                <img className='w-full h-auto max-w-lg' src="/candle.png" alt="" />
            </div>

            {/* right side */}
            <div className='flex flex-1 flex-col gap-4'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold max-w-lg'>Make more time for the work</h1>
                <p className='text-black text-lg'>
                    <CheckCircleOutlineIcon className='text-[#2AB691] me-2 '/><span>Many ways to use illustrations in design</span>
                </p>
                <p className='text-black text-lg'>
                    <CheckCircleOutlineIcon className='text-[#2AB691] me-2'/><span>Simply explained with illustrations</span>
                </p>
                <p className='text-black text-lg'>
                    <CheckCircleOutlineIcon className='text-[#2AB691] me-2'/><span>Make more time for the work</span>
                </p>
                <div className='flex flex-wrap gap-3 mb-10'>
                <button className="bg-[#5F62E2] font-semibold py-3 px-6 rounded-lg transition duration-300 text-white flex items-center justify-center gap-2 hover:bg-indigo-200 mx-auto sm:mx-0">
                    Learn more
                      <ArrowForward sx={{ fontSize:24 }}/>
                </button>
                </div>
            </div>
        </div>

{/* section 2 */}

<div className='flex flex-col lg:flex-row items-center justify-between mt-24'>
            {/* left side */}
            <div className='flex flex-1 flex-col gap-4'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold max-w-lg'>Make more time for the work</h1>
                <p className='text-black text-lg'>
                    <CheckCircleOutlineIcon className='text-[#2AB691] me-2 '/><span>Many ways to use illustrations in design</span>
                </p>
                <p className='text-black text-lg'>
                    <CheckCircleOutlineIcon className='text-[#2AB691] me-2'/><span>Simply explained with illustrations</span>
                </p>
                <p className='text-black text-lg'>
                    <CheckCircleOutlineIcon className='text-[#2AB691] me-2'/><span>Make more time for the work</span>
                </p>
                <div className='flex flex-wrap gap-3 mb-10'>
                <button className="bg-[#5F62E2] font-semibold py-3 px-6 rounded-lg transition duration-300 text-white flex items-center justify-center gap-2 hover:bg-indigo-200 mx-auto sm:mx-0">
                    Learn more
                      <ArrowForward sx={{ fontSize:24 }}/>
                </button>
                </div>
            </div>

            {/* right side */}
            <div className='flex-1 items-start'>
                <img className='w-full h-auto max-w-lg' src="/toy.png" alt="" />
            </div>
            
        </div>


    </section>
  )
}

export default Time