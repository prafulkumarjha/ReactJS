import React from 'react' ;
import Classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    

    let transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
        //console.log("igkey "+igKey);
        return [...Array(props.ingredients[igKey])].map( ( _,i) => {
          //  console.log(igKey+" "+i);
            return <BurgerIngredient key = {igKey+i} type = {igKey} />
        }) 

    }).reduce((arr,el) => {
        return arr.concat(el);
    }, []);
   
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p> Please start adding ingredients </p>;
    }

    return (
        <div className = {Classes.Burger}> 
        <BurgerIngredient type='bread-top' />
        {transformedIngredients}
        <BurgerIngredient type='bread-bottom' />
        </div> 
    )
}

export default Burger;