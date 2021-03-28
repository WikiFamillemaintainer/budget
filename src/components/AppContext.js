import { createContext, useReducer } from 'react';

let initialState = {
    budget: 2000,
    expenses: [
        {id: 1, name: "iPhone", cost:300},
        {id: 2, name: "Skateboard", cost:100},
        {id: 3, name: "Ps4", cost:400}
    ]
}

export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses].filter(el => el.id !== action.payload)
            }
        case 'UPDATE_BUDGET':
            return {
                ...state,
                budget: action.payload
            }
        default:
            return state;
    }
}

export const AppContext = createContext();

export const AppProvider = props => {
    let [ state, dispatch ] = useReducer(AppReducer, initialState);
    return (
        <AppContext.Provider value={
            {
                expenses: state.expenses,
                budget: state.budget,
                dispatch
            }
        }>
            {props.children}
        </AppContext.Provider>
    )
}
