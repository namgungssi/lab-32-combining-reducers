import {combineReducers} from 'redux';
import categoryReducer from '../components/categories/categoryState/category-reducer';
import expenseReducer from '../components/expenses/expenseState/expense-reducer';



export default combineReducers({
  categories: categoryReducer,
  expenses: expenseReducer
})
