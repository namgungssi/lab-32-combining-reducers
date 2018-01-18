import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import sinon from 'sinon';
import CategoryForm from '../components/categories/Category-form';
import ExpenseForm from '../components/expenses/Expense-form';



describe('<CategoryForm/>', () => {
  test('add a new category', () => {
    const wrapper = shallow(<CategoryForm />);

    let name = "groceries";
    let budget = "100";

    let noteCreate = (state) => {
      expect(Category.state().name).toEqual(name);
      expect(Category.state().budget).toEqual(budget);
    }

    let Category = shallow(<CategoryForm handler={noteCreate} />);

    Category.find("#categoryName").simulate( 'change', { target: {name:"name", value:name} } );
    Category.find("#budgetAmt").simulate( 'change', { target: {name:"budget", value:budget} } );
    Category.find("#categorySubmitButton").simulate( 'submit', { preventDefault:()=>{} } );
  });
});



describe('<ExpenseForm/>', () => {
  test('add a new expense', () => {
    const wrapper = shallow(<ExpenseForm />);

    let expense = "PCC";
    let cost = "100";

    let noteCreate = (state) => {
      expect(Expense.state().expense).toEqual(expense);
      expect(Expense.state().cost).toEqual(cost);
    }

    let Expense = shallow(<ExpenseForm handler={noteCreate} />);

    Expense.find("#expenseName").simulate('change', { target: {name:"expense", value:expense}});
    Expense.find("#expenseAmt").simulate('change', { target: {name:"cost", value:cost}});
    Expense.find("#expenseSubmitButton").simulate('submit', {preventDefault:()=>{}});
  });
});
