import React, { useReducer, Fragment } from 'react'
import FoodContext from '../context/FoodContext.js'

const initialState = {
    foodItem: [],
    totalPrice: 0
}

const foodItemReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const itemExists = state.foodItem.findIndex(
            i => i.id === action.foodItem.id
        )
        const existingItem = state.foodItem[itemExists]

        let updatedItems

        if (existingItem) {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.foodItem.amount
            }
            updatedItems = [...state.foodItem]
            updatedItems[itemExists] = updatedItem
        } else {
            updatedItems = state.foodItem.concat(action.foodItem)
        }
        const updatedPrice =
            state.totalPrice + action.foodItem.price * action.foodItem.amount

        return {
            foodItem: updatedItems,
            totalPrice: updatedPrice
        }
    }

	if(action.type === 'INCREASE_AMOUNT'){
	const itemExists = state.foodItem.findIndex(
            i => i.id === action.id
        )
        
	const existingItem = state.foodItem[itemExists]
        let updatedItems
	let updatedItem
		if(existingItem){
			updatedItem = {
				...existingItem,
				amount: existingItem.amount + 1
			}
			updatedItems = [...state.foodItem]
			updatedItems[itemExists] = updatedItem
			const updatedPrice = state.totalPrice + existingItem.price * 1
			return{
				foodItem: updatedItems,
				totalPrice: updatedPrice

			}
		}
	}

	if(action.type === 'REMOVE_ITEM'){
	const itemExists = state.foodItem.findIndex(
            i => i.id === action.id
        )
        
	const existingItem = state.foodItem[itemExists]

        let updatedItems
	let updatedItem

		if(existingItem.amount <= 1){
		        const updatedPrice = state.totalPrice - existingItem.price * 1
			updatedItems = state.foodItem.filter(item=>item.id !== existingItem.id)
			return{
				foodItem:updatedItems,
				totalPrice:updatedPrice
			}
		}
		else if (existingItem) {
            updatedItem = {
                ...existingItem,
                amount: existingItem.amount - 1
            }
            updatedItems = [...state.foodItem]
            updatedItems[itemExists] = updatedItem
		console.log(updatedItems,'updatedItems')
        }

        const updatedPrice =
            state.totalPrice - updatedItem.price * 1
		
        return {
            foodItem: updatedItems,
            totalPrice: updatedPrice
        }

	}

    return initialState
}

const FoodContextProvider = props => {
    const [foodState, dispatch] = useReducer(foodItemReducer, initialState)

    const addCartItemHandler = item => {
        dispatch({ type: 'ADD_ITEM', foodItem: item })
    }
    
	const increaseAmountHandler = (id) => {
        dispatch({ type: 'INCREASE_AMOUNT', id:id})
    }

    const removeCartItemHandler = id => {
        dispatch({ type: 'REMOVE_ITEM', id: id })
    }

    const contextValue = {
        foodItem: foodState.foodItem,
        totalPrice: foodState.totalPrice,
        addItem: addCartItemHandler,
	increaseAmount: increaseAmountHandler,
        removeItem: removeCartItemHandler
    }

    return (
        <Fragment>
            <FoodContext.Provider value={contextValue}>
                {props.children}
            </FoodContext.Provider>
        </Fragment>
    )
}
export default FoodContextProvider
