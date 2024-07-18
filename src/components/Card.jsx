import React from 'react';

const Card = ({ item }) => {
    return (
        <div>
            <div className="px-5 pt-3 pb-3 ml-5 md:px-12 md:pt-3 md:pb-11 flex flex-col gap-3 border-2 w-80  rounded shadow-2xl">

                <div className='flex justify-between'>
                    <div className='bg-blue-400 rounded-2xl align-middle items-center h-9 w-9'>svg1</div>
                    <div className='bg-blue-400 rounded-2xl h-9 w-9'>svg2</div>
                </div>

                <div className='flex flex-col gap-3'>
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>
                </div>

                <div>
                    <h1 className='text-xl font-bold text-blue-900'>View</h1>
                </div>

            </div>
        </div>
    );
};

export default Card;
