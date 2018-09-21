const initialState = {
  scores: {},
  list:[],
  notes:[],
  donations: {
    amount: [],
    institution: []
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SCORES":
    return {
      ...state,
      scores: {
        ...action.scores
      }
    };
/*     case "CREATE_LIST_ITEM":
      return {
        ...state,
        list: {
          ...action.listItem
        }
      }; */
    case "GET_LIST_ITEMS":
    return {
      ...state,
      list: [
        ...action.list
      ] 
    }
/*     case "CREATE_NOTE":
    return {
    ...state, 
     content: action.content
    }; */
    case "GET_NOTES":
    return {
      ...state,
      notes: [
        ...action.notes
      ]
 
    };
/*     case "CREATE_DONATION":
    return {
      ...state,
        amount: action.amount,
        institution: action.institution
    }; */
    case "GET_DONATIONS":
    return {
      ...state,
      donations: {
        amount: [
          ...action.amount
        ],
        institution: [
          ...action.institution
        ]
      }
    }
    default: 
    return state
  }
};

export default reducer;
