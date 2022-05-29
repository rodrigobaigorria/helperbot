import React from 'react'
import './intents.css';

export default function Intents(){
    return (
        <>
          <div className="intent">
            <div className="build__title">Posibles preguntas del cliente</div>
             <div className="buildContainer">
              
             <div className="buildContainerCenter">
               <label className='intent__label'>Nombre de la categoría (opcional)</label>  
               <input 
                 className='intent__input'
                 type='text' 
                 placeholder='Nombre de la categoría'
                />
    
              
             </div> 
             
             </div>
          </div>
        </>
      )
    }
    