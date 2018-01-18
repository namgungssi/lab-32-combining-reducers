import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import uuid from 'uuid/v1';
import {createCategory, updateCategory, deleteCategory} from '../components/categories/categoryState/category-actions';
import {createExpense, updateExpense, deleteExpense} from '../components/expenses/expenseState/expense-actions';



describe('test Category actions', () => {
  test('category add returns correct type and payload', ()=> {

    let category = {name: 'FOODZ', budget: '300'};

    let action = createCategory(category);

    expect(action.type).toEqual('CATEGORY_ADD');
    expect(action.payload.name).toEqual('FOODZ');
    expect(action.payload.budget).toEqual('300');
    expect(action.payload.id).not.toBe(undefined);
  });


  test('category update returns correct type and payload', ()=> {
    let category = {name: 'BEER', budget: '500'};
    let action = updateCategory(category);

    expect(action.type).toEqual('CATEGORY_UPDATE');
    expect(action.payload.name).toEqual('BEER');
    expect(action.payload.budget).toEqual('500');
  });


  test('category destroy returns correct type and categoryId', ()=> {
    let category = {name: 'STUFFZ', id: uuid()};
    let action = deleteCategory(category.id);

    expect(action.type).toEqual('CATEGORY_DESTROY');
    expect(action.payload).toEqual(category.id);
  });
});



describe('test Expense actions', () => {
  test('expense add returns correct type and payload', ()=> {
    let expense = {expense: 'MIGHTY Os', cost: '50'};
    let action = createExpense(expense);

    expect(action.type).toEqual('EXPENSE_ADD');
    expect(action.payload.expense).toEqual('MIGHTY Os');
    expect(action.payload.cost).toEqual('50');
    expect(action.payload.id).not.toBe(undefined);
  });


  test('expense update returns correct type and payload', ()=> {
    let expense = {expense: 'IPAs', cost: '30'};
    let action = updateExpense(expense);

    expect(action.type).toEqual('EXPENSE_UPDATE');
    expect(action.payload.expense).toEqual('IPAs');
    expect(action.payload.cost).toEqual('30');
  });


  test('expense =estroy returns correct type and expense =', ()=> {
    let expense = {expense: 'STUFFZ', cost: '20'};
    let action = deleteExpense(expense);

    expect(action.type).toEqual('EXPENSE_DELETE');
    expect(action.payload.expense).toEqual('STUFFZ');
    expect(action.payload.cost).toEqual('20');
  });
});
