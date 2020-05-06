import React from 'react';
import '../../src/index.css';

const Button = (props) => {
    return (
        <button className={props.buttonState}>
            Button
        </button>
    )
}

export default Button;