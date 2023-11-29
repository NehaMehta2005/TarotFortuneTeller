export const reducer = (state, action) => {
  switch (action.type) {
    case "terms":
      return { ...state, terms: action.payload };
    case "privacy":
      return { ...state, privacy: action.payload };
    default:
      return state;
  }
};

export const initialState = {
    termsData: null,
    privacyData: null
};