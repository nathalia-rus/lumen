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
  donations: ['']
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
    case "DELETE_LIST_ITEM":
      console.log('sgfhjshriufbhsehbfezigejqfbs',action.id)
      return {
        ...state,
        list: state.list.filter( item => { return item.id !== action.id} )
      };
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter(item => { return item.id !== action.id })
      };
    case "DELETE_DONATION":
      return {
        ...state,
        donations: state.donations.filter(item => { return item.id !== action.id })
      };
    case "TOGGLE_LIST_ITEM":
      return {
        ...state,
        list: state.list.map(
          item => { 
          
          if (item.id === action.id) {
            return {
              ...item,
              completed: !item.completed
            }
          }
          return { ...item}
        })
      };
    case "GET_NOTES":
      return {
        ...state,
        notes: action.notes
      };
    case "ADD_LIST_ITEMS":
      return {
        ...state,
        list: [
          ...state.list, 
          {
            text: action.text,
            completed: false,
            idRedux: action.idRedux
          } ]
      };
    case "ADD_NOTES":
    return {
      ...state,
      notes: [ 
        ...state.notes,
         {
           text: action.text,
           id: action.id
      }] 
    };
    case "GET_DONATIONS":
    return {
      ...state,
      donations: action.donations
      };
    case "ADD_DONATION":
      return {
        ...state,
        donations: [
          ...state.donations,
          {
            id: action.id,
            institution: action.institution,
            amount: action.amount,
          }]
      };
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
