export const IS_LOADING = 'IS_LOADING';
export const USER_DETAILS = 'USER_DETAILS';

const initialState = {
  is_loading: false,
  user_details: {},
};

const app_reducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        is_loading: action.payload,
      };
    case USER_DETAILS:
      return {
        ...state,
        user_details: action.payload,
      };
  }
  return state;
};

export default app_reducer;
