import React from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {

    const Fragment = React.Fragment;
    const ingredients = {...props.ingredients};
    let orderList = null;
    orderList = Object.keys(ingredients).map((ingKey) => {
        return <li key={ingKey}> <span style={{textTransform : 'capitalize'}}>  {ingKey}  </span>: {ingredients[ingKey]}  </li>
    });
return (
    <Fragment>
    <h3> Your Order </h3>
        <p> A delicious burger with follwing ingredients </p> 
       <ul> {orderList} </ul>
       <p> Total Price : {props.totalPrice} </p>
       <p> Continue to checkout..? </p>
        <Button btnType='Success'  clicked= {props.continue}> CONTINUE </Button>
        <Button btnType='Danger' clicked= {props.cancel} > CANCEL </Button>
        </Fragment>
)
}

export default OrderSummary;