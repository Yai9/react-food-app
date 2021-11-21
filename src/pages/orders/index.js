import React, { useEffect, useState } from 'react'

const Orders = () => {
    const [orders, setOrders] = useState([])
    let orderArray = []

    const fetchOrderData = async () => {
        try {
            const response = await fetch(
                'https://react-food-app-53f42-default-rtdb.europe-west1.firebasedatabase.app/orders.json'
            )
            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
            const data = await response.json()
            for (let key in data) {
                data[key].map(item => {
                    orderArray.push({
			    key: key,
                        id: item.id,
                        name: item.name,
                        desc: item.desc,
                        price: item.price,
                        amount: item.amount
                    })
                })
                console.log(data[key], 'data[key]')
            }
            setOrders(orderArray)
            console.log(data, 'data')
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchOrderData()
    }, [])

    let content;

    if (orders.length !== 0) {
        content = (
		<div className="my-8">
            <div className="max-w-screen-lg m-auto bg-purple-500 shadow-2xl py-6 px-6 rounded-md">
			<ul className=" list-none max-h-96 overflow-y-scroll">
                {orders.map(order => (
                    <li key={Math.random()} className="flex flex-col mx-10 px-6 py-2 bg-white my-4 rounded-md">
                        <h2>{order.name}</h2>
			<span>Amount: {order.amount}</span>
			<span>Price: {order.price}</span>
                    </li>
                ))}
			</ul>
            </div>
		</div>
        )
    }

    return <div className="absolute inset-52 max-w-screen-lg m-auto"><div className="flex justify-center bg-purple-500 rounded-md py-4"><p className="text-2xl text-white font-bold">Order History</p></div>{orders.length === 0 ? <p>Loading...</p> : content}</div>
}

export default Orders
