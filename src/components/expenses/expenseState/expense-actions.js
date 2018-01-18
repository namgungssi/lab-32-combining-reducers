import uuid from 'uuid/v1';



export const createExpense = (expense) => {
  expense.id = uuid();
  expense.createDate = new Date();

  return {
    type:"EXPENSE_ADD",
    payload: expense
  };
};


export const deleteExpense = (expense) => {
  return {
    type:"EXPENSE_DELETE",
    payload: expense
  }
}


export const updateExpense = (expense) => {
  return {
    type:"EXPENSE_UPDATE",
    payload: expense
  }
}
