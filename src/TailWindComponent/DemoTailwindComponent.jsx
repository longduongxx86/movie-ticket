import React from 'react';

function DemoTailwindComponent(props) {
    return (
        <div className='container m-auto'>
            <div className="grid grid-cols-4 gap-4">
                <div className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>01</div>
                <div className='bg-gradient-to-b from-sky-500 to-indigo-500 text-white'>02</div>
                <div className='bg-gradient-to-l from-violet-500 to-fuchsia-500 text-white'>03</div>
                <div className='bg-gradient-to-t from-purple-500 to-pink-500 text-white'>04</div>
            </div>
        </div>
    );
}

export default DemoTailwindComponent;