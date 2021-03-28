import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "./AppContext";


export default function ExpenseList(props) {
    const { expenses } = useContext(AppContext);
    return (
        <ul>
            {expenses.map(item => {
                console.log(item);
                return <ExpenseItem key={item.id} name={item.name} cost={item.cost} id={item.id}/> }
                )}
        </ul>
    )
}
