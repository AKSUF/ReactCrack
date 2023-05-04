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
    const {change,locale,show}=this.props;
 
    return(
        <>
    
<button type="button" class="button" onClick={()=>change(locale)}>

  {locale==='bn-BD'?'Change Clock':'Change your clock'}
    
    </button>
{ show && <p>Hello</p>}
      

        </>

    )
}
}
export default Button;