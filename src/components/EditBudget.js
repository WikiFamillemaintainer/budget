import React, { useState } from "react";

export default function EditBudget(props) {
    const [budget, setBudget] = useState(props.budget);

    return (
        <>
            <input
                type="number"
                id="budget"
                required='required'
                value={budget}
                onChange={(e)=> setBudget(e.target.value)}
            />
            <button
                type="button"
                onClick={() => props.handleSaveClick(budget)}
            >
                Save
            </button>
       </>
    )
}
