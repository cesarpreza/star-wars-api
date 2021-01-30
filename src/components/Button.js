import React from 'react'

function Button(props) {
    const { onPageClick, children } = props;
    return (
        <button
            className='btn btn-dark'
            onClick={() => onPageClick(children)}
            style={{ margin: 5 }}> {children} </button>
    )
}

export default Button;