import React from 'react';

const scaleNames={
    c:'Celsius',
    f:'Farenhit',
}

export default function Temparature({temparature,scale,onTemperatureChange}){
    
        return(
            <div className="temperature-input-container">
            <div className="temperature-input-card">
              <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input
                type="text"
                value={temparature}
                onChange={(e) => onTemperatureChange(e, scale)}
            />
              </fieldset>
            </div>
            
          </div>

        )
    
}