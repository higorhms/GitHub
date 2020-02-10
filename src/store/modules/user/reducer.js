const INITIAL_STATE = { profile: null };

export default function user(state = INITIAL_STATE, action) {
   switch (action.type) {
      case '@auth/SIGN_IN': {
         return { ...state, profile: action.payload };
      }
      case '@auth/SIGN_OUT': {
         return { ...state, profile: null };
      }
      default: {
         return state;
      }
   }
}
