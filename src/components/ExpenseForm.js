import React, { useState, useContext } from "react";
import { AppContext } from "./AppContext";
import { v4 as uuid } from "uuid";
import Button from '@material-ui/core/Button';
import { TextField } from "@material-ui/core";


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
            <TextField
                fullWidth
                variant="outlined"
                label="Name"
                autoComplete="name"
                margin="normal"
                required
                type='text'
                id='name'
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <TextField
                required
                variant="outlined"
                label="Cost"
                margin="normal"
                fullWidth
                autoComplete="Cost"
                type='number'
                id='cost'
                value={cost}
                onChange={(event) => setCost(event.target.value)}
            />

        <Button
            type='submit'
            variant="contained"
            color="primary"
            fullWidth
        >
            Save
        </Button>
        </form>
    )
}
