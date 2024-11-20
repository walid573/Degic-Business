/* eslint-disable react/jsx-key */
import React from 'react'
import { ArrowForward } from "@mui/icons-material"
function Blog() {
    const CardData = [
        {
            id:1,
            ImgSrc:"blog1.png",
            title:"Make myspace your best designed space",
            description:"A lot of different components that will help you create the perfect look for your project",
            buttonLavel:"Design",
        },
        {
            id:2,
            ImgSrc:"blog2.png",
            title:"My company culture has changed today",
            description:"A lot of different components that will help you create the perfect look for your project",
            buttonLavel:"3D illustrations",
        },
        {
            id:3,
            ImgSrc:"ThirdImg.png",
            title:"Professionals in craft! All products were super great",
            description:"A lot of different components that will help you create the perfect look for your project",
            buttonLavel:"Development",
        },
    ]
  return (
    <section className='max-w-[1400px] mx-auto py-12 px-6 '>
        <div className='flex flex-col sm:flex-row justify-between ite\
        mb-10'>
            <div>
                <h1 className='text-3xl lg:text-6xl font-bold text-gray-800'>Get more from our blog</h1>
                <p className='max-w-md text-[22px] mt-1 text-gray-500'>There are a lot of different components that will help you create the perfect look for your project</p>
            </div>
            <div>
                <button className="bg-indigo-200 font-semibold py-3 px-6 rounded-lg transition duration-300 text-[#5F62E2] flex items-center justify-center gap-2 hover:text-white hover:bg-indigo-400 mx-auto sm:mx-0">
                    Learn more
                      <ArrowForward sx={{ fontSize:24 }}/>
                </button>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 !p-5'>
            {
                CardData.map((card)=>(
                    <div key={card.id} className='bg-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition duration-300'>
                        <img className='w-full  object-cover ' src={card.ImgSrc} alt="" />
                        <div className='p-6'>
                            <h3 className='text-xl md:text-2xl font-semibold mb-2 '>{card.title}</h3>
                            <p className='text-gray-600 mb-4'>{card.description}</p>
                            <button className='text-sm py-2 px-3 rounded-lg bg-[#2AB6911C] text-[#2AB691] text-bold'>{card.buttonLavel}</button>
                        </div>
                    </div>
                ))
            }
        </div>

    </section>
  )
}

export default Blog