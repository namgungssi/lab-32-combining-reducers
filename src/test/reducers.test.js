import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import uuid from 'uuid/v1';
import categoryReducer from '../components/categories/categoryState/category-reducer';
import expenseReducer from '../components/expenses/expenseState/expense-reducer';



describe('Reducer tests', () => {

  describe('Category Reducer tests', () => {
    let category = {name: 'Pebbles', createDate: new Date(), id: uuid()};
    let state =[];


    test('add a new category', () => {
      let action = {type: 'CATEGORY_ADD', payload: category};
      state = categoryReducer(state, action);


      expect(state.length).toEqual(1);
      expect(state[0].name).toEqual('Pebbles');
    });


    test('update a category', () => {
      let newCategory = {name: 'Updated'};

      state = categoryReducer(state, {
        type: 'CATEGORY_UPDATE',
        payload: {
          name: newCategory.name,
          createDate: new Date(),
          id: category.id,
        }
      });


      expect(state[0].name).toEqual('Updated');
      expect(state.length).toEqual(1);
    });


    test('delete a category', () => {
      let dog1 = {name: 'Dog1', budget: '50', expenses: {}, id: uuid()};
      let dog2 = {name: 'Dog2', budget: '100', expenses: {}, id: uuid()};

      state = [{...dog1}, {...dog2}];

      state = categoryReducer(state, {
        type: 'CATEGORY_DESTROY',
        payload: dog1.id
      });


      expect(state.length).toEqual(1);
      expect(state[0].name).toEqual('Dog2');
    });
  })



  describe('Expense Reducer tests', () => {
    test('add a new expense', () => {

      let categoryId = uuid();
      let expenseObj = {
        expense: 'LAPTOP',
        cost: '200',
        id: uuid(),
        categoryId: categoryId
      };

      let state = {
        [categoryId]: expenseObj
      }

      state = expenseReducer(state, {
        type: 'EXPENSE_ADD',
        payload: {
          expense: 'LAPTOP',
          cost: '200',
          id: uuid(),
          categoryId: categoryId
        }
      });


      expect(state[categoryId][0].expense).toEqual('LAPTOP');
      expect(state[categoryId][0].cost).toEqual('200');
    });
  });
});
