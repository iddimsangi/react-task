import React from 'react'

function Validation(props) {
    let validationText = 'very long words';
    if(props.inputLength <= 5){
        validationText = 'very short words';
    }
    return (
        <div>
            {
                <p>{validationText}</p>
            }
        </div>
    )
}

export default Validation
