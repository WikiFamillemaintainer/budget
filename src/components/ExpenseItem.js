import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';



export default function ExpenseItem(props) {
    const { dispatch } = useContext(AppContext);

    function handleDelete() {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        })
    }

    return (
        <ListItem>
            <ListItemText>
                {props.name}
            </ListItemText>

            <ListItemText>{props.cost}€</ListItemText>
            <ListItemIcon>
                <HighlightOffIcon
                onClick={handleDelete}
            />
            </ListItemIcon>

        </ListItem>
    )
}
