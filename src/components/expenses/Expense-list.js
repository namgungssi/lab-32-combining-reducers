import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from './Expense-item';



class ExpenseList extends React.Component {
  render() {

    let categoryId = this.props.categoryId;
    let expenses = this.props.expenses[categoryId];

    return (
      <div id="expenseList">
      {
        expenses.map(expense =>
          <ExpenseItem key={expense.id} expense={expense}
          handleDelete={this.props.handleDelete}
          handleUpdate={this.props.handleUpdate}/>)
        }
        </div>
      )
    }
  }



export default ExpenseList;
