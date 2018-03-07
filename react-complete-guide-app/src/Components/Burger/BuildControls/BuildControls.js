import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {

    const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Meat', type: 'meat'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'}
        
    ]
    
    return (

       <div className = {classes.BuildControls}>
            <div> <p> Current Price : <strong> {props.price} </strong> </p> </div>
       {
           controls.map((control) => {
             //  console.log(control.label);
               return <BuildControl 
               disabled={props.disabledInfo[control.type]}
               deleted={() => props.deleteClickHandler(control.type)}
               added={() => props.addClickHandler(control.type)} 
               key={control.label} 
               label={control.label} 
               type={control.type} />

           })
       }
       <button onClick={props.orderHandler} disabled={!props.purchasable} className = { classes.OrderButton}> ORDER NOW </button>

           </div>
            
    )
}

export default BuildControls;