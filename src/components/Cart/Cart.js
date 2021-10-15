import React, { useEffect, useContext } from 'react';
import Modal from '../UI/Modal.js';
import FoodContext from '../../context/FoodContext.js';

const Cart = props => {
    const ctx = useContext(FoodContext)

    const item = ctx.foodItem

    const totalPrice = ctx.totalPrice.toFixed(2)

    return (
	    <div className={` transition -top-80 y-0`}> 
            <Modal>
                {item.length === 0 ? (
                    'No items were added.'
                ) : (
			<div className="py-5"> 
			<h2 className="text-center font-bold mb-5">Cart Items</h2>
                    <ul>
                        {item.map(i => (
                            <li key={i.id} className="border-b border-gray-300">
                                <h3 className="font-semibold">{i.name}</h3>
                                <p>{i.desc}</p>
                                <span>{i.price}</span>
                            </li>
                        ))}
                    </ul>
	    <p className="mx-auto text-center w-9/12 bg-gray-100 py-2 px-2 my-3 text-lg font-bold rounded-md">
                Total Price: {totalPrice} $
        </p>
			<div className="flex ">
			<button className="py-2 px-2 mr-1 rounded-md bg-red-500 hover:bg-red-700 transition ease-out duration-500 text-white" onClick={props.closeModal}>Close</button>
			<button className="py-2 px-2 mr-1 rounded-md bg-green-500 hover:bg-green-700 transition ease-out duration-500 text-white">Order</button>
			</div>
			</div>
                )}
	    </Modal>
	    </div>
    )
}

export default Cart
