import React from 'react'

const FoodContext = React.createContext({
    foodItem: [],
    totalPrice: 0,
    addItem: () => {},
    increaseAmount: () => {},
    removeItem: () => {}
})

export default FoodContext
