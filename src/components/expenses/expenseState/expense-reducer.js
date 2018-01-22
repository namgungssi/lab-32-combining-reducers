import {log} from "util";



const initialState = [];



export default (state=initialState, action) => {

  let {type, payload={}} = action;
  let {id, categoryId} = payload;
  let categoryExpenses = state[categoryId];

    switch(type) {

      case 'EXPENSE_ADD': return [...state, payload];

      case 'EXPENSE_DELETE': return state.filter(item => item.id !== payload.id);

      case 'EXPENSE_UPDATE': return state.map(expense => expense.id === payload.id ? payload : expense);

      case 'CATEGORY_DELETE': return state.filter(item => item.dogId !== payload);


      default:
         return state;

   }
 };
