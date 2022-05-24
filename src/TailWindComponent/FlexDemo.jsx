import React from 'react';

function FlexDemo(props) {
    return (
        <div className='w-screen h-screen bg-purple-300'>
            <div className="flex-col h-96 m-auto">
                <div className="flex-item bg-green-400 h-10">    
                    asdfsaf
                </div>
                <div className="flex-item bg-red-400 h-10">    
                    asdfsaf
                </div>
                <div className="flex-item bg-purple-400 h-10">    
                    asdfsaf
                </div>
                <div className="flex-item bg-orange-400 h-10">    
                    asdfsaf
                </div>
                <div className="flex-item bg-yellow-400 h-10">    
                    asdfsaf
                </div>
            </div>
        </div>
    );
}

export default FlexDemo;