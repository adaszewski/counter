import React from "react";
import './Step.css';


function Step(props) {
    let stepValue
    return (
        <label>Kroki: <input ref={(data) => { stepValue = data }} type="number" min="1" onChange={() => props.stepMethod(stepValue.value)} />
        </label>
    )
}

export default Step;