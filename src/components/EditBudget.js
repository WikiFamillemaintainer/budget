import React, { useState } from "react";
import {TableCell, TableRow, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default function EditBudget(props) {
    const [budget, setBudget] = useState(props.budget);

    return (
        <TableRow>
            <TableCell>
            <TextField
                type="number"
                id="budget"
                required='required'
                value={budget}
                onChange={(e)=> setBudget(e.target.value)}
            />
            </TableCell>
            <TableCell>
            <Button
                type="button"
                variant="contained"
                color="primary"
                onClick={() => props.handleSaveClick(budget)}
            >
                Save
            </Button>
            </TableCell>
       </TableRow>
    )
}
