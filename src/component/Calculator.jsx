import React from 'react';
import BoilVerdict from './BoilingVerdic';
import Temparature from './TemparatureInput';
import { toCelsius,convert,toFarenhit } from '../lib/converter';
export default class Calculator extends React.Component{

state={temparature:'',scale:'c'}

handleChange=(e,scale)=>{
this.setState({
    temparature:e.target.value,
    scale,
})
}

    render(){
const{temparature,scale}=this.state;
const celsius=scale==='f'?convert(temparature,toCelsius):temparature;
const fahrenhit=scale==='c'?convert(temparature,toFarenhit):temparature;

        return(
<div>
<Temparature scale='c' temparature={celsius} onTemperatureChange={this.handleChange}/>
<Temparature scale='f' temparature={fahrenhit} onTemperatureChange={this.handleChange}/>

    <BoilVerdict celsius={parseFloat(celsius)} />

</div>


        )
    }
}