import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import uuid from 'uuid/v1';
import {createCategory, updateCategory, deleteCategory} from '../components/categories/categoryState/category-actions';
import {createExpense, updateExpense, deleteExpense} from '../components/expenses/expenseState/expense-actions';



describe('test Category actions', () => {
  test('category add returns type & payload', ()=> {

    let category = {name: 'FOOD', budget: '500'};

    let action = createCategory(category);

    expect(action.type).toEqual('CATEGORY_ADD');
    expect(action.payload.name).toEqual('FOOD');
    expect(action.payload.budget).toEqual('500');
    expect(action.payload.id).not.toBe(undefined);
  });


  test('category update returns correct type & payload', ()=> {
    let category = {name: 'BEER', budget: '100'};
    let action = updateCategory(category);

    expect(action.type).toEqual('CATEGORY_UPDATE');
    expect(action.payload.name).toEqual('BEER');
    expect(action.payload.budget).toEqual('100');
  });


  test('category destroy returns correct type & categoryId', ()=> {
    let category = {name: 'STUFF', id: uuid()};
    let action = deleteCategory(category.id);

    expect(action.type).toEqual('CATEGORY_DESTROY');
    expect(action.payload).toEqual(category.id);
  });
});



describe('test Expense actions', () => {
  test('expense & returns correct type & payload', ()=> {
    let expense = {expense: 'PHONE', cost: '250'};
    let action = createExpense(expense);

    expect(action.type).toEqual('EXPENSE_ADD');
    expect(action.payload.expense).toEqual('PHONE');
    expect(action.payload.cost).toEqual('250');
    expect(action.payload.id).not.toBe(undefined);
  });


  test('expense update returns correct type and payload', ()=> {
    let expense = {expense: 'CHIPS', cost: '50'};
    let action = updateExpense(expense);

    expect(action.type).toEqual('EXPENSE_UPDATE');
    expect(action.payload.expense).toEqual('CHIPS');
    expect(action.payload.cost).toEqual('50');
  });


  test('expense delete returns correct type and expense =', ()=> {
    let expense = {expense: 'STUFF', cost: '20'};
    let action = deleteExpense(expense);

    expect(action.type).toEqual('EXPENSE_DELETE');
    expect(action.payload.expense).toEqual('STUFF');
    expect(action.payload.cost).toEqual('20');
  });
});
