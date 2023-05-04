import React from 'react';
class Button extends React.Component{
shouldComponentUpdate(nextProps){

}



render(){
    const {change}=this.props;
    return(
        <div>
<button type="button" class="button" onClick={change}>Start</button>
        </div>
    )
}
}
export default Button;