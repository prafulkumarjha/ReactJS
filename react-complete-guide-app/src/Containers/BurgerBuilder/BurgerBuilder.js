import React, { Component } from 'react';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSumary/OrderSummary';

let  INGREDIENT_PRICES= {
    salad : 0.5,
    bacon : 1,
    cheese : 1.5,
    meat : 2

};
class BurgerBuilder extends Component {

    state = {
        ingredients : {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0,
        },
        price : 4,
        purchasable : false,
        ordernowClicked : false
    };

    orderHandler = () => {

        const ordernowClicked = true;
        this.setState({
            ordernowClicked : ordernowClicked
        });
    }

    modalClosedHandler = () => {
        this.setState({
            ordernowClicked : false
        })
    }
    purchaseContinueHandler = () => {
        alert("Order has been placed");
    }

updatePurchasable = (ingredients) => {
    //const ingredients = {...this.state.ingredients};
    let isPurchasable = false;

    Object.keys(ingredients).map((ingKey) => {

        if(ingredients[ingKey] > 0) {
            isPurchasable = true;
        }
        return true;
    });
    this.setState({
        purchasable : isPurchasable
    });
}

addIngredient = (type) => {

    console.log("hello "+type);
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount+1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    
    updatedIngredients[type] = updatedCount;
    const oldPrice = this.state.price;
    const updatedPrice = oldPrice + INGREDIENT_PRICES[type];

    this.setState({
        ingredients : updatedIngredients,
        price:updatedPrice
    });
    this.updatePurchasable(updatedIngredients);

    
}

deleteIngredient = (type) => {

 
    const oldCount = this.state.ingredients[type];
    let updatedCount = oldCount-1;
    if(updatedCount<0)
        updatedCount = 0;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    
    updatedIngredients[type] = updatedCount;
    const oldPrice = this.state.price;
    const updatedPrice = oldPrice - INGREDIENT_PRICES[type];
    this.setState({
        ingredients : updatedIngredients,
        price : updatedPrice
    });
    this.updatePurchasable(updatedIngredients);
}

render() {

    const Fragment = React.Fragment;
    let disabledInfo = {...this.state.ingredients};

    for( let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <=0;
    }
return (

    <Fragment>
        
   <Burger ingredients = {this.state.ingredients}/>
    <BuildControls orderHandler = {this.orderHandler } purchasable ={this.state.purchasable}  disabledInfo={disabledInfo} price={this.state.price} deleteClickHandler={this.deleteIngredient} addClickHandler = {this.addIngredient}/>
    <Modal show = {this.state.ordernowClicked} modalClosed = {this.modalClosedHandler}> <OrderSummary totalPrice = {this.state.price} cancel = {this.modalClosedHandler} continue = {this.purchaseContinueHandler} ingredients={this.state.ingredients}/> </Modal>
    </Fragment>
)
}
}

export default BurgerBuilder;