import React from "react";

export default function ViewBudget(props) {

    return (
        <>
            <span>{props.name}: {props.amount}€</span>
            <button
            type="button"
            onClick={props.handleEditClick}
            >
                Edit
            </button>
        </>
    )
}
