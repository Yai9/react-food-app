import React from 'react'

const FoodContext = React.createContext({
    foodItem: [],
    totalPrice: 0,
    addItem: () => {},
    removeItem: () => {}
})

export default FoodContext
