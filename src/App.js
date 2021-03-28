import React from 'react';
import Title from "./components/Title";
import TotalsBox from "./components/TotalsBox";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import {AppProvider} from "./components/AppContext";
import {Container} from "@material-ui/core";

function App() {
  return (
   <Container maxWidth="sm">
       <AppProvider>
           <div >
               <div >
                   <Title level="h1" title="Budget App"/>
               </div>

               <TotalsBox />
           </div>
           <div >
               <div >
                   <Title level="h2" title="Expenses" />
               </div>

               <ExpenseList />

           </div>

           <div >
               <div >
                   <Title level="h2" title="Add Expense" />
               </div>
               <ExpenseForm />
           </div>
       </AppProvider>
   </Container>
  );
}

export default App;
