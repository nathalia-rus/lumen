const initialState = {
  scores: {},
  list:[],
  notes:[],
  donations:{}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SCORES":
    return {
      ...action.scores
    };
    case "CREATE_LIST_ITEM":
    return {
      ...state,
      content: action.content
    };
    case "GET_LIST_ITEMS":
    return {
      ...action.listItems
    }
    case "CREATE_NOTE":
    return {
    ...state, 
     content: action.content
    };
    case "GET_NOTES":
    return {
      ...action.notes
    };
    case "CREATE_DONATION":
    return {
      ...state,
        amount: action.amount,
        institution: action.institution
    };
    case "GET_DONATIONS":
    return {
      ...action.donations
    };
    default: 
    return state
  }
};

export default reducer;
