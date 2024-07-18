import React from 'react'
function Content() {
  return (
    <div className= 'flex justify-end '>
        <div className=' relative z-0 rounded-md w-screen mt-9 h-[50vh]  md:ml-80 md:mr-40 md:mt-14 bg-black md:w-[50vw] md:h-[80vh]' 
            style = {{ backgroundImage: `url(${"https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64f9ddeddb3fa9b08df23a8f_Hero-p-800.jpg"})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}>
            <div className= ' absolute w-3/4 border-2 rounded-md border-slate-500 h-2/3 p-4 top-56 right-10 inset-y-0 md:top-0  md:mt-20 md:border-2 z-10 flex flex-col md:right-[700px] md:w-2/3 md:pt-10 md:px-10 md:h-2/3 bg-white'>
                <div className='gap-3'>
                    <h1 className=' text-xl md:text-4xl font-bold'>Curate   your   office   space   with   WorkHub</h1>
                    <p className=' mt-2 md:mt-4 text-sm md:text-2xl'>Empowering  professionals  with  innovative  workspaces </p>
                    <div className='flex gap-3 mt-5 md:gap-8 md:mt-10'>
                        <button className='bg-blue-800 text-white p-2 hover:scale-125 hover:shadow-md transition-all ease-in-out md:p-4'>Get Our Code</button>
                        <button className='border-black border-2 p-2 hover:scale-125 hover:shadow-md transition-all ease-in-out md:p-4'>Our Service</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content