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
        <div className="flex justify-between items-center border-b-2 border-gray-400">
            <div>
                <h2 className="text-white">{props.name}</h2>
                <p className="text-gray-100 text-xl">{props.desc}</p>
                <span className="text-red-500 text-xl">{props.price} $</span>
            </div>
            <div className="">
                <input
                    type="number"
                    ref={amountRef}
                    className="rounded-md mx-3"
                    defaultValue="1"
                    min="1"
                    max="10"
                />
                <button
                    className="px-3 bg-red-600 rounded-md text-white h-full"
                    onClick={addFoodItemHandler}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default FoodItem