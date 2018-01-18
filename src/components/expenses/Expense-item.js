import React from 'react';
import ExpenseForm from './Expense-form';



class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitText: 'Update',
      formState: 'inactive',
      submitState: 'hidden'
    }
  }


  render() {
    return (
      <div className="expense-item">
      <header id="expenseHeader">
      <ExpenseForm handler={this.props.handleUpdate}
      handleDelete={this.props.handleDelete}
      categoryBudget={this.props.categoryBudget}
      updateBudget={this.props.updateBudget}
      expense={this.props.expense}
      categoryId={this.props.categoryId}
      submitText={this.state.submitText}
      formState={this.state.formState}
      submitState={this.state.submitState}/>
      </header>
      </div>
    )
  }
}



export default ExpenseItem;
