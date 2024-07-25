import React from 'react'

function ResumeCard({item}) {
  return (
    <div className='m-10 100 mx-16 px-10 md:flex md:flex-row flex flex-col justify-center items-center'>
        <div className="left md:w-[30vw] md:h-[50vh] w-[80vw] object-center">
          <img className='h-[45vh]' src={item.img} alt="" />
        </div>
        <div className="right w-[80vw] md:w-[70vw] pt-3 pr-11">
           <h1 className='text-2xl ml-5 font-bold'>{item.description}</h1>
            <h2 className='p-4 md:p-10 md:ext-xl md:font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa ullam sunt, similique deleniti nulla inventore, a aperiam aspernatur vitae ipsum doloribus non obcaecati rem rerum delectus! Eligendi praesentium veniam odit.</h2>
            <div>
              <button className='btn-square m-5 bg-blue-600 text-white w-52 md:mt-10 md:ml-20'>WRITE MY RESUME</button>
            </div>
        </div>

    </div>
  )
}

export default ResumeCard