import React from 'react';
import Title from "./components/Title";
import TotalsBox from "./components/TotalsBox";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import {AppProvider} from "./components/AppContext";



function App() {
  return (
   <div>
       <AppProvider>
           <Title level="h1" title="Budget App" />
           <TotalsBox />
           <Title level="h2" title="Expenses" />
           <ExpenseList />
           <Title level="h2" title="Add Expense" />
           <ExpenseForm />
       </AppProvider>
   </div>
  );
}

export default App;
