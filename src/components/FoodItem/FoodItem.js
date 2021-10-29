import React, { useContext, useRef } from 'react'
import FoodContext from '../../context/FoodContext.js'

const FoodItem = props => {
    const ctx = useContext(FoodContext)

    const amountRef = useRef()

    const selectedItem = props.foodArray.filter(i => i.id === props.id)

    const addFoodItemHandler = () => {
        const currentItemAmount = amountRef.current.value

        const amount = +currentItemAmount

        const currentItem = selectedItem.map(item => ({
            id: item.id,
            name: item.name,
            desc: item.desc,
            price: item.price,
            amount: amount
        }))

        ctx.addItem(...currentItem)
        console.log(currentItem, 'curritem')
    }

    return (
        <div className="flex justify-between items-center ">
            <div>
                <h3 className="text-white font-bold">{props.name}</h3>
                <p className="text-gray-100 text-lg mb-2">{props.desc}</p>
                <span className="text-red-500 text-lg bg-white rounded-md p-1 font-bold">{props.price} $</span>
            </div>
            <div className="">
                <input
                    type="number"
                    ref={amountRef}
                    className="rounded-md mx-3 text-center text-black"
                    defaultValue="1"
                    min="1"
                    max="10"
                />
                <button
                    className="px-3 bg-red-600 hover:bg-red-800 transition ease-out duration-500 rounded-md text-white h-full"
                    onClick={addFoodItemHandler}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default FoodItem
