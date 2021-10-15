import React, { useContext, useState, Fragment } from 'react'
import FoodContext from '../../context/FoodContext.js'
import 'tailwindcss/tailwind.css'

const Header = props => {

    const ctx = useContext(FoodContext)
    const itemAmount = ctx.foodItem.reduce((itemNum, item) => {
        return itemNum + item.amount
    }, 0)


    return (
        <Fragment>
            <div className="overflow-hidden">
                <header className="fixed top-0 left-0 w-full h-16 bg-green-700 text-white flex justify-between px-10 z-10 shadow-md items-center">
                    <h1 className="text-white">Foodiverse</h1>
                    <div className="flex h-12 w-32 bg-green-600 rounded-full justify-center ">
                        <img
	    src="https://img.icons8.com/carbon-copy/100/000000/shopping-cart-promotion.png"

	    className="w-12 h-12 cursor-pointer"
	    onClick={props.onCartShow}
                        />
                        <div className="flex w-8 h-8 bg-green-800 rounded-full justify-center items-center my-auto">
                            {itemAmount}
                        </div>
                    </div>
                </header>
                <div
                    style={{ width: '110%' }}
                    className="h-96 z-0 overflow-hidden"
                >
                    <img
                        src="pictures/meal.png"
                        alt=""
                        style={{ width: '110%', height: '100%' }}
                        className="h-full object-cover transform rotate-6 -translate-y-10 -translate-x-1"
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default Header
