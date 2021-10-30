import React, { useEffect, useState, useContext } from 'react'
import Modal from '../UI/Modal.js'
import FoodContext from '../../context/FoodContext.js'

const Cart = props => {
    const ctx = useContext(FoodContext)

    const item = ctx.foodItem

    const totalPrice = ctx.totalPrice.toFixed(2)

    const increaseAmountHandler = id => {
        ctx.increaseAmount(id)
    }

    const removeCartItemHandler = id => {
        ctx.removeItem(id)
    }

    return (
        <div>
            <Modal>
                {item.length === 0 ? (
                    <div className="text-center">
                        <p className="my-3">No items were added.</p>
                        <button
                            className="py-2 px-2 mr-1 rounded-md bg-red-500 hover:bg-red-700 transition ease-out duration-500 text-white"
                            onClick={props.closeModal}
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <div className="py-5">
                        <h2 className="text-center font-bold mb-5">
                            Cart Items
                        </h2>
                        <ul>
                            {item.map(i => (
                                <li
                                    key={i.id}
                                    className="border-b border-gray-300"
                                >
                                    <h3 className="font-semibold">{i.name}</h3>
                                    <p>{i.desc}</p>
                                    <div className="flex justify-between mb-2">
                                        <div>
                                            <span>{i.price} $</span>
                                        </div>
                                        <div className="flex justify-between w-5/12">
                                            <input
                                                className="w-16 pointer-events-none"
                                                type="number"
                                            />
                                            <span>{i.amount}</span>
                                            <button
                                                className="px-2 rounded-md bg-green-500 text-white"
                                                onClick={() =>
                                                    increaseAmountHandler(i.id)
                                                }
                                            >
                                                +
                                            </button>
                                            <button
                                                className="px-2 rounded-md bg-red-500 text-white"
                                                onClick={() =>
                                                    removeCartItemHandler(i.id)
                                                }
                                            >
                                                -
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <p className="mx-auto text-center w-9/12 bg-gray-100 py-2 px-2 my-3 text-lg font-bold rounded-md">
                            Total Price: {totalPrice} $
                        </p>
                        <div className="flex ">
                            <button
                                className="py-2 px-2 mr-1 rounded-md bg-red-500 hover:bg-red-700 transition ease-out duration-500 text-white"
                                onClick={props.closeModal}
                            >
                                Close
                            </button>
                            <button className="py-2 px-2 mr-1 rounded-md bg-green-500 hover:bg-green-700 transition ease-out duration-500 text-white">
                                Order
                            </button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    )
}

export default Cart
