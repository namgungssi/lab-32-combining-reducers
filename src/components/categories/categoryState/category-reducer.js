const emptyState = [];



export default (state=initialState, action) => {
  let {type, payload}=action;
  switch(type){

    case "CATEGORY_ADD":
    return [...state, payload];

    case "CATEGORY_UPDATE":
    return state.map(item => item.id === payload.id ? payload.dog : item);

    case "CATEGORY_DESTROY":
    return state.filter(item => item.id !== payload);

    default:
    return state;
  }
}
