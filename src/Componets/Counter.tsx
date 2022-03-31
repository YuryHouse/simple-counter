import React from 'react';
import CountValue from "./CountValue";
import Button from "./Button";

export const maxCount = 5;
export const minCount = 0;


type CounterType = {
    count: number
    incrementCount: () => void
    resetCount: () => void
    decrementCount: () => void
}

const Counter = (props: CounterType) => {
    return (
        <div>
            <CountValue
                value = {props.count}
            />
            <div className={'button'}>
                <Button
                    title='Increment'
                    action={props.incrementCount}
                    disabled={props.count === maxCount}
                />
                <Button
                    title='Reset'
                    action={props.resetCount}
                    disabled={props.count === 0}
                />
                <Button
                    title='Decrement'
                    action={props.decrementCount}
                    disabled={props.count === minCount}
                />
            </div>
        </div>
    );
};

export default Counter;