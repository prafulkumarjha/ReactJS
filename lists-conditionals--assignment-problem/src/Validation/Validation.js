import React from 'react';

const Validation = (props) => {

    let checkText = null;

    if(props.text.length <5)
    checkText = (<p> Text too short </p>);
    else if(props.text.length >20)
    checkText = (<p> Text too Long </p>);

    return checkText;
}

export default Validation;