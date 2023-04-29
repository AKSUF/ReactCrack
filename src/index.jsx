import React from 'react';
import ReactDOM from 'react-dom';


function Clock(){
    return (
        <h1 className='heding'>
            <span className='text'>Hello {new Date().toLocaleTimeString()}</span>
        </h1>
    );
}

ReactDOM.render(<Clock/>, document.getElementById('root'));


