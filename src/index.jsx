import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    render() {
      return (
        <h1 className='heading'>
          <span className='text'>Hello {new Date().toLocaleTimeString(this.props.locale)}</span>
        </h1>
      );
    }
  }
  
  const ClockComponent = <Clock locale="bn-BD" />;
  
  ReactDOM.render(ClockComponent, document.getElementById('root'));
  



//to show time in bengal
// function Clock({locale}){
//     return (
//         <h1 className='heding'>
//             <span className='text'>Hello {new Date().toLocaleTimeString(locale)}</span>
//         </h1>
//     );
// }

// ReactDOM.render(<Clock locale="bn-BD"/>, document.getElementById('root'));


