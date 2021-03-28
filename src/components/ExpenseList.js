import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "./AppContext";
import {List} from "@material-ui/core";


export default function ExpenseList(props) {
    const { expenses } = useContext(AppContext);
    return (
        <List>
            {expenses.map(item => {
                console.log(item);
                return <ExpenseItem key={item.id} name={item.name} cost={item.cost} id={item.id}/> }
                )}
        </List>
    )
}
