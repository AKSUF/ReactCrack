import React from 'react';
class Button extends React.Component{
shouldComponentUpdate(nextProps){


    
const{change:currentChange,locale:currentLocale}=this.props;
const{change:nextChange,locale:nextLocale}=nextProps;
if(currentChange===nextChange && nextLocale===currentLocale){
    return false;
}else{
    return true;
}

}
render(){
    const {change,locale}=this.props;
 
    return(
        <div>
<button type="button" class="button" onClick={()=>change(locale)}>Start</button>
        </div>
    )
}
}
export default Button;