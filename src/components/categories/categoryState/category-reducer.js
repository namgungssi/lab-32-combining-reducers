const emptyState = [];



export default (state=emptyState, {type, payload}) => {
  switch ( type ) {

    case "CATEGORY_ADD":
    return [...state, payload];

    case "CATEGORY_UPDATE":
    return state.map(item => item.id === payload.id ? payload : item );

    case "CATEGORY_DESTROY":
    return state.filter(item => item.id !== payload)

    case "EXPENSE_ADD":
    return state.map(category => category.id === payload.categoryId ? (category.budget -= payload.cost) && category : category);

    case "EXPENSE_UPDATE":
    return state.map(category => category.id === payload.categoryId ? (category.budget -= payload.cost) && category : category);

    case "EXPENSE_DELETE":
    return state.map(category => category.id === payload.categoryId ? (category.budget += payload.cost) && category : category);

    default:
    return state;
  };
};
