export const reducer = (state, action) => {
  switch (action.type) {
    case "setActiveTip":
      return { ...state, activeTip: action.payload };

      case "setSubmitted":
      return { ...state, submitted : action.payload };

      // case "setQuantity": 
      // return {...state , quantity : action.payload};

  
    default:
      return state;
  }
};

export const initialState = {
  activeTip: 0,
  submitted: false,
  // quantity:1
};