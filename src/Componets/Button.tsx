import React from 'react';

type ButtonType = {
    title: string
    action: () => void
    disabled?: boolean
}

const Button = (props: ButtonType) => {
    return (
        <div className={'button'}>
            <button
                onClick={props.action}
                disabled={props.disabled}
                className={props.disabled ? 'btnDisabled' : ''}
            >
                {props.title}
            </button>
        </div>
    );
};

export default Button;