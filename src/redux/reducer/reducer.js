export const REGISTER = 'REGISTER'
export const LOGOUT = 'LOGOUT'
export const RE_SEND_OTP = 'RE_SEND_OTP'
export const GET_PHRASES = 'GET_PHRASES'
export const GET_TERMS_N_CONDITIONS = 'GET_TERMS_N_CONDITIONS'

const initialState = {
  userDetails: null,
  is_sign_in: false,
  is_loading: false,
  user_id: null,
  otp: '',
  verify_email: {},
  re_send_otp: null,
  get_phrases: null,
  terms_n_conditions : null,
}

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        userDetails: action.payload,
      }
    case LOGOUT:
      return {
        userDetails: null,
        is_sign_in: false,
        is_loading: false,
        user_id: null,
        otp: '',
        verify_email: {},
      }
    case RE_SEND_OTP:
      return {
        ...state,
        re_send_otp: action.payload,
      }
    case GET_PHRASES:
      return {
        ...state,
        get_phrases: action.payload,
      }
      case GET_TERMS_N_CONDITIONS : 
     return  {
        ...state,
        terms_n_conditions : action.payload
      }


    default:
      return state
  }
}