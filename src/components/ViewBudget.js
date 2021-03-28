import React from "react";
import {TableCell, TableRow} from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default function ViewBudget(props) {

    return (
        <TableRow>
            <TableCell>
                <span>{props.name}</span>
            </TableCell>
            <TableCell>
                {props.amount}€
            </TableCell>
            <TableCell>
                <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    onClick={props.handleEditClick}
                >
                    Edit
                </Button>
            </TableCell>

        </TableRow>
    )
}
