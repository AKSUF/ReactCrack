import React from 'react';
import ReactDOM from 'react-dom';
import "../style/clock.css"
import Button from './Button';
class Clock extends React.Component {
// constructor(props){
//     super(props);
//     this.state={date:new Date()};
// }




state={date:new Date(),locale:'bn-BD'};

componentDidMount(){
this.clockTimer=setInterval(()=>this.tick(),100);
}
///when you want solve this problem with bind() function
handleClick=(locale)=>{
  this.setState({
   locale,
  })
 }


// handleClick=()=>{
//  this.setState({
//   locale:'en-US',
//  })
// }
//to decative the function
// handleClick(e){
//   e.preventDefault();
//   console.log("This is for cock event")
// }
componentWillUnmount(){
clearInterval(this.clockTimer);
}

tick(){
    this.setState({
        date:new Date(),
        });
}

    render() {
const {date,locale}=this.state;


      return (
        <div class="clock-container">
        <h1 class="heading">
          <span class="text">Hello {this.state.date.toLocaleTimeString(locale)}</span>
        </h1>
        {/* <button type="button" class="button" onClick={this.handleClick}>Start</button> */}

        
        {/* <button type="button" class="button" onClick={this.handleClick}>Start</button> */}
{/* //when you wantsolve the this keyword problem with bind funtionfunality */}
        {/* <button type="button" class="button" onClick={this.handleClick.bind(this,'en-US')}>Start</button> */}
{/* //when you try this key word problem with arrow function */}
{/* <button type="button" class="button" onClick={()=>this.handleClick('en-US')}>Start</button> */}
{/* //to test button from in differentcomponent */}
<Button change={this.handleClick.bind(this,'en-US')}>

Click here
</Button>


      </div>
      
      );
    }
  }
  

  
  export default Clock;