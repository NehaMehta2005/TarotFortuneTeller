export function reducer(state, action) {
    console.log(action);
    switch (action.type) {
      case "increment":

      return { ...state, count: state.count + 1  };
    default:
      return state;
  }
  
}

export const initialState = {
    count: 0
};