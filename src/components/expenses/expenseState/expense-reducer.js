import {log} from "util";



const initialState = {};



export default (state=initialState, action) => {
  let {type, payload={}} = action;
  let {id, categoryId} = payload;
  let categoryExpenses = state[categoryId];

  switch(type) {

    case "CATEGORY_ADD":
    return {...state, [payload.id]:[]};

    case "CATEGORY_DESTROY":
    let {[payload]:x, ...newState} = state;
    return newState;

    case "EXPENSE_ADD":
    return {...state, [categoryId]: [...categoryExpenses, payload]};

    case "EXPENSE_DELETE":
    let deleteExpenseList = categoryExpenses.filter(exp => exp.id !== id );
    return {...state, [categoryId]: deleteExpenseList};

    case "EXPENSE_UPDATE":
    let updateExpenseList = categoryExpenses.map(exp => exp.id === id ? payload : exp );
    return {...state, [categoryId]: updateExpenseList};

    default:
    return state;
  };
};
