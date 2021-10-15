import React from 'react'

const Backdrop = props => {
    return (
        <div className="fixed w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center inset-0">
            {props.children}
        </div>
    )
}

export default Backdrop
