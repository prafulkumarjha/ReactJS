import React from 'react';
import   './Person.css';


const Person = ( props ) => {

    
    return (
    <div className='Person'>
        <p onClick={props.click}> I am a person having name {props.name} and age {props.age}!!</p>
        <p onClick={props.click}>{props.children} </p>
        <input type='text' onChange={props.changed} value={props.name}/>
    </div>
    )
}

export default Person;