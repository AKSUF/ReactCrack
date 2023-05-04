import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
constructor(props){
    super(props);
    this.state={date:new Date()};
}

componentDidMount(){
setInterval(()=>{
this.setState({
date:new Date(),
});
},100);
}

    render() {
      return (
        <h1 className='heading'>
          <span className='text'>Hello {this.state.date.toLocaleTimeString(this.props.locale)}</span>
        </h1>
      );
    }
  }
  

  
  export default Clock;