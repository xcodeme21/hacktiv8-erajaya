import React from 'react'

const Text = (props) => {
    const { className } = props
    return (
        <div className={className}>{props.children}</div>
    )
}

export default Text