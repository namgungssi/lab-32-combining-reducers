const emptyState = [];



export default (state=initialState, action => {
  let {type, payload}=action;
  switch(type){

    case "CATEGORY_ADD":
    return [...state, payload];

    case "CATEGORY_UPDATE":
    return state.map(item => item.id === payload.id ? payload.dog : item);

    case "CATEGORY_DESTROY":
    return state.filter(item => item.id !== payload);

    case "EXPENSE_ADD":
    return state.map(item => item.id === payload.dogId ? (item.expenses += payload.amount) && (item.remaining = item.budget - item.expenses) && item : item);

    case "EXPENSE_UPDATE":
    return state.map(item => item.id === payload.dogId ? (item.expenses += payload.difference) && (item.remaining = item.budget - item.expenses) && item : item);

    case "EXPENSE_DELETE":
    return state.map(item => item.id === payload.dogId ? (item.expenses = item.expenses - payload.amount) && (item.remaining = item.budget - item.expenses) && item : item);

    default:
    return state;
  };
};
