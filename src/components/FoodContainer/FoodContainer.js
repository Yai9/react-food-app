import React, { useState, useContext, Fragment } from 'react'
import FoodItem from '../FoodItem/FoodItem.js'
import Cart from '../Cart/Cart.js'

const FoodContainer = props => {
    return (
        <Fragment>
            {props.visibility && (
                <Cart
                    foodItem={props.foodItem}
                    visibility={props.visibility}
                    closeModal={props.closeModal}
                />
            )}
            <div className="max-w-screen-md m-auto bg-green-800 shadow-2xl py-6 px-6 rounded-md ">
                <h1 className="text-center text-green-100 font-semibold border-b border-gray-200">
                    Featured Food
                </h1>
                <div className="py-2 bg-green-900 shadow-lg rounded-md my-2 px-3 text-center text-xl">
                    <p className="text-white mx-auto italic font-light">
                        Welcome!<br/> 
	    		Enjoy your shopping knowing we only use 100%
                        organic and fresh ingredients to make your food
                        absolutely delicious and straight-from-oven served!
                    </p>
                </div>
                <ul className="list-none p-0 m-0">
                    {props.foodArray.map(food => (
                        <li
                            key={food.id}
                            className="py-2 bg-green-700 rounded-md my-2 px-3 shadow-md hover:bg-green-900 transition ease-out duration-1000"
                        >
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
