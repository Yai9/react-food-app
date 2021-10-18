import React, { useState, useContext, Fragment } from 'react'
import FoodContext from '../context/FoodContext.js'
import FoodContextProvider from '../providers/FoodContextProvider.js'
import Header from '../components/UI/Header.js'
import FoodContainer from '../components/FoodContainer/FoodContainer.js'
import Cart from '../components/Cart/Cart.js'

const App = () => {
    const [cartVisible, setVisibility] = useState(false)

    const ctx = useContext(FoodContext)
    const foodArray = [
        {
            id: '1',
            name: 'Green Bowl',
            desc: 'Fresh vegetables bowl with cream dressing.',
            price: 8.99
        },
        {
            id: '2',
            name: 'Chicken sandwich',
            desc: 'Delicious quick meal with best quality meat served!',
            price: 9.99
        },
        { id: '3', name: 'Carbonara plate', desc: 'Bellissimo!', price: 10.99 },
        {
            id: '4',
            name: 'Vanilla Cherry Pancakes',
            desc: 'Saved some space for a delicious dessert?',
            price: 11.99
        }
    ]
    const showCartHandler = () => {
        setVisibility(prevState => !prevState)
    }

    const closeModalHandler = () => {
        setVisibility(false)
    }

    return (
        <Fragment>
            <FoodContextProvider>
                <Header foodArray={ctx.foodItem} onCartShow={showCartHandler} />
                <div className="absolute inset-44 ">
                    <FoodContainer
                        foodArray={foodArray}
                        visibility={cartVisible}
                        closeModal={closeModalHandler}
                    />
                </div>
            </FoodContextProvider>
        </Fragment>
    )
}

export default App
