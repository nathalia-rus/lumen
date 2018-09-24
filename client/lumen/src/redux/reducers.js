const initialState = {
  email: '',
  username: '',
  scores: {
    goodActions: 0,
    smiles: 0,
    amount: 0
  },
  list: [''],
  notes:[''],
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
    case "ADD_POINT":
      return {
        ...state,
        scores: {
          ...state.scores,
          [action.what]: state.scores[action.what]+=1
        }
      };
    case "REMOVE_POINT":
      return {
        ...state,
        scores: {
          ...state.scores,
          [action.what]: state.scores[action.what] -= 1
        }
      };
  //   case "GET_AMOUNT":
  //   return {
  //     ...state,
  //     donations: {
  //       amount: [
  //         ...action.amount
  //       ]
  //     }
  // }
    case "GET_LIST_ITEMS":
    return {
      ...state,
      list: action.list
    };
    case "ADD_LIST_ITEMS":
      return {
        ...state,
        list: action.listItem
      };
    case "GET_NOTES":
    return {
      ...state,
      notes: action.notes
    };
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


/*     case "CREATE_DONATION":
    return {
      ...state,
        amount: action.amount,
        institution: action.institution
    }; */
