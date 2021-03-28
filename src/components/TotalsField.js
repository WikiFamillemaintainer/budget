import React from "react";
import {TableCell, TableRow} from "@material-ui/core";


export default function TotalsField(props) {

    return (
        <TableRow>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.amount}€</TableCell>
            <TableCell></TableCell>
        </TableRow>
    )
}
