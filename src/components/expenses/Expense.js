import React from 'react';
import {connect} from 'react-redux';
import {createExpense, updateExpense, deleteExpense} from './expenseState/expense-actions';
import ExpenseForm from './Expense-form';
import ExpenseList from './Expense-list';



class Expense extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      submitText: 'Add Expense'
    }
  }

  render() {
    let {categoryId, expenses, categoryBudget} = this.props;

    return (
      <div id='ExpenseWrapper'>
        <ExpenseForm handler={this.props.createExpense}
          categoryId={categoryId}
          categoryBudget={categoryBudget}
          submitText={this.state.submitText}/>
        <ExpenseList
          categoryId={categoryId}
          expenses={expenses}
          handleDelete={this.props.deleteExpense}
          handleUpdate={this.props.updateExpense}
          />
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  expenses: state.expenses
});


const mapDispatchToProps = (dispatch,getState) => ({
  createExpense: expense => dispatch(createExpense(expense)),
  deleteExpense: expense => dispatch(deleteExpense(expense)),
  updateExpense: expense => dispatch(updateExpense(expense)),
});



export default connect(mapStateToProps, mapDispatchToProps)(Expense);
