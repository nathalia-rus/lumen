const initialState = {
  email: '',
  username: '',
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
      list: [
        ...action.list
      ] 
    }
    case "GET_NOTES":
    return {
      ...state,
      notes: [
        ...action.notes
      ]
 
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