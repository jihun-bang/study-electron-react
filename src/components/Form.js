import React from 'react';
import '../assets/Form.css';

function Form({value, onChange, onCreate, onKeyPress}) {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    )
}

export default Form;
