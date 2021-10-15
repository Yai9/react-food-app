import React, { Fragment } from 'react'
import Backdrop from '../UI/Backdrop.js'

const ModalOverlay = props => {
    return (
        <div className="flex transition ease-out duration-500  mx-auto w-4/12 justify-center bg-white py-3 rounded-md">
            {props.children}
        </div>
    )
}

const Modal = props => {
    return (
        <Fragment>
            <Backdrop>
                <ModalOverlay>{props.children}</ModalOverlay>
            </Backdrop>
        </Fragment>
    )
}

export default Modal
