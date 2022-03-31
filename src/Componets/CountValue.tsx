import React from 'react';
import {maxCount, minCount} from "./Counter";

type CountValueType = {
    value: number
}
const CountValue = (props: CountValueType) => {
    let countClass: string;
    switch (props.value) {
        case maxCount:
            countClass = 'maxCountValueDisabled'
            break;
        case minCount:
            countClass = 'minCountValueDisabled'
            break;
        default:
            countClass = 'contValue'
            break;
    }

    return (
        <div className={countClass}>
            {props.value}
        </div>
    );
}

export default CountValue;