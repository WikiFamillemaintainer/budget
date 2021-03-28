import React, { useContext } from "react";
import {TiDelete} from "react-icons/all";
import { AppContext } from "./AppContext";



export default function ExpenseItem(props) {
    const { dispatch } = useContext(AppContext);

    function handleDelete() {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        })
    }

    return (
        <li>
            {props.name}
            <div>
                <span>{props.cost}€</span>
                <TiDelete
                    onClick={handleDelete}
                />
            </div>
        </li>
    )
}
