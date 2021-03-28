import React, { useContext, useState } from "react";
import TotalsField from "./TotalsField";
import { AppContext } from "./AppContext";
import EditBudget from "./EditBudget";
import ViewBudget from "./ViewBudget";


export default function TotalsBox(props) {
    let { budget, expenses } = useContext(AppContext);
    let [editBudget, setEditBudget] = useState(false);
    let { dispatch } = useContext(AppContext);

    let out = expenses.reduce((sum, item) => {
        return (sum += +item.cost);
    }, 0)

    function handleSaveClick(budget) {


        dispatch({
            type: 'UPDATE_BUDGET',
            payload: budget
        })
        setEditBudget(false);
    }

    function handleEditClick() {
        setEditBudget(true);
    }

    return (
        <div>
            {
                editBudget ?
                    <EditBudget budget={budget} handleSaveClick={handleSaveClick} />
                    :
                    <ViewBudget name="Budget" amount={budget} handleEditClick={handleEditClick}/>
            }
            <TotalsField name="In" amount={budget-out}/>
            <TotalsField name="Out" amount={out}/>
        </div>
    )
}
