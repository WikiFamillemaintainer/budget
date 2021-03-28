import React, { useState, useContext } from "react";
import { AppContext } from "./AppContext";
import { v4 as uuid } from "uuid";


export default function ExpenseForm(props) {
    let [ name, setName ] = useState('');
    let [ cost, setCost ] = useState('');
    let { dispatch } = useContext(AppContext);

    const onSubmit = (event) => {
        event.preventDefault();
        let expense = {
            id: uuid(),
            name,
            cost
        }
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })
        cost = setCost('');
        name = setName('');
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <div >
                    <label htmlFor='name'>Name</label>
                    <input
                        required='required'
                        type='text'
                        id='name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='cost'>Cost</label>
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                    />
                </div>
            </div>
            <div>
                <div >
                    <button type='submit' >
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}
