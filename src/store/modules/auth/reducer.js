const INITIAL_STATE = { signed: false };

export default function auth(state = INITIAL_STATE, action) {
   switch (action.type) {
      case '@auth/SIGN_IN': {
         return { ...state, signed: true };
      }
      case '@auth/SIGN_OUT': {
         return { ...state, signed: false };
      }
      default: {
         return state;
      }
   }
}
