import React from 'react';
import ExpanseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return <div className="new-expense">
        <ExpanseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
}

export default NewExpense;