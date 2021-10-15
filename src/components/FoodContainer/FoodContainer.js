import React, { useState, useContext, Fragment } from 'react'
import FoodItem from '../FoodItem/FoodItem.js'
import Cart from '../Cart/Cart.js'

const FoodContainer = props => {
    return (
        <Fragment>
	    {props.visibility &&
	    <Cart foodItem={props.foodItem} visibility={props.visibility} closeModal={props.closeModal}/>
	    }
            <div className="max-w-screen-md m-auto bg-green-800 filter shadow-2xl py-3 px-3 rounded">
                <ul className="list-none p-0 m-0">
                    {props.foodArray.map(food => (
                        <li key={food.id} className="py-2">
                            <FoodItem
                                foodArray={props.foodArray}
                                id={food.id}
                                name={food.name}
                                desc={food.desc}
                                price={food.price}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    )
}

export default FoodContainer
